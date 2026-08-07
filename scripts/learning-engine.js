document.addEventListener("DOMContentLoaded", () => {

    const solarData = [
        { name: "SUN", icon: "☀️", color: "#f59e0b", desc: "Bintang raksasa pusat tata surya yang menyinari seluruh kehidupan.", url: "page/sun.html" },
        { name: "MERCURY", icon: "🔘", color: "#94a3b8", desc: "Planet terkecil dan terdekat dengan Matahari. Permukaannya penuh kawah.", url: "page/mercury.html" },
        { name: "VENUS", icon: "🟠", color: "#eab308", desc: "Planet terpanas dengan atmosfer sangat tebal yang memerangkap panas.", url: "page/venus.html" },
        { name: "EARTH", icon: "🌍", color: "#3b82f6", desc: "Satu-satunya rumah yang kita kenal dengan sebagai air cair dan kehidupan melimpah.", url: "page/bumi.html" },
        { name: "MOON", icon: "🌙", color: "#cbd5e1", desc: "Satelit alami Bumi yang memengaruhi pasang surut air laut.", url: "page/moon.html" },
        { name: "MARS", icon: "🔴", color: "#ef4444", desc: "Dikenal sebagai planet merah karena oksida besi yang menutupi permukaannya.", url: "page/mars.html" },
        { name: "PHOBOS", icon: "🥔", color: "#78716c", desc: "Satelit alami terbesar Mars berbentuk tidak beraturan.", url: "page/phobos.html" },
        { name: "ASTEROID", icon: "☄️", color: "#64748b", desc: "Sisa batuan purba dari formasi awal tata surya.", url: "page/asteroid.html" },
        { name: "CERES", icon: "🪨", color: "#78716c", desc: "Planet kerdil terbesar sekaligus objek paling masif di Sabuk Asteroid.", url: "page/ceres.html" },
        { name: "JUPITER", icon: "🪐", color: "#b45309", desc: "Raksasa gas terbesar yang memiliki lebih dari 75 bulan yang mengorbit.", url: "page/jupiter.html" },
        { name: "EUROPA", icon: "🧊", color: "#a5f3fc", desc: "Satelit Galilea Jupiter berselimut es tebal menyembunyikan samudra.", url: "page/europa.html" },
        { name: "SATURN", icon: "🪐", color: "#f59e0b", desc: "Planet cantik yang dikelilingi oleh sistem cincin es dan debu megah.", url: "page/saturnus.html" },
        { name: "TITAN", icon: "🪐", color: "#8c9c64", desc: "Satelit terbesar Saturnus yang memiliki atmosfer padat.", url: "page/titan.html" },
        { name: "ENCELADUS", icon: "❄️", color: "#00d2d3", desc: "Satelit kecil Saturnus aktif dengan geyser es menyembur dari samudra.", url: "page/enceladus.html" },
        { name: "URANUS", icon: "💠", color: "#22d3ee", desc: "Raksasa es dingin yang unik karena berotasi miring di sisi sampingnya.", url: "page/uranus.html" },
        { name: "OBERON", icon: "🌑", color: "#475569", desc: "Satelit alami terluar dan terbesar kedua Uranus dipenuhi kawah purba.", url: "page/oberon.html" },
        { name: "NEPTUNE", icon: "🔵", color: "#2563eb", desc: "Planet paling berangin dengan hembusan melampaui kecepatan suara.", url: "page/neptune.html" },
        { name: "TRITON", icon: "🌸", color: "#93c5fd", desc: "Satelit terbesar Neptunus berkerak es nitrogen yang mengorbit terbalik.", url: "page/triton.html" },
        { name: "PLUTO", icon: "🫀", color: "#f59e0b", desc: "Planet kerdil es di Sabuk Kuiper dengan dataran es berbentuk jantung.", url: "page/pluto.html" },
        { name: "HAUMEA", icon: "🥚", color: "#e2e8f0", desc: "Planet kerdil berbentuk elips lonjong akibat rotasi hiper-cepat.", url: "page/haumea.html" },
        { name: "MAKEMAKE", icon: "🟤", color: "#ea580c", desc: "Benda langit trans-Neptunus tertua yang tertutup es metana beku.", url: "page/makemake.html" },
        { name: "ERIS", icon: "⚪", color: "#cbd5e1", desc: "Planet kerdil sangat masif di piringan tersebar luar.", url: "page/eris.html" },
        { name: "COMET", icon: "☄️", color: "#94a3b8", desc: "Benda langit es kecil yang memancarkan ekor gas benderang.", url: "page/comet.html" },
        { name: "55 CANCRI E", icon: "🔥", color: "#ff5e00", desc: "Eksoplanet super-Bumi ekstrem bersuhu tinggi dengan lautan magma.", url: "page/55cancrie.html" },
        { name: "BIMASAKTI", icon: "🌌", color: "#00a8ff", desc: "Sistem galaksi spiral berpagar kosmik tempat bernaungnya tata surya.", url: "page/bimasakti.html" }
    ];

    // 1. Render slide ke DOM
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (swiperWrapper) {
        swiperWrapper.innerHTML = "";
        solarData.forEach(slide => {
            const slideHTML = `
                <div class="swiper-slide" style="--c: ${slide.color}">
                    <span class="icon">${slide.icon}</span>
                    <div class="info-section">
                        <span class="label">${slide.name}</span>
                        <p class="description">${slide.desc}</p>
                    </div>
                    <a href="${slide.url}" class="btn-ar">View AR</a>
                </div>
            `;
            swiperWrapper.insertAdjacentHTML("beforeend", slideHTML);
        });
    }

    // 2. Registrasi interaksi pertama pengguna untuk izin getar (Vibration API)
    let userHasInteracted = false;
    const registerInteraction = () => {
        userHasInteracted = true;
        window.removeEventListener("pointerdown", registerInteraction);
        window.removeEventListener("touchstart", registerInteraction);
    };
    window.addEventListener("pointerdown", registerInteraction);
    window.addEventListener("touchstart", registerInteraction);

    // 3. Inisialisasi Swiper
    if (document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            speed: 300,
            loop: true,
            observer: true,
            observeParents: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0, // Mengubah dari nilai negatif (-12) ke 0 agar kartu tidak saling menimpa
                depth: 80,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            on: {
                slideChange: () => {
                    if (userHasInteracted && "vibrate" in navigator) {
                        try {
                            navigator.vibrate(8);
                        } catch (e) {
                            // Mencegah crash jika fitur getar diblokir browser
                        }
                    }
                }
            }
        });
    }

    // 4. Render Bintang Background (Dengan pengecekan elemen canvas)
    const canvas = document.getElementById("starCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let isTabActive = true;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const stars = Array.from({ length: 45 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.7 + 0.3,
            speed: Math.random() * 0.01 + 0.005
        }));

        function drawStars() {
            if (!isTabActive) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.alpha += star.speed;
                if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;
                
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(drawStars);
        }

        document.addEventListener("visibilitychange", () => {
            isTabActive = !document.hidden;
            if (isTabActive) drawStars();
        });

        drawStars();
    }
});
