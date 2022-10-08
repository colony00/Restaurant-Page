import './style-menu.css'

export default function menu() {
  const Menu = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Menu";
  const menuList = document.createElement("ul");

  menuList.appendChild(menuItem("Cheese Steak","Molten cheezewiz pooren upon rare steak","£19"))
  menuList.appendChild(menuItem("Steak","Regular well-done steak","£39"))
  menuList.appendChild(menuItem("Salad","Lettuce and tomato","£10"))

  Menu.appendChild(title);
  Menu.appendChild(menuList)
  return Menu;
}

function menuItem(name, ingredients, price) {
  const Item = document.createElement("li");

  const _name = document.createElement("div");
  _name.textContent = name;
  const _ingredients = document.createElement("div");
  _ingredients.textContent = ingredients;
  const _price = document.createElement("div");
  _price.textContent = price;

  Item.appendChild(_name)
  Item.appendChild(_ingredients)
  Item.appendChild(_price)

  return Item;
}