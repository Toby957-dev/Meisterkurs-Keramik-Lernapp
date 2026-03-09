// ════════════════════════════════════════════════════════════
//  FRAGENKATALOG – Meisterkurs Keramik
//  Bereinigt und zusammengeführt
//  Struktur: {c, d, q, o:[A,B,C,D], a, e}
// ════════════════════════════════════════════════════════════

const BANK = [

{c:"Physik & Mathe", d:1, q:"Was ist die Formel für Dichte?",
  o:["ρ = m · V", "ρ = m / V", "ρ = V / m", "ρ = m + V"], a:1,
  e:"Dichte ρ = Masse m geteilt durch Volumen V. Einheit: g/cm³ oder kg/m³."},

{c:"Physik & Mathe", d:1, q:"Wie berechnet man den Weg s bei gleichmäßiger Beschleunigung aus der Ruhe?",
  o:["s = a · t", "s = v · t", "s = ½ · a · t²", "s = a² · t"], a:2,
  e:"s = ½ · a · t². Bei Startgeschwindigkeit v₀ ≠ 0 gilt: s = v₀·t + ½·a·t²."},

{c:"Physik & Mathe", d:1, q:"Was ist die Formel für Längenausdehnung?",
  o:["ΔL = L₀ + α + ΔT", "ΔL = L₀ / (α · ΔT)", "ΔL = L₀ · α · ΔT", "ΔL = α / (L₀ · ΔT)"], a:2,
  e:"ΔL = L₀ · α · ΔT. α = Wärmeausdehnungskoeffizient [1/K], ΔT = Temperaturänderung [K]."},

{c:"Physik & Mathe", d:1, q:"Was besagt die Energieerhaltung?",
  o:["Energie verschwindet nach Nutzung", "Energie kann weder erzeugt noch vernichtet, nur umgewandelt werden", "Energie nimmt mit der Temperatur ab", "Kinetische Energie ist immer größer als potentielle"], a:1,
  e:"Energieerhaltungssatz: Epot + Ekin = konstant. Energie wird nur umgewandelt, nie vernichtet."},

{c:"Physik & Mathe", d:1, q:"Was ist potentielle Energie?",
  o:["E_pot = ½ · m · v²", "E_pot = m · g · h", "E_pot = F · t", "E_pot = m / h"], a:1,
  e:"E_pot = m · g · h. Lageenergie, die ein Körper durch seine Höhe h hat."},

{c:"Physik & Mathe", d:2, q:"Was ist kinetische Energie?",
  o:["E_kin = m · g · h", "E_kin = m · v", "E_kin = ½ · m · v²", "E_kin = F · s"], a:2,
  e:"E_kin = ½ · m · v². Bewegungsenergie eines Körpers der Masse m mit Geschwindigkeit v."},

{c:"Physik & Mathe", d:2, q:"Welche Einheit hat der WAK (Wärmeausdehnungskoeffizient)?",
  o:["°C", "K", "1/K", "kg/K"], a:2,
  e:"WAK hat die Einheit 1/K (oder K⁻¹). Typisch für Keramik: ca. 5–8 · 10⁻⁶ 1/K."},

{c:"Physik & Mathe", d:1, q:"Was gilt bei gleichförmiger Bewegung (a = 0)?",
  o:["v nimmt zu, s ist konstant", "v nimmt ab, s = a · t²", "v ist konstant, s = v · t", "v = 0, s = 0"], a:2,
  e:"Bei a = 0 gilt: v = konstant und s = v · t (keine Beschleunigung)."},

{c:"Chemie", d:1, q:"Was gibt die Periode im Periodensystem an?",
  o:["Anzahl der Protonen", "Anzahl der Elektronen", "Anzahl der Elektronenschalen", "Anzahl der Valenzelektronen"], a:2,
  e:"Periode (Zeile) = Anzahl der Elektronenschalen. Periode 3 → 3 Schalen."},

{c:"Chemie", d:1, q:"Was gibt die Hauptgruppe im PSE an?",
  o:["Anzahl der Valenzelektronen (Außenelektronen)", "Anzahl der Neutronen", "Anzahl der Schalen", "Atommasse"], a:0,
  e:"Hauptgruppe (Spalte) = Anzahl der Valenzelektronen. I. HG = 1 Valenzelektron → sehr reaktiv."},

{c:"Chemie", d:1, q:"Was ist die Oktettregel?",
  o:["Atome wollen 8 Protonen im Kern", "Atome zerfallen nach 8 Bindungen", "Moleküle haben immer 8 Bindungen", "Atome streben 8 Valenzelektronen an (Edelgaszustand)"], a:3,
  e:"Atome streben nach 8 Außenelektronen (Ausnahme H/He: 2). Triebkraft für chemische Bindungen."},

{c:"Chemie", d:2, q:"Was sind Kationen?",
  o:["Negativ geladene Ionen (nehmen Elektronen auf)", "Positiv geladene Ionen (geben Elektronen ab)", "Neutrale Teilchen", "Elektronen in der Außenschale"], a:1,
  e:"Kationen = positiv geladen. Entstehen wenn Metalle Elektronen abgeben (z.B. Na → Na⁺)."},

{c:"Chemie", d:1, q:"Welche Verbrennung ist gefährlich und erzeugt CO?",
  o:["Oxidierende Verbrennung (λ > 1)", "Neutrale Verbrennung (λ = 1)", "Reduzierende Verbrennung (λ < 1)", "Alle Verbrennungsarten"], a:2,
  e:"λ < 1 → Sauerstoffmangel → CO (Kohlenmonoxid, giftig!), Ruß, H₂. Gefährlicher Zustand!"},

{c:"Chemie", d:1, q:"Was ist die Ionenbindung?",
  o:["Bindung zwischen Nichtmetall + Nichtmetall (gemeinsame Elektronen)", "Bindung zwischen Metall + Nichtmetall (Elektronenübertragung)", "Bindung zwischen zwei Metallen", "Bindung durch Van-der-Waals-Kräfte"], a:1,
  e:"Ionenbindung = Metall gibt Elektronen an Nichtmetall ab. Entsteht ein Ionengitter (z.B. NaCl)."},

{c:"Chemie", d:2, q:"Warum haben Stoffe mit Ionenbindung hohe Schmelzpunkte?",
  o:["Weil sie leicht sind", "Weil die Anziehungskräfte im Ionengitter sehr stark und richtungslos sind", "Weil sie viele Elektronen haben", "Weil sie schlecht wärmeleitend sind"], a:1,
  e:"Ionengitter = sehr starke elektrostatische Kräfte in alle Richtungen → viel Energie zum Lösen nötig."},

{c:"Chemie", d:1, q:"Bei welchem pH-Wert ist eine Lösung neutral?",
  o:["0", "7", "14", "10"], a:1,
  e:"pH 7 = neutral (reines Wasser). pH 0–6,9 = sauer. pH 7,1–14 = basisch."},

{c:"Chemie", d:2, q:"Was ist die Verbrennungsgleichung für Methan?",
  o:["CH₄ + O₂ → CO₂ + H₂O", "CH₄ + 2 O₂ → CO₂ + 2 H₂O", "2 CH₄ + O₂ → 2 CO + 4 H₂O", "CH₄ + 3 O₂ → CO₂ + 2 H₂O"], a:1,
  e:"CH₄ + 2 O₂ → CO₂ + 2 H₂O (vollständige Verbrennung, λ = 1). Gleichung muss ausgeglichen sein!"},

{c:"Chemie", d:2, q:"Was ist die Dichteanomalie von Wasser?",
  o:["Wasser ist am dichtesten bei 100°C", "Wasser ist am dichtesten bei 0°C (Eis)", "Wasser ist am dichtesten bei 4°C", "Wasser hat überall gleiche Dichte"], a:2,
  e:"Wasser hat max. Dichte bei 4°C. Eis ist leichter als Wasser → schwimmt → Frostschäden in Keramik!"},

{c:"Chemie", d:1, q:"Warum sind Alkalimetalle (I. Hauptgruppe) in der Keramik als Flussmittel wichtig?",
  o:["Sie erhöhen den Schmelzpunkt stark", "Sie haben 1 Valenzelektron und senken als Flussmittel den Schmelzpunkt", "Sie erhöhen die Härte der Glasur", "Sie verbessern die Plastizität von Ton"], a:1,
  e:"Alkalimetalle (Li, Na, K) haben 1 Valenzelektron → sehr reaktiv → starke Flussmittel → senken Schmelzpunkt."},

{c:"Chemie", d:3, q:"Was ist eine endotherme Reaktion?",
  o:["Eine Reaktion, bei der Wärme aufgenommen wird", "Eine Reaktion, bei der Wärme abgegeben wird", "Eine Reaktion ohne Temperaturbeteiligung", "Eine Reaktion, die nur bei Licht stattfindet"], a:0,
  e:"Endotherm = Energie wird aufgenommen (z.B. Entwässerung von Ton in der DTA → Wärmepeak nach unten)."},

{c:"Chemie", d:2, q:"Was ist der Dipol-Charakter von Wasser?",
  o:["Wasser ist elektrisch geladen", "Wasser hat eine positive und eine negative Seite → exzellentes Lösungsmittel", "Wasser leitet Strom wie Metalle", "Wasser hat keine polaren Bindungen"], a:1,
  e:"Wassermolekül H₂O hat positivere (H) und negativere (O) Seite → Dipol → löst Salze (Elektrolyte) sehr gut."},

{c:"Chemie", d:2, q:"Was sind Erdalkalimetalle (II. Hauptgruppe) in der Keramik?",
  o:["Flussmittel wie Alkalimetalle, aber schwächer – stabilisierend auf Glasuren", "Magerungsmittel für Pressmassen", "Bindemittel für den Schlicker", "Tonminerale mit hoher Plastizität"], a:0,
  e:"Erdalkalimetalle (Ca, Mg, Ba) wirken stabilisierend auf Glasuren. Beispiele: CaCO₃ (Kreide), Dolomit."},

{c:"Rohstoffe", d:1, q:"Was sind bildsame (plastische) Rohstoffe in der Keramik?",
  o:["Quarz und Schamotte", "Feldspat und Kaolin", "Ton und Kaolin", "Quarz und Feldspat"], a:2,
  e:"Bildsame Rohstoffe: Ton, Kaolin. Sie lassen sich plastisch formen durch die Wasserhüllen der Tonmineralteilchen."},

{c:"Rohstoffe", d:1, q:"Was ist das typische Verhältnis für Porzellan (TQF)?",
  o:["Ton 25%, Quarz 50%, Feldspat 25%", "Ton 33%, Quarz 33%, Feldspat 33%", "Ton 50%, Quarz 25%, Feldspat 25%", "Ton 70%, Quarz 15%, Feldspat 15%"], a:2,
  e:"Porzellan: Ton 50% | Quarz 25% | Feldspat 25%. TQF = Ton-Quarz-Feldspat."},

{c:"Rohstoffe", d:2, q:"Was misst die TGA (Thermogravimetrische Analyse)?",
  o:["Temperaturdifferenz zur Inertprobe", "Längenänderung über Temperatur", "Masseverlust (ΔG) in Abhängigkeit von der Temperatur", "Optische Formveränderung"], a:2,
  e:"TGA misst Masseverlust ΔG über Temperatur T. Aussagen: mechanisch/chemisch gebundenes Wasser, Organik, Carbonate."},

{c:"Rohstoffe", d:2, q:"Was misst die DTA (Differenzial-Thermoanalyse)?",
  o:["Temperaturdifferenz (ΔT) zwischen Probe und Inertprobe", "Masseverlust über Temperatur", "Längenänderung beim Brennen", "Wassergehalt im Schlicker"], a:0,
  e:"DTA misst ΔT zwischen Probe und Referenz. Entwässerung = endotherm (Tal), Kristallbildung = exotherm (Berg)."},

{c:"Rohstoffe", d:2, q:"Was misst das Dilatometer (DSA)?",
  o:["Masseverlust", "Temperaturdifferenz", "Längenänderung über Temperatur (z.B. Quarzsprung)", "Viskosität des Schlickers"], a:2,
  e:"DSA = Dehnungs-Schwindungsanalyse. Misst Längenänderung über Temperatur → zeigt Quarzsprung bei 573°C!"},

{c:"Rohstoffe", d:1, q:"Welche Gesteinsart entsteht aus abgelagerten Sedimenten?",
  o:["Magmatit (z.B. Granit)", "Metamorphit (z.B. Marmor)", "Sedimentit (z.B. Ton, Kalkstein)", "Vulkanit"], a:2,
  e:"Sedimentite entstehen durch Ablagerung (Ton, Sand, Kalk). Wichtig für keramische Rohstoffe!"},

{c:"Rohstoffe", d:2, q:"Warum hat Montmorillonit-Ton einen hohen Wasserbedarf?",
  o:["Er hat große Körner", "Er hat keine Wasserhüllen", "Er quillt stark – Schichtstruktur lagert Wasser ein", "Er ist ein Magerungsmittel"], a:2,
  e:"Montmorillonit quillt stark (zwischen den Schichten), bindet viel Wasser → hoher Wasseranspann, trockenempfindlich."},

{c:"Rohstoffe", d:1, q:"Was ist die Funktion von Feldspat in der Keramik?",
  o:["Erhöht die Plastizität des Tons", "Wirkt als Magerungsmittel (reduziert Schwindung)", "Wirkt als Flussmittel und bildet Glasphase beim Sintern", "Dient als Farbkörper"], a:2,
  e:"Feldspat = Flussmittel. Senkt die Sintertemperatur und bildet die Glasphase im Porzellan."},

{c:"Rohstoffe", d:3, q:"Was ist die EMA (Erhitzungsmikroskopische Analyse)?",
  o:["Misst Masseverlust beim Erhitzen", "Misst elektrische Leitfähigkeit bei hohen Temperaturen", "Beobachtet optische Formveränderungen (Schwindung, Schmelzen, Erweichung)", "Bestimmt den pH-Wert von Schlickern"], a:2,
  e:"EMA: optische Beobachtung beim Erhitzen. Zustandsänderungen: Schwindung, Sinterung, Erweichung, Aufblähung, Schmelzen."},

{c:"Rohstoffe", d:2, q:"Was versteht man unter Rekultivierung nach Tagebauabschluss?",
  o:["Auffüllung mit Industrieabfall", "Verkauf als Bauland", "Wiedernutzbarmachung für Land-/Forstwirtschaft (Rahmenbetriesplan)", "Umzäunung und Stilllegung"], a:2,
  e:"Rekultivierung = nach Plan die Fläche wieder nutzbar machen (Landwirtschaft, Wald). Renaturierung = Biotop anlegen."},

{c:"Rohstoffe", d:2, q:"Was ist STA (Simultanthermoanalyse)?",
  o:["Kombination aus TGA und DTA", "Nur Massemessung", "Nur Temperaturmessung", "Kombination aus EMA und DSA"], a:0,
  e:"STA = Simultanthermoanalyse = TGA + DTA gleichzeitig. Gibt Masse- und Wärmeflussinformation in einem Durchgang."},

{c:"Rohstoffe", d:1, q:"Wozu dienen Magerungsmittel in der Keramik?",
  o:["Sie erhöhen die Plastizität", "Sie reduzieren Schwindung und Trockenrissempfindlichkeit", "Sie senken die Brenntemperatur", "Sie verbessern die Fließfähigkeit des Schlickers"], a:1,
  e:"Magerungsmittel (Quarz, Schamotte) sind unplastisch → reduzieren Schwindung, Trockenrissrisiko und Wasseraufnahme."},

{c:"Rohstoffe", d:2, q:"Was ist XRD (Röntgendiffraktometrie)?",
  o:["Methode zur Bestimmung der mineralogischen Zusammensetzung eines Stoffes", "Methode zur Messung der Porosität", "Methode zur Messung der Viskosität", "Methode zur optischen Analyse beim Brennen"], a:0,
  e:"XRD = Röntgendiffraktometer. Bestimmt die mineralogische (kristalline) Zusammensetzung eines Werkstoffs."},

{c:"Fachrechnen", d:1, q:"Worauf bezieht sich die Feuchte (f)?",
  o:["Trockene Masse", "Feuchte Masse", "Gesamtvolumen", "Porenvolumen"], a:1,
  e:"Feuchte bezieht sich IMMER auf die FEUCHTE Masse. f = m_Wasser / m_feucht · 100%."},

{c:"Fachrechnen", d:1, q:"Worauf bezieht sich das Anmachwasser (AW)?",
  o:["Feuchte Masse", "Trockene Masse", "Gesamtvolumen", "Porenvolumen"], a:1,
  e:"Anmachwasser bezieht sich IMMER auf die TROCKENE Masse. AW = m_Wasser / m_trocken · 100%."},

{c:"Fachrechnen", d:1, q:"Was ist der Unterschied zwischen Roh- und Reindichte?",
  o:["Reindichte = mit Poren; Rohdichte = ohne Poren", "Rohdichte = mit allen Poren; Reindichte = porenfreies Material", "Beide sind gleich bei dichter Keramik", "Reindichte gilt nur für Glasuren"], a:1,
  e:"Reindichte: NUR Material, keine Poren. Rohdichte: incl. aller Poren (Gesamtkörper). Immer: Reindichte > Rohdichte."},

{c:"Fachrechnen", d:2, q:"Wie lautet die Formel für Wasseraufnahme (WA)?",
  o:["WA = (m_nass + m_trocken) / m_trocken · 100%", "WA = (m_nass - m_trocken) / m_trocken · 100%", "WA = m_nass / m_trocken", "WA = (m_nass - m_trocken) / m_nass · 100%"], a:1,
  e:"WA = (m_nass - m_trocken) / m_trocken · 100%. Bezugsgröße ist die TROCKENE Masse."},

{c:"Fachrechnen", d:2, q:"Wie berechnet man die Gesamtporosität (P_G)?",
  o:["P_G = ρ_rein + ρ_roh", "P_G = ρ_rein · ρ_roh", "P_G = ρ_roh / ρ_rein · 100%", "P_G = (ρ_rein - ρ_roh) / ρ_rein · 100%"], a:3,
  e:"P_G = (ρ_rein - ρ_roh) / ρ_rein · 100%. Je weiter Roh- und Reindichte auseinanderliegen, desto poröser."},

{c:"Fachrechnen", d:2, q:"Warum ist die Gesamtschwindung NICHT gleich TS + BS?",
  o:["Weil die Schwindungsformeln verschieden sind", "Weil TS und BS sich aufheben", "Weil die Temperaturen zu unterschiedlich sind", "Weil jede Schwindung einen anderen Ausgangszustand (100%) hat"], a:3,
  e:"TS: Ausgangspunkt = Grünzustand. BS: Ausgangspunkt = Trockenzustand. Verschiedene Bezugsgrößen → keine Addition!"},

{c:"Fachrechnen", d:1, q:"Was ist der WAK und was bedeutet WAK-Glasur < WAK-Scherben?",
  o:["Glasur unter Zugspannung → Haarrisse", "Glasur unter Druckspannung → gewollt! (Keramik ist druckfest)", "Glasur löst sich ab", "Schwindung der Glasur gleich dem Scherben"], a:1,
  e:"WAK Glasur < Scherben → Glasur zieht sich weniger zusammen → Druckspannung → GEWOLLT! Keramik ist druckfest."},

{c:"Fachrechnen", d:2, q:"Was passiert wenn WAK-Glasur > WAK-Scherben?",
  o:["Glasur steht unter Druckspannung – alles ok", "Glasur steht unter Zugspannung → Haarrisse (Craquelé)", "Glasur platzt wegen zu starker Druckspannung ab", "Kein Einfluss auf die Glasur"], a:1,
  e:"WAK Glasur > Scherben → Glasur zieht sich stärker zusammen → Zugspannung → Haarrisse (Craquelé)."},

{c:"Fachrechnen", d:1, q:"Welche Feuchte haben Gießmassen?",
  o:["1–5%", "18–26%", "30–60%", "6–10%"], a:2,
  e:"Gießmassen: 30–60%. Drehmassen: 18–26%. Trockenpressmassen: 1–5%. Feuchtpressmassen: 6–10%."},

{c:"Fachrechnen", d:2, q:"Was ist das Litergewicht in der Keramik?",
  o:["Gewicht eines Liters Wasser", "Dichte (Feststoffgehalt) einer Suspension/Schlicker, bestimmt mit Überlaufkolben", "Gewicht eines Liters getrockneten Tons", "Wasseraufnahme pro Liter Körpervolumen"], a:1,
  e:"Litergewicht = Dichte einer Suspension (Schlicker). Hauptparameter zur Schlickereinstellung. Bestimmung mit Überlaufkolben."},

{c:"Fachrechnen", d:2, q:"Was sind offene Poren?",
  o:["Poren ohne Verbindung zur Oberfläche – nicht tränkbar", "Poren mit Verbindung zur Scherbenoberfläche – tränkbar", "Alle Poren in einem keramischen Körper", "Poren, die nach dem Brand verschwinden"], a:1,
  e:"Offene Poren haben Verbindung zur Oberfläche → können mit Wasser getränkt werden. Geschlossene Poren sind nicht tränkbar."},

{c:"Betriebstechnik", d:1, q:"Was ist die Formel für die Getriebeübersetzung i?",
  o:["i = n₁ / n₂ = z₂ / z₁", "i = n₁ · n₂", "i = z₁ / z₂", "i = n₂ / z₁"], a:0,
  e:"i = n₁/n₂ = z₂/z₁. n = Drehzahl, z = Zähnezahl. i > 1 = ins Langsame (Drehmoment steigt!)."},

{c:"Betriebstechnik", d:1, q:"Was ist der Unterschied zwischen Achse und Welle?",
  o:["Achse überträgt Drehmoment, Welle nicht", "Welle überträgt Drehmoment & Leistung; Achse trägt nur (kein Drehmoment)", "Beide sind identisch", "Achse ist immer rotierend, Welle ist fest"], a:1,
  e:"Welle: überträgt Drehmoment (Torsion + Biegung). Achse: trägt Bauteile, KEIN Drehmoment, nur Biegung."},

{c:"Betriebstechnik", d:2, q:"Welches Wälzlager ist 'der Allrounder'?",
  o:["Zylinderrollenlager", "Axial-Rillenkugellager", "Rillenkugellager", "Kegelrollenlager"], a:2,
  e:"Rillenkugellager: nimmt radiale + begrenzt axiale Kräfte auf. Universell einsetzbar → Allrounder."},

{c:"Betriebstechnik", d:2, q:"Welches Lager nimmt nur axiale Kräfte auf?",
  o:["Zylinderrollenlager", "Rillenkugellager", "Kegelrollenlager", "Axial-Rillenkugellager"], a:3,
  e:"Axial-Rillenkugellager: NUR für axiale Kräfte (Richtung der Wellenachse). Kein radiales Tragvermögen."},

{c:"Betriebstechnik", d:1, q:"Was ist eine Spielpassung?",
  o:["Welle ist immer größer als Bohrung → muss gepresst werden", "Welle ist immer kleiner als Bohrung → dreht sich frei", "Maß ist je nach Fertigung Spiel oder Übermaß", "Welle ist gleich groß wie Bohrung"], a:1,
  e:"Spielpassung: Welle < Bohrung immer → Welle dreht sich leicht. Einheitsbohrung (H) ist das feste Maß."},

{c:"Betriebstechnik", d:2, q:"Was ist Kaskade vs. Katarakt bei der Trommelmühle?",
  o:["Kaskade: zerschlagend (n=30/√Ø); Katarakt: zerreibend (n=25/√Ø)", "Kaskade: zerreibend/scherend (n=25/√Ø); Katarakt: zerschlagend (n=30/√Ø)", "Beide sind identisch", "Kaskade wird nur bei nassen, Katarakt nur bei trockenen Massen verwendet"], a:1,
  e:"Kaskade: zerreiben/scheren, n=25/√Ø (langsamer). Katarakt: zerschlagen, n=30/√Ø (schneller)."},

{c:"Betriebstechnik", d:2, q:"Was ist Flugförderung?",
  o:["Partikel in kompakten Stopfen durch Rohr", "Partikel schweben frei im Luftstrom – hohe Geschwindigkeit, starker Verschleiß", "Material in dichter Strömung, wenig Luft", "Förderung auf Bändern"], a:1,
  e:"Flugförderung: Partikel komplett im Luftstrom schwebend. Sehr hohe Geschwindigkeit → starker Verschleiß."},

{c:"Betriebstechnik", d:1, q:"Was ist ein Schneckengetriebe?",
  o:["Parallele Wellen, formschlüssig", "Reibradgetriebe für geringe Kräfte", "Kreuzende Wellen, hohe Übersetzung, oft selbsthemmend", "Riemengetriebe mit Überlastschutz"], a:2,
  e:"Schneckengetriebe: kreuzende Wellen, sehr hohe Übersetzung ins Langsame, oft selbsthemmend → z.B. Hebebühnen."},

{c:"Betriebstechnik", d:1, q:"Was ist Dichtstromförderung?",
  o:["Partikel schweben frei im Luftstrom", "Kompakte Pfropfen durch Rohr", "Hohe Materialdichte, wenig Luft – energiesparend, verschleißarm", "Förderung auf Förderbändern"], a:2,
  e:"Dichtstromförderung: hohe Produktdichte, wenig Luft. Energiesparend und verschleißarm. Gut für abrasive Güter."},

{c:"Betriebstechnik", d:2, q:"Was ist der Vorteil eines Riemengetriebes?",
  o:["Formschlüssig, kein Schlupf möglich", "Überlastschutz durch Durchrutschen (Kraftschluss)", "Sehr hohe Übersetzungen möglich", "Ideal für nasse Umgebungen"], a:1,
  e:"Riemengetriebe überträgt Kraft durch Reibung (Kraftschluss) → bei Überlast rutscht er durch → schützt die Maschine."},

{c:"Betriebstechnik", d:2, q:"Welche Kräfte kann ein Zylinderrollenlager aufnehmen?",
  o:["Nur axiale Kräfte", "Kombinierte Kräfte (radial + axial)", "Sehr hohe radiale Kräfte, kaum axiale", "Nur geringe radiale Kräfte"], a:2,
  e:"Zylinderrollenlager: sehr hohe radiale Kräfte, aber kaum axiale. Für schwere radiale Belastungen."},

{c:"Betriebstechnik", d:2, q:"Was ist eine Übergangspassung?",
  o:["Welle immer kleiner als Bohrung", "Welle immer größer als Bohrung", "Je nach Ist-Maß entweder Spiel oder Übermaß", "Nur für Kegelverbindungen geeignet"], a:2,
  e:"Übergangspassung: je nach tatsächlichem Fertigungsmaß entweder Spielpassung oder Übermaßpassung."},

{c:"Betriebstechnik", d:3, q:"Welche Projektionsmethode ist in technischen Zeichnungen am häufigsten?",
  o:["Projektionsmethode 3", "Isometrische Projektion", "Projektionsmethode 1 (Pfeilmethode)", "Axonometrische Projektion"], a:2,
  e:"Projektionsmethode 1 (Europäische/Pfeilmethode): Draufsicht unten rechts von Vorderansicht, Seitenansicht links."},

{c:"MSR", d:1, q:"Was ist der Unterschied zwischen Steuern und Regeln?",
  o:["Steuern = geschlossene Kette mit Feedback; Regeln = offene Kette", "Regeln funktioniert ohne Messung", "Steuern ist präziser als Regeln", "Steuern = offene Kette (kein Feedback); Regeln = geschlossene Kette (Soll/Ist-Vergleich)"], a:3,
  e:"Steuern: offen, kein Feedback. Regeln: geschlossen, Soll/Ist-Vergleich → Eingriff → Kreislauf."},

{c:"MSR", d:1, q:"Was ist der Unterschied zwischen Kalibrieren und Justieren?",
  o:["Kalibrieren = Eingriff ins Gerät; Justieren = Vergleich mit Normal", "Kalibrieren ist gesetzlich vorgeschrieben", "Beide sind identisch", "Kalibrieren = Vergleich mit Normal (kein Eingriff); Justieren = Verstellen auf korrekte Werte"], a:3,
  e:"Kalibrieren: Vergleich mit Normal, KEIN Eingriff. Justieren: Verstellen des Geräts. Eichen = gesetzlich (Eichamt)."},

{c:"MSR", d:1, q:"Was ist das Hauptproblem des P-Reglers?",
  o:["Er ist zu langsam", "Er neigt zum starken Überschwingen", "Er hat eine bleibende Regelabweichung", "Er reagiert nicht auf Änderungen"], a:2,
  e:"P-Regler: proportionale Reaktion auf Abweichung. Nachteil: bleibende Regelabweichung, da bei kleiner Abweichung Stellkraft → 0."},

{c:"MSR", d:2, q:"Was macht der I-Regler und was ist sein Nachteil?",
  o:["Reagiert auf Änderungsrate; sehr schnell, rauschempfindlich", "Integriert Abweichung über Zeit; langsam, neigt zum Überschwingen", "Proportional zur Abweichung; bleibende Regelabweichung", "Kombiniert alle Regleranteile; schwer einzustellen"], a:1,
  e:"I-Regler: sammelt Abweichung über Zeit auf → keine bleibende Abweichung. Nachteil: langsam, überschwingt."},

{c:"MSR", d:2, q:"Was ist die Besonderheit des D-Reglers?",
  o:["Er reagiert auf die Stärke der Abweichung", "Er reagiert auf die Änderungsgeschwindigkeit der Abweichung – allein nicht nutzbar", "Er hat keine bleibende Regelabweichung", "Er reagiert am schnellsten aller Reglerarten"], a:1,
  e:"D-Regler: reagiert auf Änderungsrate. Vorausschauend, dämpfend. Allein nutzlos (bei konstantem Fehler tut er nichts)."},

{c:"MSR", d:1, q:"Was ist eine I-Strecke (Strecke ohne Ausgleich)?",
  o:["Strecke die sich von selbst einpendelt", "Strecke mit nur einem Stellglied", "Strecke mit sehr kurzer Verzugszeit", "Strecke die kein Gleichgewicht findet – Wert läuft bei konst. Eingang immer weiter"], a:3,
  e:"I-Strecke: kein Gleichgewicht! Wert steigt/fällt endlos bei konstantem Eingang (z.B. Tank ohne Ablauf)."},

{c:"MSR", d:2, q:"Was bedeutet Verzugszeit (Tu)?",
  o:["Zeit bis das System seinen Endwert erreicht", "Zeit zwischen zwei Regelungseingriffen", "Zeit bis das System nach einer Änderung überhaupt anfängt zu reagieren (Totzeit)", "Dauer einer vollständigen Regelperiode"], a:2,
  e:"Tu = Totzeit/Trägheit. Zeit bis der Ausgang nach einem Eingangssprung erstmals nennenswert reagiert."},

{c:"MSR", d:2, q:"Was ist Streckenverstärkung Ks?",
  o:["Zeit bis zum Endwert", "Maximale Stellgröße des Reglers", "Differenz zwischen Soll- und Istwert", "Ks = Δy / Δx (Wie stark reagiert der Ausgang auf Eingangsänderungen?)"], a:3,
  e:"Ks = Δy/Δx. Hoher Ks = kleine Eingangänderung bewirkt große Ausgangswirkung → empfindliche Strecke."},

{c:"MSR", d:1, q:"Was ist ein 2-Punkt-Regler?",
  o:["Regler mit zwei Ausgängen", "Regler der nur An (100%) oder Aus (0%) kennt", "Regler mit zwei I-Anteilen", "Regler der zwei Messgrößen gleichzeitig verarbeitet"], a:1,
  e:"2-Punkt-Regler: einfachste Regelung. Nur An/Aus (z.B. Thermostat, Heizung). Hat Hysterese/Totband."},

{c:"MSR", d:2, q:"Was ist die Sprungantwort bei einer Strecke MIT Ausgleich?",
  o:["Wert läuft immer weiter wie eine Rampe", "Wert sinkt sofort auf Null", "Wert steigt und stabilisiert sich bei einem neuen Endwert", "Wert schwingt endlos auf und ab"], a:2,
  e:"Strecke mit Ausgleich: bei konstantem Eingang → Ausgang pendelt sich auf neuen Gleichgewichtswert ein (S-Kurve)."},

{c:"MSR", d:1, q:"Was ist Eichen (im Gegensatz zu Kalibrieren)?",
  o:["Vergleich mit Normal ohne Eingriff", "Verstellen auf korrekte Werte", "Gesetzlich vorgeschriebene Prüfung durch das Eichamt", "Wiederholte Kalibrierung nach jeder Messung"], a:2,
  e:"Eichen = gesetzlich vorgeschriebene amtliche Prüfung durch das Eichamt. Z.B. für Waagen im Handel."},

{c:"MSR", d:3, q:"Was ist Ausgleichszeit (Tg)?",
  o:["Zeit bis das System erstmals reagiert (Totzeit)", "Zeit die vergeht bis das System bei max. Steigung seinen neuen Endwert erreichen würde", "Zeitspanne zwischen zwei Messungen", "Zeit bis zur Abschaltung der Sicherheitskette"], a:1,
  e:"Tg = Maß für die Trägheit/Kapazität der Strecke. Große Tg = langsames System (z.B. großer Ölofen)."},

{c:"Wärmelehre", d:1, q:"Was ist die Formel für Wärmemenge Q?",
  o:["Q = m / (c · ΔT)", "Q = m · c · ΔT", "Q = c / (m · ΔT)", "Q = m + c + ΔT"], a:1,
  e:"Q = m · c · ΔT. m [kg], c [kJ/(kg·K)], ΔT [K]. Bei Aggregatzustandsänderung: ΔT = 0!"},

{c:"Wärmelehre", d:2, q:"Was ist die spez. Wärmekapazität von Wasser (flüssig)?",
  o:["1,0 kJ/(kg·K)", "2,0 kJ/(kg·K)", "4,182 kJ/(kg·K)", "10,0 kJ/(kg·K)"], a:2,
  e:"Wasser (flüssig): c = 4,182 kJ/(kg·K). Sehr hoch → Wasser kann viel Wärme speichern."},

{c:"Wärmelehre", d:1, q:"Was ist der Unterschied zwischen Brennwert (Ho) und Heizwert (Hu)?",
  o:["Ho: Rauchgase <100°C (Kondensation genutzt); Hu: >100°C (nicht genutzt)", "Ho: Rauchgase >100°C; Hu: Rauchgase <100°C", "Kein Unterschied, identische Größen", "Ho gilt für Erdgas, Hu nur für Öl"], a:0,
  e:"Ho: Kondensationswärme genutzt (<100°C). Hu: nicht genutzt (>100°C). In Keramik: immer Hu!"},

{c:"Wärmelehre", d:1, q:"Welche Wärmeübertragungsart dominiert bis ca. 700°C im Ofen?",
  o:["Wärmestrahlung", "Wärmeleitung", "Konvektion (mit Trägermedium)", "Alle gleichermaßen"], a:2,
  e:"Konvektion dominiert bis ca. 700°C. Erzwungene Konvektion (Gebläse) >> freie Konvektion."},

{c:"Wärmelehre", d:2, q:"Wie verhält sich Wärmestrahlung mit steigender Temperatur?",
  o:["Steigt linear mit der Temperatur", "Steigt mit der 2. Potenz der Temperatur", "Steigt mit der 4. Potenz der Temperatur", "Bleibt konstant"], a:2,
  e:"Wärmestrahlung ∝ T⁴. Bei Verdopplung der absoluten Temperatur → 16-fache Strahlungsleistung! Dominant ab 700°C."},

{c:"Wärmelehre", d:1, q:"Was ist der Lambdawert?",
  o:["Temperatur bei der Verbrennung beginnt", "Verhältnis zugeführte zu theoretisch nötiger Luftmenge (dimensionsloser Faktor)", "Wirkungsgrad des Brenners", "Zündtemperatur des Brennstoffs in °C"], a:1,
  e:"Lambda = zugeführte Luft / theoretisch nötige Luft. Dimensionsloser Faktor. λ=1: neutral, >1: oxidierend, <1: reduzierend."},

{c:"Wärmelehre", d:1, q:"Bei welcher Temperatur findet der kritische Quarzsprung statt?",
  o:["300°C", "473°C", "573°C", "873°C"], a:2,
  e:"Quarzsprung α↔β bei 573°C. Volumensprung! Kritisch beim Aufheizen UND Abkühlen → Brennkurve anpassen!"},

{c:"Wärmelehre", d:2, q:"Was passiert bei ca. 300°C beim Ab- oder Aufheizen?",
  o:["Organik verbrennt", "Quarzsprung α↔β", "Cristobalitsprung – ebenfalls ein Volumensprung zu beachten", "Chemisch gebundenes Wasser tritt aus"], a:2,
  e:"300°C = Cristobalitsprung (weniger bekannt, aber wichtig beim Abkühlen). 573°C = Quarzsprung."},

{c:"Wärmelehre", d:2, q:"Was ist der Normzustand für Gase?",
  o:["20°C und 1 bar", "0°C (273 K) und 1,01325 bar (101.325 Pa)", "100°C und 1 bar", "25°C und 1 bar"], a:1,
  e:"Normzustand: 0°C (273 K) und 1,01325 bar. Alle Gasvolumina werden darauf bezogen."},

{c:"Wärmelehre", d:2, q:"Was sind Zündgrenzen von Erdgas?",
  o:["0,5 – 5% Gasanteil", "40 – 60% Gasanteil", "20 – 30% Gasanteil", "5 – 15% Gasanteil (Luftfaktor 0,59 – 2,30)"], a:3,
  e:"Erdgas: 5–15% Gasanteil im Gemisch zündfähig. Lambdafaktor: 0,59–2,30. Außerhalb → keine Verbrennung."},

{c:"Wärmelehre", d:1, q:"Was sind Schwarze Kerne und wie entstehen sie?",
  o:["Glasurfehler durch zu viel Mangan", "Gefügestörung durch unvollständige Aufoxidation der Organik (zu wenig O₂ bei 100–800°C)", "Kristallisationseffekt in der Glasurmatrix", "Brennfehler durch zu hohe Temperatur"], a:1,
  e:"Schwarze Kerne: Organik nicht vollständig ausgebrannt. Lösung: λ >> 1 bei 100–800°C → ausreichend Sauerstoff."},

{c:"Wärmelehre", d:2, q:"Was ist der Vorteil von Keramikfaser-Ausmauerung bei periodischen Öfen?",
  o:["Erhöht die Maximaltemperatur", "Reduziert Wandverluste stark", "Niedrige Raumgewichte → geringe Speicherverluste → weniger Aufheizenergie", "Verbessert die Wärmestrahlung"], a:2,
  e:"Keramikfaser: sehr niedrige Rohdichte → geringe Speicherverluste. Periodische Öfen leiden v.a. unter Speicherverlusten."},

{c:"Wärmelehre", d:2, q:"Was ist die Formel zur Berechnung des Wirkungsgrads?",
  o:["η = Q_zu / Q_ab", "η = Q_zu + Q_ab", "η = Q_ab / Q_zu", "η = Q_ab - Q_zu"], a:2,
  e:"η = Q_ab / Q_zu. Immer < 1 (bzw. < 100%), da es keine verlustlosen Prozesse gibt."},

{c:"Wärmelehre", d:1, q:"Was ist Primärluft beim Brenner?",
  o:["Luft die nicht an der Verbrennung teilnimmt (Diffusionsluft)", "Luft aus dem Wärmetauscher", "Kühlluft für die Ware", "Luft die aktiv an der Verbrennung im Brenner beteiligt ist"], a:3,
  e:"Primärluft: direkt im Brenner an Verbrennung beteiligt. Diffusionsluft: nimmt nicht direkt teil, erhöht Konvektion + kühlt."},

{c:"Fertigungstechnik", d:1, q:"Was versteht man unter 'Textur' beim Strangpressen?",
  o:["Oberflächenrauheit des fertigen Produkts", "Ausrichtung der Tonmineralplättchen durch unterschiedliche Fließgeschwindigkeiten", "Fehler durch eingeschlossene Luft beim Pressen", "Muster in der Glasur nach dem Brand"], a:1,
  e:"Textur: Tonminerale richten sich durch unterschiedliche Fließgeschwindigkeiten aus → Spannungen, Drachenzähne."},

{c:"Fertigungstechnik", d:1, q:"Was ist der Unterschied zwischen Trockenrissen und Brennrissen?",
  o:["Trockenrisse: scharf & glatt; Brennrisse: stumpf & rau", "Trockenrisse: stumpf & rau ; Brennrisse: scharf & glatt ", "Beide sehen gleich aus", "Trockenrisse entstehen beim Brand, Brennrisse beim Trocknen"], a:1,
  e:"Trockenrisse: stumpf + rau, zu schnelles Trocknen. Brennrisse: scharf + glatt, beim Aufheizen oder Abkühlen."},

{c:"Fertigungstechnik", d:2, q:"Was sind Nadelstiche (Pinholes) in der Glasur?",
  o:["Glasur zu dünn aufgetragen", "Winzige Krater durch Gase aus dem Scherben (Organik) die durch die Glasur entweichen", "WAK der Glasur zu groß", "Verunreinigung verhindert Haftung der Glasur"], a:1,
  e:"Pinholes/Nadelstiche: Gase aus organischen Resten im Scherben stechen beim Brand durch die Glasur."},

{c:"Fertigungstechnik", d:1, q:"Was ist der Schrübrand (Biskuitbrand)?",
  o:["Erster Brand bei ca. 800–900°C: verfestigt, aber noch porös → nimmt Glasur auf", "Zweiter Brand zum Einschmelzen der Glasur bei hoher Temperatur", "Spezialbrand für Farben und Dekore", "Brand bei über 1300°C für Hartporzellan"], a:0,
  e:"Glühbrand: erster Brand, ca. 800–900°C. Entfernt Organik und chem. Wasser. Scherben fest aber porös → ideal zum Glasieren."},

{c:"Fertigungstechnik", d:2, q:"Was ist Sintern in der Keramik?",
  o:["Schmelzen des keramischen Körpers", "Aufmahlen zu feinen Pulvern", "Trocknung unter Vakuum", "Verdichten und Verfestigen unterhalb der Schmelztemperatur – Körner wachsen zusammen, Poren werden kleiner"], a:3,
  e:"Sintern: unter Schmelztemperatur werden Körner verdichtet und verbunden → höhere Festigkeit, geringere Porosität."},

{c:"Fertigungstechnik", d:1, q:"Welche Reihenfolge gilt beim keramischen Prozess in der Feinkeramik?",
  o:["Formgebung → Rohstoffaufbereitung → Trocknung → Glühbrand → Glasieren → Glattbrand", "Rohstoffaufbereitung → Formgebung → Trocknung → Glühbrand → Glasieren → Glattbrand", "Rohstoffaufbereitung → Trocknung → Formgebung → Glasieren → Glühbrand → Glattbrand", "Rohstoffaufbereitung → Formgebung → Glasieren → Glühbrand → Trocknung → Glattbrand"], a:1,
  e:"Korrekte Reihenfolge: Rohstoffaufbereitung → Formgebung → Trocknung → Glühbrand → Glasieren → Glattbrand."},

{c:"Fertigungstechnik", d:2, q:"Was sind Presslagen beim axialen Pressen?",
  o:["Schichten aus verschiedenen Rohstoffen", "Gefügestörungen durch eingeschlossene Luft bei zu schnellem Pressen", "Orientierte Textur der Tonminerale", "Risse durch zu schnelles Abkühlen"], a:1,
  e:"Presslagen: eingeschlossene Luft beim axialen Pressen erzeugt Gefügestörungen → Schwachstellen im Scherben."},

{c:"Fertigungstechnik", d:2, q:"Was ist ZTA-Keramik?",
  o:["Zinnoxid-Titanat-Aluminium-Verbundwerkstoff", " Al₂O₃-Matrix mit fein verteiltem ZrO₂ → höhere Bruchzähigkeit", "Zement-Ton-Aggregat für Baukeramik", "Zink-Titan-Aluminat als Farbkörper"], a:1,
  e:"ZTA: Al₂O₃ (hart, verschleißfest) + ZrO₂ (zäh, rissfest) → vereint beides: höhere Bruchzähigkeit + gute Härte."},

{c:"Fertigungstechnik", d:2, q:"Wie wird SiC (Siliciumcarbid) nach dem Acheson-Verfahren hergestellt?",
  o:["SiO₂ + Kalk → SiC + CO₂", "SiO₂ + 3C → SiC + 2CO ", "Si + C → SiC bei 500°C", "Al₂O₃ + C → SiC + Al₂O"], a:1,
  e:"Acheson-Verfahren: SiO₂ + 3C → SiC + 2CO. Im Widerstandsofen bei 2000–2500°C. Grün = hochrein, schwarz = verunreinigt."},

{c:"Fertigungstechnik", d:1, q:"Was ist ein Abroller in der Glasur?",
  o:["Verunreinigung auf dem Scherben verhindert Haftung der Glasur → Glasur rollt ab", "Glasur reißt durch falsche WAK-Abstimmung", "Glasur zu dick aufgetragen", "Zu hohe Sintertemperatur bei der Glasur"], a:0,
  e:"Abroller: Verunreinigung (Fett, Staub, Fingerabdrücke) auf dem Scherben → Glasur haftet nicht → rollt beim Brand ab."},

{c:"Fertigungstechnik", d:2, q:"Was sind die Zonen bei einem Tunnelofen?",
  o:["Einfahrt, Mitte, Ausfahrt", "Vorwärmzone, Brennzone , Kühlzone ", "Trocknungszone, Glühbrandzone, Glasurzone", "Reduktionszone, Sinterzone, Abkühlungszone"], a:1,
  e:"Tunnelofen: Vorwärmzone  → Brennzone  → Kühlzone . Ware fährt auf Wagen kontinuierlich durch."},

{c:"Fertigungstechnik", d:2, q:"Wofür ist das Winkler-Diagramm ?",
  o:["Diagramm zur Einordnung von Tonen nach Plastizität und Körnung ", "Diagramm für optimale Brennkurven", "Diagramm für WAK-Berechnung", "Diagramm für Glasurzusammensetzungen"], a:0,
  e:"Winkler-Diagramm: zeigt Eignung von Tonen für Baukeramik basierend auf Plastizitätsindex und Korngrößenverteilung."},

{c:"Fertigungstechnik", d:1, q:"Was ist der Unterschied zwischen Mühlentechnologie und Mischtechnologie?",
  o:["Mühlentechnologie: nur mischen; Mischtechnologie: zerkleinern + mischen", "Mühlentechnologie: zerkleinern + mischen; Mischtechnologie: nur homogenisieren ohne Zerkleinern", "Beide Verfahren sind identisch", "Mühlentechnologie für nasse, Mischtechnologie für trockene Massen"], a:1,
  e:"Mühlentechnologie: Zerkleinern + Mischen (Rohstoffe werden gemahlen). Mischtechnologie: nur Mischen ohne Zerkleinerung."},

{c:"Umwelttechnik", d:1, q:"Was ist das Verursacherprinzip im Umweltrecht?",
  o:["Wer Schaden verursacht, trägt die Kosten", "Die Allgemeinheit trägt alle Umweltkosten", "Schäden sollen verhindert werden, bevor sie entstehen", "Alle Beteiligten tragen gemeinsam die Kosten"], a:0,
  e:"Verursacherprinzip: Wer Abfall erzeugt / Umwelt verschmutzt, ist dafür verantwortlich und trägt die Kosten."},

{c:"Umwelttechnik", d:1, q:"Was ist die erste Priorität in der Abfallhierarchie (§ 6 KrWG)?",
  o:["Recycling", "Wiederverwendung", "Vermeidung", "Beseitigung"], a:2,
  e:"Abfallhierarchie: 1. Vermeidung → 2. Wiederverwendung → 3. Recycling → 4. Sonstige Verwertung → 5. Beseitigung."},

{c:"Umwelttechnik", d:2, q:"Was ist der Unterschied zwischen EU-Verordnung und EU-Richtlinie?",
  o:["Verordnung = nur Empfehlung; Richtlinie = verbindlich", "Verordnung gilt unmittelbar in allen EU-Staaten; Richtlinie muss national umgesetzt werden", "Beide sind identisch wirksam", "Richtlinie gilt sofort; Verordnung braucht Umsetzung"], a:1,
  e:"EU-Verordnung: gilt UNMITTELBAR. EU-Richtlinie: verbindliches Ziel, aber nationale Umsetzung nötig (z.B. KrWG)."},

{c:"Umwelttechnik", d:1, q:"Was bedeutet Abfall nach § 3 KrWG?",
  o:["Nur gefährliche Chemikalien", "Alle Stoffe, deren sich der Besitzer entledigt, entledigen will oder muss", "Nur Industrieabfälle über 100 kg", "Nur flüssige Rückstände"], a:1,
  e:"§ 3 KrWG: Abfall = Stoffe die entledigt, entledigt werden wollen oder müssen. Unabhängig von Gefährlichkeit."},

{c:"Umwelttechnik", d:1, q:"Was sind Emissionen (BImSchG)?",
  o:["Stoffe/Lärm die in eine Anlage eintreten", "Abwärme aus Heizungsanlagen", "Stoffe/Lärm die von einer Anlage ausgehen", "Genehmigungen für Industriebetriebe"], a:2,
  e:"Emissionen: von der Anlage ausgehende Stoffe/Energie/Lärm. Immissionen: Einwirkungen auf die Umwelt."},

{c:"Umwelttechnik", d:2, q:"Was ist Rekultivierung nach dem Tagebau?",
  o:["Anlagen von Biotopen für Naturschutz", "Wiedernutzbarmachung für Land- oder Forstwirtschaft", "Flutung des Tagebaus mit Wasser", "Verkauf als Industriegelände"], a:1,
  e:"Rekultivierung = Wiedernutzbarmachung (Landwirtschaft/Wald). Renaturierung = Biotop, Sukzessionsflächen."},

{c:"Umwelttechnik", d:2, q:"Was ist das KrWG?",
  o:["Kernkraftwerksgesetz", "Kreislaufwirtschaftsgesetz – Regelung der Abfallentsorgung in Deutschland", "Kraftfahrzeugrechtsgesetz", "Kommunales Rohstoff-Wirtschaftsgesetz"], a:1,
  e:"KrWG = Kreislaufwirtschaftsgesetz. Grundgesetz der Abfallwirtschaft in Deutschland. Basiert auf EU-Richtlinien."},

{c:"Umwelttechnik", d:1, q:"Was ist das Vorsorgeprinzip im Umweltrecht?",
  o:["Wer zahlt, darf verschmutzen", "Neue Technologien müssen erst genehmigt werden", "Die Allgemeinheit zahlt für Umweltschäden", "Schäden sollen verhindert werden, bevor sie entstehen"], a:3,
  e:"Vorsorgeprinzip: Umweltschäden sollen verhindert werden, bevor sie entstehen (präventiv statt reaktiv)."},

{c:"Umwelttechnik", d:2, q:"Woran erkennt man gefährliche Abfälle im Abfallverzeichnis (AVV)?",
  o:["An einem roten Rand im Katalog", "Am Sternchen (*) hinter dem sechsstelligen Abfallschlüssel", "An der Farbe des Behälters", "An einem G im Abfallschlüssel"], a:1,
  e:"Gefährliche Abfälle im AVV = sechsstelliger Schlüssel mit Sternchen (*). Beispiel: 13 02 06* = synthetisches Öl."},

{c:"Umwelttechnik", d:1, q:"Was ist das Nachhaltigkeitsprinzip im Umweltrecht?",
  o:["Wirtschaftswachstum über Umweltschutz stellen", "Nur erneuerbare Energien einsetzen", "Umweltschäden nach dem Verursacherprinzip kompensieren", "Ressourcen so nutzen, dass künftige Generationen ihre Bedürfnisse ebenfalls befriedigen können"], a:3,
  e:"Nachhaltigkeitsprinzip: Ressourcen schonen, damit künftige Generationen dieselben Möglichkeiten haben."},

{c:"Umwelttechnik", d:2, q:"Was versteht man unter 'Stand der Technik' im BImSchG?",
  o:["Neuste Technologie unabhängig von Kosten", "Technologie die nur in Deutschland verfügbar ist", "Älteste bewährte Technologie", "Aktuell fortschrittlichste, technisch und wirtschaftlich umsetzbare Methode"], a:3,
  e:"Stand der Technik: fortschrittlichste Verfahren und Techniken, die wirtschaftlich anwendbar sind (BImSchG-Begriff)."},

{c:"Umwelttechnik", d:2, q:"Was ist das Kooperationsprinzip im Umweltrecht?",
  o:["Nur der Staat ist für Umweltschutz verantwortlich", "Staat, Wirtschaft und Gesellschaft handeln gemeinsam im Umweltschutz", "Unternehmen kooperieren untereinander ohne staatliche Einmischung", "Internationale Kooperation zwischen EU-Staaten"], a:1,
  e:"Kooperationsprinzip: Umweltschutz als gemeinsame Aufgabe von Staat, Wirtschaft und Gesellschaft."},

{c:"Physik & Mathe", d:2, q:"Wie lautet die Formel für kinetische Energie?",
  o:["E_kin = m·g·h", "E_kin = ½·m·v²", "E_kin = m·v", "E_kin = F·s"], a:1,
  e:"E_kin = ½·m·v². Bewegungsenergie. Bei Verdopplung der Geschwindigkeit vervierfacht sie sich!"},

{c:"Physik & Mathe", d:2, q:"Was gilt für einen Körper in gleichförmiger Kreisbewegung?",
  o:["Er beschleunigt ständig nach außen", "Er hat eine konstante Zentripetalbeschleunigung zur Mitte", "Er hat keine Beschleunigung", "Er hat konstante Geschwindigkeit in Richtung der Bewegung"], a:1,
  e:"Zentripetalbeschleunigung zeigt zur Mitte. Obwohl |v| konstant, ändert sich die Richtung → Beschleunigung."},

{c:"Chemie", d:2, q:"Was sind Anionen?",
  o:["Positiv geladene Ionen", "Neutral geladene Teilchen", "Negativ geladene Ionen (nehmen Elektronen auf)", "Elektronen in der Außenschale"], a:2,
  e:"Anionen = negativ geladen. Entstehen wenn Nichtmetalle Elektronen aufnehmen (z.B. O + 2e⁻ → O²⁻)."},

{c:"Chemie", d:2, q:"Was passiert bei einer exothermen Reaktion?",
  o:["Wärme wird aufgenommen (Produkte energiereicher)", "Wärme wird freigesetzt (Produkte energieärmer)", "Keine Temperaturänderung", "Nur Licht wird erzeugt"], a:1,
  e:"Exotherm: Energie wird abgegeben (Verbrennung, Kristallisation). DTA-Signal: Peak nach oben."},

{c:"Chemie", d:1, q:"Was ist Sublimation?",
  o:["fest → flüssig", "flüssig → gasförmig", "fest → gasförmig", "gasförmig → fest"], a:2,
  e:"Sublimation: direkt von fest zu gasförmig (ohne flüssige Phase). Umgekehrt: Resublimation."},

{c:"Chemie", d:3, q:"Was ist die Atombindung (kovalente Bindung)?",
  o:["Bindung durch Elektronenübertragung zwischen Metall und Nichtmetall", "Bindung zwischen Nichtmetallen durch gemeinsame Elektronenpaare", "Metallische Bindung durch frei bewegliche Elektronen", "Bindung durch Van-der-Waals-Kräfte"], a:1,
  e:"Kovalente Bindung: Nichtmetalle teilen gemeinsame Elektronenpaare um Oktettregel zu erfüllen (z.B. H₂O, CO₂)."},

{c:"Chemie", d:2, q:"Was sind Isotope?",
  o:["Atome verschiedener Elemente mit gleicher Masse", "Atome desselben Elements mit unterschiedlicher Neutronenzahl", "Ionisierte Atome mit veränderten Eigenschaften", "Moleküle mit gleicher Summenformel aber verschiedener Struktur"], a:1,
  e:"Isotope = gleiches Element (gleiche Protonenzahl), aber verschiedene Neutronenzahl → verschiedene Massezahl."},

{c:"Rohstoffe", d:2, q:"Was ist der Glühverlust (GV)?",
  o:["Masseverlust beim Trocknen bei 105°C", "Wasserverlust beim Mahlen", "Schwindung beim Brennen", "Masseverlust beim Erhitzen auf 1000°C"], a:3,
  e:"GV = Masseverlust bei ~1000°C. Erfasst chemisch gebundenes Wasser, Organik und CO₂ aus Carbonaten."},

{c:"Rohstoffe", d:2, q:"Was ist der Unterschied zwischen primärer und sekundärer Tonlagerstätte?",
  o:["Primär = weiter transportiert, plastischer; Sekundär = am Verwitterungsort, reiner", "Primär = am Verwitterungsort (reiner, weniger plastisch); Sekundär = transportiert (verunreinigt, plastischer)", "Beide sind identisch", "Primär = Tagebau; Sekundär = Tiefbau"], a:1,
  e:"Primär (residual): am Entstehungsort → rein (z.B. Kaolin). Sekundär (sedimentär): transportiert → plastischer aber unreiner."},

{c:"Rohstoffe", d:1, q:"Was ist Schamotte?",
  o:["Ein natürlicher Feldspat", "Vorgebrannter, gemahlener Ton – dient als Magerungsmittel", "Ein besonders plastischer Ton", "Ein Flussmittel für Glasuren"], a:1,
  e:"Schamotte = vorgebrannter und gemahlener Ton. Als Magerungsmittel reduziert er Schwindung und Trockenrissneigung."},

{c:"Rohstoffe", d:2, q:"Was ist die wichtigste Eigenschaft von Kaolinit als Tonmineral?",
  o:["Starkes Quellvermögen – sehr plastisch", "Hohe Druckfestigkeit im Grünzustand", "Sehr gute Fließfähigkeit im Schlicker", "Kaum Quellen, gute Formstabilität beim Brand – ideal für Hartporzellan"], a:3,
  e:"Kaolinit quillt wenig → stabil beim Trocknen und Brennen → Hauptteil der Porzellanmasse."},

{c:"Rohstoffe", d:2, q:"Welche Aussagen kann die TGA liefern?",
  o:["Nur Wassergehalt", "Nur Schmelzpunkt des Materials", "Nur Kristallstruktur", "Masseverlust, Wassergehalt, Organikgehalt, Carbonatgehalt, Tonmineralart"], a:3,
  e:"TGA: Masseverlust über Temperatur → Aussagen über mech./chem. Wasser, Organik, Carbonate, Tonmineralart."},

{c:"Fachrechnen", d:2, q:"Was verändert sich wenn der WAK der Glasur dem WAK des Scherbens exakt entspricht?",
  o:["Optimaler Zustand – Glasur ist spannungsfrei", "Gefährlicher Zustand – Glasur reißt immer", "Glasur haftet gar nicht", "Kein Einfluss auf Glasureigenschaften"], a:0,
  e:"WAK-Glasur = WAK-Scherben → spannungsfreie Glasur. Leichte Druckspannung (WAK Glasur < Scherben) ist aber erwünscht!"},

{c:"Fachrechnen", d:2, q:"Was ist das Litergewicht und wie wird es bestimmt?",
  o:["Gewicht von 1 Liter getrocknetem Ton", "Dichte einer Suspension; Bestimmung mit Überlaufkolben + Waage", "Schüttdichte eines Pulvers", "Wassergehalt pro Liter Schlicker"], a:1,
  e:"Litergewicht = Dichte der Suspension [g/l]. Mit Überlaufkolben (exakt 1 l) und Waage. Kein Luftblasen im Schlicker!"},

{c:"Betriebstechnik", d:2, q:"Was ist ein Kollergang und was macht ihn effektiv?",
  o:["Trommelmühle mit hoher Drehzahl", "Schwere Walzen rollen auf einer Mahlbahn", "Pneumatische Förderanlage", "Homogenisierer ohne Zerkleinerung"], a:1,
  e:"Kollergang: schwere Walzen auf Mahlbahn. Effektiv durch Kombination von Druck- und Scherkräften. Besonders für plastische Massen."},

{c:"Betriebstechnik", d:1, q:"Was ist der Unterschied zwischen Stirnrad- und Kegelradgetriebe?",
  o:["Stirnrad: kreuzende Wellen; Kegelrad: parallele Wellen", "Stirnrad: parallele Wellen; Kegelrad: sich schneidende Wellen (meist 90°)", "Beide für parallele Wellen", "Beide für kreuzende Wellen"], a:1,
  e:"Stirnradgetriebe: parallele Wellen. Kegelradgetriebe: sich schneidende Wellen (meist 90° Winkel) → Richtungsänderung."},

{c:"Betriebstechnik", d:2, q:"Was bedeutet 'selbsthemmend' beim Schneckengetriebe?",
  o:["Das Getriebe blockiert bei Überlast", "Der Abtrieb kann den Antrieb nicht zurückdrehen ", "Das Getriebe benötigt keinen Motor", "Die Übersetzung ist stufenlos regelbar"], a:1,
  e:"Selbsthemmend: Antrieb treibt Abtrieb an, aber NICHT umgekehrt. Vorteil: Haltebremse nicht nötig (z.B. Hebebühnen)."},

{c:"MSR", d:2, q:"Was ist der D-Anteil des PID-Reglers und sein Nachteil?",
  o:["Proportional zur Abweichung; bleibende Regelabweichung", "Integriert Abweichung; überschwingt", "Reagiert auf Änderungsrate (vorausschauend/dämpfend); empfindlich auf Messrauschen", "Kombiniert alle drei Anteile; schwer einstellbar"], a:2,
  e:"D-Anteil: reagiert auf Änderungsgeschwindigkeit → dämpfend, vorausschauend. Nachteil: verstärkt Messrauschen stark."},

{c:"MSR", d:1, q:"Welche Aussage zur Strecke mit Ausgleich ist richtig?",
  o:["Der Istwert läuft bei konstantem Eingang endlos weiter", "Die Strecke braucht keinen Regler", "Der Istwert pendelt sich bei konstantem Eingang auf einen Endwert ein", "Die Strecke reagiert sofort ohne Verzugszeit"], a:2,
  e:"Strecke mit Ausgleich (stabile Strecke): findet von selbst Gleichgewichtszustand → Endwert bei konstantem Eingang."},

{c:"MSR", d:2, q:"Was ist Regeln, und was ist der Unterschied zum Steuern?",
  o:["Regeln = offene Kette; Steuern = Soll/Ist-Vergleich", "Regeln = geschlossene Kette mit Soll/Ist-Vergleich; Steuern = offene Kette ohne Feedback", "Beide sind identisch", "Steuern ist präziser als Regeln"], a:1,
  e:"Regeln: geschlossener Kreislauf, Soll/Ist-Vergleich, Eingriff. Steuern: offene Kette, kein Feedback, kein Eingriff."},

{c:"Wärmelehre", d:2, q:"Was ist Enthalpie?",
  o:["Druckkraft pro Fläche", "Wärmeleitfähigkeit eines Materials", "Energiegehalt eines thermodynamischen Systems", "Strahlungsleistung bei hohen Temperaturen"], a:2,
  e:"Enthalpie H = Energiegehalt eines thermodynamischen Systems (innere Energie + Druckarbeit). Relevant bei Phasenübergängen."},

{c:"Wärmelehre", d:2, q:"Warum muss bei Gasberechnungen immer die absolute Temperatur in Kelvin verwendet werden?",
  o:["Weil Grad Celsius keine SI-Einheit ist", "Weil Gasgesetze (Gay-Lussac, Boyle-Mariotte) nur bei absoluter Temperatur proportionale Zusammenhänge ergeben", "Weil Kelvin größere Zahlen liefert", "Weil Celsius-Werte negativ sein können"], a:1,
  e:"Bei 0°C (Celsius) wäre z.B. Volumen = 0 laut Formel → falsch. Absoluter Nullpunkt = 0 K = -273,15°C. T[K] = T[°C]+273."},

{c:"Wärmelehre", d:1, q:"Was sind Wandverluste vs. Speicherverluste bei Öfen?",
  o:["Wandverluste = Wärme durch Ofenwand; Speicherverluste = Wärme in Ofenwand gespeichert und beim Abkühlen verloren", "Beide sind identisch", "Wandverluste = nur bei Tunnelöfen; Speicherverluste = nur bei periodischen Öfen", "Speicherverluste = Wärme im Produkt; Wandverluste = Wärme durch Abgas"], a:0,
  e:"Tunnelofen (kontinuierlich): Wandverluste dominant. Periodischer Ofen: Speicherverluste dominant → Keramikfaser hilft."},

{c:"Wärmelehre", d:2, q:"Was ist die Formel für Wärmemenge aus Verbrennung?",
  o:["Q = m·c·ΔT", "Q = V·Hu", "Q = η·P", "Q = λ·A·ΔT/d"], a:1,
  e:"Q = V · Hu. V = Volumen Brenngas [m³n], Hu = unterer Heizwert [kWh/m³n oder kJ/m³n]."},

{c:"Fertigungstechnik", d:2, q:"Was ist ein Saggar (Brennkapsel)?",
  o:["Feuerfeste Schutzhülle für Porzellanware im Ofen", "Magerungsmittel aus vorgebranntem Ton", "Brennhilfsmittel-Pfosten zum Stapeln", "Glasurbehälter im Sprühturm"], a:0,
  e:"Saggare: feuerfeste Schachtel um die Ware. Schützt vor direkter Flamme und Rauchgasen → gleichmäßige Wärme, reinere Ware."},

{c:"Fertigungstechnik", d:1, q:"Was sind Brennhilfsmittel (BHM)?",
  o:["Chemische Zusätze die den Brand beschleunigen", "Farbkörper die erst beim Brand aktiviert werden", "Glasuradditive für bessere Haftung", "Feuerfeste Hilfsmittel zum Stapeln und Stützen der Ware im Ofen"], a:3,
  e:"BHM: feuerfeste Keramik (Platten, Pfosten, Kapseln, Ringe) zum Aufstapeln der Ware. Verschleiß durch Thermoschock."},

{c:"Fertigungstechnik", d:2, q:"Was ist Biskuitporzellan?",
  o:["Glasiertes Weichporzellan", "Unglasiertes, matt gebranntes Porzellan nach Glühbrand", "Porzellan mit Biskuit-Glasur", "Hochgebranntes Porzellan mit Kristallglasur"], a:1,
  e:"Biskuitporzellan: nach Glühbrand, unglasiert, weiß-matt, leicht porös. Für Figuren, Kunst. Spürt sich samtig an."},

{c:"Fertigungstechnik", d:2, q:"Was ist eine ZTA-Keramik?",
  o:["Zinn-Titan-Aluminium – für Hochtemperaturisolierung", "Zement-Ton-Aggregat für Baukeramik", "Zirconia Toughened Alumina: Al₂O₃-Matrix + ZrO₂", "Zugabe von ZnO zu Al₂O₃ für elektrische Leitfähigkeit"], a:2,
  e:"ZTA: Al₂O₃ (hart, verschleißfest, aber spröde) + ZrO₂ (zäh, rissfest) → Kompromiss mit verbessertem Eigenschaftsprofil."},

{c:"Fertigungstechnik", d:1, q:"Was ist der Ablauf des keramischen Prozesses in der Feinkeramik?",
  o:["Rohstoffe → Brennen → Trocknen → Formen → Glasieren", "Rohstoffe → Aufbereitung → Formgebung → Trocknung → Glühbrand → Glasieren → Glattbrand", "Rohstoffe → Glasieren → Trocknen → Brennen", "Aufbereitung → Glasieren → Formen → Trocknen → Brennen"], a:1,
  e:"Korrekt: Rohstoffaufbereitung → Formgebung → Trocknung → Glühbrand → Glasieren → Glattbrand."},

{c:"Physik & Mathe", d:1, q:"Was ist die Formel für Arbeit W?",
  o:["W = F / s", "W = F · s", "W = F + s", "W = F · t"], a:1,
  e:"Arbeit = Kraft × Weg: W = F · s [Joule = N·m]."},

{c:"Physik & Mathe", d:1, q:"Was ist die Formel für Leistung P?",
  o:["P = W · t", "P = W / t", "P = F / t", "P = v / t"], a:1,
  e:"Leistung P = Arbeit / Zeit = W/t [Watt = J/s]."},

{c:"Physik & Mathe", d:1, q:"Welche Einheit hat Kraft F?",
  o:["Joule", "Watt", "Newton", "Pascal"], a:2,
  e:"Kraft: Newton [N = kg·m/s²]."},

{c:"Physik & Mathe", d:1, q:"Wie wird Druck (p) berechnet ?",
  o:["Kraft × Fläche", "Arbeit × Zeit", "Masse / Volumen", "Kraft / Fläche"], a:3,
  e:"Druck p = F/A [Pascal = N/m²]."},

{c:"Physik & Mathe", d:1, q:"Was ist der Wirkungsgrad η?",
  o:["Verlust/Eingang", "Nutzleistung/aufgewendete Leistung", "Summe aller Leistungen", "Differenz aus Ein- und Ausgang"], a:1,
  e:"η = P_nutz/P_zu. Immer ≤ 1 (≤ 100%)."},

{c:"Physik & Mathe", d:1, q:"Was ist die Einheit für Energie?",
  o:["Newton", "Watt", "Joule", "Pascal"], a:2,
  e:"Energie in Joule [J = N·m = W·s]."},

{c:"Physik & Mathe", d:1, q:"Was ist das 2. Newtonsche Gesetz?",
  o:["F = m/a", "F = m·a", "F = m+a", "a = m·F"], a:1,
  e:"F = m·a."},

{c:"Physik & Mathe", d:1, q:"Formel für Berechnugn der Dichte ρ?",
  o:["ρ = m · V", "ρ = m / V", "ρ = V / m", "ρ = F / A"], a:1,
  e:"Dichte ρ = m/V [kg/m³]."},

{c:"Physik & Mathe", d:1, q:"Nenne die SI-Einheit für Druck?",
  o:["Newton", "Joule", "Pascal", "Bar"], a:2,
  e:"Pascal [Pa = N/m²]."},

{c:"Physik & Mathe", d:1, q:"Formel für die Gewichtskraft?",
  o:["F_G = m²·g", "F_G = m·g", "F_G = m/g", "F_G = g/m"], a:1,
  e:"F_G = m·g."},

{c:"Physik & Mathe", d:2, q:"Was ergibt π (Pi) gerundet auf 3 Stellen?",
  o:["2,718", "3,141", "3,302", "2,303"], a:1,
  e:"π ≈ 3,14159…"},

{c:"Physik & Mathe", d:1, q:"Einheit für das Drehmoment M?",
  o:["Newton", "Watt", "Nm", "Joule/s"], a:2,
  e:"Drehmoment M = F·r in Nm."},

{c:"Physik & Mathe", d:2, q:"Formel für das Drehmoment?",
  o:["M = F/r", "M = F·r", "M = P/r", "M = r/F"], a:1,
  e:"M = F·r (Hebelarm)."},

{c:"Physik & Mathe", d:2, q:"Wie lautet das Ohmsche Gesetz?",
  o:["U = R·I", "U = R/I", "R = U·I", "I = U·R"], a:0,
  e:"U = R·I."},

{c:"Physik & Mathe", d:2, q:"Welche Einheit hat der Wärmeausdehnungskoeffizient (WAK) α?",
  o:["1/K", "K", "°C", "m/K"], a:0,
  e:"α in 1/K (K⁻¹)."},

{c:"Wärmelehre", d:1, q:"Was beschreibt spezifische Wärmekapazität c?",
  o:["Energie pro kg und Kelvin", "Energie pro Grad", "Leitfähigkeit", "Strahlungsleistung"], a:0,
  e:"c [kJ/(kg·K)] – Wärme, die 1 kg um 1 K erwärmt."},

{c:"Wärmelehre", d:1, q:"Wie lautet die Formel für Wärme Q?",
  o:["Q = m/c·ΔT", "Q = c/(m·ΔT)", "Q = m·c·ΔT", "Q = m·c/ΔT"], a:2,
  e:"Q = m·c·ΔT."},

{c:"Wärmelehre", d:1, q:"Was ist die Wärmekapazität von Wasser?",
  o:["0,84 kJ/(kg·K)", "2,09 kJ/(kg·K)", "4,18 kJ/(kg·K)", "1,0 kJ/(kg·K)"], a:2,
  e:"c_Wasser ≈ 4,18 kJ/(kg·K)."},

{c:"Wärmelehre", d:1, q:"Was ist Schmelzwärme?",
  o:["Wärme für Phasenwechsel fest→flüssig", "Wärme zum Verdampfen", "Wärme für Temperaturerhöhung", "Strahlungswärme"], a:0,
  e:"Schmelzwärme q_s: Phasenwechsel bei const. T. Wasser: 334 kJ/kg."},

{c:"Wärmelehre", d:2, q:"Welche Energie wird benötigt, um 2 kg Eis (0°C) zu schmelzen? (Q_sch = 334 kJ/kg)",
  o:["167 kJ", "334 kJ", "668 kJ", "2257 kJ"], a:2,
  e:"Q = 2·334 = 668 kJ."},

{c:"Wärmelehre", d:1, q:"Welche drei Arten der Wärmeübertragung gibt es?",
  o:["Leitung, Strahlung, Konduktion", "Konvektion, Leitung, Strahlung", "Diffusion, Konvektion, Leitung", "Strahlung, Absorption, Reflexion"], a:1,
  e:"Wärmeleitung, Konvektion, Strahlung."},

{c:"Wärmelehre", d:1, q:"Was ist Konvektion?",
  o:["Wärme durch Strahlung", "Wärme durch Materialkontakt", "Wärme durch Strömung von Fluiden", "Wärme durch Elektrizität"], a:2,
  e:"Konvektion: Wärmemitnahme durch strömende Flüssigkeiten/Gase."},

{c:"Wärmelehre", d:1, q:"Was ist das Stefan-Boltzmann-Gesetz?",
  o:["Fouriersches Gesetz", "Q̇ = σ·A·T⁴ (Strahlung)", "Newton'sches Abkühlungsgesetz", "Kirchhoffsches Gesetz"], a:1,
  e:"Wärmestrahlung steigt mit 4. Potenz der absoluten Temperatur: Q̇ = σ·A·T⁴."},

{c:"Wärmelehre", d:2, q:"Was bedeutet adiabatisch?",
  o:["Keine Wärmeübertragung", "Isothermer Prozess", "Gleicher Druck", "Gleiche Entropie"], a:0,
  e:"Adiabatisch: kein Wärmeaustausch mit Umgebung (Q=0)."},

{c:"Wärmelehre", d:1, q:"Was ist der 1. Hauptsatz der Thermodynamik?",
  o:["Wärme fließt von kalt nach warm", "Entropie nimmt zu", "Energie kann nicht erzeugt/vernichtet werden", "Wirkungsgrad immer 100%"], a:2,
  e:"Energieerhaltung: ΔU = Q − W."},

{c:"Wärmelehre", d:1, q:"Was ist der 2. Hauptsatz der Thermodynamik?",
  o:["Energie kann nicht erzeugt oder vernichtet werden", "Wärme fließt spontan immer von der wärmeren zur kälteren Region – nicht umgekehrt", "Alle thermodynamischen Prozesse sind reversibel", "Der Wirkungsgrad einer Maschine kann 100% erreichen"], a:1,
  e:"2. Hauptsatz: Irreversibilität. Wärme fließt spontan nur von warm nach kalt. Ein Wirkungsgrad von 100% ist physikalisch unmöglich."},

{c:"Wärmelehre", d:2, q:"Wie viel sind 300°C in Kelvin?",
  o:["27 K", "300 K", "573 K", "−273 K"], a:2,
  e:"T[K] = 300+273 = 573 K."},

{c:"Wärmelehre", d:2, q:"Was bedeutet der Begriff „isotherm\"?",
  o:["Kein Wärmeaustausch", "Konstanter Druck", "Konstante Temperatur", "Konstantes Volumen"], a:2,
  e:"Isotherm: Temperatur bleibt konstant."},

{c:"Wärmelehre", d:2, q:"Was ist absoluter Nullpunkt?",
  o:["0°C", "−100°C", "−273°C (0 K)", "−373 K"], a:2,
  e:"0 K = −273,15°C. Tiefste Temperatur."},

{c:"Wärmelehre", d:2, q:"Was passiert bei Phasenwechsel mit der Temperatur?",
  o:["Sie steigt linear", "Sie bleibt konstant", "Sie sinkt", "Sie schwankt"], a:1,
  e:"T bleibt konstant – Energie für Phasenwechsel."},

{c:"Wärmelehre", d:2, q:"Was unterscheidet den Brennwert(Ho) vom Heizwert (Hu) eines Brennstoffs?",
  o:["Hu berücksichtigt Kondensationswärme, Ho nicht", "H_u gilt für feste, H_o für gasförmige Brennstoffe", "Hu ist die nutzbare Wärme ohne Kondensationsanteil des Abgaswasserdampfes", "Beide Werte sind identisch – nur unterschiedliche Bezeichnungen"], a:2,
  e:"Hu (unterer Heizwert): Wasser im Abgas bleibt dampfförmig – Kondensationswärme nicht genutzt. Ho schließt diese ein. In der Praxis wird Hu verwendet."},

{c:"Wärmelehre", d:2, q:"Was ist Rekuperation und wozu dient sie?",
  o:["Nachverbrennung", "Wärmerückgewinnung aus Abgasen", "Abgasfilterung", "Abkühlung des Ofens"], a:1,
  e:"Rekuperation: Abgaswärme heizt Verbrennungsluft vor. Energieeinsparung 20–30%."},

{c:"Wärmelehre", d:2, q:"Was beschreibt die Entropie in der Thermodynamik?",
  o:["Die kinetische Energie der Moleküle bei einer bestimmten Temperatur", "Den Druckverlust in einem Strömungssystem", "Ein Maß für die Unordnung eines Systems (S = Q/T bei reversibler Änderung)", "Die Wärmemenge, die zwischen zwei Körpern ausgetauscht wird"], a:2,
  e:"Entropie S [J/K]: S = Q_rev/T. In isolierten Systemen nimmt S zu (2. Hauptsatz). Je höher S, desto ungeordneter das System."},

{c:"Wärmelehre", d:2, q:"Was ist Infrarotstrahlung (IR-Strahlung)?",
  o:["Wärmeübertragung ohne Medium (auch im Vakuum)", "Nur bei sehr hohen T relevant", "Benötigt Konvektion", "Sichtbares Licht"], a:0,
  e:"IR-Strahlung: auch im Vakuum, wichtig bei Hochtemperaturöfen."},

{c:"Wärmelehre", d:2, q:"Was ist thermisches Gleichgewicht?",
  o:["Gleiche Temperaturen, kein Nettowärmefluss", "Gleiche Drücke", "Gleiche Zusammensetzung", "Gleiche Geschwindigkeit"], a:0,
  e:"Thermisches Gleichgewicht: kein Temperaturgradient, kein Wärmefluss."},

{c:"Wärmelehre", d:2, q:"Wärmeleitfähigkeit Wasser (ca.)?",
  o:["0,026 W/(m·K)", "0,6 W/(m·K)", "15 W/(m·K)", "200 W/(m·K)"], a:1,
  e:"λ_Wasser ≈ 0,6 W/(m·K) – viel besser als Luft, viel schlechter als Metall."},

{c:"Rohstoffe", d:1, q:"Hauptoxid in Tonerdestein?",
  o:["SiO₂", "CaO", "Al₂O₃", "MgO"], a:2,
  e:"Tonerdestein: primär Al₂O₃. Hohe Feuerfestigkeit."},

{c:"Rohstoffe", d:1, q:"Was ist Mullit?",
  o:["3Al₂O₃·2SiO₂", "SiO₂ in Kristallform", "CaO·SiO₂", "MgO·Al₂O₃"], a:0,
  e:"Mullit: 3Al₂O₃·2SiO₂ – wichtigste Phase in Alumosilikat-Feuerfest."},

{c:"Rohstoffe", d:1, q:"Was ist Korund?",
  o:["Synthetische Al-Verbindung", "Calciumsilikat", "Magnesiumoxid", "Kristallines Al₂O₃"], a:3,
  e:"Korund = α-Al₂O₃. Mohshärte 9, Schmelzpunkt 2050°C."},

{c:"Rohstoffe", d:1, q:"Hauptbestandteil von Quarz?",
  o:["Al₂O₃", "CaO", "SiO₂", "TiO₂"], a:2,
  e:"Quarz = kristallines SiO₂."},

{c:"Rohstoffe", d:2, q:"Quarzumwandlung bei welcher Temperatur?",
  o:["200°C", "1713°C", "870°C", "573°C"], a:3,
  e:"α↔β-Quarz bei 573°C mit ~2% Volumenänderung."},

{c:"Rohstoffe", d:1, q:"Was ist Dolomit?",
  o:["CaCO₃", "MgCO₃", "CaMg(CO₃)₂", "CaSiO₃"], a:2,
  e:"Dolomit: CaMg(CO₃)₂ → CaO + MgO beim Brennen."},

{c:"Rohstoffe", d:1, q:"Was ist Magnesit?",
  o:["MgCO₃ → MgO (gebrannt)", "CaCO₃", "Al₂O₃", "SiO₂·MgO"], a:0,
  e:"Magnesit MgCO₃ → MgO (Periklas). Schmelzpunkt MgO 2852°C."},

{c:"Rohstoffe", d:1, q:"Was ist eine 'Saure' Feuerfestkeramik?",
  o:["Carbide", "SiO₂ oder Al₂O₃-SiO₂", "MgO oder CaO", "Sulfate"], a:1,
  e:"Sauer = SiO₂-reich. Empfindlich gegen basische Schlacken."},

{c:"Rohstoffe", d:1, q:"Was ist eine 'Basische' Feuerfestkeramik?",
  o:["SiO₂-dominierend", "MgO, CaO dominierend", "Carbid-basiert", "Al₂O₃ > 80%"], a:1,
  e:"Basisch = MgO, CaO, Dolomit. Beständig gegen basische Schlacken."},

{c:"Rohstoffe", d:2, q:"Was ist Periklas?",
  o:["SiO₂", "Al₂O₃", "MgO (kristallin)", "CaO"], a:2,
  e:"Periklas = kubisches MgO. Schmelzpunkt 2852°C."},

{c:"Rohstoffe", d:2, q:"Wie hoch ist der Schmelzpunkt von Al₂O₃?",
  o:["1250°C", "1710°C", "2050°C", "2852°C"], a:2,
  e:"Al₂O₃ schmilzt bei ~2050°C."},

{c:"Rohstoffe", d:2, q:"Wie hoch ist der Schmelzpunkt von SiO₂?",
  o:["573°C", "1250°C", "1713°C", "2050°C"], a:2,
  e:"SiO₂ schmilzt bei ~1713°C."},

{c:"Rohstoffe", d:1, q:"Was ist Kaolin?",
  o:["Reines SiO₂", "Verwitterungsgestein mit Kaolinit", "Synthetisches Al₂O₃", "Calciumcarbonat"], a:1,
  e:"Kaolin: primär Kaolinit Al₂Si₂O₅(OH)₄. Rohstoff der Feinkeramik."},

{c:"Rohstoffe", d:2, q:"Was ist Bauxit?",
  o:["CaCO₃", "Al₂O₃-reiches Erz für Tonerde", "Reines SiO₂", "Mg-Silikat"], a:1,
  e:"Bauxit: Al₂O₃-Erz. Ausgangsstoff für Tonerde/Korund."},

{c:"Rohstoffe", d:2, q:"Was ist Andalusit und wozu wird er eingesetzt?",
  o:["CaCO₃-Mineral für basische Feuerfestmassen", "Natürliches Al₂SiO₅-Mineral, hochfeuerfest, beim Brand →Mullit", "Synthetisches MgO für Hochtemperaturanwendungen", "SiO₂-Varietät mit niedrigem WAK"], a:1,
  e:"Andalusit Al₂SiO₅: natürliches Mineral, beim Brand → Mullit + Glasphase. Hochfeuerfest, niedriger WAK."},

{c:"Rohstoffe", d:2, q:"Was kennzeichnet Spinell (MgAl₂O₄) als Feuerfestmaterial?",
  o:["Niedriger Schmelzpunkt (~1200°C), gutes Flussmittel", "Hoher SiO₂-Gehalt, saures Verhalten", "Schmelzpunkt ~2135°C, gute Schlacken- und Temperaturwechselbeständigkeit", "Basisches Oxid ähnlich wie CaO"], a:2,
  e:"Spinell MgAl₂O₄: Schmelzpunkt ~2135°C, hervorragende TWB und Schlackenbeständigkeit."},

{c:"Rohstoffe", d:1, q:"Was passiert beim Sintern keramischer Werkstoffe?",
  o:["Aufschmelzen und Wiedererstarren der Körner", "Lösung des Materials in flüssiger Phase", "Oxidation der Oberfläche an Luft", "Verdichtung durch Diffusion unterhalb der Schmelztemperatur"], a:3,
  e:"Sintern: Diffusion bei T < T_Schmelz (ca. 60–90% der Schmelztemperatur). Poren schließen sich, Körner wachsen zusammen."},

{c:"Rohstoffe", d:2, q:"Was ist besonders an Cordierit (Mg₂Al₄Si₅O₁₈) als Keramikwerkstoff?",
  o:["Sehr hohe Dichte und gute elektrische Leitfähigkeit", "Extrem hoher Schmelzpunkt von >2800°C", "Sehr niedriger WAK (~2·10⁻⁶/K) → hervorragende Temperaturwechselbeständigkeit", "Hohe Korrosionsbeständigkeit gegen Säuren"], a:2,
  e:"Cordierit: WAK ≈ 2·10⁻⁶/K – einer der niedrigsten keramischer Werkstoffe. Daher top TWB. Einsatz: Katalysatorträger, Kochfelder."},

{c:"Rohstoffe", d:2, q:"Welche Funktion hat Feldspat im keramischen Versatz?",
  o:["Magerungsmittel", "Plastizitätserhöhung", "Flussmittel (Glasphase)", "Färbemittel"], a:2,
  e:"Feldspat: Flussmittel. Schmilzt ~1200°C, füllt Poren."},

{c:"Rohstoffe", d:2, q:"Was kennzeichnet ZrO₂ (Zirkondioxid) als Hochleistungskeramik?",
  o:["Guter elektrischer Leiter, Einsatz in Kondensatoren", "Schmelzpunkt ~2715°C, hohe chemische und mechanische Beständigkeit", "Niedriger Schmelzpunkt (~1200°C), Flussmittel in Glasuren", "Billige Schamotte-Alternative mit mittlerer Feuerfestigkeit"], a:1,
  e:"ZrO₂: Schmelzpunkt ~2715°C, hohe Bruchzähigkeit (durch Phasenumwandlungsverstärkung), sehr korrosionsbeständig."},

{c:"Rohstoffe", d:1, q:"Welche Funktion hat ein Magerungsmittel in der Keramikmasse?",
  o:["Erhöht die Plastizität der Masse", "Wirkt als Flussmittel beim Sintern", "Reduziert Schwindung und Rissbildung beim Trocknen und Brennen", "Verbessert die Haftung der Glasur"], a:2,
  e:"Magerungsmittel (z.B. Schamottemehl, Quarzsand): verringert Schwindung und Rissrisiko bei Trocknung und Brand."},

{c:"Rohstoffe", d:2, q:"Was kennzeichnet Siliziumcarbid (SiC) als technische Keramik?",
  o:["Weich (Mohshärte 3), gut spanbar, niedriger Schmelzpunkt", "Sehr hohe Härte (Mohs 9,5), λ ≈ 100 W/(m·K), beständig bis ~1600°C in Luft", "Basisches Oxid, beständig gegen Säuren", "Niedrige Wärmeleitfähigkeit, ideal als Dämmmaterial"], a:1,
  e:"SiC: Mohs 9,5, Wärmeleitfähigkeit ≈ 100 W/(m·K), oxidationsbeständig bis ~1600°C. Brennhilfsmittel, Ofenrohre."},

{c:"Rohstoffe", d:2, q:"Was ist Cristobalit?",
  o:["Al₂O₃-Form", "Calciumsilikat", "SiO₂-Polymorph (stabil >870°C)", "MgO-Variante"], a:2,
  e:"Cristobalit: SiO₂-Polymorph, Umwandlung bei 200–270°C mit Volumenänderung."},

{c:"Rohstoffe", d:2, q:"Welche Phase bildet sich aus Kaolin beim Brand?",
  o:["Kaolin→Glasphase→Cristobalit", "Kaolin→Calcit", "Kaolin→Korund", "Kaolin→Metakaolin→Mullit+Glasphase"], a:3,
  e:"Kaolinit (550°C)→Metakaolin→Mullit+Glasphase (>1100°C)."},

{c:"Rohstoffe", d:2, q:"Was ist die Brennschwindung?",
  o:["Masseverlust durch Verbrennung", "Schwindung beim Brand", "Ofenrückstand", "Thermische Ausdehnung"], a:1,
  e:"Brennschwund = Schwindung beim Brennen (Sintern, Gasabgabe)."},

{c:"Rohstoffe", d:2, q:"Was ist ein Bentonit?",
  o:["Reines Kaolin", "Quelltonmineral (Smektit), plastisch", "Natürliches SiO₂", "Mg-Al-Silikat ohne Quellvermögen"], a:1,
  e:"Bentonit: quillt stark, Plastifizierungszusatz."},

{c:"Rohstoffe", d:3, q:"Was ist der wesentliche Unterschied zwischen Schamotte und Mullit?",
  o:["Mullit ist SiO₂-reicher als Schamotte", "Mullit ist die definierte Phase 3Al₂O₃·2SiO₂; Schamotte ist gebrannter Ton mit variabler Zusammensetzung", "Schamotte hat einen höheren Schmelzpunkt als Mullit", "Schamotte enthält MgO, Mullit nicht"], a:1,
  e:"Schamotte = gebrannter Ton (inhomogen, variabel). Mullit = definierte Phase 3Al₂O₃·2SiO₂, hochfeuerfest (~1840°C)."},

{c:"Rohstoffe", d:2, q:"Unterschied primärer & sekundärer Lagerstätte?",
  o:["Kaolin=primär (am Entstehungsort), Sekundärton=transportiert, plastischer", "Kaolin plastischer", "Sekundärton mehr Al₂O₃", "Kein Unterschied"], a:0,
  e:"Kaolin primär (Verwitterung in situ). Sekundärton transportiert, mehr Verunreinigungen, plastischer."},

{c:"Rohstoffe", d:2, q:"Was verleiht dem Ton seine Plastizität?",
  o:["Quarz", "Feldspat", "Tonminerale (Kaolinit)", "Calcit"], a:2,
  e:"Tonminerale: Schichtstruktur mit H₂O → Gleitebenen → Plastizität."},

{c:"Rohstoffe", d:2, q:"Was ist Sinterkorund?",
  o:["Gesintertes SiO₂", "Gesintertes Al₂O₃ >99%", "Mg-Al-Spinell", "Mullit-Variante"], a:1,
  e:"Sinterkorund: Al₂O₃ > 99%, Schmelzpunkt 2050°C."},

{c:"Rohstoffe", d:2, q:"Was ist eine Glasphase in Keramik?",
  o:["Vollständig kristalline Struktur", "Reine SiO₂-Schicht", "Amorphe Schmelzphase aus Flussmitteln", "Porenfüllung mit Wasser"], a:2,
  e:"Glasphase aus Flussmitteln (Feldspat). Verbindet Körner, füllt Poren."},

{c:"Rohstoffe", d:2, q:"Was ist ein Klinker?",
  o:["Hart gesinterter Ziegel,frost-/witterungsbeständig", "Roher roter Ziegel", "Weich gebrannter Dachziegel", "Lehmstein getrocknet"], a:0,
  e:"Klinker: dicht gesintert, sehr hart, chemisch beständig."},

{c:"Rohstoffe", d:2, q:"Was ist Gips (CaSO₄)?",
  o:["Calciumcarbonat", "Calciumsulfat – poröses Bindemittel,", "Magnesiumsulfat", "Aluminiumsulfat"], a:1,
  e:"Gips CaSO₄·½H₂O: nimmt Wasser auf → Scherbenbildung. Für Gussformen."},

{c:"Rohstoffe", d:2, q:"Was ist Si₃N₄?",
  o:["Siliziumoxid", "Siliziumnitrid", "Siliziumcarbid", "Calciumnitrid"], a:1,
  e:"Si₃N₄: hohe Zähigkeit, TWB, bis ~1300°C. Schneidwerkzeuge, Turbinenteile."},

{c:"Rohstoffe", d:3, q:"Was ist eutektisches Gemisch?",
  o:["Gemisch mit höchstem Schmelzpunkt", "Gemisch mit niedrigstem Schmelzpunkt", "Reiner Stoff", "Binäres Oxid"], a:1,
  e:"Eutektikum: tiefstschmelzende Zusammensetzung. Wichtig für Schlackenchemie."},

{c:"Rohstoffe", d:2, q:"Was ist Amphoterie?",
  o:["Nur sauer", "Nur basisch", "Sowohl sauer als auch basisch reagieren können", "Weder sauer noch basisch"], a:2,
  e:"Amphoter: kann als Säure und Base reagieren, z.B. Al₂O₃."},

{c:"Chemie", d:1, q:"Was ist Oxidation?",
  o:["Aufnahme von Elektronen", "Auflösung in Wasser", "Bindung an H", "Abgabe von Elektronen / Reaktion mit O₂"], a:3,
  e:"Oxidation = Elektronenabgabe (oder Reaktion mit O₂)."},

{c:"Chemie", d:1, q:"Was ist Reduktion?",
  o:["Abgabe von Elektronen", "Aufnahme von Elektronen / Entzug von O₂", "Säure-Base-Reaktion", "Neutralisierung"], a:1,
  e:"Reduktion = Elektronenaufnahme."},

{c:"Chemie", d:1, q:"Besonders an Säure nach Brønsted?",
  o:["Protonenakzeptor", "Protonendonor (gibt H⁺ ab)", "Elektronendonor", "Oxidationsmittel"], a:1,
  e:"Säure gibt H⁺ ab."},

{c:"Chemie", d:1, q:"Was sind Neutralisationsprodukte?",
  o:["Salz + Wasser", "Säure + Base", "H₂ + O₂", "CO₂ + H₂O"], a:0,
  e:"Säure + Base → Salz + Wasser."},

{c:"Chemie", d:1, q:"Was entsthet bei der Verbrennung von Kohlenstoff?",
  o:["CO + CO₂", "SO₂", "H₂O", "N₂"], a:0,
  e:"C + O₂ → CO₂ (vollst.) oder 2C + O₂ → 2CO (unvollst.)."},

{c:"Chemie", d:2, q:"Was passiert mit CaCO₃ beim Erhitzen?",
  o:["CaCO₃ + H₂O → Ca(OH)₂", "CaCO₃ → CaO + CO₂", "CaO + SiO₂ → CaSiO₃", "Ca + O₂ → CaO"], a:1,
  e:"Calcination: CaCO₃ → CaO + CO₂ ab ~850°C."},

{c:"Chemie", d:2, q:"Bei welcher Temperatur gibt Kaolinit sein Kristallwasser ab und was entsteht?",
  o:["Bei 200°C → Metacristobalit entsteht", "Bei 873°C → Spinell-Phase entsteht", "Bei 450–600°C → Metakaolin entsteht (irreversibel)", "Bei 1100°C → Mullit entsteht"], a:2,
  e:"Kaolinit gibt bei ~550°C Kristallwasser ab: Al₂Si₂O₅(OH)₄ → Al₂Si₂O₇ + 2H₂O. Irreversibler Prozess, Metakaolin entsteht."},

{c:"Chemie", d:1, q:"Was versteht man unter Kalzinierung?",
  o:["Abschrecken eines heißen Materials in Wasser", "Schmelzen und kontrolliertes Erstarren", "Thermische Zersetzung unter Abgabe flüchtiger Bestandteile (z.B. CO₂)", "Chemische Reaktion mit Säure bei Raumtemperatur"], a:2,
  e:"Kalzinierung: thermische Zersetzung. z.B. CaCO₃ → CaO + CO₂ ab ~850°C. Basis der Kalk- und Zementproduktion."},

{c:"Chemie", d:1, q:"Was ist eine exotherme Reaktion?",
  o:["Nimmt Wärme auf", "Gibt Wärme ab (ΔH < 0)", "Elektrisches Feld nötig", "Hoher Druck"], a:1,
  e:"Exotherm: Wärme wird frei. z.B. Verbrennung, Hydratation CaO."},

{c:"Chemie", d:1, q:"Was ist eine endotherme Reaktion?",
  o:["Nimmt Wärme auf (ΔH > 0)", "Gibt Wärme ab", "Immer explosiv", "Schnelle Reaktion"], a:0,
  e:"Endotherm: nimmt Wärme auf. z.B. CaCO₃ → CaO + CO₂."},

{c:"Chemie", d:2, q:"Was ist Schmelzpunkterniedrigung?",
  o:["Erhöhung durch Reinigung", "Senkung durch Beimengungen (Flussmittel)", "Schmelzpunkt ändert sich nie", "Druckabhängigkeit"], a:1,
  e:"Flussmittel senken Schmelzpunkt → Sintertemperatur sinkt."},

{c:"Chemie", d:2, q:"Was entsteht, wenn MgO mit Wasser reagiert?",
  o:["Mg(NO₃)₂", "Mg(OH)₂", "MgSO₄", "Mg₂O₃"], a:1,
  e:"MgO + H₂O → Mg(OH)₂. Problematisch bei Magnesit-Feuerfest (Volumenausdehnung)."},

{c:"Chemie", d:2, q:"Was bedeutet stöchiometrische Verbrennung (λ = 1)?",
  o:["Die Verbrennung läuft mit 20% Luftüberschuss ab", "Die zugeführte Luftmenge entspricht exakt dem theoretischen Bedarf – vollständige Verbrennung", "Die Verbrennung erfolgt mit Luftmangel – CO entsteht", "Nur möglich bei reinem Sauerstoff als Oxidationsmittel"], a:1,
  e:"Stöchiometrisch: λ=1 = genau der theoretische Luftbedarf. Vollständige Verbrennung ohne Überschuss. In der Praxis λ = 1,05–1,2."},

{c:"Chemie", d:2, q:"Welche Eigenschaften machen SiC zur technischen Hochleistungskeramik?",
  o:["Niedrige Härte, leicht zerspanbar, niedriger Schmelzpunkt (~1000°C)", "Gute elektrische Leitfähigkeit, ideal für Kondensatoren", "Sehr hohe Härte (Mohs 9,5), hohe Wärmeleitfähigkeit (~100 W/(m·K)), Oxidationsbeständig bis ~1600°C", "Basisches Oxid mit guter Schlackenbeständigkeit"], a:2,
  e:"SiC: Mohs 9,5, λ ≈ 100 W/(m·K), Schmelzpunkt ~2700°C, oxidationsbeständig bis ~1600°C. Brennhilfsmittel, Heizstäbe."},

{c:"Chemie", d:2, q:"Was passiert beim Schrühbrand ( ~900°C) ?",
  o:["Feldspat schmilzt und bildet Glasphase", "Nur Kristallwasser entweicht", "Erste Sinterbrücken entstehen, Material verdichtet sich vollständig", "Organische Bestandteile verbrennen, Carbonate zersetzen sich (CO₂-Abgabe)"], a:3,
  e:"Glühbrand ~800–950°C: Organik verbrennt (C + O₂ → CO₂), Carbonate zersetzen sich (CaCO₃ → CaO + CO₂), Bindemittel abbrennen."},

{c:"Chemie", d:3, q:"DIe stabile Phase im System von Al₂O₃-SiO₂ bei hohen Temperaturen?",
  o:["Kaolinit", "Mullit (3Al₂O₃·2SiO₂) + Schmelze", "Reines Al₂O₃", "Cristobalit + Al₂O₃"], a:1,
  e:"Mullit = einzige stabile Zwischenphase im Al₂O₃-SiO₂-System."},

{c:"Chemie", d:2, q:"Was ist Reduktionsatmosphäre?",
  o:["O₂-reich", "O₂-arm, CO/H₂ vorhanden", "Neutrale N₂-Atmosphäre", "Feuchte Atmosphäre"], a:1,
  e:"Reduktionsatmosphäre: O₂-Mangel, CO vorhanden → reduziert Oxide."},

{c:"Chemie", d:2, q:"Was ist CaO (Branntkalk)?",
  o:["CaCO₃ vor Brand", "Reaktiver Kalk, bindet mit Wasser", "Dolomit-Erz", "Feldspatersatz"], a:1,
  e:"CaO = Branntkalk. CaO + H₂O → Ca(OH)₂ + Wärme. Bindemittel."},

{c:"Chemie", d:2, q:"Was ist Korrosion (keramisch)?",
  o:["Mechanischer Verschleiß", "Spannungsrisskorrosion", "Elektrochemischer Angriff", "Chemischer Angriff durch Schlacken/Schmelzen"], a:3,
  e:"Keramikkorrosion: Auflösung durch Schlacken. Basische Schlacken greifen saure Keramik an."},

{c:"Chemie", d:3, q:"Wie läuft die Koksherstellung ab?",
  o:["Oxidation von Kohle", "Reduktion Eisenerz", "Trockendestillation ohne O₂ → Koks + Gas", "Ammoniaksynthese"], a:2,
  e:"Koks: Pyrolyse von Steinkohle bei 900–1100°C ohne Luft."},

{c:"Chemie", d:2, q:"Was beschreibt ein Eutektikum in einem Mehrstoffsystem?",
  o:["Die Zusammensetzung mit dem höchsten Schmelzpunkt", "Ein reiner Stoff mit definiertem Schmelzpunkt", "Eine Legierung mit maximaler Festigkeit", "Die Zusammensetzung mit dem niedrigsten Schmelzpunkt im System"], a:3,
  e:"Eutektikum: tiefstschmelzende Zusammensetzung eines Phasensystems. Wichtig für Glasuren und Schlackenchemie."},

{c:"Chemie", d:2, q:"Was entsteht, wenn CO₂ in Wasser gelöst wird?",
  o:["HCl", "HNO₃", "H₂CO₃ (Kohlensäure)", "H₂SO₄"], a:2,
  e:"CO₂ + H₂O ⇌ H₂CO₃ (schwache Säure)."},

{c:"Chemie", d:2, q:"Was ist Oxidation von Eisen?",
  o:["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₂"], a:1,
  e:"Rost = hauptsächlich Fe₂O₃·nH₂O."},

{c:"Chemie", d:2, q:"Was ist Hydrolyse?",
  o:["Verbrennung mit O₂", "Spaltung durch Wasser", "Reduktion durch H₂", "Polymerisation"], a:1,
  e:"Hydrolyse: chemische Spaltung unter Einwirkung von Wasser. z.B. Tonmineralbildung aus Feldspat."},

{c:"Fertigungstechnik", d:1, q:"Was ist ein Schlickerguss?",
  o:["Plastisches Formen", "Schlicker in Gipsformen", "Pressen mit Stempeln", "Trocknenpressen bei hoher Temperatur"], a:1,
  e:"Schlickerguss: Gips saugt Wasser → Feststoffschicht (Scherben)."},

{c:"Fertigungstechnik", d:1, q:"Was ist das Prinzip des Strangpressens?",
  o:["Schlicker wird in Gipsformen gegossen und ausgehärtet", "Trockenes Pulver wird einachsig in Stahlmatrizen gepresst", "Plastische Masse wird durch ein profiliertes Mundstück gedrückt → kontinuierlicher Strang", "Granulat wird isostatisch verdichtet"], a:2,
  e:"Strangpressen: Presse drückt plastische Masse durch Mundstück. Für Rohre, Hohlblockziegel, Profile."},

{c:"Fertigungstechnik", d:1, q:"Was unterscheidet das isostatische Pressen vom uniaxialen Pressen?",
  o:["Höherer Pressdruck ist möglich", "Nur für Trockenpulver geeignet", "Schnelleres Verfahren mit weniger Werkzeugverschleiß", "Allseitiger gleichmäßiger Druck durch Fluid → homogenere Verdichtung"], a:3,
  e:"Isostatisch: Druck kommt aus allen Richtungen gleichmäßig → keine Reibungsgradienten, gleichmäßige Rohdichte."},

{c:"Fertigungstechnik", d:1, q:"Was ist ein Grünling?",
  o:["Grün eingefärbtes Produkt", "Ungebranntes geformtes Keramikteil", "Teil nach Glühbrand", "Teil mit grüner Glasur"], a:1,
  e:"Grünkörper = geformter, noch ungebrannter Formling."},

{c:"Fertigungstechnik", d:2, q:"Warum werden beim Schlickerguss Gipsformen verwendet?",
  o:["Gips ist kostengünstiger als Stahlformen", "Gips ist feuerbeständig bis 1400°C", "Gips saugt Wasser kapillar auf → Feststoff schlägt sich als Scherben nieder", "Gips ermöglicht schnelleres Entformen als Metall"], a:2,
  e:"Gips (CaSO₄·½H₂O) ist porös und saugt Wasser aus dem Schlicker → Feststoffschicht (Scherben) bildet sich an der Formwand."},

{c:"Fertigungstechnik", d:1, q:"Was ist ein Schlicker?",
  o:["Plastische Tonmasse", "Flüssige Suspension gießfähig", "Trockenpulver", "Mörtel"], a:1,
  e:"Schlicker: wässrige Suspension, TS 50–80%, fließfähig."},

{c:"Fertigungstechnik", d:2, q:"Was kennzeichnet das Trockenpressen in der Keramikfertigung?",
  o:["Schlicker mit hohem Wassergehalt wird in Formen gegossen", "Pulver mit ≤5% Restfeuchte wird in Stahl- oder Hartmetallmatrizen einachsig gepresst", "Plastische Masse wird durch ein Mundstück extrudiert", "Granulat wird von allen Seiten gleichmäßig verdichtet"], a:1,
  e:"Trockenpressen: Pulver mit max. 5% Feuchte. Hohe Stückzahlen, maßgenaue Teile. Für Fliesen, Sanitärteile."},

{c:"Fertigungstechnik", d:1, q:"Wie unterscheidet sich ein Tunnelofen von einem Kammerofen?",
  o:["Tunnelofen = periodisch; Ware steht still, Temperatur wird hochgefahren", "Kein wesentlicher Unterschied – beide sind diskontinuierlich", "Tunnelofen = kontinuierlich; Ware fährt durch stationäre Temperaturzonen", "Tunnelofen wird nur für Sonderbrände eingesetzt"], a:2,
  e:"Tunnelofen: kontinuierlich. Ware auf Wagen durch ortsfeste Zonen (Vorwärmen → Brand → Kühlung). Kammerofen: diskontinuierlich."},

{c:"Fertigungstechnik", d:2, q:"Was kennzeichnet einen Kammerofen?",
  o:["Kontinuierlicher Betrieb mit fahrendem Besatz", "Periodischer Betrieb: Ware bleibt stehen, Brennkurve wird gefahren", "Nur für Silikaziegel geeignet", "Beheizt ausschließlich mit Strom"], a:1,
  e:"Kammerofen: diskontinuierlich. Ware wird eingestapelt, Ofentür geschlossen, individuelle Brennkurve gefahren, dann Abkühlung."},

{c:"Fertigungstechnik", d:2, q:"Was sind Brennhilfsmittel und wozu dienen sie?",
  o:["Zusätze zum Brennstoff für bessere Verbrennung", "Flüssige Hilfsmittel zur Schlickeraufbereitung", "Feuerfeste Aufbauten (Kapseln, Platten, Dornen) zur Unterstützung der Ware im Ofen", "Chemische Additive zur Sintertemperaturabsenkung"], a:2,
  e:"Brennhilfsmittel: feuerfeste Setzmaterialien (SiC- oder Mullit-Platten, Kapseln). Stützen und trennen die Ware im Ofen."},

{c:"Fertigungstechnik", d:1, q:"Welcher Prozess findet bei der Trocknung keramischer Formlinge statt?",
  o:["Brennen der Rohmasse unter Luftabschluss", "Einbrennen der Glasurschicht auf dem Grünkörper", "Entfernen von freiem und kapillargebundenem Anmachwasser (20–120°C)", "Thermische Verdichtung durch Sinterung"], a:2,
  e:"Trocknung: Anmachwasser entweicht. Dabei tritt Schwindung auf → bei zu schneller Trocknung Rissrisiko."},

{c:"Fertigungstechnik", d:2, q:"Was ist der Zweck des Biscuitbrandes?",
  o:["Glasur wird eingebrannt und verdichtet", "Erster Brand ohne Glasur (~900–1100°C) → poröser, handlungsfähiger Körper", "Reduktionsbrand für besondere Farbeffekte", "Abschlussbrand mit Höchsttemperatur"], a:1,
  e:"Biscuitbrand: 1. Brand ohne Glasur. Gibt dem Formling genug Festigkeit für den Glasurauftrag, bleibt aber porös."},

{c:"Fertigungstechnik", d:2, q:"Was ist ein Glattbrand?",
  o:["= Biscuitbrand", "2. Brand mit Glasur → dichte Oberfläche", "Sehr niedriger T-Brand", "Sinterung ohne Glasur"], a:1,
  e:"Glattbrand = Glasurbrand. Glasur schmilzt, dichtet Oberfläche."},

{c:"Fertigungstechnik", d:2, q:"Was erzeugt ein Sprühtrockner in der Keramikfertigung?",
  o:["Dichte Folien für elektronische Bauteile", "Feine Schlickertropfen werden im Heißluftstrom zu rieselfähigem Granulat getrocknet", "Gebrannte Granulate für Schleifmittel", "Glasur-Suspensionen mit gleichmäßiger Korngröße"], a:1,
  e:"Sprühtrocknung: Schlicker wird zerstäubt, Wassertropfen verdampfen im Heißluftstrom → kugeliges, rieselfähiges Granulat für Trockenpressung."},

{c:"Fertigungstechnik", d:2, q:"Was ist der Einmalbrand?",
  o:["Roh-Glasurbrand in einem Schritt", "Hochtemperaturbrand", "Brand ohne Glasur", "Reduktionsbrand"], a:0,
  e:"Einmalbrand: Formling + Glasur in einem Ofendurchgang. Zeitsparend."},

{c:"Fertigungstechnik", d:2, q:"Aus welchen drei Grundrohstoffen besteht klassische Hartporzellanmasse?",
  o:["Quarz + Schamotte + Feldspat (~40:40:20)", "Kaolin + Quarz + Feldspat (~50:25:25)", "Kaolin + Korund + Bentonit (~60:30:10)", "Ton + Calcit + Feldspat (~50:30:20)"], a:1,
  e:"Hartporzellan: Kaolin (Plastizität) + Quarz (Magerung) + Feldspat (Flussmittel), ca. 50:25:25. Brand ~1380°C."},

{c:"Fertigungstechnik", d:2, q:"Was ist Steingut?",
  o:["Dichter Scherben wie Porzellan", "Poröser Körper (WA>10%), glasiert", "Unglasiertes Steinzeug", "Feinsteinzeug"], a:1,
  e:"Steingut: gebrannt ~1100°C, WA > 10%, stets glasiert."},

{c:"Fertigungstechnik", d:2, q:"Was kennzeichnet Steinzeug als keramisches Erzeugnis?",
  o:["Weiß, transluzent, WA < 0,1%, gebrannt bei >1380°C", "Porös, WA > 10%, immer glasiert, Brand ~1100°C", "Dicht gesintert, WA < 0,5%, opaker Scherben, frost- und chemikalienbeständig", "Unglasiert, rot oder braun, WA 3–8%"], a:2,
  e:"Steinzeug: dicht gesintert (WA <0,5%), homogener Scherben, nicht transluzent. Frost- und chemisch beständig. Bodenfliesen, Kanalrohre."},

{c:"Fertigungstechnik", d:1, q:"Was ist eine Engobe?",
  o:["Transparente Glasur", "Tonhaltige Schicht", "Schamotte-Rohstoffmischung", "Entformungsmittel"], a:1,
  e:"Engobe: Tonschlicker-Überzug. Deckend, matte Oberfläche."},

{c:"Fertigungstechnik", d:1, q:"Was legt die Brennkurve in der Keramikfertigung fest?",
  o:["Den Gasdurchfluss während des Brennvorgangs", "Die einzustellende Wärmeleitfähigkeit des Brennguts", "Den Temperatur-Zeit-Verlauf mit Aufheiz-, Halte- und Abkühlphasen", "Die Menge an Brennhilfsmitteln pro Charge"], a:2,
  e:"Brennkurve: geplanter Temperatur-Zeit-Verlauf. Kritische Haltepunkte: Wasserabgabe (~120°C), Quarzsprung (573°C), Sinterzone."},

{c:"Fertigungstechnik", d:2, q:"Was ist der Besatz im Ofen?",
  o:["Gesamte Ware im Brand", "Ofenwandmaterial", "Brennstoff", "Brennhilfsmittel"], a:0,
  e:"Besatz = Brenngut: alle Teile im Brennvorgang."},

{c:"Fertigungstechnik", d:2, q:"Welcher technische Vorteil zeichnet das isostatische Pressen gegenüber dem uniaxialen Pressen aus?",
  o:["Geringere Investitionskosten", "Höhere Taktrate bei der Serienfertigung", "Gleichmäßigere Rohdichteverteilung durch allseitigen Druckausgleich", "Bessere Oberflächenqualität ohne Nachbearbeitung"], a:2,
  e:"Isostatisch: Druck von allen Seiten gleichmäßig → keine Reibungsgradienten wie beim uniaxialen Pressen → homogenere Verdichtung."},

{c:"Fertigungstechnik", d:2, q:"Was ist Foliengießen (Tape Casting)?",
  o:["Schlicker wird auf Trommel gekippt", "Schlicker mit Rakel auf dünne Folien gezogen", "Hochdruckguss für Folien", "Folien werden extrudiert"], a:1,
  e:"Tape Casting: Rakelbehälter auf Trägerfolie → dünne Folien für MLCC."},

{c:"Fertigungstechnik", d:2, q:"Was ist ein Zentrifugalguss?",
  o:["Guss bei Schwerelosigkeit", "Hochdruckguss", "Schlicker in rotierende Form → dichte Wandung", "Schlickersprühen"], a:2,
  e:"Zentrifugalguss: Rotation → dichte, gleichmäßige Wandung. Für Rohre."},

{c:"Fertigungstechnik", d:3, q:"Für welche Produkte nutzt man das Strangpressen?",
  o:["Nur Fliesen", "Rohre, Profile, Hohlblockziegel", "Kugeln und Linsen", "Dünne elektronische Folien"], a:1,
  e:"Strangpressen: Massenproduktion von Rohren, Hohlblockziegeln, Profilen."},

{c:"Betriebstechnik", d:1, q:"Welche Hauptaufgabe hat ein mechanisches Getriebe?",
  o:["Umwandlung von Gleichstrom in Wechselstrom", "Messung und Regelung von Drehzahlen", "Übertragung und Wandlung von Drehzahl und Drehmoment zwischen Wellen", "Hydraulische Kraftübertragung zwischen zwei Pumpen"], a:2,
  e:"Getriebe: übersetzt Drehzahl und Drehmoment. i = n₁/n₂. Untersetzung: n₂ < n₁ → M₂ > M₁."},

{c:"Betriebstechnik", d:1, q:"Was ist Übersetzungsverhältnis i?",
  o:["i = n₂/n₁", "i = P₁/P₂", "i = M₁·n₁", "i = n₁/n₂"], a:3,
  e:"i = n₁/n₂. i>1: Untersetzung (langsamer, mehr Drehmoment)."},

{c:"Betriebstechnik", d:1, q:"Wie funktioniert ein Riemengetriebe?",
  o:["Kraftübertragung über Zahnräder mit fester Übersetzung", "Kraftübertragung über einen Riemen auf Scheiben unterschiedlicher Durchmesser", "Hydraulische Kopplung zweier Pumpen", "Magnetische Kopplung ohne mechanischen Kontakt"], a:1,
  e:"Riemengetriebe: Riemen (Flach-, Keil- oder Zahnriemen) läuft über Scheiben. n₂/n₁ = d₁/d₂. Schlupf möglich (außer Zahnriemen)."},

{c:"Betriebstechnik", d:2, q:"Was bedeutet die Abkürzung SPS?",
  o:["Speicherprogrammierbare Steuerung", "Sicherheits-Prüf-System", "Spannungs-Prüf-Schalter", "Standard-Prozess-Software"], a:0,
  e:"SPS = Speicherprogrammierbare Steuerung. Industrierechner."},

{c:"Betriebstechnik", d:1, q:"Was ermöglicht ein Frequenzumrichter bei Elektromotoren?",
  o:["Umwandlung von Drehstrom in Gleichstrom für Batterieladung", "Erhöhung der Motorspannung für mehr Drehmoment", "Stufenlose Drehzahlregelung durch Änderung der Ausgangsfrequenz", "Schutz vor Überspannung und Kurzschluss"], a:2,
  e:"Frequenzumrichter (FU): wandelt Netzfrequenz in variable Frequenz → stufenlose Motordrehzahl. Große Energieeinsparung möglich."},

{c:"Betriebstechnik", d:2, q:"Was beschreibt die Schutzart IP 54 bei elektrischen Betriebsmitteln?",
  o:["54 Volt Betriebsspannung, für Niederspannungsanlagen", "Schutzklasse 54: nur für Außenbereich zugelassen", "Staubgeschützt (erste Ziffer 5) und spritzwassergeschützt (zweite Ziffer 4)", "Isolationsklasse F (54 = thermische Grenztemperatur)"], a:2,
  e:"IP-Code (DIN EN 60529): 1. Ziffer = Fremdkörperschutz (5 = staubgeschützt), 2. Ziffer = Wasserschutz (4 = allseitiges Spritzwasser)."},

{c:"Betriebstechnik", d:2, q:"Was ist Pneumatik?",
  o:["Hydraulik mit Öl", "Elektrisches Steuersystem", "Steuerung/Antrieb mit Druckluft", "Mechanisches Hebelgetriebe"], a:2,
  e:"Pneumatik: Druckluft (6–10 bar). Sauber, schnell."},

{c:"Betriebstechnik", d:2, q:"Was ist Hydraulik?",
  o:["System mit Druckluft", "Kraftübertragung durch Drucköl", "Elektrisches Servoantrieb", "Mechanische Kraftübertragung"], a:1,
  e:"Hydraulik: Öl unter hohem Druck (bis 350 bar). Hohe Kräfte."},

{c:"Betriebstechnik", d:1, q:"Was ist ein Asynchronmotor?",
  o:["Gleichstrommotor", "Permanentmagnetmotor", "Drehstrommotor mit Schlupf", "Schrittmotor"], a:2,
  e:"Asynchronmotor: Schlupf s = (n_0−n)/n_0. Robust, wartungsarm."},

{c:"Betriebstechnik", d:2, q:"Was ist die Viskosität eines Stoffes?",
  o:["Dichte einer Flüssigkeit", "Innere Reibung / Widerstand gegen Fließen", "Oberflächenspannung", "Benetzbarkeit"], a:1,
  e:"Viskosität η [Pa·s]: Widerstand gegen Scherung."},

{c:"Betriebstechnik", d:1, q:"Was unterscheidet einen Regelkreis von einer Steuerung?",
  o:["Im Regelkreis gibt es keinen Sollwert", "Die Steuerung ist schneller und präziser", "Der Regelkreis hat eine geschlossene Rückkopplung: Istwert wird gemessen und Abweichung korrigiert", "Der Regelkreis arbeitet nur digital"], a:2,
  e:"Regelkreis: geschlossene Kette. Istwert messen → mit Sollwert vergleichen → Stellgröße anpassen. Steuerkette ist offen (keine Rückmeldung)."},

{c:"Betriebstechnik", d:2, q:"Was ist ein PID-Regler?",
  o:["Gerät ohne Rückführung", "Sicherheitsventil", "Pneumatischer Druckregler", "Proportional + Integral + Differentialanteil"], a:3,
  e:"PID: P=Reaktion, I=statischer Abgleich, D=Dämpfung."},

{c:"Betriebstechnik", d:2, q:"Was beschreibt der Kennwert MTBF in der Instandhaltung?",
  o:["Die maximale Betriebstemperatur einer Maschine", "Mean Time Between Failures – mittlere Betriebszeit zwischen zwei Ausfällen", "Die Mindestlaufzeit bis zur ersten Wartung", "Den Materialverbrauch pro Betriebsstunde"], a:1,
  e:"MTBF: mittlere Betriebsdauer zwischen Ausfällen [h]. Je höher, desto zuverlässiger. Grundlage für Wartungsplanung."},

{c:"Betriebstechnik", d:2, q:"Was ist Verfügbarkeit einer Anlage?",
  o:["Gesamtlaufzeit", "Betriebszeit / Gesamtzeit", "Produktionsleistung", "Stillstandsquote"], a:1,
  e:"Verfügbarkeit = Betriebszeit/(Betriebszeit+Ausfallzeit). Ziel: >95%."},

{c:"Betriebstechnik", d:2, q:"Was ist die Funktion eines Wärmetauschers?",
  o:["Umwandlung von Wärme in elektrische Energie", "Erhitzen von Prozessgas durch direkten Kontakt mit Flammen", "Übertragung von Wärme zwischen zwei Medien ohne deren Vermischung", "Speicherung von Wärmeenergie in einem Druckbehälter"], a:2,
  e:"Wärmetauscher: überträgt Wärme zwischen zwei Medien (z.B. Abgas → Verbrennungsluft) ohne Vermischung. Rekuperator, Kühler."},

{c:"Betriebstechnik", d:2, q:"Wann öffnet ein Sicherheitsventil?",
  o:["Es öffnet manuell zur regelmäßigen Druckentlastung", "Es öffnet bei Druckunterschreitung zum Ausgleich", "Es öffnet automatisch bei Drucküberschreitung zum Schutz von Behälter und Anlage", "Es öffnet nur im Notfall durch elektrisches Signal"], a:2,
  e:"Sicherheitsventil: öffnet selbsttätig bei Drucküberschreitung → verhindert Bersten. Vorgeschrieben nach Druckgeräterichtlinie."},

{c:"MSR", d:1, q:"Was bedeutet die Abkürzung MSR?",
  o:["Maschinen-Steuer-Regelung", "Messen – Steuern – Regeln", "Maschinensicherheitsrichtlinie", "Motor-Sensor-Relais"], a:1,
  e:"MSR = Messen, Steuern, Regeln."},

{c:"MSR", d:1, q:"Was ist ein Sensor?",
  o:["Stellglied", "Erfassung physikalischer Größen → elektrisches Signal", "Verstärker", "Anzeigeeinheit"], a:1,
  e:"Sensor: misst Temperatur, Druck etc. → elektrisches Signal."},

{c:"MSR", d:1, q:"Was ist ein Thermoelement?",
  o:["Bimetallstreifen", "Temperatursensor aus zwei Metallen (Seebeck-Effekt)", "PT100 Sensor ", "IR-Sensor"], a:1,
  e:"Thermoelement: Seebeck-Effekt → temperaturabhängige Spannung. Typ K, J, S."},

{c:"MSR", d:2, q:"Was ist ein PT100 Sensor?",
  o:["Platinwiderstand R=100Ω bei 0°C – Temperatursensor", "Thermoelementtyp aus 100 Drähten", "100 bar Drucksensor", "Durchflussmesser für 100l"], a:0,
  e:"PT100: R=100Ω bei 0°C, steigt ~0,385 Ω/K. Präzise."},

{c:"MSR", d:2, q:"Was bedeutet das 4–20 mA Normsignal?",
  o:["Digitales Bussignal (0 = 4 mA, 1 = 20 mA)", "Analoges Stromsignal: 4 mA = 0%, 20 mA = 100% des Messbereichs", "Spannungssignal zwischen 4 und 20 Volt", "Pulsbreitenmoduliertes Signal mit 4–20 ms Pulsbreite"], a:1,
  e:"4–20 mA: universelles Analogsignal. 4 mA = Messbereichsanfang (Drahtbrucherkennung bei <4 mA), 20 mA = Vollausschlag."},

{c:"MSR", d:1, q:"Was kennzeichnet eine Steuerung (offene Kette)?",
  o:["Istwert wird gemessen und mit Sollwert verglichen", "Eingangsgröße wirkt auf Prozess ohne Rückkopplung des Ausgangs", "Der Regler korrigiert automatisch bei Störungen", "Soll- und Istwert sind immer gleich"], a:1,
  e:"Steuerung: keine Rückkopplung. Störungen werden nicht erkannt oder korrigiert."},

{c:"MSR", d:1, q:"Was kennzeichnet eine Regelung (geschlossene Kette)?",
  o:["Eingang wirkt ohne Messung des Ausgangs auf den Prozess", "Fester Steuerwert ohne Anpassung", "Istwert wird gemessen, mit Sollwert verglichen, Abweichung wird ausgeregelt", "Nur für Temperaturprozesse anwendbar"], a:2,
  e:"Regelung: Rückkopplung. Störgrößen werden durch Istwert-Sollwert-Vergleich automatisch ausgeregelt."},

{c:"MSR", d:2, q:"Was ist der Sollwert (SP)?",
  o:["Gemessener Istwert", "Maximaler Betriebswert", "Gewünschter Wert der Regelgröße", "Historischer Mittelwert"], a:2,
  e:"Sollwert SP = Zielgröße der Regelung."},

{c:"MSR", d:2, q:"Was ist die Regelabweichung (e) ?",
  o:["Sollwert · Istwert", "Sollwert − Istwert", "Istwert / Sollwert", "Stellgröße"], a:1,
  e:"e = w − x (Sollwert − Istwert)."},

{c:"MSR", d:2, q:"Wofür steht SCADA in der Automatisierungstechnik?",
  o:["Safety Control And Data Analysis – Sicherheitsüberwachung", "Standard Control Architecture for Digital Applications", "Supervisory Control And Data Acquisition – Prozessleitsystem", "Sequential Circuit Automation and Drive Architecture"], a:2,
  e:"SCADA: übergeordnetes Prozessleitsystem zur Visualisierung, Überwachung und Datenspeicherung."},

{c:"MSR", d:2, q:"Was bewirkt die Hysterese bei einem Zweipunktregler?",
  o:["Erhöht die Regelgeschwindigkeit", "Vermeidet zu häufiges Schalten durch Ein/Aus bei unterschiedlichen Schwellwerten", "Erhöht die Regelgenauigkeit auf ±0,01°C", "Kompensiert Totzeiten im Regelkreis"], a:1,
  e:"Hysterese: Schalten bei unterschiedlichen Werten (z.B. ein bei 98°C, aus bei 102°C). Verhindert dauerndes Schalten."},

{c:"MSR", d:3, q:"Was versteht man unter Totzeit in einem Regelkreis?",
  o:["Die Zeit, bis der Regler eingeschaltet wird", "Die Zeitspanne zwischen einem Stelleingriff und der ersten messbaren Reaktion im Prozess", "Die Zeitkonstante des PID-I-Anteils", "Die Abklingzeit nach einer Störung"], a:1,
  e:"Totzeit T_t: Verzögerung zwischen Stelleingriff und Wirkung. Große Totzeit erschwert die Regelung erheblich."},

{c:"MSR", d:2, q:"Was ist typisch für einen NTC-Thermistor?",
  o:["Widerstand steigt linear mit der Temperatur", "Widerstand bleibt konstant (temperaturunabhängig)", "Widerstand sinkt mit steigender Temperatur (Negativer Temperaturkoeffizient)", "Erzeugt Spannung ohne externe Stromversorgung"], a:2,
  e:"NTC (Negative Temperature Coefficient): Widerstand sinkt mit T. Günstig, aber weniger präzise als PT100."},

{c:"MSR", d:2, q:"Was misst eine O₂-Sonde (Lambdasonde)?",
  o:["CO-Gehalt", "O₂-Restgehalt → Luftfaktor λ", "NOx-Gehalt", "Abgastemperatur"], a:1,
  e:"Lambdasonde: O₂ im Abgas → Luftfaktor λ. Wichtig für Verbrennungsregelung."},

{c:"MSR", d:2, q:"Nach welchem Prinzip arbeitet ein magnetisch-induktiver Durchflussmesser (MID)?",
  o:["Ultraschall-Laufzeitdifferenz im strömenden Medium", "Druckdifferenz vor und nach einer Blende", "Wärmeabgabe eines beheizten Drahtes an das Medium", "Induzierte Spannung nach Faraday proportional zur Fließgeschwindigkeit"], a:3,
  e:"MID: leitfähige Flüssigkeit im Magnetfeld → Spannung ∝ Fließgeschwindigkeit (Faradaysches Induktionsgesetz)."},

{c:"Umwelttechnik", d:1, q:"Was ist das CO₂-Äquivalent (CO₂e)?",
  o:["Der gemessene CO₂-Gehalt der Abgase in mg/m³", "Die auf die Treibhauswirkung von CO₂ umgerechnete Gesamtmenge aller Treibhausgase", "Der CO₂-Anteil im Verbrennungsluftgemisch", "Die gesetzliche CO₂-Emissionsgrenze nach TA Luft"], a:1,
  e:"CO₂e: CH₄ = 25× CO₂-Wirkung, N₂O = 298× CO₂-Wirkung. Basis für Klimabilanz und Emissionshandel."},

{c:"Umwelttechnik", d:1, q:"NOx – warum ist das problematisch?",
  o:["Inerte Gase", "NO und NO₂ → Smog, saurer Regen, gesundheitsschädlich", "Sauerstoffgas", "Kohlendioxid"], a:1,
  e:"NOx: saurer Regen, Ozonbildung, gesundheitsschädlich."},

{c:"Umwelttechnik", d:1, q:"Woher stammt SO₂ bei der Keramikproduktion?",
  o:["Aus sauberem Gas", "Verbrennung schwefelhaltiger Brennstoffe", "Luftbestandteil", "CO₂-Variante"], a:1,
  e:"SO₂ aus S-haltigem Brennstoff → H₂SO₄ → saurer Regen."},

{c:"Umwelttechnik", d:1, q:"Was ist Feinstaub mit PM2.5?",
  o:["Partikel <2,5 µm – tief in Lunge eindringend", "Gröberes Gestein", "Asbeststäube", "Laborchemikalien"], a:0,
  e:"PM2,5: Partikel <2,5 µm. Gesundheitsschädlich."},

{c:"Umwelttechnik", d:2, q:"Wofür ist ein Gewebefilter?",
  o:["Filter für Flüssigkeiten", "Abgasfilter mit Gewebeschläuchen für Staub", "Nasskühler", "Elektrofilter"], a:1,
  e:"Gewebefilter: Staubabscheidung >99%."},

{c:"Umwelttechnik", d:2, q:"Was ist ein Elektrofilter (ESP)?",
  o:["Filtert leitfähige Gase", "Ionisiert Staub elektrisch → zieht zu Elektroden", "Wäscht mit Wasser", "Verbrennt Partikel"], a:1,
  e:"Elektroabscheider: Korona ionisiert Partikel → sehr effizient."},

{c:"Umwelttechnik", d:2, q:"Was ist Entstickung (DeNOx)?",
  o:["Stickstoff aus Abgas", "NOx-Reduktion mit NH₃ (SCR) oder thermisch (SNCR)", "Staubfilterung", "SO₂-Wäsche"], a:1,
  e:"SCR: NH₃ + NOx → N₂ + H₂O. >95% Abscheidegrad."},

{c:"Umwelttechnik", d:2, q:"Was ist Entschwefelung (REA)?",
  o:["NOx-Entfernung", "SO₂ + CaO → CaSO₄ (Gips). Nass- oder Trockenverfahren", "Staubabscheidung", "CO₂-Abscheidung"], a:1,
  e:"REA: SO₂ + CaCO₃ → CaSO₄. Gips als Nebenprodukt."},

{c:"Umwelttechnik", d:1, q:"Was ist die TA Luft?",
  o:["Luftfahrtvorschrift", "Klimanorm", "EU-Richtlinie", "Emissionsgrenzwerte für Stäube, NOx, SO₂ "], a:3,
  e:"TA Luft: Verwaltungsvorschrift mit Emissionsgrenzwerten."},

{c:"Umwelttechnik", d:2, q:"Was ist Energieeffizienz?",
  o:["Einsatz erneuerbarer Energien", "Nutzenergie/zugeführte Energie", "Energieverbrauch/Produkt", "CO₂/Einheit"], a:1,
  e:"Effizienz = Nutzenergie/Eingangsenergie. Hoch = weniger Verlust."},

{c:"Umwelttechnik", d:1, q:"Was ist thermische Nachverbrennung (TNV)?",
  o:["Hauptbrenner", "Organische Schadstoffe bei ~800°C verbrennen", "NOx-Abscheider", "Wärmetauscher"], a:1,
  e:"TNV: VOC → CO₂ + H₂O bei 800–1000°C."},

{c:"Umwelttechnik", d:2, q:"CO – warum ist es gefährlich?",
  o:["es ist harmlos", "Giftig: blockiert O₂-Transport im Blut", "ungiftig da Luftbestandteil", "ein Inertgas"], a:1,
  e:"CO: farblos, geruchlos, giftig. MAK: 35 ppm. Entsteht bei unvollständiger Verbrennung."},

{c:"Umwelttechnik", d:1, q:"Was ist Kreislaufwirtschaft?",
  o:["Wegwerfgesellschaft", "Abfälle als Ressource, Kreisläufe schließen", "Nur Metallrecycling", "Energierückgewinnung aus Abfall"], a:1,
  e:"Kreislaufwirtschaft: Reduce–Reuse–Recycle."},

{c:"Umwelttechnik", d:2, q:"Emissionen vs. Immissionen?",
  o:["Gleich", "Emissionen=abgegeben (Quelle), Immissionen=empfangen", "Umgekehrt", "Emission=Licht, Immission=Schall"], a:1,
  e:"Emission: von Quelle abgegeben. Immission: beim Empfänger ankommen."},

{c:"Umwelttechnik", d:2, q:"Was umfasst der CO₂-Fußabdruck (Carbon Footprint) eines Produkts?",
  o:["Nur die direkten CO₂-Emissionen aus der eigenen Produktion", "Den physischen Platzbedarf der Anlage in m²", "Die Gesamtheit aller Treibhausgasemissionen über den Lebensweg in CO₂-Äquivalenten", "Den Energieverbrauch in kWh ohne Umrechnung in CO₂"], a:2,
  e:"Carbon Footprint: alle direkten und indirekten THG-Emissionen (Rohstoff, Produktion, Transport, Nutzung, Entsorgung) in CO₂e."},

{c:"Umwelttechnik", d:2, q:"Was ist der Grenzwert für CO in Abluft (TA Luft)?",
  o:["100 mg/m³", "50 mg/m³", "150 mg/m³", "500 mg/m³"], a:0,
  e:"TA Luft Grenzwert CO: 100 mg/m³ als Massenstromgrenzwert für viele Anlagen."},

{c:"Umwelttechnik", d:2, q:"Was ist Gesamtstaub-Grenzwert TA Luft (allgemein)?",
  o:["10 mg/m³", "50 mg/m³", "20 mg/m³", "100 mg/m³"], a:2,
  e:"TA Luft: Gesamtstaub i.d.R. 20 mg/m³ (je nach Anlage auch strenger)."},

{c:"Umwelttechnik", d:1, q:"Warum ist Ofenisolierung ökologisch wichtig?",
  o:["Nur Kostenfaktor", "Rein optisch", "Weniger Energieverbrauch → weniger CO₂-Emissionen", "Beeinflusst Qualität nicht"], a:2,
  e:"Bessere Isolierung: weniger Wärmeverlust → Energieersparnis → CO₂-Reduktion."},

{c:"Umwelttechnik", d:2, q:"Was ist Abwärmenutzung?",
  o:["Abwärme entsorgen", "Temperatur erhöhen", "Abgas filtern", "Abwärme aus Prozessen für Heizung oder Trocknung nutzen"], a:3,
  e:"Abwärmenutzung: z.B. Ofenabgase zum Vorwärmen der Ware oder für Trocknungsanlagen."},

{c:"Brenntechnik", d:1, q:"Was versteht man unter dem Begriff 'Luftfaktor λ' (Lambda)?",
  o:["Das Verhältnis von tatsächlich zugeführter Luftmenge zur theoretisch notwendigen Luftmenge", "Das Verhältnis von Brennstoffmenge zu Luftmenge im Brenner", "Die Temperatur der Verbrennungsluft am Brennereingang", "Den prozentualen Sauerstoffgehalt im Abgas"], a:0,
  e:"λ = zugeführte Luftmenge / theoretischer Luftbedarf. Bei λ=1 exakte stöchiometrische Verbrennung, λ>1 Luftüberschuss (oxidierend), λ<1 Luftmangel (reduzierend)."},

{c:"Brenntechnik", d:2, q:"Bei welchem Luftfaktor λ wird die höchste Flammentemperatur erreicht?",
  o:["λ = 0,8 (leichter Luftmangel)", "λ = 1,0 (stöchiometrisch)", "λ = 1,3 (Luftüberschuss)", "λ = 2,0 (starker Luftüberschuss)"], a:1,
  e:"Bei λ=1 (stöchiometrische Verbrennung) wird die gesamte Brennstoffenergie freigesetzt ohne Verluste durch Überschussluft – daher die höchste Flammentemperatur."},

{c:"Brenntechnik", d:2, q:"Was passiert im Keramikofen bei der Quarzinversion (573 °C)?",
  o:["Quarz schmilzt und bildet eine Glasphase", "α-Quarz wandelt sich reversibel in β-Quarz um – mit Volumenänderung von ca. 1–2 %", "Quarz zersetzt sich zu SiO und O₂", "Kaolin verliert sein Kristallwasser"], a:1,
  e:"Bei 573 °C erfolgt eine reversible Umwandlung α↔β-Quarz mit ~1–2 % Volumenänderung. Beim Aufheizen und Abkühlen muss diese Zone langsam durchfahren werden, um Risse zu vermeiden."},

{c:"Brenntechnik", d:2, q:"Was bedeutet 'reduzierendes Brennen' und wofür wird es eingesetzt?",
  o:["Brennen mit Luftüberschuss; wird für weiße Porzellane eingesetzt", "Brennen mit Luftmangel (λ<1); Fe²⁺ bleibt erhalten, erzeugt z.B. graue oder blau-grüne Farbtöne", "Brennen ohne jegliche Luftzufuhr im Vakuumofen", "Brennen mit reinem Sauerstoff für höhere Temperaturen"], a:1,
  e:"Beim reduzierenden Brand herrscht Luftmangel (λ<1). CO entzieht Oxiden Sauerstoff. Fe³⁺ wird zu Fe²⁺ reduziert – das erzeugt andere Farben als oxidierende Atmosphäre (z.B. Seladon-Glasuren, Reduktionsporzellan)."},

{c:"Brenntechnik", d:3, q:"Warum müssen Schamotteziegel beim ersten Aufheizen besonders langsam erhitzt werden?",
  o:["Damit das Bindemittel ausreichend Zeit zum Aushärten hat", "Wegen der Quarzinversion bei 573 °C und dem Austreiben von Restwasser und organischen Bestandteilen", "Weil der Ofen sonst zu viel Energie verbraucht", "Damit die Steine nicht durch Wärmeausdehnung auseinanderfallen"], a:1,
  e:"Beim Erstaufheizen muss Restfeuchtigkeit und Kristallwasser langsam ausgetrieben werden (bis ~300 °C), und die Quarzinversion bei 573 °C muss vorsichtig durchfahren werden, um Rissbildung zu vermeiden."},

{c:"Brenntechnik", d:2, q:"Was ist der Unterschied zwischen Sinterung und Schmelze beim Brennprozess?",
  o:["Es gibt keinen Unterschied – beide Begriffe beschreiben denselben Vorgang", "Bei der Sinterung verbinden sich Partikel durch Diffusion im festen Zustand; bei der Schmelze liegt eine flüssige Phase vor", "Sinterung findet bei höheren Temperaturen statt als die Schmelze", "Schmelze beschreibt nur den Vorgang in Glasöfen, Sinterung nur in Metallöfen"], a:1,
  e:"Sinterung: Partikel verbinden sich durch Festkörperdiffusion unterhalb des Schmelzpunktes → Dichte nimmt zu, Porosität nimmt ab. Schmelze: vollständige Verflüssigung. Keramik wird gesintert, nicht geschmolzen."},

{c:"Brenntechnik", d:1, q:"Welche drei Wärmeübertragungsarten wirken im Brennofen?",
  o:["Leitung, Konvektion, Strahlung", "Diffusion, Konvektion, Absorption", "Leitung, Verdampfung, Strahlung", "Konvektion, Kondensation, Reflexion"], a:0,
  e:"Im Ofen wirken alle drei: Wärmeleitung (direkt durch Kontakt), Konvektion (durch Gasströmung) und Wärmestrahlung (dominiert bei hohen Temperaturen >800 °C)."},

{c:"Brenntechnik", d:3, q:"Was versteht man unter 'Garschnitt' und warum ist er praxisrelevant?",
  o:["Eine Brennkurve, die auf die spezifische Produktzusammensetzung abgestimmt ist", "Der Zeitpunkt im Brennprozess, an dem alle gewünschten Reaktionen abgeschlossen sind und die Ware 'gar' ist", "Das Zerschneiden von Brennhilfsmitteln für bessere Staplung", "Die maximale Temperatur, die im Ofen je erreicht wurde"], a:1,
  e:"Der 'Garschnitt' bezeichnet den Brennzustand, bei dem alle Sinter- und Reaktionsvorgänge abgeschlossen sind. Er ist entscheidend für Maßhaltigkeit, Festigkeit und Dichte des Endprodukts."},

{c:"Aufbereitung", d:1, q:"Welcher Aufbereitungsschritt hat das Ziel, eine homogene Korngrößenverteilung herzustellen?",
  o:["Plastifizieren", "Klassieren (Sieben / Sichten)", "Mischen", "Entwässern"], a:1,
  e:"Klassieren (durch Sieben oder Windsichten) trennt das Material nach Korngröße und erzeugt definierte Fraktionen. Das ist Voraussetzung für reproduzierbare Verdichtungs- und Sintereigenschaften."},

{c:"Aufbereitung", d:2, q:"Was ist der Unterschied zwischen Nassaufbereitung und Trockenaufbereitung?",
  o:["Nassaufbereitung ist teurer, hat aber keine Qualitätsvorteile", "Bei der Nassaufbereitung wird Wasser als Prozessmedium eingesetzt – bessere Homogenisierung, feinere Mahlung, höherer Energieaufwand zur Entwässerung", "Trockenaufbereitung eignet sich nur für plastische Massen", "Nassaufbereitung ist nur für Glasuren geeignet, Trockenaufbereitung für Pressmassen"], a:1,
  e:"Nassaufbereitung (Schlickeraufbereitung): feinste Zerkleinerung, beste Homogenisierung möglich, aber anschließendes Entwässern (Filterpressen, Sprühtrockner) notwendig. Trockenaufbereitung: weniger Energieaufwand, aber gröbere Ergebnisse."},

{c:"Aufbereitung", d:2, q:"Welche Funktion hat eine Filterpresse in der keramischen Aufbereitung?",
  o:["Sie trennt magnetische Verunreinigungen aus dem Schlicker", "Sie entwässert den Schlicker durch Druckfiltration auf einen plastisch verarbeitbaren Wassergehalt", "Sie mahlt den Versatz auf die gewünschte Korngröße", "Sie mischt die Rohstoffe gleichmäßig vor der Formgebung"], a:1,
  e:"Die Filterpresse entwässert den wässrigen Schlicker durch Druck: Wasser wird durch Filtertücher abgepresst, es entsteht ein plastischer 'Filterkuchen' mit ca. 20–25 % Wassergehalt."},

{c:"Aufbereitung", d:2, q:"Was ist ein Sprühtrockner und welches Produkt entsteht dabei?",
  o:["Ein Gerät zum Trocknen bereits geformter Keramikteile bei hohen Temperaturen", "Eine Anlage, bei der Schlicker in einen Heißluftstrom zerstäubt wird – es entsteht ein rieselfähiges Granulat", "Ein Trockenofen mit Wasserbedampfung zur kontrollierten Trocknung", "Eine Presse, die Wasser aus dem Ton sprüht"], a:1,
  e:"Im Sprühtrockner wird Schlicker durch Düsen oder Scheiben zerstäubt. Die Tröpfchen trocknen im Heißluftstrom sofort → kugelförmiges, rieselfähiges Granulat für Trockenpressen entsteht."},

{c:"Aufbereitung", d:3, q:"Warum wird beim Mahlprozess auf die Mahlkörpergröße geachtet?",
  o:["Große Mahlkörper sind immer besser, weil sie mehr Energie übertragen", "Die Mahlkörpergröße bestimmt die erreichbare Endkorngröße: kleine Körper für Feinmahlung, große für Grob- und Mittelmahlung", "Mahlkörpergröße hat keinen Einfluss auf das Mahlergebnis", "Nur das Material der Mahlkörper ist relevant, nicht ihre Größe"], a:1,
  e:"Große Mahlkörper erzeugen hohe Druckkräfte → Grob- und Mittelmahlung. Kleine Mahlkörper wirken durch Scherkräfte und Reibung → Feinmahlung. Die Abstimmung auf die gewünschte Zielkorngröße ist entscheidend."},

{c:"Aufbereitung", d:2, q:"Was versteht man unter 'Homogenisierung' in der Aufbereitung und warum ist sie wichtig?",
  o:["Gleichmäßige Verteilung aller Komponenten im Versatz – vermeidet lokale Unterschiede in Zusammensetzung, Porosität und Schwindung", "Das Erhöhen der Wassergehalts auf ein einheitliches Niveau", "Das Zerkleinern aller Rohstoffe auf die gleiche Korngröße", "Das Entfernen von Verunreinigungen durch Sieben"], a:0,
  e:"Homogenisierung = gleichmäßige Verteilung aller Bestandteile. Ohne sie entstehen lokale Inhomogenitäten → unterschiedliche Schwindung → Verzug und Risse. Mischer, Kollergang und Knetmaschinen werden dafür eingesetzt."},

{c:"Glasurtechnologie", d:1, q:"Was ist eine Glasur und welche Hauptfunktionen hat sie?",
  o:["Eine Glasur ist eine dünne Tonschicht, die nur zur Farbgebung aufgetragen wird", "Eine Glasur ist eine Silikatglasschicht auf der Keramikoberfläche – Funktionen: Dichtigkeit, Hygiene, Dekoration, Schutz vor Abrieb", "Eine Glasur ist ein metallischer Überzug zum Korrosionsschutz", "Eine Glasur ist identisch mit dem Scherben und wird nicht separat aufgetragen"], a:1,
  e:"Glasuren sind dünne Silikatglasschichten. Funktionen: Abdichten des porösen Scherbens (Hygiene), dekorative Wirkung (Glanz, Farbe, Textur), Schutz vor mechanischem Angriff und Reinigbarkeit."},

{c:"Glasurtechnologie", d:2, q:"Was bedeutet Glasurspannung und welche zwei Arten gibt es?",
  o:["Die Viskosität der Glasur beim Auftragen; man unterscheidet dünnflüssig und dickflüssig", "Die mechanische Spannung zwischen Glasur und Scherben durch unterschiedliche WAK – man unterscheidet Druckspannung (Glasur dehnt sich weniger) und Zugspannung (Glasur dehnt sich mehr)", "Der Druck beim Glasieren; man unterscheidet Tauchen und Spritzen", "Die elektrische Ladung der Glasurpartikel; positiv oder negativ"], a:1,
  e:"Glasurspannung entsteht durch unterschiedliche Wärmeausdehnungskoeffizienten (WAK) von Glasur und Scherben. Druckspannung (WAK Glasur < WAK Scherben): günstig, erhöht Festigkeit. Zugspannung (WAK Glasur > WAK Scherben): führt zu Crazing (Haarrissen)."},

{c:"Glasurtechnologie", d:2, q:"Was ist 'Crazing' bei Glasuren und wodurch entsteht es?",
  o:["Ein dekorativer Craquelé-Effekt, der bewusst eingesetzt wird", "Haarrisse in der Glasur durch zu hohen WAK der Glasur im Vergleich zum Scherben (Zugspannung in der Glasur)", "Das Abplatzen der Glasur durch zu niedrigen Schmelzpunkt", "Ein Oxidationsfehler durch falsche Brennatmosphäre"], a:1,
  e:"Crazing (ungewollte Rissbildung): WAK Glasur > WAK Scherben → beim Abkühlen zieht die Glasur stärker zusammen → Zugspannung → Risse. Lösung: WAK der Glasur durch Rezepturanpassung (z.B. mehr SiO₂, weniger Na₂O) senken."},

{c:"Glasurtechnologie", d:2, q:"Welche Aufgabe hat die Seger-Formel in der Glasurtechnologie?",
  o:["Sie berechnet die Brenntemperatur eines Rohstoffs", "Sie ist eine normierte Darstellung der Glasurzusammensetzung nach Oxidklassen (RO, R₂O₃, RO₂) – erlaubt Vergleich und gezielte Anpassung", "Sie bestimmt die Dichte des Glasurschlickers", "Sie gibt die maximale Schichtdicke der Glasur an"], a:1,
  e:"Die Seger-Formel (empirische Oxidformel) ordnet Oxide in Gruppen: Basen (RO/R₂O), Neutrale (R₂O₃), Säuren (RO₂). Die Basen werden auf 1,0 normiert. So können Glasuren systematisch verglichen und Schmelzpunkt/Viskosität gezielt eingestellt werden."},

{c:"Glasurtechnologie", d:3, q:"Warum wird SiO₂ in Glasurrezepturen erhöht, um Crazing zu beheben?",
  o:["SiO₂ erhöht den WAK der Glasur", "SiO₂ senkt den WAK der Glasur und erhöht ihre Viskosität, sodass die Glasur beim Abkühlen weniger stark zieht", "SiO₂ verbessert die Haftung der Glasur auf dem Scherben unabhängig vom WAK", "SiO₂ erhöht die Glasurschichtdicke und überbrückt so die Risse"], a:1,
  e:"SiO₂ ist ein Netzwerkbildner: mehr SiO₂ → niedrigerer WAK der Glasur → beim Abkühlen geringere Kontraktion → Zugspannung wird abgebaut → kein Crazing. Außerdem steigt die Viskosität und Festigkeit der Glasur."},

{c:"Glasurtechnologie", d:2, q:"Was ist der Unterschied zwischen Rohglasur und Fritte?",
  o:["Rohglasuren sind transparent, Fritten immer opak", "Rohglasuren bestehen aus ungeschmolzenen Rohstoffen; Fritten sind vorgeschmolzene und gemahlene Glasuren – wasserunlösliche Inhaltsstoffe werden so fixiert", "Fritten werden nur für Sanitärkeramik verwendet, Rohglasuren für Geschirr", "Es gibt keinen praktischen Unterschied – beide werden gleich verarbeitet"], a:1,
  e:"Rohglasuren: Mischung aus Rohstoffen, die erst beim Brand aufschmelzen. Problem: lösliche Verbindungen (z.B. Borax) können in den Scherben migrieren. Fritte: Rohstoffe werden vorgeschmolzen, abgekühlt, gemahlen → alle Bestandteile sind fixiert, reproduzierbar, ungiftige Verarbeitung."},

{c:"Baukeramik", d:1, q:"Nach welcher Norm werden Mauerziegeln in Deutschland klassifiziert und welche Haupteigenschaft bestimmt die Klasse?",
  o:["DIN 105 – Haupteigenschaft: Rohdichte", "DIN 1045 – Haupteigenschaft: Druckfestigkeit", "EN 771 – Haupteigenschaft: Wasseraufnahme", "DIN 18000 – Haupteigenschaft: Brenntemperatur"], a:0,
  e:"Mauerziegel werden nach DIN 105 klassifiziert. Die Rohdichteklasse (z.B. 0,6 bis 2,2 g/cm³) bestimmt den Ziegeltyp – sie beeinflusst Wärmedämmung, Gewicht und Druckfestigkeit maßgeblich."},

{c:"Baukeramik", d:2, q:"Was ist der Unterschied zwischen Hochlochziegel und Vollziegel?",
  o:["Hochlochziegel werden bei höheren Temperaturen gebrannt", "Hochlochziegel haben senkrecht zur Lagerfläche angeordnete Lochungen – bessere Wärmedämmung, geringeres Gewicht; Vollziegel sind massiv", "Vollziegel werden immer glasiert, Hochlochziegel nicht", "Hochlochziegel sind nur für Innenwände zugelassen"], a:1,
  e:"Hochlochziegel (HLz): Lochungen senkrecht zur Lagerfuge → Luftkammern verringern Wärmeleitfähigkeit → bessere Dämmwerte. Vollziegel: massiv, höhere Druckfestigkeit, aber schlechtere Dämmung. Einsatz nach statischen und energetischen Anforderungen."},

{c:"Baukeramik", d:2, q:"Welche Rohstoffe werden hauptsächlich für die Ziegelherstellung eingesetzt?",
  o:["Kaolin und Feldspat – gleiche Rohstoffe wie bei Porzellan", "Ton und Lehm (mit Quarz und Kalk als Zuschläge) – plastische Massen mit hohem Eisenoxidgehalt", "Schamotte und Korund für Feuerfestziegel", "Nur Ton ohne jegliche Zusätze"], a:1,
  e:"Ziegel werden aus Ton/Lehm (plastisch, enthält Eisenoxide → typische rote Farbe) mit Zuschlägen wie Sand/Quarz (Magerung) und manchmal Kalk hergestellt. Porenanteile werden durch Sägemehl, Styropor oder Kohle als Porosierungsmittel erzeugt."},

{c:"Baukeramik", d:3, q:"Was ist 'Porosierung' beim Ziegelwerk und welchen bautechnischen Vorteil bringt sie?",
  o:["Absichtliches Erzeugen von Poren durch Zugabe von Ausbrennstoffen (z.B. Sägemehl, Polystyrol) → niedrigere Rohdichte, bessere Wärmedämmung", "Nachträgliches Aufbohren von Ziegeln auf der Baustelle", "Erhöhung des Wasseraufnahmevermögens durch spezielle Brennkurven", "Einpressen von Luft in die plastische Masse unter Druck"], a:0,
  e:"Porosierung: Dem Versatz werden Ausbrennstoffe (Sägemehl, Polystyrol, Kork) beigemischt. Diese verbrennen beim Brand vollständig → feine, geschlossene Poren entstehen. Ergebnis: Rohdichte sinkt auf 0,6–1,0 g/cm³, Wärmeleitfähigkeit λ sinkt deutlich."},

{c:"Baukeramik", d:2, q:"Welcher Fehler entsteht, wenn Kalkstücke nicht fein genug gemahlen im Ziegelversatz verbleiben?",
  o:["Die Ziegel werden zu dunkel durch Reduktion des Eisenoxids", "Kalksprengen: CaO reagiert nachträglich mit Luftfeuchtigkeit zu Ca(OH)₂, Volumenzunahme sprengt Schalenteile ab", "Die Druckfestigkeit steigt unkontrolliert an", "Die Ziegel schmelzen bei Brenntemperatur durch den niedrigen Schmelzpunkt des Kalks"], a:1,
  e:"Kalksprengen (Kalkkrebs): Grobe CaCO₃-Einschlüsse → beim Brand wird CaO gebildet. CaO ist sehr hygroskopisch: Ca(OH)₂ + Volumenzunahme von ~100 % → Sprengen von Ziegelstücken. Lösung: CaCO₃ fein mahlen (<0,1 mm) oder vollständig vermeiden."},

{c:"Rohstoffe", d:1, q:"Welches Tonmineral ist das wichtigste für die Porzellanherstellung und warum?",
  o:["Montmorillonit – wegen seiner hohen Quellkapazität", "Kaolinit – wegen hoher Reinheit, Feuerfestigkeit und heller Brennfarbe", "Illit – wegen seiner guten Plastizität", "Smektit – wegen des niedrigen Schmelzpunkts"], a:1,
  e:"Kaolinit (Kaolin, Al₂Si₂O₅(OH)₄) ist das wichtigste Rohmineral für Porzellan: hoher Aluminiumgehalt, wenig Flussmittel, brennt weiß, hohe Feuerfestigkeit (Sintertemperatur ~1.250–1.450 °C). Formel: Al₂O₃ · 2 SiO₂ · 2 H₂O."},

{c:"Rohstoffe", d:2, q:"Was ist der Unterschied zwischen primären und sekundären Tonen?",
  o:["Primäre Tone entstehen bei hohen Temperaturen, sekundäre bei niedrigen", "Primäre Tone (Restverwitterungstone) liegen am Entstehungsort und sind reiner; sekundäre Tone wurden durch Wasser transportiert, enthalten mehr Verunreinigungen, sind aber plastischer", "Sekundäre Tone sind immer feuerfester als primäre", "Es gibt keinen qualitativen Unterschied – nur den Fundort"], a:1,
  e:"Primäre Tone (z.B. Kaolin): am Verwitterungsort verblieben, grobe Körner, wenig Verunreinigungen, wenig plastisch. Sekundäre Tone: durch Wasser transportiert, feiner, mehr organische Substanzen und Eisenoxide (→ gefärbt nach Brand), plastischer."},

{c:"Rohstoffe", d:2, q:"Welche drei Rohstoffe bilden das klassische Porzellanversatz-Dreieck?",
  o:["Ton – Quarz – Schamotte", "Kaolin – Feldspat – Quarz", "Kaolin – Calcit – Korund", "Ton – Talkum – Aluminiumoxid"], a:1,
  e:"Das Porzellan-Dreistoffsystem: Kaolin (Plastizität + Al₂O₃-Träger), Feldspat (Flussmittel, bildet Glasphase), Quarz (Magerungsmittel, Gerüstbildner). Typisch: 50% Kaolin, 25% Feldspat, 25% Quarz."},

{c:"Rohstoffe", d:3, q:"Was ist die Funktion von Feldspat im keramischen Versatz?",
  o:["Feldspat erhöht die Plastizität der Masse", "Feldspat wirkt als Flussmittel: schmilzt bei ~1150 °C und bildet eine Glasphase, die andere Körner verbindet und die Dichte erhöht", "Feldspat ist ein Magerungsmittel, das die Schwindung reduziert", "Feldspat erhöht die Feuerfestigkeit des Versatzes"], a:1,
  e:"Feldspat (KAlSi₃O₈, NaAlSi₃O₈) ist das wichtigste Flussmittel in der Feinkeramik. Er schmilzt bei ~1.150–1.200 °C, bildet eine viskose Schmelzphase, die die noch festen Körner umschließt → dichtere Sinterung, niedrigere Brenntemperatur."},

{c:"Feinkeramik", d:1, q:"Wodurch unterscheidet sich Hartporzellan von Weichporzellan?",
  o:["Durch die Härte nach dem Ritzen mit einer Stahlnadel", "Hartporzellan: höhere Brenntemperatur (~1.400 °C), mehr Kaolin, transluzent; Weichporzellan: niedrigere Brenntemperatur (~1.200 °C), mehr Feldspat", "Hartporzellan enthält Korund als Härtezusatz", "Weichporzellan wird weich nach dem Brennen und erst durch Glasur verfestigt"], a:1,
  e:"Hartporzellan (Europäisches Porzellan): ~50% Kaolin, 25% Feldspat, 25% Quarz, Brand bei 1.380–1.460 °C. Weichporzellan (Französisch/Bone China): mehr Feldspat/Flussmittel → niedrigere Brenntemperatur, transluzenter, weicher (leichter zu bearbeiten)."},

{c:"Feinkeramik", d:2, q:"Was ist Schrühbrand und welchen Zweck hat er?",
  o:["Ein zweiter Brand nach der Glasur zur Fixierung der Dekoration", "Ein erster Brand bei niedriger Temperatur (~900–1.000 °C) zur Verfestigung des Rohlings vor der Glasur – macht ihn handhabbar, aber noch saugfähig", "Ein Brand zur Reinigung des Ofens von Ascherückständen", "Der Hauptbrand, bei dem die endgültige Sinterung stattfindet"], a:1,
  e:"Schrühbrand (Vorglutbrand): ~900–1.050 °C → organische Bestandteile verbrennen, Ton wird verfestigt (Scherben = Schrühware). Der Scherben ist noch porös und saugfähig → ideal zum Aufnehmen der Glasuraufschlämmung."},

{c:"Feinkeramik", d:2, q:"Was versteht man unter 'Schwindung' und in welchen Phasen tritt sie auf?",
  o:["Schwindung ist nur ein optischer Effekt durch die Glasur", "Schwindung ist die Volumenabnahme der Keramik – tritt in drei Phasen auf: Trockenschwindung (Wasseraustritt), Brennschwindung (Sinterung) und manchmal Abkühlschwindung", "Schwindung tritt ausschließlich beim Abkühlen auf", "Schwindung ist die Volumenzunahme durch Ausdehnung beim Erhitzen"], a:1,
  e:"Gesamtschwindung = Trockenschwindung (Wasserverdunstung → Partikel rücken zusammen, 5–15 % linear) + Brennschwindung (Sinterung, Glasphase füllt Poren, weitere 3–8 %). Wichtig: Gesamtschwindung ≠ Summe beider Einzelschwindungen (unterschiedliche Ausgangslängen!)."},

{c:"Feinkeramik", d:3, q:"Warum hat Knochenporzellan (Bone China) eine besonders hohe Transluzenz?",
  o:["Weil es nach dem Brand mit einem transparenten Lack überzogen wird", "Weil Calciumphosphat (aus Knochenasche) eine feine Kristallstruktur mit wenigen Poren erzeugt und den Brechungsindex der Glasphase optimal anpasst", "Weil es sehr dünn gefertigt wird – die Transluzenz ist nur eine Frage der Wandstärke", "Weil es aus reinem Quarz ohne Farboxide besteht"], a:1,
  e:"Bone China enthält ~50% Knochenasche (Ca₃(PO₄)₂). Das Calciumphosphat bildet beim Brand Anorthit-Kristalle eingebettet in Glasphase. Die geringe Porosität, der niedrige Brechungsindex-Unterschied und die feine Mikrostruktur erzeugen die charakteristische Transluzenz."},

{c:"Wärmelehre", d:1, q:"Was ist der Unterschied zwischen Wärmemenge Q und Temperatur T?",
  o:["Temperatur und Wärmemenge sind dasselbe, nur in verschiedenen Einheiten", "Temperatur ist ein Zustandsgröße (°C / K), Wärmemenge ist eine Energiegröße (kJ) – ein kleiner Körper kann heiß sein, aber wenig Wärme enthalten", "Wärmemenge ist immer größer als die Temperatur", "Temperatur misst die Wärme pro Volumen, Wärmemenge die Wärme pro Masse"], a:1,
  e:"Temperatur (T) beschreibt den Wärmezustand (Intensität). Wärmemenge (Q) ist die gespeicherte oder übertragene Energie: Q = m · c · ΔT. Ein Fingerhut kochendes Wasser hat hohe Temperatur, aber geringe Wärmemenge."},

{c:"Wärmelehre", d:2, q:"Ein Keramikteil mit 2 kg Masse wird von 20 °C auf 120 °C erhitzt. Die spezifische Wärmekapazität beträgt 0,9 kJ/(kg·K). Wie viel Wärme wird benötigt?",
  o:["90 kJ", "180 kJ", "216 kJ", "45 kJ"], a:1,
  e:"Q = m · c · ΔT = 2 kg · 0,9 kJ/(kg·K) · (120–20) K = 2 · 0,9 · 100 = 180 kJ."},

{c:"Wärmelehre", d:2, q:"Was ist Wärmeleitung (Konduktion) und wovon hängt sie ab?",
  o:["Wärmetransport durch Strömung von Fluiden; hängt von der Strömungsgeschwindigkeit ab", "Wärmetransport durch direkten Kontakt fester Stoffe; hängt von Wärmeleitfähigkeit λ, Fläche A, Temperaturunterschied ΔT und Schichtdicke d ab", "Wärmetransport durch elektromagnetische Wellen; hängt nur von der Temperatur ab", "Wärmetransport durch Molekülbewegung in Gasen; hängt vom Druck ab"], a:1,
  e:"Wärmeleitung: Q/t = λ · A · ΔT / d. λ = Wärmeleitfähigkeit [W/(m·K)]. Keramik hat i.d.R. niedrige λ-Werte → gute Wärmedämmung. Feuerfestwerkstoffe: λ stark temperaturabhängig."},

{c:"Wärmelehre", d:2, q:"Warum dominiert Wärmestrahlung bei hohen Ofentemperaturen (>800 °C) gegenüber Konvektion?",
  o:["Weil heiße Gase bei hohen Temperaturen nicht mehr strömen können", "Weil die Strahlungsleistung mit T⁴ wächst (Stefan-Boltzmann) und bei hohen Temperaturen die Strahlung exponentiell zunimmt", "Weil Konvektion nur bei Temperaturen unter 500 °C wirksam ist", "Weil Strahlung schneller ist als Konvektion und daher effizienter"], a:1,
  e:"Strahlungsleistung: P = ε · σ · T⁴ (Stefan-Boltzmann). Bei Verdopplung der absoluten Temperatur steigt die Strahlungsleistung auf das 16-fache. Oberhalb ~800 °C übernimmt Strahlung die Hauptrolle der Wärmeübertragung im Ofen."},

{c:"Wärmelehre", d:3, q:"Was ist der Wärmedurchgangskoeffizient U (früher k-Wert) und was beschreibt er?",
  o:["Die Wärmemenge, die ein Material speichern kann", "Den gesamten Wärmedurchgang durch ein mehrschichtiges Bauteil (Wand + Übergänge) in W/(m²·K) – kleiner U = bessere Dämmung", "Die Temperatur an der Außenwand eines Ofens", "Den Wirkungsgrad des Wärmetauschers"], a:1,
  e:"U-Wert [W/(m²·K)] = Wärmestrom durch 1 m² Bauteil bei 1 K Temperaturdifferenz. Enthält: Wandaufbau (alle Schichten mit λ/d) + Wärmeübergangswiderstände innen/außen. Je kleiner U, desto besser die Dämmwirkung."},

{c:"Wärmelehre", d:2, q:"Was versteht man unter dem Wirkungsgrad η eines Ofens und wie wird er berechnet?",
  o:["η = zugeführte Energie / abgeführte Energie · 100 %", "η = genutzte Energie / zugeführte Energie · 100 % — z.B. Wärme im Produkt geteilt durch eingesetzte Brennstoffenergie", "η = Brenntemperatur / maximale Ofentemperatur · 100 %", "η = Produktmasse / Gesamtmasse · 100 %"], a:1,
  e:"η = Q_nutz / Q_zu · 100 %. Verluste entstehen durch: Abgasverluste (größter Anteil), Wandverluste, unvollständige Verbrennung, Restwärme im Brenngut. Wärmerückgewinnung (Rekuperator, Regenerator) erhöht η."},

{c:"Wärmelehre", d:2, q:"Was ist ein Rekuperator und wie unterscheidet er sich vom Regenerator?",
  o:["Beide sind identisch – nur unterschiedliche Bezeichnungen für denselben Wärmetauscher", "Rekuperator: kontinuierlicher Wärmetausch über Trennwand (Abgas heizt Frischluft). Regenerator: periodisch – Speichermasse wird abwechselnd von Abgas erhitzt und gibt Wärme an Frischluft ab", "Rekuperator ist für flüssige Medien, Regenerator für Gase", "Regenerator ist effizienter, wird aber nur in der Stahlindustrie eingesetzt"], a:1,
  e:"Rekuperator: Heißes Abgas und kalte Frischluft fließen gleichzeitig durch getrennte Kanäle → kontinuierliche Wärmeübertragung. Regenerator: Gitterwerk/Speichermasse wird zyklisch von Abgas aufgeheizt, dann von Frischluft durchströmt → höhere Wärmerückgewinnungsgrade möglich."},

{c:"Wärmelehre", d:1, q:"Was ist der Unterschied zwischen exothermer und endothermer Reaktion?",
  o:["Exotherm = findet bei hoher Temperatur statt; endotherm = bei niedriger Temperatur", "Exotherm = Wärme wird freigesetzt (Reaktion gibt Energie ab); endotherm = Wärme wird verbraucht (Reaktion nimmt Energie auf)", "Exotherm = schnelle Reaktion; endotherm = langsame Reaktion", "Es gibt keinen Unterschied – beide Begriffe beschreiben dasselbe"], a:1,
  e:"Exotherm (z.B. Verbrennung, Sinterreaktionen): ΔH < 0, Wärme wird frei. Endotherm (z.B. Kalzinierung von Kaolin, Carbonatzersetzung): ΔH > 0, Wärme muss zugeführt werden. Wichtig für Brennkurvengestaltung."},

{c:"MSR", d:1, q:"Wofür steht die Abkürzung MSR und was umfasst dieses Fachgebiet?",
  o:["Maschinen-, Steuer-, Regelungstechnik – befasst sich mit Maschinenwartung", "Messen, Steuern, Regeln – umfasst das Erfassen von Prozessgrößen, deren gezielte Beeinflussung ohne und mit Rückkopplung", "Material-, Sinter-, Röstverfahren – beschreibt thermische Prozesse", "Mikro-, Sensor-, Robotertechnik – befasst sich mit Automatisierung"], a:1,
  e:"MSR = Messen (Ist-Wert erfassen), Steuern (Eingriff ohne Rückkopplung, Wirkungskette), Regeln (Eingriff mit Rückkopplung, Wirkungskreis). Grundlage aller automatisierten Prozesse in der Keramikindustrie."},

{c:"MSR", d:2, q:"Welche drei Grundarten von Reglern gibt es und was ist ihr Unterschied?",
  o:["Start-, Stopp- und Halte-Regler", "P-Regler (proportional), I-Regler (integral), D-Regler (differenzial) – oft kombiniert als PID-Regler", "Temperatur-, Druck- und Durchflussregler", "Analog-, Digital- und Hybridregler"], a:1,
  e:"P: Stellgröße proportional zur Regelabweichung → schnell, aber bleibende Regelabweichung. I: Integriert Abweichung über Zeit → keine bleibende Abweichung, aber langsamer. D: Reagiert auf Änderungsgeschwindigkeit → dämpft Überschwingen. PID kombiniert alle Vorteile."},

{c:"MSR", d:2, q:"Was ist ein Thermoelement und auf welchem Prinzip basiert es?",
  o:["Ein Widerstandsmessgerät, das Temperatur über Widerstandsänderung misst", "Zwei verschiedene Metalle, die an einer Messstelle verbunden sind – an der Vergleichsstelle entsteht durch den Seebeck-Effekt eine temperaturabhängige Spannung", "Ein Bimetallstreifen, der sich bei Temperaturänderung verbiegt", "Ein optisches Gerät, das Temperatur über Infrarotstrahlung misst"], a:1,
  e:"Thermoelement (Thermopaar): zwei verschiedene Metalle (z.B. Typ K: NiCr/Ni) bilden an der Messstelle eine Verbindung. Temperaturunterschied zur Vergleichsstelle erzeugt Thermospannung (Seebeck-Effekt). Messbereich je nach Typ bis >1.700 °C."},

{c:"MSR", d:2, q:"Was misst ein Pyrometer und welchen Vorteil hat es gegenüber einem Thermoelement?",
  o:["Ein Pyrometer misst den Druck in Drucköfen – Vorteil: druckresistent", "Ein Pyrometer misst Temperatur berührungslos über Wärmestrahlung – Vorteil: kein Kontakt mit dem Messobjekt, geeignet für bewegte oder schwer zugängliche Objekte", "Ein Pyrometer misst Feuchtigkeit – Vorteil: auch bei hohen Temperaturen einsetzbar", "Ein Pyrometer ist genauer als ein Thermoelement – Nachteil: teurer in der Anschaffung"], a:1,
  e:"Pyrometer = berührungsloses Temperaturmessgerät (Infrarot/Strahlung). Vorteile: kein Kontakt → kein Einfluss auf Messobjekt, schnelle Reaktion, für bewegte Produkte (z.B. Ziegel im Tunnelofen). Nachteil: Emissionsgrad ε des Messobjekts muss bekannt sein."},

{c:"MSR", d:3, q:"Was versteht man unter 'Regelkreis' und welche Komponenten gehören dazu?",
  o:["Regelstrecke und Regler – mehr Komponenten gibt es nicht", "Regler, Stellglied, Regelstrecke, Messglied (Sensor) – verbunden im geschlossenen Wirkungskreis mit Soll-/Ist-Wertvergleich", "Sensor, Anzeige und Alarm – der Regelkreis zeigt nur an", "Nur der PID-Regler – alle anderen Komponenten sind im Regler integriert"], a:1,
  e:"Vollständiger Regelkreis: Führungsgröße (Soll) → Vergleich → Regler → Stellgröße → Stellglied (z.B. Ventil) → Regelstrecke (z.B. Ofen) → Regelgröße (z.B. Temperatur) → Sensor/Messglied → zurück zum Vergleich. Störgrößen wirken auf die Strecke."},

{c:"MSR", d:2, q:"Was ist der Unterschied zwischen einem analogen und einem digitalen Signal?",
  o:["Analoge Signale sind genauer, digitale schneller", "Analoge Signale sind stufenlos kontinuierlich (z.B. 4–20 mA); digitale Signale sind diskret, nur bestimmte Zustände möglich (z.B. 0/1, EIN/AUS)", "Digitale Signale können nur Temperatur übertragen, analoge alle Messgrößen", "Es gibt keinen Unterschied – moderne Geräte verarbeiten beide identisch"], a:1,
  e:"Analog: kontinuierlicher Wertebereich (z.B. 4–20 mA Stromsignal, 0–10 V). Digital: diskrete Zustände (binär: 0 oder 1). In der Praxis: Sensor liefert oft analoges Signal → A/D-Wandler → digitale Weiterverarbeitung in SPS/Leitsystem."},

{c:"Chemie", d:1, q:"Was ist eine chemische Verbindung und wie unterscheidet sie sich von einem Gemisch?",
  o:["Verbindungen und Gemische sind dasselbe – nur in verschiedenen Aggregatzuständen", "In einer chemischen Verbindung sind Elemente in festem Verhältnis chemisch gebunden (neue Eigenschaften); im Gemisch bleiben Stoffe mit eigenen Eigenschaften vermischt und trennbar", "Gemische entstehen immer durch Erhitzen, Verbindungen durch Abkühlen", "Verbindungen enthalten nur ein Element, Gemische mehrere"], a:1,
  e:"Verbindung: festes Atomverhältnis, chem. Bindung, neue Eigenschaften (z.B. Al₂O₃ aus Al und O). Gemisch: Komponenten physikalisch vermischt, trennbar (z.B. Quarz + Feldspat + Kaolin im Versatz). Gemische können durch Sieben, Dekantieren usw. getrennt werden."},

{c:"Chemie", d:2, q:"Was versteht man unter pH-Wert und welche Bedeutung hat er für keramische Schlicker?",
  o:["pH-Wert misst die Dichte des Schlickers – pH 7 = Normdichte", "pH-Wert misst die Konzentration der H⁺-Ionen: pH<7 sauer, pH=7 neutral, pH>7 basisch – beeinflusst Flockung, Stabilität und Viskosität des Schlickers", "pH-Wert gibt die Brenntemperatur des Versatzes an", "pH-Wert beschreibt die Korngröße im Schlicker"], a:1,
  e:"pH = –log[H⁺]. In der Keramik: Schlicker-pH beeinflusst elektrostatische Abstoßung der Partikel (Zetapotenzial). Falscher pH → Flockung → Viskositätszunahme → schlechte Vergießbarkeit. Deflokulierung mit Soda (Na₂CO₃) oder Wasserglas erhöht pH und stabilisiert Schlicker."},

{c:"Chemie", d:2, q:"Was passiert beim Glühen von Kaolin (Al₂Si₂O₅(OH)₄) bei ca. 550 °C?",
  o:["Kaolin schmilzt und bildet eine Glasphase", "Kaolin gibt sein Kristallwasser ab und wird zu Metakaolin (Al₂Si₂O₇) – die Kristallstruktur bricht zusammen", "Kaolin oxidiert zu Al₂O₃ und SiO₂ getrennt", "Kaolin wandelt sich in Mullit um"], a:1,
  e:"Bei ~550 °C: Al₂Si₂O₅(OH)₄ → Al₂Si₂O₇ (Metakaolin) + 2 H₂O. Das Kristallwasser wird ausgetrieben, die Schichtstruktur kollabiert. Metakaolin ist reaktionsfreudig und wandelt sich bei ~980 °C weiter in Spinell und bei ~1.100 °C in Mullit um."},

{c:"Chemie", d:2, q:"Was ist Mullit und welche Bedeutung hat er in der Keramik?",
  o:["Mullit ist ein Bindemittel aus organischen Verbindungen", "Mullit (3Al₂O₃·2SiO₂) ist eine hochfeuerfeste Verbindung, die beim Brand aus Kaolin entsteht – verleiht Keramik Festigkeit, Temperaturwechselbeständigkeit und Kriechfestigkeit", "Mullit ist eine Glasphase, die die Porosität abdichtet", "Mullit ist ein Flussmittel, das die Brenntemperatur senkt"], a:1,
  e:"Mullit (Al₆Si₂O₁₃, 3Al₂O₃·2SiO₂): Schmelzpunkt ~1.850 °C, geringer Wärmeausdehnungskoeffizient, hohe Kriechfestigkeit. Entsteht beim Brand aus Metakaolin (~1.100 °C). Nadelförmige Mullitkriställchen verstärken die Keramikmatrix → wichtige Hochtemperaturkeramik."},

{c:"Chemie", d:3, q:"Was ist eine Eutektikum und welche praktische Bedeutung hat es in der Keramik?",
  o:["Ein Eutektikum ist der Punkt maximaler Festigkeit eines Werkstoffs", "Das Eutektikum ist der Punkt im Phasendiagramm mit dem niedrigsten Schmelzpunkt eines Gemisches – in der Keramik entstehen dort ungewollte Frühschmelzen oder werden gezielt als Sinterunterstützung genutzt", "Eutektikum bezeichnet die höchste erreichbare Temperatur in einem System", "Ein Eutektikum ist eine spezielle Glasurart mit zwei Schmelzpunkten"], a:1,
  e:"Eutektikum: Mischung mit minimalem Schmelzpunkt im Phasendiagramm. Beispiel: SiO₂-Al₂O₃-Eutektikum bei ~1.587 °C. Gefahr: Verunreinigungen (z.B. Na₂O, K₂O) senken das Eutektikum drastisch → Frühschmelzen bei unerwünschten Temperaturen. Gezielte Nutzung: Sinterunterstützung durch Flussmittel."},

{c:"Chemie", d:2, q:"Was ist Oxidation und Reduktion – und wie hängen beide zusammen?",
  o:["Oxidation = Sauerstoffaufnahme; Reduktion = Sauerstoffabgabe – beide laufen immer gleichzeitig ab (Redoxreaktion)", "Oxidation findet bei hohen Temperaturen statt, Reduktion bei niedrigen", "Oxidation ist exotherm, Reduktion immer endotherm", "Beide sind dasselbe – nur unterschiedliche Bezeichnungen je nach Blickwinkel"], a:0,
  e:"Oxidation: Elektronenabgabe / Sauerstoffaufnahme (z.B. Fe²⁺ → Fe³⁺). Reduktion: Elektronenaufnahme / Sauerstoffabgabe (Fe³⁺ → Fe²⁺). Redoxpaare laufen immer zusammen ab. Im Keramikofen: oxidierende Atmosphäre (Luftüberschuss) vs. reduzierende Atmosphäre (Luftmangel) beeinflusst Farbe und Eigenschaften."},

{c:"Umwelttechnik", d:1, q:"Was sind die wichtigsten Luftschadstoffe, die bei der Keramikproduktion entstehen können?",
  o:["Nur CO₂ – alle anderen Schadstoffe entstehen nicht bei keramischen Prozessen", "NOₓ (Stickoxide), SO₂ (Schwefeldioxid), CO (Kohlenmonoxid), Staub/Feinstaub und Fluor-/Chlorverbindungen", "Nur Lärm und Wärme – gasförmige Schadstoffe entstehen nicht", "Ausschließlich Schwermetalle aus den Pigmenten"], a:1,
  e:"Keramische Prozesse emittieren: NOₓ (aus Brennern, Hochtemperaturprozessen), SO₂ (aus schwefelhaltigen Rohstoffen), CO (unvollständige Verbrennung), Staub (Aufbereitung, Transport), HF/HCl (aus fluorid-/chloridhaltigen Rohstoffen). Alle unterliegen der TA Luft."},

{c:"Umwelttechnik", d:2, q:"Welches Verfahren wird zur Entstaubung von Abluft in der Keramikfertigung am häufigsten eingesetzt?",
  o:["Destillation", "Gewebefilter (Schlauchfilter) oder Elektroabscheider – beide erzielen sehr hohe Abscheidegrade >99 %", "Zentrifuge – schleudert Staubpartikel aus der Luft", "Aktivkohlefilter – adsorbiert alle Partikel"], a:1,
  e:"Gewebefilter: Abluft strömt durch Filterschläuche → Partikel bleiben hängen → periodische Abreinigung (Druckstoß). Elektroabscheider (ESP): Partikel werden elektrostatisch aufgeladen und an Elektroden abgeschieden. Beide: Abscheidegräde >99 %, geeignet für Feinstaub <PM10."},

{c:"Umwelttechnik", d:2, q:"Was ist der Unterschied zwischen primären und sekundären Umweltschutzmaßnahmen?",
  o:["Primär = teuer, sekundär = günstig", "Primäre Maßnahmen vermeiden Schadstoffe an der Entstehung (z.B. Brenneroptimierung, saubere Rohstoffe); sekundäre Maßnahmen behandeln bereits entstandene Schadstoffe (z.B. Filteranlagen, Rauchgasreinigung)", "Primär = gesetzlich vorgeschrieben; sekundär = freiwillig", "Primärmaßnahmen wirken im Ofen, Sekundärmaßnahmen außerhalb des Werks"], a:1,
  e:"Integrierter Umweltschutz (primär): Schadstoffe gar nicht erst entstehen lassen – z.B. optimierte Brenner (NOₓ-arm), halogenarme Rohstoffe, Energierückgewinnung. End-of-pipe (sekundär): entstandene Schadstoffe nachträglich entfernen – Filteranlagen, SCR-Katalysatoren, Wäscher. Primär ist ökologisch und oft wirtschaftlich vorzuziehen."},

{c:"Umwelttechnik", d:2, q:"Was versteht man unter dem Energieeffizienzkonzept 'Abwärmenutzung' und welche Techniken werden eingesetzt?",
  o:["Abwärme wird ins Stromnetz eingespeist – einzige wirtschaftliche Nutzungsform", "Abwärme aus Ofen/Abgas wird für Trocknungsanlagen, Hallenwärme oder Vorwärmung der Verbrennungsluft genutzt – Techniken: Wärmetauscher, Rekuperator, Abgasrückführung", "Abwärme wird durch Kühlung vernichtet – das ist die sicherste Methode", "Abwärmenutzung ist in der Keramik nicht möglich wegen zu hoher Temperaturen"], a:1,
  e:"Abwärmenutzung spart bis zu 30 % Energie. Typische Systeme: Abgaswärme heizt Trocknungsanlage (100–300 °C nutzbar), vorgeheizte Verbrennungsluft reduziert Gasverbrauch, Tunnelofenkühlzone heizt Trockner. Rekuperatoren/Regeneratoren gewinnen 40–70 % der Abgaswärme zurück."},

{c:"Trockentechnik", d:1, q:"Welche zwei Trocknungsphasen werden bei der keramischen Trocknung unterschieden?",
  o:["Aufwärmphase und Abkühlphase", "Erster Trockenabschnitt (konstante Trocknungsrate, freies Wasser verdunstet) und zweiter Trockenabschnitt (sinkende Rate, gebundenes Wasser diffundiert nach außen)", "Nassphase und Trockenphase – mehr Phasen gibt es nicht", "Oberflächentrocknung und Kerntrocknung – beide laufen gleichzeitig ab"], a:1,
  e:"1. Trockenabschnitt: freies Wasser an der Oberfläche verdunstet, Trocknungsrate konstant, Schwindung findet statt. 2. Trockenabschnitt: freies Wasser verbraucht, gebundenes Wasser muss durch Kapillaren diffundieren, Rate sinkt, Schwindung abgeschlossen. Übergangspunkt = kritischer Feuchtegehalt."},

{c:"Trockentechnik", d:2, q:"Warum entstehen Trocknungsrisse und wie werden sie vermieden?",
  o:["Trocknungsrisse entstehen durch zu langes Trocknen – schnell Trocknen verhindert sie", "Zu schnelle oder ungleichmäßige Trocknung → Außenhaut schwindet, Kern ist noch feucht → Zugspannungen → Risse. Lösung: langsame, gleichmäßige Trocknung mit hoher Anfangsluftfeuchtigkeit", "Trocknungsrisse entstehen nur bei Massen mit zu hohem Tongehalt – Lösung: mehr Magerungsmittel", "Risse entstehen durch chemische Reaktion des Tons mit Luftsauerstoff"], a:1,
  e:"Außenhaut trocknet und schwindet zuerst → innen noch feucht und größer → Zugspannungen → Risse. Gegenmaßnahmen: hohe Anfangsluftfeuchtigkeit (verlangsamt Oberflächentrocknung), niedrige Anfangstemperatur, gleichmäßige Luftführung, Magerungsmittel reduzieren Gesamtschwindung."},

{c:"Trockentechnik", d:2, q:"Was ist der Unterschied zwischen Kammertrockner und Tunneltrockner?",
  o:["Kammertrockner ist für Ziegelei, Tunneltrockner nur für Sanitärkeramik", "Kammertrockner: diskontinuierlich, Ware steht still, Luft zirkuliert. Tunneltrockner: kontinuierlich, Ware wird auf Wagen durchgefahren, Temperaturgradient entlang des Tunnels", "Tunneltrockner hat höhere Temperaturen als Kammertrockner", "Es gibt keinen Unterschied – beide arbeiten nach demselben Prinzip"], a:1,
  e:"Kammertrockner: Chargenweise, Ware wird eingefahren, Trocknung, Entnahme → Flexibel, aber Energieverluste durch Aufheizen der leeren Kammer. Tunneltrockner: Kontinuierlich, Ware durchläuft Zonen (feucht-warm → trocken-heiß), Gegenstromprinzip → energieeffizienter, besser für Massenproduktion."},

{c:"Trockentechnik", d:3, q:"Was ist das Mollier-Diagramm (h-x-Diagramm) und wozu wird es in der Trockentechnik genutzt?",
  o:["Ein Diagramm zur Berechnung der Brennkurve im Ofen", "Ein Diagramm für feuchte Luft: zeigt Zusammenhang zwischen Enthalpie, Wassergehalt, Temperatur und relativer Feuchte – ermöglicht Auslegung und Optimierung von Trocknungsanlagen", "Ein Sicherheitsdiagramm für Explosionsgrenzen bei der Trocknung", "Ein Diagramm zur Darstellung der Schwindungskurve während der Trocknung"], a:1,
  e:"Mollier h-x-Diagramm: x-Achse = Wasserbeladung der Luft [g/kg], y-Achse = spezifische Enthalpie [kJ/kg]. Zeigt: Sättigungskurve, Isothermen, relative Feuchtelinien. Anwendung: Berechnung von Zuluft-/Abluftmengen, Energiebedarf, Kondensationspunkte → Grundlage der Trocknerauslegung."},

{c:"Fertigungstechnik", d:1, q:"Welche Formgebungsverfahren werden in der Keramik nach dem Zustand der Masse unterschieden?",
  o:["Heißverfahren und Kaltverfahren", "Plastische Verfahren (Strangpressen, Drehen), Gießverfahren (Schlickerguss), Pressverfahren (Trocken-/Isostatisches Pressen)", "Manuelle und maschinelle Verfahren – das ist die einzig sinnvolle Einteilung", "Nur Pressen und Gießen – andere Verfahren sind in der Industrie nicht relevant"], a:1,
  e:"Einteilung nach Massenzustand: plastisch (20–30 % Wasser) → Strangpressen, Drehen, Walzen. Gießfähig (30–40 % Wasser) → Schlickerguss. Pressfähig (0–8 % Wasser) → Trockenpressen, isostatisches Pressen. Jedes Verfahren hat spezifische Vor- und Nachteile."},

{c:"Fertigungstechnik", d:2, q:"Was ist isostatisches Pressen und welchen Vorteil hat es gegenüber dem axialen Pressen?",
  o:["Isostatisches Pressen verwendet höheren Druck – der Vorteil ist mehr Dichte", "Beim isostatischen Pressen wird Druck von allen Seiten gleichmäßig aufgebracht (über Flüssigkeit/Gas) → gleichmäßige Dichte und Schwindung im gesamten Teil, keine Randzonenprobleme", "Isostatisches Pressen ist billiger, daher immer bevorzugt", "Beim isostatischen Pressen wird die Masse erhitzt, was die Dichte erhöht"], a:1,
  e:"Axiales Pressen: Druck nur von oben/unten → Dichtegradient (außen dichter als innen) → ungleiche Schwindung. Isostatisches Pressen: Druck allseitig gleichmäßig → homogene Rohdichte → gleichmäßige Schwindung → maßhaltigere Teile, besonders vorteilhaft bei komplexen Geometrien."},

{c:"Fertigungstechnik", d:2, q:"Was ist beim Schlickerguss der Unterschied zwischen Hohlguss und Vollguss?",
  o:["Beim Hohlguss wird heißer Schlicker verwendet, beim Vollguss kalter", "Hohlguss: überschüssiger Schlicker wird nach Scherbenbildung ausgegossen → hohles Teil. Vollguss: Schlicker verbleibt vollständig in der Form → massives Teil", "Vollguss ist nur für sehr kleine Teile geeignet", "Es gibt keinen Unterschied in der Praxis – beide Begriffe beschreiben denselben Vorgang"], a:1,
  e:"Hohlguss (Sanitär, Vasen): Schlicker in Gipsform → Wasser wird absorbiert → Scherben bildet sich → bei gewünschter Wandstärke Restschlicker ausgießen → hohler Körper. Vollguss (Griffe, massive Teile): Schlicker vollständig in der Form → Gips saugt gesamtes Wasser auf → massiver Körper."},

{c:"Fertigungstechnik", d:3, q:"Warum wird Gips als Formmaterial beim Schlickerguss eingesetzt?",
  o:["Weil Gips sehr hart ist und lange Standzeiten ermöglicht", "Weil Gips eine hohe Kapillarporosität (ca. 40–50 %) besitzt und Wasser aus dem Schlicker durch Kapillarkräfte aufsaugt – das ermöglicht Scherbenbildung ohne äußeren Druck", "Wegen des niedrigen Preises – andere Materialien wären zu teuer", "Weil Gips sich leicht von der fertigen Keramik löst – andere Materialien würden haften"], a:1,
  e:"Gipshalbhydrat (CaSO₄·½H₂O) → beim Abbinden entsteht poröses CaSO₄·2H₂O-Gefüge mit ~40–50 % offener Porosität. Kapillarkräfte saugen Wasser aus dem Schlicker → Feststoffpartikel werden an der Formwand abgelagert → Scherbenbildung. Nachteil: begrenzte Formstandzeit (~50–200 Abgüsse)."},

{c:"Brenntechnik", d:1,
  q:"Was versteht man unter dem Begriff 'Luftfaktor λ' (Lambda)?",
  o:[
    "Das Verhältnis von tatsächlich zugeführter Luftmenge zur theoretisch notwendigen Luftmenge",
    "Das Verhältnis von Brennstoffmenge zu Luftmenge im Brenner",
    "Die Temperatur der Verbrennungsluft am Brennereingang",
    "Den prozentualen Sauerstoffgehalt im Abgas"
  ], a:0,
  e:"λ = zugeführte Luftmenge / theoretischer Luftbedarf. Bei λ=1 exakte stöchiometrische Verbrennung, λ>1 Luftüberschuss (oxidierend), λ<1 Luftmangel (reduzierend)."},

{c:"Brenntechnik", d:2,
  q:"Bei welchem Luftfaktor λ wird die höchste Flammentemperatur erreicht?",
  o:[
    "λ = 0,8 (leichter Luftmangel)",
    "λ = 1,0 (stöchiometrisch)",
    "λ = 1,3 (Luftüberschuss)",
    "λ = 2,0 (starker Luftüberschuss)"
  ], a:1,
  e:"Bei λ=1 (stöchiometrische Verbrennung) wird die gesamte Brennstoffenergie freigesetzt ohne Verluste durch Überschussluft – daher die höchste Flammentemperatur."},

{c:"Brenntechnik", d:2,
  q:"Was passiert im Keramikofen bei der Quarzinversion (573 °C)?",
  o:[
    "Quarz schmilzt und bildet eine Glasphase",
    "α-Quarz wandelt sich reversibel in β-Quarz um – mit Volumenänderung von ca. 1–2 %",
    "Quarz zersetzt sich zu SiO und O₂",
    "Kaolin verliert sein Kristallwasser"
  ], a:1,
  e:"Bei 573 °C erfolgt eine reversible Umwandlung α↔β-Quarz mit ~1–2 % Volumenänderung. Beim Aufheizen und Abkühlen muss diese Zone langsam durchfahren werden, um Risse zu vermeiden."},

{c:"Brenntechnik", d:2,
  q:"Was bedeutet 'reduzierendes Brennen' und wofür wird es eingesetzt?",
  o:[
    "Brennen mit Luftüberschuss; wird für weiße Porzellane eingesetzt",
    "Brennen mit Luftmangel (λ<1); Fe²⁺ bleibt erhalten, erzeugt z.B. graue oder blau-grüne Farbtöne",
    "Brennen ohne jegliche Luftzufuhr im Vakuumofen",
    "Brennen mit reinem Sauerstoff für höhere Temperaturen"
  ], a:1,
  e:"Beim reduzierenden Brand herrscht Luftmangel (λ<1). CO entzieht Oxiden Sauerstoff. Fe³⁺ wird zu Fe²⁺ reduziert – das erzeugt andere Farben als oxidierende Atmosphäre (z.B. Seladon-Glasuren, Reduktionsporzellan)."},

{c:"Brenntechnik", d:3,
  q:"Warum müssen Schamotteziegel beim ersten Aufheizen besonders langsam erhitzt werden?",
  o:[
    "Damit das Bindemittel ausreichend Zeit zum Aushärten hat",
    "Wegen der Quarzinversion bei 573 °C und dem Austreiben von Restwasser und organischen Bestandteilen",
    "Weil der Ofen sonst zu viel Energie verbraucht",
    "Damit die Steine nicht durch Wärmeausdehnung auseinanderfallen"
  ], a:1,
  e:"Beim Erstaufheizen muss Restfeuchtigkeit und Kristallwasser langsam ausgetrieben werden (bis ~300 °C), und die Quarzinversion bei 573 °C muss vorsichtig durchfahren werden, um Rissbildung zu vermeiden."},

{c:"Brenntechnik", d:2,
  q:"Was ist der Unterschied zwischen Sinterung und Schmelze beim Brennprozess?",
  o:[
    "Es gibt keinen Unterschied – beide Begriffe beschreiben denselben Vorgang",
    "Bei der Sinterung verbinden sich Partikel durch Diffusion im festen Zustand; bei der Schmelze liegt eine flüssige Phase vor",
    "Sinterung findet bei höheren Temperaturen statt als die Schmelze",
    "Schmelze beschreibt nur den Vorgang in Glasöfen, Sinterung nur in Metallöfen"
  ], a:1,
  e:"Sinterung: Partikel verbinden sich durch Festkörperdiffusion unterhalb des Schmelzpunktes → Dichte nimmt zu, Porosität nimmt ab. Schmelze: vollständige Verflüssigung. Keramik wird gesintert, nicht geschmolzen."},

{c:"Brenntechnik", d:1,
  q:"Welche drei Wärmeübertragungsarten wirken im Brennofen?",
  o:[
    "Leitung, Konvektion, Strahlung",
    "Diffusion, Konvektion, Absorption",
    "Leitung, Verdampfung, Strahlung",
    "Konvektion, Kondensation, Reflexion"
  ], a:0,
  e:"Im Ofen wirken alle drei: Wärmeleitung (direkt durch Kontakt), Konvektion (durch Gasströmung) und Wärmestrahlung (dominiert bei hohen Temperaturen >800 °C)."},

{c:"Brenntechnik", d:3,
  q:"Was versteht man unter 'Garschnitt' und warum ist er praxisrelevant?",
  o:[
    "Eine Brennkurve, die auf die spezifische Produktzusammensetzung abgestimmt ist",
    "Der Zeitpunkt im Brennprozess, an dem alle gewünschten Reaktionen abgeschlossen sind und die Ware 'gar' ist",
    "Das Zerschneiden von Brennhilfsmitteln für bessere Staplung",
    "Die maximale Temperatur, die im Ofen je erreicht wurde"
  ], a:1,
  e:"Der 'Garschnitt' bezeichnet den Brennzustand, bei dem alle Sinter- und Reaktionsvorgänge abgeschlossen sind. Er ist entscheidend für Maßhaltigkeit, Festigkeit und Dichte des Endprodukts."},

{c:"Aufbereitung", d:1,
  q:"Welcher Aufbereitungsschritt hat das Ziel, eine homogene Korngrößenverteilung herzustellen?",
  o:[
    "Plastifizieren",
    "Klassieren (Sieben / Sichten)",
    "Mischen",
    "Entwässern"
  ], a:1,
  e:"Klassieren (durch Sieben oder Windsichten) trennt das Material nach Korngröße und erzeugt definierte Fraktionen. Das ist Voraussetzung für reproduzierbare Verdichtungs- und Sintereigenschaften."},

{c:"Aufbereitung", d:2,
  q:"Was ist der Unterschied zwischen Nassaufbereitung und Trockenaufbereitung?",
  o:[
    "Nassaufbereitung ist teurer, hat aber keine Qualitätsvorteile",
    "Bei der Nassaufbereitung wird Wasser als Prozessmedium eingesetzt – bessere Homogenisierung, feinere Mahlung, höherer Energieaufwand zur Entwässerung",
    "Trockenaufbereitung eignet sich nur für plastische Massen",
    "Nassaufbereitung ist nur für Glasuren geeignet, Trockenaufbereitung für Pressmassen"
  ], a:1,
  e:"Nassaufbereitung (Schlickeraufbereitung): feinste Zerkleinerung, beste Homogenisierung möglich, aber anschließendes Entwässern (Filterpressen, Sprühtrockner) notwendig. Trockenaufbereitung: weniger Energieaufwand, aber gröbere Ergebnisse."},

{c:"Aufbereitung", d:2,
  q:"Welche Funktion hat eine Filterpresse in der keramischen Aufbereitung?",
  o:[
    "Sie trennt magnetische Verunreinigungen aus dem Schlicker",
    "Sie entwässert den Schlicker durch Druckfiltration auf einen plastisch verarbeitbaren Wassergehalt",
    "Sie mahlt den Versatz auf die gewünschte Korngröße",
    "Sie mischt die Rohstoffe gleichmäßig vor der Formgebung"
  ], a:1,
  e:"Die Filterpresse entwässert den wässrigen Schlicker durch Druck: Wasser wird durch Filtertücher abgepresst, es entsteht ein plastischer 'Filterkuchen' mit ca. 20–25 % Wassergehalt."},

{c:"Aufbereitung", d:2,
  q:"Was ist ein Sprühtrockner und welches Produkt entsteht dabei?",
  o:[
    "Ein Gerät zum Trocknen bereits geformter Keramikteile bei hohen Temperaturen",
    "Eine Anlage, bei der Schlicker in einen Heißluftstrom zerstäubt wird – es entsteht ein rieselfähiges Granulat",
    "Ein Trockenofen mit Wasserbedampfung zur kontrollierten Trocknung",
    "Eine Presse, die Wasser aus dem Ton sprüht"
  ], a:1,
  e:"Im Sprühtrockner wird Schlicker durch Düsen oder Scheiben zerstäubt. Die Tröpfchen trocknen im Heißluftstrom sofort → kugelförmiges, rieselfähiges Granulat für Trockenpressen entsteht."},

{c:"Aufbereitung", d:3,
  q:"Warum wird beim Mahlprozess auf die Mahlkörpergröße geachtet?",
  o:[
    "Große Mahlkörper sind immer besser, weil sie mehr Energie übertragen",
    "Die Mahlkörpergröße bestimmt die erreichbare Endkorngröße: kleine Körper für Feinmahlung, große für Grob- und Mittelmahlung",
    "Mahlkörpergröße hat keinen Einfluss auf das Mahlergebnis",
    "Nur das Material der Mahlkörper ist relevant, nicht ihre Größe"
  ], a:1,
  e:"Große Mahlkörper erzeugen hohe Druckkräfte → Grob- und Mittelmahlung. Kleine Mahlkörper wirken durch Scherkräfte und Reibung → Feinmahlung. Die Abstimmung auf die gewünschte Zielkorngröße ist entscheidend."},

{c:"Aufbereitung", d:2,
  q:"Was versteht man unter 'Homogenisierung' in der Aufbereitung und warum ist sie wichtig?",
  o:[
    "Gleichmäßige Verteilung aller Komponenten im Versatz – vermeidet lokale Unterschiede in Zusammensetzung, Porosität und Schwindung",
    "Das Erhöhen der Wassergehalts auf ein einheitliches Niveau",
    "Das Zerkleinern aller Rohstoffe auf die gleiche Korngröße",
    "Das Entfernen von Verunreinigungen durch Sieben"
  ], a:0,
  e:"Homogenisierung = gleichmäßige Verteilung aller Bestandteile. Ohne sie entstehen lokale Inhomogenitäten → unterschiedliche Schwindung → Verzug und Risse. Mischer, Kollergang und Knetmaschinen werden dafür eingesetzt."},

{c:"Glasurtechnologie", d:1,
  q:"Was ist eine Glasur und welche Hauptfunktionen hat sie?",
  o:[
    "Eine Glasur ist eine dünne Tonschicht, die nur zur Farbgebung aufgetragen wird",
    "Eine Glasur ist eine Silikatglasschicht auf der Keramikoberfläche – Funktionen: Dichtigkeit, Hygiene, Dekoration, Schutz vor Abrieb",
    "Eine Glasur ist ein metallischer Überzug zum Korrosionsschutz",
    "Eine Glasur ist identisch mit dem Scherben und wird nicht separat aufgetragen"
  ], a:1,
  e:"Glasuren sind dünne Silikatglasschichten. Funktionen: Abdichten des porösen Scherbens (Hygiene), dekorative Wirkung (Glanz, Farbe, Textur), Schutz vor mechanischem Angriff und Reinigbarkeit."},

{c:"Glasurtechnologie", d:2,
  q:"Was bedeutet Glasurspannung und welche zwei Arten gibt es?",
  o:[
    "Die Viskosität der Glasur beim Auftragen; man unterscheidet dünnflüssig und dickflüssig",
    "Die mechanische Spannung zwischen Glasur und Scherben durch unterschiedliche WAK – man unterscheidet Druckspannung (Glasur dehnt sich weniger) und Zugspannung (Glasur dehnt sich mehr)",
    "Der Druck beim Glasieren; man unterscheidet Tauchen und Spritzen",
    "Die elektrische Ladung der Glasurpartikel; positiv oder negativ"
  ], a:1,
  e:"Glasurspannung entsteht durch unterschiedliche Wärmeausdehnungskoeffizienten (WAK) von Glasur und Scherben. Druckspannung (WAK Glasur < WAK Scherben): günstig, erhöht Festigkeit. Zugspannung (WAK Glasur > WAK Scherben): führt zu Crazing (Haarrissen)."},

{c:"Glasurtechnologie", d:2,
  q:"Was ist 'Crazing' bei Glasuren und wodurch entsteht es?",
  o:[
    "Ein dekorativer Craquelé-Effekt, der bewusst eingesetzt wird",
    "Haarrisse in der Glasur durch zu hohen WAK der Glasur im Vergleich zum Scherben (Zugspannung in der Glasur)",
    "Das Abplatzen der Glasur durch zu niedrigen Schmelzpunkt",
    "Ein Oxidationsfehler durch falsche Brennatmosphäre"
  ], a:1,
  e:"Crazing (ungewollte Rissbildung): WAK Glasur > WAK Scherben → beim Abkühlen zieht die Glasur stärker zusammen → Zugspannung → Risse. Lösung: WAK der Glasur durch Rezepturanpassung (z.B. mehr SiO₂, weniger Na₂O) senken."},

{c:"Glasurtechnologie", d:2,
  q:"Welche Aufgabe hat die Seger-Formel in der Glasurtechnologie?",
  o:[
    "Sie berechnet die Brenntemperatur eines Rohstoffs",
    "Sie ist eine normierte Darstellung der Glasurzusammensetzung nach Oxidklassen (RO, R₂O₃, RO₂) – erlaubt Vergleich und gezielte Anpassung",
    "Sie bestimmt die Dichte des Glasurschlickers",
    "Sie gibt die maximale Schichtdicke der Glasur an"
  ], a:1,
  e:"Die Seger-Formel (empirische Oxidformel) ordnet Oxide in Gruppen: Basen (RO/R₂O), Neutrale (R₂O₃), Säuren (RO₂). Die Basen werden auf 1,0 normiert. So können Glasuren systematisch verglichen und Schmelzpunkt/Viskosität gezielt eingestellt werden."},

{c:"Glasurtechnologie", d:3,
  q:"Warum wird SiO₂ in Glasurrezepturen erhöht, um Crazing zu beheben?",
  o:[
    "SiO₂ erhöht den WAK der Glasur",
    "SiO₂ senkt den WAK der Glasur und erhöht ihre Viskosität, sodass die Glasur beim Abkühlen weniger stark zieht",
    "SiO₂ verbessert die Haftung der Glasur auf dem Scherben unabhängig vom WAK",
    "SiO₂ erhöht die Glasurschichtdicke und überbrückt so die Risse"
  ], a:1,
  e:"SiO₂ ist ein Netzwerkbildner: mehr SiO₂ → niedrigerer WAK der Glasur → beim Abkühlen geringere Kontraktion → Zugspannung wird abgebaut → kein Crazing. Außerdem steigt die Viskosität und Festigkeit der Glasur."},

{c:"Glasurtechnologie", d:2,
  q:"Was ist der Unterschied zwischen Rohglasur und Fritte?",
  o:[
    "Rohglasuren sind transparent, Fritten immer opak",
    "Rohglasuren bestehen aus ungeschmolzenen Rohstoffen; Fritten sind vorgeschmolzene und gemahlene Glasuren – wasserunlösliche Inhaltsstoffe werden so fixiert",
    "Fritten werden nur für Sanitärkeramik verwendet, Rohglasuren für Geschirr",
    "Es gibt keinen praktischen Unterschied – beide werden gleich verarbeitet"
  ], a:1,
  e:"Rohglasuren: Mischung aus Rohstoffen, die erst beim Brand aufschmelzen. Problem: lösliche Verbindungen (z.B. Borax) können in den Scherben migrieren. Fritte: Rohstoffe werden vorgeschmolzen, abgekühlt, gemahlen → alle Bestandteile sind fixiert, reproduzierbar, ungiftige Verarbeitung."},

{c:"Baukeramik", d:1,
  q:"Nach welcher Norm werden Mauerziegeln in Deutschland klassifiziert und welche Haupteigenschaft bestimmt die Klasse?",
  o:[
    "DIN 105 – Haupteigenschaft: Rohdichte",
    "DIN 1045 – Haupteigenschaft: Druckfestigkeit",
    "EN 771 – Haupteigenschaft: Wasseraufnahme",
    "DIN 18000 – Haupteigenschaft: Brenntemperatur"
  ], a:0,
  e:"Mauerziegel werden nach DIN 105 klassifiziert. Die Rohdichteklasse (z.B. 0,6 bis 2,2 g/cm³) bestimmt den Ziegeltyp – sie beeinflusst Wärmedämmung, Gewicht und Druckfestigkeit maßgeblich."},

{c:"Baukeramik", d:2,
  q:"Was ist der Unterschied zwischen Hochlochziegel und Vollziegel?",
  o:[
    "Hochlochziegel werden bei höheren Temperaturen gebrannt",
    "Hochlochziegel haben senkrecht zur Lagerfläche angeordnete Lochungen – bessere Wärmedämmung, geringeres Gewicht; Vollziegel sind massiv",
    "Vollziegel werden immer glasiert, Hochlochziegel nicht",
    "Hochlochziegel sind nur für Innenwände zugelassen"
  ], a:1,
  e:"Hochlochziegel (HLz): Lochungen senkrecht zur Lagerfuge → Luftkammern verringern Wärmeleitfähigkeit → bessere Dämmwerte. Vollziegel: massiv, höhere Druckfestigkeit, aber schlechtere Dämmung. Einsatz nach statischen und energetischen Anforderungen."},

{c:"Baukeramik", d:2,
  q:"Welche Rohstoffe werden hauptsächlich für die Ziegelherstellung eingesetzt?",
  o:[
    "Kaolin und Feldspat – gleiche Rohstoffe wie bei Porzellan",
    "Ton und Lehm (mit Quarz und Kalk als Zuschläge) – plastische Massen mit hohem Eisenoxidgehalt",
    "Schamotte und Korund für Feuerfestziegel",
    "Nur Ton ohne jegliche Zusätze"
  ], a:1,
  e:"Ziegel werden aus Ton/Lehm (plastisch, enthält Eisenoxide → typische rote Farbe) mit Zuschlägen wie Sand/Quarz (Magerung) und manchmal Kalk hergestellt. Porenanteile werden durch Sägemehl, Styropor oder Kohle als Porosierungsmittel erzeugt."},

{c:"Baukeramik", d:3,
  q:"Was ist 'Porosierung' beim Ziegelwerk und welchen bautechnischen Vorteil bringt sie?",
  o:[
    "Absichtliches Erzeugen von Poren durch Zugabe von Ausbrennstoffen (z.B. Sägemehl, Polystyrol) → niedrigere Rohdichte, bessere Wärmedämmung",
    "Nachträgliches Aufbohren von Ziegeln auf der Baustelle",
    "Erhöhung des Wasseraufnahmevermögens durch spezielle Brennkurven",
    "Einpressen von Luft in die plastische Masse unter Druck"
  ], a:0,
  e:"Porosierung: Dem Versatz werden Ausbrennstoffe (Sägemehl, Polystyrol, Kork) beigemischt. Diese verbrennen beim Brand vollständig → feine, geschlossene Poren entstehen. Ergebnis: Rohdichte sinkt auf 0,6–1,0 g/cm³, Wärmeleitfähigkeit λ sinkt deutlich."},

{c:"Baukeramik", d:2,
  q:"Welcher Fehler entsteht, wenn Kalkstücke nicht fein genug gemahlen im Ziegelversatz verbleiben?",
  o:[
    "Die Ziegel werden zu dunkel durch Reduktion des Eisenoxids",
    "Kalksprengen: CaO reagiert nachträglich mit Luftfeuchtigkeit zu Ca(OH)₂, Volumenzunahme sprengt Schalenteile ab",
    "Die Druckfestigkeit steigt unkontrolliert an",
    "Die Ziegel schmelzen bei Brenntemperatur durch den niedrigen Schmelzpunkt des Kalks"
  ], a:1,
  e:"Kalksprengen (Kalkkrebs): Grobe CaCO₃-Einschlüsse → beim Brand wird CaO gebildet. CaO ist sehr hygroskopisch: Ca(OH)₂ + Volumenzunahme von ~100 % → Sprengen von Ziegelstücken. Lösung: CaCO₃ fein mahlen (<0,1 mm) oder vollständig vermeiden."},

{c:"Rohstoffe", d:1,
  q:"Welches Tonmineral ist das wichtigste für die Porzellanherstellung und warum?",
  o:[
    "Montmorillonit – wegen seiner hohen Quellkapazität",
    "Kaolinit – wegen hoher Reinheit, Feuerfestigkeit und heller Brennfarbe",
    "Illit – wegen seiner guten Plastizität",
    "Smektit – wegen des niedrigen Schmelzpunkts"
  ], a:1,
  e:"Kaolinit (Kaolin, Al₂Si₂O₅(OH)₄) ist das wichtigste Rohmineral für Porzellan: hoher Aluminiumgehalt, wenig Flussmittel, brennt weiß, hohe Feuerfestigkeit (Sintertemperatur ~1.250–1.450 °C). Formel: Al₂O₃ · 2 SiO₂ · 2 H₂O."},

{c:"Rohstoffe", d:2,
  q:"Was ist der Unterschied zwischen primären und sekundären Tonen?",
  o:[
    "Primäre Tone entstehen bei hohen Temperaturen, sekundäre bei niedrigen",
    "Primäre Tone (Restverwitterungstone) liegen am Entstehungsort und sind reiner; sekundäre Tone wurden durch Wasser transportiert, enthalten mehr Verunreinigungen, sind aber plastischer",
    "Sekundäre Tone sind immer feuerfester als primäre",
    "Es gibt keinen qualitativen Unterschied – nur den Fundort"
  ], a:1,
  e:"Primäre Tone (z.B. Kaolin): am Verwitterungsort verblieben, grobe Körner, wenig Verunreinigungen, wenig plastisch. Sekundäre Tone: durch Wasser transportiert, feiner, mehr organische Substanzen und Eisenoxide (→ gefärbt nach Brand), plastischer."},

{c:"Rohstoffe", d:2,
  q:"Welche drei Rohstoffe bilden das klassische Porzellanversatz-Dreieck?",
  o:[
    "Ton – Quarz – Schamotte",
    "Kaolin – Feldspat – Quarz",
    "Kaolin – Calcit – Korund",
    "Ton – Talkum – Aluminiumoxid"
  ], a:1,
  e:"Das Porzellan-Dreistoffsystem: Kaolin (Plastizität + Al₂O₃-Träger), Feldspat (Flussmittel, bildet Glasphase), Quarz (Magerungsmittel, Gerüstbildner). Typisch: 50% Kaolin, 25% Feldspat, 25% Quarz."},

{c:"Rohstoffe", d:3,
  q:"Was ist die Funktion von Feldspat im keramischen Versatz?",
  o:[
    "Feldspat erhöht die Plastizität der Masse",
    "Feldspat wirkt als Flussmittel: schmilzt bei ~1150 °C und bildet eine Glasphase, die andere Körner verbindet und die Dichte erhöht",
    "Feldspat ist ein Magerungsmittel, das die Schwindung reduziert",
    "Feldspat erhöht die Feuerfestigkeit des Versatzes"
  ], a:1,
  e:"Feldspat (KAlSi₃O₈, NaAlSi₃O₈) ist das wichtigste Flussmittel in der Feinkeramik. Er schmilzt bei ~1.150–1.200 °C, bildet eine viskose Schmelzphase, die die noch festen Körner umschließt → dichtere Sinterung, niedrigere Brenntemperatur."},

{c:"Feinkeramik", d:1,
  q:"Wodurch unterscheidet sich Hartporzellan von Weichporzellan?",
  o:[
    "Durch die Härte nach dem Ritzen mit einer Stahlnadel",
    "Hartporzellan: höhere Brenntemperatur (~1.400 °C), mehr Kaolin, transluzent; Weichporzellan: niedrigere Brenntemperatur (~1.200 °C), mehr Feldspat",
    "Hartporzellan enthält Korund als Härtezusatz",
    "Weichporzellan wird weich nach dem Brennen und erst durch Glasur verfestigt"
  ], a:1,
  e:"Hartporzellan (Europäisches Porzellan): ~50% Kaolin, 25% Feldspat, 25% Quarz, Brand bei 1.380–1.460 °C. Weichporzellan (Französisch/Bone China): mehr Feldspat/Flussmittel → niedrigere Brenntemperatur, transluzenter, weicher (leichter zu bearbeiten)."},

{c:"Feinkeramik", d:2,
  q:"Was ist Schrühbrand und welchen Zweck hat er?",
  o:[
    "Ein zweiter Brand nach der Glasur zur Fixierung der Dekoration",
    "Ein erster Brand bei niedriger Temperatur (~900–1.000 °C) zur Verfestigung des Rohlings vor der Glasur – macht ihn handhabbar, aber noch saugfähig",
    "Ein Brand zur Reinigung des Ofens von Ascherückständen",
    "Der Hauptbrand, bei dem die endgültige Sinterung stattfindet"
  ], a:1,
  e:"Schrühbrand (Vorglutbrand): ~900–1.050 °C → organische Bestandteile verbrennen, Ton wird verfestigt (Scherben = Schrühware). Der Scherben ist noch porös und saugfähig → ideal zum Aufnehmen der Glasuraufschlämmung."},

{c:"Feinkeramik", d:2,
  q:"Was versteht man unter 'Schwindung' und in welchen Phasen tritt sie auf?",
  o:[
    "Schwindung ist nur ein optischer Effekt durch die Glasur",
    "Schwindung ist die Volumenabnahme der Keramik – tritt in drei Phasen auf: Trockenschwindung (Wasseraustritt), Brennschwindung (Sinterung) und manchmal Abkühlschwindung",
    "Schwindung tritt ausschließlich beim Abkühlen auf",
    "Schwindung ist die Volumenzunahme durch Ausdehnung beim Erhitzen"
  ], a:1,
  e:"Gesamtschwindung = Trockenschwindung (Wasserverdunstung → Partikel rücken zusammen, 5–15 % linear) + Brennschwindung (Sinterung, Glasphase füllt Poren, weitere 3–8 %). Wichtig: Gesamtschwindung ≠ Summe beider Einzelschwindungen (unterschiedliche Ausgangslängen!)."},

{c:"Feinkeramik", d:3,
  q:"Warum hat Knochenporzellan (Bone China) eine besonders hohe Transluzenz?",
  o:[
    "Weil es nach dem Brand mit einem transparenten Lack überzogen wird",
    "Weil Calciumphosphat (aus Knochenasche) eine feine Kristallstruktur mit wenigen Poren erzeugt und den Brechungsindex der Glasphase optimal anpasst",
    "Weil es sehr dünn gefertigt wird – die Transluzenz ist nur eine Frage der Wandstärke",
    "Weil es aus reinem Quarz ohne Farboxide besteht"
  ], a:1,
  e:"Bone China enthält ~50% Knochenasche (Ca₃(PO₄)₂). Das Calciumphosphat bildet beim Brand Anorthit-Kristalle eingebettet in Glasphase. Die geringe Porosität, der niedrige Brechungsindex-Unterschied und die feine Mikrostruktur erzeugen die charakteristische Transluzenz."},

{c:"Wärmelehre", d:1,
  q:"Was ist der Unterschied zwischen Wärmemenge Q und Temperatur T?",
  o:[
    "Temperatur und Wärmemenge sind dasselbe, nur in verschiedenen Einheiten",
    "Temperatur ist ein Zustandsgröße (°C / K), Wärmemenge ist eine Energiegröße (kJ) – ein kleiner Körper kann heiß sein, aber wenig Wärme enthalten",
    "Wärmemenge ist immer größer als die Temperatur",
    "Temperatur misst die Wärme pro Volumen, Wärmemenge die Wärme pro Masse"
  ], a:1,
  e:"Temperatur (T) beschreibt den Wärmezustand (Intensität). Wärmemenge (Q) ist die gespeicherte oder übertragene Energie: Q = m · c · ΔT. Ein Fingerhut kochendes Wasser hat hohe Temperatur, aber geringe Wärmemenge."},

{c:"Wärmelehre", d:2,
  q:"Ein Keramikteil mit 2 kg Masse wird von 20 °C auf 120 °C erhitzt. Die spezifische Wärmekapazität beträgt 0,9 kJ/(kg·K). Wie viel Wärme wird benötigt?",
  o:[
    "90 kJ",
    "180 kJ",
    "216 kJ",
    "45 kJ"
  ], a:1,
  e:"Q = m · c · ΔT = 2 kg · 0,9 kJ/(kg·K) · (120–20) K = 2 · 0,9 · 100 = 180 kJ."},

{c:"Wärmelehre", d:2,
  q:"Was ist Wärmeleitung (Konduktion) und wovon hängt sie ab?",
  o:[
    "Wärmetransport durch Strömung von Fluiden; hängt von der Strömungsgeschwindigkeit ab",
    "Wärmetransport durch direkten Kontakt fester Stoffe; hängt von Wärmeleitfähigkeit λ, Fläche A, Temperaturunterschied ΔT und Schichtdicke d ab",
    "Wärmetransport durch elektromagnetische Wellen; hängt nur von der Temperatur ab",
    "Wärmetransport durch Molekülbewegung in Gasen; hängt vom Druck ab"
  ], a:1,
  e:"Wärmeleitung: Q/t = λ · A · ΔT / d. λ = Wärmeleitfähigkeit [W/(m·K)]. Keramik hat i.d.R. niedrige λ-Werte → gute Wärmedämmung. Feuerfestwerkstoffe: λ stark temperaturabhängig."},

{c:"Wärmelehre", d:2,
  q:"Warum dominiert Wärmestrahlung bei hohen Ofentemperaturen (>800 °C) gegenüber Konvektion?",
  o:[
    "Weil heiße Gase bei hohen Temperaturen nicht mehr strömen können",
    "Weil die Strahlungsleistung mit T⁴ wächst (Stefan-Boltzmann) und bei hohen Temperaturen die Strahlung exponentiell zunimmt",
    "Weil Konvektion nur bei Temperaturen unter 500 °C wirksam ist",
    "Weil Strahlung schneller ist als Konvektion und daher effizienter"
  ], a:1,
  e:"Strahlungsleistung: P = ε · σ · T⁴ (Stefan-Boltzmann). Bei Verdopplung der absoluten Temperatur steigt die Strahlungsleistung auf das 16-fache. Oberhalb ~800 °C übernimmt Strahlung die Hauptrolle der Wärmeübertragung im Ofen."},

{c:"Wärmelehre", d:3,
  q:"Was ist der Wärmedurchgangskoeffizient U (früher k-Wert) und was beschreibt er?",
  o:[
    "Die Wärmemenge, die ein Material speichern kann",
    "Den gesamten Wärmedurchgang durch ein mehrschichtiges Bauteil (Wand + Übergänge) in W/(m²·K) – kleiner U = bessere Dämmung",
    "Die Temperatur an der Außenwand eines Ofens",
    "Den Wirkungsgrad des Wärmetauschers"
  ], a:1,
  e:"U-Wert [W/(m²·K)] = Wärmestrom durch 1 m² Bauteil bei 1 K Temperaturdifferenz. Enthält: Wandaufbau (alle Schichten mit λ/d) + Wärmeübergangswiderstände innen/außen. Je kleiner U, desto besser die Dämmwirkung."},

{c:"Wärmelehre", d:2,
  q:"Was versteht man unter dem Wirkungsgrad η eines Ofens und wie wird er berechnet?",
  o:[
    "η = zugeführte Energie / abgeführte Energie · 100 %",
    "η = genutzte Energie / zugeführte Energie · 100 % — z.B. Wärme im Produkt geteilt durch eingesetzte Brennstoffenergie",
    "η = Brenntemperatur / maximale Ofentemperatur · 100 %",
    "η = Produktmasse / Gesamtmasse · 100 %"
  ], a:1,
  e:"η = Q_nutz / Q_zu · 100 %. Verluste entstehen durch: Abgasverluste (größter Anteil), Wandverluste, unvollständige Verbrennung, Restwärme im Brenngut. Wärmerückgewinnung (Rekuperator, Regenerator) erhöht η."},

{c:"Wärmelehre", d:2,
  q:"Was ist ein Rekuperator und wie unterscheidet er sich vom Regenerator?",
  o:[
    "Beide sind identisch – nur unterschiedliche Bezeichnungen für denselben Wärmetauscher",
    "Rekuperator: kontinuierlicher Wärmetausch über Trennwand (Abgas heizt Frischluft). Regenerator: periodisch – Speichermasse wird abwechselnd von Abgas erhitzt und gibt Wärme an Frischluft ab",
    "Rekuperator ist für flüssige Medien, Regenerator für Gase",
    "Regenerator ist effizienter, wird aber nur in der Stahlindustrie eingesetzt"
  ], a:1,
  e:"Rekuperator: Heißes Abgas und kalte Frischluft fließen gleichzeitig durch getrennte Kanäle → kontinuierliche Wärmeübertragung. Regenerator: Gitterwerk/Speichermasse wird zyklisch von Abgas aufgeheizt, dann von Frischluft durchströmt → höhere Wärmerückgewinnungsgrade möglich."},

{c:"Wärmelehre", d:1,
  q:"Was ist der Unterschied zwischen exothermer und endothermer Reaktion?",
  o:[
    "Exotherm = findet bei hoher Temperatur statt; endotherm = bei niedriger Temperatur",
    "Exotherm = Wärme wird freigesetzt (Reaktion gibt Energie ab); endotherm = Wärme wird verbraucht (Reaktion nimmt Energie auf)",
    "Exotherm = schnelle Reaktion; endotherm = langsame Reaktion",
    "Es gibt keinen Unterschied – beide Begriffe beschreiben dasselbe"
  ], a:1,
  e:"Exotherm (z.B. Verbrennung, Sinterreaktionen): ΔH < 0, Wärme wird frei. Endotherm (z.B. Kalzinierung von Kaolin, Carbonatzersetzung): ΔH > 0, Wärme muss zugeführt werden. Wichtig für Brennkurvengestaltung."},

{c:"MSR", d:1,
  q:"Wofür steht die Abkürzung MSR und was umfasst dieses Fachgebiet?",
  o:[
    "Maschinen-, Steuer-, Regelungstechnik – befasst sich mit Maschinenwartung",
    "Messen, Steuern, Regeln – umfasst das Erfassen von Prozessgrößen, deren gezielte Beeinflussung ohne und mit Rückkopplung",
    "Material-, Sinter-, Röstverfahren – beschreibt thermische Prozesse",
    "Mikro-, Sensor-, Robotertechnik – befasst sich mit Automatisierung"
  ], a:1,
  e:"MSR = Messen (Ist-Wert erfassen), Steuern (Eingriff ohne Rückkopplung, Wirkungskette), Regeln (Eingriff mit Rückkopplung, Wirkungskreis). Grundlage aller automatisierten Prozesse in der Keramikindustrie."},

{c:"MSR", d:2,
  q:"Was ist der Unterschied zwischen Steuern und Regeln?",
  o:[
    "Steuern ist genauer als Regeln – es wird immer bevorzugt",
    "Steuern = offener Wirkungsweg ohne Rückkopplung; Regeln = geschlossener Wirkungskreis mit Rückkopplung (Ist-Wert wird mit Soll-Wert verglichen und Abweichung korrigiert)",
    "Regeln ist einfacher und billiger, daher wird es öfter eingesetzt",
    "Es gibt keinen technischen Unterschied – nur unterschiedliche Begriffe"
  ], a:1,
  e:"Steuern: Eingangsgröße → System → Ausgangsgröße (offen, keine Korrektur bei Störung). Regeln: Regler vergleicht Ist- mit Sollwert → Regelabweichung → Stellgröße korrigiert → Rückkopplung. Regeln kompensiert Störgrößen automatisch."},

{c:"MSR", d:2,
  q:"Welche drei Grundarten von Reglern gibt es und was ist ihr Unterschied?",
  o:[
    "Start-, Stopp- und Halte-Regler",
    "P-Regler (proportional), I-Regler (integral), D-Regler (differenzial) – oft kombiniert als PID-Regler",
    "Temperatur-, Druck- und Durchflussregler",
    "Analog-, Digital- und Hybridregler"
  ], a:1,
  e:"P: Stellgröße proportional zur Regelabweichung → schnell, aber bleibende Regelabweichung. I: Integriert Abweichung über Zeit → keine bleibende Abweichung, aber langsamer. D: Reagiert auf Änderungsgeschwindigkeit → dämpft Überschwingen. PID kombiniert alle Vorteile."},

{c:"MSR", d:2,
  q:"Was ist ein Thermoelement und auf welchem Prinzip basiert es?",
  o:[
    "Ein Widerstandsmessgerät, das Temperatur über Widerstandsänderung misst",
    "Zwei verschiedene Metalle, die an einer Messstelle verbunden sind – an der Vergleichsstelle entsteht durch den Seebeck-Effekt eine temperaturabhängige Spannung",
    "Ein Bimetallstreifen, der sich bei Temperaturänderung verbiegt",
    "Ein optisches Gerät, das Temperatur über Infrarotstrahlung misst"
  ], a:1,
  e:"Thermoelement (Thermopaar): zwei verschiedene Metalle (z.B. Typ K: NiCr/Ni) bilden an der Messstelle eine Verbindung. Temperaturunterschied zur Vergleichsstelle erzeugt Thermospannung (Seebeck-Effekt). Messbereich je nach Typ bis >1.700 °C."},

{c:"MSR", d:2,
  q:"Was misst ein Pyrometer und welchen Vorteil hat es gegenüber einem Thermoelement?",
  o:[
    "Ein Pyrometer misst den Druck in Drucköfen – Vorteil: druckresistent",
    "Ein Pyrometer misst Temperatur berührungslos über Wärmestrahlung – Vorteil: kein Kontakt mit dem Messobjekt, geeignet für bewegte oder schwer zugängliche Objekte",
    "Ein Pyrometer misst Feuchtigkeit – Vorteil: auch bei hohen Temperaturen einsetzbar",
    "Ein Pyrometer ist genauer als ein Thermoelement – Nachteil: teurer in der Anschaffung"
  ], a:1,
  e:"Pyrometer = berührungsloses Temperaturmessgerät (Infrarot/Strahlung). Vorteile: kein Kontakt → kein Einfluss auf Messobjekt, schnelle Reaktion, für bewegte Produkte (z.B. Ziegel im Tunnelofen). Nachteil: Emissionsgrad ε des Messobjekts muss bekannt sein."},

{c:"MSR", d:3,
  q:"Was versteht man unter 'Regelkreis' und welche Komponenten gehören dazu?",
  o:[
    "Regelstrecke und Regler – mehr Komponenten gibt es nicht",
    "Regler, Stellglied, Regelstrecke, Messglied (Sensor) – verbunden im geschlossenen Wirkungskreis mit Soll-/Ist-Wertvergleich",
    "Sensor, Anzeige und Alarm – der Regelkreis zeigt nur an",
    "Nur der PID-Regler – alle anderen Komponenten sind im Regler integriert"
  ], a:1,
  e:"Vollständiger Regelkreis: Führungsgröße (Soll) → Vergleich → Regler → Stellgröße → Stellglied (z.B. Ventil) → Regelstrecke (z.B. Ofen) → Regelgröße (z.B. Temperatur) → Sensor/Messglied → zurück zum Vergleich. Störgrößen wirken auf die Strecke."},

{c:"MSR", d:2,
  q:"Was ist der Unterschied zwischen einem analogen und einem digitalen Signal?",
  o:[
    "Analoge Signale sind genauer, digitale schneller",
    "Analoge Signale sind stufenlos kontinuierlich (z.B. 4–20 mA); digitale Signale sind diskret, nur bestimmte Zustände möglich (z.B. 0/1, EIN/AUS)",
    "Digitale Signale können nur Temperatur übertragen, analoge alle Messgrößen",
    "Es gibt keinen Unterschied – moderne Geräte verarbeiten beide identisch"
  ], a:1,
  e:"Analog: kontinuierlicher Wertebereich (z.B. 4–20 mA Stromsignal, 0–10 V). Digital: diskrete Zustände (binär: 0 oder 1). In der Praxis: Sensor liefert oft analoges Signal → A/D-Wandler → digitale Weiterverarbeitung in SPS/Leitsystem."},

{c:"Chemie", d:1,
  q:"Was ist eine chemische Verbindung und wie unterscheidet sie sich von einem Gemisch?",
  o:[
    "Verbindungen und Gemische sind dasselbe – nur in verschiedenen Aggregatzuständen",
    "In einer chemischen Verbindung sind Elemente in festem Verhältnis chemisch gebunden (neue Eigenschaften); im Gemisch bleiben Stoffe mit eigenen Eigenschaften vermischt und trennbar",
    "Gemische entstehen immer durch Erhitzen, Verbindungen durch Abkühlen",
    "Verbindungen enthalten nur ein Element, Gemische mehrere"
  ], a:1,
  e:"Verbindung: festes Atomverhältnis, chem. Bindung, neue Eigenschaften (z.B. Al₂O₃ aus Al und O). Gemisch: Komponenten physikalisch vermischt, trennbar (z.B. Quarz + Feldspat + Kaolin im Versatz). Gemische können durch Sieben, Dekantieren usw. getrennt werden."},

{c:"Chemie", d:2,
  q:"Was versteht man unter pH-Wert und welche Bedeutung hat er für keramische Schlicker?",
  o:[
    "pH-Wert misst die Dichte des Schlickers – pH 7 = Normdichte",
    "pH-Wert misst die Konzentration der H⁺-Ionen: pH<7 sauer, pH=7 neutral, pH>7 basisch – beeinflusst Flockung, Stabilität und Viskosität des Schlickers",
    "pH-Wert gibt die Brenntemperatur des Versatzes an",
    "pH-Wert beschreibt die Korngröße im Schlicker"
  ], a:1,
  e:"pH = –log[H⁺]. In der Keramik: Schlicker-pH beeinflusst elektrostatische Abstoßung der Partikel (Zetapotenzial). Falscher pH → Flockung → Viskositätszunahme → schlechte Vergießbarkeit. Deflokulierung mit Soda (Na₂CO₃) oder Wasserglas erhöht pH und stabilisiert Schlicker."},

{c:"Chemie", d:2,
  q:"Was passiert beim Glühen von Kaolin (Al₂Si₂O₅(OH)₄) bei ca. 550 °C?",
  o:[
    "Kaolin schmilzt und bildet eine Glasphase",
    "Kaolin gibt sein Kristallwasser ab und wird zu Metakaolin (Al₂Si₂O₇) – die Kristallstruktur bricht zusammen",
    "Kaolin oxidiert zu Al₂O₃ und SiO₂ getrennt",
    "Kaolin wandelt sich in Mullit um"
  ], a:1,
  e:"Bei ~550 °C: Al₂Si₂O₅(OH)₄ → Al₂Si₂O₇ (Metakaolin) + 2 H₂O. Das Kristallwasser wird ausgetrieben, die Schichtstruktur kollabiert. Metakaolin ist reaktionsfreudig und wandelt sich bei ~980 °C weiter in Spinell und bei ~1.100 °C in Mullit um."},

{c:"Chemie", d:2,
  q:"Was ist Mullit und welche Bedeutung hat er in der Keramik?",
  o:[
    "Mullit ist ein Bindemittel aus organischen Verbindungen",
    "Mullit (3Al₂O₃·2SiO₂) ist eine hochfeuerfeste Verbindung, die beim Brand aus Kaolin entsteht – verleiht Keramik Festigkeit, Temperaturwechselbeständigkeit und Kriechfestigkeit",
    "Mullit ist eine Glasphase, die die Porosität abdichtet",
    "Mullit ist ein Flussmittel, das die Brenntemperatur senkt"
  ], a:1,
  e:"Mullit (Al₆Si₂O₁₃, 3Al₂O₃·2SiO₂): Schmelzpunkt ~1.850 °C, geringer Wärmeausdehnungskoeffizient, hohe Kriechfestigkeit. Entsteht beim Brand aus Metakaolin (~1.100 °C). Nadelförmige Mullitkriställchen verstärken die Keramikmatrix → wichtige Hochtemperaturkeramik."},

{c:"Chemie", d:3,
  q:"Was ist eine Eutektikum und welche praktische Bedeutung hat es in der Keramik?",
  o:[
    "Ein Eutektikum ist der Punkt maximaler Festigkeit eines Werkstoffs",
    "Das Eutektikum ist der Punkt im Phasendiagramm mit dem niedrigsten Schmelzpunkt eines Gemisches – in der Keramik entstehen dort ungewollte Frühschmelzen oder werden gezielt als Sinterunterstützung genutzt",
    "Eutektikum bezeichnet die höchste erreichbare Temperatur in einem System",
    "Ein Eutektikum ist eine spezielle Glasurart mit zwei Schmelzpunkten"
  ], a:1,
  e:"Eutektikum: Mischung mit minimalem Schmelzpunkt im Phasendiagramm. Beispiel: SiO₂-Al₂O₃-Eutektikum bei ~1.587 °C. Gefahr: Verunreinigungen (z.B. Na₂O, K₂O) senken das Eutektikum drastisch → Frühschmelzen bei unerwünschten Temperaturen. Gezielte Nutzung: Sinterunterstützung durch Flussmittel."},

{c:"Chemie", d:2,
  q:"Was ist Oxidation und Reduktion – und wie hängen beide zusammen?",
  o:[
    "Oxidation = Sauerstoffaufnahme; Reduktion = Sauerstoffabgabe – beide laufen immer gleichzeitig ab (Redoxreaktion)",
    "Oxidation findet bei hohen Temperaturen statt, Reduktion bei niedrigen",
    "Oxidation ist exotherm, Reduktion immer endotherm",
    "Beide sind dasselbe – nur unterschiedliche Bezeichnungen je nach Blickwinkel"
  ], a:0,
  e:"Oxidation: Elektronenabgabe / Sauerstoffaufnahme (z.B. Fe²⁺ → Fe³⁺). Reduktion: Elektronenaufnahme / Sauerstoffabgabe (Fe³⁺ → Fe²⁺). Redoxpaare laufen immer zusammen ab. Im Keramikofen: oxidierende Atmosphäre (Luftüberschuss) vs. reduzierende Atmosphäre (Luftmangel) beeinflusst Farbe und Eigenschaften."},

{c:"Umwelttechnik", d:1,
  q:"Was sind die wichtigsten Luftschadstoffe, die bei der Keramikproduktion entstehen können?",
  o:[
    "Nur CO₂ – alle anderen Schadstoffe entstehen nicht bei keramischen Prozessen",
    "NOₓ (Stickoxide), SO₂ (Schwefeldioxid), CO (Kohlenmonoxid), Staub/Feinstaub und Fluor-/Chlorverbindungen",
    "Nur Lärm und Wärme – gasförmige Schadstoffe entstehen nicht",
    "Ausschließlich Schwermetalle aus den Pigmenten"
  ], a:1,
  e:"Keramische Prozesse emittieren: NOₓ (aus Brennern, Hochtemperaturprozessen), SO₂ (aus schwefelhaltigen Rohstoffen), CO (unvollständige Verbrennung), Staub (Aufbereitung, Transport), HF/HCl (aus fluorid-/chloridhaltigen Rohstoffen). Alle unterliegen der TA Luft."},

{c:"Umwelttechnik", d:2,
  q:"Welches Verfahren wird zur Entstaubung von Abluft in der Keramikfertigung am häufigsten eingesetzt?",
  o:[
    "Destillation",
    "Gewebefilter (Schlauchfilter) oder Elektroabscheider – beide erzielen sehr hohe Abscheidegrade >99 %",
    "Zentrifuge – schleudert Staubpartikel aus der Luft",
    "Aktivkohlefilter – adsorbiert alle Partikel"
  ], a:1,
  e:"Gewebefilter: Abluft strömt durch Filterschläuche → Partikel bleiben hängen → periodische Abreinigung (Druckstoß). Elektroabscheider (ESP): Partikel werden elektrostatisch aufgeladen und an Elektroden abgeschieden. Beide: Abscheidegräde >99 %, geeignet für Feinstaub <PM10."},

{c:"Umwelttechnik", d:2,
  q:"Was ist der Unterschied zwischen primären und sekundären Umweltschutzmaßnahmen?",
  o:[
    "Primär = teuer, sekundär = günstig",
    "Primäre Maßnahmen vermeiden Schadstoffe an der Entstehung (z.B. Brenneroptimierung, saubere Rohstoffe); sekundäre Maßnahmen behandeln bereits entstandene Schadstoffe (z.B. Filteranlagen, Rauchgasreinigung)",
    "Primär = gesetzlich vorgeschrieben; sekundär = freiwillig",
    "Primärmaßnahmen wirken im Ofen, Sekundärmaßnahmen außerhalb des Werks"
  ], a:1,
  e:"Integrierter Umweltschutz (primär): Schadstoffe gar nicht erst entstehen lassen – z.B. optimierte Brenner (NOₓ-arm), halogenarme Rohstoffe, Energierückgewinnung. End-of-pipe (sekundär): entstandene Schadstoffe nachträglich entfernen – Filteranlagen, SCR-Katalysatoren, Wäscher. Primär ist ökologisch und oft wirtschaftlich vorzuziehen."},

{c:"Umwelttechnik", d:2,
  q:"Was versteht man unter dem Energieeffizienzkonzept 'Abwärmenutzung' und welche Techniken werden eingesetzt?",
  o:[
    "Abwärme wird ins Stromnetz eingespeist – einzige wirtschaftliche Nutzungsform",
    "Abwärme aus Ofen/Abgas wird für Trocknungsanlagen, Hallenwärme oder Vorwärmung der Verbrennungsluft genutzt – Techniken: Wärmetauscher, Rekuperator, Abgasrückführung",
    "Abwärme wird durch Kühlung vernichtet – das ist die sicherste Methode",
    "Abwärmenutzung ist in der Keramik nicht möglich wegen zu hoher Temperaturen"
  ], a:1,
  e:"Abwärmenutzung spart bis zu 30 % Energie. Typische Systeme: Abgaswärme heizt Trocknungsanlage (100–300 °C nutzbar), vorgeheizte Verbrennungsluft reduziert Gasverbrauch, Tunnelofenkühlzone heizt Trockner. Rekuperatoren/Regeneratoren gewinnen 40–70 % der Abgaswärme zurück."},

{c:"Trockentechnik", d:1,
  q:"Welche zwei Trocknungsphasen werden bei der keramischen Trocknung unterschieden?",
  o:[
    "Aufwärmphase und Abkühlphase",
    "Erster Trockenabschnitt (konstante Trocknungsrate, freies Wasser verdunstet) und zweiter Trockenabschnitt (sinkende Rate, gebundenes Wasser diffundiert nach außen)",
    "Nassphase und Trockenphase – mehr Phasen gibt es nicht",
    "Oberflächentrocknung und Kerntrocknung – beide laufen gleichzeitig ab"
  ], a:1,
  e:"1. Trockenabschnitt: freies Wasser an der Oberfläche verdunstet, Trocknungsrate konstant, Schwindung findet statt. 2. Trockenabschnitt: freies Wasser verbraucht, gebundenes Wasser muss durch Kapillaren diffundieren, Rate sinkt, Schwindung abgeschlossen. Übergangspunkt = kritischer Feuchtegehalt."},

{c:"Trockentechnik", d:2,
  q:"Warum entstehen Trocknungsrisse und wie werden sie vermieden?",
  o:[
    "Trocknungsrisse entstehen durch zu langes Trocknen – schnell Trocknen verhindert sie",
    "Zu schnelle oder ungleichmäßige Trocknung → Außenhaut schwindet, Kern ist noch feucht → Zugspannungen → Risse. Lösung: langsame, gleichmäßige Trocknung mit hoher Anfangsluftfeuchtigkeit",
    "Trocknungsrisse entstehen nur bei Massen mit zu hohem Tongehalt – Lösung: mehr Magerungsmittel",
    "Risse entstehen durch chemische Reaktion des Tons mit Luftsauerstoff"
  ], a:1,
  e:"Außenhaut trocknet und schwindet zuerst → innen noch feucht und größer → Zugspannungen → Risse. Gegenmaßnahmen: hohe Anfangsluftfeuchtigkeit (verlangsamt Oberflächentrocknung), niedrige Anfangstemperatur, gleichmäßige Luftführung, Magerungsmittel reduzieren Gesamtschwindung."},

{c:"Trockentechnik", d:2,
  q:"Was ist der Unterschied zwischen Kammertrockner und Tunneltrockner?",
  o:[
    "Kammertrockner ist für Ziegelei, Tunneltrockner nur für Sanitärkeramik",
    "Kammertrockner: diskontinuierlich, Ware steht still, Luft zirkuliert. Tunneltrockner: kontinuierlich, Ware wird auf Wagen durchgefahren, Temperaturgradient entlang des Tunnels",
    "Tunneltrockner hat höhere Temperaturen als Kammertrockner",
    "Es gibt keinen Unterschied – beide arbeiten nach demselben Prinzip"
  ], a:1,
  e:"Kammertrockner: Chargenweise, Ware wird eingefahren, Trocknung, Entnahme → Flexibel, aber Energieverluste durch Aufheizen der leeren Kammer. Tunneltrockner: Kontinuierlich, Ware durchläuft Zonen (feucht-warm → trocken-heiß), Gegenstromprinzip → energieeffizienter, besser für Massenproduktion."},

{c:"Trockentechnik", d:3,
  q:"Was ist das Mollier-Diagramm (h-x-Diagramm) und wozu wird es in der Trockentechnik genutzt?",
  o:[
    "Ein Diagramm zur Berechnung der Brennkurve im Ofen",
    "Ein Diagramm für feuchte Luft: zeigt Zusammenhang zwischen Enthalpie, Wassergehalt, Temperatur und relativer Feuchte – ermöglicht Auslegung und Optimierung von Trocknungsanlagen",
    "Ein Sicherheitsdiagramm für Explosionsgrenzen bei der Trocknung",
    "Ein Diagramm zur Darstellung der Schwindungskurve während der Trocknung"
  ], a:1,
  e:"Mollier h-x-Diagramm: x-Achse = Wasserbeladung der Luft [g/kg], y-Achse = spezifische Enthalpie [kJ/kg]. Zeigt: Sättigungskurve, Isothermen, relative Feuchtelinien. Anwendung: Berechnung von Zuluft-/Abluftmengen, Energiebedarf, Kondensationspunkte → Grundlage der Trocknerauslegung."},

{c:"Fertigungstechnik", d:1,
  q:"Welche Formgebungsverfahren werden in der Keramik nach dem Zustand der Masse unterschieden?",
  o:[
    "Heißverfahren und Kaltverfahren",
    "Plastische Verfahren (Strangpressen, Drehen), Gießverfahren (Schlickerguss), Pressverfahren (Trocken-/Isostatisches Pressen)",
    "Manuelle und maschinelle Verfahren – das ist die einzig sinnvolle Einteilung",
    "Nur Pressen und Gießen – andere Verfahren sind in der Industrie nicht relevant"
  ], a:1,
  e:"Einteilung nach Massenzustand: plastisch (20–30 % Wasser) → Strangpressen, Drehen, Walzen. Gießfähig (30–40 % Wasser) → Schlickerguss. Pressfähig (0–8 % Wasser) → Trockenpressen, isostatisches Pressen. Jedes Verfahren hat spezifische Vor- und Nachteile."},

{c:"Fertigungstechnik", d:2,
  q:"Was ist isostatisches Pressen und welchen Vorteil hat es gegenüber dem axialen Pressen?",
  o:[
    "Isostatisches Pressen verwendet höheren Druck – der Vorteil ist mehr Dichte",
    "Beim isostatischen Pressen wird Druck von allen Seiten gleichmäßig aufgebracht (über Flüssigkeit/Gas) → gleichmäßige Dichte und Schwindung im gesamten Teil, keine Randzonenprobleme",
    "Isostatisches Pressen ist billiger, daher immer bevorzugt",
    "Beim isostatischen Pressen wird die Masse erhitzt, was die Dichte erhöht"
  ], a:1,
  e:"Axiales Pressen: Druck nur von oben/unten → Dichtegradient (außen dichter als innen) → ungleiche Schwindung. Isostatisches Pressen: Druck allseitig gleichmäßig → homogene Rohdichte → gleichmäßige Schwindung → maßhaltigere Teile, besonders vorteilhaft bei komplexen Geometrien."},

{c:"Fertigungstechnik", d:2,
  q:"Was ist beim Schlickerguss der Unterschied zwischen Hohlguss und Vollguss?",
  o:[
    "Beim Hohlguss wird heißer Schlicker verwendet, beim Vollguss kalter",
    "Hohlguss: überschüssiger Schlicker wird nach Scherbenbildung ausgegossen → hohles Teil. Vollguss: Schlicker verbleibt vollständig in der Form → massives Teil",
    "Vollguss ist nur für sehr kleine Teile geeignet",
    "Es gibt keinen Unterschied in der Praxis – beide Begriffe beschreiben denselben Vorgang"
  ], a:1,
  e:"Hohlguss (Sanitär, Vasen): Schlicker in Gipsform → Wasser wird absorbiert → Scherben bildet sich → bei gewünschter Wandstärke Restschlicker ausgießen → hohler Körper. Vollguss (Griffe, massive Teile): Schlicker vollständig in der Form → Gips saugt gesamtes Wasser auf → massiver Körper."},

{c:"Fertigungstechnik", d:3,
  q:"Warum wird Gips als Formmaterial beim Schlickerguss eingesetzt?",
  o:[
    "Weil Gips sehr hart ist und lange Standzeiten ermöglicht",
    "Weil Gips eine hohe Kapillarporosität (ca. 40–50 %) besitzt und Wasser aus dem Schlicker durch Kapillarkräfte aufsaugt – das ermöglicht Scherbenbildung ohne äußeren Druck",
    "Wegen des niedrigen Preises – andere Materialien wären zu teuer",
    "Weil Gips sich leicht von der fertigen Keramik löst – andere Materialien würden haften"
  ], a:1,
  e:"Gipshalbhydrat (CaSO₄·½H₂O) → beim Abbinden entsteht poröses CaSO₄·2H₂O-Gefüge mit ~40–50 % offener Porosität. Kapillarkräfte saugen Wasser aus dem Schlicker → Feststoffpartikel werden an der Formwand abgelagert → Scherbenbildung. Nachteil: begrenzte Formstandzeit (~50–200 Abgüsse)."},

{
c:"Trocknung",
d:1,
q:"Welche Eigenschaft der Luft bestimmt, wie viel Wasserdampf sie maximal aufnehmen kann?",
o:[
"Der Luftdruck",
"Die Lufttemperatur",
"Die Luftgeschwindigkeit",
"Die Luftdichte"
],
a:1,
e:"Je höher die Lufttemperatur, desto mehr Wasserdampf kann die Luft aufnehmen."
},

{
c:"Trocknung",
d:2,
q:"Warum sollte keramische Ware möglichst gleichmäßig trocknen?",
o:[
"Um eine gleichmäßige Farbe zu erhalten",
"Um Spannungen und Rissbildung zu vermeiden",
"Um Energie zu sparen",
"Um den Brennprozess zu verkürzen"
],
a:1,
e:"Ungleichmäßige Trocknung führt zu Spannungen im Scherben und kann Risse oder Verformungen verursachen."
},

{
c:"Trocknung",
d:2,
q:"Welche Maßnahme kann helfen, Verformungen beim Trocknen zu vermeiden?",
o:[
"Sehr hohe Trocknungstemperaturen",
"Sehr schnelle Luftbewegung",
"Langsame und gleichmäßige Trocknung",
"Direkte Sonneneinstrahlung"
],
a:2,
e:"Eine langsame und gleichmäßige Trocknung reduziert Spannungen im Scherben."
},

{
c:"Trocknung",
d:2,
q:"Was beschreibt der Begriff 'relative Luftfeuchtigkeit'?",
o:[
"Die absolute Menge Wasser in der Luft",
"Den Anteil der aktuell vorhandenen Feuchte im Verhältnis zur maximal möglichen",
"Die Temperatur der Luft",
"Den Luftdruck"
],
a:1,
e:"Relative Luftfeuchte beschreibt das Verhältnis zwischen vorhandener und maximal möglicher Wasserdampfmenge."
},

{
c:"Trocknung",
d:3,
q:"Warum wird in Trocknern häufig Luft bewegt?",
o:[
"Um den Sauerstoffgehalt zu erhöhen",
"Um die Luftfeuchtigkeit schneller abzutransportieren",
"Um die Ware zu kühlen",
"Um den Luftdruck zu erhöhen"
],
a:1,
e:"Luftbewegung transportiert feuchte Luft ab und ersetzt sie durch trockenere Luft."
},

{
c:"Trocknung",
d:2,
q:"Warum trocknen dünnwandige keramische Produkte schneller als dickwandige?",
o:[
"Weil sie schwerer sind",
"Because they contain less water",
"Weil der Weg für den Wassertransport kürzer ist",
"Weil sie höhere Temperaturen haben"
],
a:2,
e:"Bei dünnen Wandstärken ist der Weg für den Feuchtetransport kürzer."
},

{
c:"Trocknung",
d:2,
q:"Was versteht man unter 'Kapillarwasser' im keramischen Scherben?",
o:[
"Chemisch gebundenes Wasser",
"Wasser in den Poren und Kapillaren",
"Wasser in der Luft",
"Oberflächenwasser nach dem Brennen"
],
a:1,
e:"Kapillarwasser befindet sich in den Poren und wird durch Kapillarkräfte transportiert."
},

{
c:"Trocknung",
d:3,
q:"Warum kann eine zu schnelle Oberflächentrocknung problematisch sein?",
o:[
"Die Oberfläche wird zu weich",
"Die Oberfläche schrumpft schneller als das Innere",
"Die Keramik wird zu schwer",
"Die Temperatur sinkt"
],
a:1,
e:"Wenn die Oberfläche schneller schrumpft als das Innere entstehen Spannungen."
},

{
c:"h/x Diagramm",
d:1,
q:"Was zeigt eine Linie konstanter relativer Feuchte im h/x-Diagramm?",
o:[
"Die maximale Temperatur",
"Den Verlauf gleicher relativer Feuchtewerte",
"Den Luftdruck",
"Die Luftgeschwindigkeit"
],
a:1,
e:"Linien gleicher relativer Feuchte zeigen Zustände mit gleichem Feuchteverhältnis."
},

{
c:"h/x Diagramm",
d:2,
q:"Was passiert mit der relativen Luftfeuchte, wenn Luft erwärmt wird ohne Wasser zuzuführen?",
o:[
"Sie steigt",
"Sie sinkt",
"Sie bleibt konstant",
"Sie wird 100%"
],
a:1,
e:"Warme Luft kann mehr Wasserdampf aufnehmen, daher sinkt die relative Feuchte."
},

{
c:"h/x Diagramm",
d:2,
q:"Was bedeutet eine Bewegung entlang einer h-Linie im h/x-Diagramm?",
o:[
"Konstante Enthalpie",
"Konstante Temperatur",
"Konstanter Druck",
"Konstante Luftgeschwindigkeit"
],
a:0,
e:"Die h-Linie beschreibt Zustände gleicher Enthalpie."
},

{
c:"h/x Diagramm",
d:3,
q:"Was passiert im h/x-Diagramm bei einer idealen Trocknung ohne Zwischenaufheizung?",
o:[
"Die Luft bewegt sich entlang einer Enthalpielinie",
"Die Luft bleibt konstant",
"Die Temperatur steigt ständig",
"Die Feuchte bleibt konstant"
],
a:0,
e:"Bei idealer Trocknung bleibt die Enthalpie theoretisch konstant."
},

{
c:"h/x Diagramm",
d:2,
q:"Was zeigt der Nullpunkt im h/x-Diagramm?",
o:[
"Trockene Luft ohne Wasserdampf",
"Luft bei 100°C",
"Luft bei 100% Feuchte",
"Den höchsten Energiegehalt"
],
a:0,
e:"Der Nullpunkt beschreibt trockene Luft ohne Wasserdampf."
},

{
c:"Messtechnik",
d:1,
q:"Was misst ein Psychrometer grundsätzlich?",
o:[
"Luftdruck",
"Luftfeuchtigkeit",
"Luftgeschwindigkeit",
"Luftdichte"
],
a:1,
e:"Psychrometer messen die Luftfeuchtigkeit über Temperaturdifferenzen."
},

{c:"Messtechnik",
d:2,
q:"Warum ist beim Psychrometer ein Luftstrom wichtig?",
o:[
"Er kühlt das Gerät",
"Er sorgt für eine korrekte Verdunstung am Feuchtthermometer",
"Er erhöht den Luftdruck",
"Er erwärmt das Wasser"
],
a:1,
e:"Der Luftstrom sorgt für eine definierte Verdunstung am Feuchtthermometer."
},

{
c:"Messtechnik",
d:2,
q:"Was passiert mit der Feuchtkugeltemperatur bei trockener Luft?",
o:[
"Sie steigt",
"Sie sinkt deutlich",
"Sie bleibt gleich",
"Sie erreicht 100°C"
],
a:1,
e:"Bei trockener Luft verdunstet mehr Wasser, wodurch die Temperatur sinkt."
},

{
c:"Messtechnik",
d:2,
q:"Was zeigt eine große Differenz zwischen Trocken- und Feuchtkugeltemperatur an?",
o:[
"Hohe Luftfeuchtigkeit",
"Geringe Luftfeuchtigkeit",
"Hohe Luftgeschwindigkeit",
"Niedrigen Luftdruck"
],
a:1,
e:"Je trockener die Luft, desto stärker ist die Verdunstung und damit die Temperaturdifferenz."
},

{
c:"Trocknung",
d:2,
q:"Warum wird in vielen Trocknern die Luft vorgewärmt?",
o:[
"Um die Ware zu kühlen",
"Um die Wasseraufnahmefähigkeit der Luft zu erhöhen",
"Um den Luftdruck zu erhöhen",
"Um den Brennvorgang zu starten"
],
a:1,
e:"Warme Luft kann mehr Wasserdampf aufnehmen und verbessert so die Trocknung."
},

{
c:"Trocknung",
d:3,
q:"Warum wird Abluft aus Trocknern häufig abgeführt?",
o:[
"Um den Sauerstoff zu erhöhen",
"Um feuchte Luft zu entfernen",
"Um den Druck zu reduzieren",
"Um Energie zu sparen"
],
a:1,
e:"Die feuchte Luft muss entfernt werden, damit neue trockene Luft Feuchtigkeit aufnehmen kann."
},

{
c:"Trocknung",
d:2,
q:"Welche Größe beschreibt die Wasserdampfmenge pro kg trockener Luft?",
o:[
"Relative Feuchte",
"Absolute Feuchte",
"Temperatur",
"Luftdruck"
],
a:1,
e:"Absolute Feuchte gibt die Wasserdampfmenge pro kg trockene Luft an."
},

{
c:"Trocknung",
d:1,
q:"Welchen Einfluss hat eine hohe Luftfeuchtigkeit auf die Verdampfung von Wasser?",
o:[
"Die Verdampfung wird beschleunigt",
"Die Verdampfung wird verlangsamt",
"Die Verdampfung bleibt unverändert",
"Die Verdampfung stoppt vollständig"
],
a:1,
e:"Je höher die relative Luftfeuchtigkeit, desto geringer ist das Aufnahmevermögen der Luft für weiteren Wasserdampf. Dadurch verlangsamt sich die Verdampfung."
},

{
c:"Trocknung",
d:1,
q:"Bei welcher Temperatur beginnt Wasser zu verdunsten?",
o:[
"Erst ab 100°C",
"Erst ab 50°C",
"Bei jeder Temperatur oberhalb des Gefrierpunkts",
"Erst ab 20°C"
],
a:2,
e:"Verdunstung findet bei jeder Temperatur statt, solange Wasser vorhanden ist. Die Geschwindigkeit steigt jedoch mit der Temperatur."
},

{
c:"Trocknung",
d:2,
q:"Wo trocknet eine plastisch geformte keramische Ware zuerst?",
o:[
"Im Inneren des Scherbens",
"An der Oberfläche des Scherbens",
"Gleichmäßig im gesamten Scherben",
"Nur an den dicksten Stellen"
],
a:1,
e:"Die Verdunstung beginnt an der Oberfläche. Von dort wird Wasser durch Kapillarkräfte aus dem Inneren nachtransportiert."
},

{
c:"Trocknung",
d:2,
q:"Warum können beim Trocknen keramischer Ware Risse entstehen?",
o:[
"Weil sich die Oberfläche stärker ausdehnt als das Innere",
"Weil unterschiedliche Trocknungsgeschwindigkeiten Spannungen erzeugen",
"Weil die Keramik während der Trocknung schmilzt",
"Weil Wasser chemisch gebunden wird"
],
a:1,
e:"Wenn die Oberfläche schneller trocknet als das Innere, entstehen Spannungen im Scherben, die zu Rissen führen können."
},

{
c:"Trocknung",
d:2,
q:"Was geschieht beim Übertrocknen keramischer Scherben?",
o:[
"Die Ware wird mechanisch stabiler",
"Der Scherben verliert seine Restfeuchte vollständig und wird spröde",
"Die Ware beginnt zu schmelzen",
"Der Scherben nimmt wieder Wasser auf"
],
a:1,
e:"Beim Übertrocknen wird dem Scherben zu viel Wasser entzogen, wodurch er spröde wird und leicht beschädigt werden kann."
},

{
c:"Trocknung",
d:2,
q:"Was verbessert den Kapillartransport von Wasser im keramischen Scherben?",
o:[
"Kleinere Poren und Kapillaren",
"Größere, zusammenhängende Poren",
"Eine vollständig glatte Oberfläche",
"Eine niedrigere Temperatur"
],
a:1,
e:"Größere und zusammenhängende Poren erleichtern den Transport von Wasser durch Kapillarkräfte."
},

{
c:"Trocknung",
d:2,
q:"Welche Feuchte beeinflusst maßgeblich die Trocknungsgeschwindigkeit?",
o:[
"Absolute Feuchte der Luft",
"Relative Feuchte der Luft",
"Feuchte des Ofens",
"Luftdruck"
],
a:1,
e:"Die relative Luftfeuchtigkeit bestimmt, wie viel Wasserdampf die Luft noch aufnehmen kann."
},

{
c:"Trocknung",
d:3,
q:"Welche drei Abschnitte treten typischerweise im Trocknungsprozess auf?",
o:[
"Aufheizen – Schmelzen – Abkühlen",
"Anwärmen – Verdampfen – Kondensieren",
"Aufheizphase – konstante Trocknungsphase – fallende Trocknungsphase",
"Verdichten – Brennen – Abkühlen"
],
a:2,
e:"Ein idealer Trocknungsprozess besteht aus Aufheizphase, konstanter Trocknungsrate und fallender Trocknungsrate."
},

{
c:"Trocknung",
d:2,
q:"Was passiert mit der Trocknungsgeschwindigkeit bei steigender Lufttemperatur?",
o:[
"Sie nimmt ab",
"Sie bleibt konstant",
"Sie nimmt zu",
"Sie wird unabhängig von der Luftfeuchte"
],
a:2,
e:"Höhere Temperaturen erhöhen die Verdunstungsrate und beschleunigen die Trocknung."
},

{
c:"h/x Diagramm",
d:1,
q:"Welche Größen sind im h/x-Diagramm dargestellt?",
o:[
"Temperatur und Druck",
"Enthalpie und absolute Feuchte",
"Relative Feuchte und Druck",
"Temperatur und Luftgeschwindigkeit"
],
a:1,
e:"Im h/x-Diagramm werden Enthalpie (h) und absolute Feuchte (x) dargestellt."
},

{
c:"h/x Diagramm",
d:1,
q:"Was beschreibt die absolute Feuchte x der Luft?",
o:[
"Den Anteil Wasserdampf pro kg trockene Luft",
"Den prozentualen Wassergehalt der Luft",
"Die Temperatur der Luft",
"Den Luftdruck"
],
a:0,
e:"Absolute Feuchte beschreibt die Masse an Wasserdampf pro kg trockener Luft."
},

{
c:"h/x Diagramm",
d:2,
q:"Welche Rolle spielt die Temperatur bei der Trocknung?",
o:[
"Sie hat keinen Einfluss",
"Sie bestimmt die maximale Wasserdampfaufnahme der Luft",
"Sie beeinflusst nur den Druck",
"Sie verändert nur die Farbe der Ware"
],
a:1,
e:"Mit steigender Temperatur kann Luft mehr Wasserdampf aufnehmen."
},

{
c:"Messtechnik",
d:2,
q:"Wozu dient ein Assmann-Psychrometer?",
o:[
"Zur Messung der Luftgeschwindigkeit",
"Zur Bestimmung der relativen Luftfeuchte",
"Zur Messung der Lufttemperatur im Ofen",
"Zur Bestimmung des Luftdrucks"
],
a:1,
e:"Ein Assmann-Psychrometer misst Trocken- und Feuchtkugeltemperatur zur Bestimmung der relativen Luftfeuchte."
},

{
c:"Messtechnik",
d:2,
q:"Welche zwei Temperaturen werden beim Assmann-Psychrometer gemessen?",
o:[
"Ofentemperatur und Umgebungstemperatur",
"Trocken- und Feuchtkugeltemperatur",
"Taupunkt und Siedepunkt",
"Verdampfungs- und Kondensationstemperatur"
],
a:1,
e:"Das Gerät misst Trocken- und Feuchtkugeltemperatur. Aus der Differenz wird die Luftfeuchte berechnet."
},

{
c:"Messtechnik",
d:3,
q:"Was passiert, wenn der Baumwollstrumpf eines Assmann-Psychrometers austrocknet?",
o:[
"Die Messung wird genauer",
"Die Feuchtkugeltemperatur wird zu hoch gemessen",
"Die Luftfeuchte wird zu hoch berechnet",
"Die Temperatur sinkt stark"
],
a:1,
e:"Ist der Strumpf trocken, findet keine Verdunstung statt und die Feuchtkugel zeigt eine zu hohe Temperatur."
},

{
c:"Verbrennung",
d:1,
q:"Was versteht man unter einer Verbrennung?",
o:[
"Eine physikalische Reaktion ohne Energieabgabe",
"Eine chemische Reaktion eines Stoffes mit Sauerstoff unter Energieabgabe",
"Eine Verdampfung von Wasser",
"Eine mechanische Reaktion von Gasen"
],
a:1,
e:"Verbrennung ist eine chemische Reaktion eines Brennstoffs mit Sauerstoff, bei der Wärme und meist auch Licht entstehen."
},

{
c:"Verbrennung",
d:1,
q:"Welche drei Voraussetzungen müssen für eine Verbrennung erfüllt sein?",
o:[
"Brennstoff, Sauerstoff und Zündenergie",
"Sauerstoff, Wasser und Druck",
"Brennstoff, Wasser und Hitze",
"Sauerstoff, Luftdruck und Temperatur"
],
a:0,
e:"Das sogenannte 'Feuerdreieck' besteht aus Brennstoff, Sauerstoff und einer Zündquelle."
},

{
c:"Verbrennung",
d:2,
q:"Was versteht man unter der Zündgrenze eines Gases?",
o:[
"Den Temperaturbereich eines Gases",
"Den Konzentrationsbereich eines Gases, in dem es mit Luft zündfähig ist",
"Die maximale Temperatur eines Gases",
"Den Druckbereich eines Gases"
],
a:1,
e:"Die Zündgrenze beschreibt den Konzentrationsbereich eines brennbaren Gases in Luft, in dem eine Explosion oder Verbrennung möglich ist."
},

{
c:"Verbrennung",
d:2,
q:"In welchem Bereich liegen ungefähr die Zündgrenzen von Erdgas in Luft?",
o:[
"1% – 5%",
"5% – 15%",
"15% – 30%",
"30% – 50%"
],
a:1,
e:"Erdgas ist etwa zwischen 5% und 15% Anteil in Luft zündfähig."
},

{
c:"Verbrennung",
d:2,
q:"Was beschreibt der Heizwert eines Brennstoffes?",
o:[
"Die maximale Flammentemperatur",
"Die nutzbare Wärmemenge bei vollständiger Verbrennung ohne Kondensation",
"Die Verbrennungsgeschwindigkeit",
"Den Sauerstoffgehalt eines Brennstoffes"
],
a:1,
e:"Der Heizwert beschreibt die nutzbare Wärmemenge bei vollständiger Verbrennung ohne Kondensation des Wasserdampfes."
},

{
c:"Verbrennung",
d:2,
q:"Was beschreibt der Brennwert eines Brennstoffes?",
o:[
"Die Wärmemenge ohne Kondensationswärme",
"Die gesamte Wärmemenge inklusive Kondensationswärme",
"Die Temperatur der Flamme",
"Den Sauerstoffbedarf"
],
a:1,
e:"Der Brennwert enthält zusätzlich die Kondensationswärme des Wasserdampfes."
},

{
c:"Verbrennung",
d:1,
q:"Was ist ein Mol?",
o:[
"Eine Volumeneinheit für Gas",
"Eine Stoffmenge mit einer bestimmten Anzahl Teilchen",
"Eine Masseeinheit",
"Eine Energieeinheit"
],
a:1,
e:"Ein Mol enthält genau 6,023 × 10²³ Teilchen (Avogadro-Zahl)."
},

{
c:"Verbrennung",
d:2,
q:"Was beschreibt der theoretische Sauerstoffbedarf?",
o:[
"Die tatsächlich verwendete Sauerstoffmenge",
"Die minimale Sauerstoffmenge für vollständige Verbrennung",
"Die maximale Sauerstoffmenge",
"Die Sauerstoffmenge im Abgas"
],
a:1,
e:"Der theoretische Sauerstoffbedarf ist die minimale Sauerstoffmenge für eine vollständige Verbrennung."
},

{
c:"Verbrennung",
d:2,
q:"Was beschreibt der theoretische Luftbedarf?",
o:[
"Die minimale Luftmenge für vollständige Verbrennung",
"Die maximale Luftmenge",
"Die Luftmenge im Ofenraum",
"Die Luftgeschwindigkeit"
],
a:0,
e:"Der theoretische Luftbedarf beschreibt die Luftmenge, die zur vollständigen Verbrennung notwendig ist."
},

{
c:"Verbrennung",
d:2,
q:"Woraus besteht Luft hauptsächlich?",
o:[
"Sauerstoff und Stickstoff",
"Kohlendioxid und Sauerstoff",
"Stickstoff und Wasserstoff",
"Sauerstoff und Helium"
],
a:0,
e:"Luft besteht zu etwa 78% aus Stickstoff und etwa 21% aus Sauerstoff."
},

{
c:"Verbrennung",
d:3,
q:"Was beschreibt der Luftfaktor λ (Lambda)?",
o:[
"Die Luftgeschwindigkeit",
"Das Verhältnis von tatsächlicher zu theoretischer Luftmenge",
"Die Temperatur der Luft",
"Die Dichte der Luft"
],
a:1,
e:"λ beschreibt das Verhältnis der zugeführten Luft zur theoretisch notwendigen Luftmenge."
},

{
c:"Verbrennung",
d:2,
q:"Was bedeutet λ = 1?",
o:[
"Zu wenig Luft",
"Genau theoretische Luftmenge (neutrale Verbrennung)",
"Zu viel Luft",
"Keine Verbrennung"
],
a:1,
e:"λ = 1 bedeutet stöchiometrische bzw. neutrale Verbrennung."
},

{
c:"Verbrennung",
d:2,
q:"Was bedeutet eine reduzierende Brennatmosphäre?",
o:[
"Zu viel Sauerstoff",
"Zu wenig Sauerstoff",
"Sehr hohe Temperatur",
"Sehr niedrige Temperatur"
],
a:1,
e:"Bei reduzierender Atmosphäre ist weniger Sauerstoff vorhanden als für vollständige Verbrennung nötig."
},

{
c:"Verbrennung",
d:2,
q:"Warum wird keramische Ware bis etwa 600–700°C oxidierend gebrannt?",
o:[
"Um Energie zu sparen",
"Um organische Bestandteile vollständig zu verbrennen",
"Um die Temperatur zu erhöhen",
"Um die Brenndauer zu verkürzen"
],
a:1,
e:"Organische Bestandteile und Bindemittel müssen zunächst vollständig oxidierend verbrannt werden."
},

{
c:"Verbrennung",
d:2,
q:"Woran erkennt man eine reduzierende Ofenatmosphäre?",
o:[
"An starkem Sauerstoffüberschuss",
"An unverbrannten Gasen im Abgas",
"An niedrigem Luftdruck",
"An niedriger Temperatur"
],
a:1,
e:"Bei reduzierender Atmosphäre entstehen unverbrannte Gase wie CO."
},

{
c:"Ofentechnik",
d:2,
q:"Was versteht man unter Primärluft?",
o:[
"Luft, die direkt mit dem Brennstoff gemischt wird",
"Luft außerhalb des Ofens",
"Luft zur Kühlung",
"Abgasluft"
],
a:0,
e:"Primärluft wird direkt mit dem Brennstoff gemischt und ist für die Verbrennung notwendig."
},

{
c:"Ofentechnik",
d:2,
q:"Was versteht man unter Sekundärluft?",
o:[
"Luft zur Nachverbrennung außerhalb der Flamme",
"Luft im Gasnetz",
"Luft im Abgas",
"Luft im Brenner"
],
a:0,
e:"Sekundärluft dient zur vollständigen Verbrennung außerhalb der Primärflamme."
},

{
c:"Ofentechnik",
d:2,
q:"Was ist Diffusionsluft?",
o:[
"Luft, die sich durch Diffusion mit dem Brenngas mischt",
"Luft im Abgasrohr",
"Luft im Brennstoff",
"Kühlungsluft"
],
a:0,
e:"Diffusionsluft mischt sich erst im Ofenraum mit dem Brenngas."
},

{
c:"Ofentechnik",
d:3,
q:"Warum wird nicht einfach sehr viel Primärluft zugegeben?",
o:[
"Die Flamme würde instabil werden",
"Die Temperatur würde sinken",
"Die Verbrennung würde langsamer",
"Alle Antworten sind richtig"
],
a:3,
e:"Zu viel Primärluft kann Flammeninstabilität und niedrigere Flammentemperaturen verursachen."
},

{
c:"Ofentechnik",
d:2,
q:"Wie sollte der Ofendruck in einem Brennofen eingestellt sein?",
o:[
"Stark negativ",
"Leicht positiv",
"Sehr stark positiv",
"Unabhängig vom Prozess"
],
a:1,
e:"Ein leicht positiver Ofendruck verhindert das Eindringen von Falschluft."
},
  
// ════════════════════════════════════════════════════════════
//  NEUE CHEMIE-FRAGEN – Meisterkurs Keramik
//  Themen: Bindungsarten, Säuren & Basen, Reaktionstypen,
//          Periodensystem, Thermochemie
//  Schwierigkeit: d:1 / d:2 / d:3
// ════════════════════════════════════════════════════════════

// ── BINDUNGSARTEN ───────────────────────────────────────────

{c:"Chemie", d:1, q:"Was kennzeichnet eine metallische Bindung?",
  o:["Elektronen werden übertragen", "Elektronen werden geteilt", "Frei bewegliche Elektronen (Elektronengas) umgeben positive Metallionen", "Ionen ziehen sich elektrostatisch an"], a:2,
  e:"Metallische Bindung: Valenzelektronen sind delokalisiert (Elektronengas) → gute elektrische Leitfähigkeit, Duktilität."},

{c:"Chemie", d:1, q:"Was ist der Unterschied zwischen Ionen- und Atombindung?",
  o:["Ionenbindung: Elektronen geteilt; Atombindung: übertragen", "Ionenbindung: Elektronen übertragen (Metall→Nichtmetall); Atombindung: Elektronen geteilt (Nichtmetall+Nichtmetall)", "Beide sind identisch", "Ionenbindung nur in Gasen; Atombindung nur in Festkörpern"], a:1,
  e:"Ionenbindung: Elektronenübertragung → Ionen. Atombindung (kovalent): gemeinsame Elektronenpaare zwischen Nichtmetallen."},

{c:"Chemie", d:2, q:"Welche Bindungsart liegt in SiO₂ (Quarz) vor?",
  o:["Ionenbindung", "Metallische Bindung", "Van-der-Waals-Bindung", "Kovalente (polare) Atombindung in einem Netzwerk"], a:3,
  e:"SiO₂: kovalentes Netzwerk. Si und O teilen Elektronen, bilden ein dreidimensionales Gerüst → extrem hart, hoher Schmelzpunkt."},

{c:"Chemie", d:2, q:"Was sind Van-der-Waals-Kräfte?",
  o:["Starke chemische Bindungen zwischen Ionen", "Schwache intermolekulare Kräfte durch temporäre Dipole", "Kovalente Bindungen in Gasen", "Elektrostatische Anziehung in Ionengittern"], a:1,
  e:"Van-der-Waals-Kräfte: schwache Anziehungskräfte zwischen Molekülen durch temporäre/induzierte Dipole. Wichtig für Siedepunkte."},

{c:"Chemie", d:3, q:"Warum hat Al₂O₃ (Korund) einen sehr hohen Schmelzpunkt trotz kovalentem Anteil?",
  o:["Wegen seiner niedrigen Dichte", "Wegen des hohen kovalenten und ionischen Bindungsanteils in einem stabilen Kristallgitter", "Wegen der Van-der-Waals-Kräfte", "Wegen der metallischen Leitfähigkeit"], a:1,
  e:"Al₂O₃: gemischter Bindungscharakter (ionisch + kovalent) in einem dichten Korundgitter → sehr hohe Bindungsenergie → Schmelzpunkt ~2050°C."},

{c:"Chemie", d:2, q:"Was versteht man unter einer polaren Atombindung?",
  o:["Bindung mit vollständiger Elektronenübertragung", "Bindung mit gleicher Elektronenverteilung", "Bindung mit ungleichmäßiger Elektronenverteilung durch Elektronegativitätsunterschied", "Bindung nur in Metallen"], a:2,
  e:"Polare Atombindung: ungleiche Elektronegativität → Elektronen liegen näher am elektronegativeren Atom → Dipolcharakter (z.B. H–O in Wasser)."},

// ── SÄUREN & BASEN ───────────────────────────────────────────

{c:"Chemie", d:1, q:"Was ist eine Säure nach Brønsted-Lowry?",
  o:["Ein Stoff, der Elektronen aufnimmt", "Ein Stoff, der Protonen (H⁺) abgibt", "Ein Stoff, der OH⁻-Ionen bildet", "Ein Stoff, der Elektronen abgibt"], a:1,
  e:"Brønsted-Säure: Protonendonator – gibt H⁺ ab. Beispiel: HCl → H⁺ + Cl⁻."},

{c:"Chemie", d:1, q:"Was ist eine Base nach Brønsted-Lowry?",
  o:["Ein Stoff, der H⁺ abgibt", "Ein Stoff, der OH⁻-Ionen aufnimmt", "Ein Stoff, der Protonen (H⁺) aufnimmt", "Ein Stoff, der Elektronen überträgt"], a:2,
  e:"Brønsted-Base: Protonenakzeptor – nimmt H⁺ auf. Beispiel: NH₃ + H⁺ → NH₄⁺."},

{c:"Chemie", d:2, q:"Was entsteht bei der Neutralisation von HCl und NaOH?",
  o:["NaCl + H₂O", "NaOH + HCl bleibt unverändert", "Na₂O + H₂Cl", "NaCl + H₂"], a:0,
  e:"HCl + NaOH → NaCl + H₂O. Säure + Base → Salz + Wasser. pH des Produkts: 7 (neutrales Salz)."},

{c:"Chemie", d:2, q:"Welcher pH-Wert entspricht einer starken Säure (z.B. HCl, 0,1 mol/l)?",
  o:["pH = 7", "pH = 1", "pH = 13", "pH = 4"], a:1,
  e:"HCl ist eine starke Säure → vollständige Dissoziation. Bei 0,1 mol/l: pH = –log(0,1) = 1."},

{c:"Chemie", d:3, q:"Was ist ein Puffersystem und wie funktioniert es?",
  o:["Ein System, das pH-Änderungen durch Zugabe von Säuren oder Basen weitgehend abpuffert", "Ein System, das Gase filtert", "Ein System, das Ionen aus Lösungen entfernt", "Ein System, das Temperatur konstant hält"], a:0,
  e:"Puffer: Gemisch aus schwacher Säure und konjugierter Base. Zusatz von H⁺ oder OH⁻ wird durch Gleichgewichtsverschiebung abgefangen → pH bleibt stabil. Wichtig in der Keramik für Schlickerstabilität."},

{c:"Chemie", d:2, q:"Was passiert, wenn CO₂ in Wasser gelöst wird?",
  o:["Es entsteht eine starke Säure", "Es entsteht H₂CO₃ (Kohlensäure), eine schwache Säure", "Es entsteht eine Base", "CO₂ löst sich nicht in Wasser"], a:1,
  e:"CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Kohlensäure ist eine schwache, zweiprotonige Säure. Relevant bei Carbonat-Zersetzung in der Keramik."},

// ── REAKTIONSTYPEN ───────────────────────────────────────────

{c:"Chemie", d:1, q:"Was ist eine Synthese (Kombinationsreaktion)?",
  o:["Ein Stoff zerfällt in zwei oder mehr Produkte", "Zwei oder mehr Stoffe verbinden sich zu einem neuen Stoff", "Ein Stoff ersetzt einen anderen", "Elektronen werden übertragen"], a:1,
  e:"Synthese: A + B → AB. Beispiel: 2 H₂ + O₂ → 2 H₂O. Mehrere Edukte bilden ein Produkt."},

{c:"Chemie", d:1, q:"Was ist eine Analyse (Zersetzungsreaktion)?",
  o:["Zwei Stoffe verbinden sich", "Ein Stoff zerfällt in zwei oder mehr einfachere Stoffe", "Elektronen werden ausgetauscht", "Atome werden neu angeordnet ohne Bindungsbruch"], a:1,
  e:"Analyse: AB → A + B. Beispiel: CaCO₃ → CaO + CO₂ (Kalzinierung). Ein Stoff zerfällt in einfachere Produkte."},

{c:"Chemie", d:2, q:"Was ist eine Redoxreaktion?",
  o:["Nur eine Oxidation ohne Reduktion", "Gleichzeitige Oxidation und Reduktion – Elektronen werden übertragen", "Säure-Base-Reaktion mit Protonentransfer", "Reaktion ohne Energieänderung"], a:1,
  e:"Redoxreaktion: immer gleichzeitig Oxidation (Elektronenabgabe) und Reduktion (Elektronenaufnahme). Beispiel: Fe₂O₃ + 3CO → 2Fe + 3CO₂."},

{c:"Chemie", d:2, q:"Was ist eine Fällungsreaktion?",
  o:["Ein Gas entweicht aus einer Lösung", "Ein unlöslicher Feststoff (Niederschlag) bildet sich aus zwei Lösungen", "Eine Lösung verdampft", "Ein Salz löst sich auf"], a:1,
  e:"Fällungsreaktion: zwei lösliche Salze reagieren → unlösliches Salz fällt aus. Beispiel: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl."},

{c:"Chemie", d:3, q:"Was ist eine Disproportionierung?",
  o:["Ein Stoff reagiert mit zwei verschiedenen Partnern", "Ein Stoff wird gleichzeitig oxidiert und reduziert (reagiert mit sich selbst)", "Zwei gleiche Stoffe reagieren zu einem Produkt", "Ein Stoff zerfällt ohne Redoxreaktion"], a:1,
  e:"Disproportionierung: ein Stoff reagiert mit sich selbst → ein Teil wird oxidiert, ein Teil reduziert. Beispiel: 2H₂O₂ → 2H₂O + O₂."},

// ── PERIODENSYSTEM ───────────────────────────────────────────

{c:"Chemie", d:1, q:"Was sind Edelgase und warum sind sie reaktionsträge?",
  o:["Metalle mit hohem Schmelzpunkt", "Nichtmetalle der VII. Hauptgruppe mit 7 Valenzelektronen", "Elemente der VIII. Hauptgruppe mit vollständig besetzter Außenschale (8 Elektronen)", "Radioaktive Elemente"], a:2,
  e:"Edelgase (He, Ne, Ar, Kr, Xe): vollständig besetzte Außenschale → keine Tendenz zur Bindungsbildung → extrem reaktionsträge."},

{c:"Chemie", d:2, q:"Warum nimmt die Atomgröße innerhalb einer Periode (Zeile) von links nach rechts ab?",
  o:["Weil mehr Elektronen hinzukommen und den Kern abstoßen", "Weil die Kernladungszahl steigt und die Elektronen stärker angezogen werden", "Weil die Anzahl der Schalen abnimmt", "Weil die Masse zunimmt"], a:1,
  e:"Mit steigender Kernladungszahl wird die Anziehungskraft auf die Elektronen stärker → Atomradius nimmt ab (bei gleicher Schalenanzahl)."},

{c:"Chemie", d:2, q:"Was versteht man unter Elektronegativität?",
  o:["Die Fähigkeit eines Atoms, Protonen abzugeben", "Die Fähigkeit eines Atoms, Elektronen in einer Bindung anzuziehen", "Die Anzahl der Valenzelektronen", "Die Ionisierungsenergie eines Elements"], a:1,
  e:"Elektronegativität (EN): Maß für die Fähigkeit eines Atoms, Bindungselektronen anzuziehen. Fluor hat die höchste EN (4,0). Steigt von links nach rechts und von unten nach oben im PSE."},

{c:"Chemie", d:3, q:"Warum sind Übergangsmetalle (d-Block) besonders für Farbpigmente in Keramikglasuren geeignet?",
  o:["Wegen ihrer niedrigen Schmelzpunkte", "Wegen ihrer d-Orbitale, die Licht im sichtbaren Bereich absorbieren und Farbe erzeugen", "Wegen ihrer hohen Reaktivität mit Sauerstoff", "Wegen ihrer metallischen Leitfähigkeit"], a:1,
  e:"Übergangsmetalle (Fe, Co, Cr, Cu, Mn): unvollständig besetzte d-Orbitale → Elektronen können Licht im sichtbaren Bereich absorbieren → Farberscheinung. Fe₂O₃ = rot, CoO = blau, Cr₂O₃ = grün."},

// ── THERMOCHEMIE ─────────────────────────────────────────────

{c:"Chemie", d:1, q:"Was ist die Aktivierungsenergie?",
  o:["Die Energie, die bei einer Reaktion freigesetzt wird", "Die Mindestenergie, die nötig ist, damit eine chemische Reaktion startet", "Die Gesamtenergie eines Systems", "Die Wärme eines Schmelzvorgangs"], a:1,
  e:"Aktivierungsenergie: Mindestenergie um eine Reaktion in Gang zu setzen (Energiebarriere). Katalysatoren senken sie."},

{c:"Chemie", d:2, q:"Was ist Reaktionsenthalpie ΔH?",
  o:["Die Temperatur einer Reaktion", "Die Druckänderung bei einer Reaktion", "Die Wärmemenge die bei konstanten Druck aufgenommen oder abgegeben wird", "Die Geschwindigkeit einer Reaktion"], a:2,
  e:"ΔH: Reaktionsenthalpie bei konstantem Druck. ΔH < 0: exotherm (Wärme frei). ΔH > 0: endotherm (Wärme verbraucht)."},

{c:"Chemie", d:2, q:"Was besagt der Satz von Hess?",
  o:["Die Reaktionsenthalpie ist abhängig vom Reaktionsweg", "Die Gesamtenthalpie einer Reaktion ist gleich – egal welchen Weg die Reaktion nimmt (Zustandsgröße)", "Jede Reaktion verläuft exotherm", "Enthalpie kann nicht gemessen werden"], a:1,
  e:"Hess'scher Satz: ΔH einer Gesamtreaktion = Summe der ΔH-Werte der Teilreaktionen – unabhängig vom Weg. Wichtig für Berechnungen."},

{c:"Chemie", d:3, q:"Was ist der Unterschied zwischen kinetischer und thermodynamischer Kontrolle einer Reaktion?",
  o:["Kinetisch = schnelle Reaktion bildet stabilstes Produkt; thermodynamisch = langsame Reaktion bildet instabiles Produkt", "Kinetisch = Produkt wird durch Reaktionsgeschwindigkeit bestimmt; thermodynamisch = Produkt wird durch Stabilität (ΔG) bestimmt", "Beide sind identisch – nur unterschiedliche Begriffe", "Kinetik gilt nur bei hohen Temperaturen"], a:1,
  e:"Kinetische Kontrolle (niedrige T): schnellstes Produkt gewinnt (metastabil). Thermodynamische Kontrolle (hohe T): stabilstes Produkt gewinnt (ΔG minimal). Relevant beim Sintern und Phasenumwandlungen in der Keramik."},

{c:"Chemie", d:2, q:"Was versteht man unter einem Katalysator?",
  o:["Ein Stoff, der bei der Reaktion verbraucht wird", "Ein Stoff, der die Reaktionstemperatur erhöht", "Ein Stoff, der die Aktivierungsenergie senkt ohne selbst verbraucht zu werden", "Ein Stoff, der die Reaktion verlangsamt"], a:2,
  e:"Katalysator: senkt die Aktivierungsenergie → Reaktion läuft schneller ab. Wird nicht verbraucht. Beispiel: Platinkatalysator bei Abgasreinigung (SCR-Entstickung)."},

{c:"Chemie", d:2, q:"Was ist freie Enthalpie (Gibbs-Energie) ΔG und was sagt das Vorzeichen aus?",
  o:["ΔG = Wärmemenge bei konstantem Volumen; ΔG > 0 = exotherm", "ΔG = ΔH – T·ΔS; ΔG < 0: Reaktion freiwillig (spontan); ΔG > 0: nicht spontan", "ΔG beschreibt nur die Enthalpie ohne Entropieanteil", "ΔG ist nur bei Gasen relevant"], a:1,
  e:"ΔG = ΔH – T·ΔS. ΔG < 0: Reaktion läuft spontan ab. ΔG = 0: Gleichgewicht. ΔG > 0: nicht spontan (benötigt Energiezufuhr). Wichtig für Sinterreaktionen und Phasenumwandlungen."}

];

// Gesamt: 511 Fragen
