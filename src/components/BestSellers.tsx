import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import products, { bestSellers } from "@/data/products";
import productFrontFallback from "@/assets/wellfino-product-cutout.png";

const FRONT_IMAGE_KEYS = [
  "frontImage",
  "mockupFront",
  "primaryImage",
  "imageFront",
] as const;

const processedImageCache = new Map<string, string>();

const toTransparentBackground = async (src: string) => {
  if (processedImageCache.has(src)) {
    return processedImageCache.get(src)!;
  }

  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = src;
  }).catch(() => null);

  if (!image) {
    return src;
  }

  const maxSize = 600;
  const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) {
    return src;
  }

  ctx.drawImage(image, 0, 0, width, height);

  let imageData: ImageData;
  try {
    imageData = ctx.getImageData(0, 0, width, height);
  } catch {
    // Fallback when CORS blocks canvas pixel reads.
    return src;
  }

  const { data } = imageData;
  const total = width * height;
  const visited = new Uint8Array(total);
  const queue = new Int32Array(total);
  let head = 0;
  let tail = 0;

  const corners = [
    0,
    width - 1,
    (height - 1) * width,
    (height - 1) * width + (width - 1),
  ];
  const avg = corners.reduce(
    (acc, pixelIndex) => {
      const o = pixelIndex * 4;
      acc.r += data[o];
      acc.g += data[o + 1];
      acc.b += data[o + 2];
      return acc;
    },
    { r: 0, g: 0, b: 0 }
  );
  const bg = {
    r: Math.round(avg.r / corners.length),
    g: Math.round(avg.g / corners.length),
    b: Math.round(avg.b / corners.length),
  };

  const matchesBackground = (pixelIndex: number) => {
    const o = pixelIndex * 4;
    if (data[o + 3] === 0) {
      return false;
    }
    const dr = Math.abs(data[o] - bg.r);
    const dg = Math.abs(data[o + 1] - bg.g);
    const db = Math.abs(data[o + 2] - bg.b);
    return dr + dg + db <= 72;
  };

  const enqueue = (pixelIndex: number) => {
    if (pixelIndex < 0 || pixelIndex >= total || visited[pixelIndex]) {
      return;
    }
    if (!matchesBackground(pixelIndex)) {
      return;
    }
    visited[pixelIndex] = 1;
    queue[tail++] = pixelIndex;
  };

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 1; y < height - 1; y++) {
    enqueue(y * width);
    enqueue(y * width + (width - 1));
  }

  while (head < tail) {
    const idx = queue[head++];
    const o = idx * 4;
    data[o + 3] = 0;

    const x = idx % width;
    const y = (idx - x) / width;
    if (x > 0) enqueue(idx - 1);
    if (x < width - 1) enqueue(idx + 1);
    if (y > 0) enqueue(idx - width);
    if (y < height - 1) enqueue(idx + width);
  }

  ctx.putImageData(imageData, 0, 0);
  const result = canvas.toDataURL("image/png");
  processedImageCache.set(src, result);
  return result;
};

const getFrontImage = (product: (typeof products)[number]) => {
  const productWithImages = product as (typeof products)[number] & {
    [key: string]: unknown;
    images?: Array<string | { src?: string; url?: string; alt?: string }>;
  };

  for (const key of FRONT_IMAGE_KEYS) {
    const value = productWithImages[key];
    if (typeof value === "string" && value) {
      return value;
    }
  }

  if (Array.isArray(productWithImages.images) && productWithImages.images.length > 0) {
    const frontImage = productWithImages.images.find((entry) => {
      if (typeof entry === "string") {
        return entry.toLowerCase().includes("front");
      }

      const src = (entry.src || entry.url || "").toLowerCase();
      const alt = (entry.alt || "").toLowerCase();
      return src.includes("front") || alt.includes("front");
    });

    if (typeof frontImage === "string") {
      return frontImage;
    }

    if (frontImage && typeof frontImage === "object") {
      const src = frontImage.src || frontImage.url;
      if (typeof src === "string" && src) {
        return src;
      }
    }

    const firstImage = productWithImages.images[0];
    if (typeof firstImage === "string" && firstImage) {
      return firstImage;
    }

    if (firstImage && typeof firstImage === "object") {
      const src = firstImage.src || firstImage.url;
      if (typeof src === "string" && src) {
        return src;
      }
    }
  }

  return productFrontFallback;
};

const ProductThumbnail = ({ src, alt }: { src: string; alt: string }) => {
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    let isActive = true;
    setResolvedSrc(src);

    toTransparentBackground(src).then((processedSrc) => {
      if (isActive) {
        setResolvedSrc(processedSrc);
      }
    });

    return () => {
      isActive = false;
    };
  }, [src]);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className="h-36 w-full object-contain"
      loading="lazy"
    />
  );
};

const BestSellers = () => {
  const featured = bestSellers
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as (typeof products)[number][];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Best Sellers
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          The supplements our customers reach for first — backed by research, trusted daily.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-4 rounded-2xl bg-transparent p-3">
              <ProductThumbnail
                src={getFrontImage(product)}
                alt={`${product.name} front mockup`}
              />
            </div>
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <h3 className="mb-1 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {product.name}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {product.benefit}
            </p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-lg font-bold text-foreground">{product.price}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all group-hover:shadow-md">
                <ShoppingBag className="h-3.5 w-3.5" />
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://shop.wellfino.com"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-md"
        >
          <ShoppingBag className="h-4 w-4" />
          View All Products
        </a>
      </div>
    </section>
  );
};

export default BestSellers;
