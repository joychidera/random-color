const containerEI = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEI = document.createElement
  ("div");
  colorContainerEI.classList.add
  ("color-container");
  containerEI.appendChild
(colorContainerEI);

}

const colorContainerEIs = 
document.querySelectorAll(".color-container")

generatecolors();

function generatecolors() {
colorContainerEIs.forEach((colorContainerEI)=> {
  const newColorCode = randomcolor();
  colorContainerEI.style.backgroundColor = "#" + newColorCode;
  colorContainerEI.innerText = "#" + newColorCode
})
}
  

function randomcolor(){
  const chars = "0123456789abcdef"
  const colorcodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorcodeLength; index++) {
    const randomNum =Math.floor (Math.random() *
    chars.length);
    colorCode += chars.substring(randomNum,
      randomNum + 1);
  }
  return colorCode;
}