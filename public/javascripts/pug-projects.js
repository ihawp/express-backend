const l = document.querySelectorAll('div[id^="project-"]');

let open = l[l.length - 1];

l.forEach((item) => {
    item.addEventListener('click', (event) => {

        item.scrollIntoView(true);


        event.target === item ? console.log(true) : console.log(false);
        if (open !== item) {
            item.lastElementChild.classList.remove('display');
            open.lastElementChild.classList.add('display');
        }
        open = item;
    });
});
