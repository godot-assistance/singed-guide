// Singed Guide - Main Script
// Matchup data loaded from matchups-complete.js
// OTP data loaded from otp-builds.js

// ============ MATCHUP SECTION ============

let filteredMatchups = [...matchups];

function init() {
    updateStats();
    renderMatchups();
    renderOtpSection();

    document.getElementById('searchInput').addEventListener('input', filterMatchups);
    document.getElementById('difficultyFilter').addEventListener('change', filterMatchups);
}

function getDifficultyCategory(diff) {
    if (diff === 'free' || diff === 'turbo free') return 'free';
    if (diff === 'playable' || diff === 'coinflip') return 'playable';
    if (diff === 'cancer' || diff === 'turbo cancer') return 'cancer';
    if (diff === 'unplayable') return 'unplayable';
    return 'playable';
}

function getDifficultyLabel(diff) {
    const labels = {
        'free': '😎 Free', 'turbo free': '🤣 Turbo Free',
        'playable': '🎲 Playable', 'coinflip': '🪙 Coinflip',
        'cancer': '☠️ Cancer', 'turbo cancer': '💀 Turbo Cancer',
        'unplayable': '🚫 Unplayable'
    };
    return labels[diff] || diff;
}

function updateStats() {
    const free = matchups.filter(m => getDifficultyCategory(m.difficulty) === 'free').length;
    const coinflip = matchups.filter(m => getDifficultyCategory(m.difficulty) === 'playable').length;
    const cancer = matchups.filter(m => getDifficultyCategory(m.difficulty) === 'cancer' || getDifficultyCategory(m.difficulty) === 'unplayable').length;

    document.getElementById('freeCount').textContent = free;
    document.getElementById('coinflipCount').textContent = coinflip;
    document.getElementById('cancerCount').textContent = cancer;
}

function renderMatchups() {
    const grid = document.getElementById('matchupGrid');
    grid.innerHTML = '';

    filteredMatchups.forEach(matchup => {
        const card = document.createElement('div');
        const cat = getDifficultyCategory(matchup.difficulty);
        card.className = `matchup-card ${cat}`;
        card.onclick = () => showMatchupDetails(matchup);

        card.innerHTML = `
            <div class="matchup-icon">${matchup.icon}</div>
            <div class="matchup-name">${matchup.name}</div>
            <span class="matchup-difficulty ${cat}">
                ${getDifficultyLabel(matchup.difficulty)}
            </span>
        `;

        grid.appendChild(card);
    });

    if (filteredMatchups.length === 0) {
        grid.innerHTML = '<p style="text-align:center; color: #999; padding: 40px;">No matchups found. Try different filters!</p>';
    }
}

function filterMatchups() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const difficultyFilter = document.getElementById('difficultyFilter').value;

    filteredMatchups = matchups.filter(matchup => {
        const matchesSearch = matchup.name.toLowerCase().includes(searchTerm);
        const matchesDifficulty = difficultyFilter === 'all' || getDifficultyCategory(matchup.difficulty) === difficultyFilter || matchup.difficulty === difficultyFilter;
        return matchesSearch && matchesDifficulty;
    });

    renderMatchups();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('difficultyFilter').value = 'all';
    filteredMatchups = [...matchups];
    renderMatchups();
}

