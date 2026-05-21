import InventorySlot from "./InventorySlot";
import { getItemID } from "./itemDatabase";
import React, { useState } from "react";

export default function App() {

  const COLS = 4;
  const ROWS = 4;

  const CAPACITY = COLS * ROWS;

  const [inventory , setInventory] = useState(() => {
    const slots = {};
    for (let i = 0; i < CAPACITY; i++) slots[i] = null;
    slots[1] = "weapon_01";
    return slots;
  });

  function handleSlotClick(slotIndex) {
    const itemID = inventory[slotIndex]

    if (itemID) {
      const item = getItemID(itemID)
      console.log(` ${item.name} : ${item.desc}`);
    }
    else{
      console.log(`Slot ${slotIndex} is empty`);
    }
  }

  function slotToPosition(slotID , cols){
    return {
      row: Math.floor(slotID / cols),
      col: slotID % cols,
    };
  }
  function positionToSlot(row, col, cols) {
    return row * cols + col;
  }
  return (
    <main>
      <h1>Inventory</h1>

      <div className="inventory-box"
      style={{ '--cols': COLS, '--rows': ROWS }}
      >
        {Array.from({ length: CAPACITY }, (_, slotIndex) => (
          <InventorySlot 
          key={slotIndex} 
          slotID={getItemID(inventory[slotIndex])?.name ?? slotIndex + 1}
          onClick={ () => handleSlotClick(slotIndex)}>
          </InventorySlot>
        ))}
      </div>
    </main>
  )
}
