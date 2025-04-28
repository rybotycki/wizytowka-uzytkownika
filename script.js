const uzytkownik1 = {
    imie: "Adam",
    nazwisko: "Nowak",
    wiek: 28,
    miasto: "Warszawa",
    zawod: "Front-end Developer",
    email: "adam.nowak@example.com",
    telefon: "+48 600 100 200",
    zainteresowania: ["programowanie", "gry komputerowe", "podróże"]
};

const uzytkownik2 = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 32,
    miasto: "Kraków",
    zawod: "Graphic Designer",
    email: "jan.kowalski@example.com",
    telefon: "+48 500 200 100",
    zainteresowania: ["grafika", "dizajn", "muzyka"]
};

let aktualnyUzytkownik = 1;

function pokazDaneUzytkownika(uzytkownik) {
    const divWizytowka = document.querySelector(".wizytowka");

    divWizytowka.innerHTML = "";


    divWizytowka.innerHTML = `
            <h2>${uzytkownik.imie} ${uzytkownik.nazwisko}</h2>
            <p>Wiek: ${uzytkownik.wiek}</p>
            <p>Miasto: ${uzytkownik.miasto}</p>
            <p>Zawód: ${uzytkownik.zawod}</p>
            <p>Email: ${uzytkownik.email}</p>
            <p>Telefon: ${uzytkownik.telefon}</p>
            <p>Zainteresowania:</p>
            <ul>
                <li>${uzytkownik.zainteresowania[0]}</li>
                <li>${uzytkownik.zainteresowania[1]}</li>
                <li>${uzytkownik.zainteresowania[2]}</li>
            </ul>
        `;

    const elementyDoAnimacji = divWizytowka.querySelectorAll("h2, p, ul");
    elementyDoAnimacji.forEach(el => {
        el.classList.remove("fade-in");
        void el.offsetWidth;
        el.classList.add("fade-in");
    });

}

window.addEventListener("DOMContentLoaded", () => {
    pokazDaneUzytkownika(uzytkownik1);
});

const przyciskAktualizuj = document.getElementById("aktualizuj");
const przyciskZmien = document.getElementById("zmien");

przyciskAktualizuj.addEventListener("click", function () {
    if (aktualnyUzytkownik === 1) {
        pokazDaneUzytkownika(uzytkownik1);
    } else {
        pokazDaneUzytkownika(uzytkownik2);
    }
});

przyciskZmien.addEventListener("click", function () {
    if (aktualnyUzytkownik === 1) {
        pokazDaneUzytkownika(uzytkownik2);
        aktualnyUzytkownik = 2;
    } else {
        pokazDaneUzytkownika(uzytkownik1);
        aktualnyUzytkownik = 1;
    }
});
