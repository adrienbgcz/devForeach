const data = {
  categoryLabel: "Transport",
  questions: [
    {
      id: 1,
      code: 12456789,
      order: 1000,
      archived: false,
      type: "text",
      label: "Qu'avez-vous besoin de transporter ?",
      responses: []
    },
    {
      id: 2,
      code: 142567945,
      order: 2000,
      archived: false,
      type: "radio",
      label: "Quel est le poids de cet objet ?",
      responses: [
        {
          id: 2,
          code: 243164578,
          order: 1000,
          archived: false,
          name: "weight",
          label: "Très léger"
        },
        {
          id: 3,
          code: 431645745,
          order: 2000,
          archived: false,
          name: "weight",
          label: "Léger"
        },
        {
          id: 4,
          code: 34664315,
          order: 3000,
          archived: false,
          name: "weight",
          label: "Lourd"
        },
        {
          id: 5,
          code: 436694557,
          order: 4000,
          archived: false,
          name: "weight",
          label: "Très Lourd"
        }
      ]
    },
    {
      id: 3,
      code: 134675495,
      order: 3000,
      archived: false,
      type: "select",
      label: "De quelle taille est cet objet ?",
      responses: [
        {
          id: 5,
          code: 243164578,
          order: 1000,
          archived: false,
          name: "veryLittle",
          label: "Très petit"
        },
        {
          id: 6,
          code: 431645745,
          order: 2000,
          archived: false,
          name: "little",
          label: "Petit"
        },
        {
          id: 7,
          code: 34664315,
          order: 3000,
          archived: false,
          name: "big",
          label: "Grand"
        },
        {
          id: 8,
          code: 436694557,
          order: 4000,
          archived: false,
          name: "veryBig",
          label: "Très Grand"
        }
      ]
    },
    {
      id: 4,
      code: 143764578,
      order: 4000,
      archived: false,
      type: "date",
      label: "À quelle date avez-vous besoin de transporter cet objet ?",
      responses: []
    },
    {
      id: 5,
      code: 431645724,
      order: 5000,
      archived: false,
      type: "checkbox",
      label: "Quelle créneau horaire vous conviendrait ?",
      responses: [
        {
          id: 9,
          code: 4366945571,
          order: 1000,
          archived: false,
          name: "morning",
          label: "08h00 - 12h00"
        },
        {
          id: 10,
          code: 4366945572,
          order: 2000,
          archived: false,
          name: "noon",
          label: "12h00 - 14h00"
        },
        {
          id: 11,
          code: 4366945573,
          order: 3000,
          archived: false,
          name: "afternoon",
          label: "14h00 - 18h00"
        },
        {
          id: 12,
          code: 4366945574,
          order: 4000,
          archived: false,
          name: "evening",
          label: "18h00 - 20h00"
        }
      ]
    },
    {
      id: 5,
      code: 431645724,
      order: 5000,
      archived: false,
      type: "textarea",
      label: "Avez-vous quelque chose à ajouter ?",
      responses: []
    }
  ]
};


const form = document.querySelector("body form");

let formTemplate = ''

formTemplate = `
<h2>Quelques questions pour affiner votre recherche</h2>
                <h3>Service seletionné : ${data.categoryLabel}</h3>

`
data.questions.forEach(question => {
  formTemplate += `
  <section class="question-ctn">
    <h3>${question.label}</h3>
  
  `
  switch (question.type) {
    case "text": {
      formTemplate += `
        <div class="question-ctn">
          <input type="text" name="type" id="type">
        </div>
    `
    }
      break;

    case "radio": {
      question.responses.forEach(response => {

      formTemplate += `
        <div class="question-box">
          <input type="radio" name="${response.name}" id="${response.code}">
          <label for="${response.code}">${response.label}</label>
        </div> 
      `
      })

    }
     break;

    case "select": {
      
      formTemplate += `
        <select name="volume" id="volume">
        <option value="select">Sélectionnez</option>
      `
      
      question.responses.forEach(response => {
      
      formTemplate += `
      
        <option value="${response.name}">${response.label}</option>
        
      `
      })

      formTemplate += `</select>`
    }
    
      break;

    case "date": {
      formTemplate += `
      <div class="question-box">
        <input type="date" name="date" id="date">
      </div>
      `

    }
      break;

    case "checkbox":

    question.responses.forEach(response => {

     formTemplate += `
      <div class="question-box">
        <input type="checkbox" name="${response.name}" id="checkbox-${response.code}">
        <label for="checkbox-${response.code}">${response.label}</label>
      </div>
     `
    })

      break;
    
    case "textarea": {
      formTemplate += `
      <div class="question-box">
        <textarea name="suggestion" id="suggestion"></textarea>
      </div>
      `
    }
      break;
  
    default:
      break;
  }

  formTemplate += `
  
      
  </section>
  `
})

formTemplate += `
  <div class="question-box">
    <input type="submit" value="Confirmer">
  </div>
`

form.innerHTML = formTemplate;