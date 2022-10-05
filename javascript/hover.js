document.querySelector(".box").addEventListener("mouseenter", () => {
    document.querySelector(".event-list").style.visibility = "visible";
});

document.querySelector(".box").addEventListener("mouseleave", () => {
    document.querySelector(".event-list").style.visibility = "hidden";
});

