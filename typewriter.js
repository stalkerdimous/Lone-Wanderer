//blablabla

var n = 0;
var txt = 'Your mom gay square';
var speed = 49;

function typeWriter() {
  if (n < txt.length) {
    process.stdout.write(txt.charAt(n));
    n++;
    setTimeout(typeWriter, speed);
  }
}
 typeWriter();