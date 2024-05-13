// Suppression contenu des boutons taille écran téléphone
function removeText () {
    let btnContact = document.getElementsByClassName('btnContact');
    if (window.matchMedia('(max-width: 1200px)').matches) {
        for (let element of btnContact) {
            element.childNodes[1].nodeValue = ' ';
        }
    }
}

window.onload = removeText;
window.onresize = removeText;

// Ajout du CV au bouton CV
let btnCV = document.getElementById('btnCV');
btnCV.addEventListener('click', () => {document.getElementById('dlLink').click()});

// Attribution des éléments aux boutons de contact Format téléphone
const mql = window.matchMedia('(max-width: 1200px)');

function setCall () {
    let btnCell = document.getElementsByClassName('btnCell');
    if (mql.matches) {
        for (let element of btnCell) {
            element.addEventListener('click', () => {window.location.href='tel:+6626716443'});
        }
    }
}

function setMail () {
    let btnMail = document.getElementsByClassName('btnMail');
    if (mql.matches) {
        for (let element of btnMail) {
            element.addEventListener('click', () => {window.location.href='mailto:damienbilliau@gmail.com'});
        }
    }
}

mql.addEventListener("change", setCall);
mql.addEventListener("change", setMail);


// Attribution des éléments aux boutons de contact format Ordinateur
const mqlMax = window.matchMedia('(min-width: 1200px)');
function setCopy () {
    let btnLink = document.getElementsByClassName('btnLink');
    if (mqlMax.matches) {
        for (let element of btnLink) {
            element.setAttribute("title", "cliquez pour copier");
            let text = element.childNodes[1].textContent;
            element.addEventListener('click', () => {
                navigator.clipboard.writeText(text);
                console.log("contenu copié : " + text);
                element.childNodes[1].nodeValue = 'Copié';
                setTimeout(() => {
                    element.childNodes[1].nodeValue = text;
                }, 1000);
            });
        }
    }
}
setCopy();