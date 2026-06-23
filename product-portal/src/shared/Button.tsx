type ButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void; 
};

// to jest tzw. DUMB Component 
export function Button({ children, onPress }: ButtonProps) {
  // console.log(children);
  return (
    <button onClick={onPress} className="px-3 py-1 rounded border border-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 cursor-pointer">
    {/* <button onClick={() => onPress?.()} className="px-3 py-1 rounded border border-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 cursor-pointer"> */}
      {children ? children : ":("}
    </button>
  );
}
