// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "blue";
//         }, 1000);
//     }, 1000); 
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}
delayedColorChange("yellow", 1000, () => {
    console.log("yellow,");
});






  