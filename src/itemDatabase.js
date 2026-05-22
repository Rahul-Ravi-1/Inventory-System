export const itemDatabase = [
    {itemID: "weapon_01" , name: "Shotgun" , desc: "Gets the job done"},
    {itemID: "misc_01" , name: "Shells" , desc: "Helps get the job done"},
    {itemID: "item_01" , name: "Bandage" , desc: "You will defintely need this"}
]

export function getItemID(itemID) {
    if (!itemID) return null;
    return itemDatabase.find((item) => item.itemID === itemID) ?? null;
}