// その場でふわっと表示
const fadeinElements = document.querySelectorAll(".scroll_fadein");

const fadeinObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is_active");
            fadeinObserver.unobserve(entry.target);
        }
    });
});

fadeinElements.forEach((element) => {
    fadeinObserver.observe(element);
});


// 下からふわっと表示
const fadeupElements = document.querySelectorAll(".scroll_fadeup");

const fadeupObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is_active");
            fadeupObserver.unobserve(entry.target);
        }
    });
});

fadeupElements.forEach((element) => {
    fadeupObserver.observe(element);
});