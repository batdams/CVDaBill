// Suppression contenu des boutons (<1200px>)
function removeText () {
    let btnContacts = document.getElementsByClassName('btnContact');
    for (let element of btnContacts) {
        element.childNodes[1].nodeValue = ' ';
    }
}

// øchargement balises <a> et copie du contenu de la balise (>1200px)
function setCopy () {
    let btnLinks = document.getElementsByClassName('btnLink');
    for (let element of btnLinks) {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            let text = element.childNodes[1].textContent;
            navigator.clipboard.writeText(text).then(() => {
                console.log("contenu copié : " + text);
                element.childNodes[1].nodeValue = 'Copié';
                setTimeout(() => {
                    element.childNodes[1].nodeValue = text;
                }, 1000);
            }).catch(err => {
            console.log('Erreur lors de la copie dans le presse papier : ', err);
            });
        });
        element.setAttribute("title", "cliquez pour copier");
    }
}

function addText () {
    let btnCells = document.getElementsByClassName('btnCell');
    let btnMails = document.getElementsByClassName('btnMail');
    for (let element of btnCells) {
        element.childNodes[1].nodeValue = ' 06 62 67 16 43';
    }
    for (let element of btnMails) {
        element.childNodes[1].nodeValue = ' damienbilliau@gmail.com';
    }
}

// Comportement suivant le format
const mqlMax = window.matchMedia('(max-width: 1200px)');
const mqlMin = window.matchMedia('(min-width: 1200px)');
function checkAndAdjust () {
    if (mqlMax.matches) {
        removeText();
    }
    else if (mqlMin.matches){
        addText();
        setCopy();
    }
}
window.onload = checkAndAdjust;
window.onresize = checkAndAdjust;


// Ajout du CV au bouton CV (OLD)
/*  let btnCV = document.getElementById('btnCV');
    btnCV.addEventListener('click', () => {document.getElementById('dlLink').click()}); */

    // Attribution des éléments aux boutons de contact Format téléphone
/*const mql = window.matchMedia('(max-width: 1200px)');

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
mql.addEventListener("change", setMail);*/