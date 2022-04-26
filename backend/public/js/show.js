//DOM Elements
const editModalButtons = document.querySelectorAll('.editModalButton');
const editModalForm = document.querySelector('.editModalForm');
const newModalButton = document.querySelector('.addNewModal');
const newModalForm = document.querySelector('.newModalForm');
const filterButton = document.querySelector('#filterButton');
const filterOptions = document.querySelectorAll('.filterOptions');

//Data Arrays
const typeOptions = ["Restaurant", "Hotel", "Entertainment"];
const pricePointOptions = ["Pending Visit", "$", "$$", "$$$", "$$$$"];
const ratingOptions = ["Pending Visit", "1", "2", "3", "4", "5"];
import {stateMap} from './stateMap.js';
const stateOptions = Object.keys(stateMap);

//Helper functions
const removeChildren = (parentElement) => {
    while (parentElement.lastChild) {
        parentElement.removeChild(parentElement.lastChild);
    }
};

function resetDropdownOptions(arr, elementToUpdate) {
    removeChildren(elementToUpdate);
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option');
        option.innerText = arr[i];
        option.setAttribute('value', arr[i])
        elementToUpdate.appendChild(option);
    }
}

function updateDropdownSelection(dataSelection, arr, elementToUpdate) {
    let index = arr.findIndex(option => option === dataSelection);
    elementToUpdate[index].setAttribute('selected', true);
}

//Update Edit Modal when button selected
editModalButtons.forEach(button => button.addEventListener('click', updateEditModal));

function updateEditModal(ev) {
    axios.get(`http://localhost:3000/api/activity/${ev.target.id}`)    
        .then((activity) => {
            //Pull current page filters
            let queryStart = filterButton.href.indexOf('?');
            let queryFilter = filterButton.href.slice(queryStart + 1);
            console.log(`filter: ${queryFilter}`)

            //Set Edit fields
            editModalForm.setAttribute('action', `http://localhost:3000/${activity.data.state}/${activity.data.type}/${activity.data._id}?_method=PUT&${queryFilter}`)
            editModalForm[0].setAttribute('value', activity.data.name)
            let currentType = activity.data.type
            resetDropdownOptions(typeOptions, editModalForm[1])
            updateDropdownSelection(currentType, typeOptions, editModalForm[1])
            editModalForm[2].setAttribute('value', activity.data.description)
            editModalForm[3].setAttribute('value', activity.data.city)
            let currentState = activity.data.state
            resetDropdownOptions(stateOptions, editModalForm[4])
            updateDropdownSelection(currentState, stateOptions, editModalForm[4])
            editModalForm[5].setAttribute('value', activity.data.address)
            let currentPrice = activity.data.pricePoint
            resetDropdownOptions(pricePointOptions, editModalForm[6])
            updateDropdownSelection(currentPrice, pricePointOptions, editModalForm[6])
            editModalForm[7].setAttribute('value', activity.data.relatedTrip)
            let currentRating = activity.data.rating
            resetDropdownOptions(ratingOptions, editModalForm[8])
            updateDropdownSelection(currentRating, ratingOptions, editModalForm[8])
            editModalForm[9].setAttribute('value', activity.data.comments)
        });
}

//Update New Modal when button selected
newModalButton.addEventListener('click', updateNewModal);

function updateNewModal() {
    resetDropdownOptions(typeOptions, newModalForm[1])
    resetDropdownOptions(stateOptions, newModalForm[4])
    resetDropdownOptions(pricePointOptions, newModalForm[6])
    resetDropdownOptions(ratingOptions, newModalForm[8])
}

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