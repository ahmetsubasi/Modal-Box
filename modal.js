const section = document.querySelector("section"),
    hireBtn = document.querySelector("#hireBtn"),
    closeBtn = document.querySelectorAll("#close");

    hireBtn.addEventListener("click", () => {
        section.classList.add("show")
    });

    closeBtn.forEach(cBtn => {
        cBtn.addEventListener("click", () =>{
            section.classList.remove("show")
        })
    })