//PSEUDOCODE

// BACA dan SIMPAN [
//["PERTANYAAN1", "PERTANYAAN2", "PERTANYAAN3"]
//["JAWABAN1", "JAWABAN2", "JAWABAN3"]
// BACA dan SIMPAN
//[NILAI (0 sebagai nilai awal)]

// buat FUNGSI untuk pertanyaan PERTANYAAN1 dengan memanggil index [PERTANYAAN1]
// buat pemberitahuan ALERT "kalimat selamat datang" untuk memulai quiz
// buat pertanyaan pertama untuk quiz (q1) dengan PROMPT [PERTANYAAN1] 
//IF jawaban q1 sama dengan ["JAWABAN1"] maka SCORE + 1 
//IF jawaban q1 sama dengan [""] maka SCORE = 0
//ELSE jawaban q1 tidak sama dengan ["JAWABAN 1"] maka SCORE -1
//buat pemberitahuan ("kalimat" + SCORE "yang di dapatkan")

          // buat FUNGSI untuk pertanyaan PERTANYAAN1 dengan memanggil index [PERTANYAAN1]
          // buat pemberitahuan ALERT "kalimat selamat datang" untuk memulai quiz
          // buat pertanyaan pertama untuk quiz (q1) dengan PROMPT [PERTANYAAN1] 
          //IF jawaban q1 sama dengan ["JAWABAN1"] maka SCORE + 1 
          //IF jawaban q1 sama dengan [""] maka SCORE = 0
          //ELSE jawaban q1 tidak sama dengan ["JAWABAN 1"] maka SCORE -1
          //buat pemberitahuan ("kalimat" + SCORE "yang di dapatkan")

// buat FUNGSI untuk pertanyaan PERTANYAAN1 dengan memanggil index [PERTANYAAN1]
// buat pemberitahuan ALERT "kalimat selamat datang" untuk memulai quiz
// buat pertanyaan pertama untuk quiz (q1) dengan PROMPT [PERTANYAAN1] 
//IF jawaban q1 sama dengan ["JAWABAN1"] maka SCORE + 1 
//IF jawaban q1 sama dengan [""] maka SCORE = 0
//ELSE jawaban q1 tidak sama dengan ["JAWABAN 1"] maka SCORE -1
//buat pemberitahuan ("kalimat" + SCORE "yang di dapatkan")
//buat pemberitahuan total score yang di dapat
//IF SCORE sama dengan 3 maka permberitahuan ALERT("kalimat" +  score +"score keseluruhan" )
//IF SCORE sama dengan 2 maka permberitahuan ALERT("kalimat" +  score +"score keseluruhan" )
//IF SCORE sama dengan 1 maka permberitahuan ALERT("kalimat" +  score +"score keseluruhan" )
//IF SCORE sama dengan 0 dan < 0 maka permberitahuan ALERT("kalimat" +  score +"score keseluruhan" )


var tanya=[
    ["siapakah aku, aku adalah orang terkaya nomor 1 dunia versi majalah forbes?", "siapakah aku, aku adalah pemilik mantan CEO Apple sebelum tim cook?", "siapakah aku, aku adalah pemilik dari tesla motor"],
    ["bill gates","steve jobs","ellon musk"],
  ];
var score = 0;

function pertanyaan1(){
  alert ("welcome to the QUIZ!!");
  var q1= prompt(tanya[0][0]);

	if (q1 == tanya[1][0]){
		score++;
		alert("anda benar!! score anda sekarang adalah : " + score);
	} else if (q1 == "" ){
      score;
      alert("Isi jawaban mu untuk memulai quiz"+ "score anda adalah : " + score);
    }
      else{
		score--;
		alert("jawaban anda salah!! score anda sekarang adalah : " + score);
	}
};

function pertanyaan2(){
  var q2= prompt(tanya[0][1]);

	if (q2 == tanya[1][1]){
		score++;
		alert("anda benar!! score anda adalah : " + score);
	} else if (q2 == "" ){
      score;
      alert("Isi jawaban mu untuk memulai quiz"+ "score anda sekarang adalah :" + score);
    }
      else{
		score--;
		alert("jawaban anda salah!! score anda sekarang adalah : " + score);
	}
};

function pertanyaan3(){
  var q3= prompt(tanya[0][2]);

	if (q3 == tanya[1][2]){
		score++;
		alert("anda benar!! score anda adalah : " + score);
	} else if (q3 == "" ){
      score;
      alert("Isi jawaban mu untuk memulai quiz"+ "score anda sekarang adalah :" + score);
    } else{
		score--;
		alert("jawaban anda salah!! score anda sekarang adalah : " + score);
	}
  
      if (score == 3){
          alert("total nilai anda adalah : " + score + " selamat ternyata kamu adalah orang yang up2 date :)");
        } else if (score == 2){
          alert ("total nilai anda adalah : " + score + " yaah sayang sekali kamu boleh mengulangnya lagi ko jangan menyerah :)");
        } else if (score == 1){
          alert ("total nilai anda adalah : " + score + " ya ampun kamu sepertinya harus sering googling deh :))");
        } else {
          alert ("total nilai anda adalah : " + score + " no comment deh");
        };
};


pertanyaan1();
pertanyaan2();
pertanyaan3();