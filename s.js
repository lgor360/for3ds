alert('привет! я тебя помню! ты с моего другого сайта! может с homescreenlite? я кстати Игорь. создатель этого сайта. ну или оцелот :3')
let TSelect = document.querySelector("[name='tselect']");
TSelect.value = LoadSelectValue(TSelect);
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}
