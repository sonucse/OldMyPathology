console.log("Mosh Flower");

var addToCartButtons = document.getElementsByClassName('cart-btn shop');
for(var i = 0 ; i < addToCartButtons.length ; i++){
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}

var item = document.getElementById('item-selected');
var itemSelected = 0;


function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByTagName('h3')[0].innerText;
    // var title = shopItem.getElementsByClassName('productTitle')[0].innerText;
    
    var price = shopItem.getElementsByClassName('price')[0].innerText;
    var quantity = shopItem.getElementsByClassName('quantityInput')[0].value;
    
    var image = shopItem.getElementsByClassName('productImage')[0].src;
    
    addItemToCart(title, price,image,quantity);   
}


function addItemToCart(title, price,image,quantity ){
    itemSelected = (parseInt(itemSelected) + 1);
    item.innerText = itemSelected;

    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-item');
    var cartArea = document.getElementsByClassName('productArea')[0];
    var cartItemNames = cartArea.getElementsByClassName('productTitle');
    
    for(var i = 0; i < cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item is already added to you cart!');
            return
        }
    }
    
   
    var boxPrice = price;
    var boxQuantity = quantity;
    
        var cartRowContent = `<div class="image">
        <img class="productImage" src="${image}" height='220' width='250'>
        </div>
        <div class="content" >
        <h3 class="productTitle" >${title}</h3>
        <span >Quantity : </span>
        <input class='quantityInput' type="number" min="1" max="10" value="${boxQuantity}">
        <div class="price">Price:₹ ${price
        }</div>
        <div class='total'> Total:₹ ${boxPrice*boxQuantity}</div>
        <button class='buy' > Buy Now</button>
        <button class="remove">Remove</button>
        </div>`
        cartRow.innerHTML = cartRowContent;
        cartArea.append(cartRow);

        var removeBtn = document.getElementsByClassName('remove');
        
        for(var i =0; i < removeBtn.length ; i++){
            var btn = removeBtn[i];
            btn.addEventListener('click', removeDiv)
        }
        
    }


    function removeDiv(event){
        var buttonClick = event.target;
        if(itemSelected>0){
            itemSelected-=1;
        }if(itemSelected==0){
            itemSelected='';
            window.location.reload(true);
        }
        item.innerText=itemSelected;
        buttonClick.parentElement.parentElement.remove();

}
