// create a sales receipt summary given subtotal and tax rate

function calculateSalesTax(subtotal, taxRate) {
    const taxTotal = subtotal * taxRate;
    return taxTotal; //return subtotal*taxRate could be written like this
}

const TAX_RATE = 0.07; // for Palm Beach county FL US
const customerSubtotal = 17.25;

//calculate
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE);
const customerTotal = customerSubtotal + customerTaxTotal;

//const roundedTotal = Math.round(customerTotal * 100) / 100

// outputs
console.log(`Subtotal        $${customerSubtotal.toFixed(2)}`);
console.log(`Tax             $ ${customerTaxTotal.toFixed(2)}`);
console.log(`----------------------`);
console.log(`TOTAL           $${customerTotal.toFixed(2)}`)