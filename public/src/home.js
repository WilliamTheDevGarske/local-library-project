function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((accu, bookObj) => {
    if (bookObj.borrows[0].returned === false) {
      accu++;
    }
    return accu;
  }, 0);
}

function getMostCommonGenres(books) {
  let countObj = {};
  books.forEach((bookObj) => {
    if (countObj[bookObj.genre] != null) {
      countObj[bookObj.genre]++;
    } else {
      countObj[bookObj.genre] = 1;
    }
  });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      name: key,
      count: value,
    });
  }
  countArray.sort((a, b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooksHelper(books){
 return books.sort((eleA, eleB) => {
    return eleB.borrows.length - eleA.borrows.length;
  });
}

function getMostPopularBooks(books) {
  topBooks = getMostPopularBooksHelper(books).slice(0, 5);
  
  return topBooks.map((bookObj) => ({
    name: bookObj.title,
    count: bookObj.borrows.length,
  }));
}

function getMostPopularAuthors(books, authors) {
 
const sortedBookArr = getMostPopularBooksHelper(books).slice(0,5)

let result = [];

sortedBookArr.forEach((aBook)=>{
const authorIds = authors.filter((authObj)=>{
  return authObj.id === aBook.authorId
})
authorIds.map((authObj)=>{
  const {first,last} = authObj.name
  return result.push({
    name: `${first} ${last}`,
    count: aBook.borrows.length
      })
    })
  })
 return result
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
