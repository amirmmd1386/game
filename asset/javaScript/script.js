let pictureBox = document.getElementById('pictureBox')
let searchBox = document.querySelector('#search')
let list = document.querySelector('.list-bar')
let pushs = document.querySelectorAll('.push')
let st = true
let randPhoto;
//برای محو کردن باکس ها
pictureBox.addEventListener('click', e => {
    if (e.target.tagName == "DIV") {
        e.target.style.backgroundColor = "transparent"
        e.target.style.border = "none"
        let check = st === true ? start() : true;
        st = false
    }

})

//برای انتخاب عکس و ساخت باکس ها
let selPic = () => {
    st = true
    pictureBox.innerHTML = ""
    searchBox.value = ""
    for (let index = 0; index < 300; index++) {
        let div = document.createElement('div')
        div.className = "push"
        pictureBox.append(div)
    }
    changepic()

}
let changepic = () => {
    randPhoto = Math.floor(Math.random() * photo.length);
    pictureBox.style.backgroundImage = "url(" + photo[randPhoto].picURL + ")";
    pictureBox.style.backgroundSize = "cover"
    pictureBox.style.backgroundPosition = "center"
}
let changePlayer = (e) => {
    selPic()
    e == 1?toastSweet('success', 'بازیکن تعویض شد', '#E9F5DB'):toastSweet('success', 'شانس مجدد', '#E9F5DB')
    
}
let clear = () => list.innerHTML = "";


