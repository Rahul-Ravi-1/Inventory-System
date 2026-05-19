import './index.css';

export default function InventorySlot({onClick , slotID}) {
    return <button type="button" className="inventory-slot"  onClick={onClick}>
        {slotID}
    </button>;
}

