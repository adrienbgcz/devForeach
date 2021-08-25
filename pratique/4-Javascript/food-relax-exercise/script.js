const body = document.querySelector("body");



function renderArticle() {
    let time = 0;

    
    
    body.innerHTML = `
    <article>
        <div id="infos-box">
            <p id="timer">Temps de visionnage : 0 secondes</p>
        </div>
        <img src="./pizza-vortex.gif" alt="neverending pizza vortex" id="">
    </article>
    `   

    const timer = document.querySelector("#timer")
    
    setInterval(() => {
        time += 1
        
        timer.innerHTML = `Temps de visionnage : ${time} secondes`
    }, 1000);

}

renderArticle();

