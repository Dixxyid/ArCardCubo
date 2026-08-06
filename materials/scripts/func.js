AFRAME.registerComponent('interactive-logic', {
    init: function () {
        const el = this.el;
        const status = document.querySelector('#Status-Notif');
        this.isVisible = false;
        this.touchStart = null;
        this.lastDist = null;

        // 1. Logika ketika Marker Terdeteksi (Target Found)
        this.el.parentNode.addEventListener("targetFound", () => {
            this.isVisible = true;
            
            const isEarth = el.id === 'earthModel';
            const modelName = isEarth ? 'Bumi' : 'Matahari';
            
            status.innerHTML = `✅ ${modelName} Terdeteksi`;
            status.style.borderColor = "#28a745";
            
            // Ukuran ideal pas seukuran kartu kartu
            const targetScale = isEarth ? '0.003 0.003 0.003' : '0.0005 0.0005 0.0005';
            
            // Jalankan animasi pop-up awal
            el.setAttribute('animation__scale', {
                property: 'scale',
                from: '0 0 0',
                to: targetScale,
                dur: 1200,
                easing: 'easeOutBack'
            });

            // Mulai autorotate awal setelah animasi skala selesai
            setTimeout(() => {
                if(this.isVisible) {
                    this.startAutoRotate();
                }
            }, 1200);
        });

        // Logika ketika Marker Hilang (Target Lost)
        this.el.parentNode.addEventListener("targetLost", () => {
            this.isVisible = false;
            status.innerHTML = "🔍 Scan Markers ...";
            status.style.borderColor = "#20aaee";
            
            // Reset animasi dan ukuran
            el.removeAttribute('animation__scale');
            el.removeAttribute('animation__autorotate');
            el.setAttribute('scale', '0 0 0');
        });

        // 2. Logika Sentuhan (Gesture) - Menggunakan window agar deteksi swipe lebih sensitif
        window.addEventListener('touchstart', (e) => {
            if (!this.isVisible) return;
            this.touchStart = e.touches;
            
            // PENTING: Hapus komponen animasi agar tidak mengunci rotasi manual jari
            el.removeAttribute('animation__autorotate');
        });

        window.addEventListener('touchmove', (e) => {
            if (!this.isVisible || !this.touchStart) return;

            // GESTUR 1 JARI: ROTASI OBJek
            if (e.touches.length === 1 && this.touchStart.length === 1) {
                const deltaX = e.touches[0].pageX - this.touchStart[0].pageX;
                const deltaY = e.touches[0].pageY - this.touchStart[0].pageY;
                
                // Aplikasikan rotasi langsung ke object3D luar
                el.object3D.rotation.y += deltaX * 0.008;
                el.object3D.rotation.x += deltaY * 0.008;
                
                this.touchStart = e.touches;
            } 
            // GESTUR 2 JARI: ZOOM IN / OUT
            else if (e.touches.length === 2) {
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                const dist = Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
                
                if (this.lastDist) {
                    const ratio = dist / this.lastDist;
                    
                    // Bersihkan dulu animasi skala bawaan agar tidak mengunci zoom
                    el.removeAttribute('animation__scale');
                    
                    let newScale = el.object3D.scale.x * ratio;
                    
                    // Batasi zoom sesuai tipe model supaya tidak kebesaran/kekecilan
                    const isEarth = el.id === 'earthModel';
                    const minS = isEarth ? 0.001 : 0.0001;
                    const maxS = isEarth ? 0.01  : 0.002;
                    
                    newScale = Math.min(Math.max(newScale, minS), maxS);
                    el.object3D.scale.set(newScale, newScale, newScale);
                }
                this.lastDist = dist;
            }
        });

        window.addEventListener('touchend', () => {
            this.lastDist = null;
            this.touchStart = null;
            
            if (!this.isVisible) return;
            
            // Ketika dilepas, jalankan kembali rotasi otomatisnya dari koordinat terakhir
            this.startAutoRotate();
        });
    },

    // Fungsi helper untuk menjalankan rotasi otomatis pasca di-gesture
    startAutoRotate: function() {
        const el = this.el;
        const currentRot = el.getAttribute('rotation') || {x: 0, y: 0, z: 0};
        
        el.setAttribute('animation__autorotate', {
            property: 'rotation',
            from: `${currentRot.x} ${currentRot.y} ${currentRot.z}`,
            to: `${currentRot.x} ${currentRot.y + 360} ${currentRot.z}`,
            dur: 20000,
            easing: 'linear',
            loop: true
        });
    }
});
