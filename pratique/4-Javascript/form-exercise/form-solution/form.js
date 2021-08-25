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
          code: 436694557,
          order: 1000,
          archived: false,
          name: "morning",
          label: "08h00 - 12h00"
        },
        {
          id: 10,
          code: 436694557,
          order: 2000,
          archived: false,
          name: "noon",
          label: "12h00 - 14h00"
        },
        {
          id: 11,
          code: 436694557,
          order: 3000,
          archived: false,
          name: "afternoon",
          label: "14h00 - 18h00"
        },
        {
          id: 12,
          code: 436694557,
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

// ----------------------------------
// METHODES NATIVES
// ----------------------------------
// const formDomNode = document.querySelector("form");

// const h2Element = document.createElement("h2");
// const h3Element = document.createElement("h3");

// h2Element.textContent = "Quelques questions pour affiner votre recherche";
// h3Element.textContent = `Service selectionné : ${data.categoryLabel}`;

// formDomNode.append(h2Element, h3Element);

// data.questions.forEach((question) => {
//   const sectionElement = document.createElement("section");
//   const h3Element = document.createElement("h3");
//   const divElement = document.createElement("div");

//   sectionElement.setAttribute("class", "question-ctn");
//   divElement.setAttribute("class", "question-box");

//   sectionElement.append(h3Element);

//   if (question.type === "text" || question.type === "date") {
//     const divElement = document.createElement("div");
//     const inputElement = document.createElement("input");
//     inputElement.setAttribute("type", question.type);
//     divElement.append(inputElement);
//     sectionElement.append(divElement);
//   }

//   if (question.type === "radio") {
//     question.responses.forEach((response) => {
//       const divElement = document.createElement("div");
//       const inputElement = document.createElement("input");
//       const labelElement = document.createElement("label");

//       divElement.setAttribute("class", "question-box");

//       inputElement.setAttribute("type", question.type);
//       inputElement.setAttribute("name", response.name);
//       inputElement.setAttribute("id", response.id);

//       labelElement.setAttribute("for", response.id);
//       labelElement.textContent = response.label;

//       divElement.append(inputElement, labelElement);
//       sectionElement.append(divElement);
//     });
//   }

//   if (question.type === "select") {
//     const selectElement = document.createElement("select");
//     const firstOptionElement = document.createElement("option");
//     firstOptionElement.textContent = "Sélectionnez";
//     selectElement.append(firstOptionElement);
//     question.responses.forEach((response) => {
//       const optionElement = document.createElement("option");
//       optionElement.textContent = response.label;

//       selectElement.append(optionElement);
//       sectionElement.append(selectElement);
//     });
//   }

//   if (question.type === "checkbox") {
//     question.responses.forEach((response) => {
//       const divElement = document.createElement("div");
//       const inputElement = document.createElement("input");
//       const labelElement = document.createElement("label");

//       divElement.setAttribute("class", "question-box");

//       inputElement.setAttribute("type", question.type);
//       inputElement.setAttribute("name", response.name);
//       inputElement.setAttribute("id", response.id);

//       labelElement.setAttribute("for", response.id);
//       labelElement.textContent = response.label;

//       divElement.append(inputElement, labelElement);
//       sectionElement.append(divElement);
//     });
//   }

//   if (question.type === "textarea") {
//     const divElement = document.createElement("div");
//     const textareaElement = document.createElement("textarea");

//     divElement.append(textareaElement);
//     sectionElement.append(divElement);
//   }

//   h3Element.textContent = question.label;
//   sectionElement.append(divElement);
//   formDomNode.append(sectionElement);
// });

// const finalSectionElement = document.createElement("section");
// const submitInput = document.createElement("input");
// submitInput.setAttribute("type", "submit");
// submitInput.setAttribute("name", "submit");
// submitInput.setAttribute("value", "Confirmer");
// finalSectionElement.append(submitInput);
// formDomNode.append(finalSectionElement);

// ----------------------------------
// TEMPLATING LITERAL
// ----------------------------------
const form = document.querySelector("form");
let output = "";
output += `
<h2>Quelques questions pour affiner votre recherche</h2>
<h3>Service sélectionné: ${data.categoryLabel}</h3>
`;
let questions = data.questions.forEach((question) => {
  let questionTemplate = `
    <section class="question-ctn">
        <h3>${question.label}</h3>
    `;
  if (question.type === "text" || question.type === "date") {
    questionTemplate += `<div class="question-box"><input type="${question.type}"></input></div>`;
  }
  if (question.type === "textarea") {
    questionTemplate += `<div class="question-box"><${question.type}></${question.type}></div>`;
  }
  if (question.type === "select") {
    questionTemplate += `<div class="question-box"><select>`;
    let selectOptions = question.responses.forEach((response) => {
      let optionTemplate = `<option>${response.label}</option>`;
      questionTemplate += optionTemplate;
    });
    questionTemplate += "</select></div>";
  }
  output += questionTemplate;
  let responses = question.responses.forEach((response) => {
    let responseTemplate = `
        <div class="question-box">
            <input type= "${question.type}" name="${response.name}" id="${response.id}" value="${response.label}">
            <label for="${response.id}">${response.label}</label>
        </div>
        `;
    if (question.type === "select") {
      responseTemplate = "";
    }
    output += responseTemplate;
  });
  output += "</section>";
});
output += `
    <section class="question-ctn">
        <input type="submit" name ="submit" value="Confirmer">
    </section>`;

form.innerHTML = output;
