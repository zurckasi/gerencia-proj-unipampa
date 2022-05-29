const addClass = (divEvent) => {
    const element = document.querySelector(`#${divEvent}`);
    element.classList.add("animate__animated");
    const audio = document.querySelector("#soundtrack");
    audio.play();
};
const removeClass = (divEvent) => {
    const element = document.querySelector(`#${divEvent}`);
    element.classList.remove("animate__animated");
    const audio = document.querySelector("#soundtrack");
    audio.pause();
    audio.currentTime = 0;
};

transition = (divEvent) => {
    const audio = document.querySelector("audio");
    audio.play();
    const element = document.querySelector(`#${divEvent}`);
    element.classList.replace("visually-hidden", "visible");
    element.scrollIntoView({ block: "start", behavior: "smooth" });
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
