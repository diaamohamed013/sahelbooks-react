// $(document).ready(function () {
//     for (let i = 0; i < contents.length; i++) {
//         contents[0].style.display = "flex";
//         contents[1].style.display = "none";
//         contents[2].style.display = "none";
//     }
// })

// let tabs = document.querySelectorAll(".tools__nav__button");
// let tools__tool_list__item = document.querySelectorAll(".tools__tool-list__item");
// let contents = Array.from(tools__tool_list__item);


// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//         tabs.forEach(tab => {
//             tab.classList.remove("w--current")
//         });
//         tab.classList.add("w--current");
//         contents.forEach(item => item.style.display = "none");
//         contents[index].style.display = "flex";
//     })
// });

// let prevBtn = document.querySelector(".arrow_before");
// let nextBtn = document.querySelector(".arrow_next");
// var current = 0;

// function cls() {
//     for (let i = 0; i < contents.length; i++) {
//         contents[i].style.display = 'none';
//     }
// }

// function next() {
//     cls();
//     if (current === contents.length - 1) current = -1;
//     current++;

//     contents[current].style.display = 'block';
// }

// function prev() {
//     cls();
//     if (current === 0) current = contents.length;
//     current--;

//     contents[current].style.display = 'block';
// }

// function start() {
//     cls();
//     contents[current].style.display = 'block';
// }
// start();

// prevBtn.addEventListener('click', prev);
// nextBtn.addEventListener('click', next);

// new tabs code

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".homeFetTab .nav-link");
    const contentItems = document.querySelectorAll(".tab-content-item");
    const imageItems = document.querySelectorAll(".tab-image-item");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    let currentIndex = 0;

    function showTab(index) {
        currentIndex = index;

        contentItems.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });

        imageItems.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });

        buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    // Initial display
    showTab(0);

    // Tab button click
    buttons.forEach((btn, idx) => {
        btn.addEventListener("click", () => showTab(idx));
    });

    // Navigation buttons
    nextBtn.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % buttons.length;
        if (currentIndex == contentItems.length - 1) {
            nextIndex = 0;
        }
        showTab(nextIndex);
    });

    prevBtn.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        if (currentIndex == 0) {
            prevIndex = contentItems.length - 1;
        }
        showTab(prevIndex);
    });
});

