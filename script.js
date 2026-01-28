// Matchup data loaded from matchups-complete.js
/* OLD DATA - NOW IN matchups-complete.js
const matchups = [
    // Easy Matchups
    {
        name: "Cho'Gath",
        difficulty: "easy",
        icon: "🦖",
        laningPhase: "Start Doran's Ring or Dark Seal. Level 1-2, just last hit and poke with poison when safe. At level 3, start proxy farming between his towers - he can't catch you and his waveclear is too slow to punish. If he tries to follow, just keep running circles. Use your W to slow him if he gets close. Don't fight him directly unless you have a huge lead. Your goal is to deny him farm and make him choose between CS and chasing you. After first back, get boots and keep proxying. He'll be stuck under tower while you draw jungle pressure and roam.",
        tips: [
            "You outrun his Q every time. Save your W for when he silences you.",
            "Proxy early - he can't chase you and waveclear is slow.",
            "Build Liandry's - his HP stacking makes burn damage insane.",
            "Don't fight him post-6 unless you're ahead. His R is true damage."
        ],
        keyPoints: "Easy to proxy against. Can't catch you. Your poison wears him down over time."
    },
    {
        name: "Malphite",
        difficulty: "easy",
        icon: "🪨",
        tips: [
            "He can't chase you. Proxy whenever his R is down.",
            "Rush Liandry's - armor doesn't stop magic damage.",
            "Bait his R, then run away laughing.",
            "Post-6, don't clump with team when he has R."
        ],
        keyPoints: "Immobile tank. Free proxy. Build burn damage and run circles around him."
    },
    {
        name: "Ornn",
        difficulty: "easy",
        icon: "🔨",
        tips: [
            "Dodge his Q+E combo by running perpendicular.",
            "Proxy between towers - he can't leave lane long.",
            "Your poison outdamages his %HP damage.",
            "Save your flip for when he ults - you can fling him away from team."
        ],
        keyPoints: "Another tank you outscale. Proxy farm and laugh."
    },
    {
        name: "Maokai",
        difficulty: "easy",
        icon: "🌳",
        tips: [
            "Dodge his W root with your movement speed.",
            "He pushes wave naturally - easy to proxy.",
            "Build grievous wounds if he's healing too much.",
            "Your poison clears his saplings."
        ],
        keyPoints: "Can't stop you from proxying. Free matchup."
    },
    
    // Skill Matchups
    {
        name: "Darius",
        difficulty: "skill",
        icon: "🪓",
        laningPhase: "This is a survival lane early. Take Doran's Shield and Second Wind. Levels 1-3, DO NOT fight him. He wins every trade. Just last hit with Q poison and give up CS if needed. Watch his E cooldown - when it's down, you can proxy safely. If he uses E on minions, that's your window. Post-6, respect his R execute. Your job is to survive early, get items, and become more useful in teamfights. Don't try to 1v1 him unless you're significantly ahead. Use your speed to proxy and roam - make plays elsewhere while he's stuck farming.",
        tips: [
            "NEVER fight him level 1-3. He wins all-ins.",
            "Proxy when his E is down - he can't pull you.",
            "Use W to slow him when he tries to Q outer ring.",
            "If he has 4-5 stacks, RUN. Don't let him get passive."
        ],
        keyPoints: "Respect his early game. Proxy when possible. Don't give him stacks."
    },
    {
        name: "Garen",
        difficulty: "skill",
        icon: "⚔️",
        tips: [
            "Your poison stops his passive heal.",
            "Flip him away when he spins (Q).",
            "Build armor early if he's dominating.",
            "Save your R for when he ults you - the heal can save you."
        ],
        keyPoints: "Trade your poison for his passive. Don't let him silence+spin for free."
    },
    {
        name: "Sett",
        difficulty: "skill",
        icon: "👊",
        tips: [
            "Dodge to the side when he winds up W.",
            "Don't fight in his E stun range.",
            "Proxy or poke - never extended trades.",
            "Your W stops his punch follow-up."
        ],
        keyPoints: "Respect his true damage. Quick trades only."
    },
    {
        name: "Mordekaiser",
        difficulty: "skill",
        icon: "⚒️",
        tips: [
            "Run out of his passive circle ASAP.",
            "Rush Rylai's to kite in his R.",
            "In his Death Realm, run circles and poison.",
            "Buy QSS if you're hard carrying."
        ],
        keyPoints: "Kite his passive. His R is a skill check - can you dodge Q in there?"
    },
    {
        name: "Nasus",
        difficulty: "skill",
        icon: "🐕",
        laningPhase: "This is a race against time. Your mission: DENY HIM STACKS. Start proxying as early as level 2-3. Run between his towers and clear waves before he can stack them. Every minion you deny is a stack he doesn't get. He will call for jungle help - be ready to escape. If he Withers you, use your R to heal and speed away. Post-6, respect his R - he becomes fast and tanky. Continue proxying but be more careful. Your goal is to make him 100 stacks behind by 10 minutes. If you succeed, you've won lane even if you're 0/2. A weak Nasus is a useless Nasus.",
        tips: [
            "Proxy hard early - deny his stacks.",
            "After 6, respect his R - he's fast.",
            "Build early game pressure before he scales.",
            "Late game, ignore him and split."
        ],
        keyPoints: "Race against time. Proxy to deny stacks. Late game he outscales in 1v1."
    },
    {
        name: "Sion",
        difficulty: "skill",
        icon: "🧟",
        tips: [
            "Dodge his Q charge or walk out of the slow zone.",
            "Proxy constantly - he can't chase.",
            "Don't stay in passive form AA range.",
            "Fling him away from squishies in teamfights."
        ],
        keyPoints: "Easy to proxy. Just respect his CC and don't get hit by fully charged Q."
    },
    {
        name: "Jax",
        difficulty: "skill",
        icon: "🥋",
        tips: [
            "Never fight when his E is up.",
            "Fling him away when he jumps.",
            "Build armor early.",
            "Late game he wins 1v1 - split opposite side."
        ],
        keyPoints: "Respect his E. Disengage when he activates it. Proxy to avoid fights."
    },
    
    // Hard Matchups
    {
        name: "Teemo",
        difficulty: "hard",
        icon: "🍄",
        laningPhase: "One of your worst matchups. Start Doran's Shield and Second Wind. He will poke you constantly and you can't engage on him. Focus on farming safely with Q and giving up CS if needed - don't take free poke. Rush Tier 2 boots so you can dodge his Q blind easier. At level 6, buy sweeper and carefully clear shrooms before proxying. Ask your jungler for help early - you can't kill him alone. Your goal is to survive, farm, and wait for mid game teamfights where you're more useful. Don't try to 1v1 him - he wins that fight. Proxy when possible, but watch for shrooms.",
        tips: [
            "Rush tier 2 boots + Sweeper for shrooms.",
            "His blind stops your AA, but not your poison.",
            "Ask jungler for help early.",
            "Post-6, sweep before proxying."
        ],
        keyPoints: "Annoying ranged poke. Can't engage. Play for mid game."
    },
    {
        name: "Quinn",
        difficulty: "hard",
        icon: "🦅",
        tips: [
            "She pokes you down and you can't catch her.",
            "Take Second Wind + Doran's Shield.",
            "Ask for jungle pressure.",
            "Farm safely, wait for roams, impact other lanes."
        ],
        keyPoints: "One of worst matchups. Can't trade, can't catch. Play safe, scale."
    },
    {
        name: "Vayne",
        difficulty: "hard",
        icon: "🏹",
        tips: [
            "Dodge her E into wall or you die.",
            "She shreds tanks - you're not tanky enough.",
            "All-in with jungler only.",
            "Build HP over armor."
        ],
        keyPoints: "True damage destroys you. Ask for jungle help or accept the L."
    },
    {
        name: "Fiora",
        difficulty: "hard",
        icon: "🤺",
        laningPhase: "Difficult matchup that gets worse over time. Early game, respect her Q poke and vital procs. NEVER flip her when her W is up - she'll parry and stun you. Bait the parry first by walking at her, then back off. Once it's down, you can flip. Don't try to 1v1 her after 6 - her R beats you. Focus on farming and looking for proxy opportunities when she backs or roams. Stand against walls when she ults to deny the 4th vital. Your goal is to survive lane, get items, and be more useful in teamfights. She beats you 1v1 at all stages - accept this and play around it.",
        tips: [
            "She parries your flip - bait it first.",
            "When she ults, stand against wall to deny 4th vital.",
            "Don't fight her late game - she outwins.",
            "Proxy or split opposite side."
        ],
        keyPoints: "She scales harder. Survive early, avoid her late."
    },
    {
        name: "Camille",
        difficulty: "hard",
        icon: "🦵",
        tips: [
            "Her E stun beats your W slow.",
            "Save flip for after her shield pops.",
            "She outdamages and outscales you.",
            "Proxy when her E is down."
        ],
        keyPoints: "She controls the fight. Play safe, farm, roam."
    },
    {
        name: "Irelia",
        difficulty: "hard",
        icon: "🗡️",
        tips: [
            "Stand away from low-HP minions.",
            "Her passive stacking shreds you.",
            "Flip her away when she dives.",
            "After 6, respect her R - you can't outrun it."
        ],
        keyPoints: "High mobility, high damage. Don't let her stack passive."
    },
    {
        name: "Yone",
        difficulty: "hard",
        icon: "⚡",
        tips: [
            "Dodge his Q3 tornado.",
            "When he E's, poison him - he takes damage when he snaps back.",
            "He outscales you.",
            "Build armor and HP."
        ],
        keyPoints: "High mobility. Respect his E all-in."
    },
    {
        name: "Yasuo",
        difficulty: "skill",
        icon: "🌪️",
        tips: [
            "His wall blocks nothing - you're a melee champ.",
            "Don't chase him through minion waves.",
            "Wait for him to dash, then fling.",
            "Buy Plated Steelcaps."
        ],
        keyPoints: "Annoying mobility. Winnable if you bait dashes."
    },
    {
        name: "Tryndamere",
        difficulty: "skill",
        icon: "⚔️",
        tips: [
            "Fling him away when he spins in.",
            "You can't duel him post-6 with R up.",
            "Build armor early.",
            "Split opposite side late game."
        ],
        keyPoints: "Respect his R. Don't 1v1 him late. Split elsewhere."
    },
    {
        name: "Riven",
        difficulty: "skill",
        icon: "🗡️",
        tips: [
            "Respect her early game burst.",
            "Fling her mid-combo to cancel it.",
            "Build armor first.",
            "Don't fight when all her cooldowns are up."
        ],
        keyPoints: "High skill matchup. Respect her burst, fling at right time."
    },
    {
        name: "K'Sante",
        difficulty: "skill",
        icon: "🛡️",
        tips: [
            "Dodge his W dash.",
            "His R sends you away - sometimes that's good.",
            "Early armor helps.",
            "Don't fight in his R form."
        ],
        keyPoints: "New champ, figuring out. Respect his all-in."
    },
    {
        name: "Renekton",
        difficulty: "skill",
        icon: "🐊",
        tips: [
            "Respect his early game - he wins level 1-3.",
            "Build armor early.",
            "You outscale him.",
            "Fling him away when he dashes in."
        ],
        keyPoints: "Loses lane, wins game. Play safe early, dominate mid."
    },
    {
        name: "Urgot",
        difficulty: "skill",
        icon: "🦀",
        tips: [
            "Dodge his E flip.",
            "Circle him when he shotgun knees.",
            "Don't fight him when you're below 25% HP (his R).",
            "Build HP."
        ],
        keyPoints: "Respect his execute. Kite around him."
    },
    {
        name: "Volibear",
        difficulty: "skill",
        icon: "🐻",
        tips: [
            "Don't fight him in his R storm.",
            "Save flip for after he Q's.",
            "Your poison interrupts his W bite heal.",
            "Build grievous wounds."
        ],
        keyPoints: "Respect his R. Don't fight in it. Kite and poison."
    },
    {
        name: "Aatrox",
        difficulty: "hard",
        icon: "😈",
        tips: [
            "Dodge his Q sweet spots.",
            "He outheals your damage.",
            "Buy grievous wounds.",
            "All-in with jungler only."
        ],
        keyPoints: "Hard to 1v1. Build antiheal. Ask for ganks."
    },
    {
        name: "Illaoi",
        difficulty: "easy",
        icon: "🐙",
        tips: [
            "Dodge her E (soul grab).",
            "If she ults, RUN. Don't fight.",
            "Proxy when her E is down.",
            "You can flip her tentacles away."
        ],
        keyPoints: "Don't get soul grabbed. Don't fight in her R. Free proxy."
    },
    {
        name: "Gwen",
        difficulty: "skill",
        icon: "✂️",
        tips: [
            "Her W blocks your poison? Nope, you're inside it.",
            "Fling her away when she tries to all-in.",
            "She outscales. Respect her late game.",
            "Build magic resist if struggling."
        ],
        keyPoints: "AP matchup. Respect her damage."
    }
]; */

