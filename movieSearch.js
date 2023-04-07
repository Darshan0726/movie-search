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
    if(data.length===0){
        const wrong=document.createElement("h1")
        wrong.innerHTML="Not Found"
        document.querySelector("#results").append(wrong)
    }else{
    const results=document.querySelector("#results");
    results.innerHTML="";
    data.forEach((movie) => {
    const movieDiv=document.createElement("div");
    movieDiv.classList.add("movie")

    const image=document.createElement("img")
    image.src = (movie.poster_path) ? "https://image.tmdb.org/t/p/original"+movie.poster_path : "000000h1.jpg";

    const name=document.createElement("h3")
    name.innerHTML=titleName(movie.original_title);


    movieDiv.append(name);
    movieDiv.append(image);
    results.append(movieDiv);
    });
}
function titleName(name){
    if(name.length>30){
        return name.slice(0,30)="..."
    }
    else{
        return name
    }
}
}
