function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";

  applyTheme(savedTheme);

  for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  document.querySelector("#selTheme").addEventListener("change", function () {
    localStorage.setItem("theme", this.value);
    applyTheme(this.value);
  });
});

  // Function
  function toFahrenheit() {
    const input = document.getElementById("celsius").value.trim();
    const insert = document.getElementById("result");

    let num = parseFloat(input); // 22.5
    let result11 = num * 1.8 + 32;
    let result = Math.round(result11);

    if (input == "") {
      insert.innerHTML = "Please, enter a number";
    } else {
      if (isNaN(input)) {
        insert.innerHTML = "Input must be a valid number";
      } else {
          insert.innerHTML = "<strong>" + input + "&#8451;</strong> is <strong>"
          + result + "&#8457;</strong>";
      }
    }
  }
  function toCel() {
    const input = document.getElementById("far").value.trim();
    const insert = document.getElementById("result1");

    let num = parseFloat(input); // 22.5
    let result11 = ((num - 32) * 5)/9;
    let result1 = Math.round(result11);


    if (input == "") {
      insert.innerHTML = "Please, enter a number";
    } else {
      if (isNaN(input)) {
        insert.innerHTML = "Input must be a valid number";
      } else {
          insert.innerHTML = "<strong>" + input + "&#8457;</strong> is <strong>"
          + result1 + "&#8451;</strong>";
      }
    }
  }