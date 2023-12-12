
const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross');
const navBar =  document.querySelector('.nav-bar');
const navUL =  document.querySelector('.nav-menu');
const cartBtn = document.querySelector('.cart');
const cartDetails = document.querySelector('.cart-details');
const closecartBtn = document.querySelector('.closecart-btn');


let availableItemMap= new Map();
availableItemMap.set("beans",'Beans 500gms');availableItemMap.set("beetroot",'Beetroot 500gms');availableItemMap.set("cabbage",'Cabbage each');
availableItemMap.set('cucumber','Cucumber 500gms');availableItemMap.set('bellpepper','Bell pepper 1kg');availableItemMap.set('chilli','Chilli 250gms');
availableItemMap.set('spinach','Spinach 250gms');availableItemMap.set('mushroom','Mushroom 300gms');

availableItemMap.set('blueberry','Blueberry 200gms');availableItemMap.set('jackfruit','Jackfruit each');availableItemMap.set('strawberry','Strawberry 250gms');
availableItemMap.set('pappaya','Pappaya 500gms');availableItemMap.set('apple','Apple 500gms');availableItemMap.set('nectarines','Nectarines 1kg');
availableItemMap.set('mango','Mango each');availableItemMap.set('honeyDew','Honeydew each');

availableItemMap.set('blackpepper','blackpepper 500gms');availableItemMap.set('cinnamon','Cinnamon 250gms');availableItemMap.set('cloves','Cloves 200gms');
availableItemMap.set('chillipowder','Chilli Powder 500 gms');availableItemMap.set('papparikapowder','Papparika Powder 500 gms');availableItemMap.set('fennelSeeds','Fennel Seeds 250 gms');availableItemMap.set('cardamom','Cardamom 500 gms ');availableItemMap.set('starAnise','StarAnise 500 gms');

hamburgerBtn.addEventListener('click', function(event){
    console.log('Inside the a click');
    hamburgerBtn.style.display='none';
    crossBtn.className = '';
    navBar.style.display='flex';
    navUL.style.flexDirection='column';
    navBar.style.position='absolute';
    navBar.style.top = '50px';
    navBar.style.right= '120px';
    navBar.style.border= '1px solid red';
    navUL.style.zIndex = 2;

});

crossBtn.addEventListener('click', function(event){
    crossBtn.className='cross';
    hamburgerBtn.style.display='block';
    navBar.style.display='none';
    navUL.style.flexDirection='row';
    navUL.style.zIndex = 0;
    navBar.style.position='static';
})

// contact us link
const contactUs = document.querySelector('.contact-us');
const contactUsDetails = document.querySelector('.contact-us-details');
const closeBtn = document.querySelector('.close-btn');
contactUs.addEventListener('click',function(event){
    contactUsDetails.style.display='inline-block';
})

closeBtn.addEventListener('click',function(event){
    contactUsDetails.style.display='none';
    cartDetails.style.display='none';
})

closecartBtn.addEventListener('click',function(event){
    cartDetails.style.display='none';
})



//addto cart buttons
let cartMap = new Map();
const addToCartBtn = document.querySelectorAll('.add-cart');
addToCartBtn.forEach(btn=>{
    btn.addEventListener('click',function(event){
        if(cartMap.get(event.target.id)!= undefined){
            let currentQty = cartMap.get(event.target.id);
            cartMap.set(event.target.id,currentQty+1);
        }else{
            cartMap.set(event.target.id,1);
        }
       console.log('cartMap'+JSON.stringify(cartMap));
    })
})


//display cart page

cartBtn.addEventListener('click', function(event){
    const ulCart = document.querySelector('.ul-cart');
    cartMap.forEach((value, key)=>{
       
        let label = availableItemMap.get(key);

        ulCart.innerHTML +=  '<li><span class="item-name">'+label+'</span><span class="quantity">'+value+'</span> <span class="amount"></span><li>'
    } );
    cartDetails.style.display= 'inline';
})


