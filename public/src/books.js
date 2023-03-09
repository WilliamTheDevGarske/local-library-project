function findAuthorById(authors, id) {
  return (foundAuth = authors.find((authorObj) => {
    return authorObj.id === id;
  }));
}

function findBookById(books, id) {
  return (foundBook = books.find((bookObj) => {
    return bookObj.id === id;
  }));
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((bookObj) => {
    return (ifBorrowed = bookObj.borrows.some((borrowHist) => {
      return borrowHist.returned === false;
    }));
  });
  const readyBooks = books.filter((bookObj) => {
    return (ifBorrowed = bookObj.borrows.every((borrowHist) => {
      return borrowHist.returned === true;
    }));
  });
  return [borrowedBooks, readyBooks];
}

function getBorrowersForBook(book, accounts) {
  // I need to create an array that has all of the accounts that borrowed the book obj.
  // I need to look into the bookObj.borrows to get the array of account Id's that have borrowed that book.
  const { borrows } = book;
  // I then need to look into the borrowsObj.Id to get account id's
  const result = borrows.map((borrowsObj) => {
    // Then i need to look into the accounts array to find accountObj.id to match the borrowsObj.id
    let doneAccountObj = accounts.find((accountObj) => {
      // return the accountObj that matches to the array.
      return borrowsObj.id === accountObj.id;
    });
    // then add the returned:value pair to the new account obj
    // then return the modidified account obj to the new array
    doneAccountObj.returned = borrowsObj.returned;
    return doneAccountObj;
  });
  // then return sliced array from 0,11.
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
