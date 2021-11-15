const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=num';

const getDataAsync = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}