/************************************************************
	message
*************************************************************
*	
*/

/**
 * showMessage - message-box를 추가.
 * 
 * @param  {String} message
 * @param  {String} status  ['info','success','warning','error']
 */
function showMessage(message, status) {
	// default parameter
	var status = typeof status !== 'undefined' ? status.toLowerCase() : 'info';
	var c, b, span, btn;
	c = document.querySelector('#message-container');
	// create message box
	b = document.createElement('DIV');
	span = document.createElement('SPAN');
	btn = document.createElement('BUTTON');
	span.textContent = message;
	btn.innerHTML = "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>";
	btn.classList.add('btn-close-message');
	btn.addEventListener('click', function () {
		var b = this;
		messageCloseBtnEventHandler(b);
	});
	b.classList.add('message-box');
	b.classList.add('message-' + status);
	// append child
	b.appendChild(span);
	b.appendChild(btn);
	c.appendChild(b);
}
/**
 * messageCloseBtnEventHandler
 */
function messageCloseBtnEventHandler(element) {
	var messageBox = element.parentNode;
	messageBox.style.opacity = '0';
	setTimeout(function () {
		messageBox.style.display = 'none';
	}, 600); // 0.6s
}
/**
 * IIFE - flash message 용 close button add event listner 
 */
(function () {
	// add event listener - close buttons
	var btns = document.querySelectorAll('.btn-close-message');
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
			var b = this;
			messageCloseBtnEventHandler(b);
		}, false);
	}
})();
