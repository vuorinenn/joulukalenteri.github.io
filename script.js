const viestit = [
  "Hyvää joulukuun ensimmäistä päivää!",
  "Muista syödä pipareita tänään!",
  "Joululaulut tuovat iloa päivääsi!",
  "On aika koristella joulukuusi!",
  "Joululahjojen ostaminen on hauskaa!",
  "Nauti kuumaa kaakaota kylmänä päivänä!",
  "Tee joulukortteja ystäville!",
  "Katso jouluelokuva tänään!",
  "Leivo joulutorttuja yhdessä perheen kanssa!",
  "Joulun taika on kaikkialla!",
  "Muista antaa aikaa läheisillesi!",
  "Joulun odotus lämmittää mieltä!",
  "Käy joulumarkkinoilla!",
  "Joulun värit piristävät!",
  "Auta tarvitsevia!",
  "Joulun tuoksut täyttävät kodin!",
  "Valmista jouluateria yhdessä!",
  "Joulun aika on antamisen aikaa!",
  "Nauti talvimaisemista!",
  "Joulun valot loistavat!",
  "Rentoudu ja nauti!",
  "Joulupukki on matkalla!",
  "Valmistaudu jouluaattoon!",
  "Hyvää joulua ja uutta vuotta!"
];

const kalenteri = document.getElementById("kalenteri");

for (let i = 1; i <= 24; i++) {
  const ovi = document.createElement("div");
  ovi.className = "ovi";

  const numero = document.createElement("span");
  numero.textContent = i;

  const content = document.createElement("div");
  content.className = "content";
  content.textContent = viestit[i - 1];

  ovi.appendChild(numero);
  ovi.appendChild(content);

  ovi.onclick = () => {
    ovi.classList.add("open");
  };

  kalenteri.appendChild(ovi);
}
