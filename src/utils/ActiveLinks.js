const activeLinks = document.querySelector(".icon_link");

activeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activeLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
