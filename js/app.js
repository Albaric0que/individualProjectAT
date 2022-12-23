const requestURL = "../json/adventureTime.json";

async function fetchAdventureJson() {
  const response = await fetch(requestURL);
  const info = response.json();
  return info;
}

fetchAdventureJson().then((info) => {
  for (let index = 0; index < info.temporada3.length; index++) {
    const adventureSection = document.getElementById("adventureSection");

    let id = info.temporada3[index].id;
    let episode = info.temporada3[index].episodio;
    let img = info.temporada3[index].caratula;
    let title = info.temporada3[index].titulo;
    let sinop = info.temporada3[index].sinopsis;
    let panel = info.temporada3[index].guion;

    /* console.log(info.temporada3[index].titulo); */
    adventureSection.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title title">${title}</h3>
          <h5 class="card-title season">Season 3 episode ${episode}</h5>
          <h5 class="card-title written"> Written by ${panel}</h5>
          <p class="card-text">${sinop}</p>
        </div>
      </div>
    `;
  }
});
