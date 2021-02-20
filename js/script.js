class mathLib {
    constructor(fnum, snum, op){
        this.firstNumber = fnum;
        this.secondNumber = snum;
        this.operator = op;
    }

    add = function() {
        console.log(fnum + op + snum + "=" + (fnum + snum));
    }
    subtract = function() {
        console.log(fnum + op + snum + "=" + (fnum - snum));
    }
    multiply = function() {
        console.log(fnum + op + snum + "=" + (fnum * snum));  
    }
    divide = function() {
        console.log(fnum + op + snum + "=" + (fnum / snum));
    }

    print = function() {
        //  console.log(fnum + " " + snum + " " + op);
        console.log("hl");
    }

}

let arjunMath = new mathLib(1, 2, "+");
arjunMath.print;