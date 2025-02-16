const l = document.querySelectorAll('div[id^="project-"]');
const minusSvg = "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z";
const plusSvg = "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z";

let open = l[0];

l.forEach((item) => item.addEventListener('click', () => {

    /*

        Update h2 to be green when open.

     */
    updateToGreen(item);
    updateToGreen(open);


    /*

        Smoothly scroll the project into view

     */
    item.scrollIntoView({block: "center", behavior: "smooth"});

    /*

        If it is open don't do anything else

     */
    if (item === open) return;

    /*

        Create variables for the child svg icons updating

     */
    let updatePlusItem = item.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    let openUpdatePlusItem = open.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    console.log({updatePlusItem});
    console.log({openUpdatePlusItem});
    /*

        Dynamically update the svgs using our two child objects and svg links*

     */
    updatePlusItem.setAttribute('d', minusSvg)
    openUpdatePlusItem.setAttribute('d', plusSvg)

    /*

        Remove the display class (to show the item)
        Add the display class to open (to hide the item)

     */
    item.lastElementChild.classList.remove('display');
    open.lastElementChild.classList.add('display');

    /*

        Set open = item for next event

     */
    open = item;

}));


const updateSVG = (item, svg) => {
    item.d = svg;
}

const updateToGreen = (item) => {
    let focus = item.firstChild.firstChild.firstChild.nextSibling;
    if (focus.classList.contains('c-3')) {
        return focus.classList.remove('c-3');
    }
    focus.classList.add('c-3');
}

/*

    Initialize first project (open and make minus svg)

 */

l[0].lastElementChild.classList.remove('display');
l[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute('d', minusSvg);
updateToGreen(l[0]);
