/* ===========================================
   STYLE CSS - TEMA NERAKA DARAH
   =========================================== */

/* RESET & BASE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Creepster&family=Roboto:wght@300;400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    background: #0a0000;
    color: #ffcccc;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

/* BLOOD FOG ANIMATION */
.blood-fog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(139, 0, 0, 0.15) 0%, transparent 60%),
                repeating-linear-gradient(45deg, rgba(139, 0, 0, 0.05) 0px, rgba(139, 0, 0, 0.05) 10px, transparent 10px, transparent 20px);
    pointer-events: none;
    z-index: -1;
    animation: fogMove 20s ease-in-out infinite;
}

@keyframes fogMove {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

/* CONTAINER */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* HEADER */
.header {
    text-align: center;
    margin-bottom: 30px;
    padding: 30px;
    background: linear-gradient(135deg, rgba(20, 0, 0, 0.9), rgba(50, 0, 0, 0.9));
    border: 2px solid #8b0000;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(139, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

.header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.1) 50%, transparent 70%);
    animation: shine 5s infinite;
}

@keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

/* GLITCH EFFECT */
.glitch {
    font-family: 'Creepster', cursive;
    font-size: 4rem;
    color: #ff0000;
    text-shadow: 3px 3px 0 #8b0000, -3px -3px 0 #330000;
    position: relative;
    animation: glitch 1s infinite;
    margin-bottom: 10px;
}

@keyframes glitch {
    0%, 100% { transform: skew(0deg); }
    95% { transform: skew(0deg); }
    96% { transform: skew(10deg); }
    97% { transform: skew(-10deg); }
    98% { transform: skew(5deg); }
    99% { transform: skew(-5deg); }
}

.subtitle {
    font-size: 1.2rem;
    color: #ff6666;
    font-style: italic;
}

/* STATS CONTAINER */
.stats-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.stat-card {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #8b0000;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139, 0, 0, 0.5);
    border-color: #ff0000;
}

.stat-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff4444;
    text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
    line-height: 1.2;
}

.stat-label {
    font-size: 0.9rem;
    color: #ff9999;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* INPUT CARD */
.input-card {
    background: rgba(20, 0, 0, 0.95);
    border: 2px solid #8b0000;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 30px rgba(139, 0, 0, 0.5);
}

.card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
}

.card-title h2 {
    color: #ff6666;
    font-size: 1.8rem;
    text-align: center;
}

.title-icon {
    font-size: 2rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* TEXTAREA */
textarea {
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #8b0000;
    border-radius: 15px;
    color: #ffcccc;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 25px;
    resize: vertical;
    transition: all 0.3s;
}

textarea:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.9);
}

/* FEATURE SECTION */
.feature-section {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 25px;
}

.feature-section h3 {
    color: #ff6666;
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(139, 0, 0, 0.2);
    border: 1px solid #8b0000;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.feature-item:hover {
    background: rgba(139, 0, 0, 0.4);
    transform: translateX(5px);
    border-color: #ff0000;
}

.feature-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #8b0000;
    cursor: pointer;
}

.feature-icon {
    font-size: 1.3rem;
}

.feature-text {
    color: #ffcccc;
    font-size: 0.95rem;
}

/* BUTTON */
.test-btn {
    position: relative;
    width: 100%;
    padding: 20px;
    background: linear-gradient(45deg, #8b0000, #330000);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.test-btn:hover {
    background: linear-gradient(45deg, #a52a2a, #8b0000);
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(255, 0, 0, 0.7);
}

.btn-blood {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(139, 0, 0, 0.3) 100%);
    animation: bloodDrip 2s infinite;
    pointer-events: none;
}

@keyframes bloodDrip {
    0% { transform: translateY(-100%); }
    50%, 100% { transform: translateY(0); }
}

/* RESULT CARD */
.result-card {
    background: rgba(20, 0, 0, 0.95);
    border: 2px solid #8b0000;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 40px rgba(139, 0, 0, 0.5);
    animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 2px dashed #8b0000;
}

.result-title {
    color: #ff6666;
    font-size: 2rem;
    font-family: 'Creepster', cursive;
}

.rating-badge {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b0000, #330000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid #ff0000;
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
    animation: pulse 2s infinite;
}

.rating-number {
    font-size: 3.5rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.rating-max {
    font-size: 1rem;
    color: #ff9999;
}

/* INFO GRID */
.info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 25px;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 15px;
}

.info-item {
    text-align: center;
}

.info-label {
    display: block;
    font-size: 0.8rem;
    color: #ff9999;
    text-transform: uppercase;
    margin-bottom: 5px;
}

.info-value {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ff6666;
}

/* ANALYSIS SECTION */
.analysis-section, .suggestion-section, .chart-section, .detail-scores {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid #8b0000;
}

.analysis-section h3, .suggestion-section h3, .chart-section h3, .detail-scores h3 {
    color: #ff6666;
    margin-bottom: 15px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 8px;
}

.analysis-text {
    line-height: 1.8;
    color: #ffcccc;
    font-size: 1rem;
}

.suggestion-list {
    list-style: none;
}

.suggestion-list li {
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    color: #ffcccc;
    line-height: 1.5;
}

.suggestion-list li::before {
    content: '💀';
    position: absolute;
    left: 0;
    color: #ff0000;
}

/* SCORES GRID */
.scores-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.score-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: rgba(139, 0, 0, 0.2);
    border-radius: 8px;
    font-size: 0.95rem;
}

