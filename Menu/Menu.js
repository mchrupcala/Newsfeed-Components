/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>   */

  window.addEventListener("load", function(event){

    let hamburger1 = document.querySelector('.menu-button');

  function createMenu(newArray) {

  //create the HTML structure.
  const menu = document.createElement('div');
  const uList = document.createElement('ul');
  const listItem = document.createElement('li');
  menu.appendChild(uList);
  uList.appendChild(listItem);

  // console.log(menu);

  //Add classes.
  menu.classList.add('menu');

  //Iterate & create a list item for every menu item.
  for (let i = 0; i < newArray.length; i++) {
    let item = document.createElement('li');
    item.appendChild(newArray[i]);
  }

  //Select the menu button currently on the DOM.
  const hamburger = document.querySelector('.menu-button');

  console.log(hamburger);
  //Add a click handler to toggle 'menu-open'.
  hamburger.addEventListener('click', e => {
    // console.log('button clicked', e.target)
    menu.classList.toggle('menu--open');
    // console.log(menu);
  })

  return menu;

}
    hamburger1.appendChild(createMenu(menuItems));
  });

  /*
  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

