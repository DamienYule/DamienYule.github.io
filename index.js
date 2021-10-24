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
    let result = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart")
    div.innerHTML = `${result.data.setup}`
    div.style.visibility = "visible"
    punchButton.style.visibility = "visible"
    clear.style.visibility = "visible"
    punchButton.addEventListener('click', (event) => {
      div.innerHTML = `${result.data.setup} <br> ${result.data.delivery}`
    })
    clear.addEventListener('click', (event) => {
      div.style.visibility = "hidden"
      punchButton.style.visibility = "hidden"
      clear.style.visibility = "hidden"
    })
  }
  button.addEventListener('click', (event) => {
    div.innerHTML = ''
    getJoke()
  })
  // ---------------------------Joke----------------------------
  // -----------------------hamburg nav------------------------
  const navBtn = document.querySelector('.scroll-btn')
  const scollList = document.querySelector('.scroll-nav-list')
  navBtn.addEventListener('click', (event) => {
    console.log("hello")
    if (scollList.style.visibility === "visible") {
      scollList.style.visibility = "hidden"
      navBtn.style.zIndex = "3"
    } else {
      scollList.style.visibility = "visible"
      navBtn.style.zIndex = "7"
    }
    if (scollList.classList.contains("showNav")) {
      scollList.classList.remove("showNav");
    } else {
      scollList.classList.add("showNav");
    }
  })
  // -----------------------hamburg nav------------------------
  // ---------------------------nav butttons-------------------\
  const aboutButton = document.querySelectorAll(".aboutButton")
  const aboutTarget = document.querySelector(".about")
  aboutButton.forEach(el => {
    el.addEventListener('click', function () {
      aboutTarget.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
      });
      setTimeout(function(){
        window.location.hash = '.about';
      }, 1000);
    });
  })
  const projectsButton = document.querySelectorAll(".projectsButton")
  const projectsTarget = document.querySelector(".projects")
  projectsButton.forEach(el => {
    el.addEventListener('click', function () {
      projectsTarget.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
      });
    });
  })
  const contactButton = document.querySelectorAll(".contactButton")
  const contactTarget = document.querySelector(".contact-section")
  contactButton.forEach(el => {
    el.addEventListener('click', function () {
      contactTarget.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
      });
    });
  })
  // ---------------------------nav butttons-------------------
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


