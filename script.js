let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteAll = document.getElementById("delete-all");
const saveTab = document.getElementById("save-tab");
let i =0;
let leadsFromLocalStorage;

if(localStorage.getItem("myLeads")!==null){
 
myLeads = JSON.parse(localStorage.getItem("myLeads"));
leadsFromLocalStorage = myLeads;
while(i<leadsFromLocalStorage.length)
{
ulEl.innerHTML += `<li><a href = "${leadsFromLocalStorage[i]}" target = "_blank"> ${leadsFromLocalStorage[i]} </a></li> `;
i++;
}

}
inputBtn.addEventListener("click",()=>{
    // console.log("hi");
    if(inputEl.value!="")
    {
    // myLeads = JSON.parse(localStorage.getItem("myLeads"));
    myLeads.push(inputEl.value);
    
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    inputEl.value = "";

leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
   
    // console.log(leadsFromLocalStorage);
   
   
    ulEl.innerHTML += `<li><a href = "${leadsFromLocalStorage[i]}" target = "_blank"> ${leadsFromLocalStorage[i]} </a></li> `;
    i++;
          
   
    }
})

inputEl.addEventListener("keyup",(event)=>{
    //   event.preventDefault();
    if(event.keyCode===13)
    {
event.preventDefault();
    inputBtn.click();
    }
});
saveTab.addEventListener("click",()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        console.log(myLeads);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
   ulEl.innerHTML += `<li><a href = "${myLeads[i]}" target = "_blank"> ${myLeads[i]} </a></li> `;
   i++;
})
});
deleteAll.addEventListener("dblclick",()=>{
    localStorage.clear();
    i=0;
    ulEl.innerHTML = "";
    myLeads.length =0;
    // console.log(myLeads)
})
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