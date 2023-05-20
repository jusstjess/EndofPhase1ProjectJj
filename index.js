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
function fetchCandies() {
     fetch("http://localhost:3000/candies").then(resp => resp.json()).then(candies => candies.forEach(candy => addingCandies(candy)))
}

fetchCandies()

function addingCandies(candy) {
    

      let card = document.createElement('div');
      card.classList.add("cardDiv");
      //creating image element 
      let image = document.createElement("img");
      image.classList.add("imageContainer");
      //creating h2 & h3 elements for candy name & price 
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      h2.setAttribute("id","candyName");
      h3.setAttribute("id","candyPrice");
   
      //set image source
      image.src = candy.image    
      //set text content 
      h2.textContent = candy.name;
      h3.textContent = `Price: ${candy.price}`
     

      //appending h2, img cardContainer
      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(h3);


      document.getElementById("card-container").appendChild(card);
}




/*const candyCards = document.getElementById("candy-cards");
    const cardContainer =   document.getElementsByClassName("card-container")

   
      //const cnewCandyCard = document.createElement("card");//
      let img = document.createElement("img");
      img.src = candy.image
      let h2 = document.createElement("h2");
      h2.textContent = candy.name;
      cardContainer.appendChild(h2,candyCardNew,image)
      candyCards.appendChild(cardContainer)*/

    