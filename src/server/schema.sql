CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  item_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT
);
CREATE TABLE inventory_slots (
  slot_index INTEGER PRIMARY KEY CHECK (slot_index >= 0 AND slot_index < 16),
  item_id TEXT REFERENCES items(item_id)
);