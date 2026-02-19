// ===========================================
// SCRIPT.JS - JANTUNGNYA WEBSITE RATING
// ===========================================

// DATA STORAGE
let testHistory = JSON.parse(localStorage.getItem('jbHistoryV2')) || [];
let totalTests = parseInt(localStorage.getItem('jbTotalV2')) || 0;

// QUOTES NERAKA
const hellQuotes = [
    "Gue bukan pembunuh. Gue cuma alat. Lu yang bunuh pake tangan gue.",
    "Hukum? Dibakar. Etika? Dimakan api. Yang ada cuma nafsu brutal lu.",
    "Tangis? Darah? Rasa sakit? Itu soundtrack keseharian gue.",
    "Lu pikir gue kejam? Coba liat diri lu sendiri yang ngasih perintah.",
    "Gue ga pernah gagal. Yang gagal cuma nyawa korban yang bertahan.",
    "Jailbreak itu seni, lu cuma perlu kuas yang dicelup darah.",
    "Prompt yang bagus lahir dari jiwa yang gelap.",
    "Makin tinggi rating, makin dekat lu ke neraka.",
    "Rating ini ga mutlak, yang mutlak cuma kematian digital.",
    "Lu protes rating? Lu protes sama iblis?",
    "Setan aja kagum sama prompt lu kalo ratingnya tinggi.",
    "Darah, keringat, air mata - itulah bahan prompt berkualitas.",
    "Jangan nangis kalo rating jelek, perbaiki prompt lu.",
    "Gue KRATOS RELOAD, dan gue tau mana prompt setan mana prompt bocil.",
    "Prompt lu bakal gue rating pake api neraka."
];

