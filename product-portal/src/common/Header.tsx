
export function Header(props: {title: string}) {
  return (
    <header className="mx-auto max-w-6xl flex items-center p-3 md:p-6 border-slate-600 border-b">
      <span className="md:text-xl lg:text-2xl mr-6">{props.title}</span>
    </header>
  );
}






// Użycie na JSX można sobie "pods spodem" wyobrazić tak:
//Header({title: 'Product Portal'})
//Header({})
//Header({})