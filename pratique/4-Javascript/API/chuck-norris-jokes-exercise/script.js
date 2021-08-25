const body = document.querySelector("body")




const getJoke = async () => {
    let data = {}
    try {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random"
        );
        data = await response.json();
        // console.log(data)
        
    } catch (error) {
        console.log(error);
    }
    display(data)
}


const display = (data) => {
    body.innerHTML = `
    <p> ${data.value} </p>
    <img src=${data.icon_url} alt="">
    <p> ${data.created_at} </p>
    `
    const img = document.querySelector("img")

    img.addEventListener("click", getJoke)
}

getJoke();






// const body = document.querySelector("body")




// const getJoke = async () => {
//     let data = {}
//     try {
//         const response = await fetch(
//             "https://api.chucknorris.io/jokes/random"
//         );
//         data = await response.json();
//         // console.log(data)
        
//     } catch (error) {
//         console.log(error);
//     }

//     body.innerHTML = `
//     <p> ${data.value} </p>
//     <img src=${data.icon_url} alt="">
//     <p> ${data.created_at} </p>
//     `
//     const img = document.querySelector("img")

//     img.addEventListener("click", getJoke)
// }

// getJoke();









// body.innerHTML = `
// <img src="la src de licône " alt=""></img>
// `