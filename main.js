const hamburgBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross');
const mobileMenu = document.querySelector('.ul-mobile-menu');
// const cartBtn = document.querySelector('.cart');
// const cartDetails = document.querySelector('.cart-details');
// const closecartBtn = document.querySelector('.closecart-btn');


let availableItemMap= new Map();
availableItemMap.set("beans",'Beans 500gms');availableItemMap.set("beetroot",'Beetroot 500gms');availableItemMap.set("cabbage",'Cabbage each'); availableItemMap.set("cauliflower",'Cauliflower each');
availableItemMap.set('cucumber','Cucumber 500gms');availableItemMap.set('bellpepper','Bell pepper 1kg');availableItemMap.set('chilli','Chilli 250gms');
availableItemMap.set('spinach','Spinach 250gms');availableItemMap.set('mushroom','Mushroom 300gms');

availableItemMap.set('blueberry','Blueberry 200gms');availableItemMap.set('jackfruit','Jackfruit each');availableItemMap.set('strawberry','Strawberry 250gms');
availableItemMap.set('pappaya','Pappaya 500gms');availableItemMap.set('apple','Apple 500gms');availableItemMap.set('nectarines','Nectarines 1kg');
availableItemMap.set('mango','Mango each');availableItemMap.set('honeyDew','Honeydew each');

availableItemMap.set('blackpepper','blackpepper 500gms');availableItemMap.set('cinnamon','Cinnamon 250gms');availableItemMap.set('cloves','Cloves 200gms');
availableItemMap.set('chillipowder','Chilli Powder 500 gms');availableItemMap.set('papparikapowder','Papparika Powder 500 gms');availableItemMap.set('fennelSeeds','Fennel Seeds 250 gms');availableItemMap.set('cardamom','Cardamom 500 gms ');availableItemMap.set('starAnise','StarAnise 500 gms');

if(hamburgBtn){
    hamburgBtn.addEventListener('click', function(event){
        console.log('Inside the a click');
        hamburgBtn.style.display='none';
        crossBtn.className = '';
        mobileMenu.style.display='flex';
        mobileMenu.style.flexDirection='column';
        mobileMenu.style.zIndex='2';
    });
}

if(crossBtn){
    crossBtn.addEventListener('click', function(event){
        crossBtn.className='cross';
        hamburgBtn.style.display='block';
        mobileMenu.style.display='none';
    })
}


//  contact us link
const contactUs = document.querySelector('.contact-us');
const contactUsDetails = document.querySelector('.contact-us-details');
const closeBtn = document.querySelector('.close-btn');

if(contactUs){
    contactUs.addEventListener('click',function(event){
        contactUsDetails.style.display='inline-block';
    })
}

if(closeBtn){
    closeBtn.addEventListener('click',function(event){
        contactUsDetails.style.display='none';
    })
}



let cartMap = new Map();


const cartBtn= document.querySelector('.cart')
const addToCartBtns = document.querySelectorAll('.add-cart');
const closeCartBtn = document.querySelector('.closecart-btn');
const cartDetails = document.querySelector('.cart-details');
const table = document.querySelector('#cart-table');
if(addToCartBtns){
    addToCartBtns.forEach(btn=>{
        btn.addEventListener('click',function(event){
            if(cartMap.get(event.target.id)!= undefined){
                let currentQty = cartMap.get(event.target.id);
                cartMap.delete (event.target.id);
                cartMap.set(event.target.id,currentQty+1);
            }else{
                cartMap.set(event.target.id,1);
            }
        })
    })
}



//display cart page

if(cartBtn){
    cartBtn.addEventListener('click', function(event){
    //     const ulCart = document.querySelector('.ul-cart');
        const cartDetails1 = document.querySelector('.cart-details');
        const table = document.querySelector('#cart-table');
        cartMap.forEach((value, key)=>{
            let label = availableItemMap.get(key);
            let row = table.insertRow(-1);
            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);
            c1.innerText = label;
            c2.innerText = value;
            c3.innerText = value*5;
            // ulCart.innerHTML +=  '<li><span class="item-name">'+label+'</span><span class="quantity">'+value+'</span> <span class="amount"></span><li>'
        } );
        if(cartDetails1){
            cartDetails1.style.display= 'inline';
        }
       
    });
}



if(closeCartBtn){
    closeCartBtn.addEventListener('click', function(event){
        cartDetails.style.display= 'none';
        let x = document.querySelector('#cart-table').rows.length;
        if(x>1){
            for(let i=1; i < x;i++){
                table.deleteRow(1);
            }
        }
})
}



