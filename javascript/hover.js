document.querySelector(".box").addEventListener("mouseenter", () => {
    document.querySelector(".event-date").style.visibility = "visible";
});

document.querySelector(".box").addEventListener("mouseleave", () => {
    document.querySelector(".event-date").style.visibility = "hidden";
});
document.querySelector(".box").addEventListener("mouseenter", () => {
    document.querySelector(".event-title").style.visibility = "visible";
});

document.querySelector(".box").addEventListener("mouseleave", () => {
    document.querySelector(".event-title").style.visibility = "hidden";
});

