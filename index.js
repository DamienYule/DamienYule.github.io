document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    // console.log("scrolling")
  })

// --------------------------------card flip-------------------------------------
  var card = document.querySelectorAll('.card');
  // console.log(card)
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
  button.addEventListener('click', (event) => {
    div.innerHTML = ''
    getJoke()
  })
})
// // Initial state
// var scrollPos = 0;
// // adding scroll event
// window.addEventListener('scroll', function(){
//   // detects new state and compares it with the new one
//   if ((document.body.getBoundingClientRect()).top > scrollPos)
// 		document.getElementById('info-box').setAttribute('data-scroll-direction', 'UP');
// 	else
// 		document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
// 	// saves the new position for iteration.
// 	scrollPos = (document.body.getBoundingClientRect()).top;
// });
