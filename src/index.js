import './style.css';
import frontPage from './frontpage';
import menuBar from './menuBar';
import menu from './menu';
import contact from './contact';

/* Initial load*/
loadFrontPage();
eventListeners();

function descidePage(page) {
  if(page === 'Home') {
    loadFrontPage();
  }
  if(page === 'Menu') {
    loadMenu();
  }
  if(page === 'Contact') {
    loadContact();
  }
}

function eventListeners() {
  const menuButtons = document.querySelectorAll(".menuItem");
  menuButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      document.body.replaceChildren();
      console.log("Old page deleted");
      descidePage(e.target.textContent);
      console.log("New Page Created");
    })
  })
}

function loadFrontPage() {
  document.body.appendChild(menuBar());
  document.body.appendChild(frontPage());
  eventListeners();
}
function loadMenu() {
  document.body.appendChild(menuBar());
  document.body.appendChild(menu());
  eventListeners();
}
function loadContact() {
  document.body.appendChild(menuBar());
  document.body.appendChild(contact());
  eventListeners();
}
