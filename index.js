document.addEventListener("DOMContentLoaded", function () {
  const productOptions = document.querySelectorAll(".product-option");
  const footerTotal = document.querySelector(".footer2");

  function toggleBox(event, boxId) {
    productOptions.forEach((option) => {
      const content = option.querySelector(".box-content");
      if (option.getAttribute("data-box") === boxId) {
        option.classList.add("active");
        content.style.display = "block";
        option.style.backgroundColor = "#fff9fa";
        option.style.border = "2px solid rgba(255, 107, 130, 1)";
      } else {
        option.classList.remove("active");
        content.style.display = "none";
        option.style.backgroundColor = "white";
        option.style.border = "1px solid #ccc";
      }
    });
    updateTotal();
  }

  function updateTotal() {
    const activeBox = document.querySelector(".product-option.active");
    if (activeBox) {
      const priceElement = activeBox.querySelector(".dis-p");
      if (priceElement) {
        footerTotal.textContent = `Total: ${priceElement.textContent}`;
      }
    }
  }

  productOptions.forEach((option, index) => {
    option.setAttribute("data-box", `box${index + 1}`);
    if (index === 0) {
      option.classList.add("active");
      option.querySelector(".box-content").style.display = "block";
      option.style.backgroundColor = "#fff9fa";
      option.style.border = "2px solid rgba(255, 107, 130, 1)";
    } else {
      option.querySelector(".box-content").style.display = "none";
    }
    option.addEventListener("click", function (event) {
      toggleBox(event, `box${index + 1}`);
    });
  });

  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", updateTotal);
  });

  updateTotal();
});
