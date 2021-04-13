
function createDynamicNav() {
  const contentSection = document.querySelectorAll(".content-section"); //selects all of the content-section class and populates them into a node list that looks like array, but is NOT array.  
  const navLinks = document.querySelectorAll("h2");
  const createNavUL = document.createElement("ul"); 

  for (let i = 0; i < contentSection.length; i++) {//iterate through the nodelist for contentSection
    let createNavLinks = document.createElement("li"); //creates an <li> node
    let createAnchorTag = document.createElement("a"); //creats an <a> (anchor) node
    createNavLinks.appendChild(createAnchorTag); //appends the anchor tag between each <li></li> 

    

    console.log(contentSection[i]); //for testing purposes
  }
  
  
  return console.log(navLinks[0].innerHTML); //for testing 
}

function scrollToContent(card) {
  let contentID; 
  let selectedCard; // used variable type let since it will be changed depending on what the user clicked

  if (card == "card1") {
    contentID = document.getElementById("content1"); 
    selectedCard = document.querySelector("#card1")
  }
  else if (card == "card2") {
    contentID = document.getElementById("content2"); 
  }
  else {
    contentID = document.getElementById("content3"); 

  }
  contentID.scrollIntoView({behavior: "smooth"});
//  selectedCard.setAttribute("style", "box-shadow: 0px 10px 10px rgb(146, 145, 145)"); 
}



createDynamicNav(); //for testing



//document.getElementById("card1").addEventListener("click", scroll); //Do NOT put scroll() since the () immediately calls the function and it will fire automatically without waiting for the event!!