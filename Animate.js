
// ini merupakan animasi pada bagan Nav dimana 
// terdapat manipulasi element class="List" 

// cara kerja :
// 1. dalam file html ada satu class yang diberi bernilai "List active"
//     yang lain hanya diberi nilai "List" saja
// 2. nilai "active" sebagai indikator jika class tersebut ditekan/diclick
// 3. jika salah satu class yg berbeda ditekan maka nilai "active" tersebut 
//     akan berpindah ke tempat class yang diclick
// 4. dengan memanfaatkan keyword .classList.remove (menghapus nilai "active") dan .classList.add
//     (menambah nilai "active") kita bisa membuat fungsi untuk memanipulasi
//     nilai class "active" untuk berpindah ke class yang ditekan/diclick

const list = document.querySelectorAll('.list'); 

function active(){
    list.forEach((item) =>
    item.classList.remove('active')); //menghapus nilai "active" 
    this.classList.add('active'); //menambah nilai "active" pada class yg ditekan sekarang
}
list.forEach((item) =>
item.addEventListener('click',active)); //memanggil fungsi pemindahan nilai "active"