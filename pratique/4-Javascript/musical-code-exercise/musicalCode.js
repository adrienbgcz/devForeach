const images = document.querySelectorAll("img")
const audio = document.querySelectorAll("audio")
const result = document.querySelector("#img-box")

let chosenNotes = []
let notesToFind = ["do", "fa", "si", "sol"]

let chosenNotesToString = ''
let notesToFindToString = ''


const playNote = (chosenNote) => {
    // à chaque click, mettre le nom de la touche dans un tableau
    chosenNote.play() // DOM rajoute des propriétés pour jouer les éléments audios
        if (chosenNotes.length < 4) {
            chosenNotes.push(chosenNote.dataset.id)

            // console.log(chosenNotes)
            // console.log(chosenNote)
            // console.log(chosenNote.dataset.id)

        }
        if (chosenNotes.length == 4) {
            chosenNotes.forEach(note => chosenNotesToString += note)
            notesToFind.forEach(note => notesToFindToString += note)
            // console.log(notesToFindToString)
            if (chosenNotesToString == notesToFindToString) {
                result.innerHTML = `
            <img src=img/neo.gif alt='neo'>
            `
            } else {
                result.innerHTML = `
            <img src=img/gandalf.webp alt='gandalf'>
            `
                chosenNotes = []
            }

        }
    
    }
   
    images.forEach(image => {
        image.addEventListener("click", function () { playNote(image.nextElementSibling) }) // Comment passer des paramètres à la fonction sans qu'elle se déclenche toute seul sans avoir cliqué ? ==> fonction anonyme

    })










// comparer le tableau au tableau de solution

// afficher l'image correspondante si vrai ou faux


