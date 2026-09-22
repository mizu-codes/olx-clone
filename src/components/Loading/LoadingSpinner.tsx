type SpinnerSize = "sm" | "md" | "lg";

const SPINNER_SIZE_CLASSES: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-11 w-11 border-4",
};

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block shrink-0 animate-spin rounded-full border-gray-200 border-t-blue-600 ${SPINNER_SIZE_CLASSES[size]} ${className}`}
    />
  );
}

interface PageLoaderProps {
  label?: string;
  minHeight?: string;
  className?: string;
}

export function PageLoader({
  label,
  minHeight = "min-h-[50vh]",
  className = "",
}: PageLoaderProps) {
  return (
    <div
      className={`flex ${minHeight} flex-col items-center justify-center gap-3 px-4 text-center ${className}`}
    >
      <LoadingSpinner size="lg" />
      {label && <p className="text-sm font-medium text-gray-500">{label}</p>}
    </div>
  );
}

export default LoadingSpinner;
