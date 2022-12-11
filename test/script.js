const numb = document.querySelector('.numb');
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    if (counter > 90 && !numb.classList.contains('.numb-center')) {
      numb.classList.add('numb-center')
    }
    numb.textContent = counter + "%";
  }
}, 80);