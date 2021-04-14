const contentSection = document.querySelectorAll(".content-section"); //selects all of the content-section class and populates them into a node list that looks like array, but is NOT array.

function createDynamicNav() {
   
  const navLinks = document.querySelectorAll("h2");
  const createNavUL = document.createElement("ul"); 

  for (let i = 0; i < contentSection.length; i++) {//iterate through the nodelist for contentSection
    let createNavLinks = document.createElement("li"); //creates an <li> node
    let createAnchorTag = document.createElement("a"); //creats an <a> (anchor) node
    createNavLinks.appendChild(createAnchorTag); //appends the anchor tag between each <li></li> 
    let linkName = navLinks[i].innerHTML; //takes the text WITHIN the h2 tags that makes up the content titles

    createAnchorTag.href=("#content" + (i+1)); //output is content1, content2, content3 as for loop iterates through
    createAnchorTag.textContent = `${linkName}`;
    createNavUL.appendChild(createNavLinks); 

    
  }

  
  
  navbar.appendChild(createNavUL); 
  
}

createDynamicNav(); 

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


//document.getElementById("card1").addEventListener("click", scroll); //Do NOT put scroll() since the () immediately calls the function and it will fire automatically without waiting for the event!!

function contentInView(content) { //function will determine if content section is in view 
  let position = content.getBoundingClientRect(); //run console.log(position); to see the values of position.top, position.bottom, etc and use for the expressions below
  return (
    position.top <= window.innerHeight*.18 && 
    (position.bottom <= window.innerHeight*1.3 && position.bottom > window.innerHeight*.18)
  ); //returns boolean True if the content is in viewport or False if not
}


window.addEventListener("scroll", function(){
  const activeLink = document.querySelectorAll("li"); 
  const navColor = document.querySelector("#navbar"); 
  const hdrColor = document.querySelector("#hdr"); 

  for (let i = 0; i < contentSection.length; i++) {
    if (contentInView(contentSection[i]) === true) {
      activeLink[i].classList.add("highlight"); //note that there is no period prior to the class since you are specifically saying to add it as a class!
      if (contentSection[i].id == "content1") {
        navColor.style.backgroundColor = "rgb(34, 121, 235)";
        hdrColor.style.backgroundColor = "rgb(34, 121, 235)"; 
      }
      else if (contentSection[i].id == "content2") {
        navColor.style.backgroundColor = "rgb(0, 146, 73)";
        hdrColor.style.backgroundColor = "rgb(0, 146, 73)";
      }
      else {
        navColor.style.backgroundColor = "rgb(252, 109, 133)";
        hdrColor.style.backgroundColor = "rgb(252, 109, 133)";
      }
    }
    else {
      activeLink[i].classList.remove("highlight"); 
      
    }
  }
  console.log(contentSection[0].id); 
})





//window.addEventListener("scroll", contentInView(content2))

// window.addEventListener("scroll", function() {
   

//    if(position.top <= window.innerHeight*.18 && (position.bottom <= window.innerHeight*1.3 && position.bottom > window.innerHeight*.18))   {
//      console.log("element 2 here"); 
//    }
//    else {
//      console.log("not here"); 
//    }
//    console.log(position); 
// });

