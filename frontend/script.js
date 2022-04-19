let stateNameBox = document.querySelector('#state-name-box');
let statePageLink = document.querySelector('#state-page-link');

document.addEventListener('mouseover', (ev) => {
  if (ev.target.tagName === 'path') {
    let content = ev.target.dataset.name;
    stateNameBox.innerHTML = content;
    stateNameBox.style.opacity = "100%";
    statePageLink.setAttribute('href', `https://dml-mytravelapp.herokuapp.com/${ev.target.dataset.id}`);
  }
  else {
    stateNameBox.style.opacity = "0%";
    statePageLink.setAttribute('href', ``);
  }
});

window.onmousemove = (ev) => {
  let xAxis = ev.clientX;
  let yAxis = ev.clientY;
  stateNameBox.style.top = `${yAxis + 22}px`;
  stateNameBox.style.left = `${xAxis}px`;
};