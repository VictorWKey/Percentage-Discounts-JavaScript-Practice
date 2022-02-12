

function calculateDiscountedPrice(price, discount){
    const pricePercentageWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;

    return priceWithDiscount;
}

function discountedPriceResult(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "The discounted price is $" + discountedPrice;
}



