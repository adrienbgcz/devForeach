// LEVEL 1

const categories = [
  {
    id: 1,
    code: 123456789,
    label: "Transport",
    providers: [
      {
        id: 1,
        code: 321654987,
        label: "Rapid'transport",
        stars: 3
      },
      {
        id: 2,
        code: 321654987,
        label: "Big Truck",
        stars: 4
      },
      {
        id: 3,
        code: 321654987,
        label: "les déménageurs bretons",
        stars: 5
      },
      {
        id: 4,
        code: 321654987,
        label: "Move around",
        stars: 1
      }
    ]
  },
  {
    id: 2,
    code: 123456789,
    label: "Peinture",
    providers: [
      {
        id: 5,
        code: 321654987,
        label: "Coup de pinceau",
        stars: 1
      },
      {
        id: 6,
        code: 321654987,
        label: "Fast painting",
        stars: 4
      },
      {
        id: 7,
        code: 321654987,
        label: "Les peintres du Nord",
        stars: 3
      },
      {
        id: 8,
        code: 321654987,
        label: "Brush your walls",
        stars: 5
      }
    ]
  },
  {
    id: 3,
    code: 123456789,
    label: "Livraison",
    providers: [
      {
        id: 9,
        code: 321654987,
        label: "Fruits everywhere",
        stars: 3
      },
      {
        id: 10,
        code: 321654987,
        label: "Le roi du burger",
        stars: 5
      },
      {
        id: 11,
        code: 321654987,
        label: "Meal ASAP",
        stars: 5
      },
      {
        id: 12,
        code: 321654987,
        label: "Lib'fruit",
        stars: 1
      }
    ]
  },
  {
    id: 4,
    code: 123456789,
    label: "Soutien scolaire",
    providers: [
      {
        id: 13,
        code: 321654987,
        label: "Marie Demieux",
        stars: 1
      },
      {
        id: 14,
        code: 321654987,
        label: "Jacques Testard",
        stars: 5
      },
      {
        id: 15,
        code: 321654987,
        label: "Ludivine Dupuis",
        stars: 4
      },
      {
        id: 16,
        code: 321654987,
        label: "Michel Topaloff",
        stars: 1
      }
    ]
  },
  {
    id: 5,
    code: 123456789,
    label: "Apprentissage",
    providers: [
      {
        id: 17,
        code: 321654987,
        label: "Guitar pro",
        stars: 1
      },
      {
        id: 18,
        code: 321654987,
        label: "Winds & pipes",
        stars: 5
      },
      {
        id: 19,
        code: 321654987,
        label: "Les amis de la clarinette",
        stars: 5
      },
      {
        id: 20,
        code: 321654987,
        label: "String and songs",
        stars: 1
      }
    ]
  },
  {
    id: 6,
    code: 123456789,
    label: "Salle de bain",
    providers: [
      {
        id: 21,
        code: 321654987,
        label: "Répar'tout",
        stars: 1
      },
      {
        id: 22,
        code: 321654987,
        label: "T'es marteau",
        stars: 5
      },
      {
        id: 23,
        code: 321654987,
        label: "Les douches italiennes",
        stars: 3
      },
      {
        id: 24,
        code: 321654987,
        label: "Good bath company",
        stars: 2
      }
    ]
  },
  {
    id: 7,
    code: 123456789,
    label: "Décoration",
    providers: [
      {
        id: 25,
        code: 321654987,
        label: "My design",
        stars: 1
      },
      {
        id: 26,
        code: 321654987,
        label: "Smart Home",
        stars: 3
      },
      {
        id: 27,
        code: 321654987,
        label: "Easy style",
        stars: 3
      },
      {
        id: 28,
        code: 321654987,
        label: "Home sweet Home",
        stars: 2
      }
    ]
  },
  {
    id: 8,
    code: 123456789,
    label: "Décoration",
    providers: [
      {
        id: 29,
        code: 321654987,
        label: "Répar'tout",
        stars: 1
      },
      {
        id: 30,
        code: 321654987,
        label: "Fast fix",
        stars: 5
      },
      {
        id: 31,
        code: 321654987,
        label: "Un clou, une vis",
        stars: 3
      },
      {
        id: 32,
        code: 321654987,
        label: "Bricol'tout",
        stars: 2
      }
    ]
  },
  {
    id: 9,
    code: 123456789,
    label: "Portes & fenêtres",
    providers: [
      {
        id: 33,
        code: 321654987,
        label: "Les rois de la vitre",
        stars: 5
      },
      {
        id: 34,
        code: 321654987,
        label: "Vitriers & co",
        stars: 3
      },
      {
        id: 35,
        code: 321654987,
        label: "Serrures en tout genre",
        stars: 1
      },
      {
        id: 36,
        code: 321654987,
        label: "Global'door",
        stars: 2
      }
    ]
  }
];


const section = document.querySelector(".article-ctn")

let sectionTemplate = ''


categories.forEach(category => {
  sectionTemplate += `
  <article>  
  <h3>${category.label}</h3>
  <ul> 
`
    category.providers.forEach(provider => {
      sectionTemplate += `
          <li><a href="http://letmegooglethat.com/?q=${provider.label}">${provider.label}</a><span>`
      
          let i = 0;
          let j = 5;
          
          for (i = 0 ; i < provider.stars ; i++) {
               sectionTemplate += `
                <i class="fas fa-star"></i>
               `
          }

          for (j = 5 ; j > i ; j-- ){
                sectionTemplate += `
                <i class="far fa-star"></i>
            `
           }
      sectionTemplate += `</span></li>`
    })

    sectionTemplate += `</ul>
    </article>`
    section.innerHTML = sectionTemplate;
})





  




