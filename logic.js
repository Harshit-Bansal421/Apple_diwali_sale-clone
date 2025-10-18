let body = document.body;

/**for that menu section which will appear when innerwidth is less than 900 **/
let navIcons = document.querySelectorAll(".nav-icons");
let navItem = document.querySelector(".nav-items");
let navMenu = document.createElement("li");
navMenu.innerHTML = `<a href="" class="nav-icons nav-icon-menu"><span class="icon-image">
            <img src="assets/menu.svg" alt="APPLE">
          </span></a>`;
window.addEventListener("resize", () => {
  if (window.innerWidth < 900) {
    if (!navItem.contains(navMenu)) {
      navItem.appendChild(navMenu);
    }
  } else if (navItem.contains(navMenu)) {
    navItem.removeChild(navMenu);
  }
});

/** for dropdown effect in navitems **/

let hoverPart = document.querySelector(".hover-area");
let hiddenBigPart = document.querySelector(".hidden-big-content");
let hiddenpart = document.querySelector(".hidden-content");
let leftpart = document.querySelector(".left-content");
let middlepart = document.querySelector(".middle-content");
let rightpart = document.querySelector(".right-content");
let liPart = document.querySelectorAll(".dropdown-li");
let withoutHover = document.querySelector(".without-hover-area");

function storefill() {
  leftpart.innerHTML = `<h2>shop</h2>
          <a href="" class="left-a-hidden">Shop the latest</a>
          <a href="" class="left-a-hidden">Mac</a>
          <a href="" class="left-a-hidden">iPad</a>
          <a href="" class="left-a-hidden">iphone</a>
          <a href="" class="left-a-hidden">Apple Watch</a>
          <a href="" class="left-a-hidden">AirPods</a>
          <a href="" class="left-a-hidden">Accessories</a>`;
  middlepart.innerHTML = `<h2>Quick links</h2>
          <a href="" class="middle-a-hidden">Find a Store</a>
          <a href="" class="middle-a-hidden">Order Status</a>
          <a href="" class="middle-a-hidden">Ways To Buy</a>
          <a href="" class="middle-a-hidden">Personal Setup</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>`;
  rightpart.innerHTML = `<h2>Shop Special Store</h2>
          <a href="" class="right-a-hidden">Eduication</a>
          <a href="" class="right-a-hidden">Business</a>`;
}

function macfill() {
  leftpart.innerHTML = `<h2>Explore Mac</h2>
          <a href="" class="left-a-hidden">Explore All Mac</a>
          <a href="" class="left-a-hidden">MacBook Air</a>
          <a href="" class="left-a-hidden">MacBook pro</a>
          <a href="" class="left-a-hidden">iMac</a>
          <a href="" class="left-a-hidden">Mac mini</a>
          <a href="" class="left-a-hidden">Mac Studio</a>
          <a href="" class="left-a-hidden">Mac Pro</a>
          <a href="" class="left-a-hidden">Displays</a>
          <div class="left-a-hidden-bigtwo">
              <a href="" class="left-a-hiddentwo">Compare Mac</a>
              <a href="" class="left-a-hiddentwo">Switch from PC to Mac</a>
            </div>`;

  middlepart.innerHTML = `<h2>Shop Mac</h2>
          <a href="" class="middle-a-hidden">Shop Mac</a>
          <a href="" class="middle-a-hidden">Mac Accessories</a>
          <a href="" class="middle-a-hidden">Ways To Buy</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>
          `;
  rightpart.innerHTML = `<h2>More from Mac</h2>
          <a href="" class="right-a-hidden">Mac Support</a>
          <a href="" class="right-a-hidden">Applecare</a>          
          <a href="" class="right-a-hidden">macos Tahoe</a>
          <a href="" class="right-a-hidden">Apple Intelligence</a>
          <a href="" class="right-a-hidden">Apps by Apple</a>
          <a href="" class="right-a-hidden">Continuity</a>
          <a href="" class="right-a-hidden">icloud&plus;</a>
          <a href="" class="right-a-hidden">Mac for Business</a>
          <a href="" class="right-a-hidden">Education</a>
          `;
}

