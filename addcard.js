
var addItemId = 0;
function AddToCart(item){
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText=item.children[2].innerText;
    //var select = document.createEelement('span');
    //select.innerText=item.children[2].children[1].value;
    //label.append(select);
    var delBtn=document.createElement('button');
    delBtn.innerText='delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);

}

function del (item){
    document.getElementById(item).remove();
}