const navItems = [
  {
    label: "Acceuil",
    href: "/"
  },
  {
    label: "A&nbsp;propos",
    href: "/about"
  },
  {
    label: "Connexion",
    href: "/login"
  },
  {
    label: "Magasin",
    href: "/shop"
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "Partenaires",
    href: "/partners"
  },
  {
    label: "Equipe",
    href: "/tems"
  }
];


const body = document.querySelector("body");
  body.innerHTML = `
  <nav>
    <ul>
    </ul>
  </nav>
  `;


  let ul = document.querySelector("nav ul");
  let navItemsTemplate = '' 
  
  navItems.forEach(item => {
  navItemsTemplate += `
  <li class="nav-item">
    <a href="${item.href}" class="nav-item-link">${item.label}</a>
  </li>
  `;
})

ul.innerHTML = navItemsTemplate;


// const bodyDomNode = document.querySelector("body");
// let finalTemplate = `
// <nav>
//   <ul>
// `;
// for (index = 0; index < navItems.length; index++) {
//   const navItemTemplate = `
//   <li class="nav-item">
//     <a href="${navItems[index].href}" class="nav-item-link">${navItems[index].label}</a>
//   </li>
//   `;
//   finalTemplate += navItemTemplate;
// }
// finalTemplate += `
//     </ul>
//   </nav>   
// `;
// bodyDomNode.innerHTML = finalTemplate;


