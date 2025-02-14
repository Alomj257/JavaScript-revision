// const URL = "https://dogapi.dog/api/v2/breeds";

// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data)
// }
// getFacts()


// const getData = async () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if(!response){
//             throw new Error("Network issue");
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error(error)
//     }
// }

// getData();


async function getData(){
    setTimeout(async () => {
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if(!response){
                throw new Error('Network issue');
            }
            let data = await response.json();
            console.log(data);
        }catch(error){
            console.error(error);
        }
    },2000)
}

getData();