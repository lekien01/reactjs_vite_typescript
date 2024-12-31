interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  printAuthor(): void
  printTitle(message: String): string
  printSomething: (somevalue: number) => number
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  //   price: 100
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  },

  printSomething: function (somevalue) {
    return `This is the price on the book ${somevalue}`
  },
}

// deepWork.isbn = 'somevalue'

const bookPrice = deepWork.printSomething(40)
console.log(bookPrice)
