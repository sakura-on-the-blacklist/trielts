const readMoreBtn = document.querySelector('.read-more-btn')
const text = document.querySelector('.text')
const readpop = document.querySelector('.readpop')
const speakpop = document.querySelector('.speakpop')
const listenpop = document.querySelector('.listenpop')
const writepop = document.querySelector('.writepop')
readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'read more'){
        readMoreBtn.innerText = 'read less'
    }else{
        readMoreBtn.innerText = 'read more'
    }

});

readpop.addEventListener('click', ()=>{
    readpop.classList.toggle('pop');
} )

speakpop.addEventListener('click', ()=>{
   speakpop.classList.toggle('pop');
} )

listenpop.addEventListener('click', ()=>{
    listenpop.classList.toggle('pop');
} )

writepop.addEventListener('click', ()=>{
    writepop.classList.toggle('pop');
} )