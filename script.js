function setLang(lang) {
    if(lang === 'en') {
        document.getElementById('title').innerText = "Black Elephant Chess Club";
        document.getElementById('desc').innerText = "Best chess club for everyone";
    } else {
        document.getElementById('title').innerText = "Шахматный клуб 'Черный слон'";
        document.getElementById('desc').innerText = "Лучший клуб для любителей шахмат";
    }
}
