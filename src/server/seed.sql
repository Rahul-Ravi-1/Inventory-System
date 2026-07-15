INSERT INTO items (item_id, name, description) VALUES
  ('weapon_01', 'Shotgun', 'Gets the job done'),
  ('item_01', 'Bandage', 'You will definitely need this'),
  ('misc_01', 'Shells', 'Helps get the job done');

INSERT INTO inventory_slots (slot_index, item_id)
SELECT generate_series(0, 15), NULL;
UPDATE inventory_slots SET item_id = 'weapon_01' WHERE slot_index = 0;
UPDATE inventory_slots SET item_id = 'item_01'   WHERE slot_index = 1;
UPDATE inventory_slots SET item_id = 'misc_01'   WHERE slot_index = 2;