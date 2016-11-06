/************************************************************
	Parallax
*************************************************************
*	
*/

(function () {
	const TAG = "parallax";
	var ps = document.querySelectorAll('.parallax');
	if (ps.length == 0) { return; }
	//console.log(TAG, ps);
	for (var i = 0; i < ps.length; i++) {
		parallaxProcess(ps[i]);
	}

})();

/**
 * parallaxProcess
 * 
 * @param  {element} p
 * @return {void}
 */
function parallaxProcess(p) {
	const TAG = this.name || "parallaxProcess";
	var i = p.querySelector('img');
	if (! i) { return; }
	var h = p.dataset.height || i.clientHeight;
	//console.log(TAG, h);
	// img는 가리고, p의 background에 src적용.
	i.classList.add('hide');
	p.style.backgroundImage = "url('" + i.src + "')";
	// p.dataset.height 가 있으면 이를 기준으로, 아니면 image height.
	p.style.height = h + "px";
}