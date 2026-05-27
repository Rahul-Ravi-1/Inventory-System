
export default function InventorySlot({onClick , label , slotIndex , isSelected}) {
    return <button type="button" 
            className={`${isSelected ? "inventory-slot-selected" : "inventory-slot"}`}
            onClick={onClick}
            slotIndex = {slotIndex}
            >
        {label}
    </button>;
}

