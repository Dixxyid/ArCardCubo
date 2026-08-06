let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let activeQuestions = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCount = document.getElementById('question-count');
const scoreLive = document.getElementById('score-live');
const progressFill = document.getElementById('progress-fill');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const btnNext = document.getElementById('btn-next');

function initQuiz() {
    // Membaca limit soal dari tag <body data-limit="...">
    const limit = parseInt(document.body.dataset.limit) || 10;
    
    // Ambil sejumlah soal sesuai limit yang ditentukan
    activeQuestions = ALL_QUESTIONS.slice(0, limit);
    
    // Tampilkan total soal di UI header jika ada elemennya
    const totalElem = document.getElementById('total-limit');
    if (totalElem) totalElem.innerText = limit;

    // SEMBUNYIKAN tombol Dashboard saat awal kuis dimuat
    const dashWrapper = document.getElementById('dashboard-wrapper');
    if (dashWrapper) {
        dashWrapper.style.display = 'none';
    }

    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQuestion];
    questionText.innerText = q.question;
    questionCount.innerText = `Soal ${currentQuestion + 1} dari ${activeQuestions.length}`;
    progressFill.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    explanationBox.style.display = 'none';
    btnNext.style.display = 'none';
    selectedOption = null;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span><i class="fa-regular fa-circle"></i>`;
        btn.onclick = () => selectOption(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btnElement) {
    if (selectedOption !== null) return;
    selectedOption = index;

    const q = activeQuestions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === q.answer) {
            b.classList.add('correct');
            b.querySelector('i').className = 'fa-solid fa-circle-check';
        }
    });

    if (index === q.answer) {
        // Kalkulasi skor otomatis agar total poin selalu bernilai 100
        const pointsPerQuestion = 100 / activeQuestions.length;
        score += pointsPerQuestion;
        scoreLive.innerText = `Skor: ${Math.round(score)}`;
    } else {
        btnElement.classList.add('incorrect');
        btnElement.querySelector('i').className = 'fa-solid fa-circle-xmark';
    }

    explanationText.innerText = q.explanation;
    explanationBox.style.display = 'block';

    if (currentQuestion < activeQuestions.length - 1) {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = 'Selanjutnya <i class="fa-solid fa-arrow-right"></i>';
    } else {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = 'Lihat Hasil <i class="fa-solid fa-trophy"></i>';
    }
}

function nextQuestion() {
    if (currentQuestion < activeQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-card').style.display = 'none';
    btnNext.style.display = 'none';

    const resultCard = document.getElementById('result-card');
    resultCard.style.display = 'block';

    // MUNCULKAN tombol Dashboard di bawah card kuis saat hasil selesai ditampilkan
    const dashWrapper = document.getElementById('dashboard-wrapper');
    if (dashWrapper) {
        dashWrapper.style.display = 'flex';
    }

    const finalScoreElem = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    const roundedScore = Math.round(score);

    finalScoreElem.innerText = `${roundedScore} / 100`;

    if (roundedScore === 100) {
        resultMessage.innerText = "Sempurna! Kamu telah menguasai materi ini dengan sangat baik!";
    } else if (roundedScore >= 60) {
        resultMessage.innerText = "Bagus sekali! Pemahamanmu sudah cukup mantap.";
    } else {
        resultMessage.innerText = "Jangan berkecil hati! Pelajari kembali materi spesifikasi dan coba lagi.";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreLive.innerText = 'Skor: 0';
    
    // Sembunyikan kartu hasil & tampilkan kembali kartu kuis
    document.getElementById('result-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';

    // SEMBUNYIKAN KEMBALI tombol Dashboard saat kuis diulang
    const dashWrapper = document.getElementById('dashboard-wrapper');
    if (dashWrapper) {
        dashWrapper.style.display = 'none';
    }

    loadQuestion();
}

// Jalankan kuis saat DOM siap
document.addEventListener("DOMContentLoaded", initQuiz);
