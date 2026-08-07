// ============================================================
// BANK SOAL SISTEM TATA SURYA
// Media Pembelajaran Berbasis Web dengan Augmented Reality
// Total: 50 Soal Paket C
// ============================================================

const PAKET_3 = [
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "1. Lapisan Matahari yang menjadi tempat munculnya bintik matahari (sunspot) adalah?",
    options: [
      "A. Inti Surya",
      "B. Fotosfer",
      "C. Korona",
      "D. Zona Konvektif",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Fotosfer\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "2. Lapisan terluar Matahari yang hanya terlihat saat gerhana matahari total disebut?",
    options: [
      "A. Fotosfer",
      "B. Kromosfer",
      "C. Korona",
      "D. Inti",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Korona\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "3. Berapa lama satu tahun di Merkurius (waktu mengorbit Matahari)?",
    options: [
      "A. Sekitar 88 hari Bumi",
      "B. Sekitar 365 hari Bumi",
      "C. Sekitar 225 hari Bumi",
      "D. Sekitar 700 hari Bumi",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sekitar 88 hari Bumi\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "4. Permukaan Merkurius memiliki kemiripan dengan benda langit apa karena banyaknya kawah?",
    options: [
      "A. Bulan",
      "B. Mars",
      "C. Venus",
      "D. Jupiter",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Bulan\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "5. Berapa lama satu hari di Venus dibandingkan satu tahunnya?",
    options: [
      "A. Satu hari Venus lebih pendek dari satu tahun Venus",
      "B. Satu hari Venus lebih panjang dari satu tahun Venus",
      "C. Sama persis",
      "D. Venus tidak memiliki hari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Satu hari Venus lebih panjang dari satu tahun Venus\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "6. Tekanan atmosfer di permukaan Venus kira-kira berapa kali tekanan atmosfer Bumi?",
    options: [
      "A. 2 kali",
      "B. 10 kali",
      "C. 90 kali",
      "D. 500 kali",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"90 kali\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "7. Lapisan atmosfer Bumi yang melindungi dari radiasi ultraviolet berbahaya adalah lapisan?",
    options: [
      "A. Ozon",
      "B. Troposfer",
      "C. Termosfer",
      "D. Eksosfer",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ozon\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "8. Bumi memiliki satu satelit alami. Apa namanya?",
    options: [
      "A. Titan",
      "B. Bulan",
      "C. Europa",
      "D. Phobos",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Bulan\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "9. Berapa lama satu tahun di Mars dibandingkan satu tahun di Bumi?",
    options: [
      "A. Sekitar setengah tahun Bumi",
      "B. Sekitar 1,88 kali tahun Bumi",
      "C. Sama persis dengan Bumi",
      "D. Sekitar 10 kali tahun Bumi",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sekitar 1,88 kali tahun Bumi\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "10. Ngarai raksasa di Mars yang merupakan salah satu yang terbesar di Tata Surya bernama?",
    options: [
      "A. Valles Marineris",
      "B. Olympus Mons",
      "C. Hellas Basin",
      "D. Tharsis Montes",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Valles Marineris\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "11. Badai raksasa 'Great Red Spot' di Jupiter sudah berlangsung selama?",
    options: [
      "A. Beberapa hari",
      "B. Beberapa bulan",
      "C. Ratusan tahun",
      "D. Beberapa minggu",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Ratusan tahun\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "12. Apa nama satelit terbesar Jupiter sekaligus satelit terbesar di Tata Surya?",
    options: [
      "A. Ganymede",
      "B. Europa",
      "C. Io",
      "D. Callisto",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ganymede\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "13. Cincin Saturnus tersusun dalam beberapa bagian dengan nama diberi berdasarkan?",
    options: [
      "A. Abjad (A, B, C, D, dst)",
      "B. Angka Romawi",
      "C. Nama dewa Yunani",
      "D. Warna",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Abjad (A, B, C, D, dst)\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "14. Saturnus memiliki jumlah satelit alami yang sangat banyak. Manakah satelit yang punya danau metana cair?",
    options: [
      "A. Titan",
      "B. Rhea",
      "C. Mimas",
      "D. Iapetus",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Titan\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "15. Uranus ditemukan oleh astronom pada tahun 1781. Siapa penemunya?",
    options: [
      "A. William Herschel",
      "B. Galileo Galilei",
      "C. Johannes Kepler",
      "D. Isaac Newton",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"William Herschel\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "16. Uranus tergolong sebagai planet jenis apa berdasarkan komposisinya?",
    options: [
      "A. Raksasa Gas (Gas Giant)",
      "B. Raksasa Es (Ice Giant)",
      "C. Planet Kebumian",
      "D. Planet Kerdil",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Raksasa Es (Ice Giant)\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "17. Neptunus ditemukan melalui perhitungan matematis sebelum diamati langsung. Siapa yang pertama kali mengamatinya pada 1846?",
    options: [
      "A. Johann Galle",
      "B. William Herschel",
      "C. Galileo Galilei",
      "D. Edmund Halley",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Johann Galle\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "18. Neptunus juga tergolong planet jenis apa, sama seperti Uranus?",
    options: [
      "A. Raksasa Gas",
      "B. Raksasa Es",
      "C. Planet Kebumian",
      "D. Planet Kerdil",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Raksasa Es\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "19. Diameter Bulan kira-kira berapa dibandingkan diameter Bumi?",
    options: [
      "A. Sekitar 1/4 diameter Bumi",
      "B. Sekitar sama besar dengan Bumi",
      "C. Sekitar 1/10 diameter Bumi",
      "D. Sekitar 2x diameter Bumi",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sekitar 1/4 diameter Bumi\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "20. Teori yang paling diterima tentang asal-usul Bulan adalah?",
    options: [
      "A. Terbentuk sendiri di orbit Bumi",
      "B. Hasil tumbukan besar antara Bumi dan objek seukuran Mars (Giant Impact)",
      "C. Ditangkap oleh gravitasi Bumi dari luar angkasa",
      "D. Pecahan dari Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Hasil tumbukan besar antara Bumi dan objek seukuran Mars (Giant Impact)\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "21. Nama Phobos diambil dari mitologi Yunani, yang berarti?",
    options: [
      "A. Ketakutan",
      "B. Keberanian",
      "C. Cinta",
      "D. Kebijaksanaan",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ketakutan\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "22. Phobos memiliki kawah besar bernama Stickney yang hampir?",
    options: [
      "A. Menghancurkan Phobos itu sendiri",
      "B. Tidak berpengaruh sama sekali",
      "C. Membentuk cincin baru",
      "D. Membuat Phobos memiliki atmosfer",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Menghancurkan Phobos itu sendiri\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "23. Ketebalan lapisan es di permukaan Europa diperkirakan mencapai?",
    options: [
      "A. Beberapa sentimeter",
      "B. Belasan hingga puluhan kilometer",
      "C. 1 meter saja",
      "D. Tidak memiliki lapisan es",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Belasan hingga puluhan kilometer\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "24. Misi luar angkasa yang dirancang khusus untuk mempelajari Europa lebih lanjut bernama?",
    options: [
      "A. Europa Clipper",
      "B. Voyager",
      "C. Cassini",
      "D. New Horizons",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Europa Clipper\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "25. Wahana antariksa yang berhasil mendarat di permukaan Titan pada 2005 bernama?",
    options: [
      "A. Huygens",
      "B. Cassini",
      "C. Voyager 2",
      "D. Galileo",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Huygens\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "26. Titan adalah satelit terbesar kedua di Tata Surya setelah?",
    options: [
      "A. Ganymede",
      "B. Bulan",
      "C. Europa",
      "D. Callisto",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ganymede\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "27. Wahana antariksa yang menemukan geyser aktif di Enceladus adalah?",
    options: [
      "A. Cassini",
      "B. Voyager 1",
      "C. Galileo",
      "D. New Horizons",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Cassini\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "28. Diameter Enceladus tergolong relatif kecil, yaitu sekitar berapa?",
    options: [
      "A. 500 km",
      "B. 5.000 km",
      "C. 50.000 km",
      "D. 100 km",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"500 km\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "29. Oberon ditemukan oleh astronom yang sama dengan penemu planet Uranus, yaitu?",
    options: [
      "A. William Herschel",
      "B. Galileo Galilei",
      "C. Johannes Kepler",
      "D. Christiaan Huygens",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"William Herschel\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "30. Permukaan Oberon relatif gelap dengan beberapa area terang, hal ini mengindikasikan adanya?",
    options: [
      "A. Material es yang tersingkap akibat tumbukan",
      "B. Lautan cair aktif",
      "C. Aktivitas vulkanik aktif",
      "D. Atmosfer tebal",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Material es yang tersingkap akibat tumbukan\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "31. Suhu permukaan Triton tergolong sangat ekstrem, yaitu?",
    options: [
      "A. Sangat dingin (salah satu terdingin di Tata Surya)",
      "B. Sangat panas",
      "C. Sedang, mirip Bumi",
      "D. Berubah-ubah drastis setiap hari",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sangat dingin (salah satu terdingin di Tata Surya)\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "32. Wahana antariksa yang pertama kali memotret Triton dari dekat pada 1989 adalah?",
    options: [
      "A. Voyager 2",
      "B. Cassini",
      "C. New Horizons",
      "D. Galileo",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Voyager 2\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "33. Wahana antariksa yang mengorbit dan mempelajari Ceres secara detail bernama?",
    options: [
      "A. Dawn",
      "B. New Horizons",
      "C. Voyager",
      "D. Cassini",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Dawn\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "34. Ceres merupakan objek terbesar di wilayah mana?",
    options: [
      "A. Sabuk Asteroid",
      "B. Sabuk Kuiper",
      "C. Awan Oort",
      "D. Cincin Saturnus",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sabuk Asteroid\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "35. Wahana antariksa yang pertama kali mengunjungi dan memotret Pluto dari dekat pada 2015 adalah?",
    options: [
      "A. New Horizons",
      "B. Voyager 1",
      "C. Cassini",
      "D. Dawn",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"New Horizons\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "36. Definisi resmi 'planet kerdil' oleh IAU (International Astronomical Union) ditetapkan pada tahun?",
    options: [
      "A. 1990",
      "B. 2006",
      "C. 2015",
      "D. 2020",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"2006\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "37. Haumea diketahui memiliki berapa satelit alami?",
    options: [
      "A. Tidak ada",
      "B. 2 (Hi'iaka dan Namaka)",
      "C. 5",
      "D. 10",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"2 (Hi'iaka dan Namaka)\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "38. Haumea berotasi sangat cepat, hanya membutuhkan waktu sekitar berapa jam untuk satu putaran?",
    options: [
      "A. Sekitar 4 jam",
      "B. Sekitar 24 jam",
      "C. Sekitar 100 jam",
      "D. Sekitar 1 jam",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sekitar 4 jam\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "39. Siapa yang menemukan Makemake?",
    options: [
      "A. Tim Michael Brown",
      "B. Clyde Tombaugh",
      "C. Giuseppe Piazzi",
      "D. William Herschel",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Tim Michael Brown\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "40. Makemake diketahui memiliki berapa satelit alami yang terkonfirmasi?",
    options: [
      "A. Tidak ada",
      "B. 1 (MK 2)",
      "C. 3",
      "D. 5",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"1 (MK 2)\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "41. Eris sempat dianggap lebih besar dari Pluto, sehingga memicu perdebatan mengenai?",
    options: [
      "A. Definisi resmi 'planet'",
      "B. Nama Tata Surya",
      "C. Jumlah total planet menjadi 10",
      "D. Warna planet",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Definisi resmi 'planet'\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "42. Nama Eris diambil dari mitologi Yunani, yang merupakan dewi?",
    options: [
      "A. Perselisihan/kekacauan",
      "B. Cinta",
      "C. Kebijaksanaan",
      "D. Perang",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Perselisihan/kekacauan\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "43. Apa nama asteroid raksasa kedua terbesar di sabuk asteroid setelah Ceres?",
    options: [
      "A. Vesta",
      "B. Pallas",
      "C. Hygiea",
      "D. Eros",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Vesta\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "44. Asteroid yang orbitnya berpotongan dengan orbit Bumi disebut kelompok?",
    options: [
      "A. Near-Earth Asteroid (NEA)",
      "B. Trojan Asteroid",
      "C. Kuiper Asteroid",
      "D. Oort Asteroid",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Near-Earth Asteroid (NEA)\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "45. Bagian inti padat dari komet yang tersusun dari es dan debu disebut?",
    options: [
      "A. Nukleus",
      "B. Koma",
      "C. Ekor",
      "D. Corona",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Nukleus\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "46. Komet memiliki dua jenis ekor, yaitu ekor debu dan ekor?",
    options: [
      "A. Ion (gas)",
      "B. Batu",
      "C. Logam",
      "D. Air",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ion (gas)\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "47. 55 Cancri e termasuk kategori eksoplanet jenis apa berdasarkan ukurannya?",
    options: [
      "A. Super-Earth (Bumi Super)",
      "B. Gas Giant",
      "C. Planet Kerdil",
      "D. Ice Giant",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Super-Earth (Bumi Super)\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "48. Berapa perkiraan jarak sistem bintang 55 Cancri dari Bumi?",
    options: [
      "A. Sekitar 41 tahun cahaya",
      "B. Sekitar 4 tahun cahaya",
      "C. Sekitar 4.000 tahun cahaya",
      "D. Sekitar 1 tahun cahaya",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sekitar 41 tahun cahaya\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "49. Tata Surya kita berada di bagian lengan spiral mana dari galaksi Bimasakti?",
    options: [
      "A. Lengan Orion",
      "B. Lengan Perseus",
      "C. Lengan Sagitarius",
      "D. Lengan Centaurus",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Lengan Orion\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "50. Berapa perkiraan jumlah bintang yang ada di galaksi Bimasakti?",
    options: [
      "A. Ratusan miliar bintang",
      "B. Ribuan bintang saja",
      "C. Jutaan bintang",
      "D. Hanya satu bintang",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ratusan miliar bintang\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  }
];

module.exports = soalPaketC;
