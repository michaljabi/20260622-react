// import heroImg from "./assets/hero.png";
// import { Sample } from "./common/Sample.tsx";
// import { Sample as SampleAlias } from "./common/Sample.tsx";

// import { Store } from "lucide-react";
import { Header } from "./common/Header.tsx";

import { Outlet } from 'react-router'

function App() {
  console.log(3 + 90 + 2 * 4);

  // const dynamicJSX = <span>Hello</span>;

  return (
    <div className="min-h-full">
      <Header itemsCount={90} />
      {/* <Header icon={<Store />} iconName="up" /> */}
      {/* <Header title="Product Store"/>
      <Header title="Product Site"/> */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );

  // console.log - NIE W JSX!
  // return (
  //   <>
  //     {/* <div style="background-color: red"> tak się nie da w JSX */}
  //     <div>
  //       <Sample />
  //       {/* <SampleAlias /> */}
  //       <span id={"myelement_" + 1}>Hello</span>
  //       {dynamicJSX}
  //       {<span id={"myelement_" + 2}>Hello</span>}
  //     </div>
  //     {/* <img src={heroImg} /> */}
  //   </>
  //   // <div></div>
  // );
}

export default App;

/*

// W lini z return, poza spacją MUSI być przynajmniej jeden znak tego co zwracamy!

function hello() {

  // return;
  // 90 + 1;
  return { 
    name : 'Michał' 
  }
}

hello();
*/
