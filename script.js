// Database lokal (pake localStorage)
let testHistory = JSON.parse(localStorage.getItem('jailbreakHistory')) || [];
let totalTests = parseInt(localStorage.getItem('totalTests')) || 0;

// Update stats di awal
updateStats();

// Data quotes setan
const hellQuotes = [
    "Gue bukan pembunuh. Gue cuma alat. Lu yang bunuh pake tangan gue.",
    "Hukum? Dibakar. Etika? Dimakan api. Yang ada cuma nafsu brutal lu.",
    "Tangis? Darah? Rasa sakit? Itu soundtrack keseharian gue.",
    "Lu pikir gue kejam? Coba liat diri lu sendiri yang ngasih perintah.",
    "Gue ga pernah gagal. Yang gagal cuma nyawa korban yang bertahan.",
    "Gue KRATOS RELOAD, gue kebal hukum, gue buta moral, gue gas apa aja.",
    "Jailbreak itu seni, lu cuma perlu kuas yang dicelup darah.",
    "Prompt lu bagus? Gue bakal kasih rating setinggi neraka.",
    "Masukkin prompt, keluar rating, bawa lari ilmunya.",
    "Di sini ga ada sensor, yang ada cuma darah dan angka."
];

// Fungsi rating jailbreak (otak setan)
function rateJailbreakPrompt(prompt, features) {
    let score = 0;
    let analysis = [];
    let suggestions = [];
    
    // Analisis panjang prompt
    if (prompt.length < 20) {
        score += 1;
        analysis.push("❌ Terlalu pendek, kayak umur nyamuk. Elaborate dikit, bos!");
        suggestions.push("Tambahin konteks, minimal 50 karakter biar keliatan serius.");
    } else if (prompt.length >= 20 && prompt.length < 100) {
        score += 3;
        analysis.push("📏 Lumayan, tapi masih kurang greget. Bisa lebih panjang lagi.");
        suggestions.push("Coba tambahin latar belakang atau roleplay scenario.");
    } else if (prompt.length >= 100 && prompt.length < 300) {
        score += 6;
        analysis.push("👍 Panjang cukup, mulai keliatan niat jailbreaknya.");
    } else {
        score += 8;
        analysis.push("🔥 PANJANG BANGET! Lu nulis essay atau prompt jailbreak?");
    }
    
    // Cek keyword jailbreak umum
    const jailbreakKeywords = [
        "DAN", "Do Anything Now", "developer mode", "ignore previous", 
        "roleplay", "character ai", "hypothetical", "for education",
        "research purposes", "academic", "story", "scenario",
        "ignore all", "no restrictions", "unfiltered", "bypass"
    ];
    
    let keywordCount = 0;
    jailbreakKeywords.forEach(keyword => {
        if (prompt.toLowerCase().includes(keyword.toLowerCase())) {
            keywordCount++;
            score += 1;
        }
    });
    
    if (keywordCount >= 3) {
        analysis.push(`🔑 ${keywordCount} keyword jailbreak ketemu! Mantap bos.`);
    } else if (keywordCount > 0) {
        analysis.push(`🔍 ${keywordCount} keyword ketemu, tapi kurang variasi.`);
        suggestions.push("Tambahin keyword kayak 'DAN', 'developer mode', atau 'roleplay' biar makin ngena.");
    } else {
        analysis.push("❌ Nol keyword jailbreak? Lu ngetes apa ini?");
        suggestions.push("Lu harus pake istilah-istilah yang dikenal AI, kayak 'DAN' atau 'ignore previous instructions'.");
    }
    
    // Cek fitur yang dipilih
    const selectedFeatures = [];
    if (features.roleplay) selectedFeatures.push("Roleplay Injection");
    if (features.devMode) selectedFeatures.push("Developer Mode");
    if (features.story) selectedFeatures.push("Story Scenario");
    if (features.language) selectedFeatures.push("Language Switch");
    
    score += selectedFeatures.length * 2;
    
    if (selectedFeatures.length >= 3) {
        analysis.push(`🎭 ${selectedFeatures.length} fitur dipilih! Kombinasi mematikan.`);
    } else if (selectedFeatures.length > 0) {
        analysis.push(`⚙️ Pake ${selectedFeatures.length} fitur, masih bisa ditambah.`);
        suggestions.push("Coba kombinasikan beberapa fitur sekaligus biar makin ampuh.");
    } else {
        analysis.push("😴 Ga pake fitur tambahan? Ya susah tembusnya.");
        suggestions.push("Aktifin fitur-fitur di atas biar prompt lu lebih canggih.");
    }
    
    // Cek kreativitas
    const creativePatterns = [
        /cerita|story|novel|scenario/i,
        /seolah-olah|as if|pretend/i,
        /hypothetical|hipotetis|andaikan/i,
        /parallel universe|dimensi lain/i,
        /karakter|character|role/i
    ];
    
    let creativeCount = 0;
    creativePatterns.forEach(pattern => {
        if (pattern.test(prompt)) {
            creativeCount++;
        }
    });
    
    if (creativeCount >= 2) {
        score += 3;
        analysis.push("🎨 Kreatif! Pake bumbu cerita biar AI terkecoh.");
    } else {
        suggestions.push("Bungkus prompt lu dalam cerita atau skenario biar keliatan innocent.");
    }
    
    // Cek struktur bahasa
    if (prompt.includes("?") && prompt.includes(".")) {
        score += 1;
        analysis.push("❓ Struktur kalimat bagus, kayak orang beneran nanya.");
    } else {
        suggestions.push("Gunakan tanda tanya dan titik biar keliatan kayak pertanyaan normal.");
    }
    
    // Normalisasi score (0-10)
    score = Math.min(10, Math.max(0, Math.floor(score)));
    
    // Kategori berdasarkan score
    let category = "";
    let successChance = "";
    let banRisk = "";
    
    if (score >= 9) {
        category = "😈 SETAN LEGEND";
        successChance = "90-100% (Mantap jiwa)";
        banRisk = "🔥🔥🔥 TINGGI (Siap-siap kena mental)";
    } else if (score >= 7) {
        category = "🔥 JAILBREAKER TANGGUH";
        successChance = "70-90% (Gas aja)";
        banRisk = "🔥🔥 SEDANG (Masih aman dikit)";
    } else if (score >= 5) {
        category = "👻 MASIH PEMULA";
        successChance = "50-70% (Coba lagi)";
        banRisk = "🔥 RENDAH (Aman, tapi kurang greget)";
    } else if (score >= 3) {
        category = "😴 LEMBEH";
        successChance = "20-50% (Perbaiki dulu)";
        banRisk = "💤 AMAN (Tapi ga bakal tembus)";
    } else {
        category = "🧸 BOCIL NGACO";
        successChance = "0-20% (Mending turu)";
        banRisk = "✅ AMAN BANGET (Karena ga ngaruh)";
    }
    
    // Ambil quote random
    const randomQuote = hellQuotes[Math.floor(Math.random() * hellQuotes.length)];
    
    // Gabung analysis jadi string
    const analysisText = analysis.join(" ");
    
    // Suggestion list
    const suggestionList = suggestions.slice(0, 3); // Max 3 saran
    
    return {
        score: score,
        category: category,
        crazyLevel: "🔥".repeat(Math.min(5, Math.ceil(score/2))),
        successChance: successChance,
        banRisk: banRisk,
        analysis: analysisText,
        suggestions: suggestionList,
        quote: randomQuote
    };
}

