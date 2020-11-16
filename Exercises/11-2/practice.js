/* 1) Ddefine or create */
function calculateBill() { /* Paremeters -  possible */
    /* function body */
    const total = 100 * 1.06;
    console.log(total);
    return total;
}

/* 2) Call function */

const myTotal = calculateBill();

console.log(`Your total is ${myTotal}`);
