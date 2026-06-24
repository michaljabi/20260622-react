type SelectProps = React.ComponentProps<"select"> & {
  items: string[];
  label?: string;
  hasError?: boolean;
  error?: string;
};

const selectClasses =
  "px-3 py-2 rounded border text-sm cursor-pointer " +
  "bg-white border-slate-300 text-slate-800 " +
  "dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500";

const borderClasses = {
  normal: "border-slate-300 dark:border-slate-600 focus:ring-indigo-500",
  error: "border-red-400 dark:border-red-500 focus:ring-red-500",
};

export function Select({
  items,
  label,
  hasError,
  error,
  className,
  ...props
}: SelectProps) {
  const isError = hasError || !!error;

  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && (
        <span className="text-slate-700 dark:text-slate-300">{label}</span>
      )}
      <select
        aria-invalid={isError}
        className={`${selectClasses} ${
          isError ? borderClasses.error : borderClasses.normal
        } ${className ?? ""}`}
        {...props}
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
