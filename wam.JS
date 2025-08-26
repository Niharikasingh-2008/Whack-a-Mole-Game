let btns=["one","two","three","four","five","six","seven","eight","nine"];
let h2=document.querySelector("h2");
let userclick=[];
let gameclick=[];
let start=false;
let level=0;
document.addEventListener("keypress",()=>{
    if(start==false){
        start=true;
        levelup();
    }
})
function levelup(){
    level++;
    h2.innerText=`Level-${level}`;
let ranno = Math.floor(Math.random()*9);
let randombtn = btns[ranno];
let btn = document.getElementById(randombtn);
gameflash(btn);
gameclick.push(btn);
console.log(gameclick);
}
function gameflash(btn){
btn.classList.add("mole");
setTimeout(()=>{
    btn.classList.remove("mole")
},50);
}

albtns=document.querySelectorAll(".button");
for(btn of albtns){
    btn.addEventListener("click",btnpress);
}
function btnpress(button){
let bn=this;
userclick.push(bn);
checkans(userclick.length-1,bn);
console.log(userclick)
}
function checkans(idx,bn){
    if(userclick[idx]==gameclick[idx]){
        if(userclick.length==gameclick.length){
            bn.classList.add("right");
setTimeout(()=>{
    bn.classList.remove("right")
},100);
levelup();

        }
    }else{
        h2.innerText=`Game Over Your score is-${level}`;
        let h3=document.createElement("h3");
        h3.innerText="Press any key to start again";
        h2.appendChild(h3);
                   bn.classList.add("wrong");
setTimeout(()=>{
    bn.classList.remove("wrong")
},100);
let body=document.querySelector("body");
           body.classList.add("wrong");
setTimeout(()=>{
    body.classList.remove("wrong")
},200);
        reset();
    }
}
function reset(){
start=false;
level=0;
userclick=[];
gameclick=[];

}
