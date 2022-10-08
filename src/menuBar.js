export default function menuBar() {
  const bar = document.createElement("div");
  bar.classList.add("menuBar");
  
  const menu = barButton("Menu");

  const home = barButton("Home");

  const contact = barButton("Contact");

  bar.appendChild(home);
  bar.appendChild(menu);
  bar.appendChild(contact);
  return bar;
}

function barButton(page) {
  const btn = document.createElement("div");
  btn.textContent = page;
  btn.classList.add("menuItem")
  
  return btn;
}
