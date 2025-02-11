const l = document.querySelectorAll('div[id^="project-"]');
let open;



l.forEach((item) =>
    item.addEventListener('click', () => {
        item.scrollIntoView({ block: "center", behavior: "smooth" });

        if (item === open) {
            return;
        }

        if (item.classList.contains('display')) {
            item.lastElementChild.classList.remove('display');
        }
        if (open !== undefined ) open.lastElementChild.classList.add('display');
        console.log(open, item);

        open = item;
        console.log(open, item);

    })
);
