//DOM Elements
let stateHeader = document.querySelector('#stateHeader');

//Data Arrays
import {stateMap} from './stateMap.js';
stateHeader.innerText = stateMap[stateHeader.innerText];