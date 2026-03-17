AOS.init();


function toggleSidebar(){

let sidebar = document.getElementById("sidebar");

if(sidebar.style.left === "0px"){

sidebar.style.left = "-240px";

}else{

sidebar.style.left = "0px";

}

}


let email = localStorage.getItem("userEmail");

if(email){

document.getElementById("userEmail").innerText = email;

document.getElementById("welcomeEmail").innerText = "Patient : " + email;

}


const ctx = document.getElementById("healthChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[

{
label:"Heart Rate",
data:[80,90,85,100,95,110,98],
borderColor:"#00ffe7",
tension:0.4
},

{
label:"Blood Pressure",
data:[120,130,125,135,128,138,132],
borderColor:"#ff4d6d",
tension:0.4
}

]

}

});


gsap.from(".sidebar",{x:-200,duration:1});

gsap.from(".card",{opacity:0,y:50,stagger:0.2,duration:1});

gsap.from(".topbar",{y:-50,opacity:0,duration:1});
