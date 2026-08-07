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

// Fungsi untuk mengumpulkan seluruh soal dari PAKET_1 hingga PAKET_5
function getAllQuestions() {
    let combined = [];
    if (typeof PAKET_1 !== "undefined") combined.push(...PAKET_1);
    if (typeof PAKET_2 !== "undefined") combined.push(...PAKET_2);
    if (typeof PAKET_3 !== "undefined") combined.push(...PAKET_3);
    if (typeof PAKET_4 !== "undefined") combined.push(...PAKET_4);
    if (typeof PAKET_5 !== "undefined") combined.push(...PAKET_5);
    return combined;
}

// Fungsi Algoritma Acak (Fisher-Yates Shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initQuiz() {
    const limit = parseInt(document.body.dataset.limit) || 10;
    
    // 1. Ambil seluruh gabungan soal paket
    const allQuestions = getAllQuestions();
    
    // 2. Acak seluruh soal
    const shuffledQuestions = shuffleArray(allQuestions);
    
    // 3. Ambil 10 soal teratas hasil acakan
    activeQuestions = shuffledQuestions.slice(0, limit);
    
    const totalElem = document.getElementById('total-limit');
    if (totalElem) totalElem.innerText = limit;

    const dashWrapper = document.getElementById('dashboard-wrapper');
    if (dashWrapper) {
        dashWrapper.style.display = 'none';
    }

    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQuestion];
    
    // Bersihkan nomor keras bawaan di file (seperti "1. ", "2. ")
    const cleanQuestionText = q.question.replace(/^\d+\.\s*/, '');
    questionText.innerText = `${currentQuestion + 1}. ${cleanQuestionText}`;

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
    
    document.getElementById('result-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';

    const dashWrapper = document.getElementById('dashboard-wrapper');
    if (dashWrapper) {
        dashWrapper.style.display = 'none';
    }

    // Mengacak ulang soal dan memulai dari nomor 1 kembali
    initQuiz();
}

document.addEventListener("DOMContentLoaded", initQuiz);
