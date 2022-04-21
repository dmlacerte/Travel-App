//DOM Elements
const editModalButtons = document.querySelectorAll('.editModalButton');
const editModalForm = document.querySelector('.editModalForm');
const newModalButton = document.querySelector('.addNewModal');
const newModalForm = document.querySelector('.newModalForm');

//Data Arrays
const typeOptions = ["Restaurant", "Hotel", "Entertainment"];
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
    console.log(elementToUpdate);
}

//Update Edit Modal when button selected
editModalButtons.forEach(button => button.addEventListener('click', updateEditModal));

function updateEditModal(ev) {
    axios.get(`http://localhost:3000/api/activity/${ev.target.id}`)    
        .then((activity) => {
            console.log(ev.target)
            editModalForm.setAttribute('action', `/${activity.data.state}/${activity.data.type}/${activity.data._id}?_method=PUT`)
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
            editModalForm[6].setAttribute('value', activity.data.pricePoint)
            editModalForm[7].setAttribute('value', activity.data.comments)
        });
}

//Update New Modal when button selected
newModalButton.addEventListener('click', updateNewModal);

function updateNewModal() {
    resetDropdownOptions(typeOptions, newModalForm[1])
    resetDropdownOptions(stateOptions, newModalForm[4])
}
