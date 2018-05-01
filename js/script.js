/*global document*/
var productArr = [
    {name: "samsung", quantity: 11, price : 2000},
    {name: "iphone", quantity: 12, price : 6000},
    {name: "huawai", quantity: 0, price : 4000},
    {name: "lenovo", quantity: 5, price : 3500},
    {name: "nokia", quantity: 0, price : 9900},
    {name: "alcatel", quantity: 6, price : 4200}
];

var myProd = document.getElementById("search"),
    prodDiv = document.getElementById("yourproduct"),
    priceDiv = document.getElementById("price"),
    availableDiv = document.getElementById("available"),
    sorrymsg = document.getElementById("sorry"),
    srchbtn = document.getElementById("but"),
    resultClass = document.getElementById("innercontainerresult"),
    mobImg = document.getElementById("images"),
    avalImg = document.getElementById("avalimg"),
    mobType = document.getElementById("mob-type");


var typeArr = [];
productArr.map(function(info){
    typeArr.push(info.name);
});

mobType.innerHTML = "<span style = 'font-size: 20px; font-style : italic; color : #b8c4f9 ; font-weight: bold;'>choose your mobile : </span>" + typeArr.join('  - ');


function checkavailable(){
    sorrymsg.innerHTML = "There is no such product";
    prodDiv.innerHTML = "";
    priceDiv.innerHTML = "";
    availableDiv.innerHTML = "";
    resultClass.style.height = "0px";
    mobImg.style.height = "0px";
    avalImg.style.opacity = "0";
    
    
    productArr.forEach(function(item){
        
        if(myProd.value.toLowerCase() == item.name)
        {
            avalImg.style.opacity = "1";
           mobImg.style.height = "310px";
            resultClass.style.height = "310px";
            sorrymsg.innerHTML = "";
            prodDiv.innerHTML = "<i>Model</i>  :  " + item.name;
            priceDiv.innerHTML = "<i>Price</i> &nbsp&nbsp:   " + item.price + " $";
           
            if(item.quantity == 0)
            {
                availableDiv.classList.remove("available");
                availableDiv.classList.add("notavailable");
                availableDiv.innerHTML = "<span style = 'font-size: 32px; '>Sorry ! </span> This product is not Available.";
                avalImg.style.background = "url(images/sold.svg) no-repeat center top";
                     
            } 
            else 
            {
                availableDiv.classList.remove("notavailable");
                availableDiv.classList.add ("available");
                availableDiv.innerHTML = "Product is available.";
                
                avalImg.style.background = "url(images/available.svg) no-repeat center top";
            }
        } 
         
    });
}

myProd.addEventListener("keyup", function(){
    checkavailable();
})

srchbtn.addEventListener('click', function(){
    checkavailable();
})