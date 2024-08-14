let displayTime = document.querySelector(".displaytime"),
  timer = document.querySelector(".timer"),
  time = document.querySelector("#time"),
  text = document.querySelector("#text"),
  btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let actualValue = time.value;
  let test = setInterval(() => {
    if (actualValue !== "") {
      actualValue--;
      console.log(actualValue);
      displayTime.innerText = actualValue;
      btn.disabled = true;
    } else {
      clearInterval(test);
    }

    if (actualValue == 0) {
      text.innerText = "Time up 👋";
      btn.disabled = false;
      clearInterval(test);
    }
    if (actualValue > 0) {
      text.innerText = "Count down intiated";
    }
  }, 1000);
});
