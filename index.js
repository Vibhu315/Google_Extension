// function savelead(){

// }
//how to store array in local storage using json
// let myleads=`["www.eample.com"]`;
// myleads=JSON.parse(myleads);//converts string into array
// myleads.push("www.vibhu.com");
// console.log(myleads);

// let myleads=["www.index.com","www.indes.com"];
// myleads=JSON.stringify(myleads);//converts arrays into sring

// console.log( typeof myleads);

let myleads=[];

const inputel=document.getElementById("input-el");
const ulel=document.getElementById("ul");

// localStorage.setItem("setlinks","www.example.com");
//conosle.log( localStorage.getItem("setlinks"));
// localStorage.clear();

let savetab=document.getElementById("savetab");
savetab.addEventListener("click",function(){
    // console.log(tabs[0])
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("mylinks",JSON.stringify(myleads));
        renderlead(myleads);
    }) ; 

    
})
const leadsfromlocalstroage= JSON.parse(localStorage.getItem("mylinks"))
let doubleclk=document.getElementById("deleteall");
if(leadsfromlocalstroage){
    myleads=leadsfromlocalstroage;
    renderlead(myleads);
}

const inputbtn = document.getElementById("input-btn");
function  renderlead(leads){
    let list_items="";
    for( let i=0;i<leads.length;i++){
       list_items += "<li><a target='_blank' href='#'>"+  leads[i];+ "</a></li>"; 
        // const li=document.createElement("li")
        // li.textContent=myleads[i];  alternative
        // ulel.append(li);
    
    }
    ulel.innerHTML=list_items;
} 
inputbtn.addEventListener("click",function (){
    myleads.push(inputel.value);
    renderlead(myleads);
    inputel.value="";
    localStorage.setItem("mylinks",JSON.stringify(myleads));
//    console.log(localStorage.getItem("mylinks"))

}) 
doubleclk.addEventListener('dblclick',function(){
    localStorage.clear();
    myleads=[];
    renderlead(myleads);

})

//null->how you signalize emptiness
//undefimed->how js signalize emptiness