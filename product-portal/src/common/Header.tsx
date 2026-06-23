/*
Trick, żeby pozbyć się komunikatów o błędach jeśli nie użyjemy Zap!

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
*/
import { Zap } from 'lucide-react'

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
   
      <div className="mr-3 bg-indigo-300 text-black p-1 px-2 rounded">
        <Zap />
      </div>
       <span className="md:text-xl lg:text-2xl mr-6">{title}{itemsCount ? '(' + itemsCount + ')' : '' }</span>
    </header>
  );
}






// Użycie na JSX można sobie "pods spodem" wyobrazić tak:
//Header({title: 'Product Portal'})
//Header({})
//Header({})