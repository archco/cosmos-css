/************************************************************
  Parallax
*************************************************************
* 
*/

(function () {
  // const TAG = "parallax";
  var ps = document.querySelectorAll('.parallax');
  if (ps.length == 0) { return; }
  // console.log(TAG, ps);
  for (let p of ps) {
    parallaxProcess(p);
  }
})();

/**
 * parallaxProcess
 * 
 * @param  {element} p
 * @return {void}
 */
function parallaxProcess(p) {
  // const TAG = parallaxProcess.name;
  var i = p.querySelector('img');
  if (! i) { return; }
  var h = p.dataset.height || i.clientHeight;
  // console.log(TAG, h);
  // hide img tag.
  i.classList.add('hide');
  // set parallax background image.
  p.style.backgroundImage = `url('${i.src}')`;
  // set parallax height.
  p.style.height = `${h}px`;
}