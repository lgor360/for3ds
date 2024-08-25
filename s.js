alert('привет! я тебя помню! ты с моего другого сайта! может с homescreenlite? я кстати Игорь. создатель этого сайта. ну или оцелот :3')
let ThSelect = document.querySelector("[name='thselect']");
ThSelect.value = LoadSelectValue(TSelect);
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}
