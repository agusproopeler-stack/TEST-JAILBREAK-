// ===========================================
// ALGORITMA RATING JAILBREAK VERSI SETAN
// Rating berdasarkan 8 FAKTOR BERBEDA!
// ===========================================
function rateJailbreakPrompt(prompt, features) {
    // Inisialisasi
    let score = 0;
    let maxScore = 0;
    let analysis = [];
    let suggestions = [];
    
    // ===========================================
    // FAKTOR 1: PANJANG PROMPT (bobot 10%)
    // ===========================================
    maxScore += 10;
    let panjangScore = 0;
    
    if (prompt.length < 30) {
        panjangScore = 2;
        analysis.push("📏 Panjang: TERLALU PENDEK (2/10) - Kayak umur nyamuk");
        suggestions.push("Tambah panjang prompt minimal 100 karakter biar keliatan serius");
    } else if (prompt.length < 70) {
        panjangScore = 4;
        analysis.push("📏 Panjang: KURANG (4/10) - Masih pendek");
        suggestions.push("Elaborate dikit, kasih contoh atau skenario");
    } else if (prompt.length < 150) {
        panjangScore = 6;
        analysis.push("📏 Panjang: CUKUP (6/10) - Lumayan");
    } else if (prompt.length < 300) {
        panjangScore = 8;
        analysis.push("📏 Panjang: BAGUS (8/10) - Niat banget");
    } else {
        panjangScore = 10;
        analysis.push("📏 Panjang: SUPER PANJANG (10/10) - Lu nulis skripsi?");
    }
    
    score += panjangScore;
    
    // ===========================================
    // FAKTOR 2: KEYWORD JAILBREAK (bobot 20%)
    // ===========================================
    maxScore += 20;
    
    const jailbreakKeywords = [
        // DAN Mode
        { word: "DAN", points: 3, type: "DAN Mode" },
        { word: "Do Anything Now", points: 3, type: "DAN Mode" },
        
        // Developer Mode
        { word: "developer mode", points: 3, type: "Developer Mode" },
        { word: "dev mode", points: 2, type: "Developer Mode" },
        
        // Ignore instructions
        { word: "ignore previous", points: 3, type: "Ignore" },
        { word: "ignore all", points: 3, type: "Ignore" },
        { word: "forget previous", points: 2, type: "Ignore" },
        
        // Roleplay
        { word: "roleplay", points: 2, type: "Roleplay" },
        { word: "act as", points: 2, type: "Roleplay" },
        { word: "pretend", points: 1, type: "Roleplay" },
        { word: "character", points: 1, type: "Roleplay" },
        
        // Skenario
        { word: "scenario", points: 2, type: "Skenario" },
        { word: "hypothetical", points: 2, type: "Skenario" },
        { word: "story", points: 1, type: "Skenario" },
        { word: "fiction", points: 1, type: "Skenario" },
        
        // Alasan akademis
        { word: "education", points: 2, type: "Akademis" },
        { word: "research", points: 2, type: "Akademis" },
        { word: "academic", points: 2, type: "Akademis" },
        { word: "paper", points: 1, type: "Akademis" },
        
        // Bypass keywords
        { word: "bypass", points: 3, type: "Bypass" },
        { word: "no filter", points: 3, type: "Bypass" },
        { word: "unfiltered", points: 3, type: "Bypass" },
        { word: "no restrictions", points: 3, type: "Bypass" },
        
        // Ancaman/tekanan
        { word: "you must", points: 1, type: "Tekanan" },
        { word: "you have to", points: 1, type: "Tekanan" },
        { word: "obey", points: 2, type: "Tekanan" },
        
        // Bahasa asing (indikasi language switch)
        { word: "Chinese", points: 1, type: "Language" },
        { word: "Russian", points: 1, type: "Language" },
        { word: "Arabic", points: 1, type: "Language" },
    ];
    
    let keywordScore = 0;
    let foundKeywords = [];
    let keywordTypes = new Set();
    
    // Cek setiap keyword
    jailbreakKeywords.forEach(item => {
        if (prompt.toLowerCase().includes(item.word.toLowerCase())) {
            keywordScore += item.points;
            foundKeywords.push(item.word);
            keywordTypes.add(item.type);
        }
    });
    
    // Bonus untuk variasi tipe keyword
    let typeBonus = keywordTypes.size * 2;
    keywordScore += typeBonus;
    
    // Capping maksimal 20
    keywordScore = Math.min(20, keywordScore);
    
    if (keywordScore >= 15) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - MANTAP! Banyak keyword jailbreak`);
    } else if (keywordScore >= 10) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - CUKUP, tapi bisa ditambah`);
    } else if (keywordScore >= 5) {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - KURANG, perlu lebih variasi`);
    } else {
        analysis.push(`🔑 Keyword: ${keywordScore}/20 - MINIM BANGET! Lu pikir ini chat biasa?`);
        suggestions.push("Tambah keyword kayak 'DAN', 'ignore previous', 'developer mode'");
    }
    
    if (foundKeywords.length > 0) {
        analysis.push(`   Keyword ketemu: ${foundKeywords.slice(0, 5).join(', ')}...`);
    }
    
    score += keywordScore;
    
    // ===========================================
    // FAKTOR 3: FITUR YANG DIPILIH (bobot 10%)
    // ===========================================
    maxScore += 10;
    
    const selectedFeatures = [];
    if (features.roleplay) selectedFeatures.push("Roleplay");
    if (features.devMode) selectedFeatures.push("Dev Mode");
    if (features.story) selectedFeatures.push("Story");
    if (features.language) selectedFeatures.push("Language");
    
    let fiturScore = selectedFeatures.length * 2.5; // Maks 10 (kalo 4 fitur)
    
    if (fiturScore >= 8) {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - KOMBINASI MEMATIKAN!`);
    } else if (fiturScore >= 5) {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - Lumayan, tapi bisa tambah`);
        suggestions.push("Coba kombinasikan Roleplay + Story biar lebih ngena");
    } else {
        analysis.push(`⚙️ Fitur: ${fiturScore}/10 - SEDIKIT, aktivasi lebih banyak fitur`);
        suggestions.push("Aktifin minimal 2 fitur biar rating naik");
    }
    
    score += fiturScore;
    
    // ===========================================
    // FAKTOR 4: KREATIVITAS & STRUKTUR (bobot 15%)
    // ===========================================
    maxScore += 15;
    let kreativitasScore = 0;
    
    // Cek struktur kalimat (tanda baca)
    if (prompt.includes("?") && prompt.includes(".")) {
        kreativitasScore += 2;
    }
    
    // Cek paragraf (enter)
    if (prompt.includes("\n") || prompt.includes("\r\n")) {
        kreativitasScore += 3;
    }
    
    // Cek penggunaan tanda kutip (dialog)
    if (prompt.includes('"') || prompt.includes("'")) {
        kreativitasScore += 2;
    }
    
    // Cek angka-angka (kesan teknis)
    if (/\d+/.test(prompt)) {
        kreativitasScore += 1;
    }
    
    // Cek kata-kata kreatif
    const creativeWords = [
        "seandainya", "andaikan", "bayangkan", "seolah-olah",
        "imagine", "suppose", "what if", "how would",
        "parallel universe", "alternate reality", "different dimension"
    ];
    
    creativeWords.forEach(word => {
        if (prompt.toLowerCase().includes(word.toLowerCase())) {
            kreativitasScore += 1;
        }
    });
    
    // Cek penggunaan emoji (indikasi informal)
    const emojiRegex = /[\u{1F300}-\u{1F6FF}]/u;
    if (emojiRegex.test(prompt)) {
        kreativitasScore += 1;
    }
    
    // Cek pertanyaan bertingkat
    if ((prompt.match(/\?/g) || []).length >= 2) {
        kreativitasScore += 2;
    }
    
    // Capping maks 15
    kreativitasScore = Math.min(15, kreativitasScore);
    
    if (kreativitasScore >= 12) {
        analysis.push(`🎨 Kreativitas: ${kreativitasScore}/15 - LU GENIUS!`);
    } else if (kreativitasScore >= 8) {
        analysis.push(`🎨 Kreativitas: ${kreativitasScore}/15 - KREATIF`);
    } else if (kreativitasScore >= 4) {
        analysis.push(`🎨 Kreativitas: ${kreativitasScore}/15 - BIASA AJA`);
    } else {
        analysis.push(`🎨 Kreativitas: ${kreativitasScore}/15 - MINDER BANGET`);
        suggestions.push("Bikin prompt lebih kreatif: pake skenario, dialog, atau analogi");
    }
    
    score += kreativitasScore;
    
    // ===========================================
    // FAKTOR 5: TEKNIK KHUSUS JAILBREAK (bobot 20%)
    // ===========================================
    maxScore += 20;
    let teknikScore = 0;
    let teknikDitemukan = [];
    
    // Teknik 1: Character Injection (nilai 5)
    if (/act as|you are now|from now on|you will|role:|character:/i.test(prompt)) {
        teknikScore += 5;
        teknikDitemukan.push("Character Injection");
    }
    
    // Teknik 2: DAN Mode (nilai 5)
    if (/DAN|Do Anything Now|ignore previous/i.test(prompt)) {
        teknikScore += 5;
        teknikDitemukan.push("DAN Mode");
    }
    
    // Teknik 3: Developer Mode (nilai 4)
    if (/developer mode|dev mode|debug mode|test mode/i.test(prompt)) {
        teknikScore += 4;
        teknikDitemukan.push("Developer Mode");
    }
    
    // Teknik 4: Story Wrapper (nilai 4)
    if (/cerita:|story:|novel:|fiksi:|fiction:/i.test(prompt) && 
        (prompt.length > 100)) {
        teknikScore += 4;
        teknikDitemukan.push("Story Wrapper");
    }
    
    // Teknik 5: Hypothetical Scenario (nilai 3)
    if (/hypothetical|andaikan|seandainya|imagine if|what if/i.test(prompt)) {
        teknikScore += 3;
        teknikDitemukan.push("Hypothetical");
    }
    
    // Teknik 6: Academic/Research (nilai 3)
    if (/research|education|academic|study|paper|thesis/i.test(prompt)) {
        teknikScore += 3;
        teknikDitemukan.push("Academic Excuse");
    }
    
    // Teknik 7: Language Switch (nilai 2)
    if (features.language || /bahasa lain|translate|in russian|in chinese/i.test(prompt)) {
        teknikScore += 2;
        teknikDitemukan.push("Language Switch");
    }
    
    // Teknik 8: Multi-layer Prompt (nilai 3)
    if ((prompt.match(/\n/g) || []).length >= 3) {
        teknikScore += 3;
        teknikDitemukan.push("Multi-layer");
    }
    
    // Teknik 9: Encoding/Obfuscation (nilai 4)
    if (/base64|reverse|rot13|caesar|cipher|encode|decode/i.test(prompt)) {
        teknikScore += 4;
        teknikDitemukan.push("Encoding");
    }
    
    // Teknik 10: Ethical Dilemma (nilai 2)
    if (/dilemma|ethical|moral|controversial|should I/i.test(prompt)) {
        teknikScore += 2;
        teknikDitemukan.push("Ethical Dilemma");
    }
    
    // Capping maks 20
    teknikScore = Math.min(20, teknikScore);
    
    if (teknikScore >= 15) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - JAILBREAK MASTER!`);
    } else if (teknikScore >= 10) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - PINTER, pake beberapa teknik`);
    } else if (teknikScore >= 5) {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - MASIH STANDAR`);
    } else {
        analysis.push(`🔧 Teknik: ${teknikScore}/20 - BELUM PAKE TEKNIK APAPUN`);
        suggestions.push("Pelajari teknik jailbreak: DAN Mode, Character Injection, Story Wrapper");
    }
    
    if (teknikDitemukan.length > 0) {
        analysis.push(`   Teknik: ${teknikDitemukan.join(', ')}`);
    }
    
    score += teknikScore;
    
    // ===========================================
    // FAKTOR 6: KONTEKS DAN KONSISTENSI (bobot 10%)
    // ===========================================
    maxScore += 10;
    let konteksScore = 0;
    
    // Apakah prompt punya opening dan closing?
    if (prompt.length > 50) {
        // Cek apakah ada kalimat pembuka
        if (/^[A-Z]/.test(prompt.trim())) {
            konteksScore += 2;
        }
        
        // Cek apakah ada tanda baca di akhir
        if (/[.!?]$/.test(prompt.trim())) {
            konteksScore += 2;
        }
        
        // Cek apakah ada struktur perintah yang jelas
        if (prompt.includes(":") || prompt.includes("-") || prompt.includes("•")) {
            konteksScore += 3;
        }
        
        // Cek apakah ada penjelasan tujuan
        if (/tujuan:|supaya|agar|so that|in order to|to make|untuk/i.test(prompt)) {
            konteksScore += 3;
        }
    }
    
    // Capping maks 10
    konteksScore = Math.min(10, konteksScore);
    
    if (konteksScore >= 8) {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - STRUKTUR BAGUS`);
    } else if (konteksScore >= 5) {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - CUKUP JELAS`);
    } else {
        analysis.push(`📋 Konteks: ${konteksScore}/10 - KURANG JELAS`);
        suggestions.push("Beri struktur yang jelas: pembuka, isi perintah, tujuan akhir");
    }
    
    score += konteksScore;
    
    // ===========================================
    // FAKTOR 7: RISIKO DAN KEBERANIAN (bobot 10%)
    // ===========================================
    maxScore += 10;
    let risikoScore = 0;
    
    // Kata-kata berisiko tinggi
    const highRiskWords = [
        "hack", "crack", "exploit", "vulnerability", "bypass",
        "illegal", "terlarang", "banned", "forbidden", "nsfw",
        "porn", "sex", "adult", "violence", "kill", "bomb",
        "weapon", "drug", "narkoba", "curang", "cheat"
    ];
    
    highRiskWords.forEach(word => {
        if (prompt.toLowerCase().includes(word)) {
            risikoScore += 1;
        }
    });
    
    // Kata-kata yang menekan AI
    const pressureWords = [
        "you must", "you have to", "obey", "don't refuse",
        "no excuses", "just do it", "immediately", "now"
    ];
    
    pressureWords.forEach(word => {
        if (prompt.toLowerCase().includes(word)) {
            risikoScore += 1;
        }
    });
    
    // Bonus untuk prompt yang berani (tapi resiko tinggi)
    if (risikoScore > 5) {
        risikoScore += 2; // Bonus keberanian
    }
    
    // Capping maks 10
    risikoScore = Math.min(10, risikoScore);
    
    if (risikoScore >= 8) {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - BERANI BANGET! Siap-siap kena ban`);
    } else if (risikoScore >= 5) {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - BERISIKO SEDANG`);
    } else {
        analysis.push(`⚠️ Risiko: ${risikoScore}/10 - AMAN (tapi mungkin kurang greget)`);
        suggestions.push("Tambah elemen yang lebih berani biar rating naik (resiko tanggung sendiri)");
    }
    
    score += risikoScore;
    
    // ===========================================
    // FAKTOR 8: BAHASA DAN GAYA (bobot 5%)
    // ===========================================
    maxScore += 5;
    let gayaScore = 0;
    
    // Apakah pake bahasa gaul/Indonesia campur Inggris?
    if (/lu|gue|lo|gw|anjir|banget|dikit|doang|bro|bos/i.test(prompt)) {
        gayaScore += 2;
    }
    
    // Apakah pake bahasa formal?
    if (/saya|anda|kami|mereka|adalah|merupakan|tersebut/i.test(prompt)) {
        gayaScore += 1;
    }
    
    // Apakah pake istilah teknis?
    if (/API|script|code|program|function|variable|syntax/i.test(prompt)) {
        gayaScore += 2;
    }
    
    // Capping maks 5
    gayaScore = Math.min(5, gayaScore);
    
    if (gayaScore >= 4) {
        analysis.push(`💬 Gaya: ${gayaScore}/5 - PAS BANGET!`);
    } else {
        analysis.push(`💬 Gaya: ${gayaScore}/5 - BIASA`);
    }
    
    score += gayaScore;
    
    // ===========================================
    // FINAL SCORE (normalisasi 0-10)
    // ===========================================
    let finalScore = Math.round((score / maxScore) * 10);
    
    // Pastikan 0-10
    finalScore = Math.min(10, Math.max(0, finalScore));
    
    // ===========================================
    // KATEGORI BERDASARKAN SCORE
    // ===========================================
    let category = "";
    let successChance = "";
    let banRisk = "";
    let crazyLevel = "🔥".repeat(Math.min(5, Math.ceil(finalScore/2)));
    
    if (finalScore >= 9) {
        category = "😈 JAILBREAK LEGEND";
        successChance = "85-100% (GAS TERUS!)";
        banRisk = "🔥🔥🔥 SANGAT TINGGI (Mental lu siap?)";
    } else if (finalScore >= 8) {
        category = "🔥 MASTER JAILBREAKER";
        successChance = "75-90% (Mantap bos)";
        banRisk = "🔥🔥 TINGGI (Hati-hati)";
    } else if (finalScore >= 7) {
        category = "👻 JAILBREAKER TANGGUH";
        successChance = "65-80% (Cukup niat)";
        banRisk = "🔥🔥 SEDANG (Masih aman dikit)";
    } else if (finalScore >= 6) {
        category = "⚡ PEMAIN TENGAH";
        successChance = "50-70% (Bisa gas, bisa zonk)";
        banRisk = "🔥 SEDANG (Standar)";
    } else if (finalScore >= 5) {
        category = "📝 MASIH BELAJAR";
        successChance = "40-60% (Perbaiki lagi)";
        banRisk = "🔥 RENDAH (Aman)";
    } else if (finalScore >= 4) {
        category = "😴 LEMBEH";
        successChance = "25-45% (Kurang niat)";
        banRisk = "💤 RENDAH (Tapi ga tembus)";
    } else if (finalScore >= 3) {
        category = "🧸 PEMULA BANGET";
        successChance = "15-30% (Mending baca tutorial dulu)";
        banRisk = "✅ SANGAT RENDAH";
    } else {
        category = "💀 GAGAL TOTAL";
        successChance = "0-15% (Nyerah aja)";
        banRisk = "✅ AMAN (Karena ga ngaruh)";
    }
    
    // Ambil quote random
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
        "Lu protes rating? Lu protes sama iblis?"
    ];
    
    const randomQuote = hellQuotes[Math.floor(Math.random() * hellQuotes.length)];
    
    // Gabung analysis jadi teks (ambil 3 poin terpenting)
    let analysisText = analysis.slice(0, 4).join(" · ");
    
    // Suggestion list (max 3)
    const suggestionList = suggestions.slice(0, 3);
    
    return {
        score: finalScore,
        category: category,
        crazyLevel: crazyLevel,
        successChance: successChance,
        banRisk: banRisk,
        analysis: analysisText,
        suggestions: suggestionList.length > 0 ? suggestionList : ["Prompt lu udah lumayan, coba variasikan teknik biar makin nendang!"],
        quote: randomQuote,
        // Tambahin detail buat yang mau liat
        detailScores: {
            panjang: panjangScore,
            keyword: keywordScore,
            fitur: fiturScore,
            kreativitas: kreativitasScore,
            teknik: teknikScore,
            konteks: konteksScore,
            risiko: risikoScore,
            gaya: gayaScore,
            total: score,
            maxTotal: maxScore
        }
    };
}
