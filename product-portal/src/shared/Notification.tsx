type NotificationVariant = "default" | "success" | "info" | "danger";

type NotificationProps = {
  variant?: NotificationVariant;
  children?: React.ReactNode;
};

const baseClasses = "px-4 py-3 rounded border text-sm my-4";

const classVariants: Record<NotificationVariant, string> = {
  default:
    "bg-slate-100 border-slate-300 text-slate-800 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100",
  success:
    "bg-green-100 border-green-300 text-green-800 dark:bg-green-950 dark:border-green-800 dark:text-green-200",
  info: "bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-200",
  danger:
    "bg-red-100 border-red-300 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-200",
};

export function Notification({
  variant = "default",
  children,
}: NotificationProps) {
  return (
    <div className={`${baseClasses} ${classVariants[variant]}`}>{children}</div>
  );
}