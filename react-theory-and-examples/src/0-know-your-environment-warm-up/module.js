/**
 * Ta wartość jest prywatna, ponieważ module.js jest naprawdę traktowany,
 * jako moduł.
 *
 * Ma dostęp do zakresu globalnego, jednak to, co się znajduje w środku tego pliku,
 * to zakres lokalny modułu. Niedostępny dla innych (importujących go) modułów.
 * */

const privateVariable = 'Hello';
