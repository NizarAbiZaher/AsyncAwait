// Data
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// Promise that we will get
promise
    .then(response => response.json())
    .then(user => console.log('Nizar', user.title))
    .catch(err => console.error('ew', err))

// console.log for show. 
console.log('Elsa')

// Elsa will show first, then Nizar as it is a promsie that we will go back and get. 