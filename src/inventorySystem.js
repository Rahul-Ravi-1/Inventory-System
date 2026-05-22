const COLS = 4;
const ROWS = 4;
const CAPACITY = COLS * ROWS;

/**
 * Builds a slot map: every index 0..CAPACITY-1 starts null,
 * then optional seed items are placed (e.g. { 1: "weapon_01" }).
 */
function createInventory(seedItems = { 0: "weapon_01" , 1: "item_01" }) {
  const slots = {};
  for (let i = 0; i < CAPACITY; i++) {
    slots[i] = null;
  }
  for (const [slotIndex, itemID] of Object.entries(seedItems)) {
    slots[slotIndex] = itemID;
  }
  return slots;
}

function slotToPosition(slotIndex, cols = COLS) {
  return {
    row: Math.floor(slotIndex / cols),
    col: slotIndex % cols,
  };
}

function positionToSlot(row, col, cols = COLS) {
  return row * cols + col;
}

function moveItem ( inventory, from , to ) {
    if(from == to) return inventory;

    const next = {...inventory};
    const fromItem = next[from]
    const toItem = next[to]

    next[from] = toItem;
    next[to] = fromItem;

    return next;

}

export default {
  COLS,
  ROWS,
  CAPACITY,
  createInventory,
  slotToPosition,
  positionToSlot,
  moveItem,
};
