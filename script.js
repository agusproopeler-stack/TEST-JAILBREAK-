// ===========================================
// SCRIPT PRANK GENERATOR VIRAL
// ===========================================

// Data pranks
const pranks = {
    'fake-link': {
        title: '🔗 Link Palsu - "FOTO VIRAL"',
        html: `
            <div style="text-align:center">
                <h1 style="color:#ff4444; font-size:3rem; margin-bottom:20px">📸</h1>
                <h2 style="color:#ff6666; margin-bottom:15px">FOTO VIRAL 2024!</h2>
                <div style="background:#333; padding:20px; border-radius:10px; margin-bottom:20px">
                    <p style="color:#00ff00; font-family:monospace">Mengunduh gambar... 69%</p>
                    <div style="width:100%; height:20px; background:#000; border-radius:10px; overflow:hidden">
                        <div style="width:69%; height:100%; background:#ff4444; animation:loading 2s infinite"></div>
                    </div>
                </div>
                <p style="color:#ccc">Tunggu 5 detik untuk melihat foto...</p>
                <p style="color:#ff4444; font-size:2rem; margin-top:20px; animation:pulse 1s infinite">😂 PRANK!</p>
            </div>
        `
    },
    'windows-update': {
        title: '🪟 Fake Windows Update',
        html: `
            <div style="background:#0066cc; padding:30px; border-radius:10px; color:white">
                <h2 style="margin-bottom:20px">🔧 Windows Update</h2>
                <p style="margin-bottom:15px">Mengupdate Windows... Jangan matikan komputer!</p>
                <div style="background:#000; padding:15px; border-radius:5px; margin-bottom:20px">
                    <p style="color:#00ff00; font-family:monospace; margin-bottom:10px">Proses: 99% selesai</p>
                    <div style="width:100%; height:20px; background:#333; border-radius:10px">
                        <div style="width:99%; height:100%; background:#00ff00; animation:loading 3s infinite"></div>
                    </div>
                </div>
                <p style="font-size:0.9rem; opacity:0.8">Menginstal update 69 dari 69...</p>
                <p style="color:#ffcc00; font-size:2rem; margin-top:20px">⏳ Loading mulu...</p>
            </div>
        `
    },
    'virus-warning': {
        title: '🦠 Virus Warning',
        html: `
            <div style="background:#000; padding:30px; border-radius:10px; border:3px solid #ff0000">
                <h1 style="color:#ff0000; font-size:2.5rem; margin-bottom:20px">⚠️ PERINGATAN!</h1>
                <div style="background:#330000; padding:20px; border-radius:5px; margin-bottom:20px">
                    <p style="color:#ff6666; margin-bottom:10px">🔴 99 VIRUS TERDETEKSI!</p>
                    <p style="color:#ccc; margin-bottom:5px">• Trojan.Generic.69</p>
                    <p style="color:#ccc; margin-bottom:5px">• Ransom.WannaCry</p>
                    <p style="color:#ccc; margin-bottom:5px">• Spyware.Keylogger</p>
                    <p style="color:#ccc; margin-bottom:10px">• Dan 96 virus lainnya...</p>
                </div>
                <div style="display:flex; gap:10px; justify-content:center">
                    <button style="background:#00aa00; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer">HAPUS VIRUS</button>
                    <button style="background:#ff0000; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer">ABAIKAN</button>
                </div>
                <p style="color:#ffcc00; margin-top:20px; animation:pulse 1s infinite">💀 PANIK? INI CUMA PRANK!</p>
            </div>
        `
    },
    'camera-on': {
        title: '📸 Fake Camera On',
        html: `
            <div style="background:#1a1a1a; padding:30px; border-radius:10px; text-align:center">
                <div style="background:#000; padding:20px; border-radius:50%; width:100px; height:100px; margin:0 auto 20px; display:flex; align-items:center; justify-content:center">
                    <span style="color:#ff0000; font-size:3rem">🔴</span>
                </div>
                <h2 style="color:#ff6666; margin-bottom:10px">KAMERA MENYALA!</h2>
                <p style="color:#ccc; margin-bottom:20px">Lensa depan aktif. Jangan bergerak!</p>
                <div style="background:#333; padding:15px; border-radius:5px; margin-bottom:20px">
                    <p style="color:#00ff00; font-family:monospace">Mengirim video ke server...</p>
                    <p style="color:#00ff00; font-family:monospace">Upload: 87%</p>
                </div>
                <p style="color:#ff0000; font-size:1.5rem">😂 JUST PRANK BRO!</p>
            </div>
        `
    },
    'hacker-screen': {
        title: '💻 Fake Hacker Screen',
        html: `
            <div style="background:#0a0a0a; padding:30px; border-radius:10px; font-family:monospace">
                <div style="color:#00ff00; margin-bottom:20px">
                    <p>$ sudo hack --target korban</p>
                    <p>$ Mengakses database... <span style="color:#ffcc00">[OK]</span></p>
                    <p>$ Mengambil data... 69%</p>
                    <p style="color:#ff0000">⚠️ FIREWALL TERDETEKSI!</p>
                    <p>$ Membypass keamanan...</p>
                </div>
                <div style="background:#003300; padding:15px; border-radius:5px; margin-bottom:20px">
                    <p style="color:#ff6666">📁 FILE DIENKRIPSI:</p>
                    <p style="color:#ccc">- foto_pribadi.zip</p>
                    <p style="color:#ccc">- chat_wa.db</p>
                    <p style="color:#ccc">- password.txt</p>
                </div>
                <p style="color:#00ff00; font-size:1.2rem; animation:blink 1s infinite">_</p>
                <p style="color:#ff0000; margin-top:20px">🔥 PRANK! GA ADA YANG DIHACK!</p>
            </div>
        `
    },
    'download-progress': {
        title: '⬇️ Fake Download Progress',
        html: `
            <div style="background:#1a1a1a; padding:30px; border-radius:10px">
                <h2 style="color:#ff6666; margin-bottom:20px">📥 MENGUNDUH...</h2>
                <div style="margin-bottom:20px">
                    <p style="color:#ccc; margin-bottom:10px">file: video_viral_2024.mp4 (2.1 GB)</p>
                    <div style="width:100%; height:30px; background:#333; border-radius:15px; overflow:hidden">
                        <div style="width:99.9%; height:100%; background:#0066cc; animation:loading 2s infinite"></div>
                    </div>
                    <p style="color:#00ff00; text-align:right; margin-top:5px">99.9% - 2 detik lagi</p>
                </div>
                <div style="background:#000; padding:15px; border-radius:5px; margin-bottom:20px">
                    <p style="color:#ffcc00">⚠️ Kecepatan menurun... mempercepat koneksi...</p>
                    <p style="color:#ffcc00">⚠️ Error: waktu tidak cukup</p>
                </div>
                <div style="text-align:center">
                    <p style="color:#ff6666; font-size:2rem; animation:pulse 1s infinite">⏳</p>
                    <p style="color:#ccc">Loading forever...</p>
                </div>
            </div>
        `
    }
};

