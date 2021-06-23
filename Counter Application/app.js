let count = 0;

const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (n) {
    const styles = n.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
