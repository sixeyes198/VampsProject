let wrapper = document.getElementsByClassName(`wrapper`)[0];
let btnLoginPopup = document.getElementsByClassName(`btnLoginPopup`)[0];
let btnClose = document.getElementsByClassName(`icon-close`)[0];

btnLoginPopup.addEventListener(`click`, show);
function show() {
  wrapper.setAttribute(`style`, `display:flex`);
}

btnClose.addEventListener(`click`, hide);
function hide() {
  wrapper.style.display = `none`;
}
