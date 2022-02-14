//OPERATION CODE

function calculateDiscountedPrice(price, discount){
    const pricePercentageWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;

    return priceWithDiscount;
}

//DISCOUNT CODE

function discountedPriceResult(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "The discounted price is $" + discountedPrice;
}

//COUPON DISCOUNT CODE


function discountedCouponPriceResult(){
    const coupons = ["youcan", "vicky", "cod"];

    var discount;

    const inputPrice2 = document.getElementById("inputPrice2");
    const priceValue2 = inputPrice2.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const couponP = document.getElementById("couponP");

    if(!coupons.includes(couponValue)){
        couponP.innerText = couponValue + " is an invalid coupon!";
        discount = 0;
    } else if (couponValue === coupons[0]) {
        discount = 15;   
        couponP.innerText = discount + "% discount applied";
    } else if (couponValue === coupons[1]){
        discount = 20;  
        couponP.innerText = discount + "% discount applied";
    } else if (couponValue === coupons[2]){
        discount = 25;
        couponP.innerText = discount + "% discount applied";
    }

    const discountedPrice2 = calculateDiscountedPrice(priceValue2, discount);

    const resultP2 = document.getElementById("resultP2");
    resultP2.innerText = "The discounted price is $" + discountedPrice2;
}

