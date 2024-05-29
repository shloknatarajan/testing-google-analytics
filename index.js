let clickCounter = 0;
function handleClick() {
    console.log("click handled");
    console.log(`Click Counter: ${clickCounter}`);
    clickCounter += 1;
    gtag('event','button_click');
}