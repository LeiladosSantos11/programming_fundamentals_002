// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];


function checkBook(title) {
  if (!title) throw new Error("Please provide a title");
  let result = false;
  for (let i = 0; i < catalogue.length; i++) {
      const book = catalogue[i];
      if (book.includes(title)) {
          result = true;
      }
  }
  return result;
}






if (!keyword) throw new Error("Please provide a keyword");
    if (typeof keyword !== "string") throw new Error("Please provide the title of the book");
    // Your code here
    let count = 0;
    for (let i = 0; i < catalogue.length; i++) {

        const book = catalogue[i];

        if (book.toLowerCase().includes(keyword.toLowerCase())) {
            count++;
        }
    }
    return count;



function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  // Your code here
    if (!author) throw new Error("Please provide an author");
    // Your code here
    let booksByAuthor = [];

    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];

        if (book.includes(author)) {
            let searchItem = "by";
            let indexBy = book.indexOf(searchItem);

            booksByAuthor.push(book.slice(0, indexBy - 1))
        }
    }
    return booksByAuthor;
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  // Your code here
    if (!title) throw new Error("Please provide a title");
    // Your code here
    let result;

    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];

        if (book.includes(title)) {

            const exp = /(\d+)\)$/;
            result = exp.exec(book).slice(-1);

            result = Number(result);
        }
    }

    if (typeof result === 'undefined') result = 'Not in our catalogue';

    return result;
}




function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  // Your code here
    if (!title) throw new Error("Please provide a title");
    // Your code here
    const stock = getStockCount(title);

    let result = "";
    /*
        if (stock === 0) {
            result = 'Not in Stock';
        } else if (stock >= 1 && stock <= 5) {
            result = 'Low Stock';
        } else if (stock > 5 && stock <= 10) {
            result = 'Medium Stock';
        } else if (stock > 10) {
            result = 'High Stock'
        }
    */

    switch (true) {
        case stock === 0:
            result = 'Not in Stock';
            break;
        case stock >= 1 && stock <= 5:
            result = 'Low Stock';
            break;
        case stock > 5 && stock <= 10:
            result = 'Medium Stock';
            break;
        case stock > 10:
            result = 'High Stock'
            break;
    }

    return result;
}



module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
