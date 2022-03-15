let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteAll = document.getElementById("delete-all");
const saveTab = document.getElementById("save-tab");
let i = 0;
let leadsFromLocalStorage;

// Fetching all the data that we stored before reloding the web page
if (localStorage.getItem("myLeads") !== null) {
  myLeads = JSON.parse(localStorage.getItem("myLeads"));
  leadsFromLocalStorage = myLeads;
  while (i < leadsFromLocalStorage.length) {
    renderData();
  }
}

// when we press the button to save the input string
inputBtn.addEventListener("click", () => {
  // console.log("hi");
  if (inputEl.value != "") {
    // myLeads = JSON.parse(localStorage.getItem("myLeads"));
    myLeads.push(inputEl.value);

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = "";

    leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
    renderData();
  }
});

// If we press the enter key than using the click on the button to save the input string
inputEl.addEventListener("keyup", (event) => {
  //   event.preventDefault();
  if (event.keyCode === 13) {
    event.preventDefault();
    inputBtn.click();
  }
});

// When we click on the edit button to delete the whole data
deleteAll.addEventListener("dblclick", () => {
  localStorage.clear();
  i = 0;
  ulEl.innerHTML = "";
  myLeads.length = 0;
  // console.log(myLeads)
});

// To put the data inside of the list items
function renderData() {
  ulEl.innerHTML += `<li><a href = "${leadsFromLocalStorage[i]}" target = "_blank"> ${leadsFromLocalStorage[i]} </a></li> `;
  i++;
}

// Save tab  chrome api code

saveTab.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderData();
  });
});

// // num1 and num2 are parameters cause they are inside the function
// function add (num1,num2)
// {
//     return num1 + num2;
// }
// // 2,3 are arguments cause they are outside the function
// console.log(add(2,3));
// json.stringfy
// json.parse
// localStorage
//typeof
// console.log(leadsFromLocalStorage);
// truty adn falsy
// argument vs parameter
