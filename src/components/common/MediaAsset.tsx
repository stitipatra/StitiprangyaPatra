import { useEffect, useState } from "react";

export type MediaType = "image" | "video";

interface MediaAssetProps {
  type?: MediaType;
  src: string;
  alt: string;

  poster?: string;

  className?: string;

  loading?: "eager" | "lazy";

  preview?: boolean;
  controls?: boolean;

  onError?: () => void;
}

function MediaAsset({
  type = "image",
  src,
  alt,
  poster,
  className = "",
  loading = "lazy",
  preview = false,
  controls = false,
  onError,
}: MediaAssetProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (!src || hasError) {
    return null;
  }

  if (type === "video") {
    return (
      <video
        src={src}
        poster={poster}
        aria-label={alt}
        className={className}
        muted={preview}
        autoPlay={preview}
        loop={preview}
        playsInline
        controls={controls}
        preload={preview ? "metadata" : "none"}
        onError={handleError}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={handleError}
    />
  );
}

export default MediaAsset;
