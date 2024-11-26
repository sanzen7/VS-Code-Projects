const standardShippingCost = 6
const discountedShippingCost = 4
let totalPrice;


function calcShippingCost(totalPriceParam) { 
    let shippingCost;

    if (totalPriceParam <= 10) {
        shippingCost = standardShippingCost
    } else if (totalPriceParam <=20) {
        shippingCost = discountedShippingCost
    } else {
        shippingCost = 0
    }   

    //console.log("Shipping cost for you is " + shippingCost)
    console.log(`shipping cost for you is ${shippingCost}`)
    console.log("------------------")
}

//user starts shopping
totalPrice = 10
calcShippingCost(totalPrice)
//user added more to cart
totalPrice = 24
calcShippingCost(totalPrice)



