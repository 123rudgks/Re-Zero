const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/puppy.webp") {
    myImage.setAttribute("src", "images/puppy2.jpg");
  } else {
    myImage.setAttribute("src", "images/puppy.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const prevName = localStorage.getItem("name");
  const myName = prompt("Please enter your name.", prevName) || prevName;
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Puppy is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Puppy is cool, ${storedName}`;
}

myButton.onclick = setUserName;
