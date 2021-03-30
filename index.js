// Have you compared/contrast visibility to display: none?
// For some of your use cases here I think display: none may be more appropriate.

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    // console.log("scrolling")
  })
// --------------------------------card flip-------------------------------------
  const card = document.querySelectorAll('.card');
  // console.log(card)
  const cardButton = document.querySelectorAll('.cardButton')
  card.forEach(el => {
    el.addEventListener('click', function () {
      el.classList.toggle('is-flipped');
    });
  })
  // -------------------------------card flip----------------------------------
  // ---------------------------------joke-------------------------------------
  const button = document.querySelector(".joke-button")
  const div = document.querySelector(".bubble")
  async function getJoke() {
    const div = document.querySelector(".bubble")
    const punchButton = document.querySelector(".punchline-button")
    const clear = document.querySelector(".clear")
    let result = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random")
    // template literal isn't necessary! result.data[0].setup is a string!!
    div.innerHTML = `${result.data[0].setup}`
    div.style.visibility = "visible"
    punchButton.style.visibility = "visible"
    clear.style.visibility = "visible"
    punchButton.addEventListener('click', (event) => {
      div.innerHTML = `${result.data[0].setup} <br> ${result.data[0].punchline}` 
    })
    clear.addEventListener('click', (event) => {
      div.style.visibility = "hidden"
      punchButton.style.visibility = "hidden"
      clear.style.visibility = "hidden"
    })
  }
  // Could you add the wiping the div's innerHTML to getJoke and just pass getJoke instead of creating a new callback here?
  button.addEventListener('click', (event) => {
    div.innerHTML = ''
    getJoke()
  })
  // ---------------------------Joke----------------------------
  // -----------------------nav------------------------
  const navBtn = document.querySelector('.scroll-btn')
  const scollList = document.querySelector('.scroll-nav-list')
  navBtn.addEventListener('click', (event) => {
    // remove the console log
    console.log("hello")
     if(scollList.style.visibility === "visible"){
      scollList.style.visibility = "hidden"
       navBtn.style.zIndex = "3"
     }else{
      scollList.style.visibility = "visible"
      navBtn.style.zIndex = "7"
     }
    // Use classList.toggle to shorten this
     if (scollList.classList.contains("showNav")) {
      scollList.classList.remove("showNav");
     } else {
      scollList.classList.add("showNav");
     }
  })
  // -----------------------nav------------------------
  // --------------------------fortune--------------------------
  // const buttonFortune = document.querySelector(".fortune-button")
  // async function getFortune() {
  //   let result = await axios.get("https://api.ef.gy/fortune")
  //   console.log(result.data)
  //   const div = document.querySelector(".bubble")
  //   const clear = document.querySelector(".clear")
  //   div.innerHTML = `${result.data}`
  //   div.style.visibility = "visible"
  //   clear.style.visibility = "visible"
  //   clear.addEventListener('click', (event) => {
  //     div.style.visibility = "hidden"
  //     clear.style.visibility = "hidden"
  //   })
  // }
  // buttonFortune.addEventListener('click', (event) => {
  //   div.innerHTML = ''
  //   getFortune()
  // })
  //http://yerkee.com/api/fortune/wisdom
})


