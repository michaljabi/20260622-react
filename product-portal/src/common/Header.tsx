// Dobra praktyka w TS to pokazanie na górze komponentu jego wartości
// WEJŚCOWYCH czyli props
type HeaderProps = {
    title?: string;
    itemsCount?: number;
}

export function Header({ title = 'Product Portal', itemsCount }: HeaderProps) {
  return (
    <header className="mx-auto max-w-6xl flex items-center p-3 md:p-6 border-slate-600 border-b">
       {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator */} 
       {/* https://developer.mozilla.org/en-US/docs/Glossary/Falsy */} 
      <span className="md:text-xl lg:text-2xl mr-6">{title}{itemsCount ? '(' + itemsCount + ')' : '' }</span>
    </header>
  );
}






// Użycie na JSX można sobie "pods spodem" wyobrazić tak:
//Header({title: 'Product Portal'})
//Header({})
//Header({})