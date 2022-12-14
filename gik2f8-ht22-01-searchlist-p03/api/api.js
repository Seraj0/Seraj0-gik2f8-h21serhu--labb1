const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url) 
    .then((result) => result.json())   //Innehåller array med lista av böckerna från URL
    .catch((e) => e);

  return result;
}
