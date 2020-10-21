var count = new Number();

var count = 11;

function start() {
  if ((count - 1) >= 0) {
    count = count - 1;

    if (count == 0) {
      count = "Go!";
    } else if (count < 10) {
      count = "0" + count;
    }

    time.innerText = count;
    setTimeout('start();', 1000);
  }
}