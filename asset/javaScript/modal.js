// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.body.onload = () => {
  modal.style.display = "block";
  selPic()
  let about = () => {
    let i = 0;


    let txt = 'این بازی بطوری است که شما باید با کلیک بر روی باکس ها  حدس بزنید که که نام بازیکن چیست سه گزینه کمکی هست که با کلیک بر انها فعال میشوند شما با اولین زدن باکس تایمر شروع میشود شما باید در مدت زمان داده شده بتوانید نام بازیکن را حدس بزنید و اینکه در صورت باخت شانس مجدد را کلیک کنید'; /* The text */
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    let timer = txt.length * speed
    let h6 = document.getElementById('h6')
    function typeWriter() {
      if (i < txt.length) {
        h6.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }
  about()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.body.onclick = function (event) {
  modal.style.display = "none";
}