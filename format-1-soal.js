$( function($){
var quiz = {
multiList: [
//1 soal
{
ques: "<strong><center> Lahar Dingin Merapi Membawa Korban </center></strong> <br> <br> Lahar dingin Gunung Merapi menelan korban diwilayah Menggong, Kepuharjo, Cangkringan, Sleman Yogyakarta Seorang penambang pasir tewas. Dia diduga tak mengindahkan sinyal bahaya kala puncak Merapi diguyur hujan lebat.Selain itu, sopir truk pengangkut pasir yang bernama Subagyo dilaporkan mengalami luka-luka saat berusaha menyelamatkan diri dari kepungan material vulkanis yang mengalir deras dari hulu sungai Gendol. <br> Arus lahar dingin juga menghanyutkan dua truk dan menenggelamkan satu alat berat. <br> Sementara itu empat truk lain terjebak ditengah aliran karena sopir terlambat menepi. Operator backhue (alat berat) selamat setelah mendapat pertolongan dengan ditarik menggunakan seutas tali oleh para relawan. <br> Identitas korban tewas belum diketahui. Dia dievakuasi di dusun suruh, Argomulyo. Lokasi itu berjarak tiga kilometer dari manggong. <br> <strong>Sumber : Jawa Pos, 13 Februari 2013. <br> <br> Mengapa penambang pasir itu menjadi korban ?",
ans: "Dia tak mengindahkan sinyal bahaya kala puncak gunung merapi diguyur hujan",
ansSel: ["Dia terjebak di dalam aliran material vulkanis yang mengalir deras dari hulu sungai Gendol", "Dia terlambat menepi dan terjebak aliran lahar dingin dari puncak gunung merapi","Dia hanyut oleh aliran lahar dingin bersama material vulkanis gunung merapi"]
}

],
},
options = {
help: "<justify> Jawablah 20 soal pilihan ganda dengan menekan tombol A, B, C atau D ! untuk membuka gambar, gunakan koneksi internet atau data mobile</justify>",
intro: "SOAL UJIAN NASIONAL SEKOLAH DASAR",
allRandom: true,
title: "<b>BAHASA INDONESIA PAKET A</b>"
};
$("#quizArea").jQuizMe(quiz, options);
});
