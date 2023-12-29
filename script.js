// This is the services page
const israel = document.getElementById(`Israel`);
let israeltxt = document.getElementsByClassName(`israeltxthide`);

const ethiopia = document.getElementById(`Ethiopia`);
let ethiopiaText = document.getElementsByClassName(`ethiopiatxthide`);

const CuscoPeru = document.getElementById(`CuscoPeru`);
let CuscoPeruText = document.getElementsByClassName(`perutxthide`);

const nairobiKenya = document.getElementById(`NairobiKenya`);
let nairobiKenyaText = document.getElementsByClassName(`kenyatxthide`);

const kathmanduNepal = document.getElementById(`KathmanduNepal`);
let kathmanduNepalText = document.getElementsByClassName(`nepaltxthide`);

const southAfrica = document.getElementById(`CapeTownSouthAfrica`);
let southAfricaText = document.getElementsByClassName(`southAfricatxthide`);

const hanoiVietnam = document.getElementById(`HanoiVietnam`);
let hanoiVietnamText = document.getElementsByClassName(`vietnamtxthide`);

israel.addEventListener(`click`, function () {
  showText(israeltxt);
});
ethiopia.addEventListener(`click`, function () {
  showText(ethiopiaText);
});
CuscoPeru.addEventListener(`click`, function () {
  showText(CuscoPeruText);
});
nairobiKenya.addEventListener(`click`, function () {
  showText(nairobiKenyaText);
});
kathmanduNepal.addEventListener(`click`, function () {
  showText(kathmanduNepalText);
});
southAfrica.addEventListener(`click`, function () {
  showText(southAfricaText);
});
hanoiVietnam.addEventListener(`click`, function () {
  showText(hanoiVietnamText);
});

function showText(element) {
  element.item(0).setAttribute(`style`, `display: inline-block`);
  function hideText() {
    element.item(0).setAttribute(`style`, `display: none`);
  }
  setTimeout(hideText, 3000);
}
