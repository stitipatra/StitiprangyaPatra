import { useState } from "react";

interface CompanyLogoProps {
  src: string;
  company: string;
  companyShort: string;
  className?: string;
}

function CompanyLogo({
  src,
  company,
  companyShort,
  className = "",
}: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  const initials = companyShort
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-white/10 text-xl font-bold text-white ${className}`}
        aria-label={`${company} logo fallback`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl bg-white p-2 ${className}`}
    >
      <img
        src={src}
        alt={`${company} logo`}
        className="h-full w-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default CompanyLogo;
