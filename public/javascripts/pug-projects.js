const l = document.querySelectorAll('div[id^="project-"]');
l[0].lastElementChild.classList.remove('display');
let open = l[0];


l.forEach((item) => item.addEventListener('click', () => {
    item.scrollIntoView({ block: "center", behavior: "smooth" });

    console.log(item);

    if (item === open) return;

    if (item.lastElementChild.classList.contains('display')) {
        item.lastElementChild.classList.remove('display');
    }
    open.lastElementChild.classList.add('display');
    open = item;

}));
