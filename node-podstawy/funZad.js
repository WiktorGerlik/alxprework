// !---------------- Funkcje ------------------------

// function sumDigits(a, b) {
//     return a + b;
//   }
  
//   console.log(sumDigits(2, 3));
//   console.log(sumDigits(5, 7));
//   console.log(sumDigits(1, 10));
  
  
//   // Stworz funkcje, ktora bedzie zwracac informacje, czy w danym stringu znajduje sie dany ciag znakow
  
  
//   const isInString = (string, phrase) => {
//     return string.includes(phrase);
//   }
  
//   const includesEr = isInString('Harry Potter', 'er');
  
//   console.log(includesEr)
  
//   const searchElement = (string, phrase) => {
//     if(string.includes(phrase)) {
//       return string;
//     }
//   }
  
//   const foundElement = searchElement('Harry Potte', 'er');
  
  
//   // Uzywanie kolekcji (array obiektow) w funkcji
  
//   const books2 = [
//     {
//       name: "Harry Potter",
//       category: "adventure"
//     },
//     {
//       name: 'Alice in Wonderland',
//       category: 'fantasy'
//     },
//     {
//       name: 'Lord of the Rings',
//       category: 'fantasy'
//     }
//   ]
  
//   // PURE FUNCTION
//   const filterElements = (collection, phrase) => {
//     return collection.filter(element => {
//       return element.name.includes(phrase)
//     })
//   }
  
//   console.log(filterElements(books2, 'er'));







// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9
const multiply = (a, b) => {
    return (a*b);
     }
      
const mnozenie1 = multiply(3, 3);
      
console.log(mnozenie1);

// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

// checkLetter('Damian') -> 6

const stringLength = (string) => {
    return string.length;
    }
const checkLetter = stringLength('Damian'); 
    console.log(checkLetter);

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie,
// a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

const books3 = [
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
const findByCategory = (collection, category) => {
    return collection.filter(item => {
      return item.category === category
    })
  }
  
  console.log(findByCategory(books3, 'fantasy'));
  // 4. Rozszerz zadanie 3 o warunek, 
  //ze jesli nie znajdziemy zadnej ksiazki o podanej kategorii, to funkcja wyswietli napis "No books"
  const findByCategoryExtended = (collection, category) => {
    const filteredCollection = collection.filter(item => {
      return item.category === category
    });
  
    if(filteredCollection.length === 0) {
      return 'No Books'
    }
  
    return filteredCollection
  }
  
  console.log(findByCategoryExtended(books3, 'fantasy'));
  console.log(findByCategoryExtended(books3, 'fantas')); 