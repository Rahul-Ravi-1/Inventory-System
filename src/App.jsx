import InventorySlot from "./InventorySlot";

export default function App() {

  const COLS = 4;
  const ROWS = 4;

  const CAPACITY = COLS * ROWS;

  const buttons = Array.from({ length: CAPACITY }, (_, i) => i + 1);

  return (
    <main>
      <h1>Inventory</h1>

      <div className="inventory-box"
      style={{ '--cols': COLS, '--rows': ROWS }}
      >
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
