let moving=document.getElementById("circle")
document.addEventListener("mousemove",(e)=>{
    
  moving.style.left = e.clientX +1+ "px"
  moving.style.top = e.clientY +6+ "px"
})

