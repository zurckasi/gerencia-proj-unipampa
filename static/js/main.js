const addClass = (divEvent) => {
    const element = document.querySelector(`#${divEvent}`);
    element.classList.add("animate__animated");
};
const removeClass = (divEvent) => {
    const element = document.querySelector(`#${divEvent}`);
    element.classList.remove("animate__animated");
};

transition = (divEvent) => {
    const element = document.querySelector(`#${divEvent}`);
    element.classList.replace("visually-hidden", "visible");
    element.scrollIntoView({ block: "center", behavior: "smooth" });
    if (divEvent == "top") {
        const divsVisible = document.querySelectorAll(".page");
        divsVisible.forEach((element) => {
            element.classList.replace("visible", "visually-hidden");
        });
    }
    const mybutton = document.querySelector("#btn-back-to-top");
    if (mybutton.classList.contains("visually-hidden")) {
        mybutton.classList.replace("visually-hidden", "visible");
    } else {
        mybutton.classList.replace("visible", "visually-hidden");
    }
};