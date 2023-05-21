const featButton = document.getElementById("featPhotosBtn").addEventListener("mouseover",btnAlert);

function btnAlert(){
    alert(`You know you want these Airhead Extremes!`)
}
const lightBtn = document.getElementById("toggleLight").addEventListener("click",togglingModeLight);

const darkBtn = document.getElementById("toggleDark").addEventListener("click",togglingModeDark)



function togglingModeLight(){
    document.body.style.backgroundColor = "white"
     document.getElementById("motto").style.color = "black";
     document.getElementById("votingParagragh").style.color = "black";   }
function togglingModeDark(){
    document.body.style.backgroundColor = "black"
    document.getElementById("motto").style.color = "white";

}

const fetchUrl = "http://localhost:3000/candies"
function fetchCandies() {
     fetch(fetchUrl).then(resp => resp.json()).then(candies => candies.forEach(candy => addingCandies(candy)))
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
      h2.setAttribute("id","candyName");
   
      //creating button for voting 
      let btn = document.createElement('button')
      btn.setAttribute('id', "votingBtn")
      btn.classList.add("button")
      
      //set image source
      image.src = candy.image    
      //set text content 
      h2.textContent = candy.name+": "+ candy.price;
     
     //adds button event listener CLICK  to update votes 
      btn.addEventListener("click",updateVotes);
      
      function updateVotes(){
             let currentVotes = (candy.votes +=1)
             btn.textContent = `${currentVotes} votes received,
      click here to VOTE`
      const data = {"votes": `${currentVotes}` }
      fetch(`http://localhost:3000/candies/${candy.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
          // Handle the response)
        .catch((error) => {
          // Handle any errors
        });
          }
          btn.textContent = `${candy.votes} votes received,
      click here to VOTE`
      
      //appending h2, btn 
      card.appendChild(h2);
      card.appendChild(btn);

      //appending image , card 
      document.getElementById("card-container").appendChild(image);
      document.getElementById("card-container").appendChild(card);
      } 

      



    