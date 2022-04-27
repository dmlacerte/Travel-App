//DOM Elements
let stateHeader = document.querySelector('#stateHeader');
const filterButton = document.querySelector('#filterButton');
const filterOptions = document.querySelectorAll('.filterOptions');

//Data Arrays
import {stateMap} from './stateMap.js';
stateHeader.innerText = stateMap[stateHeader.dataset.id];

//Update query parameters when filter buttons selected
filterButton.addEventListener('mouseover', updateFilterQuery);

function updateFilterQuery(ev) {
    let query = [];
    for (let i = 0; i < filterOptions.length; i++) {
        if (filterOptions[i].value) {
            query.push(`${encodeURIComponent(filterOptions[i].name)}=${encodeURIComponent(filterOptions[i].value)}`);
        }
    }
    let queryStart = filterButton.href.indexOf('?');
    filterButton.setAttribute('href', filterButton.href.slice(0, queryStart + 1) + query.join(`&`));
}