// !---------------- Funkcje ------------------------

function sumDigits(a, b) {
    return a + b;
  }
  
  console.log(sumDigits(2, 3));
  console.log(sumDigits(5, 7));
  console.log(sumDigits(1, 10));
  
  
  // Stworz funkcje, ktora bedzie zwracac informacje, czy w danym stringu znajduje sie dany ciag znakow
  
  
  const isInString = (string, phrase) => {
    return string.includes(phrase);
  }
  
  const includesEr = isInString('Harry Potter', 'er');
  
  console.log(includesEr)
  
  const searchElement = (string, phrase) => {
    if(string.includes(phrase)) {
      return string;
    }
  }
  
  const foundElement = searchElement('Harry Potte', 'er');
  
  
  // Uzywanie kolekcji (array obiektow) w funkcji
  
  const books2 = [
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
  
  // PURE FUNCTION
  const filterElements = (collection, phrase) => {
    return collection.filter(element => {
      return element.name.includes(phrase)
    })
  }
  
  console.log(filterElements(books2, 'er'));