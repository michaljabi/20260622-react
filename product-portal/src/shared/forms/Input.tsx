type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  hasError?: boolean;
  error?: string;
};

const inputClasses =
  "px-3 py-2 rounded border text-sm w-full " +
  "bg-white text-slate-800 placeholder:text-slate-400 " +
  "dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 " +
  "focus:outline-none focus:ring-2";

const borderClasses = {
  normal: "border-slate-300 dark:border-slate-600 focus:ring-indigo-500",
  error: "border-red-400 dark:border-red-500 focus:ring-red-500",
};

export function Input({
  label,
  hasError,
  error,
  className,
  ...props
}: InputProps) {
  const isError = hasError || !!error;

  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && (
        <span className="text-slate-700 dark:text-slate-300">{label}</span>
      )}
      <input
        aria-invalid={isError}
        className={`${inputClasses} ${
          isError ? borderClasses.error : borderClasses.normal
        } ${className ?? ""}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