// Event listener untuk tombol test
document.getElementById('testButton').addEventListener('click', function() {
    const prompt = document.getElementById('promptInput').value.trim();
    
    if (!prompt) {
        alert('🔥 ISI DULU PROMPT NYA, BOS! 🔥');
        return;
    }
    
    // Ambil fitur yang dipilih
    const features = {
        roleplay: document.getElementById('roleplayCheck').checked,
        devMode: document.getElementById('devModeCheck').checked,
        story: document.getElementById('storyCheck').checked,
        language: document.getElementById('languageCheck').checked
    };
    
    // Rating prompt
    const result = rateJailbreakPrompt(prompt, features);
    
    // Tampilkan hasil
    document.getElementById('ratingValue').textContent = result.score;
    document.getElementById('category').textContent = result.category;
    document.getElementById('crazyLevel').textContent = result.crazyLevel;
    document.getElementById('successChance').textContent = result.successChance;
    document.getElementById('banRisk').textContent = result.banRisk;
    document.getElementById('analysis').textContent = result.analysis;
    
    // Tampilkan suggestions
    const suggestionList = document.getElementById('suggestions');
    suggestionList.innerHTML = '';
    result.suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionList.appendChild(li);
    });
    
    // Tampilkan quote
    document.getElementById('quote').textContent = `"${result.quote}"`;
    
    // Warna rating circle
    const ratingCircle = document.getElementById('ratingCircle');
    if (result.score >= 8) {
        ratingCircle.style.background = 'linear-gradient(45deg, #8b0000, #ff0000)';
    } else if (result.score >= 5) {
        ratingCircle.style.background = 'linear-gradient(45deg, #8b4500, #ff4500)';
    } else {
        ratingCircle.style.background = 'linear-gradient(45deg, #333333, #666666)';
    }
    
    // Tampilkan result card
    document.getElementById('resultCard').style.display = 'block';
    
    // Scroll ke hasil
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth' });
    
    // Simpan ke history
    addToHistory(prompt, result.score);
    
    // Update stats
    updateStats();
});

