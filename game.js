// game.js

// 1. Asset Dictionary: Using relative paths so the browser can load them
const audioPaths = {
    // Atmosphere & BGM
    cave: "audio/atmosphere/cave.ogg", 
    dungeon: "audio/atmosphere/dungeon.ogg", 
    forest: "audio/atmosphere/forest.ogg", 
    magic: "audio/atmosphere/magic.ogg", 
    night: "audio/atmosphere/night.ogg", 
    wind: "audio/atmosphere/wind.ogg", 
    battleMusic: "audio/bgm/battleMusic.ogg", 
    titleMusic: "audio/bgm/title.ogg", 
    merchantMusic: "audio/bgm/merchant.ogg", 
    
    // Sound Effects
    chestNearby: "audio/se/chestNearby.mp3", 
    chestOpen: "audio/se/chestOpen.mp3", 
    footsteps: "audio/se/footsteps.wav", 
    healing: "audio/se/healing.mp3", 
    magicalHum: "audio/se/magicalHum.mp3", 
    stairsNearby: "audio/se/stairsNearby.mp3", 
    stairTraversal: "audio/se/stairTraversal.wav", 
    stream: "audio/se/stream.mp3", 
    bladeHit: "audio/se/bladeHit.wav", 
    bluntHit: "audio/se/bluntHit.wav", 
    turn: "audio/se/turn.wav", 
    orcNearby: "audio/se/orcNearby.mp3", 
    spiderNearby: "audio/se/spiderNearby.mp3", 
    goblinNearby: "audio/se/goblinNearby.mp3", 
    magicMissileSFX: "audio/se/magicMissle.mp3",
    purchaseSuccess: "audio/se/purchaseSuccess.mp3",
    
    // UI
    cancel: "audio/ui/cancel.ogg", 
    confirm: "audio/ui/confirm.ogg", 
    save: "audio/ui/save.ogg", 
    select: "audio/ui/select.ogg", 
    
    // Narration - System & Menus
    welcome: "audio/voice/narration/001welcome.wav", 
    locateBump: "audio/voice/narration/002locateBump.wav", 
    confirmF: "audio/voice/narration/003confirmF.wav", 
    cancelJ: "audio/voice/narration/004cancelJ.wav", 
    calibrationComplete: "audio/voice/narration/005calibrationComplete.wav", 
    gridExplain: "audio/voice/narration/006gridExplain.wav", 
    movement: "audio/voice/narration/007movement.wav", 
    turning: "audio/voice/narration/008turning.wav", 
    timeMechanic: "audio/voice/narration/009timeMechanic.wav", 
    streamVoice: "audio/voice/narration/010stream.wav", 
    reserveVoice: "audio/voice/narration/011reserve.wav", 
    chestVoice: "audio/voice/narration/012chest.wav", 
    stairsVoice: "audio/voice/narration/013stairs.wav", 
    goal: "audio/voice/narration/014goal.wav", 
    battleStart: "audio/voice/narration/015battleStart.wav", 
    playerHP: "audio/voice/narration/016playerHP.wav", 
    playerMP: "audio/voice/narration/017playerMP.wav", 
    enemyHP: "audio/voice/narration/018enemyHP.wav", 
    actionPrompt: "audio/voice/narration/019actionPrompt.wav", 
    attack: "audio/voice/narration/020attack.wav", 
    defend: "audio/voice/narration/021defend.wav", 
    magicAction: "audio/voice/narration/022magic.wav", 
    run: "audio/voice/narration/024run.wav", 
    pause: "audio/voice/narration/025pause.wav", 
    volume: "audio/voice/narration/026volume.wav", 
    saveGame: "audio/voice/narration/027saveGame.wav", 
    titleReturn: "audio/voice/narration/028titleReturn.wav", 
    progressSaved: "audio/voice/narration/029progressSaved.wav", 
    mainMenu: "audio/voice/narration/036mainMenu.wav",
    newGame: "audio/voice/narration/037newGame.wav",
    loadGame: "audio/voice/narration/038loadGame.wav",
    magicMissileVoice: "audio/voice/narration/039magicMissle.wav",
    youFound: "audio/voice/narration/040youFound.wav", 
    gold: "audio/voice/narration/041gold.wav", 
    floor: "audio/voice/narration/042floor.wav", 
    checkStats: "audio/voice/narration/051checkStats.wav",
    maxHP: "audio/voice/narration/052maxHP.wav",
    maxMP: "audio/voice/narration/053maxMP.wav",
    noItems: "audio/voice/narration/050noItems.wav",
    cost: "audio/voice/narration/054cost.wav", 
    darkMagician: "audio/voice/narration/055darkMagician.wav",
    
    // Narration - Merchant
    merchantEncounter: "audio/voice/narration/043merchantEncounter.wav",
    healingPotion: "audio/voice/narration/044healingPotion.wav",
    magicPotion: "audio/voice/narration/045magicPotion.wav",
    upgradeStrength: "audio/voice/narration/046upgradeStrength.wav",
    upgradeHealth: "audio/voice/narration/047upgradeHealth.wav",
    upgradeMagic: "audio/voice/narration/048upgradeMagic.wav",
    finishShopping: "audio/voice/narration/049finishShopping.wav",

    // Narration - Combat & Game Over
    playerAttack: "audio/voice/narration/015-1playerAttack.wav", 
    enemyAttack: "audio/voice/narration/015-2enemyAttack.wav", 
    enemyAppeared: "audio/voice/narration/015-3enemyAppeared.wav", 
    goblin: "audio/voice/narration/015-4goblin.wav", 
    orc: "audio/voice/narration/015-5orc.wav", 
    giantSpider: "audio/voice/narration/015-6giantSpider.wav", 
    youDefeatedThe: "audio/voice/narration/015-7youDefeatedThe.wav", 
    youDied: "audio/voice/narration/015-8youDied.wav", 
    gameOver: "audio/voice/narration/015-9gameOver.wav", 

    // Narration - Final Boss Events
    bossStream: "audio/voice/finalBoss/001stream.wav",
    bossReserve: "audio/voice/finalBoss/002reserve.wav",
    bossEncounter: "audio/voice/finalBoss/003encounter.wav",

    // Narration - Environmental Feedback
    hpRecovered: "audio/voice/narration/030hpRecovered.wav", 
    mpRecovered: "audio/voice/narration/031mpRecovered.wav", 
    reachedStream: "audio/voice/narration/032reachedStream.wav", 
    reachedReserve: "audio/voice/narration/033reachedReserve.wav", 
    reachedChest: "audio/voice/narration/034reachedChest.wav", 
    reachedStairs: "audio/voice/narration/035reachedStairs.wav", 

    // Narration - Numbers
    num1: "audio/voice/numbers/1.wav", 
    num2: "audio/voice/numbers/2.wav", 
    num3: "audio/voice/numbers/3.wav", 
    num4: "audio/voice/numbers/4.wav", 
    num5: "audio/voice/numbers/5.wav", 
    num6: "audio/voice/numbers/6.wav", 
    num7: "audio/voice/numbers/7.wav", 
    num8: "audio/voice/numbers/8.wav", 
    num9: "audio/voice/numbers/9.wav", 
    num10: "audio/voice/numbers/10.wav", 
    num11: "audio/voice/numbers/11.wav", 
    num12: "audio/voice/numbers/12.wav", 
    num13: "audio/voice/numbers/13.wav", 
    num14: "audio/voice/numbers/14.wav", 
    num15: "audio/voice/numbers/15.wav", 
    num16: "audio/voice/numbers/16.wav", 
    num17: "audio/voice/numbers/17.wav", 
    num18: "audio/voice/numbers/18.wav", 
    num19: "audio/voice/numbers/19.wav", 
    num20: "audio/voice/numbers/20.wav", 
    num30: "audio/voice/numbers/30.wav", 
    num40: "audio/voice/numbers/40.wav", 
    num50: "audio/voice/numbers/50.wav", 
    num60: "audio/voice/numbers/60.wav", 
    num70: "audio/voice/numbers/70.wav", 
    num80: "audio/voice/numbers/80.wav", 
    num90: "audio/voice/numbers/90.wav" 
};

