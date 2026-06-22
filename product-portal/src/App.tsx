// import heroImg from "./assets/hero.png";

function App() {
  console.log(3 + 90 + 2 * 4);

  // console.log - NIE W JSX!
  return (
    <>
      <h1>
        Hello world {3 + 90 + 2 * 4} ?
        <span>
          $ <span> {"hello" + "world"} </span>
        </span>
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
