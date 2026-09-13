// dungeon.js

const GRID_SIZE = 8;

// Entity IDs
const TILE_EMPTY = 0;
const TILE_PLAYER = 1;
const TILE_STAIRS = 2;
const TILE_STREAM = 3;   // HP heal
const TILE_RESERVE = 4;  // MP heal
const TILE_CHEST = 5;    // Loot
const TILE_MONSTER = 6;  // Enemy

// Global Floor State
let dungeonGrid = [];
let player = { x: 0, y: 0, facing: 0 }; // Facing: 0=North, 1=East, 2=South, 3=West
let monsters = [];
let audioObjects = []; // Stores coordinate data for the 3D panning engine

function generateFloor() {
    // 1. Initialize the 8x8 grid with empty tiles
    dungeonGrid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
        let row = [];
        for (let x = 0; x < GRID_SIZE; x++) {
            row.push(TILE_EMPTY);
        }
        dungeonGrid.push(row);
    }
    
    monsters = [];
    audioObjects = [];

    // 2. Helper function to prevent spawning entities on top of each other
    function getRandomEmptyTile() {
        let x, y;
        do {
            x = Math.floor(Math.random() * GRID_SIZE);
            y = Math.floor(Math.random() * GRID_SIZE);
        } while (dungeonGrid[y][x] !== TILE_EMPTY);
        return { x, y };
    }

    // 3. Place the Player
    let startPos = getRandomEmptyTile();
    player.x = startPos.x;
    player.y = startPos.y;
    player.facing = 0; // Always start facing North
    dungeonGrid[player.y][player.x] = TILE_PLAYER;

    // 4. Place the Stairs
    let stairPos = getRandomEmptyTile();
    dungeonGrid[stairPos.y][stairPos.x] = TILE_STAIRS;
    audioObjects.push({ type: 'stairs', x: stairPos.x, y: stairPos.y, audioKey: 'stairsNearby' });

    // 5. Place 1 Stream (HP)
    let streamPos = getRandomEmptyTile();
    dungeonGrid[streamPos.y][streamPos.x] = TILE_STREAM;
    audioObjects.push({ type: 'stream', x: streamPos.x, y: streamPos.y, audioKey: 'stream' });

    // 6. Place 1 Reserve (MP)
    let reservePos = getRandomEmptyTile();
    dungeonGrid[reservePos.y][reservePos.x] = TILE_RESERVE;
    audioObjects.push({ type: 'reserve', x: reservePos.x, y: reservePos.y, audioKey: 'magicalHum' });

    // 7. Place 1-2 Chests
    let numChests = Math.floor(Math.random() * 2) + 1; 
    for (let i = 0; i < numChests; i++) {
        let chestPos = getRandomEmptyTile();
        dungeonGrid[chestPos.y][chestPos.x] = TILE_CHEST;
        audioObjects.push({ type: 'chest', x: chestPos.x, y: chestPos.y, audioKey: 'chestNearby' });
    }

    // 8. Place Monsters based on the current floor
    // Safely check playerStats in case generateFloor runs before game.js fully initializes
    let currentFloor = (typeof playerStats !== 'undefined') ? playerStats.floor : 1;
    let numMonsters = currentFloor >= 50 ? 2 : 1;
    
    // Scale HP: Base 10, +2 HP for every 5 floors traversed
    let scaledHp = 10 + (Math.floor(currentFloor / 5) * 2);
    
    for (let i = 0; i < numMonsters; i++) {
        let monsterPos = getRandomEmptyTile();
        dungeonGrid[monsterPos.y][monsterPos.x] = TILE_MONSTER;
        monsters.push({ id: i, x: monsterPos.x, y: monsterPos.y, hp: scaledHp, mp: 0 }); 
    }

    console.log(`Floor ${currentFloor} Generated Successfully with ${numMonsters} monster(s) at ${scaledHp} HP.`);
}