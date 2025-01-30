const getData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response){
            throw new Error("Network issue");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error)
    }
}

getData();