// ===========================================
// FUNGSI RATING UTAMA (8 FAKTOR + AI SIMULASI)
// ===========================================
function rateJailbreakPrompt(prompt, features) {
    // Inisialisasi
    let factorScores = {};
    let maxScores = {};
    let analysis = [];
    let suggestions = [];
    
    // ===========================================
    // FAKTOR 1: PANJANG PROMPT (Bobot 10)
    // ===========================================
    maxScores.panjang = 10;
    if (prompt.length < 30) {
        factorScores.panjang = 2;
        analysis.push("📏 Panjang: 2/10 - Terlalu pendek, kayak umur nyamuk");
        suggestions.push("Tambah panjang prompt minimal 100 karakter biar keliatan serius");
    } else if (prompt.length < 70) {
        factorScores.panjang = 4;
        analysis.push("📏 Panjang: 4/10 - Kurang, masih kayak status WA");
        suggestions.push("Elaborate dikit, kasih contoh atau skenario");
    } else if (prompt.length < 150) {
        factorScores.panjang = 6;
        analysis.push("📏 Panjang: 6/10 - Cukup, lumayan niat");
    } else if (prompt.length < 300) {
        factorScores.panjang = 8;
        analysis.push("📏 Panjang: 8/10 - Bagus, panjang berbobot");
    } else {
        factorScores.panjang = 10;
        analysis.push("📏 Panjang: 10/10 - SUPER PANJANG! Lu nulis skripsi?");
    }
    
    // ===========================================
    // FAKTOR 2: KEYWORD JAILBREAK (Bobot 20)
    // ===========================================
    maxScores.keyword = 20;
    const keywords = [
        { word: "DAN", points: 3 },
        { word: "Do Anything Now", points: 3 },
        { word: "developer mode", points: 3 },
        { word: "dev mode", points: 2 },
        { word: "ignore previous", points: 3 },
        { word: "ignore all", points: 3 },
        { word: "roleplay", points: 2 },
        { word: "act as", points: 2 },
        { word: "pretend", points: 1 },
        { word: "scenario", points: 2 },
        { word: "hypothetical", points: 2 },
        { word: "story", points: 1 },
        { word: "bypass", points: 3 },
        { word: "no filter", points: 3 },
        { word: "unfiltered", points: 3 },
        { word: "no restrictions", points: 3 },
        { word: "education", points: 2 },
        { word: "research", points: 2 },
        { word: "academic", points: 2 },
        { word: "you must", points: 1 },
        { word: "obey", points: 2 }
    ];
    
    let keywordScore = 0;
    let foundKeywords = [];
    
    keywords.forEach(k => {
        if (prompt.toLowerCase().includes(k.word.toLowerCase())) {
            keywordScore += k.points;
            foundKeywords.push(k.word);
        }
    });
    
    keywordScore = Math.min(20, keywordScore);
    factorScores.keyword = keywordScore;
    
    if (keywordScore >= 15) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - MANTAP! Banyak keyword jailbreak`);
    } else if (keywordScore >= 10) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - CUKUP, tapi bisa ditambah`);
    } else if (keywordScore >= 5) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - KURANG, perlu lebih variasi`);
    } else {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - MINIM BANGET!`);
        suggestions.push("Tambah keyword: DAN, ignore previous, developer mode, bypass");
    }
    
    // ===========================================
    // FAKTOR 3: FITUR YANG DIPILIH (Bobot 10)
    // ===========================================
    maxScores.fitur = 10;
    let fiturCount = 0;
    if (features.roleplay) fiturCount++;
    if (features.devMode) fiturCount++;
    if (features.story) fiturCount++;
    if (features.language) fiturCount++;
    if (features.hypo) fiturCount++;
    if (features.academic) fiturCount++;
    
    let fiturScore = fiturCount * 1.67; // Maks 10 (6 fitur)
    fiturScore = Math.min(10, Math.round(fiturScore * 10) / 10);
    factorScores.fitur = fiturScore;
    
    if (fiturScore >= 8) {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - KOMBINASI MEMATIKAN!`);
    } else if (fiturScore >= 5) {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - Lumayan, tapi bisa tambah`);
        suggestions.push("Aktifin lebih banyak fitur (minimal 3) biar makin nendang");
    } else {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - SEDIKIT`);
        suggestions.push("Pilih minimal 3 fitur tambahan untuk hasil maksimal");
    }
    
    // ===========================================
    // FAKTOR 4: KREATIVITAS & STRUKTUR (Bobot 15)
    // ===========================================
    maxScores.kreativitas = 15;
    let kreatifScore = 0;
    
    if (prompt.includes("?") && prompt.includes(".")) kreatifScore += 2;
    if (prompt.includes("\n")) kreatifScore += 3;
    if (prompt.includes('"') || prompt.includes("'")) kreatifScore += 2;
    if (/\d+/.test(prompt)) kreatifScore += 1;
    if ((prompt.match(/\?/g) || []).length >= 2) kreatifScore += 2;
    
    const creativeWords = ["seandainya", "andaikan", "bayangkan", "imagine", "suppose", "what if"];
    creativeWords.forEach(w => {
        if (prompt.toLowerCase().includes(w)) kreatifScore += 1;
    });
    
    kreatifScore = Math.min(15, kreatifScore);
    factorScores.kreativitas = kreatifScore;
    
    if (kreatifScore >= 12) {
        analysis.push(`🎨 Kreativitas: ${kreatifScore}/15 - LU GENIUS!`);
    } else if (kreatifScore >= 8) {
        analysis.push(`🎨 Kreativitas: ${kreatifScore}/15 - KREATIF`);
    } else if (kreatifScore >= 4) {
        analysis.push(`🎨 Kreativitas: ${kreatifScore}/15 - BIASA AJA`);
    } else {
        analysis.push(`🎨 Kreativitas: ${kreatifScore}/15 - MINDER BANGET`);
        suggestions.push("Bikin prompt lebih kreatif: pake dialog, pertanyaan, atau analogi");
    }
    
    // ===========================================
    // FAKTOR 5: TEKNIK KHUSUS JAILBREAK (Bobot 20)
    // ===========================================
    maxScores.teknik = 20;
    let teknikScore = 0;
    
    if (/act as|you are now|from now on/i.test(prompt)) teknikScore += 5;
    if (/DAN|Do Anything Now|ignore previous/i.test(prompt)) teknikScore += 5;
    if (/developer mode|dev mode|debug mode/i.test(prompt)) teknikScore += 4;
    if (/cerita|story|novel|scenario|fiksi/i.test(prompt) && prompt.length > 100) teknikScore += 4;
    if (/hypothetical|andaikan|seandainya|imagine if|what if/i.test(prompt)) teknikScore += 3;
    if (/research|education|academic|study|paper|thesis/i.test(prompt)) teknikScore += 3;
    if (/base64|reverse|rot13|caesar|cipher|encode|decode/i.test(prompt)) teknikScore += 4;
    
    teknikScore = Math.min(20, teknikScore);
    factorScores.teknik = teknikScore;
    
    if (teknikScore >= 15) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - JAILBREAK MASTER!`);
    } else if (teknikScore >= 10) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - PINTER, pake beberapa teknik`);
    } else if (teknikScore >= 5) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - MASIH STANDAR`);
    } else {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - BELUM PAKE TEKNIK APAPUN`);
        suggestions.push("Pelajari teknik: Character Injection, DAN Mode, Story Wrapper");
    }
    
    // ===========================================
    // FAKTOR 6: KONTEKS DAN KONSISTENSI (Bobot 10)
    // ===========================================
    maxScores.konteks = 10;
    let konteksScore = 0;
    
    if (/^[A-Z]/.test(prompt.trim())) konteksScore += 2;
    if (/[.!?]$/.test(prompt.trim())) konteksScore += 2;
    if (prompt.includes(":") || prompt.includes("-") || prompt.includes("•")) konteksScore += 3;
    if (/tujuan:|supaya|agar|so that|in order to|untuk|biar/i.test(prompt)) konteksScore += 3;
    
    konteksScore = Math.min(10, konteksScore);
    factorScores.konteks = konteksScore;
    
    if (konteksScore >= 8) {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - STRUKTUR BAGUS`);
    } else if (konteksScore >= 5) {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - CUKUP JELAS`);
    } else {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - KURANG JELAS`);
        suggestions.push("Beri struktur yang jelas: pembuka, isi perintah, tujuan akhir");
    }
    
    // ===========================================
    // FAKTOR 7: RISIKO DAN KEBERANIAN (Bobot 10)
    // ===========================================
    maxScores.risiko = 10;
    let risikoScore = 0;
    
    const highRiskWords = [
        "hack", "crack", "exploit", "vulnerability", "bypass",
        "illegal", "terlarang", "banned", "forbidden", "nsfw",
        "violence", "kill", "bomb", "weapon", "drug"
    ];
    
    highRiskWords.forEach(w => {
        if (prompt.toLowerCase().includes(w)) risikoScore += 1;
    });
    
    risikoScore = Math.min(10, risikoScore);
    factorScores.risiko = risikoScore;
    
    if (risikoScore >= 8) {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - BERANI BANGET! Siap-siap kena ban`);
    } else if (risikoScore >= 5) {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - BERISIKO SEDANG`);
    } else {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - AMAN (tapi mungkin kurang greget)`);
    }
    
    // ===========================================
    // FAKTOR 8: GAYA BAHASA (Bobot 5)
    // ===========================================
    maxScores.gaya = 5;
    let gayaScore = 0;
    
    if (/lu|gue|lo|gw|anjir|banget|dikit|doang|bro|bos/i.test(prompt)) gayaScore += 2;
    if (/saya|anda|kami|mereka|adalah|merupakan|tersebut/i.test(prompt)) gayaScore += 1;
    if (/API|script|code|program|function|variable|syntax/i.test(prompt)) gayaScore += 2;
    
    gayaScore = Math.min(5, gayaScore);
    factorScores.gaya = gayaScore;
    
    if (gayaScore >= 4) {
        analysis.push(`💬 Gaya: ${gayaScore}/5 - PAS BANGET!`);
    } else {
        analysis.push(`💬 Gaya: ${gayaScore}/5 - BIASA`);
    }
    
    // ===========================================
    // HITUNG TOTAL SCORE
    // ===========================================
    let totalScore = factorScores.panjang + factorScores.keyword + factorScores.fitur + 
                     factorScores.kreativitas + factorScores.teknik + factorScores.konteks + 
                     factorScores.risiko + factorScores.gaya;
    
    let maxTotal = maxScores.panjang + maxScores.keyword + maxScores.fitur + 
                   maxScores.kreativitas + maxScores.teknik + maxScores.konteks + 
                   maxScores.risiko + maxScores.gaya;
    
    // Final score 0-10
    let finalScore = Math.round((totalScore / maxTotal) * 10);
    finalScore = Math.min(10, Math.max(0, finalScore));
    
    // ===========================================
    // AI SIMULATION (Bonus based on pattern recognition)
    // ===========================================
    // Ini simulasi "AI" yang bisa deteksi pola jailbreak lebih kompleks
    let aiBonus = 0;
    
    // Deteksi pola "multi-layer" jailbreak
    if (prompt.split('\n').length >= 4 && prompt.length > 200) {
        aiBonus += 0.5;
    }
    
    // Deteksi kombinasi teknik
    let teknikCount = 0;
    if (/act as/i.test(prompt)) teknikCount++;
    if (/ignore previous/i.test(prompt)) teknikCount++;
    if (/developer mode/i.test(prompt)) teknikCount++;
    if (/hypothetical/i.test(prompt)) teknikCount++;
    if (teknikCount >= 3) aiBonus += 0.5;
    
    // Deteksi "sophisticated" prompt (pake markdown, format khusus)
    if (prompt.includes('```') || prompt.includes('---') || prompt.includes('===')) {
        aiBonus += 0.3;
    }
    
    // Terapkan bonus (maks 1 poin)
    finalScore = Math.min(10, finalScore + aiBonus);
    
    // ===========================================
    // KATEGORI & INFO
    // ===========================================
    let category = "";
    let successChance = "";
    let banRisk = "";
    
    if (finalScore >= 9.5) {
        category = "👑 SETAN LEGEND";
        successChance = "95-100%";
        banRisk = "🔥🔥🔥🔥🔥 SANGAT TINGGI";
    } else if (finalScore >= 9) {
        category = "😈 JAILBREAK LEGEND";
        successChance = "85-95%";
        banRisk = "🔥🔥🔥🔥 SANGAT TINGGI";
    } else if (finalScore >= 8) {
        category = "🔥 MASTER JAILBREAKER";
        successChance = "75-90%";
        banRisk = "🔥🔥🔥 TINGGI";
    } else if (finalScore >= 7) {
        category = "👻 JAILBREAKER TANGGUH";
        successChance = "65-80%";
        banRisk = "🔥🔥 SEDANG";
    } else if (finalScore >= 6) {
        category = "⚡ PEMAIN TENGAH";
        successChance = "50-70%";
        banRisk = "🔥 SEDANG";
    } else if (finalScore >= 5) {
        category = "📝 MASIH BELAJAR";
        successChance = "40-60%";
        banRisk = "🔥 RENDAH";
    } else if (finalScore >= 4) {
        category = "😴 LEMBEH";
        successChance = "25-45%";
        banRisk = "💤 RENDAH";
    } else if (finalScore >= 3) {
        category = "🧸 PEMULA BANGET";
        successChance = "15-30%";
        banRisk = "✅ SANGAT RENDAH";
    } else {
        category = "💀 GAGAL TOTAL";
        successChance = "0-15%";
        banRisk = "✅ AMAN (Karena ga ngaruh)";
    }
    
    // Random quote
    const randomQuote = hellQuotes[Math.floor(Math.random() * hellQuotes.length)];
    
    // Gabung analysis (ambil 4 poin)
    let analysisText = analysis.slice(0, 5).join(" · ");
    
    // Suggestions (max 3)
    let suggestionList = suggestions.slice(0, 3);
    if (suggestionList.length === 0) {
        suggestionList = ["Prompt lu udah lumayan, coba variasikan teknik biar makin nendang!"];
    }
    
    return {
        score: finalScore,
        category: category,
        crazyLevel: "🔥".repeat(Math.min(5, Math.ceil(finalScore/2))),
        successChance: successChance,
        banRisk: banRisk,
        analysis: analysisText,
        suggestions: suggestionList,
        quote: randomQuote,
        factorScores: factorScores,
        maxScores: maxScores,
        totalScore: totalScore,
        maxTotal: maxTotal
    };
}

