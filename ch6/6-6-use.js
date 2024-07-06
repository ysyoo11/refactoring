import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
owner.firstName = '엘리'; // Error!
console.log(owner);
console.log(getDefaultOwner());