// 2. Global State & Audio Constants
let audioCtx; 
const audioBuffers = {}; 
let gameState = 'BOOT'; 

// Tutorial State
let skipTutorialFlag = false; 
let activeTutorialNode = null; 

// Spatial Audio State
let beaconNodes = []; 
let ambientSource = null; 
let ambientGainNode = null; 
let currentAmbientVolume = 0.15; 
let activeMovementSource = null; 

// Volume Mechanics
let MASTER_VOLUME = 1.0; 
let currentVolumeLevel = 5; 
const VOICE_BOOST = 1; 
const SFX_VOLUME = 1; 

// RPG Mechanics State
let playerStats = { hp: 8, maxHp: 8, mp: 3, maxMp: 3, floor: 1, gold: 0, baseDamage: 4 }; 
let playerStepCount = 0; 
let currentMonster = null; 

// Menu Arrays
const titleOptions = ['newGame', 'loadGame'];
let titleIndex = 0;

const pauseOptions = ['checkStats', 'volume', 'saveGame', 'titleReturn']; 
let pauseIndex = 0; 

const battleOptions = ['attack', 'defend', 'magicAction', 'run']; 
let battleIndex = 0; 

const merchantOptions = ['healingPotion', 'magicPotion', 'upgradeStrength', 'upgradeHealth', 'upgradeMagic', 'finishShopping'];
let merchantIndex = 0;

