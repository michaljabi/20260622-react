export function Sample() {
  const text = "Pierwszy!";

  return (
    <div
      style={{
        backgroundColor: "#285a20",
        color: "white",
        padding: "1em",
        fontSize: "20px",
      }}
    >
      {text}
    </div>
  );
}

/**
 * PascalCase - komponenty
 * camelCase - funkcje zwykłe
 * kebab-case - czasem w nazwach CSS (i atrybutach HTML) | nie można używać w stylach JSX
 * snake_case - również CSS, nazwy klas
 */

// export default Sample;

// Wnioskowanie typów tzw. Type Inference w TypeScript (najedź na nazwę funkcji kursorem)
function typeInferenceOnHover(a: string) {
  return a + "890";
}
typeInferenceOnHover("?");
