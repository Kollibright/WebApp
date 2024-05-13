// let res = JSON.parse('{  "id": "ab2123","name": "Kola","age": 23}')

// console.log(res);
// let data = new XMLHttpRequest()
// data.open('GET', 'https://api.publicapis.org/entries')
// data.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
// data.open('GET', `https://randomuser.me/api/`)
// data.onload = function () {
//     let dt = JSON.parse(data.responseText) 
//     console.log(dt.results[0].dob);
//     // for(let mydt of dt){
//     //     console.log(mydt);
//     // }
//     // dt.map((dt)=>{console.log(dt);})
// }
// data.send()

let res =  fetch(`https://randomuser.me/api/`)
// res.json()
.then(response =>{
    if (!response.ok){
        console.log('Error fetching data');
    }
   return response.json()

} )
.then(data => console.log(data))
.catch((err)=>{
    console.log(err.message);
})