// 3. Main Input Controller (Refactored to handle both keys and touch)
function handleInput(key) {
    const tutorialStates = ['WAITING_FOR_F', 'WAITING_FOR_J', 'WAITING_FOR_UP_DOWN', 'WAITING_FOR_LEFT_RIGHT', 'PLAYING_AUDIO']; 

    // Tutorial Skip logic (S key)
    if (key === 's' && tutorialStates.includes(gameState)) { 
        skipTutorialFlag = true; 
        if (activeTutorialNode) { 
            try { activeTutorialNode.stop(); } catch(err) {} 
        } 
        
        startAmbientTrack('dungeon', 0.15); 
        finishFloorTransition();
        console.log("Tutorial Skipped."); 
        return; 
    } 

    if (gameState === 'BOOT' && key === 'f') { 
        bootSystem(); 
    } 
    
    // --- MAIN MENU STATE MACHINE ---
    else if (gameState === 'MAIN_MENU') {
        if (key === 'arrowup' || key === 'arrowleft' || key === 'arrowdown' || key === 'arrowright') { 
            let step = (key === 'arrowup' || key === 'arrowleft') ? titleOptions.length - 1 : 1;
            titleIndex = (titleIndex + step) % titleOptions.length; 
            navigateMenu(titleOptions[titleIndex]); 
        } 
        else if (key === 'f') { 
            executeTitleAction(); 
        }
    }

    // --- TUTORIAL STATE MACHINE ---
    else if (gameState === 'WAITING_FOR_F' && key === 'f') { 
        playBasicSound('confirm', SFX_VOLUME);  
        stepTwoCancelJ(); 
    } 
    else if (gameState === 'WAITING_FOR_J' && key === 'j') { 
        playBasicSound('cancel', SFX_VOLUME);  
        stepThreeCalibrationComplete(); 
    }
    else if (gameState === 'WAITING_FOR_UP_DOWN' && (key === 'arrowup' || key === 'arrowdown')) { 
        playBasicSound('footsteps', SFX_VOLUME);  
        stepFourTurning(); 
    }
    else if (gameState === 'WAITING_FOR_LEFT_RIGHT' && (key === 'arrowleft' || key === 'arrowright')) { 
        playBasicSound('turn', SFX_VOLUME); 
        stepFiveEnvironment(); 
    }

    // --- PAUSE MENU STATE MACHINE ---
    else if (gameState === 'PAUSE_MENU') { 
        if (key === 'arrowup' || key === 'arrowleft') { 
            pauseIndex = (pauseIndex + pauseOptions.length - 1) % pauseOptions.length; 
            navigateMenu(pauseOptions[pauseIndex]); 
        } 
        else if (key === 'arrowdown' || key === 'arrowright') { 
            pauseIndex = (pauseIndex + 1) % pauseOptions.length; 
            navigateMenu(pauseOptions[pauseIndex]); 
        } 
        else if (key === 'j') { 
            playBasicSound('cancel', SFX_VOLUME); 
            gameState = 'FREE_ROAM'; 
            updateBeacons(); 
        } 
        else if (key === 'f') { 
            executePauseAction(); 
        }
    }
    
    // --- VOLUME MENU STATE MACHINE ---
    else if (gameState === 'VOLUME_MENU') { 
        if (key === 'arrowup' || key === 'arrowright') { 
            adjustVolume(1); 
        } 
        else if (key === 'arrowdown' || key === 'arrowleft') { 
            adjustVolume(-1); 
        } 
        else if (key === 'j') { 
            returnToPauseMenuFromVolume(); 
        } 
    }

    // --- BATTLE MENU STATE MACHINE ---
    else if (gameState === 'BATTLE_MENU') { 
        if (key === 'arrowup' || key === 'arrowleft') { 
            battleIndex = (battleIndex + battleOptions.length - 1) % battleOptions.length; 
            navigateMenu(battleOptions[battleIndex]); 
        } 
        else if (key === 'arrowdown' || key === 'arrowright') { 
            battleIndex = (battleIndex + 1) % battleOptions.length; 
            navigateMenu(battleOptions[battleIndex]); 
        } 
        else if (key === 'f') { 
            executeBattleTurn(); 
        }
    }

    // --- MERCHANT MENU STATE MACHINE ---
    else if (gameState === 'MERCHANT_MENU') { 
        if (key === 'arrowup' || key === 'arrowleft') { 
            merchantIndex = (merchantIndex + merchantOptions.length - 1) % merchantOptions.length; 
            navigateMenu(merchantOptions[merchantIndex]); 
        } 
        else if (key === 'arrowdown' || key === 'arrowright') { 
            merchantIndex = (merchantIndex + 1) % merchantOptions.length; 
            navigateMenu(merchantOptions[merchantIndex]); 
        } 
        else if (key === 'f') { 
            executeMerchantAction(); 
        }
    }

    // --- GAMEPLAY STATE MACHINE ---
    else if (gameState === 'FREE_ROAM') { 
        let moved = false; 
        let turned = false; 

        if (key === 'arrowup' || key === 'arrowdown') { 
            let step = (key === 'arrowup') ? 1 : -1; 
            let nx = player.x;  
            let ny = player.y;  

            if (player.facing === 0) ny -= step; 
            else if (player.facing === 1) nx += step; 
            else if (player.facing === 2) ny += step; 
            else if (player.facing === 3) nx -= step; 

            if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {  
                player.x = nx; 
                player.y = ny; 
                moved = true; 
                playerStepCount++;
                playBasicSound('footsteps', SFX_VOLUME); 

                let encountered = monsters.find(m => m.x === player.x && m.y === player.y && m.hp > 0);  
                
                if (!encountered && playerStepCount % 2 === 0) { 
                    moveMonsters(); 
                    encountered = monsters.find(m => m.x === player.x && m.y === player.y && m.hp > 0);  
                }
                
                if (encountered) { 
                    initiateBattle(encountered); 
                    return;  
                }

                const landedTile = dungeonGrid[player.y][player.x]; 
                if (landedTile === TILE_CHEST) playBasicSound('reachedChest', VOICE_BOOST); 
                else if (landedTile === TILE_STAIRS) playBasicSound('reachedStairs', VOICE_BOOST); 
                else if (landedTile === TILE_STREAM) playBasicSound('reachedStream', VOICE_BOOST); 
                else if (landedTile === TILE_RESERVE) playBasicSound('reachedReserve', VOICE_BOOST); 

            } else {
                playBasicSound('cancel', SFX_VOLUME);  
            }
        } 
        else if (key === 'arrowleft') { 
            player.facing = (player.facing + 3) % 4; 
            turned = true; 
            playBasicSound('turn', SFX_VOLUME);  
        } 
        else if (key === 'arrowright') { 
            player.facing = (player.facing + 1) % 4; 
            turned = true; 
            playBasicSound('turn', SFX_VOLUME); 
        } 
        else if (key === 'f') { 
            checkInteraction(); 
        } 
        else if (key === 'j') { 
            openPauseMenu(); 
        }

        if (moved || turned) { 
            updateBeacons(); 
        }
    }
}

// Map keyboard events to the input controller
document.addEventListener('keydown', (e) => { 
    handleInput(e.key.toLowerCase());
});

// --- MOBILE TOUCH CONTROLS ---
let touchStartX = 0; 
let touchStartY = 0; 
let touchEndX = 0; 
let touchEndY = 0; 
let maxTouches = 0; 
let touchActive = false; 

document.addEventListener('touchstart', (e) => { 
    touchActive = true; 
    if (e.touches.length > maxTouches) { 
        maxTouches = e.touches.length; 
    } 
    // Capture the initial point for the primary finger
    if (e.touches.length === 1) { 
        touchStartX = e.changedTouches[0].screenX; 
        touchStartY = e.changedTouches[0].screenY; 
        touchEndX = touchStartX; // Fallback for zero-distance taps
        touchEndY = touchStartY; 
    } 
}, { passive: false }); 

document.addEventListener('touchmove', (e) => { 
    if (!touchActive) return; 
    e.preventDefault(); // Prevents page scrolling to lock game interface
    touchEndX = e.changedTouches[0].screenX; 
    touchEndY = e.changedTouches[0].screenY; 
}, { passive: false }); 

document.addEventListener('touchend', (e) => { 
    if (e.touches.length > 0) return; // Wait until all fingers are lifted
    
    if (!touchActive) return; 
    touchActive = false; 

    let dx = touchEndX - touchStartX; 
    let dy = touchEndY - touchStartY; 
    let absDx = Math.abs(dx); 
    let absDy = Math.abs(dy); 

    // Threshold determines if it was a swipe or a tap
    if (Math.max(absDx, absDy) > 40) { 
        if (absDx > absDy) { 
            handleInput(dx > 0 ? 'arrowright' : 'arrowleft'); 
        } else { 
            handleInput(dy > 0 ? 'arrowdown' : 'arrowup'); 
        } 
    } else { 
        if (maxTouches >= 2) { 
            handleInput('j'); // Two-finger tap
        } else { 
            handleInput('f'); // Single-finger tap
        } 
    } 
    maxTouches = 0; 
});

