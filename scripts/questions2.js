// ============================================================
// BANK SOAL SISTEM TATA SURYA
// Media Pembelajaran Berbasis Web dengan Augmented Reality
// Total: 50 Soal
// ============================================================

const PAKET_2 = [
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "1. Berapa lama waktu yang dibutuhkan cahaya Matahari untuk mencapai Bumi?",
    options: [
      "A. Sekitar 8 menit",
      "B. Sekitar 1 jam",
      "C. Sekitar 1 hari",
      "D. Sekitar 1 detik",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sekitar 8 menit\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "2. Proses apa yang terjadi di inti Matahari untuk menghasilkan energi?",
    options: [
      "A. Fisi nuklir",
      "B. Fusi nuklir proton-proton",
      "C. Pembakaran kimia",
      "D. Reaksi elektromagnetik",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Fusi nuklir proton-proton\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "3. Merkurius merupakan planet ke berapa dari Matahari?",
    options: [
      "A. Pertama",
      "B. Kedua",
      "C. Ketiga",
      "D. Keempat",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Pertama\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "4. Bagaimana kondisi atmosfer Merkurius?",
    options: [
      "A. Sangat tebal seperti Venus",
      "B. Sangat tipis/hampir tidak ada",
      "C. Terdiri dari awan air",
      "D. Sama seperti atmosfer Bumi",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sangat tipis/hampir tidak ada\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "5. Venus sering disebut sebagai 'bintang kejora' karena apa?",
    options: [
      "A. Merupakan bintang sungguhan",
      "B. Sangat terang terlihat dari Bumi di pagi/sore hari",
      "C. Memiliki cincin yang berkilau",
      "D. Berwarna kebiruan",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sangat terang terlihat dari Bumi di pagi/sore hari\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "6. Atmosfer Venus didominasi oleh gas apa?",
    options: [
      "A. Oksigen",
      "B. Nitrogen",
      "C. Karbon Dioksida (CO2)",
      "D. Hidrogen",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Karbon Dioksida (CO2)\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "7. Berapa persentase permukaan Bumi yang tertutup air?",
    options: [
      "A. Sekitar 30%",
      "B. Sekitar 50%",
      "C. Sekitar 71%",
      "D. Sekitar 90%",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Sekitar 71%\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "8. Bumi merupakan planet ke berapa dari Matahari?",
    options: [
      "A. Kedua",
      "B. Ketiga",
      "C. Keempat",
      "D. Kelima",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Ketiga\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "9. Mars memiliki dua satelit alami. Apa nama keduanya?",
    options: [
      "A. Titan dan Triton",
      "B. Phobos dan Deimos",
      "C. Io dan Europa",
      "D. Miranda dan Ariel",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Phobos dan Deimos\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "10. Julukan Mars sebagai 'Planet Merah' disebabkan oleh dominasi mineral apa di permukaannya?",
    options: [
      "A. Besi oksida",
      "B. Kalsium",
      "C. Silikon",
      "D. Sulfur",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Besi oksida\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "11. Jupiter memiliki banyak satelit alami. Empat satelit terbesarnya disebut satelit apa?",
    options: [
      "A. Satelit Galilean",
      "B. Satelit Kuiper",
      "C. Satelit Trojan",
      "D. Satelit Oort",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Satelit Galilean\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "12. Apa komposisi utama atmosfer Jupiter?",
    options: [
      "A. Hidrogen dan Helium",
      "B. Oksigen dan Nitrogen",
      "C. Karbon Dioksida",
      "D. Metana murni",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Hidrogen dan Helium\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "13. Saturnus merupakan planet ke berapa dari Matahari?",
    options: [
      "A. Keenam",
      "B. Ketujuh",
      "C. Kedelapan",
      "D. Kelima",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Keenam\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "14. Apa nama satelit terbesar Saturnus yang memiliki atmosfer tebal?",
    options: [
      "A. Europa",
      "B. Titan",
      "C. Triton",
      "D. Oberon",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Titan\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "15. Uranus merupakan planet ke berapa dari Matahari?",
    options: [
      "A. Keenam",
      "B. Ketujuh",
      "C. Kedelapan",
      "D. Kesembilan",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Ketujuh\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "16. Uranus juga memiliki sistem cincin, meskipun tidak sejelas Saturnus. Apa nama satelit terbesarnya?",
    options: [
      "A. Titan",
      "B. Titania",
      "C. Triton",
      "D. Ceres",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Titania\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "17. Warna biru pekat pada Neptunus disebabkan oleh keberadaan gas apa dalam jumlah tinggi?",
    options: [
      "A. Metana",
      "B. Nitrogen",
      "C. Oksigen",
      "D. Hidrogen sulfida",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Metana\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "18. Apa nama satelit terbesar Neptunus?",
    options: [
      "A. Titan",
      "B. Triton",
      "C. Titania",
      "D. Oberon",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Triton\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "19. Berapa lama waktu yang dibutuhkan Bulan untuk mengorbit satu kali mengelilingi Bumi?",
    options: [
      "A. Sekitar 1 minggu",
      "B. Sekitar 27,3 hari",
      "C. Sekitar 100 hari",
      "D. Sekitar 1 tahun",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sekitar 27,3 hari\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "20. Permukaan Bulan dipenuhi oleh apa akibat tumbukan meteorit selama miliaran tahun?",
    options: [
      "A. Lautan cair",
      "B. Kawah (kraters)",
      "C. Hutan tropis",
      "D. Gletser es",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Kawah (kraters)\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "21. Bagaimana bentuk Phobos dibandingkan satelit-satelit besar lain di Tata Surya?",
    options: [
      "A. Bulat sempurna",
      "B. Tidak beraturan/lonjong seperti kentang",
      "C. Berbentuk cincin",
      "D. Berbentuk pipih seperti piringan",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Tidak beraturan/lonjong seperti kentang\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "22. Phobos mengorbit Mars dengan jarak yang sangat dekat, menyebabkan periode orbitnya sangat...",
    options: [
      "A. Sangat panjang (tahunan)",
      "B. Sangat singkat (kurang dari 1 hari Mars)",
      "C. Sama dengan periode orbit Bumi",
      "D. Tidak beraturan",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sangat singkat (kurang dari 1 hari Mars)\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "23. Europa termasuk salah satu dari empat satelit Galilean Jupiter. Siapa yang menemukannya?",
    options: [
      "A. Isaac Newton",
      "B. Galileo Galilei",
      "C. Johannes Kepler",
      "D. Nicolaus Copernicus",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Galileo Galilei\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "24. Permukaan Europa memiliki pola garis-garis (lineae) yang disebabkan oleh apa?",
    options: [
      "A. Aktivitas vulkanik",
      "B. Retakan es akibat gaya tarik gravitasi Jupiter",
      "C. Badai debu",
      "D. Tumbukan asteroid",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Retakan es akibat gaya tarik gravitasi Jupiter\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "25. Titan memiliki siklus cairan yang mirip siklus air di Bumi, namun menggunakan cairan apa?",
    options: [
      "A. Air",
      "B. Metana dan etana cair",
      "C. Amonia",
      "D. Merkuri cair",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Metana dan etana cair\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "26. Atmosfer Titan didominasi oleh gas apa, mirip dengan atmosfer awal Bumi?",
    options: [
      "A. Oksigen",
      "B. Nitrogen",
      "C. Karbon Dioksida",
      "D. Hidrogen",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Nitrogen\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "27. Semburan geyser di Enceladus turut membentuk salah satu cincin Saturnus, yaitu cincin apa?",
    options: [
      "A. Cincin E",
      "B. Cincin A",
      "C. Cincin B",
      "D. Cincin F",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Cincin E\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "28. Permukaan Enceladus sebagian besar tertutup oleh material apa yang membuatnya sangat reflektif (albedo tinggi)?",
    options: [
      "A. Es air",
      "B. Debu vulkanik hitam",
      "C. Pasir merah",
      "D. Logam besi",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Es air\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "29. Nama Oberon diambil dari karya sastra karya siapa?",
    options: [
      "A. William Shakespeare",
      "B. Homer",
      "C. Dante Alighieri",
      "D. J.R.R. Tolkien",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"William Shakespeare\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "30. Oberon merupakan satelit terbesar kedua dari planet apa?",
    options: [
      "A. Uranus",
      "B. Neptunus",
      "C. Saturnus",
      "D. Jupiter",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Uranus\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "31. Triton diduga berasal dari wilayah Sabuk Kuiper dan kemudian tertangkap oleh gravitasi planet apa?",
    options: [
      "A. Uranus",
      "B. Neptunus",
      "C. Saturnus",
      "D. Jupiter",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Neptunus\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "32. Triton memiliki aktivitas geologis unik berupa semburan apa dari permukaannya?",
    options: [
      "A. Geyser nitrogen cair",
      "B. Lava panas",
      "C. Air mendidih",
      "D. Gas metana beku",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Geyser nitrogen cair\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "33. Siapa yang pertama kali menemukan Ceres pada tahun 1801?",
    options: [
      "A. Giuseppe Piazzi",
      "B. Galileo Galilei",
      "C. Clyde Tombaugh",
      "D. William Herschel",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Giuseppe Piazzi\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "34. Ceres diduga memiliki kandungan apa yang membuatnya menarik untuk diteliti terkait potensi air?",
    options: [
      "A. Es air dalam jumlah signifikan",
      "B. Gas metana murni",
      "C. Cincin planet",
      "D. Atmosfer tebal seperti Venus",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Es air dalam jumlah signifikan\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "35. Siapa yang menemukan Pluto pada tahun 1930?",
    options: [
      "A. Clyde Tombaugh",
      "B. Giuseppe Piazzi",
      "C. Edwin Hubble",
      "D. Percival Lowell",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Clyde Tombaugh\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "36. Apa nama satelit terbesar Pluto?",
    options: [
      "A. Charon",
      "B. Nix",
      "C. Hydra",
      "D. Styx",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Charon\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "37. Nama Haumea diambil dari mitologi budaya mana?",
    options: [
      "A. Yunani",
      "B. Hawaii",
      "C. Nordik",
      "D. Mesir",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Hawaii\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "38. Haumea terletak di wilayah Tata Surya bagian mana?",
    options: [
      "A. Sabuk Asteroid",
      "B. Sabuk Kuiper",
      "C. Dekat Matahari",
      "D. Antara Bumi dan Mars",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sabuk Kuiper\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "39. Makemake ditemukan pada tahun berapa?",
    options: [
      "A. 1930",
      "B. 2005",
      "C. 2015",
      "D. 1990",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"2005\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "40. Permukaan Makemake diperkirakan tertutup oleh apa?",
    options: [
      "A. Es metana dan etana",
      "B. Lautan cair",
      "C. Debu vulkanik",
      "D. Awan gas tebal",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Es metana dan etana\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "41. Eris ditemukan pada tahun berapa dan sempat memicu perdebatan definisi planet?",
    options: [
      "A. 2003",
      "B. 2005",
      "C. 2010",
      "D. 2015",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"2005\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "42. Apa nama satelit yang mengorbit Eris?",
    options: [
      "A. Charon",
      "B. Dysnomia",
      "C. Namaka",
      "D. Hi'iaka",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Dysnomia\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "43. Asteroid tersusun terutama dari material apa?",
    options: [
      "A. Batuan dan logam",
      "B. Es dan gas",
      "C. Air cair",
      "D. Plasma",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Batuan dan logam\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "44. Apa nama asteroid terbesar yang sekaligus diklasifikasikan sebagai planet kerdil?",
    options: [
      "A. Vesta",
      "B. Ceres",
      "C. Pallas",
      "D. Hygiea",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Ceres\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "45. Komet tersusun dari material apa sehingga sering disebut 'bola salju kotor'?",
    options: [
      "A. Es, debu, dan batuan",
      "B. Logam murni",
      "C. Gas hidrogen saja",
      "D. Plasma panas",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Es, debu, dan batuan\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "46. Apa nama komet terkenal yang muncul kembali setiap 76 tahun?",
    options: [
      "A. Komet Hale-Bopp",
      "B. Komet Halley",
      "C. Komet Shoemaker-Levy",
      "D. Komet Hyakutake",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Komet Halley\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "47. 55 Cancri e mengorbit bintangnya dengan jarak yang sangat dekat, sehingga suhu permukaannya sangat...",
    options: [
      "A. Dingin (di bawah 0°C)",
      "B. Sangat panas (ribuan derajat Celsius)",
      "C. Stabil seperti Bumi",
      "D. Tidak dapat diukur",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sangat panas (ribuan derajat Celsius)\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "48. Di konstelasi apa bintang induk 55 Cancri e berada?",
    options: [
      "A. Cancer (Kanser)",
      "B. Orion",
      "C. Ursa Major",
      "D. Scorpius",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Cancer (Kanser)\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "49. Berapa perkiraan diameter galaksi Bimasakti?",
    options: [
      "A. Sekitar 1.000 tahun cahaya",
      "B. Sekitar 100.000 tahun cahaya",
      "C. Sekitar 1 juta tahun cahaya",
      "D. Sekitar 10 tahun cahaya",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sekitar 100.000 tahun cahaya\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "50. Apa yang diperkirakan berada di pusat galaksi Bimasakti?",
    options: [
      "A. Planet raksasa",
      "B. Lubang hitam supermasif (Sagittarius A*)",
      "C. Bintang terbesar",
      "D. Awan gas kosong",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Lubang hitam supermasif (Sagittarius A*)\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  }
];

module.exports = soalPaketB;
