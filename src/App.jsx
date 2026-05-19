import InventorySlot from "./InventorySlot";

export default function App() {

  const buttons = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <main>
      <h1>Inventory</h1>

      <div className="inventory-box">
        {buttons.map((num) => (
          <InventorySlot 
          key={num} 
          onClick={ () => console.log(`Button ${num} clicked!`)}>
            {num}
          </InventorySlot>
        ))}
      </div>
    </main>
  )
}