function ipadfill() {
  leftpart.innerHTML = `<h2>Explore iPad</h2>
          <a href="" class="left-a-hidden">Explore All iPad</a>
          <a href="" class="left-a-hidden">iPad pro</a>
          <a href="" class="left-a-hidden">iPad Air</a>
          <a href="" class="left-a-hidden">iPad</a>
          <a href="" class="left-a-hidden">iPad mini</a>
          <a href="" class="left-a-hidden">Apple Pencil</a>
          <a href="" class="left-a-hidden">Keyboards</a>
          <div class="left-a-hidden-bigtwo">
              <a href="" class="left-a-hiddentwo">Compare iPad</a>
              <a href="" class="left-a-hiddentwo">Why iPad</a>
            </div>`;

  middlepart.innerHTML = `<h2>Shop iPad</h2>
          <a href="" class="middle-a-hidden">Shop iPad</a>
          <a href="" class="middle-a-hidden">iPad Accessories</a>
          <a href="" class="middle-a-hidden">Ways To Buy</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>
          `;
  rightpart.innerHTML = `<h2>More from iPad</h2>
          <a href="" class="right-a-hidden">iPad Support</a>
          <a href="" class="right-a-hidden">Applecare</a>          
          <a href="" class="right-a-hidden">iPadOS 26</a>
          <a href="" class="right-a-hidden">Apple Intelligence</a>
          <a href="" class="right-a-hidden">Apps by Apple</a>
          <a href="" class="right-a-hidden">icloud&plus;</a>
          <a href="" class="right-a-hidden">Education</a>
          `;
}

function iphonefill() {
  leftpart.innerHTML = `<h2>Explore iPhone</h2>
          <a href="" class="left-a-hidden">Explore All iPhone</a>
          <a href="" class="left-a-hidden">iPhone 17 pro</a>
          <a href="" class="left-a-hidden">iPhone Air</a>
          <a href="" class="left-a-hidden">iPhone 17</a>
          <a href="" class="left-a-hidden">iPhone 16</a>
          <a href="" class="left-a-hidden">iPhone 16e</a>
          <div class="left-a-hidden-bigtwo">
              <a href="" class="left-a-hiddentwo">Compare iPhone</a>
              <a href="" class="left-a-hiddentwo">Switch from Android</a>
            </div>`;

  middlepart.innerHTML = `<h2>Shop iPhone</h2>
          <a href="" class="middle-a-hidden">Shop iPhone</a>
          <a href="" class="middle-a-hidden">iPhone Accessories</a>
          <a href="" class="middle-a-hidden">Apple Trade In</a>
          <a href="" class="middle-a-hidden">Ways To Buy</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>
          `;
  rightpart.innerHTML = `<h2>More from iPhone</h2>
          <a href="" class="right-a-hidden">iPhone Support</a>
          <a href="" class="right-a-hidden">Applecare</a>          
          <a href="" class="right-a-hidden">iPadOS 26</a>
          <a href="" class="right-a-hidden">Apple Intelligence</a>
          <a href="" class="right-a-hidden">Apps by Apple</a>
          <a href="" class="right-a-hidden">iPhone Privacy</a>
          <a href="" class="right-a-hidden">icloud&plus;</a>
          <a href="" class="right-a-hidden">wallet</a>
          <a href="" class="right-a-hidden">Siri</a>`;
}

function watchfill() {
  leftpart.innerHTML = `<h2>Explore Watch</h2>
          <a href="" class="left-a-hidden">Explore All Apple Watch</a>
          <a href="" class="left-a-hidden">Apple Watch Series 11</a>
          <a href="" class="left-a-hidden">Apple Watch SE 3</a>
          <a href="" class="left-a-hidden">Apple Watch Ultra 3</a>
          <a href="" class="left-a-hidden">Apple Watch Nike</a>
          <div class="left-a-hidden-bigtwo">
              <a href="" class="left-a-hiddentwo">Compare Watch</a>
              <a href="" class="left-a-hiddentwo">Why Apple Watch</a>
            </div>`;

  middlepart.innerHTML = `<h2>Shop watch</h2>
          <a href="" class="middle-a-hidden">Shop Apple Watch</a>
          <a href="" class="middle-a-hidden">Apple Watch Straps</a>
          <a href="" class="middle-a-hidden">Apple Watch Accessories</a>
          <a href="" class="middle-a-hidden">Ways To Buy</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>
          `;
  rightpart.innerHTML = `<h2>More from Watch</h2>
          <a href="" class="right-a-hidden">Apple Watch Support</a>
          <a href="" class="right-a-hidden">Applecare</a>          
          <a href="" class="right-a-hidden">WatchOS 26</a>
          <a href="" class="right-a-hidden">Apple Watch For Your Kids</a>
          <a href="" class="right-a-hidden">Apps by Apple</a>`;
}

