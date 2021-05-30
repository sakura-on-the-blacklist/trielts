const readMoreBtn = document.querySelector('.read-more-btn')
const text = document.querySelector('.text')

readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'read more'){
        readMoreBtn.innerText = 'read less'
    }else{
        readMoreBtn.innerText = 'read more'
    }

})