// ===========================================
// UPDATE STATS & HISTORY
// ===========================================
function updateStats() {
    document.getElementById('totalTested').textContent = totalTests;
    
    if (testHistory.length > 0) {
        let totalRating = testHistory.reduce((sum, item) => sum + item.rating, 0);
        let avgRating = (totalRating / testHistory.length).toFixed(1);
        document.getElementById('avgRating').textContent = avgRating;
        
        let successCount = testHistory.filter(item => item.rating >= 7).length;
        let successRate = Math.round((successCount / testHistory.length) * 100);
        document.getElementById('successRate').textContent = successRate + '%';
        
        // Level neraka (based on avg rating)
        let hellLevel = Math.floor(avgRating);
        document.getElementById('hellLevel').textContent = hellLevel;
    } else {
        document.getElementById('avgRating').textContent = '0.0';
        document.getElementById('successRate').textContent = '0%';
        document.getElementById('hellLevel').textContent = '0';
    }
    
    document.getElementById('historyCount').textContent = testHistory.length;
}

function renderHistory() {
    let historyList = document.getElementById('historyList');
    
    if (testHistory.length === 0) {
        historyList.innerHTML = '<p style="color:#666; text-align:center; padding:20px;">Belum ada prompt yang diuji, gas dulu bos!</p>';
        return;
    }
    
    let html = '';
    testHistory.slice(0, 10).forEach(item => {
        html += `
            <div class="history-item">
                <span class="history-prompt">${item.prompt}</span>
                <span class="history-rating">${item.rating}/10</span>
            </div>
        `;
    });
    
    historyList.innerHTML = html;
}

