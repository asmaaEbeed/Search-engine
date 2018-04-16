/*global document*/
var productArr = [
    {name: "samsung", quantity: 11, price : 2000},
    {name: "iphone", quantity: 12, price : 6000},
    {name: "asus", quantity: 0, price : 4000},
    {name: "lenovo", quantity: 5, price : 3500},
    {name: "mac", quantity: 0, price : 9900},
    {name: "hp", quantity: 6, price : 4200}
];

var myProd = document.getElementById("search"),
    prodDiv = document.getElementById("yourproduct"),
    priceDiv = document.getElementById("price"),
    availableDiv = document.getElementById("available"),
    sorrymsg = document.getElementById("sorry"),
    srchbtn = document.getElementById("but");

//prodDiv.innerHTML = productArr[3].name;

function checkavailable(){
    sorrymsg.innerHTML = "There is no such product";
    
    prodDiv.innerHTML = "";
    priceDiv.innerHTML = "";
    availableDiv.innerHTML = "";

    productArr.forEach(function(item){
        
        
        if(myProd.value == item.name)
        {
            sorrymsg.innerHTML = "";
            prodDiv.innerHTML = item.name;
            priceDiv.innerHTML = item.price + " $";
           
            if(item.quantity == 0)
            {
                availableDiv.innerHTML = "Sorry This product is not Available";
            } 
            else 
            {
                availableDiv.innerHTML = "Product is available";
            }
           
        } else{
//            prodDiv.innerHTML = "";
//            priceDiv.innerHTML = "";
//            availableDiv.innerHTML = "";
        }
         
        });
   
    
  // prodDiv.innerHTML = myProd.value; 
  //prodDiv.innerHTML = "ilove";
}
/*
myProd.addEventListener("keyup", function(){
    checkavailable();
})
*/
srchbtn.addEventListener('click', function(){
    checkavailable();
})