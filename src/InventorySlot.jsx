import './index.css';

export default function InventorySlot({onClick , label , slotID , isSelected}) {
    return <button type="button" 
            className={`inventory-slot${isSelected ? "inventory-slot-selected" : ""}`}
            onClick={onClick}
            data-slot-index = {slotID}
            >
        {label}
    </button>;
}