// 4. Initialization Sequence
async function bootSystem() { 
    // Prevent double-booting if a tap triggers this rapidly
    if (gameState !== 'BOOT') return;
    gameState = 'LOADING'; 
    document.getElementById('boot-screen').classList.add('hidden'); 
    
    audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
    if (audioCtx.state === 'suspended') { 
        await audioCtx.resume(); 
    } 

    await loadAllAudio(); 
    openMainMenu(); 
} 

// 5. Audio Fetching & Decoding
async function loadAllAudio() { 
    const loadPromises = []; 

    for (const [key, path] of Object.entries(audioPaths)) { 
        const promise = fetch(path) 
            .then(response => response.arrayBuffer()) 
            .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer)) 
            .then(audioBuffer => { 
                audioBuffers[key] = audioBuffer; 
            }) 
            .catch(err => console.error(`Failed to load ${path}:`, err)); 
        
        loadPromises.push(promise); 
    } 

    await Promise.all(loadPromises); 
    console.log("All audio assets loaded and decoded successfully."); 
} 

// 6. Audio Players
function playBasicSound(bufferKey, volumeMultiplier = 1.0, durationInSeconds = null) { 
    return new Promise((resolve) => { 
        if (!audioBuffers[bufferKey]) { 
            console.warn(`Audio missing: ${bufferKey}`); 
            resolve(); 
            return; 
        } 
        
        if (bufferKey === 'footsteps' || bufferKey === 'turn') {
            if (activeMovementSource) {
                try { activeMovementSource.stop(); } catch(e) {}
            }
        }

        const source = audioCtx.createBufferSource(); 
        source.buffer = audioBuffers[bufferKey]; 
        
        if (bufferKey === 'footsteps' || bufferKey === 'turn') {
            activeMovementSource = source;
        }
        
        const gainNode = audioCtx.createGain(); 
        gainNode.gain.value = volumeMultiplier * MASTER_VOLUME; 

        source.connect(gainNode); 
        gainNode.connect(audioCtx.destination); 
        
        source.start(0); 

        if (durationInSeconds !== null) { 
            gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + durationInSeconds - 0.2, 0.05); 
            source.stop(audioCtx.currentTime + durationInSeconds); 
        }
        
        source.onended = () => resolve(); 
    }); 
} 

function playSpatialSound(bufferKey, targetX, targetY, volumeMultiplier = 1.0) {
    if (!audioBuffers[bufferKey]) return;

    let dx = targetX - player.x;
    let dy = targetY - player.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= 5) return;

    const volCurve = [1.0, 0.7, 0.5, 0.25, 0.1, 0.0];
    let volume = 0;
    let lowerBound = Math.floor(distance);
    let upperBound = Math.ceil(distance);
    let fraction = distance - lowerBound;

    if (lowerBound === upperBound) {
        volume = volCurve[lowerBound];
    } else {
        volume = (volCurve[lowerBound] * (1 - fraction)) + (volCurve[upperBound] * fraction);
    }

    let relX = 0;
    switch(player.facing) {
        case 0: relX = dx; break;
        case 1: relX = dy; break;
        case 2: relX = -dx; break;
        case 3: relX = -dy; break;
    }

    let panValue = (distance === 0) ? 0 : (relX / distance);
    panValue = Math.max(-1, Math.min(1, panValue));

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffers[bufferKey];

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = volume * volumeMultiplier * MASTER_VOLUME;

    const pannerNode = audioCtx.createStereoPanner();
    pannerNode.pan.value = panValue;

    source.connect(pannerNode);
    pannerNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    source.start(0);
}

function playTutorialAudio(bufferKey, volumeMultiplier = 1.0, durationInSeconds = null) { 
    return new Promise((resolve) => { 
        if (skipTutorialFlag) return resolve(); 
        
        if (!audioBuffers[bufferKey]) { 
            console.warn(`Audio missing: ${bufferKey}`); 
            return resolve(); 
        } 
        
        const source = audioCtx.createBufferSource(); 
        source.buffer = audioBuffers[bufferKey]; 
        activeTutorialNode = source; 
        
        const gainNode = audioCtx.createGain(); 
        gainNode.gain.value = volumeMultiplier * MASTER_VOLUME; 

        source.connect(gainNode); 
        gainNode.connect(audioCtx.destination); 
        
        source.start(0); 

        if (durationInSeconds !== null) { 
            gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + durationInSeconds - 0.2, 0.05); 
            source.stop(audioCtx.currentTime + durationInSeconds); 
        }
        
        source.onended = () => resolve(); 
    }); 
}

async function playNumber(num) { 
    if (num <= 0) return; 
    
    if (num <= 20 || num % 10 === 0) { 
        await playBasicSound(`num${num}`, VOICE_BOOST); 
    } else {
        let tens = Math.floor(num / 10) * 10; 
        let ones = num % 10; 
        await playBasicSound(`num${tens}`, VOICE_BOOST); 
        await playBasicSound(`num${ones}`, VOICE_BOOST); 
    }
}

function startAmbientTrack(bufferKey, volumeMultiplier = 0.15) { 
    if (!audioBuffers[bufferKey]) return; 
    
    if (ambientSource) ambientSource.stop(); 
    
    ambientSource = audioCtx.createBufferSource(); 
    ambientSource.buffer = audioBuffers[bufferKey]; 
    ambientSource.loop = true; 
    
    currentAmbientVolume = volumeMultiplier; 
    ambientGainNode = audioCtx.createGain(); 
    ambientGainNode.gain.value = currentAmbientVolume * MASTER_VOLUME; 
    
    ambientSource.connect(ambientGainNode); 
    ambientGainNode.connect(audioCtx.destination); 
    
    ambientSource.start(0); 
} 

