const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const body = document.querySelector('body');
let index = 0;

body.addEventListener('keydown', function(e) {
  let key = parseInt(e.detail || e.which);
  if(key === code[index]) {
    index++;
    if(index === code.length) {
      alert('Whoa');
      index = 0;
    }
  } else {
    index = 0;
  }
})

function init() {

}
