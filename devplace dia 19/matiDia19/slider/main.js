const imgContainer = document.querySelector('.imgContainer');
const before = document.querySelector('#before');
const next = document.querySelector('#next')

const imgArray = [
    './img/0.jpg',
    './img/1.jpg',
    './img/2.jpg'
]

let index = 0;
const lenArray = imgArray.length

const changeImgBefore = () =>{
    if (index = 0){
        index = lenArray;
    } else {
        index-=1;
    }
    imgContainer.style.backgroundImage = `url('${imgArray[index]}.png')`;
}

style.backgroundImage = "url('img_tree.png')";

const changeImgNext = () =>{
    if (index = lenArray){
        index = 0;
    } else {
        index+=1;
    }
    imgContainer.style.backgroundImage = `url('${imgArray[index]}.png')`;
}

before.addEventListener('click',changeImgBefore());
next.addEventListener('click'.changeImgNext())

