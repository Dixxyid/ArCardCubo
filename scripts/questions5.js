// ============================================================
// BANK SOAL SISTEM TATA SURYA - PAKET E
// Media Pembelajaran Berbasis Web dengan Augmented Reality
// Total: 50 Soal
// ============================================================

const PAKET_5 = [
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "1. Apa nama lapisan Matahari yang menjadi tempat terjadinya reaksi fusi nuklir?",
    options: ["A. Fotosfer", "B. Inti (Core)", "C. Korona", "D. Kromosfer"],
    answer: 1,
    explanation: "Reaksi fusi nuklir yang menghasilkan energi Matahari terjadi di lapisan inti (core), tempat suhu dan tekanan sangat tinggi."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Matahari",
    question: "2. Bintik matahari (sunspot) tampak lebih gelap karena?",
    options: ["A. Suhunya lebih rendah dibanding area sekitarnya", "B. Terbuat dari material padat", "C. Tidak memancarkan cahaya sama sekali", "D. Merupakan lubang di permukaan Matahari"],
    answer: 0,
    explanation: "Bintik matahari tampak lebih gelap karena suhunya lebih rendah dibandingkan area fotosfer di sekitarnya, akibat aktivitas magnetik yang kuat."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "3. Merkurius memiliki inti besi yang sangat besar dibandingkan ukuran planetnya. Apa dampaknya?",
    options: ["A. Menghasilkan medan magnet", "B. Membuat Merkurius memiliki cincin", "C. Membuat Merkurius sangat ringan", "D. Menghilangkan gravitasi Merkurius"],
    answer: 0,
    explanation: "Inti besi besar Merkurius menghasilkan medan magnet, meskipun relatif lemah dibandingkan medan magnet Bumi."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Merkurius",
    question: "4. Merkurius mengalami rotasi yang unik, yaitu resonansi spin-orbit dengan rasio?",
    options: ["A. 3:2 (tiga rotasi setiap dua orbit)", "B. 1:1 seperti Bulan", "C. 2:1", "D. Tidak beraturan"],
    answer: 0,
    explanation: "Merkurius memiliki resonansi spin-orbit 3:2, artinya planet ini menyelesaikan tiga rotasi untuk setiap dua kali mengorbit Matahari."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "5. Fenomena rumah kaca ekstrem di Venus menjadikannya studi penting untuk memahami apa di Bumi?",
    options: ["A. Perubahan iklim dan pemanasan global", "B. Gempa bumi", "C. Gerhana matahari", "D. Pasang surut air laut"],
    answer: 0,
    explanation: "Studi tentang efek rumah kaca ekstrem di Venus membantu ilmuwan memahami mekanisme pemanasan global dan perubahan iklim di Bumi."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Venus",
    question: "6. Awan di atmosfer Venus sebagian besar tersusun dari?",
    options: ["A. Tetesan asam sulfat", "B. Uap air murni", "C. Kristal es", "D. Debu vulkanik"],
    answer: 0,
    explanation: "Awan tebal di atmosfer Venus sebagian besar tersusun dari tetesan asam sulfat, menjadikan atmosfernya sangat korosif."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "7. Rotasi Bumi pada porosnya menyebabkan terjadinya fenomena?",
    options: ["A. Pergantian musim", "B. Siang dan malam", "C. Gerhana bulan", "D. Pasang surut air laut"],
    answer: 1,
    explanation: "Rotasi Bumi pada porosnya (berputar sekali dalam 24 jam) menyebabkan terjadinya siklus siang dan malam."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Bumi",
    question: "8. Pergerakan lempeng-lempeng kerak Bumi yang menyebabkan gempa dan gunung berapi disebut?",
    options: ["A. Tektonika lempeng", "B. Efek rumah kaca", "C. Presesi", "D. Aberasi cahaya"],
    answer: 0,
    explanation: "Tektonika lempeng adalah teori yang menjelaskan pergerakan lempeng-lempeng kerak Bumi yang menyebabkan gempa, gunung berapi, dan pembentukan pegunungan."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "9. Bukti aliran air purba di Mars ditemukan dalam bentuk?",
    options: ["A. Pola aliran seperti sungai kering dan delta", "B. Lautan yang masih ada saat ini", "C. Salju yang turun setiap hari", "D. Awan hujan tebal"],
    answer: 0,
    explanation: "Pola aliran seperti bekas sungai kering dan delta di permukaan Mars menjadi bukti kuat adanya air cair yang mengalir di masa lalu."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Mars",
    question: "10. Atmosfer Mars sangat tipis dan didominasi oleh gas?",
    options: ["A. Karbon Dioksida (CO2)", "B. Oksigen", "C. Nitrogen", "D. Hidrogen"],
    answer: 0,
    explanation: "Atmosfer Mars yang tipis didominasi oleh gas karbon dioksida (sekitar 95%), jauh berbeda dengan komposisi atmosfer Bumi."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "11. Jupiter memiliki sistem cincin yang sangat tipis dan redup, berbeda dengan cincin Saturnus. Apa penyusun utamanya?",
    options: ["A. Debu halus", "B. Es tebal", "C. Batuan besar", "D. Logam cair"],
    answer: 0,
    explanation: "Cincin Jupiter tersusun dari partikel debu halus, sangat berbeda dengan cincin Saturnus yang lebih tebal dan tersusun dari es serta batuan."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Jupiter",
    question: "12. Satelit Io yang mengorbit Jupiter dikenal sebagai objek dengan aktivitas apa yang paling intens di Tata Surya?",
    options: ["A. Aktivitas vulkanik", "B. Aktivitas seismik", "C. Aktivitas magnetik", "D. Aktivitas atmosfer"],
    answer: 0,
    explanation: "Io, salah satu satelit Galilean Jupiter, memiliki aktivitas vulkanik paling intens di Tata Surya akibat gaya pasang surut dari Jupiter."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "13. Cincin Saturnus memiliki ketebalan yang sangat tipis dibandingkan lebarnya, yaitu sekitar?",
    options: ["A. Puluhan meter hingga 1 km", "B. Ribuan kilometer", "C. Sama tebal dengan lebarnya", "D. Tidak memiliki ketebalan"],
    answer: 0,
    explanation: "Meskipun lebarnya mencapai ratusan ribu kilometer, cincin Saturnus hanya memiliki ketebalan puluhan meter hingga sekitar 1 kilometer saja."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Saturnus",
    question: "14. Fenomena badai berbentuk segi enam (heksagonal) yang unik ditemukan di bagian mana pada Saturnus?",
    options: ["A. Kutub utara", "B. Ekuator", "C. Cincin utama", "D. Kutub selatan"],
    answer: 0,
    explanation: "Badai berbentuk heksagonal yang unik dan stabil ditemukan di kutub utara Saturnus, fenomena atmosfer yang jarang ditemukan di planet lain."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "15. Kemiringan sumbu rotasi Uranus yang ekstrem diduga disebabkan oleh?",
    options: ["A. Tumbukan besar di masa lalu", "B. Gravitasi Matahari yang kuat", "C. Rotasi yang terlalu lambat", "D. Tidak memiliki penyebab yang jelas"],
    answer: 0,
    explanation: "Kemiringan sumbu rotasi Uranus yang ekstrem (sekitar 98 derajat) diduga disebabkan oleh tumbukan besar dengan objek seukuran planet pada masa awal pembentukan Tata Surya."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Uranus",
    question: "16. Uranus memiliki berapa satelit alami yang telah dikonfirmasi?",
    options: ["A. Sekitar 27", "B. Sekitar 5", "C. Sekitar 79", "D. Sekitar 150"],
    answer: 0,
    explanation: "Uranus diketahui memiliki sekitar 27 satelit alami yang telah dikonfirmasi, dengan lima yang terbesar adalah Miranda, Ariel, Umbriel, Titania, dan Oberon."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "17. Neptunus memiliki berapa satelit alami yang telah dikonfirmasi?",
    options: ["A. Sekitar 14", "B. Sekitar 79", "C. Sekitar 150", "D. Hanya 1"],
    answer: 0,
    explanation: "Neptunus diketahui memiliki sekitar 14 satelit alami yang telah dikonfirmasi, dengan Triton sebagai yang terbesar."
  },
  {
    kategori: "Matahari & Planet Utama",
    objek: "Neptunus",
    question: "18. Neptunus adalah planet pertama yang ditemukan melalui apa, sebelum diamati langsung?",
    options: ["A. Prediksi/perhitungan matematis", "B. Eksperimen laboratorium", "C. Simulasi komputer modern", "D. Data satelit"],
    answer: 0,
    explanation: "Neptunus ditemukan setelah astronom memprediksi keberadaannya secara matematis berdasarkan gangguan gravitasi pada orbit Uranus, sebelum akhirnya diamati langsung."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "19. Gerhana bulan terjadi ketika posisi Bumi berada di antara?",
    options: ["A. Matahari dan Bulan, sehingga bayangan Bumi menutupi Bulan", "B. Bulan dan bintang", "C. Mars dan Venus", "D. Dua bulan purnama berurutan"],
    answer: 0,
    explanation: "Gerhana bulan terjadi ketika Bumi berada tepat di antara Matahari dan Bulan, sehingga bayangan Bumi menutupi permukaan Bulan."
  },
  {
    kategori: "Satelit Alami",
    objek: "Bulan",
    question: "20. Jarak rata-rata Bumi ke Bulan adalah sekitar?",
    options: ["A. 384.000 km", "B. 150 juta km", "C. 1 juta km", "D. 50.000 km"],
    answer: 0,
    explanation: "Jarak rata-rata antara Bumi dan Bulan adalah sekitar 384.000 kilometer, meskipun jarak ini sedikit bervariasi karena orbit Bulan yang elips."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "21. Phobos diperkirakan akan mengalami apa dalam sekitar 30-50 juta tahun mendatang?",
    options: ["A. Hancur menjadi cincin di sekitar Mars atau menabrak Mars", "B. Menjauh dari Mars menjadi planet baru", "C. Berubah menjadi bulan purnama tetap", "D. Tidak mengalami perubahan apapun"],
    answer: 0,
    explanation: "Karena orbitnya yang terus mendekati Mars, Phobos diperkirakan akan hancur menjadi cincin atau menabrak Mars dalam 30-50 juta tahun mendatang."
  },
  {
    kategori: "Satelit Alami",
    objek: "Phobos",
    question: "22. Phobos dan Deimos, dua satelit Mars, diduga berasal dari?",
    options: ["A. Asteroid yang tertangkap gravitasi Mars", "B. Terbentuk bersamaan dengan Mars", "C. Pecahan dari Bumi", "D. Bagian dari cincin Saturnus"],
    answer: 0,
    explanation: "Phobos dan Deimos diduga merupakan asteroid dari sabuk asteroid yang tertangkap oleh gravitasi Mars pada masa lalu."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "23. Berapa perkiraan kedalaman lautan air di bawah lapisan es Europa?",
    options: ["A. Bisa lebih dalam dari lautan Bumi", "B. Hanya beberapa sentimeter", "C. Tidak ada lautan sama sekali", "D. Sangat dangkal, kurang dari 1 meter"],
    answer: 0,
    explanation: "Lautan di bawah es Europa diperkirakan memiliki kedalaman yang bisa melebihi kedalaman lautan di Bumi, menjadikannya kandidat kuat pencarian kehidupan."
  },
  {
    kategori: "Satelit Alami",
    objek: "Europa",
    question: "24. Europa termasuk salah satu dari empat satelit terbesar Jupiter yang disebut satelit?",
    options: ["A. Galilean", "B. Trojan", "C. Kuiper", "D. Oort"],
    answer: 0,
    explanation: "Europa adalah salah satu dari empat satelit Galilean Jupiter (bersama Io, Ganymede, dan Callisto), dinamai sesuai penemunya, Galileo Galilei."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "25. Titan berukuran lebih besar dari planet apa di Tata Surya?",
    options: ["A. Merkurius", "B. Mars", "C. Bumi", "D. Venus"],
    answer: 0,
    explanation: "Titan, satelit terbesar Saturnus, memiliki ukuran yang lebih besar dibandingkan planet Merkurius."
  },
  {
    kategori: "Satelit Alami",
    objek: "Titan",
    question: "26. Warna oranye kabut di atmosfer Titan disebabkan oleh senyawa kimia apa?",
    options: ["A. Hidrokarbon kompleks (tholin)", "B. Oksida besi", "C. Kristal es murni", "D. Sulfur cair"],
    answer: 0,
    explanation: "Kabut oranye khas di atmosfer Titan disebabkan oleh senyawa hidrokarbon kompleks yang disebut tholin, hasil reaksi fotokimia gas metana dan nitrogen."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "27. Diameter Enceladus yang kecil membuatnya mengejutkan ilmuwan karena tetap memiliki?",
    options: ["A. Aktivitas geologis aktif (geyser)", "B. Atmosfer setebal Bumi", "C. Cincin besar", "D. Suhu permukaan yang panas"],
    answer: 0,
    explanation: "Meskipun berukuran kecil, Enceladus tetap memiliki aktivitas geologis aktif berupa semburan geyser, hal yang mengejutkan bagi ilmuwan mengingat ukurannya."
  },
  {
    kategori: "Satelit Alami",
    objek: "Enceladus",
    question: "28. Material yang disemburkan geyser Enceladus turut berkontribusi membentuk cincin Saturnus yang mana?",
    options: ["A. Cincin E", "B. Cincin A", "C. Cincin B", "D. Cincin F"],
    answer: 0,
    explanation: "Partikel es dari geyser Enceladus turut membentuk dan memasok material bagi Cincin E, salah satu cincin terluar Saturnus."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "29. Oberon merupakan satelit terbesar keberapa dari planet Uranus?",
    options: ["A. Kedua terbesar", "B. Terbesar pertama", "C. Terkecil", "D. Ketiga terbesar"],
    answer: 0,
    explanation: "Oberon adalah satelit terbesar kedua dari Uranus, setelah Titania."
  },
  {
    kategori: "Satelit Alami",
    objek: "Oberon",
    question: "30. Permukaan Oberon menunjukkan adanya fitur gunung yang menjulang tinggi, salah satu diduga akibat?",
    options: ["A. Aktivitas tektonik purba", "B. Aktivitas vulkanik aktif saat ini", "C. Tumpukan salju", "D. Erosi angin"],
    answer: 0,
    explanation: "Fitur pegunungan tinggi di permukaan Oberon diduga terbentuk akibat aktivitas tektonik pada masa lalu satelit tersebut."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "31. Triton mengorbit Neptunus dengan arah yang berlawanan (retrograde) dibandingkan rotasi planetnya. Apa dampak jangka panjangnya?",
    options: ["A. Triton perlahan mendekat dan suatu saat bisa hancur/menabrak Neptunus", "B. Triton akan menjauh selamanya", "C. Tidak ada dampak jangka panjang", "D. Triton akan berubah menjadi planet baru"],
    answer: 0,
    explanation: "Orbit retrograde Triton menyebabkan gaya pasang surut yang perlahan menariknya mendekat ke Neptunus, sehingga di masa depan Triton berpotensi hancur atau menabrak Neptunus."
  },
  {
    kategori: "Satelit Alami",
    objek: "Triton",
    question: "32. Triton memiliki permukaan yang sangat reflektif akibat lapisan?",
    options: ["A. Es nitrogen beku", "B. Debu vulkanik hitam", "C. Pasir merah", "D. Logam mengkilap"],
    answer: 0,
    explanation: "Permukaan Triton yang sangat reflektif (albedo tinggi) disebabkan oleh lapisan es nitrogen beku yang menutupinya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "33. Ceres memiliki bentuk yang hampir bulat sempurna, hal ini menjadi salah satu syarat utama klasifikasi sebagai?",
    options: ["A. Planet kerdil", "B. Asteroid biasa", "C. Komet", "D. Bintang"],
    answer: 0,
    explanation: "Bentuk yang hampir bulat sempurna (akibat kesetimbangan hidrostatik) adalah salah satu syarat utama IAU untuk mengklasifikasikan objek sebagai planet kerdil."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Ceres",
    question: "34. Ceres diduga menyimpan lebih banyak air (dalam bentuk es) dibandingkan air tawar di?",
    options: ["A. Seluruh permukaan Bumi", "B. Satu danau kecil", "C. Tidak menyimpan air sama sekali", "D. Satu sungai besar"],
    answer: 0,
    explanation: "Ceres diperkirakan menyimpan lebih banyak air dalam bentuk es dibandingkan total air tawar yang ada di seluruh permukaan Bumi."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "35. Pluto dan satelitnya Charon memiliki hubungan orbit yang unik karena?",
    options: ["A. Keduanya saling mengunci (tidally locked) satu sama lain", "B. Charon mengorbit sangat jauh dari Pluto", "C. Pluto tidak memiliki gravitasi terhadap Charon", "D. Charon lebih besar dari Pluto"],
    answer: 0,
    explanation: "Pluto dan Charon saling terkunci gravitasi (mutual tidal locking), sehingga keduanya selalu menunjukkan sisi yang sama satu sama lain — fenomena unik disebut sistem biner."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Pluto",
    question: "36. Atmosfer tipis Pluto sebagian besar tersusun dari gas?",
    options: ["A. Nitrogen", "B. Oksigen", "C. Karbon Dioksida", "D. Hidrogen"],
    answer: 0,
    explanation: "Atmosfer tipis Pluto sebagian besar tersusun dari gas nitrogen, dengan sedikit metana dan karbon monoksida."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "37. Haumea memiliki dua satelit alami. Apa nama keduanya?",
    options: ["A. Hi'iaka dan Namaka", "B. Charon dan Nix", "C. Titan dan Triton", "D. Phobos dan Deimos"],
    answer: 0,
    explanation: "Haumea diketahui memiliki dua satelit alami yang dinamai Hi'iaka dan Namaka, sesuai mitologi Hawaii seperti nama Haumea itu sendiri."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Haumea",
    question: "38. Sebagai objek Sabuk Kuiper, Haumea diperkirakan tersusun dari material apa?",
    options: ["A. Batuan dan es", "B. Logam murni", "C. Gas hidrogen", "D. Plasma panas"],
    answer: 0,
    explanation: "Haumea diperkirakan tersusun dari campuran batuan dan es, mirip dengan objek-objek lain di Sabuk Kuiper."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "39. Makemake merupakan objek terbesar kedua di Sabuk Kuiper setelah?",
    options: ["A. Pluto", "B. Ceres", "C. Eris", "D. Haumea"],
    answer: 0,
    explanation: "Makemake merupakan salah satu objek terbesar di Sabuk Kuiper, dengan Pluto sebagai yang terbesar di wilayah tersebut."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Makemake",
    question: "40. Warna kemerahan pada permukaan Makemake diduga disebabkan oleh senyawa?",
    options: ["A. Tholin (hasil reaksi kimia organik)", "B. Oksida besi", "C. Sulfur murni", "D. Kristal garam"],
    answer: 0,
    explanation: "Warna kemerahan pada permukaan Makemake diduga disebabkan oleh senyawa tholin, hasil reaksi fotokimia pada material organik akibat radiasi matahari."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "41. Eris berada di wilayah Tata Surya yang disebut?",
    options: ["A. Piringan Tersebar (Scattered Disc)", "B. Sabuk Asteroid", "C. Cincin Saturnus", "D. Zona Goldilocks"],
    answer: 0,
    explanation: "Eris terletak jauh di luar Sabuk Kuiper, di wilayah yang disebut Piringan Tersebar (Scattered Disc), salah satu bagian terluar Tata Surya."
  },
  {
    kategori: "Planet Kerdil",
    objek: "Eris",
    question: "42. Eris memiliki satu satelit alami bernama?",
    options: ["A. Dysnomia", "B. Charon", "C. Namaka", "D. Titan"],
    answer: 0,
    explanation: "Eris memiliki satu satelit alami yang dinamai Dysnomia, diambil dari mitologi Yunani sebagai putri dari dewi Eris."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "43. Total massa seluruh asteroid di sabuk asteroid diperkirakan kurang dari massa?",
    options: ["A. Bulan", "B. Bumi", "C. Matahari", "D. Jupiter"],
    answer: 0,
    explanation: "Total massa seluruh objek di sabuk asteroid diperkirakan jauh lebih kecil dibandingkan massa Bulan, meskipun jumlah objeknya sangat banyak."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Asteroid",
    question: "44. Studi tentang asteroid penting untuk mitigasi risiko apa terhadap Bumi?",
    options: ["A. Potensi tumbukan asteroid dengan Bumi", "B. Perubahan iklim global", "C. Gempa bumi", "D. Letusan gunung berapi"],
    answer: 0,
    explanation: "Studi tentang asteroid, khususnya kelompok Near-Earth Asteroid, penting untuk memitigasi risiko potensi tumbukan asteroid dengan Bumi di masa depan."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "45. Komet yang berhasil didarati wahana antariksa Rosetta/Philae pada 2014 bernama?",
    options: ["A. 67P/Churyumov-Gerasimenko", "B. Halley", "C. Hale-Bopp", "D. Hyakutake"],
    answer: 0,
    explanation: "Wahana Rosetta beserta pendaratnya Philae berhasil mendarat di komet 67P/Churyumov-Gerasimenko pada tahun 2014, sebuah pencapaian bersejarah dalam eksplorasi antariksa."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Komet",
    question: "46. Inti komet umumnya berukuran relatif kecil, berkisar antara?",
    options: ["A. Beberapa ratus meter hingga puluhan kilometer", "B. Ribuan kilometer", "C. Sebesar planet", "D. Sebesar Bulan"],
    answer: 0,
    explanation: "Inti komet umumnya berukuran relatif kecil, berkisar dari beberapa ratus meter hingga puluhan kilometer saja."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "47. 55 Cancri e mengalami tidal locking terhadap bintangnya, artinya?",
    options: ["A. Satu sisi selalu menghadap bintang, sisi lain selalu gelap", "B. Planet ini tidak berotasi maupun berevolusi", "C. Planet ini memiliki dua bintang induk", "D. Planet ini selalu berpindah orbit" ],
    answer: 0,
    explanation: "Karena tidal locking, satu sisi 55 Cancri e selalu menghadap bintang induknya (sangat panas), sementara sisi lainnya selalu gelap dan jauh lebih dingin."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "55 Cancri E",
    question: "48. Penemuan planet seperti 55 Cancri e membantu ilmuwan mempelajari lebih lanjut tentang?",
    options: ["A. Keberagaman jenis planet di luar Tata Surya", "B. Komposisi asteroid di sabuk asteroid", "C. Struktur internal Matahari", "D. Pergerakan lempeng tektonik Bumi"],
    answer: 0,
    explanation: "Penemuan eksoplanet unik seperti 55 Cancri e memberi wawasan penting tentang keberagaman jenis dan komposisi planet yang ada di luar Tata Surya kita."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "49. Bimasakti termasuk bagian dari kelompok galaksi yang lebih besar bernama?",
    options: ["A. Grup Lokal (Local Group)", "B. Gugus Virgo", "C. Gugus Coma", "D. Great Attractor"],
    answer: 0,
    explanation: "Bimasakti adalah salah satu anggota utama dari Grup Lokal (Local Group), kumpulan puluhan galaksi termasuk Andromeda dan Triangulum."
  },
  {
    kategori: "Benda Langit Lainnya",
    objek: "Bimasakti",
    question: "50. Posisi Tata Surya berada di bagian mana dari galaksi Bimasakti?",
    options: ["A. Di salah satu lengan spiral, jauh dari pusat galaksi", "B. Tepat di pusat galaksi", "C. Di luar galaksi", "D. Di inti lubang hitam galaksi"],
    answer: 0,
    explanation: "Tata Surya berada di lengan spiral Orion, terletak cukup jauh dari pusat galaksi Bimasakti, sekitar 26.000-27.000 tahun cahaya."
  }
];

module.exports = soalPaketE;