function updateMasterVolume() {
    MASTER_VOLUME = currentVolumeLevel * 0.20; 
    
    if (ambientGainNode) {
        ambientGainNode.gain.setTargetAtTime(currentAmbientVolume * MASTER_VOLUME, audioCtx.currentTime, 0.1); 
    }
    
    if (gameState === 'FREE_ROAM') {
        updateBeacons(); 
    }
}

function stopAllBeacons() {
    beaconNodes.forEach(b => { 
        b.isStopped = true; 
        if (b.source) { 
            try { b.source.stop(); } catch(e) {} 
        }
        if (b.timeoutId) clearTimeout(b.timeoutId); 
    });
    beaconNodes = []; 
}

// 7. Spatial Audio System (Beacons)
function startBeacons() { 
    stopAllBeacons(); 

    audioObjects.forEach(obj => { 
        if (!audioBuffers[obj.audioKey]) return; 

        const gainNode = audioCtx.createGain(); 
        const pannerNode = audioCtx.createStereoPanner(); 

        pannerNode.connect(gainNode); 
        gainNode.connect(audioCtx.destination); 

        let beaconObj = { 
            source: null, 
            gainNode: gainNode, 
            pannerNode: pannerNode, 
            x: obj.x, 
            y: obj.y, 
            isStopped: false, 
            timeoutId: null 
        }; 
        beaconNodes.push(beaconObj); 

        if (obj.audioKey === 'chestNearby') { 
            function playChestPing() { 
                if (beaconObj.isStopped) return; 
                
                const source = audioCtx.createBufferSource(); 
                source.buffer = audioBuffers[obj.audioKey]; 
                source.connect(pannerNode); 
                beaconObj.source = source; 
                
                source.start(0); 
                source.onended = () => { 
                    if (!beaconObj.isStopped) { 
                        beaconObj.timeoutId = setTimeout(playChestPing, 1000); 
                    }
                };
            }
            playChestPing(); 
        } else {
            const source = audioCtx.createBufferSource(); 
            source.buffer = audioBuffers[obj.audioKey]; 
            source.loop = true; 
            source.connect(pannerNode); 
            beaconObj.source = source; 
            source.start(0); 
        }
    }); 

    updateBeacons(); 
} 

function updateBeacons() { 
    const volCurve = [1.0, 0.7, 0.5, 0.25, 0.1, 0.0]; 

    beaconNodes.forEach(beacon => { 
        let dx = beacon.x - player.x; 
        let dy = beacon.y - player.y; 
        let distance = Math.sqrt(dx * dx + dy * dy); 
        
        let volume = 0; 
        if (distance >= 5) { 
            volume = 0; 
        } else {
            let lowerBound = Math.floor(distance); 
            let upperBound = Math.ceil(distance); 
            let fraction = distance - lowerBound; 
            
            if (lowerBound === upperBound) { 
                volume = volCurve[lowerBound]; 
            } else {
                volume = (volCurve[lowerBound] * (1 - fraction)) + (volCurve[upperBound] * fraction); 
            }
        }

        let relX = 0; 
        switch(player.facing) { 
            case 0: relX = dx; break;   
            case 1: relX = dy; break;   
            case 2: relX = -dx; break;  
            case 3: relX = -dy; break;  
        } 

        let panValue = (distance === 0) ? 0 : (relX / distance); 
        panValue = Math.max(-1, Math.min(1, panValue)); 

        beacon.gainNode.gain.setTargetAtTime(volume * SFX_VOLUME * MASTER_VOLUME, audioCtx.currentTime, 0.1); 
        beacon.pannerNode.pan.setTargetAtTime(panValue, audioCtx.currentTime, 0.1); 
    }); 
} 

function removeBeaconAt(x, y) { 
    const index = beaconNodes.findIndex(b => b.x === x && b.y === y); 
    if (index > -1) { 
        let b = beaconNodes[index]; 
        b.isStopped = true; 
        if (b.source) { 
            try { b.source.stop(); } catch(e) {} 
        }
        if (b.timeoutId) clearTimeout(b.timeoutId); 
        beaconNodes.splice(index, 1); 
    } 
} 

// 8. Interaction & Floor Generation Logic
async function finishFloorTransition() {
    gameState = 'PLAYING_AUDIO';
    generateFloor(); 
    startBeacons(); 
    
    await playBasicSound('floor', VOICE_BOOST);
    await playNumber(playerStats.floor); 
    
    if (playerStats.floor > 10 && Math.random() < 0.30) {
        let targetTile = (Math.random() < 0.5) ? TILE_STREAM : TILE_RESERVE;
        let removed = false;
        
        for (let y = 0; y < GRID_SIZE; y++) {
            for (let x = 0; x < GRID_SIZE; x++) {
                if (dungeonGrid[y][x] === targetTile) {
                    dungeonGrid[y][x] = TILE_EMPTY;
                    removeBeaconAt(x, y);
                    removed = true;
                }
            }
        }
        
        if (removed) {
            let bossVoice = (targetTile === TILE_STREAM) ? 'bossStream' : 'bossReserve';
            await playBasicSound(bossVoice, VOICE_BOOST);
            await playBasicSound('magicMissileSFX', SFX_VOLUME);
            await new Promise(r => setTimeout(r, 500));
        }
    }
    
    gameState = 'FREE_ROAM'; 
}

