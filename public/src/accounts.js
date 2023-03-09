function findAccountById(accounts, id) {
  return foundAcc =  accounts.find((accountObj)=>{
    return accountObj.id === id;
      })
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountObjA,accountobjB)=>{
return accountObjA.name.last > accountobjB.name.last ? 1:-1 ;
})
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  let count = books.reduce((accu,bookObj)=>{
  let matchedUserBorrow = bookObj.borrows.filter((borrowsObj)=>{
    return borrowsObj.id === id;
  })
  return accu + matchedUserBorrow.length;
},0)
return count;
}


function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account;
  const usersCheckedOutArr = books.filter((bookObj)=>{
     const foundBook = bookObj.borrows[0].id === id && bookObj.borrows[0].returned === false;
     const authorInfo = authors.find((authorObj)=>{
      return authorObj.id === bookObj.authorId;
     })
     bookObj.author = authorInfo;
     return foundBook 
})
return usersCheckedOutArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
