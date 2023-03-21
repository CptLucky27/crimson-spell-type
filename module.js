// Define the Crimson spell type
CONFIG.DND5E.spellTypes["crm"] = "Crimson";

// Define the Crimson icon
CONFIG.DND5E.spellSchools["crm"] = "modules/crimson-spell-type/icons/crimson.png";

// Register the Crimson spell type with the system
Hooks.on("init", () => {
  CONFIG.DND5E.spellPreparationModes.push("crm");
});

// Add the Crimson spell type to the spell creation dialog
Hooks.on("renderSpellConfig", (sheet, html) => {
  let typeSelect = html.find('select[name="data.type"]');
  typeSelect.append('<option value="crm">Crimson</option>');
});

// Add the Crimson spell type to the spellbook display
Hooks.on("renderSpellbookHeader", (app, html) => {
  let typeSelect = html.find('select[name="filterType"]');
  typeSelect.append('<option value="crm">Crimson</option>');
});