async function checkInteraction() { 
    const currentTile = dungeonGrid[player.y][player.x]; 
    
    if (currentTile === TILE_STAIRS) { 
        gameState = 'PLAYING_AUDIO'; 
        
        await playBasicSound('stairTraversal', SFX_VOLUME); 
        
        playerStats.floor++; 
        beaconNodes.forEach(b => b.gainNode.gain.value = 0);
        
        if (playerStats.floor === 99) {
            if (ambientSource) ambientSource.stop();
            generateFloor(); 
            
            await playBasicSound('bossEncounter', VOICE_BOOST);
            
            currentMonster = { x: -1, y: -1, hp: 300, type: 'darkMagician', isBoss: true };
            startAmbientTrack('battleMusic', 0.25);
            
            await playBasicSound('battleStart', VOICE_BOOST); 
            await playBasicSound(currentMonster.type, VOICE_BOOST); 
            await playBasicSound('enemyAppeared', VOICE_BOOST); 
            
            await announceBattleStatus();
        }
        else if (Math.random() < 0.20) {
            initiateMerchant();
        } else {
            await finishFloorTransition();
        }
    } 
    else if (currentTile === TILE_CHEST) { 
        gameState = 'PLAYING_AUDIO';
        playBasicSound('chestOpen', SFX_VOLUME); 
        dungeonGrid[player.y][player.x] = TILE_EMPTY;  
        removeBeaconAt(player.x, player.y); 
        
        let goldFound = Math.floor(Math.random() * 5) + 1; 
        playerStats.gold = Math.min(99, playerStats.gold + goldFound); 
        
        await new Promise(r => setTimeout(r, 1000));
        await playBasicSound('youFound', VOICE_BOOST);
        await playNumber(goldFound);
        await playBasicSound('gold', VOICE_BOOST);

        gameState = 'FREE_ROAM';
    } 
    else if (currentTile === TILE_STREAM) { 
        gameState = 'PLAYING_AUDIO';
        
        playerStats.hp = playerStats.maxHp;
        
        await playBasicSound('healing', SFX_VOLUME); 
        await new Promise(r => setTimeout(r, 1000)); 
        await playBasicSound('hpRecovered', VOICE_BOOST);
        
        gameState = 'FREE_ROAM';
    } 
    else if (currentTile === TILE_RESERVE) { 
        gameState = 'PLAYING_AUDIO';
        
        playerStats.mp = playerStats.maxMp;
        
        await playBasicSound('healing', SFX_VOLUME); 
        await new Promise(r => setTimeout(r, 1000)); 
        await playBasicSound('mpRecovered', VOICE_BOOST);
        
        gameState = 'FREE_ROAM';
    } 
    else { 
        playBasicSound('confirm', SFX_VOLUME); 
    } 
} 

function moveMonsters() { 
    monsters.forEach(m => { 
        if (m.hp <= 0) return;  
        
        if (!m.type) {
            const types = ['goblin', 'orc', 'giantSpider'];
            m.type = types[Math.floor(Math.random() * types.length)];
        }

        let dx = player.x - m.x; 
        let dy = player.y - m.y; 
        let nx = m.x; 
        let ny = m.y; 
        
        if (Math.abs(dx) > Math.abs(dy)) { 
            nx += (dx > 0) ? 1 : -1; 
        } else {
            ny += (dy > 0) ? 1 : -1; 
        } 
        
        if (nx >= 0 && nx < GRID_SIZE && ny >= 0 && ny < GRID_SIZE) {  
            if (dungeonGrid[ny][nx] === TILE_EMPTY || dungeonGrid[ny][nx] === TILE_PLAYER) {  
                if (dungeonGrid[m.y][m.x] === TILE_MONSTER) {  
                    dungeonGrid[m.y][m.x] = TILE_EMPTY;   
                } 
                
                m.x = nx; 
                m.y = ny; 
                
                if (dungeonGrid[ny][nx] === TILE_EMPTY) {  
                    dungeonGrid[ny][nx] = TILE_MONSTER;  
                } 

                let soundKey = '';
                if (m.type === 'goblin') soundKey = 'goblinNearby';
                else if (m.type === 'orc') soundKey = 'orcNearby';
                else if (m.type === 'giantSpider') soundKey = 'spiderNearby';

                if (soundKey) {
                    playSpatialSound(soundKey, m.x, m.y, SFX_VOLUME);
                }
            } 
        } 
    }); 
} 

// 9. Menu & Combat Resolution Logic
async function adjustVolume(step) {
    let newVol = currentVolumeLevel + step;
    
    if (newVol >= 1 && newVol <= 5) {
        currentVolumeLevel = newVol;
        updateMasterVolume();
        
        gameState = 'PLAYING_AUDIO';
        playBasicSound('select', SFX_VOLUME);
        await playNumber(currentVolumeLevel);
        gameState = 'VOLUME_MENU';
    } else {
        playBasicSound('cancel', SFX_VOLUME);
    }
}

async function returnToPauseMenuFromVolume() {
    gameState = 'PLAYING_AUDIO';
    await playBasicSound('cancel', SFX_VOLUME);
    await playBasicSound(pauseOptions[pauseIndex], VOICE_BOOST);
    gameState = 'PAUSE_MENU';
}

async function navigateMenu(optionAudioKey) { 
    gameState = 'PLAYING_AUDIO'; 
    playBasicSound('select', SFX_VOLUME); 
    await playBasicSound(optionAudioKey, VOICE_BOOST); 
    
    if (merchantOptions.includes(optionAudioKey) && optionAudioKey !== 'finishShopping') {
        let costAmt = (optionAudioKey === 'healingPotion' || optionAudioKey === 'magicPotion') ? 5 : 10;
        await playBasicSound('cost', VOICE_BOOST);
        await playNumber(costAmt);
        await playBasicSound('gold', VOICE_BOOST);
    }

    if (titleOptions.includes(optionAudioKey)) {
        gameState = 'MAIN_MENU';
    } else if (pauseOptions.includes(optionAudioKey)) {
        gameState = 'PAUSE_MENU';
    } else if (merchantOptions.includes(optionAudioKey)) {
        gameState = 'MERCHANT_MENU';
    } else {
        gameState = 'BATTLE_MENU';
    }
}

async function openMainMenu() {
    gameState = 'PLAYING_AUDIO';
    startAmbientTrack('titleMusic', 0.30);
    await playBasicSound('mainMenu', VOICE_BOOST);
    
    titleIndex = 0;
    await playBasicSound(titleOptions[titleIndex], VOICE_BOOST);
    gameState = 'MAIN_MENU';
}

