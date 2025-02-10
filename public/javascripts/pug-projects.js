const l = document.querySelectorAll('div[id^="project-"]');
let open = l[l.length - 1];



l.forEach((item, key) => {
    item.addEventListener('click', () => {
        item.scrollIntoView({ block: "center", behavior: "auto" });
        if (open !== item) {
            item.lastElementChild.classList.remove('display');
            open.lastElementChild.classList.add('display');
        }
        open = item;
    });
});