function airpodsfill() {
  leftpart.innerHTML = `<h2>Explore AirPods</h2>
          <a href="" class="left-a-hidden">Explore All AirPods</a>
          <a href="" class="left-a-hidden">AirPods 4</a>
          <a href="" class="left-a-hidden">AirPods Pro 3</a>
          <a href="" class="left-a-hidden">AirPods Max</a>
          <div class="left-a-hidden-bigtwo">
              <a href="" class="left-a-hiddentwo">Compare AirPods</a>
            </div>`;

  middlepart.innerHTML = `<h2>Shop AirPods</h2>
          <a href="" class="middle-a-hidden">Shop AirPods</a>
          <a href="" class="middle-a-hidden">AirPods Accessories</a>
          <a href="" class="middle-a-hidden">Festive Offers</a>
          `;
  rightpart.innerHTML = `<h2>More from AirPods</h2>
          <a href="" class="right-a-hidden">AirPods Support</a>
          <a href="" class="right-a-hidden">AirPodscare</a>          
          <a href="" class="right-a-hidden">Apple Music</a>`;
}

function tv_homefill() {
  leftpart.innerHTML = `<h2>Explore TV & Home</h2>
  <a href="" class="left-a-hidden">Explore TV & Home</a>
  <a href="" class="left-a-hidden">Apple TV 4K</a>
  <a href="" class="left-a-hidden">Homepod</a>
  <a href="" class="left-a-hidden">HomePod mini</a>`;

  middlepart.innerHTML = `<h2>Shop TV & Home</h2>
  <a href="" class="middle-a-hidden">Shop Apple TV 4k</a>
  <a href="" class="middle-a-hidden">Shop HomePod</a>
  <a href="" class="middle-a-hidden">Shop HomePod mini</a>
  <a href="" class="middle-a-hidden">Shop Siri Remote</a>
  <a href="" class="middle-a-hidden">TV & Home Accessories</a>
  `;
  rightpart.innerHTML = `<h2>More from TV & Home</h2>
  <a href="" class="right-a-hidden">TV & Home Support</a>
  <a href="" class="right-a-hidden">homePod Support</a>          
  <a href="" class="right-a-hidden">AppleCare for Apple TV</a>
  <a href="" class="right-a-hidden">AppleCare for HomePod</a>
  <a href="" class="right-a-hidden">Apple TV app</a>
  <a href="" class="right-a-hidden">AppleCare TV&plus;</a>
  <a href="" class="right-a-hidden">Home app</a>
  <a href="" class="right-a-hidden">Apple Music</a>
  <a href="" class="right-a-hidden">Siri</a>
  <a href="" class="right-a-hidden">AirPlay</a>
  `;
}

function entertainmentfill() {
  leftpart.innerHTML = `<h2>Explore Entertainment</h2>
          <a href="" class="left-a-hidden">Explore Entertainment</a>
          <a href="" class="left-a-hidden">Apple One</a>
          <a href="" class="left-a-hidden">Apple TV&plus;</a>
          <a href="" class="left-a-hidden">Apple Music</a>
          <a href="" class="left-a-hidden">Apple Arcade</a>
          <a href="" class="left-a-hidden">Apple Podcasts</a>
          <a href="" class="left-a-hidden">Apple Books</a>
          <a href="" class="left-a-hidden">App Store</a>
          `;

  middlepart.innerHTML = `<h2>Support</h2>
          <a href="" class="middle-a-hidden">Apple TV&plus; Support</a>
          <a href="" class="middle-a-hidden">Apple Music Support</a>
           `;
}

