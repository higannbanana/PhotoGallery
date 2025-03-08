function upDate(previewPic) {

    console.log("Mouse over image:", previewPic.src);
    console.log("Alt text:", previewPic.alt);
    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = `url('${previewPic.src}')`;
    mainImage.innerText = previewPic.alt;
}

function undo() {

    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.innerText = "Hover over an image below to display here.";
}
