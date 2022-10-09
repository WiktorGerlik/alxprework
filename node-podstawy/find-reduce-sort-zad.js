// ! ------- POZOSTALE FUNKCJE w PROG FUNKCYJNYM ----------

// find

// const books4 = [
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
  
//   // Find sluzy do zlapania pierwszego elementu znalezionego
  
//   const fantasyBook = books4.find(book => book.category === 'adventure')
  
//   console.log(fantasyBook)
  
//   // reduce
  
  const shopping3 = [
    {
      name: "banan",
      price: 3.99
    },
    {
      name: "Wiśnie",
      price: 19.99
    },
    {
      name: "Chleb",
      price: 4.99
    },
  ]
  
  // const price3 = shopping3.reduce((accumulator, product) => {
  //   console.log(accumulator);
  
  //   return accumulator - product.price;
  // }, 500)
  
  // console.log(price3)
  
  // // Sort
  
  // const sortedShoppingList = shopping3.sort((a, b) => {
  //   return a.name > b.name ? 1 : -1;
  // })
  
  // console.log(sortedShoppingList)
  
  // 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
  const mostExpensive = shopping3.sort((a, b) => {
    return a.price > b.price ? -1 : 1;//malejąco
    });   
  console.log(mostExpensive[0].name);
  // 2. Za pomoca funkcji find, sprawdz cene chleba
  const cenaChleba = shopping3.find(product => product.name === 'adventure')

  console.log(fantasyBook)
  // 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]
  
  //const height = [178, 164, 199];
  //const avHeight = shopping3.reduce((accumulator, product) => {
    //   console.log(accumulator);
    
    //   return accumulator - product.price;
    // }, 500)