// ============================ typing animation//////////
var typed = new Typed(".typing", {

    strings: ["", "Web Designer", "Web Devloper", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true

})
// ============================ ASide ===========================//////////
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
    // print anchor toag list
    // console.log(navList[i])


    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // console.log(this);



        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);

                // allSection[j].classList.add("back-section");
                // backsection class added too

            }
            navList[j].querySelector("a").classList.remove("active");

        }

        this.classList.add("active")
        showSection(this);
        // add hune rayxa class

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    })
}


function removeBackSection() {

    for (let i=0; i < totalSection; i++) {


        allSection[i].classList.remove("back-section");

    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}






function showSection(element) {

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");

    }


    // console.log(element.getAttribute("href").split("#"));
    const target = element.getAttribute("href").split("#")[1];

    // target = href[1];
    // console.log(target);

    document.querySelector("#" + target).classList.add("active")// target bata select hunxa

}

function updateNav(element) {

    for (let i = 0; i < totalNavList; i++) {

        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");


        }
    }
}



document.querySelector(".hire-me").addEventListener("click", function () {
    // console.log(this);
    const sectionIndex = this.getAttribute("data-section-index");

    ///console.log(sectionIndex);

    showSection(this);
    updateNav(this);

    removeBackSection();
    addBackSection(sectionIndex);

})


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {

    asideSectionTogglerBtn();

})
function asideSectionTogglerBtn() {

    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {

        allSection[i].classList.toggle("open");

    }
}

