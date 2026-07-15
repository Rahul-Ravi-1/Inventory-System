# Inventory CRUD — Solo Session Checklist

Advanced todo-list-style diagnostic: React frontend + Express API + PostgreSQL.

**Rules:** No AI for implementation. Docs (MDN, Postgres, node-pg) are fine. Finish one session + test before moving on. Turn off **Cursor Tab** during solo work.

**Architecture:**
```
React (Vite)  --fetch-->  Node/Express API  --SQL-->  PostgreSQL
```

**Tables:**
- `items` — master catalog (id, item_id, name, description)
- `inventory_slots` — 16 rows (slot_index 0–15, item_id nullable FK)

---

## Session 1 — Frontend bugs ✅ DONE

- [x] Fix `prev` in `setInventory` (not `inventory`)
- [x] Call `getItemID(itemID)` correctly
- [x] Remove invalid `slotIndex` prop from `<button>`

**Test:** Select slot → swap → click outside → deselect works.

---

## Session 2 — PostgreSQL setup

**Goal:** Database exists; you can query it by hand.

- [ ] Install PostgreSQL (or Docker)
- [ ] Create database (e.g. `inventory_app`)
- [ ] Create `items` and `inventory_slots` tables
- [ ] Seed 3 items + assign to slots 0, 1, 2
- [ ] Run join query: slot index + item name

**Pass:** Join query shows slot 0 = Shotgun (or your seed data).

---

## Session 3 — Backend skeleton + DB connection

**Goal:** API runs and returns data from Postgres.

- [ ] Add `/server` folder (separate from Vite frontend)
- [ ] Install: express, pg, cors, dotenv
- [ ] `.env` with `DATABASE_URL` (do not commit)
- [ ] `GET /api/health` → `{ ok: true }`
- [ ] `GET /api/items` → rows from `items` table

**Pass:** `curl http://localhost:3001/api/items` returns JSON.

---

## Session 4 — Read inventory from DB (first full-stack feature)

**Backend:**
- [ ] `GET /api/inventory` — all 16 slots with item details (JOIN)
- [ ] Response shape easy to map in React

**Frontend:**
- [ ] `useEffect` on mount → fetch inventory
- [ ] Replace hardcoded `createInventory({...})` seed
- [ ] Basic loading + error UI
- [ ] Vite proxy or CORS configured

**Pass:** Refresh browser → grid shows DB data.

---

## Session 5 — Swap/move via API

**Backend:**
- [ ] Move `moveItem` logic to server (transaction for two slot updates)
- [ ] `PUT /api/inventory/swap` — body: `{ from, to }`
- [ ] Return updated inventory

**Frontend:**
- [ ] Replace local `moveItem` with fetch to swap endpoint
- [ ] Update state from response (or refetch)
- [ ] Keep `selectedSlot` logic client-side

**Pass:** Swap items → refresh → swap persists.

---

## Session 6 — Remove item from slot

**Backend:**
- [ ] `DELETE /api/inventory/slots/:slotIndex` (or PUT to set `item_id = NULL`)
- [ ] Return updated inventory

**Frontend:**
- [ ] Remove button when slot is selected
- [ ] Call API → update state

**Pass:** Remove item → refresh → slot empty in DB.

---

## Session 7 — Add item to empty slot

**Backend:**
- [ ] `PUT /api/inventory/slots/:slotIndex` — body: `{ itemId }`
- [ ] Reject if slot is occupied

**Frontend:**
- [ ] Dropdown from `GET /api/items`
- [ ] Pick item → click empty slot → API call

**Pass:** Add item to slot 5 → persists after refresh.

---

## Session 8 — Item catalog CRUD

**Backend:**
- [ ] `POST /api/items` — create
- [ ] `PUT /api/items/:id` — update
- [ ] `DELETE /api/items/:id` — delete (handle in-use items)
- [ ] Validate: unique `item_id`, required `name`

**Frontend:**
- [ ] Form to add / edit / delete items
- [ ] Refresh list after each action

**Pass:** Create "Medkit" → appears in dropdown → place in grid.

---

## Session 9 — Item details panel

**Frontend:**
- [ ] When slot selected, show name + description from API data
- [ ] Empty slot → show "Empty slot"

**Pass:** Select item → description visible.

---

## Session 10 — Polish + proof

- [ ] Error handling (API down, bad slot, duplicate item_id)
- [ ] Loading states on async actions
- [ ] SQL transactions on swap (both succeed or neither)
- [ ] Manual test script: load → swap → remove → add → CRUD → refresh

**Pass:** Full demo without AI; explain each layer (UI → API → DB).

---

## Quick reference

| Done | Remaining |
|------|-----------|
| Grid UI, select/swap UI | Postgres + API |
| Bug fixes (Session 1) | All CRUD via API |
| `inventorySystem.js` (local) | Move logic to server |

**Skip:** `localStorage` — Postgres is persistence.

**Next session:** Session 2 — Postgres install, schema, seed, manual queries.

---

## Stuck? (no AI)

1. Console error → fix that line first
2. State not updating → log inside `setState`; return new objects
3. API issue → test route with `curl` before touching React
4. DB issue → test query in `psql` before wiring to Express
5. 30 min stuck → look up one concept on docs, try again
