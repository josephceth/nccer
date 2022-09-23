import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export const SuccessToast = function SuccessToast(message:string, height:number = 50, duration:number = 3000) {
	let toastHeight:string = `${height}px`;
    
	Toastify({
		text: message,
		duration: duration,
		// destination: "https://github.com/apvarun/toastify-js",
		newWindow: false,
		close: true,
		gravity: 'top', // `top` or `bottom`
		position: 'right', // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: 'linear-gradient(to right, #00b09b, #96c93d)',
			width: '350px',
			height: toastHeight
		},
		onClick: function () {} // Callback after click
	}).showToast();
};

export const ErrorToast = function ErrorToast(message:string, height:number = 50, duration:number = 3000) {
	let toastHeight:string = `${height}px`;

	Toastify({
		text: message,
		duration: duration,
		// destination: "https://github.com/apvarun/toastify-js",
		newWindow: false,
		close: true,
		gravity: 'top', // `top` or `bottom`
		position: 'right', // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: 'linear-gradient(to right, #B71C1C, #F44336)',
			width: '350px',
			height: toastHeight
		},
		onClick: function () {} // Callback after click
	}).showToast();
};