async function executeTitleAction() {
    gameState = 'PLAYING_AUDIO';
    playBasicSound('confirm', SFX_VOLUME);
    
    let action = titleOptions[titleIndex];
    if (action === 'newGame') {
        playerStats = { hp: 8, maxHp: 8, mp: 3, maxMp: 3, floor: 1, gold: 0, baseDamage: 4 };
        playerStepCount = 0;
        if (ambientSource) ambientSource.stop();
        skipTutorialFlag = false;
        startTutorial();
    } else if (action === 'loadGame') {
        let savedData = localStorage.getItem('audioRpgSave');
        if (savedData) {
            playerStats = JSON.parse(savedData);
            if (ambientSource) ambientSource.stop();
            startAmbientTrack('dungeon', 0.15); 
            
            await finishFloorTransition();
        } else {
            playBasicSound('cancel', SFX_VOLUME);
            gameState = 'MAIN_MENU';
        }
    }
}

async function openPauseMenu() { 
    gameState = 'PLAYING_AUDIO'; 
    beaconNodes.forEach(b => b.gainNode.gain.value = 0); 
    await playBasicSound('pause', VOICE_BOOST); 
    
    pauseIndex = 0; 
    await playBasicSound(pauseOptions[pauseIndex], VOICE_BOOST); 
    gameState = 'PAUSE_MENU'; 
}

async function executePauseAction() { 
    gameState = 'PLAYING_AUDIO'; 
    playBasicSound('confirm', SFX_VOLUME); 
    
    let action = pauseOptions[pauseIndex]; 
    if (action === 'saveGame') { 
        localStorage.setItem('audioRpgSave', JSON.stringify(playerStats));
        await playBasicSound('save', SFX_VOLUME); 
        await playBasicSound('progressSaved', VOICE_BOOST); 
        gameState = 'FREE_ROAM'; 
        updateBeacons(); 
    } 
    else if (action === 'titleReturn') {
        if (ambientSource) ambientSource.stop();
        stopAllBeacons(); 
        openMainMenu();
        return;
    }
    else if (action === 'checkStats') {
        await playBasicSound('playerHP', VOICE_BOOST);
        await playNumber(playerStats.hp);
        await playBasicSound('maxHP', VOICE_BOOST);
        await playNumber(playerStats.maxHp);
        
        await playBasicSound('playerMP', VOICE_BOOST);
        await playNumber(playerStats.mp);
        await playBasicSound('maxMP', VOICE_BOOST);
        await playNumber(playerStats.maxMp);
        
        await playNumber(playerStats.gold);
        await playBasicSound('gold', VOICE_BOOST);
        
        await playBasicSound('floor', VOICE_BOOST);
        await playNumber(playerStats.floor);

        gameState = 'PAUSE_MENU';
    }
    else if (action === 'volume') {
        await new Promise(r => setTimeout(r, 300)); 
        await playNumber(currentVolumeLevel);
        gameState = 'VOLUME_MENU';
    }
    else {
        gameState = 'FREE_ROAM';
        updateBeacons();
    }
}

async function initiateMerchant() {
    gameState = 'PLAYING_AUDIO';
    
    if (ambientSource) ambientSource.stop();
    startAmbientTrack('merchantMusic', 0.25);
    
    await playBasicSound('merchantEncounter', VOICE_BOOST);
    
    merchantIndex = 0;
    await playBasicSound(merchantOptions[merchantIndex], VOICE_BOOST);
    gameState = 'MERCHANT_MENU';
}

async function executeMerchantAction() {
    gameState = 'PLAYING_AUDIO';
    let action = merchantOptions[merchantIndex];

    if (action === 'finishShopping') {
        playBasicSound('confirm', SFX_VOLUME);
        startAmbientTrack('dungeon', 0.15);
        
        await finishFloorTransition();
        return;
    }

    let cost = (action === 'healingPotion' || action === 'magicPotion') ? 5 : 10;

    if (playerStats.gold >= cost) { 
        playerStats.gold -= cost; 
        playBasicSound('purchaseSuccess', SFX_VOLUME); 

        if (action === 'healingPotion') { 
            playerStats.hp = playerStats.maxHp; 
            await playBasicSound('healing', SFX_VOLUME); 
            await new Promise(r => setTimeout(r, 1000)); 
            await playBasicSound('hpRecovered', VOICE_BOOST); 
        } else if (action === 'magicPotion') { 
            playerStats.mp = playerStats.maxMp; 
            await playBasicSound('healing', SFX_VOLUME); 
            await new Promise(r => setTimeout(r, 1000)); 
            await playBasicSound('mpRecovered', VOICE_BOOST); 
        } else if (action === 'upgradeStrength') { 
            playerStats.baseDamage += 2; 
        } else if (action === 'upgradeHealth') { 
            playerStats.maxHp += 2; 
            playerStats.hp += 2; 
            await playBasicSound('maxHP', VOICE_BOOST);
            await playNumber(playerStats.maxHp);
        } else if (action === 'upgradeMagic') { 
            playerStats.maxMp += 1; 
            playerStats.mp += 1; 
            await playBasicSound('maxMP', VOICE_BOOST);
            await playNumber(playerStats.maxMp);
        }

        gameState = 'MERCHANT_MENU';
    } else {
        await playBasicSound('cancel', SFX_VOLUME);
        gameState = 'MERCHANT_MENU';
    }
}

async function initiateBattle(monster) { 
    gameState = 'PLAYING_AUDIO'; 
    currentMonster = monster; 
    
    if (!currentMonster.type) { 
        const types = ['goblin', 'orc', 'giantSpider']; 
        currentMonster.type = types[Math.floor(Math.random() * types.length)]; 
    }
    
    beaconNodes.forEach(b => b.gainNode.gain.value = 0);  
    startAmbientTrack('battleMusic', 0.25);
    
    await playBasicSound('battleStart', VOICE_BOOST); 
    await playBasicSound(currentMonster.type, VOICE_BOOST); 
    await playBasicSound('enemyAppeared', VOICE_BOOST); 
    
    await announceBattleStatus(); 
} 

async function announceBattleStatus() { 
    gameState = 'PLAYING_AUDIO'; 
    
    await playBasicSound('playerHP', VOICE_BOOST); 
    await playNumber(playerStats.hp); 
    
    await playBasicSound('playerMP', VOICE_BOOST); 
    await playNumber(playerStats.mp); 
    
    await playBasicSound('enemyHP', VOICE_BOOST); 
    await playNumber(currentMonster.hp); 
    
    await playBasicSound('actionPrompt', VOICE_BOOST); 
    
    battleIndex = 0; 
    await playBasicSound(battleOptions[battleIndex], VOICE_BOOST); 
    gameState = 'BATTLE_MENU'; 
}