function accessoriesfill() {
  leftpart.innerHTML = `<h2>Explore Accessories</h2>
  <a href="" class="left-a-hidden">Explore Accessories</a>
  <a href="" class="left-a-hidden">Mac</a>
  <a href="" class="left-a-hidden">iPad</a>
  <a href="" class="left-a-hidden">iPhone</a>
  <a href="" class="left-a-hidden">Apple Watch</a>
  <a href="" class="left-a-hidden">Apple Pods</a>
  <a href="" class="left-a-hidden">TV &amp; Home</a>
  `;

  rightpart.innerHTML = `<h2>Explore Accessories</h2>
  <a href="" class="right-a-hidden">Made by Apple</a>
  <a href="" class="right-a-hidden">Beats by Dr.Dre</a>          
  <a href="" class="right-a-hidden">AirTag</a>
  `;
}

function supportfill() {
  leftpart.innerHTML = `<h2>Explore Support</h2>
  <a href="" class="left-a-hidden">iPhone</a>
  <a href="" class="left-a-hidden">mac</a>
  <a href="" class="left-a-hidden">iPad</a>
  <a href="" class="left-a-hidden">Watch</a>
  <a href="" class="left-a-hidden">AirPods</a>
  <a href="" class="left-a-hidden">Music</a>
  <a href="" class="left-a-hidden">Tv</a>
  `;

  middlepart.innerHTML = `<h2>Get help</h2>
  <a href="" class="middle-a-hidden">Community</a>
  <a href="" class="middle-a-hidden">Check Coverage</a>
  <a href="" class="middle-a-hidden">Genius Bar</a>
  <a href="" class="middle-a-hidden">Repair</a>
  `;
  rightpart.innerHTML = `<h2>Helpful Topics</h2>
  <a href="" class="right-a-hidden">Get AppleCare</a>
  <a href="" class="right-a-hidden">Apple Account and Password</a>          
  <a href="" class="right-a-hidden">Billing &amp; Subscriptions</a>
  <a href="" class="right-a-hidden">Accessibility</a>
  `;
}

function addDropEffect() {
  hoverPart.style.backgroundColor = "white";
  hiddenpart.style.padding = "40px 22px 84px 22px";
  hiddenBigPart.style.display = "block";
  withoutHover.style.filter = "blur(25px)";
}
function removeDropEffect() {
  leftpart.innerHTML = ``;
  middlepart.innerHTML = ``;
  rightpart.innerHTML = ``;
  hoverPart.style.backgroundColor = "#f5f5f7";
  hiddenpart.style.padding = "0px";
  hiddenBigPart.style.display = "block";
  withoutHover.style.filter = "blur(0px)";
}

liPart.forEach((el) => {
  el.addEventListener("mouseenter", (target) => {
    let word = target.currentTarget.children[0].innerHTML;
    addDropEffect();
    if (word === "Store") {
      storefill();
    } else if (word === "Mac") {
      macfill();
    } else if (word === "iPad") {
      ipadfill();
    } else if (word === "iPhone") {
      iphonefill();
    } else if (word === "Watch") {
      watchfill();
    } else if (word === "AirPods") {
      airpodsfill();
    } else if (word === "TV &amp; Home") {
      tv_homefill();
    } else if (word === "Enterntainment") {
      entertainmentfill();
    } else if (word === "Accessories") {
      accessoriesfill();
    } else if (word === "Support") {
      supportfill();
    }
  });
});

hoverPart.addEventListener("mouseleave", removeDropEffect);

navIcons.forEach((el) => {
  el.addEventListener("mouseenter", removeDropEffect);
});

/**different color in poart3 **/

