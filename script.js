
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const arrowIcon = document.querySelector(".dropdown a .ast-icon.icon-arrow");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        this.querySelector(".dropdown-menu").classList.toggle("show");
        arrowIcon.classList.toggle("rotate");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        document.querySelector(".dropdown-menu").classList.remove("show");
        arrowIcon.classList.remove("rotate");
    });
});

// for changing values dynamically of stats section
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("stats-table");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(table); // Ensure counting happens only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(table);

    function startCounting() {
        let tds = document.querySelectorAll("#stats-table td");
        let maxCount = Math.max(...Array.from(tds).map(td => parseInt(td.getAttribute("data-count"))));
        let duration = 2000; // Total animation time in milliseconds
        let steps = 50; // Number of steps to reach final value
        let intervalTime = duration / steps; // Time per step

        let stepCounts = Array.from(tds).map(td => parseInt(td.getAttribute("data-count")) / steps);
        let currentCounts = Array(tds.length).fill(0);

        let interval = setInterval(() => {
            let allComplete = true;

            tds.forEach((td, index) => {
                currentCounts[index] += stepCounts[index];

                if (currentCounts[index] >= parseInt(td.getAttribute("data-count"))) {
                    currentCounts[index] = parseInt(td.getAttribute("data-count"));
                } else {
                    allComplete = false;
                }

                td.innerText = Math.round(currentCounts[index]).toLocaleString() + "+";
            });

            if (allComplete) clearInterval(interval);
        }, intervalTime);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Clientele section loaded successfully!");
});


// document.addEventListener("DOMContentLoaded", function () {
//     const dropdown = document.querySelector(".dropdown");
//     const arrowIcon = document.querySelector(".dropdown a .ast-icon.icon-arrow");

//     dropdown.addEventListener("click", function (event) {
//         event.stopPropagation();
//         this.querySelector(".dropdown-menu").classList.toggle("show");
//         arrowIcon.classList.toggle("rotate");
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener("click", function () {
//         document.querySelector(".dropdown-menu").classList.remove("show");
//         arrowIcon.classList.remove("rotate");
//     });

//     // Animate Service Boxes on Scroll
//     const serviceBoxes = document.querySelectorAll(".service-box");

//     function showBoxes() {
//         serviceBoxes.forEach((box) => {
//             const boxTop = box.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
//             if (boxTop < windowHeight - 50) {
//                 box.classList.add("visible");
//             }
//         });
//     }

//     // Run on Load and Scroll
//     showBoxes();
//     window.addEventListener("scroll", showBoxes);
// });
