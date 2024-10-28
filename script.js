const left=document.querySelector(".left")
const right=document.querySelector(".right")
const slider=document.querySelector(".slider")

let slideNumber=1;
const images=document.querySelectorAll(".image")

const nextSlide = ()=>{
    slider.style.transform=`translateX(-${slideNumber*500}px)`;
    slideNumber++;
}
const prevSlide = ()=>{
    slider.style.transform=`translateX(-${(slideNumber-2)*500}px)`;
    slideNumber--;
}


const getFirstSlide = ()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber=1;
}

const getLastSlide = ()=>{
    slider.style.transform=`translateX(-${(images.length-1)*500}px)`;
    slideNumber=images.length;
}

right.addEventListener("click",()=>{
   slideNumber < images.length ? nextSlide() : 
   getFirstSlide();
  
  
})

left.addEventListener("click",()=>{
    slideNumber < images.length ? prevSlide() : 
    getLastSlide();
   
   
 })
