canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
color="blue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousdown",mymousdown)
function mymousdown(e){
    color=document.getElementById("color").value
    mousx=e.clientX-canvas.offsetLeft
    mousy=e.clientY-canvas.offsetTop
    console.log("x="+mousx+"y="+mousy)
    circle(mousx,mousy)
}
function circle(mousx,mousy){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=2
    ctx.arc(mousx,mousy,40,0,2*Math.PI)
    ctx.stroke() 
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}