

const tooglebtn = document.getElementById("tooglebtn");
var count=0;
// Hàm => Function
const menu = document.getElementsByClassName('menu')[0];
tooglebtn.addEventListener("click",()=>{
    if(count==0){
        menu.style.height='300px';
        count=1;
    }else{
        menu.style.height='40px';
        count=0;
    }

})

const input = document.getElementsById('name');
const btn = document.getElementsById('btn');
if(sessionStorage.getItem('list')){
    var data =JSON.parse(sessionStorage.getItem('list'));
    if (data.length>0){
        var arr=data;
    }
    else {
        var arr=[];
    }}
    else {
        var arr=[];
    }


var arr=[]
const result = document.getElementsById('list');
btn.addEvenListener('click',()=>{
    var name =input.value;
    if (name =='' ){
        alert("chua nhap ten");
    }else{
        arr.push(name);
    }
    if(!sessionStorage.getItem('list')){
    var store = JSON.stringify(arr);
     sessionStorage.setItem('list',store);}
     else {
     sessionStorage.removeItem('list');
        var store = JSON.stringify(arr);
         sessionStorage.setItem('list',store);}



    hienthi();
     })

function hienthi(){
    if(sessionStorage.getItem('list')){
    var res = sessionStorage.getItem('list');
    res =JSON.parse(res);

    }
    
    
    if(res.length>0){
        var str='';
        arr.ForEach(el => {
         str+= 
         <li> '+el+' </li>
         
         
        });
        result.innerHTML=str;
    }
}

function addToCart(){
    const button1 = document.getElementsByClassName('addToCartBtn');
    var button2 = Object.values(button1);
    const productname = document.querySelectforall('.productname.');
    const productprice = document.querySelectforall('.productprice.');
    button2.forEach(el,index);
        var arr=[];
        el.addEventListener('click',()=>
       { var item = new Object();
        item.id = index;
        item.qty = 1
        item.name=productname[index].innerText;
        item.price=productprice[index].getAttribute('data-value');
        arr.forEach (el1 =>{
            if (el1['id']==index){
                el1['qty']++;
                check = true ;}
            });
            if (check == fales ){
                arr.push(item);
            }
        console.log(arr);
        })
        
    }
addToCart ();
