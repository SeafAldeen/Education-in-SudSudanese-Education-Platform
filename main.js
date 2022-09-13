var mune = document.getElementById("nav-side");

function closemune(){
  mune.style.right="-500vh";
 
}


function openmune(){
  
  mune.style.right = "0%" ;
  mune.style.display = "block" ;
  
}

let image =document.getElementById('image');
let images = ['./images/school.jpg','./images/image1.jpg','./images/image2.jpg','./images/image4.jpg']
setInterval(function(){
  let random = Math.floor(Math.random() * 4 );
  image.src =images[random];
}, 800);

