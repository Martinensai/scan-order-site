document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll("li");
    elements.forEach(el => {
        el.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#0056b3";
        });
        el.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#007bff";
        });
    });
});
