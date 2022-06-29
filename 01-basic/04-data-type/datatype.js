// Primitive data type
    // String	    represents sequence of characters e.g. "hello"
    // Number	    represents numeric values e.g. 100
    // Boolean	    represents boolean value either false or true
    // Undefined	represents undefined value
    // Null	        represents null i.e. no value at all

// Non-primitive (reference) data type
    // Object	    represents instance through which we can access members
    // Array	    represents group of similar values
    // RegExp	    represents regular expression
    // function     represents a block of code designed to perform a particular task

    let a = 20 + 30 + ' ' + 'hello world';
    let b = 'hello world' + ' ' + 20 + 30;
    console.log('======follow the order precedence======');
    console.log(a);
    console.log(b);

    //here changing the data type dynamically that why this JS is call dynamically data type
    let myVar; //undefined
    myVar = 87;
    myVar = 'hello world'
    console.log(myVar);


