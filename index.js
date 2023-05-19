const featButton = document.getElementById("featPhotosBtn").addEventListener("mouseover",btnAlert);

function btnAlert(){
    alert(`You know you want these Airhead Extremes!`)
}
const lightBtn = document.getElementById("toggleLight").addEventListener("click",togglingModeLight);

const darkBtn = document.getElementById("toggleDark").addEventListener("click",togglingModeDark)

function togglingModeLight(){
    document.body.style.backgroundColor = "white"
     document.getElementById("motto").style.color = "black";
    }
function togglingModeDark(){
    document.body.style.backgroundColor = "black"
    document.getElementById("motto").style.color = "white";

}






    