const mybooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
function add(book){
    mybooks.push(book)
    localStorage.setItem("bookshelf", JSON.stringify(mybooks))
}
export {add, mybooks}