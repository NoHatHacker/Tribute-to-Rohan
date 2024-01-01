const a = document.querySelector(".nav-part1 i");
const b = document.querySelector(".nav-sidebar i");
const c = document.querySelector(".nav-part1");
const d = document.querySelector(".nav-sidebar");

a.addEventListener("click", () => {
    d.style.display = "flex";
})

b.addEventListener("click", () => {
    d.style.display = "none";
})


