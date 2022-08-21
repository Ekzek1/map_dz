export default class ErrorRepository {
  constructor() {
    this.errorList = new Map([
      [102, 'Processing'],
      [204, 'No content'],
      [305, 'Use Proxy'],
      [404, 'Not found'],
      [500, 'Internal Server Error'],
    ]);
  }

  translate(code) {
    return this.errorList.has(code) ? this.errorList.get(code) : 'Unknown error';
  }
}

const error = new ErrorRepository();
console.log(error.translate(102));
let answere = new ErrorRepository();
answere = answere.translate(102);
console.log(answere);
