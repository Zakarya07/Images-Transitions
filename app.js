// Grabbing
let left_image = document.querySelector(".left .images_container");
let right_image = document.querySelector(".right .images_container");

let image = document.querySelector(".right .images_container img");// grab the element 
// _Change the background of the fade section when that reachs 425px (because the photo is not good at the phone resolution)

if (window.matchMedia("(max-width: 450px)").matches) {
  image.setAttribute("src","https://source.unsplash.com/900x1600/?canyon");
  }
  else{
    image.setAttribute("src","https://source.unsplash.com/1600x900/?canyon");
  }