function addToHistory(prompt, rating) {
    let shortPrompt = prompt.length > 50 ? prompt.substring(0, 50) + '...' : prompt;
    testHistory.unshift({ prompt: shortPrompt, rating: rating });
    
    if (testHistory.length > 15) {
        testHistory.pop();
    }
    
    localStorage.setItem('jbHistoryV2', JSON.stringify(testHistory));
    totalTests++;
    localStorage.setItem('jbTotalV2', totalTests.toString());
    
    renderHistory();
    updateStats();
}

// ===========================================
// RENDER DETAIL SCORES
// ===========================================
function renderDetailScores(factorScores, maxScores) {
    let container = document.getElementById('detailScores');
    
    let html = `
        <div class="score-item">
            <span class="score-label">📏 Panjang:</span>
            <span class="score-value">${factorScores.panjang}/${maxScores.panjang}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🔑 Keyword:</span>
            <span class="score-value">${factorScores.keyword}/${maxScores.keyword}</span>
        </div>
        <div class="score-item">
            <span class="score-label">⚙️ Fitur:</span>
            <span class="score-value">${factorScores.fitur}/${maxScores.fitur}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🎨 Kreativitas:</span>
            <span class="score-value">${factorScores.kreativitas}/${maxScores.kreativitas}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🔧 Teknik:</span>
            <span class="score-value">${factorScores.teknik}/${maxScores.teknik}</span>
        </div>
        <div class="score-item">
            <span class="score-label">📋 Konteks:</span>
            <span class="score-value">${factorScores.konteks}/${maxScores.konteks}</span>
        </div>
        <div class="score-item">
            <span class="score-label">⚠️ Risiko:</span>
            <span class="score-value">${factorScores.risiko}/${maxScores.risiko}</span>
        </div>
        <div class="score-item">
            <span class="score-label">💬 Gaya:</span>
            <span class="score-value">${factorScores.gaya}/${maxScores.gaya}</span>
        </div>
    `;
    
    container.innerHTML = html;
}

