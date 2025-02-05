
function move() {

document.getElementById('img1').style.visibility=" visible";
document.getElementById('img2').style.visibility=" visible";
document.getElementById('img3').style.visibility=" visible";
document.getElementById('buntrans').style.visibility="hidden";
document.getElementById('step1').style.visibility="hidden";
document.getElementById('step2').style.visibility="visible";
document.getElementById('2').style.visibility="visible";
}

function move1() {
 
    document.getElementById('img2').style.animation=" move1 4s forwards "
    
    setTimeout(function()
    {
        document.getElementById('2').style.visibility=" hidden";
         document.getElementById('img4').style.visibility=" visible";
         document.getElementById('img2').style.visibility=" hidden";
         
         document.getElementById('img4').style.animation=" move2 4s forwards "
         
       document.getElementById('step2').style.visibility="hidden";
         
       document.getElementById('step3').style.visibility="visible";
       document.getElementById('next').style.visibility="visible";
       document.getElementById('nexttrans').style.visibility="visible";
       },3500);
      }


       function canvas2() {

        document.getElementById('canvas2').style.visibility=" visible";
        document.getElementById('canvas1').style.visibility=" hidden";
        
        }
        
       