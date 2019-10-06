const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });


    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    

    test("return true when a book or partial match is found, ignore case", () => {
      expect(catalogueService.checkBook("great expectations")).toBe(true);
  });

  test("return true when a book or partial match is found, ignore case", () => {
    expect(catalogueService.checkBook("gREat expectations")).toBe(true);
});

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });

  });



describe("catalogueService.countBooksByKeyword", () => {
  test("returns the numbers of titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });

  test("returns 0 when the keyword is not found", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });

  test("returns an error if a number is passed", () => {
      expect(() => {
          catalogueService.countBooksByKeyword(222);
      }).toThrow("Please provide the title of the book");
  });

  test("returns an error if a boolean is passed", () => {
      expect(() => {
          catalogueService.countBooksByKeyword(true);
      }).toThrow("Please provide the title of the book");
  });

  test("returns an error if a boolean is passed", () => {
      expect(() => {
          catalogueService.countBooksByKeyword(["book"]);
      }).toThrow("Please provide the title of the book");
  });
});
});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns an array with the books by author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
          "A Tale of Two Cities",
          "Oliver Twist",
          "Great Expectations"
      ]);
  });

  test("returns an array with the books by author", () => {
      expect(catalogueService.getBooksByAuthor("Paquito")).toEqual([

      ]);
  });

  test("returns an array with the books by author", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
          "A Tale of Two Cities",
          "Oliver Twist",
          "Great Expectations",
          "The Origin of Species"
      ]);
  });

  test("returns false when a book cannot be found by title", () => {
    expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
});

describe("catalogueService.getStockCount", () => {
  test("returns an array with the books by author", () => {
      expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
  });

  test("returns true when a partial match is found", () => {
    expect(catalogueService.checkBook("Expectations")).toBe(true);
  test("returns 0 when the book is out of stock", () => {
      expect(catalogueService.getStockCount("Dracula")).toBe(0);
  });

  test("returns false when not even a partial match is found", () => {
    expect(catalogueService.checkBook("The Wind")).toBe(false);
  test("returns 'Not in our catalogue' when the book is not in the catalogue", () => {
      expect(catalogueService.getStockCount("The Great Gatsby")).toBe('Not in our catalogue');
  });
});

});

describe("catalogueService.stockReview", () => {
  test("returns 'Not in Stock' when the book is out of stock", () => {
      expect(catalogueService.stockReview("Dracula")).toBe('Not in Stock');
  });

  test("returns 'Low Stock' when the stock is between 1-5", () => {
      expect(catalogueService.stockReview("Great Expectations")).toBe('Low Stock');
  });

  test("returns 'Medium Stock' when the stock is between 6-10", () => {
      expect(catalogueService.stockReview("The Blind Assassin")).toBe('Medium Stock');
  });

  test("returns 'High Stock' when the stock is between 6-10", () => {
      expect(catalogueService.stockReview("Wolf Hall")).toBe('High Stock');
  });
}); 