// ============================================================
// BANK SOAL SISTEM TATA SURYA
// Media Pembelajaran Berbasis Web dengan Augmented Reality
// Total: 50 Soal
// ============================================================

const PAKET_1 = [
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "1. Matahari termasuk ke dalam jenis bintang tipe apa?",
    options: [
      "A. Katai Merah M1V",
      "B. Katai Kuning G2V",
      "C. Bintang Neutron",
      "D. Raksasa Biru O5V",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Katai Kuning G2V\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "2. Berapa persen massa Matahari terhadap total massa Tata Surya?",
    options: [
      "A. 50%",
      "B. 75%",
      "C. 99,86%",
      "D. 99,99%",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"99,86%\". Hal ini berkaitan dengan karakteristik Matahari sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "3. Merkurius adalah planet yang letaknya paling dekat dengan Matahari. Apa ciri khas suhu di planet ini?",
    options: [
      "A. Selalu dingin sepanjang hari",
      "B. Suhu sangat ekstrem antara siang dan malam",
      "C. Suhu stabil sepanjang tahun",
      "D. Selalu lebih panas dari Venus",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Suhu sangat ekstrem antara siang dan malam\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "4. Merkurius tidak memiliki satelit alami. Apa penyebab utamanya?",
    options: [
      "A. Ukurannya terlalu kecil dan gravitasi Matahari terlalu kuat",
      "B. Merkurius tidak memiliki gravitasi",
      "C. Merkurius terlalu jauh dari Matahari",
      "D. Merkurius adalah planet kerdil",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Ukurannya terlalu kecil dan gravitasi Matahari terlalu kuat\". Hal ini berkaitan dengan karakteristik Merkurius sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "5. Mengapa Venus dijuluki 'planet terpanas' di Tata Surya meskipun bukan yang terdekat dengan Matahari?",
    options: [
      "A. Karena rotasinya sangat cepat",
      "B. Karena efek rumah kaca dari atmosfer CO2 tebal",
      "C. Karena memiliki cincin",
      "D. Karena ukurannya paling besar",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Karena efek rumah kaca dari atmosfer CO2 tebal\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "6. Bagaimana arah rotasi Venus dibandingkan planet lain di Tata Surya?",
    options: [
      "A. Searah dengan planet lain",
      "B. Berlawanan arah (retrograde)",
      "C. Tidak berotasi sama sekali",
      "D. Rotasinya sejajar dengan Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Berlawanan arah (retrograde)\". Hal ini berkaitan dengan karakteristik Venus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "7. Apa yang membuat Bumi menjadi satu-satunya planet yang diketahui mendukung kehidupan?",
    options: [
      "A. Jaraknya paling dekat dengan Matahari",
      "B. Adanya air cair, atmosfer pelindung, dan suhu yang mendukung",
      "C. Ukurannya paling besar",
      "D. Memiliki banyak satelit",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Adanya air cair, atmosfer pelindung, dan suhu yang mendukung\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "8. Apa fungsi utama medan magnet Bumi?",
    options: [
      "A. Mempercepat rotasi Bumi",
      "B. Melindungi Bumi dari radiasi dan angin matahari",
      "C. Menghasilkan gravitasi Bumi",
      "D. Mengatur suhu permukaan Bumi",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Melindungi Bumi dari radiasi dan angin matahari\". Hal ini berkaitan dengan karakteristik Bumi sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "9. Mengapa permukaan Mars tampak berwarna kemerahan?",
    options: [
      "A. Karena mengandung banyak air",
      "B. Karena kandungan oksida besi (karat) pada permukaannya",
      "C. Karena atmosfernya sangat tebal",
      "D. Karena letaknya paling dekat Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Karena kandungan oksida besi (karat) pada permukaannya\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "10. Apa nama gunung berapi terbesar di Mars sekaligus yang terbesar di Tata Surya?",
    options: [
      "A. Olympus Mons",
      "B. Mauna Kea",
      "C. Valles Marineris",
      "D. Elysium Mons",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Olympus Mons\". Hal ini berkaitan dengan karakteristik Mars sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "11. Jupiter dikenal sebagai planet terbesar di Tata Surya. Apa ciri khas atmosfernya?",
    options: [
      "A. Memiliki Badai Besar Merah (Great Red Spot)",
      "B. Tidak memiliki atmosfer",
      "C. Atmosfernya terdiri dari air",
      "D. Atmosfernya sangat tipis",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Memiliki Badai Besar Merah (Great Red Spot)\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "12. Jupiter tergolong ke dalam kelompok planet apa?",
    options: [
      "A. Planet Kebumian (Terrestrial)",
      "B. Planet Kerdil",
      "C. Planet Raksasa Gas (Gas Giant)",
      "D. Planet Es",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Planet Raksasa Gas (Gas Giant)\". Hal ini berkaitan dengan karakteristik Jupiter sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "13. Ciri paling khas dari Saturnus adalah keberadaan sistem cincin yang sangat luas. Cincin ini tersusun dari apa?",
    options: [
      "A. Gas hidrogen",
      "B. Partikel es dan batuan",
      "C. Debu vulkanik",
      "D. Lava beku",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Partikel es dan batuan\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "14. Apa keunikan kepadatan (densitas) Saturnus dibandingkan planet lain?",
    options: [
      "A. Densitasnya lebih rendah dari air",
      "B. Densitasnya paling tinggi di Tata Surya",
      "C. Densitasnya sama dengan Bumi",
      "D. Densitasnya tidak dapat diukur",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Densitasnya lebih rendah dari air\". Hal ini berkaitan dengan karakteristik Saturnus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "15. Apa keunikan arah rotasi Uranus dibandingkan planet lain di Tata Surya?",
    options: [
      "A. Berotasi normal seperti planet lain",
      "B. Berotasi 'menggelinding' dengan sumbu miring ekstrem (~98 derajat)",
      "C. Tidak berotasi sama sekali",
      "D. Berotasi paling cepat di Tata Surya",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Berotasi 'menggelinding' dengan sumbu miring ekstrem (~98 derajat)\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "16. Warna kebiruan-hijauan Uranus disebabkan oleh kandungan gas apa dalam atmosfernya?",
    options: [
      "A. Metana",
      "B. Oksigen",
      "C. Nitrogen",
      "D. Karbon monoksida",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Metana\". Hal ini berkaitan dengan karakteristik Uranus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "17. Neptunus dikenal memiliki angin tercepat di Tata Surya. Berapa kecepatan anginnya secara umum?",
    options: [
      "A. Ratusan km/jam",
      "B. Hingga lebih dari 2000 km/jam",
      "C. Kurang dari 10 km/jam",
      "D. Tidak memiliki angin",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Hingga lebih dari 2000 km/jam\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "18. Neptunus merupakan planet ke berapa dari Matahari (planet terjauh)?",
    options: [
      "A. Ke-6",
      "B. Ke-7",
      "C. Ke-8",
      "D. Ke-9",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Ke-8\". Hal ini berkaitan dengan karakteristik Neptunus sebagaimana dijelaskan pada materi Matahari & Planet Utama dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "19. Bulan adalah satelit alami Bumi. Apa pengaruh utama Bulan terhadap Bumi?",
    options: [
      "A. Menyebabkan gempa bumi",
      "B. Menyebabkan fenomena pasang surut air laut",
      "C. Mengatur suhu Bumi",
      "D. Menghasilkan oksigen di Bumi",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Menyebabkan fenomena pasang surut air laut\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "20. Mengapa kita selalu melihat sisi Bulan yang sama dari Bumi?",
    options: [
      "A. Bulan tidak berotasi",
      "B. Bulan mengalami rotasi tertahan (tidally locked) terhadap Bumi",
      "C. Bulan berotasi sangat cepat",
      "D. Bumi tidak bergerak",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Bulan mengalami rotasi tertahan (tidally locked) terhadap Bumi\". Hal ini berkaitan dengan karakteristik Bulan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "21. Phobos adalah satelit alami dari planet apa?",
    options: [
      "A. Bumi",
      "B. Mars",
      "C. Jupiter",
      "D. Saturnus",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Mars\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "22. Apa yang diprediksi terjadi pada Phobos di masa depan akibat orbitnya yang semakin mendekati Mars?",
    options: [
      "A. Akan menjauh dari Mars",
      "B. Akan hancur atau menabrak Mars",
      "C. Akan menjadi planet baru",
      "D. Tidak akan mengalami perubahan",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Akan hancur atau menabrak Mars\". Hal ini berkaitan dengan karakteristik Phobos sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "23. Europa adalah satelit alami Jupiter yang menarik perhatian ilmuwan karena diduga memiliki apa di bawah permukaan esnya?",
    options: [
      "A. Lautan air cair",
      "B. Gunung berapi aktif",
      "C. Atmosfer tebal",
      "D. Cincin planet",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Lautan air cair\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "24. Permukaan Europa didominasi oleh material apa?",
    options: [
      "A. Batuan vulkanik",
      "B. Lapisan es",
      "C. Pasir",
      "D. Logam cair",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Lapisan es\". Hal ini berkaitan dengan karakteristik Europa sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "25. Titan adalah satelit terbesar dari planet apa?",
    options: [
      "A. Uranus",
      "B. Neptunus",
      "C. Saturnus",
      "D. Jupiter",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Saturnus\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "26. Titan adalah satu-satunya satelit di Tata Surya yang diketahui memiliki apa?",
    options: [
      "A. Cincin sendiri",
      "B. Atmosfer tebal dan danau cairan metana/etana",
      "C. Medan magnet terkuat",
      "D. Suhu paling panas",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Atmosfer tebal dan danau cairan metana/etana\". Hal ini berkaitan dengan karakteristik Titan sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "27. Enceladus adalah satelit alami Saturnus yang terkenal karena memancarkan apa dari kutub selatannya?",
    options: [
      "A. Semburan geyser air es (cryovolcano)",
      "B. Awan debu vulkanik",
      "C. Radiasi tinggi",
      "D. Cincin sendiri",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Semburan geyser air es (cryovolcano)\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "28. Mengapa Enceladus menjadi salah satu target pencarian kehidupan di luar Bumi?",
    options: [
      "A. Permukaannya sangat panas",
      "B. Diduga memiliki lautan air cair di bawah permukaan esnya",
      "C. Memiliki atmosfer seperti Bumi",
      "D. Memiliki gravitasi sebesar Bumi",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Diduga memiliki lautan air cair di bawah permukaan esnya\". Hal ini berkaitan dengan karakteristik Enceladus sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "29. Oberon adalah salah satu satelit alami terbesar dari planet apa?",
    options: [
      "A. Uranus",
      "B. Neptunus",
      "C. Saturnus",
      "D. Mars",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Uranus\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "30. Permukaan Oberon didominasi oleh fitur geologis apa?",
    options: [
      "A. Lautan cair",
      "B. Kawah tubrukan dan tebing es",
      "C. Gunung berapi aktif",
      "D. Gurun pasir",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Kawah tubrukan dan tebing es\". Hal ini berkaitan dengan karakteristik Oberon sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "31. Triton adalah satelit terbesar dari planet apa?",
    options: [
      "A. Neptunus",
      "B. Uranus",
      "C. Saturnus",
      "D. Jupiter",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Neptunus\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "32. Apa keunikan arah orbit Triton terhadap planet induknya?",
    options: [
      "A. Mengorbit searah rotasi planet",
      "B. Mengorbit berlawanan arah (retrograde)",
      "C. Tidak mengorbit sama sekali",
      "D. Orbitnya berbentuk garis lurus",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Mengorbit berlawanan arah (retrograde)\". Hal ini berkaitan dengan karakteristik Triton sebagaimana dijelaskan pada materi Satelit Alami dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "33. Ceres adalah planet kerdil yang terletak di wilayah apa?",
    options: [
      "A. Sabuk Asteroid antara Mars dan Jupiter",
      "B. Sabuk Kuiper",
      "C. Awan Oort",
      "D. Di antara Bumi dan Mars",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sabuk Asteroid antara Mars dan Jupiter\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "34. Apa status Ceres sebelum akhirnya diklasifikasikan sebagai planet kerdil?",
    options: [
      "A. Bintang",
      "B. Asteroid terbesar di sabuk asteroid",
      "C. Satelit Mars",
      "D. Komet",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Asteroid terbesar di sabuk asteroid\". Hal ini berkaitan dengan karakteristik Ceres sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "35. Pluto pernah dianggap sebagai planet kesembilan Tata Surya sebelum direklasifikasi menjadi planet kerdil pada tahun berapa?",
    options: [
      "A. 1996",
      "B. 2006",
      "C. 2016",
      "D. 2020",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"2006\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "36. Pluto terletak di wilayah Tata Surya bagian mana?",
    options: [
      "A. Sabuk Asteroid",
      "B. Sabuk Kuiper",
      "C. Dekat Matahari",
      "D. Antara Mars dan Jupiter",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sabuk Kuiper\". Hal ini berkaitan dengan karakteristik Pluto sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "37. Apa ciri khas bentuk Haumea yang membedakannya dari planet kerdil lainnya?",
    options: [
      "A. Berbentuk bulat sempurna",
      "B. Berbentuk lonjong/elips akibat rotasinya yang sangat cepat",
      "C. Berbentuk cincin",
      "D. Tidak memiliki bentuk yang jelas",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Berbentuk lonjong/elips akibat rotasinya yang sangat cepat\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "38. Haumea diketahui memiliki apa yang jarang ditemukan pada objek Sabuk Kuiper lainnya?",
    options: [
      "A. Atmosfer tebal",
      "B. Sistem cincin",
      "C. Lautan air cair di permukaan",
      "D. Medan magnet sangat kuat",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sistem cincin\". Hal ini berkaitan dengan karakteristik Haumea sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "39. Makemake adalah planet kerdil yang ditemukan di wilayah apa?",
    options: [
      "A. Sabuk Asteroid",
      "B. Sabuk Kuiper",
      "C. Awan Oort",
      "D. Dekat Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Sabuk Kuiper\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "40. Nama 'Makemake' diambil dari mitologi budaya mana?",
    options: [
      "A. Yunani",
      "B. Mesir",
      "C. Rapa Nui (Pulau Paskah)",
      "D. Nordik",
    ],
    answer: 2,
    explanation: "Jawaban yang tepat adalah \"Rapa Nui (Pulau Paskah)\". Hal ini berkaitan dengan karakteristik Makemake sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "41. Penemuan Eris menjadi salah satu alasan utama direklasifikasinya status planet apa?",
    options: [
      "A. Mars",
      "B. Pluto",
      "C. Neptunus",
      "D. Ceres",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Pluto\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "42. Eris adalah salah satu planet kerdil terbesar dan terletak di wilayah apa?",
    options: [
      "A. Sabuk Asteroid",
      "B. Wilayah terluar Tata Surya (Piringan Tersebar/Scattered Disc)",
      "C. Dekat Matahari",
      "D. Antara Bumi dan Mars",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Wilayah terluar Tata Surya (Piringan Tersebar/Scattered Disc)\". Hal ini berkaitan dengan karakteristik Eris sebagaimana dijelaskan pada materi Planet Kerdil dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "43. Sebagian besar asteroid di Tata Surya ditemukan di wilayah apa?",
    options: [
      "A. Sabuk Asteroid antara Mars dan Jupiter",
      "B. Sabuk Kuiper",
      "C. Di dalam orbit Merkurius",
      "D. Awan Oort",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Sabuk Asteroid antara Mars dan Jupiter\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "44. Apa perbedaan utama asteroid dengan komet?",
    options: [
      "A. Asteroid terdiri dari batuan/logam, komet dari es dan debu",
      "B. Asteroid selalu memiliki ekor, komet tidak",
      "C. Asteroid hanya ada di luar Tata Surya",
      "D. Tidak ada perbedaan",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Asteroid terdiri dari batuan/logam, komet dari es dan debu\". Hal ini berkaitan dengan karakteristik Asteroid sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "45. Mengapa komet memiliki ekor yang terlihat saat mendekati Matahari?",
    options: [
      "A. Karena gravitasi Matahari menariknya",
      "B. Karena es pada komet menguap akibat panas Matahari (sublimasi)",
      "C. Karena tabrakan dengan asteroid",
      "D. Karena medan magnet Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Karena es pada komet menguap akibat panas Matahari (sublimasi)\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "46. Dari mana sebagian besar komet periode panjang diperkirakan berasal?",
    options: [
      "A. Sabuk Asteroid",
      "B. Awan Oort",
      "C. Atmosfer Jupiter",
      "D. Inti Matahari",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Awan Oort\". Hal ini berkaitan dengan karakteristik Komet sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "47. 55 Cancri e adalah sebuah eksoplanet yang terkenal dengan julukan apa akibat dugaan kandungan karbonnya?",
    options: [
      "A. Planet Es",
      "B. Planet Berlian (Diamond Planet)",
      "C. Planet Air",
      "D. Planet Beracun",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Planet Berlian (Diamond Planet)\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "48. 55 Cancri e mengorbit bintang di luar Tata Surya kita, sehingga disebut sebagai apa?",
    options: [
      "A. Planet Kerdil",
      "B. Eksoplanet",
      "C. Satelit Alami",
      "D. Komet",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Eksoplanet\". Hal ini berkaitan dengan karakteristik 55 Cancri E sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "49. Tata Surya kita berada di galaksi apa?",
    options: [
      "A. Andromeda",
      "B. Bimasakti (Milky Way)",
      "C. Triangulum",
      "D. Sombrero",
    ],
    answer: 1,
    explanation: "Jawaban yang tepat adalah \"Bimasakti (Milky Way)\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "50. Bimasakti tergolong galaksi berbentuk apa?",
    options: [
      "A. Spiral berbatang (Barred Spiral)",
      "B. Elips",
      "C. Tidak beraturan",
      "D. Bulat sempurna",
    ],
    answer: 0,
    explanation: "Jawaban yang tepat adalah \"Spiral berbatang (Barred Spiral)\". Hal ini berkaitan dengan karakteristik Bimasakti sebagaimana dijelaskan pada materi Benda Langit Lainnya dalam media pembelajaran Sistem Tata Surya."
  }
];

module.exports = soalPaketA;
