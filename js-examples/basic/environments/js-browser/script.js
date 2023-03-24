function targetHandler(element, newText){
    console.log
    element.innerHTML = newText
};

window.onload = async () => {
    let targetElement = document.getElementById("navigator-element");
    
    setTimeout(targetHandler, 3500, targetElement, "I Told You!");
};
