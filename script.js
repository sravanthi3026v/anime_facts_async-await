//returns Anime facts
const fetchData3=document.querySelector("#fetch3");
const randanime=document.querySelector("#API3");

fetchData3.addEventListener("click",getanimeData);

async function getanimeData(){
    randanime.innerHTML="";
    try{                     
let fetchanimeResult=await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
let animeList=await fetchanimeResult.json();
console.log(animeList);
let animeFinal=animeList.data[0];
randanime.innerHTML=`
<div>success: ${animeList.success}</div>
<div>anime_id: ${animeFinal.anime_id}</div>
<div>anime_name: ${animeFinal.anime_name}</div>
<a href="${animeFinal.anime_img}" target="_blank">anime_img</a>
`;
    }catch(err){
        randanime.innerHTML= error;
    }
}

