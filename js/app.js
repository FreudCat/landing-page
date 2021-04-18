const contentSection = document.querySelectorAll(".content-section"); //selects all of the content-section class and populates them into a node list that looks like array, but is NOT array.
let opacity = 0;

//Creates collapsible divs 
let collapseButton = document.getElementsByClassName("collapse");
for (let i = 0; i < collapseButton.length; i++) {
  collapseButton[i].addEventListener("click", function () {
    this.classList.toggle("active"); //"this" refers to the item that was clicked 
    let collapseContent = this.nextElementSibling; //nextelementsibling gets the next element on the same level as the node tree 
    if (collapseContent.style.display == "block") {
      collapseContent.style.display = "none";
    }
    else {
      collapseContent.style.display = "block";
    }
  })
}

//Function dynamically populates the nav bar 
function createDynamicNav() {
  const navLinks = document.querySelectorAll("button");
  const createNavUL = document.createElement("ul");

  for (let i = 0; i < contentSection.length; i++) {//iterate through the nodelist for contentSection
    let createNavLinks = document.createElement("li"); //creates an <li> node
    let createAnchorTag = document.createElement("a"); //creats an <a> (anchor) node
    createNavLinks.appendChild(createAnchorTag); //appends the anchor tag between each <li></li> 
    let linkName = navLinks[i].innerHTML; //takes the text WITHIN the h2 tags that makes up the content titles

    createAnchorTag.href = ("#content" + (i + 1)); //output is content1, content2, content3, content4 as for loop iterates through
    createAnchorTag.textContent = `${linkName}`;
    createNavUL.appendChild(createNavLinks);
  }
  navbar.appendChild(createNavUL);
  document.querySelectorAll("li")[0].classList.add("highlight"); //initially bolds content 1 on page load 
}

function scrollToTop() { //shows button that that scrolls to top under the fold 
  let icon = document.querySelector(".fa-chevron-circle-up");

  if (content.getBoundingClientRect().top < -325) {
    icon.classList.remove("hide-button");
  }
  else {
    icon.classList.add("hide-button");
  }
}

function onClickScroll() { //function is called when the scrolltotop button is clicked
  document.getElementById("content1").scrollIntoView({ behavior: "smooth" })
}

function contentInView(content) { //function will determine if content section is in view 
  let position = content.getBoundingClientRect(); //run console.log(position); to see the values of position.top, position.bottom, etc and use for the expressions below
  return (
    position.top <= window.innerHeight * .22 &&
    (position.bottom <= window.innerHeight * 1.3 && position.bottom > window.innerHeight * .22)
  ); //returns boolean True if the content is in viewport or False if not
}

//shows navigation bar when scrolling, hides when inactive
function hideNav() {
  document.getElementById("hdr").style.top = "0";
  setTimeout(hideNavOnPause, 2200); //2.2 seconds of inactivity will cause the navbar to hide 
}

function hideNavOnPause() {
  document.getElementById("hdr").style.top = "-200px";
}

window.addEventListener("scroll", function () {
  const hdrColor = document.querySelector("#hdr");
  const activeLink = document.querySelectorAll("li");

  for (let i = 0; i < contentSection.length; i++) {
    console.log("Main log"); 
    console.log(contentSection[i]); 
    let fade = document.getElementById(contentSection[i].id); 
    if (contentInView(contentSection[i]) === true) {
      activeLink[i].classList.add("highlight"); //note that there is no period prior to the class since you are specifically saying to add it as a class!
      contentSection[i].classList.remove("inactive-section"); //when section is in viewport, inactive-section class is removed
      contentSection[i].classList.add("active-section"); //when section is in viewport, active-section class is added 
      
      if (contentSection[i].id == "content1") {
        hdrColor.style.backgroundImage = "linear-gradient(rgb(34, 121, 235), 90%, skyblue)";  
      }
      else if (contentSection[i].id == "content2") {
        hdrColor.style.backgroundImage = "linear-gradient(rgb(0, 146, 73), 90%, springgreen)";
        }
      else if (contentSection[i].id == "content3") {
        hdrColor.style.backgroundImage = "linear-gradient(rgb(252, 109, 133), 90%, pink)";
      }
      else {
        hdrColor.style.backgroundImage = "linear-gradient(rgb(19, 43, 68), 90%, rgb(25, 56, 88))";
      }
    }
    else {
      activeLink[i].classList.remove("highlight");
      contentSection[i].classList.remove("active-section") //remove active status when outside viewport
      ;contentSection[i].classList.add("inactive-section") //add inactive status with different background when outside of viewport 
      ;
    }
  }
  hideNav();
  scrollToTop();
})

function scrollToContent(card) {
  let contentID; // used variable type "let" since it will be changed depending on what the user clicked
  if (card == "card1") {
    contentID = document.getElementById("content1");
  }
  else if (card == "card2") {
    contentID = document.getElementById("content2");
  }
  else {
    contentID = document.getElementById("content3");
  }
  contentID.scrollIntoView({ behavior: "smooth" });
}

createDynamicNav();

//document.getElementById("card1").addEventListener("click", scroll); Do NOT put scroll() since the () immediately calls the function and it will fire automatically without waiting for the event!!

