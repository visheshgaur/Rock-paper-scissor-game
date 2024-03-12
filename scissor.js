let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg");
btn=document.querySelector("#btn");





const draw=()=>{
    msg.style.backgroundColor="#ffb0b0"
    
    
        console.log("draw")
    }
    const uwin=()=>{
        console.log("user win")
    }
    const ulose=()=>{
        console.log("computer wins")
    }
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
     return(options[randIdx])
    }
    const validate=()=>{
        if(userscore==3){
            msg.innerText="USER WINS FINALLY CLICK RESET"

           

        }
        if(compscore==3){
            msg.innerText="COMPUTER WINS FINALLY CLICK RESET";
            
           
        }
    }
    const reset=()=>{
            msg.innerText="Play Your Move"
            let resert=document.querySelector(".cscore").innerText=0
            let uresert=document.querySelector("#fcorr").innerText=0
            compscore=0
            userscore=0
            msg.style.backgroundColor="#0c2d57"
        }
        btn.onclick=()=>{
            reset()

        }
const userchoice=(us)=>{
console.log(us)


}


let choice=document.querySelectorAll(".bit");
let rock=document.querySelector("#rock")

rock.onclick=()=>{
     
    const us="rock"
     userchoice(us)
     let cs=gencompchoice()
     console.log("computer choice=",cs)
    if(us==cs){
        draw()
        msg.innerText="Game Draw"
        msg.style.backgroundColor="#0c2d57"
        validate()
       
        
    }
    if(us==="rock"&&cs==="paper"){
        ulose()
        let cscore=document.querySelector(".cscore").innerText=compscore+1
        compscore=cscore
        msg.innerText="Computer wins  as Paper beats Rock";
        msg.style.backgroundColor="red";
        validate()
    }
    if(us==="rock"&&cs==="scissor"){
        uwin()
        let uscore=document.querySelector("#fcorr").innerText=userscore+1
        userscore=uscore
        msg.innerText="You win as Rock beats Scissor"
        msg.style.backgroundColor="green";
        validate()
        
    }
        if(us==="paper"&&cs==="rock"){
            uwin()
            let uscore=document.querySelector("#fcorr").innerText=userscore+1
            uscore=userscore
            msg.innerText="You win as Paper beats Rock"
            msg.style.backgroundColor="green";
            validate()
           
          

        }
        if(us==="paper"&&cs==="scissor"){
            ulose()
            let cscore=document.querySelector(".cscore")
            compscore=cscore
            msg.innerText="Computer wins as Scissor beats Paper"
            msg.style.backgroundColor="red";
            validate()
            
        }
        if(us==="scissor"&&cs==="rock"){
            ulose()
            let cscore=document.querySelector(".cscore")
            compscore=cscore
            msg.innerText="Computer wins as Scissor beats Rock"
            msg.style.backgroundColor="red";
            validate()
            
           
        }
        if(us==="scissor"&&cs==="paper"){
            uwin()
            let uscore=document.querySelector("#fcorr").innerText=userscore+1
            userscore=uscore
            msg.innerText="You win as Scissor beats Paper"
            msg.style.backgroundColor="green";
            validate()
          
        }
    }
    
     



let paper=document.querySelector("#paper");
paper.onclick=()=>{
    
     let us="paper"
    userchoice(us)
    
   let cs=gencompchoice()
    console.log("computer choice=",cs)
    if(us===cs){
        draw()
        msg.innerText="Game Draw"
        msg.style.backgroundColor="#0c2d57"
        validate()
        
    }
    if(us==="paper"&&cs==="rock"){
        uwin()
        let uscore=document.querySelector("#fcorr").innerText=userscore+1
        userscore=uscore
        msg.innerText="You win as Paper beats Rock"
        msg.style.backgroundColor="green";
        validate()
        
    }
    if(us==="paper"&&cs==="scissor"){
        ulose()
        let cscore=document.querySelector(".cscore").innerText=compscore+1
        compscore=cscore
        msg.innerText="Computer wins as Scissor beats Paper"
        msg.style.backgroundColor="red";
        validate()
       
        }
    
    }
scissor=document.querySelector("#scissor");
scissor.onclick=()=>{
    
    let us="scissor"
    userchoice(us)
   
    let cs=gencompchoice()
    console.log("computer choice=",cs)
    if(us==cs){
        draw()
        msg.innerText="Game Draw"
        msg.style.backgroundColor="#0c2d57"
        validate()
       
    }
    if(us==="scissor"&&cs==="paper"){
        uwin()
        let uscore=document.querySelector("#fcorr").innerText=userscore+1
        userscore=uscore
        msg.innerText="You win as Scissor beats Paper"
        msg.style.backgroundColor="green";
        validate()
        

        
    }
    if(us==="scissor"&&cs==="rock"){
        ulose()
        let cscore=document.querySelector(".cscore").innerText=compscore+1
        compscore=cscore
        msg.innerText="Computer wins as Rock beats Scissor"
        msg.style.backgroundColor="red";
        validate()
        
    }
        
    
}
