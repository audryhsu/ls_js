
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let left = `+-`;
    let right = `-+`;
    let middle = '-'.repeat(this.message.length);
    return left + middle + right;

  }

  emptyLine() {
    let space = ' '.repeat(this.message.length);
    return `| ${space} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}


let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();
