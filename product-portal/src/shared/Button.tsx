type ButtonProps = {
  children?: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  console.log(children);
  return (
    <button className="px-3 py-1 rounded border border-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 cursor-pointer">
      {children ? children : ":("}
    </button>
  );
}
