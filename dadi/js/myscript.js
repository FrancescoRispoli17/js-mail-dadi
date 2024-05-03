'use strict';

const n_usciti=[];
const tira=document.querySelector('#tira');
let i=0;
tira.addEventListener('click', function(){
    const n=Math.floor(Math.random() * 6)+1;
    n_usciti.push(n);
    if(i==0){
        document.querySelector('#player label').innerText='Il tuo numero: ';
        document.querySelector('#pc label').innerText='numero pc: ';
        document.querySelector('#risultato').innerText='';
        document.querySelector('#player label').innerText+=n;
    }
    if(i==1){
        document.querySelector('#pc label').innerText+=n;
        document.querySelector('#pc').classList.add('d-block');
        document.querySelector('#pc').classList.remove('d-none');
    }
    console.log(i)
    i++;

    if(n_usciti.length == 2){
        if(n_usciti[0]>n_usciti[1]){
            document.querySelector('#risultato').innerText='HAI VINTO';
        }
        else if(n_usciti[0] == n_usciti[1]){
            document.querySelector('#risultato').innerText='PARIIIIIIIIII';
        }
        else{
            document.querySelector('#risultato').innerText='HAI PERSO';
        }
        n_usciti[0]='';
        n_usciti[1]='';
        n_usciti.length=0;
        console.log(n_usciti);
        i=0;
    }
})