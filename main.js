var mune = document.getElementById("nav-side");

function closemune(){
  mune.style.right="-500vh";
 
}


function openmune(){
  
  mune.style.right = "0%" ;
  mune.style.display = "block" ;
  
}

let image =document.getElementById('image');
let images = ['school.jpg','image1.jpg','image2.jpg','image4.jpg']
setInterval(function(){
  let random = Math.floor(Math.random() * 4 );
  image.src =images[random];
}, 800);

