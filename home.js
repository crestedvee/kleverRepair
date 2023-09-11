function changeBack() {
  const images = ['url("/images/k1.jpeg")', 'url("/images/k2.jpeg")'];
  const sec = document.getElementById('header');
  const bg = images[Math.floor(Math.random() * images.length)];
  sec.style.backgroundImage = bg;
  const headings = document.getElementById('header-text');
  headings.style.transition = 'color 2s ease-in 100ms,font-size 2s ease-in 100ms, backgrpund-color 2s ease-in 100ms';
}
setInterval(changeBack, 9000);

/*function changeHeading(){
  const headings = ['Fixing Your Car is our Duty','We Offer Home Services Too','Just a Phone Call Away'];
  const sec1 = document.getElementById('header-text');
  const bg1 = headings[Math.floor(Math.random() * headings.length)];
  sec1.style.backgroundImage = bg1;
}
  setInterval(changeHeading, 100);*/
let bookBtn = document.getElementById("book-button");
let loginBtn = document.getElementById("join-us");
function book() {
  loginBtn.style.display = "block";
  bookBtn.style.display = "none";
}
bookBtn.onclick = book;

/*et scrollBody = () => {
  let headerNav = document.getElementById("header-top");
  let headerContact = document.getElementById("pnum");
  let headerContact2 = document.getElementById("pnum2");
  let headerContact3 = document.getElementById("pnum3");
  let headerIcons = document.getElementsByClassName("fa");
  headerNav.style.backgroundColor = "black";
  headerContact.style.color = "white";
  headerContact2.style.color = "white";
  headerContact3.style.color = "white";
  headerIcons.style.color = "white";
}

let scrollBodyEnd = () => {
  let headerNav = document.getElementById("header-top");
  let headerContact = document.getElementById("pnum");
  let headerContact2 = document.getElementById("pnum2");
  let headerContact3 = document.getElementById("pnum3");
  let headerIcons = document.getElementsByClassName("fa");
  headerNav.style.backgroundColor = "white";
  headerContact.style.color = "black";
  headerContact2.style.color = "black";
  headerContact3.style.color = "black";
  headerIcons.style.color = "white";
}

siteBody.onwheel = scrollBody;*/

const siteBody = document.getElementById("main-body");
let headerNav = document.getElementById("header-top");
let headerContact = document.getElementById("pnum");
let headerContact2 = document.getElementById("pnum2");
let headerContact3 = document.getElementById("pnum3");
let headerIcons = document.getElementsByClassName("fa");
let btnMore = document.getElementById("myBtn");
let readMore = document.getElementById("more");
let readMoreDot = document.getElementById("dot");

siteBody.onscroll = (event) => {
  headerNav.style.backgroundColor = "black";
  headerContact.style.color = "white";
  headerContact2.style.color = "white";
  headerContact3.style.color = "white";
  headerIcons.style.color = "white";
}

siteBody.onmouseout = (event) => {
  setTimeout(() => {
    headerNav.style.backgroundColor = "white";
    headerContact.style.color = "black";
    headerContact2.style.color = "black";
    headerContact3.style.color = "black";
    headerIcons.style.color = "darkslategray";
  }, 10000);
}

readMoreFunction = () => {
  if(btnMore.innerHTML === "Read More"){
    readMore.style.display = "inline";
    btnMore.innerHTML = "Read less";
    readMoreDot.style.display = "none";
  } else {
    readMore.style.display = "none";
    readMoreDot.style.display = "inline";
    btnMore.innerHTML = "Read More";
  }
}

  btnMore.addEventListener("click", readMoreFunction);


