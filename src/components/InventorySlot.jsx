
export default function InventorySlot({onClick , label, isSelected}) {
    return <button type="button" 
            className={`${isSelected ? "inventory-slot-selected" : "inventory-slot"}`}
            onClick={onClick}
            >
        {label}
    </button>;
}