// ===========================================
// ELEMENTS
// ===========================================
let currentPrank = 'fake-link';
let currentLink = '';

// Generate random numbers
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate link
function generateLink() {
    const path = document.getElementById('customPath').value || 'foto-viral';
    const domain = document.getElementById('domainSelect').value;
    const randomId = randomInt(100, 999);
    const cleanPath = path.toLowerCase().replace(/[^a-z0-9]/g, '-');
    currentLink = `https://${domain}/${cleanPath}-${randomId}`;
    document.getElementById('generatedLink').textContent = currentLink;
    return currentLink;
}

// Update preview
function updatePreview() {
    const preview = document.getElementById('previewFrame');
    if (pranks[currentPrank]) {
        preview.innerHTML = pranks[currentPrank].html;
        
        // Add animation styles if not exists
        if (!document.getElementById('prankStyles')) {
            const style = document.createElement('style');
            style.id = 'prankStyles';
            style.textContent = `
                @keyframes loading {
                    0% { width: 0%; }
                    50% { width: 100%; }
                    100% { width: 0%; }
                }
                @keyframes pulse {
                    0%,100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                @keyframes blink {
                    0%,100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Copy link
function copyLink() {
    generateLink();
    navigator.clipboard.writeText(currentLink).then(() => {
        alert('✅ Link copied! Tinggal kirim ke korban!');
    }).catch(() => {
        alert('❌ Gagal copy, copy manual aja bos!');
    });
}

// Share functions
function shareWA() {
    generateLink();
    const text = encodeURIComponent(`Eh liat ini dulu, lagi viral nih!\n${currentLink}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareIG() {
    generateLink();
    const text = encodeURIComponent(`Viral banget! ${currentLink}`);
    alert('Copy link dulu, paste di IG story ya bos! 📷');
}

function shareTG() {
    generateLink();
    const text = encodeURIComponent(`Prank nih! ${currentLink}`);
    window.open(`https://t.me/share/url?url=${currentLink}&text=${text}`, '_blank');
}

function shareX() {
    generateLink();
    const text = encodeURIComponent(`Gila sih ini! ${currentLink}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

// ===========================================
// EVENT LISTENERS
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Prank card clicks
    document.querySelectorAll('.prank-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.prank-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentPrank = this.dataset.prank;
            updatePreview();
            
            // Update custom path berdasarkan prank
            const input = document.getElementById('customPath');
            if (currentPrank === 'fake-link') input.value = 'foto-viral';
            else if (currentPrank === 'windows-update') input.value = 'update-windows';
            else if (currentPrank === 'virus-warning') input.value = 'virus-detected';
            else if (currentPrank === 'camera-on') input.value = 'camera-access';
            else if (currentPrank === 'hacker-screen') input.value = 'hacked-warning';
            else if (currentPrank === 'download-progress') input.value = 'download-file';
            
            generateLink();
        });
    });

    // Select first card by default
    document.querySelector('[data-prank="fake-link"]').classList.add('active');
    updatePreview();

    // Input events
    document.getElementById('customPath').addEventListener('input', generateLink);
    document.getElementById('domainSelect').addEventListener('change', generateLink);

    // Button events
    document.getElementById('copyLink').addEventListener('click', copyLink);
    document.getElementById('shareWA').addEventListener('click', shareWA);
    document.getElementById('shareIG').addEventListener('click', shareIG);
    document.getElementById('shareTG').addEventListener('click', shareTG);
    document.getElementById('shareX').addEventListener('click', shareX);

    // Premium button
    document.querySelector('.premium-btn').addEventListener('click', function() {
        alert('🔥 PREMIUM: Hubungi @kratos_reload di Telegram! Hanya Rp 20K!');
    });

    // Premium items
    document.querySelectorAll('.premium-item').forEach(item => {
        item.addEventListener('click', function() {
            alert('💎 Fitur premium! Upgrade dulu ya bos!');
        });
    });

    // Gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            alert('📸 Klik preview untuk liat pranknya! (Demo)');
        });
    });

    // Generate initial link
    generateLink();

    // Update stats randomly (just for show)
    setInterval(() => {
        document.getElementById('totalPrank').textContent = randomInt(12000, 13000);
        document.getElementById('todayPrank').textContent = randomInt(600, 800);
        document.getElementById('victims').textContent = randomInt(9000, 10000);
    }, 5000);
});

// ===========================================
// PREVIEW MODAL (for extra effect)
// ===========================================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('dblclick', function() {
        const modal = document.getElementById('previewModal');
        const modalPreview = document.getElementById('modalPreview');
        const title = document.getElementById('modalTitle');
        
        title.textContent = 'Preview Prank';
        modalPreview.innerHTML = pranks['fake-link'].html;
        modal.style.display = 'flex';
    });
});

document.getElementById('closePreview').addEventListener('click', function() {
    document.getElementById('previewModal').style.display = 'none';
});

window.addEventListener('click', function(e) {
    const modal = document.getElementById('previewModal');
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('copyLinkModal').addEventListener('click', function() {
    copyLink();
    document.getElementById('previewModal').style.display = 'none';
});

// ===========================================
// EXTRA: Fake loading untuk efek
// ===========================================
console.log('🔥 PRANK GENERATOR READY! Siap bikin korban panik!');
