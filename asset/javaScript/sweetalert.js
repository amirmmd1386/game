let toastSweet = (icon, title ,color) => {
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: color,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

    Toast.fire({
        icon:icon,
        title:title
    });
}

let alertSweet = (title ,timer=2000)=>{
    Swal.fire({
        title,
        timer: timer,
        showConfirmButton: false,
        timerProgressBar: true,
    })
}
