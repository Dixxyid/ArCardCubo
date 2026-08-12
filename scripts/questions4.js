// ============================================================
// BANK SOAL SISTEM TATA SURYA - PAKET D
// Media Pembelajaran Berbasis Web dengan Augmented Reality
// Total: 50 Soal
// ============================================================

const PAKET_4 = [
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "1. Berapa perkiraan usia Matahari saat ini?",
    options: ["A. Sekitar 1 miliar tahun", "B. Sekitar 4,6 miliar tahun", "C. Sekitar 10 miliar tahun", "D. Sekitar 100 juta tahun"],
    answer: 1,
    explanation: "Matahari diperkirakan berusia sekitar 4,6 miliar tahun, sejalan dengan usia pembentukan Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "2. Siklus aktivitas magnetik Matahari (siklus bintik matahari) berlangsung sekitar berapa tahun?",
    options: ["A. 1 tahun", "B. 5 tahun", "C. 11 tahun", "D. 50 tahun"],
    answer: 2,
    explanation: "Medan magnet Matahari berosilasi dalam siklus aktivitas periodik sekitar 11 tahun, memengaruhi jumlah bintik matahari dan cuaca antariksa."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "3. Bagaimana kondisi permukaan Merkurius pada sisi yang menghadap Matahari?",
    options: ["A. Sangat dingin", "B. Sangat panas, dapat mencapai lebih dari 400°C", "C. Selalu tertutup es", "D. Tertutup lautan"],
    answer: 1,
    explanation: "Karena tidak memiliki atmosfer pelindung, sisi Merkurius yang menghadap Matahari dapat mencapai suhu ekstrem lebih dari 400°C."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "4. Warna permukaan Merkurius secara umum cenderung?",
    options: ["A. Kebiruan", "B. Abu-abu gelap seperti Bulan", "C. Merah terang", "D. Hijau"],
    answer: 1,
    explanation: "Permukaan Merkurius didominasi warna abu-abu gelap dengan banyak kawah, mirip dengan permukaan Bulan."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "5. Mengapa manusia sulit mengamati permukaan Venus secara langsung dari luar angkasa?",
    options: ["A. Karena terlalu kecil", "B. Karena tertutup awan asam sulfat yang sangat tebal", "C. Karena terlalu jauh", "D. Karena tidak memantulkan cahaya"],
    answer: 1,
    explanation: "Permukaan Venus tertutup oleh awan tebal asam sulfat, sehingga permukaannya hanya dapat dipetakan menggunakan radar."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "6. Ukuran Venus jika dibandingkan dengan Bumi tergolong?",
    options: ["A. Jauh lebih kecil", "B. Hampir sama besar", "C. Dua kali lebih besar", "D. Jauh lebih besar"],
    answer: 1,
    explanation: "Venus memiliki ukuran dan massa yang hampir sama dengan Bumi, sehingga sering disebut sebagai 'planet saudara' Bumi."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "7. Apa nama lapisan terluar Bumi yang menjadi tempat tinggal manusia dan makhluk hidup?",
    options: ["A. Inti Bumi", "B. Mantel", "C. Kerak Bumi", "D. Atmosfer"],
    answer: 2,
    explanation: "Kerak Bumi (crust) adalah lapisan terluar padat tempat manusia dan seluruh makhluk hidup tinggal."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "8. Rotasi Bumi pada sumbunya menyebabkan terjadinya?",
    options: ["A. Pergantian musim", "B. Siang dan malam", "C. Gerhana", "D. Pasang surut"],
    answer: 1,
    explanation: "Rotasi Bumi pada sumbunya selama kurang lebih 24 jam menyebabkan terjadinya siang dan malam."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "9. Mars memiliki musim seperti Bumi karena?",
    options: ["A. Sumbu rotasinya miring seperti Bumi", "B. Jaraknya sangat dekat dengan Matahari", "C. Memiliki cincin", "D. Berotasi sangat cepat"],
    answer: 0,
    explanation: "Kemiringan sumbu rotasi Mars mirip dengan Bumi, sehingga Mars juga mengalami pergantian musim meski dengan durasi yang lebih panjang."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "10. Fenomena badai debu raksasa yang dapat menutupi seluruh permukaan Mars disebut?",
    options: ["A. Badai debu global (global dust storm)", "B. Aurora", "C. Gerhana Mars", "D. Badai petir"],
    answer: 0,
    explanation: "Mars dapat mengalami badai debu berskala global yang menutupi seluruh permukaan planet selama beberapa minggu hingga bulan."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "11. Jupiter memiliki periode rotasi yang sangat cepat, yaitu sekitar?",
    options: ["A. 10 jam", "B. 24 jam", "C. 48 jam", "D. 100 jam"],
    answer: 0,
    explanation: "Jupiter berotasi sangat cepat, hanya membutuhkan waktu sekitar 10 jam untuk satu putaran penuh, menjadikannya planet dengan rotasi tercepat di Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "12. Jupiter memiliki sistem cincin, meski sangat tipis dan tersusun dari?",
    options: ["A. Debu halus", "B. Es tebal", "C. Batuan besar", "D. Gas metana"],
    answer: 0,
    explanation: "Jupiter memiliki cincin tipis yang tersusun dari partikel debu halus, berbeda dengan cincin Saturnus yang lebih tebal dan jelas."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "13. Saturnus memiliki kepadatan (densitas) yang lebih rendah dibandingkan?",
    options: ["A. Air", "B. Udara", "C. Besi", "D. Es"],
    answer: 0,
    explanation: "Densitas rata-rata Saturnus lebih rendah daripada densitas air, sehingga secara teoretis Saturnus dapat mengapung jika ditempatkan di lautan yang cukup besar."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "14. Berapa lama waktu yang dibutuhkan Saturnus untuk mengorbit satu kali mengelilingi Matahari?",
    options: ["A. Sekitar 1 tahun Bumi", "B. Sekitar 12 tahun Bumi", "C. Sekitar 29 tahun Bumi", "D. Sekitar 84 tahun Bumi"],
    answer: 2,
    explanation: "Saturnus membutuhkan waktu sekitar 29 tahun Bumi untuk menyelesaikan satu orbit penuh mengelilingi Matahari."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "15. Karena sumbu rotasinya yang sangat miring, Uranus mengalami musim yang berlangsung sangat?",
    options: ["A. Singkat, hanya beberapa hari", "B. Panjang, sekitar 20 tahun per musim", "C. Tidak memiliki musim", "D. Berubah setiap hari"],
    answer: 1,
    explanation: "Akibat kemiringan sumbu rotasi yang ekstrem dan periode orbit yang panjang (84 tahun), setiap musim di Uranus dapat berlangsung sekitar 20 tahun."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "16. Wahana antariksa apa yang pernah mengunjungi Uranus dari dekat?",
    options: ["A. Voyager 2", "B. New Horizons", "C. Cassini", "D. Juno"],
    answer: 0,
    explanation: "Voyager 2 adalah satu-satunya wahana antariksa yang pernah terbang melintasi dan memotret Uranus dari dekat, pada tahun 1986."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "17. Berapa lama waktu yang dibutuhkan Neptunus untuk mengorbit Matahari satu kali?",
    options: ["A. Sekitar 84 tahun Bumi", "B. Sekitar 165 tahun Bumi", "C. Sekitar 200 tahun Bumi", "D. Sekitar 250 tahun Bumi"],
    answer: 1,
    explanation: "Neptunus membutuhkan waktu sekitar 165 tahun Bumi untuk menyelesaikan satu kali orbit mengelilingi Matahari."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "18. Neptunus memiliki badai raksasa yang mirip Great Red Spot Jupiter, disebut?",
    options: ["A. Great Dark Spot", "B. Great Blue Spot", "C. Great White Spot", "D. Great Storm Eye"],
    answer: 0,
    explanation: "Neptunus pernah teramati memiliki badai raksasa berwarna gelap yang disebut Great Dark Spot oleh wahana Voyager 2."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "19. Fase Bulan yang terjadi ketika seluruh permukaan Bulan yang menghadap Bumi terlihat terang disebut?",
    options: ["A. Bulan Baru", "B. Bulan Purnama", "C. Bulan Sabit", "D. Bulan Separuh"],
    answer: 1,
    explanation: "Bulan Purnama terjadi ketika Bulan berada pada posisi yang membuat seluruh sisi yang menghadap Bumi diterangi penuh oleh cahaya Matahari."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "20. Misi luar angkasa yang pertama kali membawa manusia mendarat di Bulan bernama?",
    options: ["A. Apollo 11", "B. Voyager 1", "C. Gemini 4", "D. Sputnik 1"],
    answer: 0,
    explanation: "Apollo 11 adalah misi yang berhasil membawa astronot pertama, Neil Armstrong dan Buzz Aldrin, mendarat di Bulan pada tahun 1969."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "21. Ukuran Phobos tergolong sangat kecil, dengan diameter rata-rata sekitar?",
    options: ["A. 22 km", "B. 220 km", "C. 2.200 km", "D. 22.000 km"],
    answer: 0,
    explanation: "Phobos memiliki diameter rata-rata sekitar 22 km, menjadikannya salah satu satelit terkecil di Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "22. Dari permukaan Mars, Phobos akan terlihat terbit dari arah?",
    options: ["A. Timur", "B. Barat, dan terbenam di timur (berlawanan arah normal)", "C. Utara", "D. Selatan"],
    answer: 1,
    explanation: "Karena orbitnya yang sangat cepat dan dekat, Phobos justru terlihat terbit dari barat dan terbenam di timur jika diamati dari permukaan Mars."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "23. Europa termasuk satelit alami yang mengorbit planet apa?",
    options: ["A. Saturnus", "B. Jupiter", "C. Uranus", "D. Neptunus"],
    answer: 1,
    explanation: "Europa adalah salah satu dari empat satelit Galilean yang mengorbit planet Jupiter."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "24. Permukaan Europa relatif halus dan hampir tidak memiliki?",
    options: ["A. Kawah tumbukan besar", "B. Warna", "C. Bentuk bulat", "D. Gravitasi"],
    answer: 0,
    explanation: "Permukaan Europa relatif halus dengan sedikit kawah besar, mengindikasikan adanya proses geologis aktif yang memperbarui permukaannya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "25. Titan mengorbit planet apa dan menjadi salah satu target eksplorasi kehidupan luar Bumi?",
    options: ["A. Saturnus", "B. Uranus", "C. Neptunus", "D. Jupiter"],
    answer: 0,
    explanation: "Titan adalah satelit terbesar Saturnus dan menjadi salah satu target utama pencarian kemungkinan kehidupan berbasis kimia non-air."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "26. Warna langit Titan yang teramati oleh wahana Huygens didominasi warna?",
    options: ["A. Biru cerah", "B. Oranye kecokelatan", "C. Hijau", "D. Ungu"],
    answer: 1,
    explanation: "Atmosfer tebal Titan yang mengandung senyawa organik kompleks (haze) memberikan warna oranye kecokelatan pada langitnya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "27. Enceladus mengorbit planet apa?",
    options: ["A. Saturnus", "B. Jupiter", "C. Uranus", "D. Neptunus"],
    answer: 0,
    explanation: "Enceladus adalah satelit alami yang mengorbit planet Saturnus."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "28. Semburan geyser di Enceladus mengandung uap air dan diduga mengindikasikan adanya?",
    options: ["A. Lautan air cair di bawah permukaan es", "B. Gunung berapi lava panas", "C. Atmosfer tebal seperti Titan", "D. Cincin tersendiri yang besar"],
    answer: 0,
    explanation: "Geyser yang menyembur dari kutub selatan Enceladus mengindikasikan keberadaan lautan air cair di bawah permukaan esnya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "29. Oberon adalah salah satu satelit alami terbesar dari planet apa?",
    options: ["A. Uranus", "B. Neptunus", "C. Saturnus", "D. Jupiter"],
    answer: 0,
    explanation: "Oberon adalah satelit terbesar kedua dari planet Uranus."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "30. Permukaan Oberon relatif tua dan dipenuhi oleh?",
    options: ["A. Kawah-kawah tumbukan", "B. Lautan cair", "C. Gunung berapi aktif", "D. Awan tebal"],
    answer: 0,
    explanation: "Permukaan Oberon yang tua didominasi oleh banyak kawah tumbukan, menunjukkan sedikit aktivitas geologis baru."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "31. Triton memiliki orbit yang unik karena bergerak berlawanan arah terhadap rotasi planet induknya, yaitu?",
    options: ["A. Neptunus", "B. Uranus", "C. Saturnus", "D. Jupiter"],
    answer: 0,
    explanation: "Triton mengorbit Neptunus secara retrograde (berlawanan arah rotasi planet), yang tidak umum di antara satelit besar Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "32. Permukaan Triton yang unik disebut memiliki tekstur seperti kulit?",
    options: ["A. Melon (cantaloupe terrain)", "B. Jeruk", "C. Apel", "D. Semangka"],
    answer: 0,
    explanation: "Permukaan Triton memiliki tekstur unik yang menyerupai kulit buah melon, sehingga dijuluki 'cantaloupe terrain'."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "33. Ceres merupakan satu-satunya planet kerdil yang terletak di wilayah?",
    options: ["A. Sabuk Asteroid bagian dalam Tata Surya", "B. Sabuk Kuiper", "C. Awan Oort", "D. Dekat Matahari"],
    answer: 0,
    explanation: "Ceres adalah satu-satunya planet kerdil yang terletak di Sabuk Asteroid, wilayah antara Mars dan Jupiter."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "34. Wahana Dawn menemukan adanya titik terang di kawah Occator, yang diduga terbuat dari?",
    options: ["A. Garam/mineral karbonat", "B. Es air murni", "C. Logam besi", "D. Kristal berlian"],
    answer: 0,
    explanation: "Titik terang di kawah Occator pada Ceres diduga merupakan endapan garam/mineral karbonat dari cairan yang naik ke permukaan."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "35. Berapa lama waktu yang dibutuhkan Pluto untuk mengorbit Matahari satu kali?",
    options: ["A. Sekitar 165 tahun Bumi", "B. Sekitar 248 tahun Bumi", "C. Sekitar 500 tahun Bumi", "D. Sekitar 84 tahun Bumi"],
    answer: 1,
    explanation: "Pluto membutuhkan waktu sekitar 248 tahun Bumi untuk mengorbit Matahari satu kali penuh."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "36. Orbit Pluto memiliki kemiringan dan eksentrisitas yang cukup tinggi, menyebabkan Pluto kadang lebih dekat ke Matahari dibanding?",
    options: ["A. Neptunus", "B. Uranus", "C. Saturnus", "D. Jupiter"],
    answer: 0,
    explanation: "Karena orbitnya yang elips dan miring, Pluto kadang berada lebih dekat ke Matahari dibandingkan Neptunus."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "37. Haumea memiliki cincin tipis yang ditemukan pada tahun?",
    options: ["A. 2000", "B. 2017", "C. 2020", "D. 1990"],
    answer: 1,
    explanation: "Cincin tipis di sekitar Haumea baru ditemukan pada tahun 2017 melalui pengamatan okultasi bintang."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "38. Bentuk lonjong Haumea diperkirakan disebabkan oleh?",
    options: ["A. Tumbukan besar di masa lampau", "B. Gravitasi Matahari", "C. Medan magnet kuat", "D. Atmosfer tebal"],
    answer: 0,
    explanation: "Bentuk lonjong dan rotasi cepat Haumea diperkirakan terbentuk akibat tumbukan besar pada masa lampau."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "39. Makemake tidak memiliki apa yang menyebabkan suhunya sangat dingin dan ekstrem?",
    options: ["A. Atmosfer tebal", "B. Satelit", "C. Cincin", "D. Bentuk bulat"],
    answer: 0,
    explanation: "Makemake tidak memiliki atmosfer tebal yang dapat menahan panas, sehingga suhu permukaannya sangat dingin dan ekstrem."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "40. Makemake termasuk salah satu objek terbesar di wilayah?",
    options: ["A. Sabuk Kuiper", "B. Sabuk Asteroid", "C. Awan Oort", "D. Dekat Matahari"],
    answer: 0,
    explanation: "Makemake adalah salah satu objek terbesar yang diketahui di Sabuk Kuiper, wilayah terluar Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "41. Massa Eris hampir setara dengan massa planet kerdil?",
    options: ["A. Pluto", "B. Ceres", "C. Haumea", "D. Makemake"],
    answer: 0,
    explanation: "Massa Eris hampir setara dengan massa Pluto, menjadikannya salah satu planet kerdil terbesar yang diketahui."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "42. Eris terletak sangat jauh dari Matahari, di wilayah yang disebut?",
    options: ["A. Piringan Tersebar (Scattered Disc)", "B. Sabuk Asteroid", "C. Cincin Saturnus", "D. Dekat Matahari"],
    answer: 0,
    explanation: "Eris berada di wilayah Piringan Tersebar (Scattered Disc), bagian terluar Tata Surya yang jauh melampaui Sabuk Kuiper."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "43. Sebagian besar asteroid diperkirakan merupakan sisa material dari?",
    options: ["A. Pembentukan awal Tata Surya yang gagal menjadi planet", "B. Pecahan bintang mati", "C. Sisa komet yang menguap total", "D. Pecahan Bulan"],
    answer: 0,
    explanation: "Asteroid diperkirakan merupakan sisa material pembentukan awal Tata Surya yang gagal berkumpul membentuk sebuah planet."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "44. Tumbukan asteroid besar diduga menjadi penyebab kepunahan massal makhluk hidup, termasuk?",
    options: ["A. Dinosaurus", "B. Mamut", "C. Ikan purba", "D. Serangga purba"],
    answer: 0,
    explanation: "Tumbukan asteroid besar sekitar 66 juta tahun lalu diduga menjadi salah satu penyebab utama kepunahan massal dinosaurus."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "45. Komet periode pendek biasanya berasal dari wilayah?",
    options: ["A. Sabuk Kuiper", "B. Awan Oort", "C. Sabuk Asteroid", "D. Inti Matahari"],
    answer: 0,
    explanation: "Komet dengan periode orbit pendek (kurang dari 200 tahun) umumnya berasal dari wilayah Sabuk Kuiper."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "46. Bagian koma pada komet terbentuk dari proses?",
    options: ["A. Sublimasi es menjadi gas di sekitar nukleus", "B. Pembekuan gas menjadi es", "C. Tumbukan dengan asteroid", "D. Pemanasan inti planet"],
    answer: 0,
    explanation: "Koma adalah lapisan gas dan debu yang terbentuk akibat sublimasi es pada nukleus komet ketika mendekati Matahari."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "47. 55 Cancri e mengorbit bintangnya dengan periode orbit yang sangat singkat, yaitu sekitar?",
    options: ["A. Kurang dari 1 hari Bumi", "B. 1 tahun Bumi", "C. 10 tahun Bumi", "D. 100 hari Bumi"],
    answer: 0,
    explanation: "55 Cancri e mengorbit bintang induknya dalam waktu kurang dari 18 jam, jauh lebih cepat dibandingkan planet mana pun di Tata Surya kita."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "48. Fenomena 55 Cancri e yang terkunci gravitasi (tidally locked) menyebabkan planet ini memiliki?",
    options: ["A. Sisi siang yang sangat panas dan sisi malam yang lebih dingin", "B. Suhu yang sama di seluruh permukaan", "C. Tidak memiliki siang dan malam", "D. Rotasi yang sangat cepat"],
    answer: 0,
    explanation: "Karena terkunci gravitasi terhadap bintangnya, satu sisi 55 Cancri e selalu menghadap bintang (sangat panas) sementara sisi lain selalu gelap."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "49. Galaksi yang diperkirakan akan bertabrakan dengan Bimasakti di masa depan (miliaran tahun mendatang) adalah?",
    options: ["A. Galaksi Andromeda", "B. Galaksi Triangulum", "C. Galaksi Sombrero", "D. Galaksi Whirlpool"],
    answer: 0,
    explanation: "Galaksi Andromeda diperkirakan akan bertabrakan dan bergabung dengan galaksi Bimasakti dalam waktu sekitar 4-5 miliar tahun mendatang."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "50. Tata Surya kita membutuhkan waktu berapa lama untuk mengorbit satu kali mengelilingi pusat galaksi Bimasakti?",
    options: ["A. Sekitar 225-250 juta tahun", "B. Sekitar 1 juta tahun", "C. Sekitar 1000 tahun", "D. Sekitar 1 miliar tahun"],
    answer: 0,
    explanation: "Tata Surya membutuhkan waktu sekitar 225-250 juta tahun (disebut satu tahun galaksi) untuk mengorbit satu kali mengelilingi pusat galaksi Bimasakti."
  }
];

module.exports = soalPaketD;
