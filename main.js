const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross');
const navBar =  document.querySelector('.nav-bar');
const navUL =  document.querySelector('.nav-menu');

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
})



