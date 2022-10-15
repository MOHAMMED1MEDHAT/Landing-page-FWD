/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code Sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const addedSections = Array.from(document.querySelectorAll('section'));
const navList = document.getElementById('navbar__list');
// let num = addedSections.length;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//TODO: function to add active class to the section in the viewport
function isInViewPort(section) {
    let sectionRect = section.getBoundingClientRect();
    return sectionRect.top >= 0 && sectionRect.top <= 350;
}//end of isInViewPort function

//TODO: function to remove active class from the section not in the viewport
function isNotInViewPort(section) {
    let sectionRect = section.getBoundingClientRect();
    return sectionRect.top < 0 || sectionRect.top > 350;
}//end of isNotInViewPort function

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
//TODO:function to create a new list item for each list item
function createListItems() {
    for(section of addedSections){
        //get the id and name of the section
        const secId = section.getAttribute('id');
        const secName = section.getAttribute('data-nav');
        //create listItem element
        const listItem = document.createElement('li');
        //create anchor element inside the listItem
        listItem.innerHTML = `<a class="menu__link" href="#${secId}">${secName}</a>`;
        //append listItem to the navList
        navList.appendChild(listItem);
        console.log("listItem created");
    }
}//end of createListItems function

// Add class 'active' to section when near top of viewport
//TODO: function to give the section in viewport different style
function addActiveStyle(section) {
    if(isInViewPort(section)){
        section.classList.add("your-active-class");
    }
}//end of addActiveStyle function
//TODO: function to remove the style from the section not in viewport
function removeActiveStyle(section) {
    if(isNotInViewPort(section)){
        section.classList.remove("your-active-class");
    }
}//end of removeActiveStyle function
function scrolling(){
    for(section of addedSections){
        if(isInViewPort(section)){
            addActiveStyle(section);
        }
        if(isNotInViewPort(section)){
            removeActiveStyle(section);
        }
    }
}//end of scrolling function
// Scroll to anchor ID using scrollTO event
//TODO: function to scroll to the section when the link is clicked smoothly
function scrollToSection() {
    const sectionsToScroll = document.querySelectorAll('.menu__link');
    for(sectionToScroll of sectionsToScroll){
        sectionToScroll.addEventListener('click', function(event){
            event.preventDefault();
            const section = event.target.getAttribute('href');
            document.querySelector(section).scrollIntoView({behavior: 'smooth'});
        });
    }
}//end of scrollToSection function

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
createListItems();
// Scroll to section on link click
scrollToSection();
// Set addedSections as active
document.addEventListener('scroll',scrolling);