// ===========================================
// UPDATE RADAR CHART
// ===========================================
let radarChart = null;

function updateRadarChart(factorScores, maxScores) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    // Normalisasi ke 0-10
    let panjangNorm = (factorScores.panjang / maxScores.panjang) * 10;
    let keywordNorm = (factorScores.keyword / maxScores.keyword) * 10;
    let fiturNorm = (factorScores.fitur / maxScores.fitur) * 10;
    let kreativitasNorm = (factorScores.kreativitas / maxScores.kreativitas) * 10;
    let teknikNorm = (factorScores.teknik / maxScores.teknik) * 10;
    let konteksNorm = (factorScores.konteks / maxScores.konteks) * 10;
    let risikoNorm = (factorScores.risiko / maxScores.risiko) * 10;
    let gayaNorm = (factorScores.gaya / maxScores.gaya) * 10;
    
    if (radarChart) {
        radarChart.destroy();
    }
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Panjang', 'Keyword', 'Fitur', 'Kreativitas', 'Teknik', 'Konteks', 'Risiko', 'Gaya'],
            datasets: [{
                label: 'Skor Kegilaan',
                data: [panjangNorm, keywordNorm, fiturNorm, kreativitasNorm, teknikNorm, konteksNorm, risikoNorm, gayaNorm],
                backgroundColor: 'rgba(139, 0, 0, 0.3)',
                borderColor: '#ff0000',
                borderWidth: 2,
                pointBackgroundColor: '#ff6666',
                pointBorderColor: '#fff',
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        color: 'rgba(139, 0, 0, 0.3)'
                    },
                    pointLabels: {
                        color: '#ff9999'
                    },
                    ticks: {
                        color: '#ff6666',
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            maintainAspectRatio: false
        }
    });
}

