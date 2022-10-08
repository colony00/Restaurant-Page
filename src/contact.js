export default function contact() {
  const Contact = document.createElement("div");
  const title = document.createElement("h1");
  const contactCards = document.createElement("div");

  const contactOwner = contactCard("Jeff Kishener","Restaurant Owner","The restaurant is Jeff's love child.")
  const contactChef = contactCard("Fredrick Douglas","Chef","Fredrick loves procupines and pinewood - especially at 180 degrees for 4 hours.");
  const contactSomelier = contactCard("Dina Henriksen","Sommelier","Dina always has the greatest selections in wines. She is especially fond of tasting before the customer. You are advised to eat here early in the evening.")

  title.textContent = "Contacts";
  
  contactCards.classList.add("contacts");

  contactCards.appendChild(contactOwner);
  contactCards.appendChild(contactChef);
  contactCards.appendChild(contactSomelier);

  Contact.appendChild(title);
  Contact.appendChild(contactCards);
  return Contact;
}

function contactCard(fullName,job,description) {
  const card = document.createElement("div");
  const _name = document.createElement("div");
  const _job = document.createElement("div");
  const _description = document.createElement("div");

  card.classList.add("card");
  _name.classList.add("name");
  _job.classList.add("job");
  _description.classList.add("description");

  _name.textContent = fullName;
  _job.textContent = job;
  _description.textContent = description;

  card.appendChild(_name)
  card.appendChild(_job)
  card.appendChild(_description)
  
  return card;
}