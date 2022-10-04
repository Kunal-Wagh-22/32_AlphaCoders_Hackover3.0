document.querySelector(".carousel-item").addEventListener("mouseenter", () => {
    document.querySelector(".join-event").style.visibility = "visible";
});

document.querySelector(".carousel-item").addEventListener("mouseleave", () => {
    document.querySelector(".join-event").style.visibility = "hidden";
});

document.querySelector(".join-event").addEventListener("mouseenter", () => {
    document.querySelector(".event-img").style.filter = "blur(10px)";
    // document.querySelector(".join-event").style.visibility = "visible";
});

document.querySelector(".join-event").addEventListener("mouseleave", () => {
    // document.querySelector(".join-event").style.visibility = "hidden";
    document.querySelector(".event-img").style.filter = "blur(0px)";
});