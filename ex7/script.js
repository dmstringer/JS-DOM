// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var sectionHeader = document.getElementById('section-header');

sectionHeader.addEventListener('click', function(){

     var section = document.getElementById('section');
     var accordion = document.getElementById('accordion');

    //   if (section.style.display === "block") {
    //       section.style.display = "none";
    //     } else {
    //       section.style.display = "block";
    //     }
    
    if (section.style.maxHeight === "132px") {
        section.style.maxHeight = "0px";
        section.style.padding = "0px";
        accordion.style.backgroundColor = "white";
    } else {
        section.style.maxHeight = "132px";
        section.style.padding = "5px";
        accordion.style.backgroundColor = "yellow";
    }


});
