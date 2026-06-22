// import heroImg from "./assets/hero.png";
import { Sample } from "./common/Sample.tsx";
import { Sample as SampleAlias } from "./common/Sample.tsx";

function App() {
  console.log(3 + 90 + 2 * 4);

  // console.log - NIE W JSX!
  return (
    <>
      <h1>
        <Sample />
        <SampleAlias />
      </h1>
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
