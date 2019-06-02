import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './profile/contact'
const title = 'My Minimal React Webpack Babexxl Setup';


function Name(){
	return <div>Aniyus Kujur </div>
}
function Address(){
	return <div>White Field</div>
}
ReactDOM.render(<Contact name='aniyus' lname='k' contact='whitefield'></Contact>,document.getElementById('app'));
