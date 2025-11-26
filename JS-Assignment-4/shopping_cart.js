class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        if (price <= 0 || quantity <= 0) {
            console.error("Price and quantity must be positive.");
            return;
        }
        this.items.push({ name, price, quantity });
        console.log(`Added ${quantity} x ${name} to cart.`);
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    applyCoupon(couponCode) {
        const couponRegExp = /^([A-Z]{3,4})(\d{2})$/; 
        const match = couponCode.match(couponRegExp);

        let initialTotal = this.getTotal();

        if (match) {
            const discountPercentage = parseInt(match[2], 10); 
            
            if (discountPercentage > 0 && discountPercentage <= 100) {
                const discountAmount = initialTotal * (discountPercentage / 100);
                const finalTotal = initialTotal - discountAmount;
                
                console.log(`✅ Coupon ${couponCode} applied! ${discountPercentage}% discount ($${discountAmount.toFixed(2)}).`);
                return parseFloat(finalTotal.toFixed(2));
            }
        }

        console.log(`❌ Coupon ${couponCode} is invalid or expired. No discount applied.`);
        return parseFloat(initialTotal.toFixed(2));
    }
}

const myCart = new Cart();
myCart.addItem("T-Shirt", 25.00, 2);
myCart.addItem("Jeans", 50.00, 1);
myCart.addItem("Socks", 5.00, 5);

const subtotal = myCart.getTotal();
console.log(`\nSubtotal: $${subtotal.toFixed(2)}`); 

const finalTotalWithDiscount = myCart.applyCoupon("SAVE10"); 
console.log(`Final Total (SAVE10): $${finalTotalWithDiscount.toFixed(2)}`); 

const totalWithInvalidCoupon = myCart.applyCoupon("FALLSALE");
console.log(`Final Total (FALLSALE): $${totalWithInvalidCoupon.toFixed(2)}`);