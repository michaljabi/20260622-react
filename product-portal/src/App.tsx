// import heroImg from "./assets/hero.png";
import { Sample } from "./common/Sample.tsx";
// import { Sample as SampleAlias } from "./common/Sample.tsx";

function App() {
  console.log(3 + 90 + 2 * 4);

  const dynamicJSX = <span>Hello</span>;

  // console.log - NIE W JSX!
  return (
    <>
      {/* <div style="background-color: red"> tak się nie da w JSX */}
      <div>
        <Sample />
        {/* <SampleAlias /> */}
        <span id={"myelement_" + 1}>Hello</span>
        {dynamicJSX}
        {<span id={"myelement_" + 2}>Hello</span>}
      </div>
      {/* <img src={heroImg} /> */}
    </>
    // <div></div>
  );
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
