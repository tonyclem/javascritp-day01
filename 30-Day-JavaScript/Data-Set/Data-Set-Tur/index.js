const lis = document.querySelectorAll("li");

const lis_array = Array.from(lis);

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    if (li.dataset.show === "true") {
      li.innerHTML = li.dataset.text;
    }
  });
});