function generateRuneTreeHTML(runeSetup) {
    if (!runeSetup) return '';

    return `
        <div class="rune-trees">
            <div class="rune-tree">
                <h4 class="tree-name">${runeSetup.primary.tree}</h4>
                <div class="rune-row keystone">
                    <span class="rune-icon">🔸</span>
                    <span class="rune-name">${runeSetup.primary.keystone}</span>
                </div>
                <div class="rune-row">
                    <span class="rune-icon">•</span>
                    <span class="rune-name">${runeSetup.primary.slot1}</span>
                </div>
                <div class="rune-row">
                    <span class="rune-icon">•</span>
                    <span class="rune-name">${runeSetup.primary.slot2}</span>
                </div>
                <div class="rune-row">
                    <span class="rune-icon">•</span>
                    <span class="rune-name">${runeSetup.primary.slot3}</span>
                </div>
            </div>

            <div class="rune-tree">
                <h4 class="tree-name">${runeSetup.secondary.tree}</h4>
                <div class="rune-row">
                    <span class="rune-icon">•</span>
                    <span class="rune-name">${runeSetup.secondary.slot1}</span>
                </div>
                <div class="rune-row">
                    <span class="rune-icon">•</span>
                    <span class="rune-name">${runeSetup.secondary.slot2}</span>
                </div>
            </div>

            <div class="stat-shards">
                <h4 class="tree-name">Stat Shards</h4>
                ${runeSetup.shards.map(shard => `
                    <div class="rune-row shard">
                        <span class="rune-icon">⬡</span>
                        <span class="rune-name">${shard}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showMatchupDetails(matchup) {
    const modal = document.getElementById('matchupModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <div style="font-size: 4rem;">${matchup.icon}</div>
            <h2>Singed vs ${matchup.name}</h2>
            <span class="matchup-difficulty ${getDifficultyCategory(matchup.difficulty)}">
                ${getDifficultyLabel(matchup.difficulty)}
            </span>
        </div>

        <div class="modal-section">
            <h3>📋 Key Points</h3>
            <p>${matchup.keyPoints}</p>
        </div>

        ${matchup.summonerSpells ? `
        <div class="modal-section">
            <h3>⚡ Summoner Spells</h3>
            <p><strong>${matchup.summonerSpells.join(' + ')}</strong></p>
        </div>
        ` : ''}

        ${matchup.startingItem ? `
        <div class="modal-section">
            <h3>🛡️ Starting Items</h3>
            <p><strong>${matchup.startingItem}</strong></p>
        </div>
        ` : ''}

        ${matchup.coreItems ? `
        <div class="modal-section">
            <h3>🔨 Core Build (First 3 Items)</h3>
            <p><strong>${matchup.coreItems.join(' → ')}</strong></p>
        </div>
        ` : ''}

        ${matchup.runeSetup ? `
        <div class="modal-section">
            <h3>📜 Recommended Runes</h3>
            ${generateRuneTreeHTML(matchup.runeSetup)}
            ${matchup.runes ? `<p class="rune-notes">${matchup.runes}</p>` : ''}
        </div>
        ` : matchup.runes ? `
        <div class="modal-section">
            <h3>📜 Recommended Runes</h3>
            <p>${matchup.runes}</p>
        </div>
        ` : ''}

        ${matchup.laningPhase ? `
        <div class="modal-section">
            <h3>🌱 Laning Phase Strategy</h3>
            <p>${matchup.laningPhase}</p>
        </div>
        ` : ''}

        <div class="modal-section">
            <h3>💡 Tips & Strategy</h3>
            <ul>
                ${matchup.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('matchupModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('matchupModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ============ OTP BUILDS SECTION ============

function parseRankLP(rankStr) {
    const tierWeights = { 'Challenger': 3, 'GrandMaster': 2, 'Master': 1 };
    const tierMatch = rankStr.match(/^(Challenger|GrandMaster|Master)/);
    const lpMatch = rankStr.match(/(\d+)\s*LP/);
    const tier = tierMatch ? tierMatch[1] : 'Master';
    const lp = lpMatch ? parseInt(lpMatch[1]) : 0;
    return (tierWeights[tier] || 0) * 10000 + lp;
}

function getRankTier(rankStr) {
    if (rankStr.startsWith('Challenger')) return 'challenger';
    if (rankStr.startsWith('GrandMaster')) return 'grandmaster';
    return 'master';
}

function getServerFlag(server) {
    const flags = { 'KR': '🇰🇷', 'NA': '🇺🇸', 'EUW': '🇪🇺', 'LAS': '🌎', 'VN': '🇻🇳' };
    return flags[server] || '🌐';
}

function renderOtpSection() {
    if (typeof window.otpBuilds === 'undefined') return;
    renderConsensus();
    renderOtpGrid();
    renderSpicyPicks();
}

function renderConsensus() {
    const container = document.getElementById('buildConsensus');
    if (!container || !window.buildConsensus) return;

    container.innerHTML = `
        <div class="consensus-card">
            <h3>🧬 WHAT ALL 17 OTPS AGREE ON</h3>
            <p style="text-align:center; color:#999; margin-bottom:20px; font-size:0.9rem;">When every cracked Singed player on the planet perma runs the same setup, you don't question it. You lock it in.</p>
            <div class="consensus-grid">
                <div class="consensus-item">
                    <div class="label">🔸 Keystone</div>
                    <div class="value">Conqueror (100%)</div>
                </div>
                <div class="consensus-item">
                    <div class="label">🌀 Secondary</div>
                    <div class="value">Nimbus Cloak + Celerity</div>
                </div>
                <div class="consensus-item">
                    <div class="label">⚗️ Core Build</div>
                    <div class="value">Liandry's → Rylai's → Deadman's</div>
                </div>
                <div class="consensus-item">
                    <div class="label">👟 Boots</div>
                    <div class="value">Boots of Swiftness</div>
                </div>
                <div class="consensus-item">
                    <div class="label">⚡ Summoners</div>
                    <div class="value">Ghost + Flash</div>
                </div>
                <div class="consensus-item">
                    <div class="label">⬡ Shards</div>
                    <div class="value">2× AP + Scaling HP</div>
                </div>
            </div>
        </div>
    `;
}

function renderOtpGrid() {
    const grid = document.getElementById('otpGrid');
    if (!grid || !window.otpBuilds) return;

    const sorted = [...window.otpBuilds].sort((a, b) => parseRankLP(b.rank) - parseRankLP(a.rank));

    grid.innerHTML = '';
    sorted.forEach((otp, index) => {
        const tier = getRankTier(otp.rank);
        const card = document.createElement('div');
        card.className = `otp-card ${tier}`;
        card.onclick = () => showOtpDetails(otp);

        const cleanRank = otp.rank.replace(/\s*\(#\d+.*?\)/, '');

        card.innerHTML = `
            <div class="otp-rank-num">${index + 1}</div>
            <span class="server-badge server-${otp.server}">${getServerFlag(otp.server)} ${otp.server}</span>
            <div class="otp-name">${otp.name}</div>
            <div class="otp-rank">${cleanRank}</div>
            <div class="otp-stats">
                <span class="wr">${otp.winRate} WR</span>
                <span>${otp.gamesPlayed} games</span>
            </div>
            <span class="playstyle-tag">${otp.playstyle}</span>
        `;

        grid.appendChild(card);
    });
}

function renderSpicyPicks() {
    const container = document.getElementById('spicyPicks');
    if (!container || !window.spicyPicks) return;

    const spicyNames = {
        'unsealed_spellbook': '📖 Unsealed Spellbook',
        'cosmic_drive_rush': '🌀 Cosmic Drive Rush',
        'movespeed_shard': '💨 Movespeed Shard',
        'deathcap_rush': '🎩 Deathcap Rush',
        'phase_rush_mandatory': '⚡ Phase Rush (Mandatory)'
    };

    container.innerHTML = `
        <div class="spicy-card">
            <h3>🌶️ SPICY PICKS — Minishcap1 Specials</h3>
            <p style="text-align:center; color:#999; margin-bottom:20px; font-size:0.9rem;">Ego picks from the cracked content creator. Not for the faint of heart. If you turbo grief with these, that's a you diff.</p>
            <div class="spicy-grid">
                ${Object.entries(window.spicyPicks).map(([key, pick]) => `
                    <div class="spicy-item">
                        <h4>${spicyNames[key] || key}</h4>
                        <p>${pick.description}</p>
                        <div class="spicy-when">📌 When: ${pick.when}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showOtpDetails(otp) {
    const modal = document.getElementById('matchupModal');
    const modalBody = document.getElementById('modalBody');

    const tier = getRankTier(otp.rank);
    const tierColors = { 'challenger': '#e74c3c', 'grandmaster': '#9b59b6', 'master': '#5fa765' };
    const tierColor = tierColors[tier] || '#5fa765';

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="server-badge server-${otp.server}" style="font-size:1rem; padding:5px 12px;">${getServerFlag(otp.server)} ${otp.server}</span>
            <h2 style="color:${tierColor}">${otp.name}</h2>
            <div style="color:#c8ff8e; font-size:1.1rem; margin:5px 0;">${otp.rank}</div>
            <div style="color:#999; font-size:0.95rem;">${otp.winRate} WR · ${otp.gamesPlayed} games · ${otp.playstyle}</div>
        </div>

        <div class="modal-section">
            <h3>🏷️ Signature</h3>
            <p>${otp.signature}</p>
        </div>

        <div class="modal-section">
            <h3>⚡ Summoner Spells</h3>
            <p><strong>${otp.build.summonerSpells.join(' + ')}</strong></p>
            ${otp.build.alternativeSumms ? `<p style="color:#999; font-size:0.9rem;">Alt: ${otp.build.alternativeSumms.join(' + ')}</p>` : ''}
        </div>

        <div class="modal-section">
            <h3>🛡️ Starting Item</h3>
            <p><strong>${otp.build.startingItem}</strong></p>
            ${otp.build.alternativeStart ? `<p style="color:#999; font-size:0.9rem;">Alt: ${otp.build.alternativeStart}</p>` : ''}
        </div>

        <div class="modal-section">
            <h3>⚗️ Core Build</h3>
            <div class="items">
                ${otp.build.coreItems.map(item => `<span class="item">${item}</span>`).join('')}
            </div>
            <p style="color:#999; font-size:0.9rem; margin-top:8px;">Boots: <strong style="color:#e0e0e0;">${otp.build.boots}</strong></p>
        </div>

        <div class="modal-section">
            <h3>🔧 Situational Items</h3>
            <div class="items">
                ${otp.build.situationalItems.map(item => `<span class="item" style="border-left-color:#f39c12;">${item}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>📜 Runes</h3>
            ${generateRuneTreeHTML(otp.build.runeSetup)}
            ${otp.build.runeSetup.alternativePrimary ? `
                <div style="margin-top:15px;">
                    <h4 style="color:#f39c12; margin-bottom:10px;">⚡ Alternative Primary (Situational)</h4>
                    ${generateRuneTreeHTML({
                        primary: otp.build.runeSetup.alternativePrimary,
                        secondary: otp.build.runeSetup.secondary,
                        shards: otp.build.runeSetup.shards
                    })}
                </div>
            ` : ''}
        </div>

        <div class="modal-section">
            <h3>📝 Notes</h3>
            <p>${otp.notes}</p>
        </div>

        <div style="text-align:center; margin-top:20px;">
            <a href="${otp.profileUrl}" target="_blank" rel="noopener" class="otp-opgg-link">📊 View on OP.GG →</a>
        </div>
    `;

    modal.style.display = 'block';
}

// ============ INITIALIZE ============

document.addEventListener('DOMContentLoaded', init);
