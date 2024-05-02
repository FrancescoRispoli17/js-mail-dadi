'use strict';

const emails=['rispolifrancesco@gmail.com','stanleykubrick@gmail.com','yoshihirotogashi@gmail.com'];
const button=document.querySelector('#button-addon2');

button.addEventListener('click', function(){
    const email=document.querySelector('input').value;
    for(let i=0; i < email.length; i++){
        if(email===emails[i]){
            alert('sei nella lista');
            console.log(email);
            retrun;
        }
    }
    alert('non sei nella lista');
})