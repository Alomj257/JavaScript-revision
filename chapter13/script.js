const URL = "https://dogapi.dog/api/v2/breeds";

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data)
}
getFacts()