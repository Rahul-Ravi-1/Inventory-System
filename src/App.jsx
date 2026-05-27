import InventorySlot from "./components/InventorySlot";
import inventorySystem from "./inventorySystem";
import { getItemID } from "./itemDatabase";
import React, { useState , useEffect } from "react";

export default function App() {
  const [inventory, setInventory] = useState(() =>
    inventorySystem.createInventory({0: "weapon_01" , 1: "item_01", 2: "misc_01"})
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

  useEffect(() =>
    {
      if (selectedSlot === null) return;

      function handlePointerDown(event) {
        const clickedSlot = event.target.closest (".inventory-slot-selected, .inventory-slot")

        if (clickedSlot) return;

        setSelectedSlot(null);
      }
      document.addEventListener("pointerdown" , handlePointerDown);
      return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [selectedSlot]);
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
