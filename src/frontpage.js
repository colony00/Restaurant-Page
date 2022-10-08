import Steak from './loija-nguyen-NYBnDWeOX2c-unsplash.jpg';

export default function frontPage() {
  const frontpage = document.createElement('div');
  const title = document.createElement("h1");
  const steakPic = new Image();
  const imageDiv = document.createElement("div");
  const byline = document.createElement("a");
  const sellingpoint = document.createElement("p");

  title.textContent = "High Steaks"

  imageDiv.classList.add("imageDiv")
  steakPic.src = Steak;
  steakPic.alt = "Photo of a steak"
  
  byline.href = "https://unsplash.com/@loija?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  byline.textContent = "Photo by Loija Nguyen"

  imageDiv.appendChild(steakPic)
  imageDiv.appendChild(byline)

  sellingpoint.textContent = "This restaurant is the very most amazing restaurant in the entire world. You always know it is going to be high stakes and deliscious steak."

  frontpage.appendChild(title);
  frontpage.appendChild(imageDiv)
  frontpage.appendChild(sellingpoint)

  return frontpage;
}