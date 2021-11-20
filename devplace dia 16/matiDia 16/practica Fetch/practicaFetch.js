

const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const getDataAsync = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}


// return fetch('http://example.com/api/v1/registration', {
//         method: 'POST',
//         body: formData
//     }).then(response => response.json())