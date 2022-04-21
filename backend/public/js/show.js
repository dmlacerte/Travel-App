const editModalButtons = document.querySelectorAll('.editModalButton');
const editModalForm = document.querySelector('.editModalForm');
const editModalFields = document.querySelectorAll('.editModalField');
const submitButton = document.querySelector('.submitButton');

const typeOptions = ["Restaurant", "Hotel", "Entertainment"];
import {stateMap} from './stateMap.js';
console.log(stateMap);

editModalButtons.forEach(button => button.addEventListener('click', updateEditModal));

function updateEditModal(ev) {
    axios.get(`http://localhost:3000/api/restaurant/${ev.target.id}`)    
        .then((activity) => {
            editModalForm.setAttribute('action', `/${activity.data.state}/${activity.data.type}/${activity.data._id}?_method=PUT`)
            editModalForm[0].setAttribute('value', activity.data.name)
            let currentType = activity.data.type
            updateDropdownSelection(currentType, typeOptions, editModalForm[1])
            editModalForm[2].setAttribute('value', activity.data.description)
            editModalForm[3].setAttribute('value', activity.data.city)
            let currentState = activity.data.state;
            updateDropdownSelection(currentState, typeOptions, editModalForm[4])
            // editModalForm[4].setAttribute('value', activity.data.state)
            editModalForm[5].setAttribute('value', activity.data.address)
            editModalForm[6].setAttribute('value', activity.data.pricePoint)
            editModalForm[7].setAttribute('value', activity.data.comments)
        });
}

const removeChildren = (parentElement) => {
    while (parentElement.lastChild) {
        parentElement.removeChild(parentElement.lastChild);
    }
};

function updateDropdownSelection(dataSelection, arr, elementToUpdate) {
    removeChildren(elementToUpdate);
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option');
        option.innerText = arr[i];
        option.setAttribute('value', arr[i])
        elementToUpdate.appendChild(option);
    }
    let index = arr.findIndex(option => option === dataSelection);
    elementToUpdate[index].setAttribute('selected', true);
    console.log(elementToUpdate);
}