const form = document.querySelector("form")
const movieName =document.querySelector("input")
form.onsubmit=(e)=>{
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=d1c7fe3fd9dbc2aa645c23cab345a047&language=en-US&query="+movieName.value+"&page=1&include_adult=false")
    .then((response)=>{return response.json()})
    .then((result)=>{console.log(result);
        names(result.results)
    })
}
function names(data){
    // const head=document.createElement("h1")
    // head.innerHTML=data[0].title;
    // document.querySelector("#results").append(head);
    data.forEach((movie) => {
    const image=document.createElement("img")
    image.src = "https://image.tmdb.org/t/p/original"+movie.poster_path;
    document.querySelector("#results").append(image);
    });
    
}