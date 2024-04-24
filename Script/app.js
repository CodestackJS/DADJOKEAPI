//alert ("hello");
let jokes = document.getElementById("jokes");



let jokeButton = document.getElementById("jokeButton").addEventListener("click", function(){
    getJokes();
});


async function getJokes(){
    let apiResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    }).then(Response => Response.json());
    jokes.innerText = apiResponse.joke;
    
};