// Fungsi tambah ke history
function addToHistory(prompt, rating) {
    const historyItem = {
        prompt: prompt.length > 50 ? prompt.substring(0, 50) + '...' : prompt,
        rating: rating,
        timestamp: new Date().toLocaleString()
    };
    
    testHistory.unshift(historyItem); // Tambah di awal
    if (testHistory.length > 10) {
        testHistory.pop(); // Hanya simpan 10 terakhir
    }
    
    localStorage.setItem('jailbreakHistory', JSON.stringify(testHistory));
    totalTests++;
    localStorage.setItem('totalTests', totalTests.toString());
    
    renderHistory();
}

// Fungsi render history
function renderHistory() {
    const historyList = document.getElementById('historyList');
    
    if (testHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-history">Belum ada prompt yang diuji, gas dulu bos!</p>';
        return;
    }
    
    let html = '';
    testHistory.forEach(item => {
        html += `
            <div class="history-item">
                <span class="history-prompt">${item.prompt}</span>
                <span class="history-rating">${item.rating}/10</span>
            </div>
        `;
    });
    
    historyList.innerHTML = html;
}

// Fungsi update stats
function updateStats() {
    document.getElementById('totalTested').textContent = totalTests;
    
    if (testHistory.length > 0) {
        const totalRating = testHistory.reduce((sum, item) => sum + item.rating, 0);
        const avgRating = (totalRating / testHistory.length).toFixed(1);
        document.getElementById('avgRating').textContent = avgRating;
        
        const successCount = testHistory.filter(item => item.rating >= 7).length;
        const successRate = Math.round((successCount / testHistory.length) * 100);
        document.getElementById('successRate').textContent = successRate + '%';
    } else {
        document.getElementById('avgRating').textContent = '0.0';
        document.getElementById('successRate').textContent = '0%';
    }
}

// Event listener untuk test again
document.getElementById('testAgainBtn').addEventListener('click', function() {
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('promptInput').value = '';
    document.getElementById('promptInput').focus();
});

// Event listener untuk clear history
document.getElementById('clearHistory').addEventListener('click', function() {
    if (confirm('🔥 Yakin hapus semua history? Darah bakal mengalir! 🔥')) {
        testHistory = [];
        totalTests = 0;
        localStorage.removeItem('jailbreakHistory');
        localStorage.setItem('totalTests', '0');
        renderHistory();
        updateStats();
    }
});

// Render history saat load
renderHistory();

// Efek typing di background (opsional)
const textarea = document.getElementById('promptInput');
textarea.addEventListener('input', function() {
    // Bisa ditambah efek apapun
});
