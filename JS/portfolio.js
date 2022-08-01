function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event){
    if(event.target.matches("cancel") || !event.target.closest(".formOpened") && 
    !event.target.closest(".OpenFormButton") && !event.target.closest(".Contact")){
        closeForm()
    }
}, false)

function validationForm(){
    let x = document.forms["contactForm"]["firstname", "lastname", "contactnum"].value;
    if (x == "") {
      alert("Details must be filled out");
      return false;
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {slideIndex = 1};
    if(n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}