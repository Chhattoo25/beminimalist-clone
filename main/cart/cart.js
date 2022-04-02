
var cartList= JSON.parse(localStorage.getItem("cart"))||[];
let perent = document.getElementById("showdata");

if(cartList.length!=0){
    let subtotal=0;

cartList.forEach(elem => {
let div = document.createElement("div");
let div1 = document.createElement("div");
let div2 =document.createElement("div");
div2.setAttribute("id","btndiv");

let div3 =document.createElement("div");

let div4 =document.createElement("div");
div4.setAttribute("id","gappend")

let div5 = document.createElement("div");
div5.setAttribute("id","gprice")
//product img
let img = document.createElement("img");
img.src=elem.image;
//product name
let pname = document.createElement("p");
pname.innerHTML=elem.prods;
//product price
let pr = document.createElement("p");
pr.innerHTML=elem.originalPrice;

//increase decrease button 
let btn1= document.createElement("button");
btn1.addEventListener("click",()=>{
    
    decrease(elem);
    
    
})

let btn2=document.createElement("button");
btn2.addEventListener("click",()=>{
    increase(elem);
    
})

btn1.innerHTML='-';
btn2.innerHTML='+';

let quantity=document.createElement("p");
quantity.innerHTML=elem.qty;

total = Number(elem.price)*elem.qty;
//appending

div.append(img)
div1.append(pname,pr);
div5.append(div,div1)
div2.append(btn1,quantity,btn2);
div3.append(`₹ ${total}`);
div4.append(div5,div2,div3);
perent.append(div4)

subtotal=total+subtotal;
});

let gmain = document.getElementById("gsubmit");
let p = document.createElement("p");
let at = document.createElement("h4");
let submit = document.createElement("button");
submit.addEventListener("click",function(){
    
window.location.href="./checkout.html";
})

p.innerHTML="Taxes and shipping calculated at checkout";
submit.innerHTML="Check out";
at.innerHTML=`₹ ${subtotal}`;
gmain.append(at,p,submit);

}

else{
let heading = document.createElement("h4");
let a = document.createElement("a");
a.innerHTML="Continue Shopping";
heading.innerHTML="Your cart is currently empty."
perent.append(heading,a);
}



 function decrease(elem){
elem.qty--;

if(elem.qty==0){
   elem.qty=1;
}
else{
    addToCart(elem);
    location.reload();
}

}
function increase(elem){
    elem.qty++;
addToCart(elem);
location.reload();
}


function addToCart(elem) {
  if(cartList.length==0){
    cartList.push(elem);
    localStorage.setItem("cartList",JSON.stringify(cart));
    
  }else{
    var check = check_already_existing(elem);
    if(check==0){
      cartList.push(elem);
      localStorage.setItem("cartList",JSON.stringify(cart));
      
    }
  } 
}


function check_already_existing(elem){
  for(var i=0;i<cartList.length;i++){
    if(cartList[i].name==elem.name){
        
        localStorage.setItem("cartList",JSON.stringify(cart));
      return 1;
    }
  
  }
  return 0;
}



















