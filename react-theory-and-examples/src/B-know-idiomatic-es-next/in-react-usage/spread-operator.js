// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Wykorzystanie, na początek w funkcji

function make3DPoint(x, y, z) {
  return {
    x: Number(x),
    y: Number(y),
    z: Number(z),
  };
}

// Klasyczne wywołanie:
make3DPoint(20, 10, 0);
make3DPoint("20", "11", "39");

// Użycie spread operatora:
const values = [1, 2, 3];

make3DPoint(...values);

// spowoduje to przekazanie: [1,2,3] jako argumenty
// Czyli wyobraź sobie pod spodem coś takiego (dosłownie)
// make3DPoint(...values); ---> make3DPoint(1,2,3);

// Jak to wykorzystać w REACT?
// Jeśli np. chcemy do komponentu przesłać props

const pass = {
  className: "sample",
  size: 20,
  isLarge: true,
};

// potem np:

const sample = <Button {...pass} />;

// to to samo co:

const sample2 = <Button className="sample" size={20} isLarge={true} />;
