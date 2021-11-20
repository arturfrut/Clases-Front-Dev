const gridListItems = [
    {
        title: 'Soy una nube',
        icon: 'bi-cloud-fog'
    },
    {
        title: 'Soy una cosa',
        icon: 'bi-cpu'
    },
    {
        title: 'Soy otra cosa',
        icon: 'bi-device-hdd'
    }

]


const gridBlockI = document.querySelectorAll('.gridBlockI');
const gridBlockP = document.querySelectorAll('.gridBlockP');
const gridList = document.querySelectorAll('.gridList');

console.log (gridListItems[0].title)

const changeInfoGrid = (index) =>{
    gridList[i].addEventListener('click',(e)=>{
            gridList[index].classList.toggle('.gridListActive')
            gridBlockP[index].innerText = gridListItems[index].title;
            switch (index) {
                case 0:
                    for (let i = 0; i < 15; index++) {
                        gridBlockI[i].classList.remove('.bi-cloud-fog');
                        gridBlockI[i].classList.remove('.bi-cpu');
                        gridBlockI[i].classList.remove('.bi-device-hdd');
                        gridBlockI[i].classList.add(gridListItems[index].icon)    
                    }
                    break;
            
                case 1:
                    for (let i = 15; i < 30; index++) {
                        gridBlockI[i].classList.remove('.bi-cloud-fog');
                        gridBlockI[i].classList.remove('.bi-cpu');
                        gridBlockI[i].classList.remove('.bi-device-hdd');
                        gridBlockI[i].classList.add(gridListItems[index].icon)    
                    }
                    break;
                case 2:
                    for (let i = 30; i < 44; index++) {
                        gridBlockI[i].classList.remove('.bi-cloud-fog');
                        gridBlockI[i].classList.remove('.bi-cpu');
                        gridBlockI[i].classList.remove('.bi-device-hdd');
                        gridBlockI[i].classList.add(gridListItems[index].icon)    
                    }
                    break;

            }
;
    })
}

let i = 0;
const gridLen = gridList.length-1;


for (;i < gridLen ; i++){
    changeInfoGrid(i)
}