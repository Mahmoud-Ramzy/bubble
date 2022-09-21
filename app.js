let times=0;
addEventListener("mousemove",function(event){
        if(times%6===0){
            let body= document.body;
            let bubble = document.createElement("span")
            let x=event.clientX;
            let y=event.clientY;
            bubble.style.left= `${x}px`;
            bubble.style.top= `${y}px`;
            let size= (Math.random() * 70 )+20;
            bubble.style.width=`${size}px`
            bubble.style.height=`${size}px`
            console.log(event);
            body.appendChild(bubble);
            
            setTimeout(()=>{
                bubble.remove();
            },3000 );
        }
        times++;
});
addEventListener("click",function(event){

            let body= document.body;
            let bubble = document.createElement("span")
            let x=event.clientX;
            let y=event.clientY;
            bubble.style.left= `${x}px`;
            bubble.style.top= `${y}px`;
            let size= (Math.random() * 70 )+20;
            bubble.style.width=`${size}px`
            bubble.style.height=`${size}px`
            console.log(event);
            body.appendChild(bubble);
            
            setTimeout(()=>{
                bubble.remove();
            },3000 );
});


function bubbleGenerator(){
    
}


function showNavbar(){
    document.querySelector(".side-navbar").style.display="flex";
    setTimeout(()=>{
        document.querySelector(".side-navbar").style.height="100vh";
        document.querySelector(".side-navbar").style.opacity="100";
        document.querySelector(".menu-closed").style.height="100vh";
    },100)

}
function hideNavbar(){
    document.querySelector(".side-navbar").style.height="0";
    document.querySelector(".side-navbar").style.opacity="0";
    document.querySelector(".menu-closed").style.height="100px";
    setTimeout(()=>{
        document.querySelector(".side-navbar").style.display="none";
    },500)
    
    
}

function Copy() 
{
    Copied = "https://mahmoud-ramzy.github.io/bubble/";
    Copied.execCommand("Copy");
}
function Info(){

}