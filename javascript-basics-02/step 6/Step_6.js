// var change = (element, e) => {
//     element.src = "images/" + element.id + "_2.jpg";
// }

// const change2 = (element, e) => {
//     element.src = "images/" + element.id + ".jpg";
// }
// let images = Array.from(document.querySelectorAll("img"));
// images.forEach((element) => {
//     element.addEventListener("mouseenter", change.bind(this, element));
//     element.addEventListener("mouseout", change2.bind(this, element));
// });


var imgs = Array.from(document.querySelectorAll("img")).forEach((element, i) => {
    element.addEventListener("mouseover", function(){
        element.src = "images/image" + (i + 1) + "_2.jpg"
    });
});