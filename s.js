if (navigator.platform === "New Nintendo 3DS") {
  console.log('о супер у тебя консоль семейтсва 3DS :D');
  load();
} else if (navigator.platform === "Nintendo 3DS") {
  console.log('о супер у тебя консоль семейтсва 3DS :D');
  load();
} else {
  window.location.href = "/igor360website/home.html";
}
function load() {
  alert("привет! это моя игра на html!");
  alert("я не знаю на каком языке можно делать игры чтобы их можно было потом установить как прогу на 3ds... я уже пробывал LOVE или же Love2D, но у меня не получилось... так что я буду использовать html!");
  hi();
}
function hi() {
  const name = prompt('для начала введи свой никнейм');
  if (name) {
    let hi = "прикольный ник, " += name
    alert(hi);
  } else {
    alert("ты ничего не ввёл!");
    hi();
  }
}
