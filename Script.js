let mood = 0;

function improveMood(){
mood += 20;
if(mood > 100) mood = 100;
document.getElementById("energy").style.width = mood + "%";
}

function breathe(){
let text = document.getElementById("breathText");

text.textContent = "Inspire...";
setTimeout(()=>{ text.textContent = "Garde..."; },2000);
setTimeout(()=>{ text.textContent = "Expire..."; },4000);
}

function message(){
let messages=[
"Tu es capable de surmonter ça.",
"Prends une pause, tu le mérites.",
"Tu n’es pas seul.",
"Chaque jour est une nouvelle chance."
];

let random=Math.floor(Math.random()*messages.length);
document.getElementById("msg").textContent=messages[random];
}

function createParticles(){
for(let i=0;i<25;i++){
let p=document.createElement("div");
p.className="particle";
p.style.left=Math.random()*100+"vw";
document.body.appendChild(p);
}
}
createParticles();