const BASE_URL = `https://data.cityofnewyork.us/resource/erm2-nwe9.json`


const manhattanbtn = document.querySelector("#Manhattan");
const brooklynbtn = document.querySelector("#Brooklyn");
const queensbtn = document.querySelector("#Queens");
const statenbtn = document.querySelector("#Staten");
const bronxbtn = document.querySelector("#Bronx");

const agency = "NYPD"
const manhattan = "MANHATTAN";
const brooklyn = "BROOKLYN";
const queens = "QUEENS"
const staten = "STATEN ISLAND";
const bronx = "BRONX";

const numberInput = document.querySelector("input");

const infoDiv = document.querySelector("div");

manhattanbtn.addEventListener('click', async() => {
let number = numberInput.value

    if(number === ""){
        number = 10;
    }
try{
    let response = await axios.get(`${BASE_URL}?borough=${manhattan}&$limit=${number}&agency=${agency}`)
    // console.log(response)
    
    let answer = response.data
    console.log(answer)

    for (let i=0; i < answer.length; i++){
        let answerObj = answer[i].descriptor;
        // console.log(answerObj)
        infoDiv.innerHTML += answerObj + "<br>"
    }

} catch (error) {
    console.log(error)
}
 
})

brooklynbtn.addEventListener('click', async() => {
    let number = numberInput.value
    
        if(number === ""){
            number = 10;
        }
    try{
        let response = await axios.get(`${BASE_URL}?borough=${brooklyn}&$limit=${number}&agency=${agency}`)
        // console.log(response)
        
        let answer = response.data
        console.log(answer)
    
        for (let i=0; i < answer.length; i++){
            let answerObj = answer[i].descriptor;
            // console.log(answerObj)
            infoDiv.innerHTML += answerObj + "<br>"
        }
    
    } catch (error) {
        console.log(error)
    }
})


queensbtn.addEventListener('click', async() => {
    let number = numberInput.value
    
        if(number === ""){
            number = 10;
        }
    try{
        let response = await axios.get(`${BASE_URL}?borough=${queens}&$limit=${number}&agency=${agency}`)
        // console.log(response)
        
        let answer = response.data
        console.log(answer)
    
        for (let i=0; i < answer.length; i++){
            let answerObj = answer[i].descriptor;
            // console.log(answerObj)
            infoDiv.innerHTML += answerObj + "<br>"
        }
    
    } catch (error) {
        console.log(error)
    }
})

statenbtn.addEventListener('click', async() => {
    let number = numberInput.value
    
        if(number === ""){
            number = 10;
        }
    try{
        let response = await axios.get(`${BASE_URL}?borough=${staten}&$limit=${number}&agency=${agency}`)
        // console.log(response)
        
        let answer = response.data
        console.log(answer)
    
        for (let i=0; i < answer.length; i++){
            let answerObj = answer[i].descriptor;
            // console.log(answerObj)
            infoDiv.innerHTML += answerObj + "<br>"
        }
    
    } catch (error) {
        console.log(error)
    }
})

bronxbtn.addEventListener('click', async() => {
    let number = numberInput.value
    
        if(number === ""){
            number = 10;
        }
    try{
        let response = await axios.get(`${BASE_URL}?borough=${bronx}&$limit=${number}&agency=${agency}`)
        // console.log(response)
        
        let answer = response.data
        console.log(answer)
    
        for (let i=0; i < answer.length; i++){
            let answerObj = answer[i].descriptor;
            // console.log(answerObj)
            infoDiv.innerHTML += answerObj + "<br>"
        }
    
    } catch (error) {
        console.log(error)
    }
})