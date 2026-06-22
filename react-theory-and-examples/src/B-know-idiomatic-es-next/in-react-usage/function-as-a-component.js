// w React funkcje pełnią istotnę rolę - tworzenia komponentów.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Możesz porównać to do takich tzw. factory function:

// A'la JSX Element:
function div(nodes = []) {
    const divElement = document.createElement('div')
    divElement.append(...nodes);
    return divElement;
}

// Komponent:
function MySample() {
    // Symulacja JSX:
    return div([
        div([
            'Hello from here'
        ])
    ])
}

// Osadzenie na drzewie DOM:
document.body.append(MySample());


// Faktycznie w REACT (jeśli mamy coś co kompiluje JSX):
function SampleComponent() {
    return <div><div>Hello from here</div></div>
}

// 💡 UWAGA - funkcja która jest komponentem - MUSI zaczynać się z dużej litery.
// sampleComponent -> źle, kompiler założy, że to "JSX.Element"

// SampleComponent -> dobrze, kompiler założy, że to Komponent

/**
 * Otwórz w Playground `typescripta`:
 * https://www.typescriptlang.org/play/?#code/GYVwdgxgLglg9mABAZQIYFsAOAbApgYTiwVzCgAoBKRAbwFgAoRZxAJ1yhFaQB4ATGADcAfPyHCAErmzY4iYKyKIAFrnY8A9AJGbtwxgF8gA
 * 
 * 
 */