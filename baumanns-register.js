// Einfaches Baumanns-Register (Beispiel)

// Register als Array
const baumannsRegister = [];

// Funktion zum Hinzufügen eines Eintrags
function addEntry(name, beschreibung) {
  const eintrag = {
    name,
    beschreibung,
    datum: new Date().toLocaleDateString()
  };
  baumannsRegister.push(eintrag);
}

// Beispiel: Einträge hinzufügen
addEntry("Eintrag 1", "Beschreibung des ersten Eintrags.");
addEntry("Eintrag 2", "Weitere Informationen zu Eintrag 2.");

// Funktion zum Anzeigen des Registers
function showRegister() {
  console.log("📘 Baumanns-Register:");
  baumannsRegister.forEach((e, i) => {
    console.log(`${i + 1}. ${e.name} – ${e.beschreibung} (eingetragen am ${e.datum})`);
  });
}

// Register ausgeben
showRegister();
