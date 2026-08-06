import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Konfigurasi Resmi Proyek arcubo-5ed55
const firebaseConfig = {
    apiKey: "AIzaSyCY_j7-nitUEtMI4-Xk9vPj4UmSWvh1TVM",
    authDomain: "arcubo-5ed55.firebaseapp.com",
    projectId: "arcubo-5ed55",
    storageBucket: "arcubo-5ed55.firebasestorage.app",
    messagingSenderId: "788282131772",
    appId: "1:788282131772:web:bc13320122f8bb62544a39"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi Manajemen Modal UI
function openModal(id) { 
    document.getElementById(id).classList.remove('hidden'); 
}

function closeModal(id) { 
    document.getElementById(id).classList.add('hidden'); 
}

// Validasi Pola Angka 4-6 Digit
function isValidCode(code) {
    const regex = /^[0-9]{4,6}$/;
    return regex.test(code);
}

// Penanganan Pembuatan Room (Master)
async function handleCreate() {
    const name = document.getElementById('masterName').value.trim();
    const roomId = document.getElementById('createRoomId').value.trim();
    const pw = document.getElementById('createPw').value.trim();

    if(!name || !roomId || !pw) return alert("Harap isi semua kolom!");
    if(!isValidCode(roomId) || !isValidCode(pw)) {
        return alert("Room ID dan Password harus berupa angka (4 - 6 digit)!");
    }

    try {
        const roomRef = doc(db, "rooms", roomId);
        const roomSnap = await getDoc(roomRef);

        if (roomSnap.exists()) {
            const existingRoom = roomSnap.data();
            if (existingRoom.password === pw) {
                alert("Masuk kembali ke room yang sudah ada.");
                lanjutKeWaitingRoom('master', roomId, name);
            } else {
                alert("Room ID sudah digunakan dengan password berbeda!");
            }
        } else {
            await setDoc(roomRef, {
                room_id: roomId,
                password: pw,
                master_name: name,
                created_at: serverTimestamp()
            });
            lanjutKeWaitingRoom('master', roomId, name);
        }
    } catch (err) {
        alert("Gagal memproses pembuatan room: " + err.message);
    }
}

// Penanganan Partisipasi (Join User)
async function handleJoin() {
    const name = document.getElementById('partName').value.trim();
    const roomId = document.getElementById('joinRoomId').value.trim();
    const pw = document.getElementById('joinPw').value.trim();

    if(!name || !roomId || !pw) return alert("Harap isi semua kolom!");
    if(!isValidCode(roomId) || !isValidCode(pw)) {
        return alert("Room ID dan Password harus berupa angka (4 - 6 digit)!");
    }

    try {
        const roomRef = doc(db, "rooms", roomId);
        const roomSnap = await getDoc(roomRef);

        if (!roomSnap.exists() || roomSnap.data().password !== pw) {
            return alert("AKSES DITOLAK: Room ID atau Password salah!");
        }

        const partDocId = `${roomId}_${name}`;
        const partRef = doc(db, "participants", partDocId);
        const partSnap = await getDoc(partRef);

        if (partSnap.exists()) {
            console.log("Nama sudah terdaftar di room ini, masuk sebagai user lama...");
            lanjutKeWaitingRoom('participant', roomId, name);
        } else {
            await setDoc(partRef, {
                room_id: roomId,
                student_name: name,
                joined_at: serverTimestamp()
            });
            lanjutKeWaitingRoom('participant', roomId, name);
        }
    } catch (err) {
        alert("Gagal memproses login: " + err.message);
    }
}

function lanjutKeWaitingRoom(role, roomId, username) {
    localStorage.setItem('role', role);
    localStorage.setItem('room_id', roomId);
    localStorage.setItem('username', username);
    window.location.href = 'challengestart.html';
}

// Ekspos fungsi ke scope global window agar event onclick HTML dapat berjalan
window.openModal = openModal;
window.closeModal = closeModal;
window.handleCreate = handleCreate;
window.handleJoin = handleJoin;
