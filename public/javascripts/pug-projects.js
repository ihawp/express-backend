const l = document.querySelectorAll('div[id^="project-"]');
const minusSvg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAlCAYAAAD4BdQJAAAAAXNSR0IArs4c6QAAAYxJREFUeF7t1LFNxEAUBNBZR4gGiOmDgC4QEYUgkXBNWE4gO6qgHWiAi05GF0ANHvltBbPvj2bM83y3ruvrGOM+HgECBLYp8JnkZczzfEzysM2MUhEgQOBf4OMyWF9JbqAQIEBg4wLfl8E6JbnaeFDxCBDYucC6rieDtfMS+D6BFgGD1XIpOQkQiMFSAgIEagQMVs2pBCVAwGDpAAECNQIGq+ZUghIgYLB0gACBGgGDVXMqQQkQMFg6QIBAjYDBqjmVoAQIGCwdIECgRsBg1ZxKUAIEDJYOECBQI2Cwak4lKAECBksHCBCoETBYNacSlAABg6UDBAjUCBismlMJSoCAwdIBAgRqBAxWzakEJUDAYOkAAQI1Agar5lSCEiBgsHSAAIEaAYNVcypBCRAwWDpAgECNgMGqOZWgBAgYLB0gQKBGwGDVnEpQAgQMlg4QIFAjYLBqTiUoAQIGSwcIEKgR+BustyRPNakFJUBgrwLvY1mW2/P5/DzGeExyvVcJ/yZAYLMCP0mO0zQdfgHdLPFwnQoKGwAAAABJRU5ErkJggg==";
const plusSvg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAACeNJREFUeF7tnU16GzcMhjXj+slCzT2y7AG68M2aPD1Fb9BbuDfotr1GZNcrS41k2fqZGRI/H0iCQpYRAQIfXoKc0Yw8rOLfQYGnp6fHYRgetHKs1+tB66Oe/T70HWR6xyLQ88/JtdlsHsZxfKR7TI78+gOubyBfeTe55PIeTEbcBFg55VyDlUvO9PNlqouC1ejiWgVYePqKgoUPH+MxwJrXUdMIAqzV6tCxhnF8lImxP+xeWBqesTSlxixCqheZlhTvfjSIrZBSz4UxS2W2A0sRbGnTYluho8UmqcF5eh2BJa9aMbAk1XJqYwDWZYHl5QYrmgikZ7Bq6W8AFhiIAu56BosrHwrEMmChouWqdByfmz7AEgqbMCsDFj5uqMc2wMrhD03Z3Fl/YAnq0wZY5rUuOkF/YAnkC7AEomVMAqzjnXe3TzfgmYB4DLACLAhI1076AEtwrjoXIrZCPFuDsibCiI6z1pl8EnNvYHFl5Y6nFL2PjkXJNDGmdbAsCq+ULGseYMUZKwuJZECAFWBJuMnadASWfMOAb4U/r7+BXnbJFvB9gDz75Sk0PrFgaSIhS4gfuNl8fxjHuzbe0nGqYfHbDRSdKGPwOJ08wjtWyde/LIVR+MZ2LEUgNU2pYE2ebp8P2vCZ95oq8eaGgZXsOpmWFB2LVzQPo2Fg2SZrix61YxFzjI51/d4SUbjuhgVYwJKefakC9OrTVYAlqBvheCPw2peJBKzEQT62wppboe2piQe+BKzEDAFWTbDmC1MHN3uw6uTFW17Y0U6uCrFJX3uzB8s2/lnvlVkOsBr6EroyC1D6A6xmwOoJq9VK9gRpXxrczK/NnMqmKSDNtquORUt52vGtzljSeKB7UiVnXYEl1dAKLGk8Pdi1DxZ42c+5uymwwHouLQImWIWiKrxk4WBVeIK0sGTZ6ZhgZf25HCAGa/57nabuvB9aQYV+4AYsS23EYM0vo6bAqrXS3YCV2su1f6TjEizic6L7gCgda7IiLJdILYzO5j2m5x4shJTRsRAqXvoIsJq5844vbk2PAdbNg3W2d12cKXRbdoDVIVg6JDB9DgTWZSolE0PM5fWMhcgdg9HUCwgsbnhtSeIVLK7qJcdXAqtkivm54GC5uvNus8jPwLKZIF/Wt7+dpb0XRZlnekH8NusHWIxbWOe+rszq3SCtI+Ss9MYdq6FME+TBO5b6txt86JZazMZg8ftIDYv2wKqhAnbOrsA6X+ecNa8Dq+QfwsQWH+FtSWcnYHEw4ct1DZbwqPU+cb0zFj91MwsnYJnlf3l4X5qGR5pjsHALOMDq8M677TJc8j69SQ6OQ0i90AwRvO6MNYnAccdCqPnmw33HQvAYYCmBmimCCViIYitTZZn3BlZJ/Z1fFbI4YQ/uDSy2AAYGJh3LIE5Tl72BVbJjpY7ypkXz4Lw3sFrQnN6xWlgGRorNgpW8d5X8MK4K368K98Ia1cyF2+12++vd3d3viGBfX1//HMfxD4Qvrz4+f/781/D09PQ4DMNNg7Xb7VYvLy+QOt7f3/9zf3//BeJs4oT3FYBNDDSvw/Pzc/lHoWixgUbli2EDVn5eUIJNurkBsPK624CVn7fnEX2ApWwOARYe8T7AUupSHaylhaFcMEpZVOZssOZzdazA/nn73Wr18vKfSsh3Y9vDOyTEIk7ewPLNhVqo6h1LncHRgaaOGtuZ+NkdC6VBS366AUso6oGpomCBJxPmbW7mFSwLIFBiR8c6nLG83CBFld3eT4AVYJlQpgerg0tlVsfKHA/iqvCNUz1YJrwvOBWe+XJmLLAy+RYBK5dQyZoszFUGrMaFgIP10/0X/28T8Ok8L3MZsPgxFrWAg2X2dENRWVSTTcGadJfG240q/TfjAAsg4pWL6FgBFp4qd4d3EwnoHYvSu4sc3o100Lm9VOfwzPuP7wt/0zl1bL1brba77ZfX19dfFrNgPO+/3W7//vTp079IRShAI+fT+lqv19/oL1NoZ2vYHveWzgEB3MsUDKBbkzfAih8FMWFyCpbjVSJVCNexDhHgOhYloUbrFR0rOhYFX/aYACvAuoAG1QCbBguVZG65ud4Kc8lV+rxpsEpp0ixYpVaWgdAysBwnPKehDqzJXaayh3cDKOgul0FggtUZUUcFdWBNytAGWKJSiYxmOWSCRWfZ08guwapcgAArrgpNEAywAH+k6aoybWyFJrjQnQZYmY51fjQnfhkcYPXwc9z0NbQ8stkzFu4sjZCJ5aNax2pJswCLxQxpcDWwSNEVGsQCK78fLm+FLa0mY21NwGpZv7nYWGDlCxJnrOUzlg0a814zc9mEcoHHHqxhHB/nVlm+QTV6gzS/AExHmHQs04hVzucp3Wy+P4zj3aPK9clY17EKLCRQnkk3NwbWvBaxFRJRY0B/O2AlRAmwiGAxht0OWAlRAiwGMcShC2Axeh5xonrD8rkEWILqEK65BF77MukSrEnh8wsMWdXYCofVavN98zCOYxtXhcjqAn1xsVwEi+sImENxV346Vr2qcGdurmNxE0BQ6AcsRLZlfDQHFjRtIqUBFlT1g7O+wSLq5R+s5RVEXFtEpd6R2X/RtfDvOGGAZf1oMr6y2aIyKEkMFQYeYJ009d+xMCghvdxOx3L2lQ65X5AHIrHJ+7odsBJa+OxYjRJ11DnAsj5j5Re3zYjK3AVYvYL1cdGfuIITIk1hFgsWZcZkMksOLv9fPc1VDD63QiEVhcywYGXubRTKiT2NBKzEI8u6J0jZ0bdpUAYsi9zVbevkQAJWIqUAq8Sdd3X9LaDsdSusJfbMvH471gxwUl11HeuWfx8r/SVAgZ7Q9hQ6sCa5zW6FUuj33jW2tZTvqmNJRbwGS/Au4fnU4DOWR6zi6YYDECU6lhR6r3bRsQIsE3YvwJo0XZ9dmC1UdCy2ZFmDNFhZ8z4GNAuW45Wu2gpLNjTLuT7AUp7aj8sMfHj3uXhVYPlMeRp1sx3LscCVwDr2H8s2xChKgIW/WbYAViMVZ8ChGRpg5dXjEkHqWHmn+RH50OuNCLDw2pPAwk/blscAC1+PGwNrvrN6BavlfYIElkUCFj6l6646WAcxWlJEquTJjgSWZhoPcknAiidI01SYg6WBspQtDSzy3VPWDVIPC09SBzZYaiHUDiRpXtlcxUADizwvDawWdCCnxB/IBos/RasWp8qKwZo0scN/ZMHCM4X3qK3aDYN1kk4M1rz6WbC0RfNgrwKrvXWSkDwRrBVYrvQB06oCCxzL5bUq/gXexXCtwKqWkFlh6I7bBIseP2Fkvm/Yg0UIs7MhlcDKF7ukzgEWXm0CWMsQTD6h8EIZg88z6THAQgh+WVgCWEuTNkiIQp/n5+fsqS55i/T44Xq9VmiqSODDFFwXobv/Aczlc2/MuU3UAAAAAElFTkSuQmCC";
let open = l[0];

l.forEach((item) => item.addEventListener('click', (event) => {

    console.log({event});




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

    /*

        Dynamically update the svgs using our two child objects and svg links*

     */
    updateSVG(updatePlusItem, minusSvg);
    updateSVG(openUpdatePlusItem, plusSvg);

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
    item.href.baseVal = svg;
    item.href.baseVal = svg;
}

/*

    Initialize first project (open and make minus svg)

 */

l[0].lastElementChild.classList.remove('display');
updateSVG(l[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild, minusSvg);
