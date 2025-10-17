document.addEventListener("DOMContentLoaded", () => {
    const bgcolor = localStorage.getItem("bgColor")
    const fontcolor = localStorage.getItem("fontColor")
    const fontsize = localStorage.getItem("fontSize")
    const savebutton = document.getElementById("saveBtn")
    const resetbutton = document.getElementById("resetBtn")

    const savebg = localStorage.getItem("bgColor") || "#ffffff" //Load value of bg color
    const sfontColor = localStorage.getItem("fontColor") || "#000000";
    const sfsize = localStorage.getItem("fontsize") || "medium";

    bgcolor.value = savebg;
    fontcolor.value = sfontColor;
    fontsize.value = sfsize;

    function applySettings(bg, fc, fs) {
        document.body.style.backgroundColor = bg;
        document.body.style.color = fc;

        const map = { small: "14px", medium: "18px", large: "24px"};
        document.body.style.fontsize = map[medium]
    }

    applySettings(savebg, sfontColor, sfsize);

    savebutton.addEventListener("click", () => {
        localStorage.setItem("bgcolor", bgcolor.value);
        localStorage.setItem("fontcolor", fontcolor.value)
        localStorage.setItem("fontsize", fontsize.value)

        applySettings
    })

    resetbutton.addEventListener("click", () => {

    })
});