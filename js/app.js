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
  document.querySelectorAll("li")[0].classList.add("highlight"); //initially bolds content 1
  document.querySelector("#navbar").style.backgroundImage = "linear-gradient(rgb(34, 121, 235), 90%, skyblue)"; 
}

function scrollToTop() { //shows button that that scrolls to top under the fold 
    let icon = document.querySelector(".fa-chevron-circle-up"); 

  if (content.getBoundingClientRect().top < -325) { 
    icon.classList.remove("hide-button"); 
  }
  else {
    icon.classList.add("hide-button"); 
  }
  //
}

function onClickScroll () { //function is called when the scroll to top button is clicked
  // window.scrollTo(0, 0);
  document.getElementById("content1").scrollIntoView({behavior: "smooth"}) 
}

function contentInView(content) { //function will determine if content section is in view 
  let position = content.getBoundingClientRect(); //run console.log(position); to see the values of position.top, position.bottom, etc and use for the expressions below
  return (
    position.top <= window.innerHeight*.22 && 
    (position.bottom <= window.innerHeight*1.3 && position.bottom > window.innerHeight*.22)
  ); //returns boolean True if the content is in viewport or False if not
}

//shows navigation bar when scrolling, hides when inactive
function hideNav() {
    document.getElementById("hdr").style.top = "0";  
    setTimeout(hideNavOnPause, 1800); //1.8 seconds of inactivity will cause the navbar to hide 
}

function hideNavOnPause() {
  document.getElementById("hdr").style.top = "-200px"; 
}



window.addEventListener("scroll", function(){
  const hdrColor = document.querySelector("#hdr"); 
  const navColor = document.querySelector("#navbar"); 
  const activeLink = document.querySelectorAll("li");

  for (let i = 0; i < contentSection.length; i++) {
    if (contentInView(contentSection[i]) === true) {
      activeLink[i].classList.add("highlight"); //note that there is no period prior to the class since you are specifically saying to add it as a class!
      if (contentSection[i].id == "content1") {
        hdrColor.style.backgroundColor = "rgb(34, 121, 235)";
        navColor.style.backgroundImage = "linear-gradient(rgb(34, 121, 235), 90%, skyblue)"; 
         
      }
      else if (contentSection[i].id == "content2") {
        navColor.style.backgroundImage = "linear-gradient(rgb(0, 146, 73), 90%, springgreen)"; 
        hdrColor.style.backgroundColor = "rgb(0, 146, 73)";
      }
      else {
        navColor.style.backgroundImage = "linear-gradient(rgb(252, 109, 133), 90%, pink)";
        hdrColor.style.backgroundColor = "rgb(252, 109, 133)";
       
      }
    }
    else {
      activeLink[i].classList.remove("highlight"); 
    }
  } 
  hideNav();
  scrollToTop(); 
})

function scrollToContent(card) {
  let contentID; // used variable type let since it will be changed depending on what the user clicked

  if (card == "card1") {
    contentID = document.getElementById("content1"); 
  }
  else if (card == "card2") {
    contentID = document.getElementById("content2"); 
  }
  else {
    contentID = document.getElementById("content3"); 

  }
  contentID.scrollIntoView({behavior: "smooth"});
}





createDynamicNav(); 


//document.getElementById("card1").addEventListener("click", scroll); Do NOT put scroll() since the () immediately calls the function and it will fire automatically without waiting for the event!!

