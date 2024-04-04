let current=1;
let a=0;
let score=0;
function show(){
    //a=10;
    a=Math.floor(Math.random()*10+1);
    let bt=document.getElementById('die');
    bt.innerHTML=a
    setTimeout(show2,2000);
}
function show2(){
    
    
    
    let  pi=document.getElementById('pi');
    let pop=document.getElementById('pop');
    let bu=document.getElementById('bu');
    
    pop.innerHTML=`<p class="he2">What is the ${current} +${a}?</p>
     <input type="text" class="he3" id="pb">
     <button onclick="next()" class="pbu" >check</button>`
    pi.style.display='block';
    pop.style.display='block';
    bu.style.display='none';
     
}
function start(){
    let  pi=document.getElementById('pi');
    let pop=document.getElementById('pop');
    let bu=document.getElementById('bu');
    pi.style.display='none';
    pop.style.display='none';
    bu.style.display='block';
     let sc=document.getElementById('s2');
     sc.innerHTML=score;
}
function next(){
    //current=current+a;
    let pbu=document.getElementById('pb').value;
    //let cur=document.getElementById(`${current}`);
    //let ocur=document.getElementById(`${current-a}`);
    //cur.classList.add("cure");
    //ocur.classList.remove("cure");
    //console.log(cur);
  /*  if(current=>100){
        let board=document.getElementById('board')
        board.innerHTML=`<p style="text-aligin:center">Game completed</p><p style="text-aligin:center">${score}</p>`;
    }*/

    if (pbu==current+a){
        current=current+a;
        let cur=document.getElementById(`${current}`);
        let ocur=document.getElementById(`${current-a}`);
    cur.classList.add("cure");
    ocur.classList.remove("cure");
        score=score+current;
       
        console.log("correct answer");
        start();
        console.log("*****");
    }
    else{
        current=current
    
    
        score=score-a;
        start();
    }

}
