//DOM Elements
let stateNameBox = document.querySelector('#state-name-box');
let statePageLink = document.querySelector('#state-page-link');
let states = document.querySelectorAll('path');

//Update state color based on state data
let haveVisitedArr = [];
let wantToVistArr = [];

axios.get(`/api/updateStateData`) 
	//Call to get state data, then update arrays based on data received
	.then(stateData => {
		let states = stateData.data;
		states.forEach(state => {
		if (state.haveVisited) {
			haveVisitedArr.push(state.name);
		} else if (state.wantToVisit) {
			wantToVistArr.push(state.name);
		}
		});
	})
	//Update colors based on data arrays
	.then(() => {
		states.forEach(state => {
		if (haveVisitedArr.includes(state.dataset.id)) {
			state.style.fill = "rgb(133, 196, 133)";
		} else if (wantToVistArr.includes(state.dataset.id)) {
			state.style.fill = "rgb(231, 231, 172)";
		} else {
			state.style.fill = "lightgray";
		}
		});
	});

//Set state name box and hyperlink on hover
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

//Adjust position of state name box to follow mouse 
window.onmousemove = (ev) => {
	let xAxis = ev.clientX;
	let yAxis = ev.clientY;
	stateNameBox.style.top = `${yAxis + 22}px`;
	stateNameBox.style.left = `${xAxis}px`;
};