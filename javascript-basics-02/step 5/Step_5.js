
var imgs = Array.from(document.querySelectorAll("img")).forEach((element, i) => {
    element.addEventListener("mouseover", function(){
        element.src = "images/image" + (i + 1) + "_2.jpg"
    });
});