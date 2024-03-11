//اولین اسم نام بازیکن
let firstChar = () => {
    let first = photo[randPhoto].name.charAt(0);
    alertSweet(`<h1>${first}</h1>`)
}
//برای پیدا کردن نام
let find = () => {
    if (lose) {
        photo[randPhoto].name == searchBox.value ? toastSweet('success', 'تبریک میگم درست حدس زدید', '#E9F5DB') : toastSweet('error', 'اشتباه حدس زدید متاسفانه', '#ffc0cb')
        stop()
        reset() 
        st = true
    }
    else {
        toastSweet('error', 'شما شکست خوردید', '#ffc0cb')
         lose = false
    }
    toastSweet('error', 'بازیکن تعویض شد', '#ffc0cb')
    selPic()
}
//لیست بار
let list_chance = () => {
    toastSweet('success', 'لیست بار برای شما فعال شد', '#fff')
    searchBox.addEventListener('keyup', () => {
        clear()
        let test = photo.filter(e => e.name.includes(searchBox.value))
        test.forEach(element => {
            list.innerHTML += "<li>" + element.name + "</li>";
        });
    })
    list.addEventListener('click', (e) => {
        if (e.target.tagName == "LI") {
            searchBox.value = e.target.innerText;
            clear()
        }
    })
}
