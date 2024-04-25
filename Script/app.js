//alert ("hello");
let jokes = document.getElementById("jokes");
let rndImage = document.getElementById("rndImage");


let jokeButton = document.getElementById("jokeButton").addEventListener("click", function(){
    getJokes();
    changeBackground();
});

//Pulling API
async function getJokes(){
    let apiResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    }).then(Response => Response.json());
    jokes.innerText = apiResponse.joke;
    
};


function changeBackground(){
    let images = [
        'Homer-Simpson.jpeg',
        'HomerSimpson.jpeg',
        'simp_homersingle08_f_hires2-2000-cf09d1b1345c4e66b57bced2bebbe492.jpg'
    ];
    let randomImages = images[Math.floor(Math.random() * images.length)];    
    rndImage.src = "/Images/" + randomImages;
}
