// Mamy listę ksiązek

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure
// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'
// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

const books = [
    {
      name: "Harry Potter",
      category: "adventure"
    },
    {
      name: 'Alice in Wonderland',
      category: 'fantasy'
    },
    {
      name: 'Lord of the Rings',
      category: 'fantasy'
    }
  ]

  let advBooks = books.filter(book => {
    return book.category.includes('adventure');
  })
  
  console.log(advBooks);

//2
  let erBooks = books.filter(book => {
    return book.name.includes('er');
  })
  
  console.log(erBooks);
//3
const letterFromBooks = books.map(book => {
  return book.name.length
});
console.log(letterFromBooks);