
// ! function ini digunakan untuk me- remove 
// const close = document.querySelectorAll(".close") ;

// close.forEach(function(x) {
//     x.addEventListener('click', function (e) {
//         console.log(e) ;
//         e.target.parentElement.remove(); // * remove () = adalah functuion untuk menghapus element pada HTML
//         e.preventDefault() ;  // * preventDefault () = untuk menghilangkan aksi default dari element <a href=""></a>
//         e.stopPropagation() // * stopPropagation () = utnuk menghentikan sebuah event yang kita tentukan dengan cara membuat fucntion pula
//     }) ;    
// });
// ! akhir function

// const nama = document.querySelector('.nama') ;
// console.log(nama.parentElement.parentElement) ;

// ! ini function untuk event bubbling
const container = document.querySelector('.container') ;
container.addEventListener('click',function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.remove() ;
    }
});
// ? yang harus dilakukan event bubbling pertaman kali adalah herus menangkap induk elementnya, maka dari itu disini menangkanp .container
// ? pada kasus kali ini, kita ingin merubah HTML dari inspect dan dan berharap semua function event dapat berjalan 
// todo silahkan dicoba untuk menambahkan element dari inspect browser (jangan dari script)
// ! akhir function