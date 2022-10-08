export default function menu() {
  const Menu = document.createElement("ul");

  Menu.appendChild(menuItem("Cheese Steak","Molten cheezewiz pooren upon rare steak","£19"))
  Menu.appendChild(menuItem("Steak","Regular well-done steak","£39"))
  Menu.appendChild(menuItem("Salad","Lettuce and tomato","£10"))

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