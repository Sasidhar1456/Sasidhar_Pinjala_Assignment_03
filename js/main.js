function myadd(){
    let x = document.getElementById("cart");
    let a = x.textContent;
    let n = Number(a);
    n += 1;
    console.log(n)
    document.getElementById("cart").innerHTML = n;
   }

   function buy(){
    let x = document.getElementById("cart");
    let a = x.textContent;
    let n = Number(a);
    if(n === 0){
        alert("Your cart is empty. Please add items to your cart before buying.")
    }
    else{
        document.getElementById("cart").innerHTML = 0; 
        alert("Your order has been placed. Thank you for shopping with us!")
    }
   } 