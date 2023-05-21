// ** EVENT LISTENER "MOUSEOVER"
// A cursor going over this button causes an alert that says `You know you want these Airhead Extremes!`
const featButton = document.getElementById("featPhotosBtn").addEventListener("mouseover",btnAlert);

function btnAlert(){
    alert(`You know you want these Airhead Extremes!`)
}

//page starts off in "dark mode" as default 
//"CLICK" EVENT LISTENER: toggles from light mode to dark mode using togglingModeDark()
const darkBtn = document.getElementById("toggleDark").addEventListener("click",togglingModeDark)

function togglingModeDark(){
    document.body.style.backgroundColor = "black"
    document.getElementById("slogan").style.color = "white";
    document.getElementById("votingParagragh").style.color = "white";  
}


//"CLICK" EVENT LISTENER: toggles from dark mode to light mode
const lightBtn = document.getElementById("toggleLight").addEventListener("click",togglingModeLight);

function togglingModeLight(){
    document.body.style.backgroundColor = "white"
     document.getElementById("slogan").style.color = "black";
     document.getElementById("votingParagragh").style.color = "black";  
    }

//fetching our candies file 
// ** USING .FOREACH ( ONE OF THE REQUIREMENTS )
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
      //set image source
      image.src = candy.image  

      //creating h2 element for candy name & price & setting id 
      let h2 = document.createElement("h2");
      h2.setAttribute("id","candyName");
      //set text content 
      h2.textContent = candy.name+": "+ candy.price;
   
      //creating button for voting & setting id/class 
      let btn = document.createElement('button')
      btn.setAttribute('id', "votingBtn")
      btn.classList.add("button")
      
     
     
     //""CLICK" EVENT LISTENER: to Oour button to update votes 
      btn.addEventListener("click",updateVotes);
      
      function updateVotes(){
        //function will update votes +1 each time it is clicked & update the json file
        //vote button text will show the current votes 
         let currentVotes = (candy.votes +=1)
         btn.textContent = `${currentVotes} votes received,
         click here to VOTE`

        //Using "PATCH" request we can update our votes in json file 
         const data = {"votes": currentVotes }
         fetch(`http://localhost:3000/candies/${candy.id}`, {
         method: "PATCH",
         headers: {
          "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
         }).then(response => response.json())
         // Handle any errors
         .catch((error) => {
            console.log(error)
         });
      }
     //updated text  
     btn.textContent = `${candy.votes} votes received,
      click here to VOTE`
      
      //appending h2, btn, image to card ( .cardDiv )
      card.appendChild(image)
      card.appendChild(h2);
      card.appendChild(btn);
   
      //appending card to #card-container
      document.getElementById("card-container").appendChild(card);
      } 

      



    