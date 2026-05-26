import InventorySlot from "./InventorySlot";
import inventorySystem from "./inventorySystem";
import { getItemID } from "./itemDatabase";
import React, { useState } from "react";

export default function App() {
  const [inventory, setInventory] = useState(() =>
    inventorySystem.createInventory()
  );

  const [selectedSlot, setSelectedSlot] = useState(null);

  function handleSlotClick(slotIndex) {
    const itemID = inventory[slotIndex];
    const item = getItemID;
    if(selectedSlot === null) {
      if(!inventory[slotIndex]) return;
      setSelectedSlot(slotIndex);
      return;
    }
    setInventory((prev) =>
      inventorySystem.moveItem(inventory , selectedSlot, slotIndex)
    );
    setSelectedSlot(null);
  }
return (
    <main>
      <h1>Inventory</h1>
      <div id = "container">
      <div
        className="inventory-box"
        style={{
          "--cols": inventorySystem.COLS,
          "--rows": inventorySystem.ROWS,
        }}
      >
        {Array.from({ length: inventorySystem.CAPACITY }, (_, slotIndex) => {
          const itemID = inventory[slotIndex];
          const item = getItemID(itemID);
          return (
            <InventorySlot
              key={slotIndex}
              isSelected = {selectedSlot === slotIndex}
              slotIndex = {slotIndex}
              label={item?.name ?? slotIndex + 1}
              onClick={() => handleSlotClick(slotIndex)}
            />
          );
        })}
      </div>
      </div>
    </main>
  );
}
