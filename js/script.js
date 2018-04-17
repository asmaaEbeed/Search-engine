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
    soldImg = document.getElementById("soldimg");
//prodDiv.innerHTML = productArr[3].name;

function checkavailable(){
    
    sorrymsg.innerHTML = "There is no such product";
    
    prodDiv.innerHTML = "";
    priceDiv.innerHTML = "";
    availableDiv.innerHTML = "";
    resultClass.style.height = "0px";
    mobImg.style.height = "0px";
    soldImg.style.display = "none";
    avalImg.style.display = "none";
    
    
    productArr.forEach(function(item){
        
        if(myProd.value == item.name)
        {
         
           mobImg.style.height = "310px";
            resultClass.style.height = "310px";
            sorrymsg.innerHTML = "";
            prodDiv.innerHTML = "<i>Model</i>  :  " + item.name;
            priceDiv.innerHTML = "<i>Price</i> &nbsp&nbsp:   " + item.price + " $";
           
            if(item.quantity == 0)
            {
                availableDiv.style.color = "#eaf717";
                availableDiv.innerHTML = "<span style = 'font-size: 32px; '>Sorry ! </span> This product is not Available.";
               soldImg.style.display = "block";
                
            } 
            else 
            {
                availableDiv.style.color = "#9dffa4";
                availableDiv.style.fontSize = "24px";
                availableDiv.innerHTML = "Product is available.";
                 avalImg.style.display = "block";
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

myProd.addEventListener("keyup", function(){
    checkavailable();
})

srchbtn.addEventListener('click', function(){
    checkavailable();
})