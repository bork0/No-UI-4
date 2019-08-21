function mathAdd(from, to) {
    let workFrom = Math.floor(from);
    let workTo = Math.floor(to);
    let sumEven = 0;
    let sumOdd = 0;

    if ((arguments.length > 2 || arguments.length < 2) || (isNaN(from) || isNaN(to))) {
        console.log(`Error!`);
    } else {
        if (workFrom % 2 === 0) {
            sumEven = 0 - workFrom;
        } else if (workFrom % 2 !== 0) {
            sumOdd = 0 - workFrom;
        };

        for (workFrom; workFrom < to; workFrom++) {
            if (workFrom % 2 === 0) {
                sumEven += workFrom;
            } else if (workFrom % 2 !== 0) {
                sumOdd += workFrom;
            }
        }
        console.log(`Sum of even numbers is ` + sumEven + `\n` + `Sum of odd numbers is ` + sumOdd);
    }
};

mathAdd(0, 10);
mathAdd(-10, 0);
mathAdd(0.1, 10);

function tenArg(a, b, c, d, e, f, g, h, i, j) {
    let arrayArg = Array.from(arguments);
    if (arrayArg.some(isNaN)) {
        console.log('Error!');
    } else {
        if (arrayArg.length <= 10) {
            let sumOfArgs = 0;
            for (let i = 0; i < arrayArg.length; i++) {
                sumOfArgs += arrayArg[i];
            }
            console.log(sumOfArgs);
        } else if (arrayArg.length > 10) {
            console.log(arrayArg);
        }
    }
};

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else if (n >= 0 && n <= 1) {
        return 1;
    } else {
        return 'error!';
    }
    // return n ? n * factorial(n - 1) : 1;
}