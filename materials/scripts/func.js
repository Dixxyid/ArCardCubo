AFRAME.registerComponent('interactive-logic', {
    init: function () {
        const el = this.el;
        const status = document.querySelector('#Status-Notif');
        this.isVisible = false;

        // 1. Muncul saat marker terdeteksi
        this.el.parentNode.addEventListener("targetFound", () => {
            this.isVisible = true;
            const modelName = el.id === 'earthModel' ? 'Bumi' : 'Matahari';
            status.innerHTML = `✅ ${modelName} Terdeteksi`;
            status.style.borderColor = "#28a745";
            
            el.setAttribute('animation__scale', {
                property: 'scale',
                from: '0 0 0',
                to: '0.5 0.5 0.5',
                dur: 1000,
                easing: 'easeOutBack'
            });
        });

        this.el.parentNode.addEventListener("targetLost", () => {
            this.isVisible = false;
            status.innerHTML = "🔍 Scan Markers ...";
            status.style.borderColor = "#20aaee";
        });

        // 2. Logika Sentuhan (Gesture)
        this.el.sceneEl.addEventListener('touchstart', (e) => {
            if (!this.isVisible) return;
            this.touchStart = e.touches;
            if (el.components.animation__autorotate) {
                el.components.animation__autorotate.pause();
            }
        });

        this.el.sceneEl.addEventListener('touchmove', (e) => {
            if (!this.isVisible || !this.touchStart) return;

            if (e.touches.length === 1) {
                const deltaX = e.touches[0].pageX - this.touchStart[0].pageX;
                const deltaY = e.touches[0].pageY - this.touchStart[0].pageY;
                el.object3D.rotation.y += deltaX * 0.01;
                el.object3D.rotation.x += deltaY * 0.01;
                this.touchStart = e.touches;
            } else if (e.touches.length === 2) {
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                const dist = Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
                if (this.lastDist) {
                    const ratio = dist / this.lastDist;
                    let newScale = el.object3D.scale.x * ratio;
                    newScale = Math.min(Math.max(newScale, 0.1), 2.5);
                    el.object3D.scale.set(newScale, newScale, newScale);
                }
                this.lastDist = dist;
            }
        });

        this.el.sceneEl.addEventListener('touchend', () => {
            this.lastDist = null;
            if (!this.isVisible) return;

            const currentRot = el.getAttribute('rotation');
            el.setAttribute('animation__autorotate', {
                from: `${currentRot.x} ${currentRot.y} ${currentRot.z}`,
                to: `${currentRot.x} ${currentRot.y + 360} ${currentRot.z}`
            });
            if (el.components.animation__autorotate) {
                el.components.animation__autorotate.play();
            }
        });
    }
});