// Initialize
let filteredMatchups = [...matchups];

function init() {
    updateStats();
    renderMatchups();
    
    document.getElementById('searchInput').addEventListener('input', filterMatchups);
    document.getElementById('difficultyFilter').addEventListener('change', filterMatchups);
}

function updateStats() {
    const easy = matchups.filter(m => m.difficulty === 'easy').length;
    const skill = matchups.filter(m => m.difficulty === 'skill').length;
    const hard = matchups.filter(m => m.difficulty === 'hard').length;
    
    document.getElementById('favorableCount').textContent = easy;
    document.getElementById('skillCount').textContent = skill;
    document.getElementById('hardCount').textContent = hard;
}

function renderMatchups() {
    const grid = document.getElementById('matchupGrid');
    grid.innerHTML = '';
    
    filteredMatchups.forEach(matchup => {
        const card = document.createElement('div');
        card.className = `matchup-card ${matchup.difficulty}`;
        card.onclick = () => showMatchupDetails(matchup);
        
        card.innerHTML = `
            <div class="matchup-icon">${matchup.icon}</div>
            <div class="matchup-name">${matchup.name}</div>
            <span class="matchup-difficulty ${matchup.difficulty}">
                ${matchup.difficulty === 'easy' ? 'Favorable' : matchup.difficulty === 'skill' ? 'Skill' : 'Difficult'}
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
        const matchesDifficulty = difficultyFilter === 'all' || matchup.difficulty === difficultyFilter;
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
            <span class="matchup-difficulty ${matchup.difficulty}">
                ${matchup.difficulty === 'easy' ? 'Favorable' : matchup.difficulty === 'skill' ? 'Skill Matchup' : 'Difficult'}
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

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