const detail = document.querySelector(".color-decribe-part1");
const colorimage = {
  "blue-first": "assets/part3/part3-second.png/product/blue.jpeg",
  "purple-first": "assets/part3/part3-second.png/product/purple.jpeg",
  "sienna-first": "assets/part3/part3-second.png/product/sienna.jpeg",
  "green-first": "assets/part3/part3-second.png/product/green.jpeg",
  "black-first": "assets/part3/part3-second.png/product/black.jpeg",
  "yellow-second": "assets/part3/part3-third.png/product/yellow.jpeg",
  "purple-second": "assets/part3/part3-third.png/product/purple.jpeg",
  "midnight-second": "assets/part3/part3-third.png/product/midnight.jpeg",
  "orange-second": "assets/part3/part3-third.png/product/orange.jpeg",
  "terra-cotta-second": "assets/part3/part3-third.png/product/terra-cotta.jpeg",
  "black-second": "assets/part3/part3-third.png/product/black.jpeg",
  "yellow-third": "assets/part3/part3-forth.png/product/yellow.jpeg",
  "light-blue-third": "assets/part3/part3-forth.png/product/light-blue.jpeg",
  "blue-third": "assets/part3/part3-forth.png/product/blue.jpeg",
  "purple-third": "assets/part3/part3-forth.png/product/purple.jpeg",
  "sienna-third": "assets/part3/part3-forth.png/product/seinna.jpeg",
  "orange-third": "assets/part3/part3-forth.png/product/orange.jpeg",
  "light-blue-forth": "assets/part3/part3-fifth.png/product/light-blue.jpeg",
  "tan-forth": "assets/part3/part3-fifth.png/product/tan.jpeg",
  "light-grey-forth": "assets/part3/part3-fifth.png/product/light-grey.jpeg",
  "black-forth": "assets/part3/part3-fifth.png/product/black.jpeg",
  "neon-yellow-fifth": "assets/part3/part3-sixth.png/product/neon-yellow.jpeg",
  "anchor-blue-fifth": "assets/part3/part3-sixth.png/product/anchor-blue.jpeg",
  "purple-fog-fifth": "assets/part3/part3-sixth.png/product/purple-fog.jpeg",
  "forest-fifth": "assets/part3/part3-sixth.png/product/forest.jpeg",
  "darkgrey-fifth": "assets/part3/part3-sixth.png/product/darkgrey.jpeg",
  "neon-yellow-sixth": "assets/part3/part3-seventh.png/product/neonyellow.jpeg",
  "anchor-blue-sixth": "assets/part3/part3-seventh.png/product/anchorblue.jpeg",
  "purplefog-sixth": "assets/part3/part3-seventh.png/product/purplefog.jpeg",
  "starlight-sixth": "assets/part3/part3-seventh.png/product/starlight.jpeg",
  "black-sixth": "assets/part3/part3-seventh.png/product/black.jpeg",
  "stonegrey-sixth": "assets/part3/part3-seventh.png/product/stonegrey.jpeg",
};
const imageToBeChanged = document.querySelectorAll(".third-rem-img-div");
const clickpart1 = document.querySelectorAll(".color-change-image");
clickpart1.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.currentTarget.id.includes("first")) {
      imageToBeChanged[0].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      ); //e.currentTarget.id work as a key for the src for image in colorimage
    } else if (e.currentTarget.id.includes("second")) {
      imageToBeChanged[1].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      );
    } else if (e.currentTarget.id.includes("third")) {
      imageToBeChanged[2].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      );
    } else if (e.currentTarget.id.includes("forth")) {
      imageToBeChanged[3].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      );
    } else if (e.currentTarget.id.includes("fifth")) {
      imageToBeChanged[4].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      );
    } else if (e.currentTarget.id.includes("sixth")) {
      imageToBeChanged[5].children[0].setAttribute(
        "src",
        colorimage[e.currentTarget.id]
      );
    }
  });
});

/**fotter dropdown **/

let isClicked = false; //here false means it is not open
let button = document.querySelectorAll(".changing-button");
const clickingPart = document.querySelectorAll(".click-then-expand");
const changedPart = document.querySelectorAll(".expand");
const expandableBig = document.querySelector(".expandable"); //whole
const expandableNormalBig = document.querySelectorAll(".expandablecontent"); //content 2 sub-part
const expandablelittleBig = document.querySelectorAll(".expandable-sub"); //sub-parts
let currentid = 0;
clickingPart.forEach((part) => {
  part.addEventListener("click", (el) => {
    const ind = Number(el.currentTarget.id) - 1;
    if (isClicked && currentid == ind) {
      //that means it is open
      button[ind].children[0].setAttribute(
        "src",
        "assets/footer/arrowdown2.png"
      );
      changedPart[ind].style.display = "none";
      isClicked = false;
    } else if (isClicked && currentid != ind) {
      button[ind].children[0].setAttribute("src", "assets/footer/arrowup.png");
      changedPart[ind].style.display = "inline";
      button[currentid].children[0].setAttribute(
        "src",
        "assets/footer/arrowdown2.png"
      );
      changedPart[currentid].style.display = "none";
    } else {
      //that means it is not open
      button[ind].children[0].setAttribute("src", "assets/footer/arrowup.png");
      changedPart[ind].style.display = "inline";
      isClicked = true;
    }
    currentid = ind;
  });
});
