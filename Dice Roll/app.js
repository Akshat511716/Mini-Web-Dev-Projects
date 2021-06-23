let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let path1 = "images/" + "dice" + randomNumber1 + ".png";

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let path2 = "images/" + "dice" + randomNumber2 + ".png";
  image1 = document.querySelectorAll("img")[0].setAttribute("src", path1);
  image1 = document.querySelectorAll("img")[1].setAttribute("src", path2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
});
