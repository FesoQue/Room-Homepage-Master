const item = [
    {
        id: 1,
        img: "./images/mobile-image-hero-1.jpg",
        heading: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        
    },
    {
        id: 2,
        img: "./images/mobile-image-hero-2.jpg",
        heading: " We are available all across the globe",
        text: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        
    },
    {
        id: 3,
        img: "./images/mobile-image-hero-3.jpg",
        heading: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        
    },
]

// **** SELECTORS ****
const nav = document.querySelector('.nav');
const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-nav');
const heroBg = document.querySelector('.hero-bg')
const contentHeading = document.querySelector('.content-header')
const contentText = document.querySelector('.content-text')
const prevBtn = document.querySelector('.prev-arrow')
const nextBtn = document.querySelector('.next-arrow')
const modal = document.querySelector('.modal')


openMenu.addEventListener('click', (e) => {
    if (!nav.classList.contains('show-nav')) {
        nav.classList.add('show-nav');
        modal.classList.add('show-modal')
    }

    // const el = e.target.dataset.id;
    // if(el === 'ham') {
    //     // e.target.dataset.id = 'burger';
    //     nav.classList.add('show-nav');
    //     modal.classList.add('show-modal')
    //     modal.style.transform = "translateY(0)"
    // } 
})
closeMenu.addEventListener('click', () => {
    if (nav.classList.contains('show-nav')) {
        nav.classList.remove('show-nav');
        modal.classList.remove('show-modal')
    }
})

// **** FUNCTIONS ****
let initialCount = 0;

function displayItem (showItem) {
   let review = item[showItem]
   heroBg.src = review.img
   contentHeading.textContent = review.heading
   contentText.textContent = review.text
}

nextBtn.addEventListener('click', nextBtnClickHandler);
prevBtn.addEventListener('click', prevBtnClickHandler);

function nextBtnClickHandler () {
    initialCount++;
    if (initialCount > item.length - 1) {
        initialCount = 0;
    }
    displayItem(initialCount)
}
nextBtnClickHandler();

function prevBtnClickHandler () {
    initialCount--;
    if (initialCount < 0) {
        initialCount = item.length - 1;
    }
    displayItem(initialCount)
}
prevBtnClickHandler();