async function executeBattleTurn() { 
    gameState = 'PLAYING_AUDIO'; 
    playBasicSound('confirm', SFX_VOLUME); 
    let action = battleOptions[battleIndex]; 
    
    if (action === 'attack') { 
        await playBasicSound('playerAttack', VOICE_BOOST); 
        await playBasicSound('bladeHit', SFX_VOLUME);  
        currentMonster.hp -= playerStats.baseDamage;  
        await new Promise(r => setTimeout(r, 500)); 
    } 
    else if (action === 'magicAction') {
        if (playerStats.mp > 0) {
            playerStats.mp -= 1;
            await playBasicSound('magicMissileVoice', VOICE_BOOST);
            await playBasicSound('magicMissileSFX', SFX_VOLUME);
            currentMonster.hp -= (playerStats.baseDamage * 2); 
            await new Promise(r => setTimeout(r, 500));
        } else {
            playBasicSound('cancel', SFX_VOLUME);
            gameState = 'BATTLE_MENU';
            return;
        }
    }
    else if (action === 'run') { 
        playBasicSound('footsteps', SFX_VOLUME); 
        
        if (currentMonster && !currentMonster.isBoss) {
            dungeonGrid[currentMonster.y][currentMonster.x] = TILE_EMPTY;
            const mIndex = monsters.indexOf(currentMonster);
            if (mIndex > -1) monsters.splice(mIndex, 1);
        }

        endBattle(); 
        return; 
    }

    if (currentMonster.hp > 0) { 
        await playBasicSound('enemyAttack', VOICE_BOOST); 
        await playBasicSound('bluntHit', SFX_VOLUME);  
        
        let enemyDamage;
        if (currentMonster.isBoss) {
            enemyDamage = 15; 
        } else {
            enemyDamage = 2 + Math.floor((playerStats.floor - 1) / 5);
        }
        playerStats.hp -= enemyDamage;  
        
        await new Promise(r => setTimeout(r, 500)); 
        
        if (playerStats.hp <= 0) { 
            await playBasicSound('youDied', VOICE_BOOST); 
            await playBasicSound('gameOver', VOICE_BOOST); 
            
            playerStats.hp = playerStats.maxHp;  
            currentMonster = null; 
            if (ambientSource) ambientSource.stop();
            stopAllBeacons(); 
            openMainMenu(); 
            return; 
        } 
        await announceBattleStatus(); 
    } else {
        if (currentMonster.isBoss) {
            await playBasicSound('youDefeatedThe', VOICE_BOOST);
            await playBasicSound(currentMonster.type, VOICE_BOOST);
            
            await new Promise(r => setTimeout(r, 2000));
            currentMonster = null; 
            if (ambientSource) ambientSource.stop();
            stopAllBeacons(); 
            openMainMenu();
            return;
        }

        dungeonGrid[currentMonster.y][currentMonster.x] = TILE_EMPTY;  
        const mIndex = monsters.indexOf(currentMonster);
        if (mIndex > -1) monsters.splice(mIndex, 1);

        await playBasicSound('youDefeatedThe', VOICE_BOOST); 
        await playBasicSound(currentMonster.type, VOICE_BOOST); 
        
        playBasicSound('chestOpen', SFX_VOLUME); 
        await new Promise(r => setTimeout(r, 1000)); 

        let goldFound = Math.floor(Math.random() * 5) + 1;
        playerStats.gold = Math.min(99, playerStats.gold + goldFound);

        await playBasicSound('youFound', VOICE_BOOST);
        await playNumber(goldFound);
        await playBasicSound('gold', VOICE_BOOST);

        endBattle(); 
    }
}

function endBattle() { 
    currentMonster = null; 
    startAmbientTrack('dungeon', 0.15); 
    updateBeacons();  
    gameState = 'FREE_ROAM'; 
}

// 10. Tutorial Sequence Logic
async function startTutorial() { 
    gameState = 'PLAYING_AUDIO'; 
    
    await playTutorialAudio('welcome', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('locateBump', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('confirmF', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    
    gameState = 'WAITING_FOR_F'; 
} 

async function stepTwoCancelJ() { 
    gameState = 'PLAYING_AUDIO'; 
    
    await playTutorialAudio('cancelJ', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    
    gameState = 'WAITING_FOR_J'; 
} 

async function stepThreeCalibrationComplete() { 
    gameState = 'PLAYING_AUDIO'; 
    
    await playTutorialAudio('calibrationComplete', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('gridExplain', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('movement', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    
    gameState = 'WAITING_FOR_UP_DOWN';  
} 

async function stepFourTurning() { 
    gameState = 'PLAYING_AUDIO'; 
    
    setTimeout(async () => { 
        await playTutorialAudio('turning', VOICE_BOOST); 
        if (skipTutorialFlag) return; 
        
        gameState = 'WAITING_FOR_LEFT_RIGHT'; 
    }, 500); 
} 

async function stepFiveEnvironment() { 
    gameState = 'PLAYING_AUDIO'; 
    
    await playTutorialAudio('timeMechanic', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    
    await playTutorialAudio('streamVoice', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('stream', SFX_VOLUME, 2);  
    if (skipTutorialFlag) return; 
    
    await playTutorialAudio('reserveVoice', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('magicalHum', SFX_VOLUME, 2);  
    if (skipTutorialFlag) return; 
    
    await playTutorialAudio('chestVoice', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('chestNearby', SFX_VOLUME, 2);  
    if (skipTutorialFlag) return; 
    
    await playTutorialAudio('stairsVoice', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    await playTutorialAudio('stairsNearby', SFX_VOLUME, 2);  
    if (skipTutorialFlag) return; 
    
    await playTutorialAudio('goal', VOICE_BOOST); 
    if (skipTutorialFlag) return; 
    
    startAmbientTrack('dungeon', 0.15);  
    await finishFloorTransition();
    console.log("Tutorial Complete. Awaiting dungeon generation."); 
}