.score-label {
    color: #ff9999;
}

.score-value {
    font-weight: bold;
    color: #ff6666;
}

/* QUOTE */
.quote-container {
    padding: 25px;
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
    border-radius: 15px;
    margin-bottom: 25px;
    text-align: center;
    border: 1px dashed #8b0000;
}

.quote-text {
    color: #ff9999;
    font-size: 1.1rem;
    font-style: italic;
    line-height: 1.6;
}

/* ACTION BUTTONS */
.action-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.secondary-btn {
    padding: 15px;
    background: transparent;
    border: 2px solid #8b0000;
    border-radius: 10px;
    color: #ffcccc;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.secondary-btn:hover {
    background: #8b0000;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 0, 0, 0.5);
}

/* HISTORY CARD */
.history-card {
    background: rgba(20, 0, 0, 0.9);
    border: 2px solid #8b0000;
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 30px;
}

.history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.history-header h3 {
    color: #ff6666;
    font-size: 1.4rem;
}

.history-count {
    background: #8b0000;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-weight: bold;
}

.history-list {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
}

.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #330000;
    transition: all 0.3s;
}

.history-item:hover {
    background: rgba(139, 0, 0, 0.2);
    transform: translateX(5px);
}

.history-prompt {
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffcccc;
}

.history-rating {
    font-weight: bold;
    color: #ff4444;
    font-size: 1.2rem;
    padding: 3px 10px;
    background: rgba(139, 0, 0, 0.3);
    border-radius: 15px;
}

.clear-btn {
    width: 100%;
    padding: 15px;
    background: transparent;
    border: 2px solid #8b0000;
    border-radius: 10px;
    color: #ff9999;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.clear-btn:hover {
    background: #8b0000;
    color: white;
    box-shadow: 0 0 20px rgba(139, 0, 0, 0.7);
}

/* FOOTER */
.footer {
    text-align: center;
    padding: 30px;
    color: #ff6666;
    border-top: 1px solid #8b0000;
    margin-top: 20px;
}

.footer-small {
    font-size: 0.9rem;
    color: #ff9999;
    margin-top: 10px;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: linear-gradient(135deg, #1a0000, #330000);
    border: 3px solid #8b0000;
    border-radius: 25px;
    padding: 35px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 0 70px rgba(139, 0, 0, 0.7);
    animation: modalPop 0.4s ease-out;
}

@keyframes modalPop {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 2.5rem;
    color: #ff6666;
    cursor: pointer;
    transition: all 0.3s;
}

.close-modal:hover {
    color: #ff0000;
    transform: scale(1.2);
}

.modal-title {
    color: #ff6666;
    font-size: 2rem;
    margin-bottom: 25px;
    text-align: center;
    font-family: 'Creepster', cursive;
}

.modal-scores {
    margin-bottom: 25px;
}

.modal-score-item {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #8b0000;
    font-size: 1.1rem;
}

.modal-score-item:last-child {
    border-bottom: none;
}

.modal-score-label {
    color: #ff9999;
}

.modal-score-value {
    font-weight: bold;
    color: #ff6666;
}

.modal-chart {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

/* SCROLLBAR */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1a0000;
}

::-webkit-scrollbar-thumb {
    background: #8b0000;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #ff0000;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .stats-container {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .info-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .action-buttons {
        grid-template-columns: 1fr;
    }
    
    .glitch {
        font-size: 2.5rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
    }
    
    .scores-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .stats-container {
        grid-template-columns: 1fr;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
}
