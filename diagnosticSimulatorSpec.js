let Jasmine = require('jasmine');
let jasmine = new Jasmine();
// This here is the important stuff! I wouldn't mess with this. - Jerry

describe('Communications System', () => {
  it('is fully operational', () => {
    // Can't get far if the ship can't talk back!  - J
    //
    spyOn(console, 'log')
    // This helps us track what the Comm system does!

    let message = 'Ground control to major tom - Come in major tom!'
    console.log(message);
    expect(console.log).toHaveBeenCalledWith(message);
  });
});

describe('Manufacturing plant', () => {
  it('Knows how to produce Objects', () => {

    let object = {
      size: 10,
      name: 'Generic JavaScript Object #128'
    };

    expect(object.size).toEqual(10);
    expect(object.name).toEqual('Generic JavaScript Object #128');
  });
});

describe('Iterative Cortex', () => {
  it('knows how to iterate', () => {

    let array = [1, 1, 2, 3, 5, 8];
    let total = 0;

    for(let i = 0; i < array.length; i++) {
      total = total + array[i]
    }
    expect(total).toEqual(20);
  });
});

describe('Functional Mainframe', () => {

  it('knows how functions are called', () => {
    result = null;
    let testResult = () => {
      result = 4;
      return result
    };

    // I call the function, why isn't result being changed???
    testResult;

    expect(testResult()).toEqual(4);
  });
  it('knows how functions return', () => {

    let testAdder = () => {
      return 2 + 2
    };

    let four = testAdder();
    expect(four).toEqual(4);
  });
});

// This launches the Diagnostics! Shouldn't touch this, either. - The J-man
jasmine.execute();
