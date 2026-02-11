# 🔍 Season 16 Data Accuracy Audit — Singed Guide

**Source:** Singed Top Lane Guide (matchups-complete.js, otp-builds.js, index.html)  
**Date checked:** 2026-02-11  
**Patch:** 26.3 (Season 16)  
**Auditor:** Adversarial automated review with web verification

---

## 🚨 EXECUTIVE SUMMARY

The guide has **5 critical data errors** affecting **~30 matchup entries** and several stat shard references. All items are verified correct. The OTP builds section and index.html static builds are mostly clean. The matchup-specific rune pages contain multiple references to **removed runes** and **removed stat shards**.

| Category | Verified ✅ | Wrong ❌ | Uncertain ⚠️ |
|----------|:-----------:|:--------:|:-------------:|
| Items (24 checked) | 24 | 0 | 0 |
| Keystones (4 checked) | 3 | 0 | 1 |
| Minor Runes (17 checked) | 14 | 3 | 0 |
| Summoner Spells (4 checked) | 4 | 0 | 0 |
| Stat Shards (6 checked) | 4 | 2 | 0 |
| **TOTAL** | **49** | **5** | **1** |

---

## ❌ CRITICAL ERRORS

### 1. Legend: Tenacity — REMOVED ❌

**Verdict:** ❌ Wrong — Removed from the game  
**Evidence:** The Fandom wiki page for Legend: Tenacity is flagged with the "Removed" template: *"This article or section may contain obsolete information, but exists here for historical purposes."* The current Precision Slot 2 runes are: **Legend: Alacrity, Legend: Haste, Legend: Bloodline**. Legend: Tenacity is no longer selectable.  
**Sources:**
- [Fandom Wiki – Legend: Tenacity](https://leagueoflegends.fandom.com/wiki/Legend:_Tenacity) — Marked as removed; listed under "Removed" runes section
- [Fandom Wiki – Rune page](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — Precision Slot 2: Alacrity / Haste / Bloodline only
- [LoL Wiki – Phase Rush](https://wiki.leagueoflegends.com/en-us/Phase_Rush) — Precision slot 2 lists only Alacrity, Haste, Bloodline

**Replacement:** Should be **Legend: Haste** (ability haste, good for Singed ult uptime and W cooldown) or **Legend: Bloodline** (lifesteal, less useful for Singed)

**Affected matchups (15 total):**

| Matchup | Location | Current (Wrong) | Suggested Fix |
|---------|----------|-----------------|---------------|
| Maokai | primary slot2 | Legend: Tenacity | Legend: Haste |
| Garen | primary slot2 | Legend: Tenacity | Legend: Haste |
| Gwen | primary slot2 | Legend: Tenacity | Legend: Haste |
| Sett | primary slot2 | Legend: Tenacity | Legend: Haste |
| Shen | primary slot2 | Legend: Tenacity | Legend: Haste |
| Tahm Kench | primary slot2 | Legend: Tenacity | Legend: Haste |
| Volibear | primary slot2 | Legend: Tenacity | Legend: Haste |
| Warwick | primary slot2 | Legend: Tenacity | Legend: Haste |
| Yasuo | primary slot2 | Legend: Tenacity | Legend: Haste |
| Irelia | primary slot2 | Legend: Tenacity | Legend: Haste |
| Kennen | primary slot2 | Legend: Tenacity | Legend: Haste |
| Gnar | primary slot2 | Legend: Tenacity | Legend: Haste |
| Sylas | primary slot2 | Legend: Tenacity | Legend: Haste |
| Riven | secondary slot2 | Legend: Tenacity | Legend: Haste |
| Yone | secondary slot2 | Legend: Tenacity | Legend: Haste |

**Note:** The rune descriptions in these matchups reference tenacity from Legend: Tenacity (e.g., "Legend: Tenacity for E stun cut"). These text descriptions will also need updating.

---

### 2. "Armor" Stat Shard — REMOVED ❌

**Verdict:** ❌ Wrong — No longer a stat shard option  
**Evidence:** The current stat shard system (per Fandom wiki) has been restructured:

| Slot | Option 1 | Option 2 | Option 3 |
|------|----------|----------|----------|
| **Slot 1 (Offense)** | Adaptive Force (5.4 AD / 9 AP) | 10% Attack Speed | 8 Ability Haste |
| **Slot 2 (Flex)** | Adaptive Force (5.4 AD / 9 AP) | 2% Movement Speed | 10-180 Scaling Health |
| **Slot 3 (Defense)** | 65 Flat Health | 10% Tenacity & Slow Resist | 10-180 Scaling Health |

**Armor is NOT available in any slot.** It was replaced by Movement Speed (Slot 2) and Tenacity (Slot 3).

**Sources:**
- [Fandom Wiki – Rune Shards section](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — Full shard table shows no Armor option

**Affected matchups (15+ entries):** Darius, Garen, K'Sante, Renekton, Camille, Fiora, Gangplank, Warwick, Ambessa, Irelia, Yasuo, Aatrox, Yone, Gnar, Sett

**Fix:** Replace "Armor" shards with contextually appropriate options:
- For Slot 2: "Adaptive Force" or "2% Movement Speed"  
- For Slot 3: "65 Health" or "Tenacity" or "Health Scaling"

---

### 3. "Magic Resist" Stat Shard — REMOVED ❌

**Verdict:** ❌ Wrong — No longer a stat shard option  
**Evidence:** Same restructured shard system as above. Magic Resist is not available in any slot.

**Sources:**
- [Fandom Wiki – Rune Shards section](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — No MR shard listed

**Affected matchups (9 entries):** Gragas, Gwen, Mordekaiser, Akali, Kennen, Rumble, Ryze, Sylas, Heimerdinger

**Fix:** Replace "Magic Resist" shards with contextually appropriate options:
- For Slot 2: "Adaptive Force" or "2% Movement Speed"
- For Slot 3: "65 Health" or "Tenacity" or "Health Scaling"

---

### 4. Nullifying Orb — REMOVED from selectable runes ❌

**Verdict:** ❌ Wrong — No longer a selectable rune  
**Evidence:** Current Sorcery Slot 1 options are: **Axiom Arcanist, Manaflow Band, Nimbus Cloak**. Nullifying Orb is NOT in the selectable rune tree. It only exists as an **automatic substitution for manaless champions** (replaces Manaflow Band). Since Singed uses mana, he CANNOT select Nullifying Orb.

Additionally, the guide places Nullifying Orb in **Sorcery Slot 2** (alongside Nimbus Cloak in Slot 1), but even in previous seasons Nullifying Orb was in **Slot 1** — meaning you could never pick both Nimbus Cloak AND Nullifying Orb simultaneously. This was always a data error.

**Sources:**
- [Fandom Wiki – Rune paths](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — Sorcery Slot 1: Axiom Arcanist / Manaflow Band / Nimbus Cloak
- [Fandom Wiki – Substitutions](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — "For champions without mana, Manaflow Band is exchanged with Nullifying Orb"

**Affected matchups (2 entries):**

| Matchup | Current (Wrong) | Fix |
|---------|-----------------|-----|
| Ryze | slot1: Nimbus Cloak, slot2: Nullifying Orb | slot1: Nimbus Cloak, slot2: **Celerity** |
| Rumble | slot1: Nimbus Cloak, slot2: Nullifying Orb | slot1: Nimbus Cloak, slot2: **Celerity** |

---

### 5. Future's Market — REMOVED ❌

**Verdict:** ❌ Wrong — Removed from the game  
**Evidence:** Current Inspiration Slot 2 options are: **Triple Tonic, Time Warp Tonic, Biscuit Delivery**. Future's Market is listed under removed runes on the Fandom wiki.

**Sources:**
- [Fandom Wiki – Legend: Tenacity page, Removed runes section](https://leagueoflegends.fandom.com/wiki/Legend:_Tenacity) — Future's Market listed as removed
- [Fandom Wiki – Rune paths](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — Inspiration Slot 2: Triple Tonic / Time Warp Tonic / Biscuit Delivery

**Affected matchups (2 entries):**

| Matchup | Current (Wrong) | Fix |
|---------|-----------------|-----|
| Sion | slot2: Future's Market | **Biscuit Delivery** or **Time Warp Tonic** |
| Heimerdinger | slot2: Future's Market | **Biscuit Delivery** or **Time Warp Tonic** |

---

## ⚠️ UNCERTAIN

### 6. Unsealed Spellbook — Status Unclear ⚠️

**Verdict:** ⚠️ Uncertain (50-60% confidence it still works)  
**Evidence:** Conflicting signals:
- The LoL Wiki page says **"This rune is disabled"**
- BUT it's still listed in the Inspiration keystones on the Fandom wiki rune tree
- A [2026 Esports Insider rune guide](https://esportsinsider.com/league-of-legends-runes) lists it as a current keystone
- The "disabled" flag may refer only to specific modes (Ultimate Spellbook), not Summoner's Rift
- Minishcap1 posted a video about using it on Singed in May 2025

**Sources:**
- [LoL Wiki](https://wiki.leagueoflegends.com/en-us/Unsealed_Spellbook) — "This rune is disabled"
- [Fandom Wiki – Rune paths](https://leagueoflegends.fandom.com/wiki/Rune_(League_of_Legends)) — Still listed as Inspiration keystone
- [Esports Insider 2026 Guide](https://esportsinsider.com/league-of-legends-runes) — Lists it as current
- [Fandom Wiki – Ultimate Spellbook](https://leagueoflegends.fandom.com/wiki/Ultimate_Spellbook) — "Unsealed Spellbook is disabled in this mode"

**Affected matchups:** Sion, Heimerdinger  
**Note:** Even if Unsealed Spellbook is valid, these matchups STILL have errors (Future's Market is removed — see #5).

---

## ✅ VERIFIED — All Items

Every item referenced in the guide exists in Season 16:

| Item | Status | Source |
|------|--------|--------|
| Liandry's Torment | ✅ Verified | [LoL Wiki](https://wiki.leagueoflegends.com/en-us/Liandry's_Torment), [u.gg](https://u.gg/lol/items/liandrys-torment) — 3000g, 60 AP, 300 HP. Replaced Liandry's Anguish (which is listed under Removed items). Guide correctly uses new name. |
| Rylai's Crystal Scepter | ✅ Verified | [Fandom Wiki item list](https://leagueoflegends.fandom.com/wiki/Stat_Bonus) — Listed in legendary items |
| Deadman's Plate | ✅ Verified | Listed in legendary items on wiki |
| Bloodletter's Curse | ✅ Verified | [LoL Wiki](https://wiki.leagueoflegends.com/en-us/Bloodletter's_Curse), [u.gg](https://u.gg/lol/items/bloodletters-curse) — **NEW S16 item**, 2500g, 60 AP, 350 HP, 15 AH. Real item with Vile Decay passive. |
| Rabadon's Deathcap | ✅ Verified | Listed in legendary items |
| Zhonya's Hourglass | ✅ Verified | Listed in legendary items |
| Cosmic Drive | ✅ Verified | Listed in legendary items |
| Force of Nature | ✅ Verified | Listed in legendary items |
| Warmog's Armor | ✅ Verified | Listed in legendary items |
| Morellonomicon | ✅ Verified | Listed in legendary items |
| Frozen Heart | ✅ Verified | Listed in legendary items |
| Randuin's Omen | ✅ Verified | Listed in legendary items |
| Heartsteel | ✅ Verified | Listed in legendary items |
| Void Staff | ✅ Verified | Listed in legendary items |
| Boots of Swiftness | ✅ Verified | Listed in boots |
| Mercury's Treads | ✅ Verified | Listed in boots (guide uses "Mercury Treads" / "Mercs" — informal but understood) |
| Plated Steelcaps | ✅ Verified | Listed in boots |
| Doran's Ring | ✅ Verified | Listed in starter items |
| Doran's Shield | ✅ Verified | Listed in starter items |
| Dark Seal | ✅ Verified | Listed in starter items |
| Oblivion Orb | ✅ Verified | Listed in epic items |
| Quicksilver Sash (QSS) | ✅ Verified | Listed in epic items |
| Refillable Potion | ✅ Verified | Listed in potions |
| Health Potion | ✅ Verified | Listed in potions |

### Protoplasm Harness Note
Protoplasm Harness IS a real S16 item (2500g, 600 HP, 15 AH — per [Mobalytics](https://mobalytics.gg/lol/guides/new-lol-items-2026)) and was being adjusted in Patch 26.3. The guide intentionally does not include it. This is a valid editorial choice, not an error — though it could be worth considering as a situational tank option for Singed.

---

## ✅ VERIFIED — Keystones & Minor Runes (Valid Ones)

| Rune | Tree | Status | Notes |
|------|------|--------|-------|
| Conqueror | Precision | ✅ Verified | Keystone, confirmed in rune tree |
| Phase Rush | Sorcery | ✅ Verified | Keystone, confirmed. **Nerfed in Patch 26.3** but still exists |
| Aftershock | Resolve | ✅ Verified | Keystone, confirmed in rune tree |
| Triumph | Precision Slot 1 | ✅ Verified | Confirmed |
| Legend: Alacrity | Precision Slot 2 | ✅ Verified | Confirmed, still exists |
| Last Stand | Precision Slot 3 | ✅ Verified | Confirmed |
| Cut Down | Precision Slot 3 | ✅ Verified | Confirmed |
| Coup de Grace | Precision Slot 3 | ✅ Verified | Confirmed |
| Nimbus Cloak | Sorcery Slot 1 | ✅ Verified | Confirmed |
| Celerity | Sorcery Slot 2 | ✅ Verified | Confirmed |
| Gathering Storm | Sorcery Slot 3 | ✅ Verified | Confirmed |
| Second Wind | Resolve Slot 2 | ✅ Verified | Confirmed |
| Bone Plating | Resolve Slot 2 | ✅ Verified | Confirmed |
| Conditioning | Resolve Slot 2 | ✅ Verified | Confirmed |
| Unflinching | Resolve Slot 3 | ✅ Verified | Confirmed |
| Overgrowth | Resolve Slot 3 | ✅ Verified | Confirmed |
| Shield Bash | Resolve Slot 1 | ✅ Verified | Confirmed |
| Cosmic Insight | Inspiration Slot 3 | ✅ Verified | Confirmed |
| Hextech Flashtraption | Inspiration Slot 1 | ✅ Verified | Guide calls it "Hexflash" (common shorthand). Real name is Hextech Flashtraption. Minor naming issue only. |

---

## ✅ VERIFIED — Summoner Spells

| Spell | Status |
|-------|--------|
| Ghost | ✅ Verified |
| Flash | ✅ Verified |
| Ignite | ✅ Verified |
| Teleport | ✅ Verified |

---

## ✅ VERIFIED — Stat Shards (Valid Ones)

| Shard | Status | Slot(s) |
|-------|--------|---------|
| Attack Speed (10%) | ✅ Verified | Slot 1 |
| Adaptive Force (5.4 AD / 9 AP) | ✅ Verified | Slot 1 & 2 |
| Health Scaling (10-180) | ✅ Verified | Slot 2 & 3 |
| Tenacity (10%) | ✅ Verified | Slot 3 |

---

## 📊 IMPACT ANALYSIS

### Files Affected

| File | Entries with Errors | Type of Error |
|------|-------------------|---------------|
| `matchups-complete.js` | ~30 of 49 matchups | Legend: Tenacity, Armor/MR shards, Nullifying Orb, Future's Market |
| `otp-builds.js` | 0 of 17 OTP profiles | ✅ All clean — uses only Conqueror/Alacrity/Last Stand and valid shards |
| `index.html` | 0 static build entries | ✅ All clean — standard Conqueror and Phase Rush pages are valid |

### Error Distribution

| Error Type | # Matchups Affected | Severity |
|------------|-------------------|----------|
| Legend: Tenacity (removed rune) | 15 | 🔴 Critical — rune cannot be selected |
| Armor shard (removed) | 15 | 🔴 Critical — shard doesn't exist |
| Magic Resist shard (removed) | 9 | 🔴 Critical — shard doesn't exist |
| Nullifying Orb (not selectable) | 2 | 🔴 Critical — rune not available for Singed |
| Future's Market (removed) | 2 | 🔴 Critical — rune cannot be selected |

**Note:** Many matchups have multiple errors (e.g., Yasuo has both Legend: Tenacity AND Armor shard issues).

---

## 🔧 RECOMMENDED FIXES

### Priority 1: Replace Legend: Tenacity (15 matchups)
Replace all instances of `"Legend: Tenacity"` with `"Legend: Haste"` (ability haste scaling — best replacement for a champion who values cooldown reduction on W and R). Update associated rune description text to reference Legend: Haste benefits instead.

### Priority 2: Replace Armor & MR Shards (~24 matchups)
The new shard system offers different options per slot:
- **Slot 2 (Flex):** Adaptive Force / 2% Move Speed / Scaling Health
- **Slot 3 (Defense):** 65 Health / 10% Tenacity / Scaling Health

Suggested mapping:
- Old "Armor" shard → **Scaling Health** (Slot 2) or **65 Health** (Slot 3) for AD matchups
- Old "Magic Resist" shard → **Scaling Health** (Slot 2) or **65 Health** (Slot 3) for AP matchups
- Where "Tenacity" was already selected in Slot 3, use **Scaling Health** in Slot 2 instead of MR/Armor

### Priority 3: Fix Nullifying Orb Matchups (2 matchups)
Replace `"Nullifying Orb"` with `"Celerity"` in Ryze and Rumble matchups (Sorcery Slot 2). This matches the standard Phase Rush page used in other matchups.

### Priority 4: Fix Future's Market (2 matchups)
Replace `"Future's Market"` with `"Biscuit Delivery"` or `"Time Warp Tonic"` in Sion and Heimerdinger matchups.

### Priority 5: Verify Unsealed Spellbook availability
Test whether Unsealed Spellbook is actually selectable in the current client. If disabled, replace with **First Strike** or **Glacial Augment** for the Sion and Heimerdinger matchups.

---

## 📝 MINOR NOTES (Non-Errors)

1. **"Hexflash" naming** — Guide uses "Hexflash" but official name is "Hextech Flashtraption". Common shorthand, not a real error.
2. **"Mercury Treads" / "Mercs"** — Official name is "Mercury's Treads". Common shorthand, not a real error.
3. **Phase Rush nerfed in 26.3** — Still exists and is valid for the guide. The nerf doesn't invalidate its use on Singed.
4. **Protoplasm Harness omission** — Real S16 item not included in guide. Valid editorial choice but could be mentioned as a situational option (600 HP, 15 AH, clutch passive at <30% HP).
5. **Lost Chapter reference** — Dr. Mundo matchup text mentions "Lost Chapter" as a power spike. Singed doesn't build Lost Chapter items typically. This may be a copy-paste artifact but is a gameplay advice issue, not a data accuracy issue.

---

## ✅ OVERALL ACCURACY

- **Items:** 24/24 correct (100%) ✅
- **Runes:** 18/22 correct (82%) — 3 removed runes + 1 uncertain
- **Summoner Spells:** 4/4 correct (100%) ✅
- **Stat Shards:** 4/6 correct (67%) — Armor and MR removed
- **Overall:** 50/56 references correct (**89%**)
- **Matchups affected by at least one error:** ~30/49 (**61%**)

The OTP builds section (otp-builds.js) and static HTML builds are **100% accurate**. The errors are concentrated in the per-matchup customized rune pages in matchups-complete.js, particularly around the slot 2 Legend rune choice and defensive stat shards.
