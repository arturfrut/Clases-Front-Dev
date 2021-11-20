const heart = document.querySelector('#heart');
const play = document.querySelector('.play');
const bigBtn = document.querySelector('.big-btn')
 
heart.addEventListener('click',()=>{
   if (heart.style.color != 'red'){
        heart.style.color = 'red'
   } else {
        heart.style.color = 'green'
   }
} )

bigBtn.addEventListener('click',()=>{
    if(bigBtn.classList.contains('bi-play-circle')) {
        bigBtn.classList.remove('bi-play-circle')
        bigBtn.classList.add('bi-pause-circle')
    } else {
        bigBtn.classList.remove('bi-pause-circle')
        bigBtn.classList.add('bi-play-circle')
    }
})

console.log(bigBtn.classList)