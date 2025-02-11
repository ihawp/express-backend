const l = document.querySelectorAll('div[id^="project-"]');
let open;



l.forEach((item) =>
    item.addEventListener('click', () => {

        item.scrollIntoView({ block: "nearest", behavior: "auto" });

        if (open !== item)
            item.lastElementChild.classList.remove('display');
            if (open !== undefined ) open.lastElementChild.classList.add('display');

        open = item;
    })
);