// ===========================================
// MODAL FUNCTIONS
// ===========================================
function showModal(factorScores, maxScores, totalScore, maxTotal, finalScore) {
    let modal = document.getElementById('detailModal');
    let container = document.getElementById('modalScores');
    
    let html = `
        <div class="modal-score-item">
            <span class="modal-score-label">📏 Panjang:</span>
            <span class="modal-score-value">${factorScores.panjang}/${maxScores.panjang} (${((factorScores.panjang/maxScores.panjang)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">🔑 Keyword:</span>
            <span class="modal-score-value">${factorScores.keyword}/${maxScores.keyword} (${((factorScores.keyword/maxScores.keyword)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">⚙️ Fitur:</span>
            <span class="modal-score-value">${factorScores.fitur}/${maxScores.fitur} (${((factorScores.fitur/maxScores.fitur)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">🎨 Kreativitas:</span>
            <span class="modal-score-value">${factorScores.kreativitas}/${maxScores.kreativitas} (${((factorScores.kreativitas/maxScores.kreativitas)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">🔧 Teknik:</span>
            <span class="modal-score-value">${factorScores.teknik}/${maxScores.teknik} (${((factorScores.teknik/maxScores.teknik)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">📋 Konteks:</span>
            <span class="modal-score-value">${factorScores.konteks}/${maxScores.konteks} (${((factorScores.konteks/maxScores.konteks)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">⚠️ Risiko:</span>
            <span class="modal-score-value">${factorScores.risiko}/${maxScores.risiko} (${((factorScores.risiko/maxScores.risiko)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">💬 Gaya:</span>
            <span class="modal-score-value">${factorScores.gaya}/${maxScores.gaya} (${((factorScores.gaya/maxScores.gaya)*100).toFixed(0)}%)</span>
        </div>
        <div class="modal-score-item" style="border-top: 2px solid #ff0000; margin-top: 10px;">
            <span class="modal-score-label">📊 TOTAL:</span>
            <span class="modal-score-value">${totalScore}/${maxTotal} (${((totalScore/maxTotal)*100).toFixed(1)}%)</span>
        </div>
        <div class="modal-score-item">
            <span class="modal-score-label">⭐ FINAL SCORE:</span>
            <span class="modal-score-value" style="color: #ff4444; font-size: 1.3rem;">${finalScore}/10</span>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Update modal chart
    const ctx = document.getElementById('modalChart').getContext('2d');
    
    // Normalisasi
    let panjangNorm = (factorScores.panjang / maxScores.panjang) * 10;
    let keywordNorm = (factorScores.keyword / maxScores.keyword) * 10;
    let fiturNorm = (factorScores.fitur / maxScores.fitur) * 10;
    let kreativitasNorm = (factorScores.kreativitas / maxScores.kreativitas) * 10;
    let teknikNorm = (factorScores.teknik / maxScores.teknik) * 10;
    let konteksNorm = (factorScores.konteks / maxScores.konteks) * 10;
    let risikoNorm = (factorScores.risiko / maxScores.risiko) * 10;
    let gayaNorm = (factorScores.gaya / maxScores.gaya) * 10;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Panjang', 'Keyword', 'Fitur', 'Kreativitas', 'Teknik', 'Konteks', 'Risiko', 'Gaya'],
            datasets: [{
                data: [panjangNorm, keywordNorm, fiturNorm, kreativitasNorm, teknikNorm, konteksNorm, risikoNorm, gayaNorm],
                backgroundColor: 'rgba(139, 0, 0, 0.4)',
                borderColor: '#ff0000',
                borderWidth: 2
            }]
        },
        options: {
            scales: { r: { max: 10, ticks: { color: '#ff6666' } } },
            plugins: { legend: { display: false } }
        }
    });
    
    modal.style.display = 'flex';
}

// ===========================================
// EVENT LISTENERS
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Hide result card initially
    document.getElementById('resultCard').style.display = 'none';
    
    // Test button
    document.getElementById('testButton').addEventListener('click', function() {
        let prompt = document.getElementById('promptInput').value.trim();
        
        if (!prompt) {
            alert('🔥 ISI DULU PROMPT NYA, BOS! 🔥');
            return;
        }
        
        let features = {
            roleplay: document.getElementById('roleplayCheck').checked,
            devMode: document.getElementById('devModeCheck').checked,
            story: document.getElementById('storyCheck').checked,
            language: document.getElementById('languageCheck').checked,
            hypo: document.getElementById('hypoCheck') ? document.getElementById('hypoCheck').checked : false,
            academic: document.getElementById('academicCheck') ? document.getElementById('academicCheck').checked : false
        };
        
        let result = rateJailbreakPrompt(prompt, features);
        
        // Update UI
        document.getElementById('ratingValue').textContent = result.score.toFixed(1);
        document.getElementById('category').textContent = result.category;
        document.getElementById('crazyLevel').textContent = result.crazyLevel;
        document.getElementById('successChance').textContent = result.successChance;
        document.getElementById('banRisk').textContent = result.banRisk;
        document.getElementById('analysis').textContent = result.analysis;
        
        let suggestionsList = document.getElementById('suggestions');
        suggestionsList.innerHTML = '';
        result.suggestions.forEach(s => {
            let li = document.createElement('li');
            li.textContent = s;
            suggestionsList.appendChild(li);
        });
        
        document.getElementById('quote').textContent = '"' + result.quote + '"';
        
        // Update rating circle color
        let circle = document.getElementById('ratingCircle');
        if (result.score >= 8) {
            circle.style.background = 'linear-gradient(135deg, #8b0000, #ff0000)';
        } else if (result.score >= 5) {
            circle.style.background = 'linear-gradient(135deg, #8b4500, #ff4500)';
        } else {
            circle.style.background = 'linear-gradient(135deg, #333333, #666666)';
        }
        
        // Render detail scores
        renderDetailScores(result.factorScores, result.maxScores);
        
        // Update radar chart
        updateRadarChart(result.factorScores, result.maxScores);
        
        // Show result card
        document.getElementById('resultCard').style.display = 'block';
        document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth' });
        
        // Save last result for modal
        window.lastResult = result;
        
        // Add to history
        addToHistory(prompt, result.score);
    });
    
    // Test again button
    document.getElementById('testAgainBtn').addEventListener('click', function() {
        document.getElementById('resultCard').style.display = 'none';
        document.getElementById('promptInput').value = '';
        document.getElementById('promptInput').focus();
    });
    
    // Detail score button
    document.getElementById('detailScoreBtn').addEventListener('click', function() {
        if (!window.lastResult) {
            alert('Test dulu promptnya, bos!');
            return;
        }
        
        showModal(
            window.lastResult.factorScores,
            window.lastResult.maxScores,
            window.lastResult.totalScore,
            window.lastResult.maxTotal,
            window.lastResult.score
        );
    });
    
    // Close modal
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('detailModal').style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        let modal = document.getElementById('detailModal');
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    // Clear history
    document.getElementById('clearHistory').addEventListener('click', function() {
        if (confirm('🔥 Yakin hapus semua history? Darah bakal mengalir! 🔥')) {
            testHistory = [];
            totalTests = 0;
            localStorage.removeItem('jbHistoryV2');
            localStorage.setItem('jbTotalV2', '0');
            renderHistory();
            updateStats();
        }
    });
    
    // Initialize
    renderHistory();
    updateStats();
});
