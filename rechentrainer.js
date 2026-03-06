// ════════════════════════════════════════════════════════════
//  RECHENTRAINER – Meisterkurs Keramik
//  Hier können Rechenaufgaben hinzugefügt, geändert oder entfernt werden.
//
//  Struktur: AUFGABEN ist ein Objekt mit Kategorien als Schlüssel.
//  Jede Kategorie enthält eine Funktion die pick() aufruft.
//
//  Jede Aufgabe hat folgende Felder:
//  {
//    cat:      "Kategoriename",     ← Angezeigte Kategorie
//    question: "Aufgabentext...",   ← Die Aufgabe (HTML erlaubt)
//    correct:  42.5,                ← Die richtige Antwort (Zahl)
//    unit:     "kg",                ← Einheit der Antwort
//    hint:     "Formel: ...",       ← Hinweis (optional)
//    tol:      0.02,                ← Toleranz in % (Standard: 2%)
//    steps:    "Schritt 1: ..."     ← Lösungsweg (\n für Zeilenumbruch)
//  }
// ════════════════════════════════════════════════════════════

const AUFGABEN = {

  // ════ WÄRMELEHRE ════════════════════════════════════════════
  waerme: [

    () => {
      const m = rnd(0.5, 20, 0.5);
      const T1 = rnd(10, 30, 5), T2 = rnd(60, 100, 5);
      const c = 4.18; // kJ/(kg·K)
      const Q = parseFloat((m * c * (T2 - T1)).toFixed(2));
      return {
        cat: '🔥 Wärmelehre',
        question: `In einem Industriebetrieb sollen <strong>${fmtN(m)} kg Wasser</strong> von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> erwärmt werden.<br><br>Wie viel Wärmeenergie <em>Q</em> wird dafür benötigt? (spez. Wärmekapazität Wasser: c = 4,18 kJ/(kg·K))`,
        hint: 'Q = m · c · ΔT',
        correct: Q, unit: 'kJ',
        steps: `Gegeben: m = ${fmtN(m)} kg, T₁ = ${T1} °C, T₂ = ${T2} °C, c = 4,18 kJ/(kg·K)\nΔT = T₂ − T₁ = ${T2} − ${T1} = ${T2 - T1} K\nQ = m · c · ΔT = ${fmtN(m)} · 4,18 · ${T2 - T1}\nQ = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const m = rnd(1, 10, 0.5);
      // Eis schmelzen: Schmelzwärme + Erwärmen auf Zieltemperatur
      const T2 = rnd(20, 80, 10);
      const qs = 334; // kJ/kg Schmelzenthalpie
      const c = 4.18;
      const Q = parseFloat((m * qs + m * c * T2).toFixed(2));
      return {
        cat: '🔥 Wärmelehre',
        question: `<strong>${fmtN(m)} kg Eis</strong> bei <strong>0 °C</strong> sollen vollständig geschmolzen und anschließend auf <strong>${T2} °C</strong> erwärmt werden.<br><br>Wie viel Wärmeenergie <em>Q</em> wird insgesamt benötigt?<br><small style="color:var(--rt-muted);">(Schmelzwärme Eis: qₛ = 334 kJ/kg &nbsp;|&nbsp; c<sub>Wasser</sub> = 4,18 kJ/(kg·K))</small>`,
        hint: 'Q = m · qₛ + m · c · ΔT',
        correct: Q, unit: 'kJ',
        steps: `Schritt 1 – Schmelzen (0 °C → 0 °C Wasser):\nQ₁ = m · qₛ = ${fmtN(m)} · 334 = ${fmtN(m * qs)} kJ\n\nSchritt 2 – Erwärmen (0 °C → ${T2} °C):\nQ₂ = m · c · ΔT = ${fmtN(m)} · 4,18 · ${T2} = ${fmtN(m * c * T2)} kJ\n\nGesamt: Q = Q₁ + Q₂ = ${fmtN(m * qs)} + ${fmtN(m * c * T2)} = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const m = rnd(100, 2000, 100);
      const T1 = rnd(20, 100, 20), T2 = rnd(600, 1200, 50);
      const c = rnd(0.7, 1.2, 0.05); // kJ/(kg·K) für Keramik
      const Q = parseFloat((m * c * (T2 - T1)).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Eine Keramikcharge mit einer Masse von <strong>${fmtN(m)} kg</strong> wird im Ofen von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> aufgeheizt.<br><br>Berechnen Sie die benötigte Wärmemenge <em>Q</em>.<br><small style="color:var(--rt-muted);">(spez. Wärmekapazität Keramik: c = ${fmtN(c)} kJ/(kg·K))</small>`,
        hint: 'Q = m · c · ΔT',
        correct: Q, unit: 'kJ',
        steps: `Gegeben: m = ${fmtN(m)} kg, T₁ = ${T1} °C, T₂ = ${T2} °C, c = ${fmtN(c)} kJ/(kg·K)\nΔT = ${T2} − ${T1} = ${T2 - T1} K\nQ = ${fmtN(m)} · ${fmtN(c)} · ${T2 - T1}\nQ = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const QZu = rnd(500, 5000, 100);
      const eta = rnd(55, 90, 5);
      const QAb = parseFloat((QZu * eta / 100).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Ein Tunnelofen erhält eine Wärmezufuhr von <strong>${fmtN(QZu)} kJ</strong>. Sein thermischer Wirkungsgrad beträgt <strong>η = ${eta} %</strong>.<br><br>Wie viel nutzbare Wärme <em>Q<sub>ab</sub></em> wird an die Ware abgegeben?`,
        hint: 'Q_ab = Q_zu · η / 100',
        correct: QAb, unit: 'kJ',
        steps: `Gegeben: Q_zu = ${fmtN(QZu)} kJ, η = ${eta} %\nQ_ab = Q_zu · η / 100\nQ_ab = ${fmtN(QZu)} · ${eta} / 100\nQ_ab = ${fmtN(QAb)} kJ`
      };
    },

    () => {
      const QAb = rnd(200, 3000, 100);
      const QZu = rnd(QAb + 100, QAb * 2, 100);
      const eta = parseFloat((QAb / QZu * 100).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Einem Ofen werden <strong>${fmtN(QZu)} kJ</strong> zugeführt. Die nutzbare abgegebene Wärme beträgt <strong>${fmtN(QAb)} kJ</strong>.<br><br>Berechnen Sie den thermischen Wirkungsgrad <em>η</em> in Prozent.`,
        hint: 'η = Q_ab / Q_zu · 100',
        correct: eta, unit: '%',
        steps: `η = Q_ab / Q_zu · 100\nη = ${fmtN(QAb)} / ${fmtN(QZu)} · 100\nη = ${fmtN(eta)} %`
      };
    },

    () => {
      const m = rnd(0.5, 5, 0.5);
      const T1 = rnd(100, 200, 20);
      // Verdampfen: erst Erwärmen auf 100°C, dann Verdampfungswärme
      const cWasser = 4.18;
      const qv = 2257; // kJ/kg
      const Q = parseFloat((m * cWasser * (100 - T1) + m * qv).toFixed(1));
      const realT1 = Math.min(T1, 95);
      const Qreal = parseFloat((m * cWasser * (100 - realT1) + m * qv).toFixed(1));
      const T1use = realT1;
      return {
        cat: '🔥 Wärmelehre',
        question: `<strong>${fmtN(m)} kg Wasser</strong> bei <strong>${T1use} °C</strong> sollen vollständig verdampft werden.<br><br>Welche Wärmeenergie <em>Q</em> wird insgesamt benötigt?<br><small style="color:var(--rt-muted);">(c<sub>Wasser</sub> = 4,18 kJ/(kg·K) &nbsp;|&nbsp; Verdampfungswärme: q<sub>v</sub> = 2257 kJ/kg)</small>`,
        hint: 'Q = m·c·ΔT (bis 100°C) + m·qᵥ',
        correct: Qreal, unit: 'kJ',
        steps: `Schritt 1 – Erwärmen auf 100 °C:\nΔT = 100 − ${T1use} = ${100 - T1use} K\nQ₁ = ${fmtN(m)} · 4,18 · ${100 - T1use} = ${fmtN(m * 4.18 * (100 - T1use))} kJ\n\nSchritt 2 – Verdampfen:\nQ₂ = m · qᵥ = ${fmtN(m)} · 2257 = ${fmtN(m * qv)} kJ\n\nGesamt: Q = ${fmtN(m * 4.18 * (100 - T1use))} + ${fmtN(m * qv)} = ${fmtN(Qreal)} kJ`
      };
    },

    () => {
      const m1 = rnd(1, 10, 0.5), T1 = rnd(80, 100, 5);
      const m2 = rnd(1, 10, 0.5), T2 = rnd(10, 25, 5);
      const c = 4.18;
      const Tm = parseFloat(((m1 * T1 + m2 * T2) / (m1 + m2)).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `<strong>${fmtN(m1)} kg heißes Wasser</strong> (${T1} °C) werden mit <strong>${fmtN(m2)} kg kaltem Wasser</strong> (${T2} °C) gemischt.<br><br>Welche Mischtemperatur <em>T<sub>m</sub></em> stellt sich ein? (Wärmeverluste vernachlässigt)`,
        hint: 'T_m = (m₁·T₁ + m₂·T₂) / (m₁ + m₂)',
        correct: Tm, unit: '°C',
        steps: `Wärmeabgabe = Wärmeaufnahme (adiabatisch)\nm₁·c·(T₁−Tm) = m₂·c·(Tm−T₂)\n\nAuflösen:\nTm = (m₁·T₁ + m₂·T₂) / (m₁ + m₂)\nTm = (${fmtN(m1)} · ${T1} + ${fmtN(m2)} · ${T2}) / (${fmtN(m1)} + ${fmtN(m2)})\nTm = ${fmtN(m1 * T1 + m2 * T2)} / ${fmtN(m1 + m2)}\nTm = ${fmtN(Tm)} °C`
      };
    },

    () => {
      const lambda = rnd(0.5, 3, 0.1);
      const A = rnd(2, 20, 1);
      const dT = rnd(100, 500, 50);
      const d = rnd(0.05, 0.3, 0.05);
      const Q_s = parseFloat((lambda * A * dT / d).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Eine Ofenwand hat eine Fläche von <strong>${A} m²</strong>, eine Dicke von <strong>${d} m</strong> und eine Wärmeleitfähigkeit von <strong>λ = ${fmtN(lambda)} W/(m·K)</strong>. Die Temperaturdifferenz zwischen innen und außen beträgt <strong>ΔT = ${dT} K</strong>.<br><br>Wie groß ist der Wärmestrom <em>Q̇</em> durch die Wand?`,
        hint: 'Q̇ = λ · A · ΔT / d',
        correct: Q_s, unit: 'W',
        steps: `Gegeben: λ = ${fmtN(lambda)} W/(m·K), A = ${A} m², ΔT = ${dT} K, d = ${d} m\nQ̇ = λ · A · ΔT / d\nQ̇ = ${fmtN(lambda)} · ${A} · ${dT} / ${d}\nQ̇ = ${fmtN(Q_s)} W`
      };
    },
  ],

  // ════ PHYSIK ════════════════════════════════════════════════
  physik: [

    () => {
      const m = rnd(1, 50, 1), h = rnd(2, 30, 1), g = 9.81;
      const Epot = parseFloat((m * g * h).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `Ein Keramikstück mit einer Masse von <strong>${m} kg</strong> liegt auf einem Regal in <strong>${h} m</strong> Höhe.<br><br>Wie groß ist seine potenzielle Energie <em>E<sub>pot</sub></em>? (g = 9,81 m/s²)`,
        hint: 'E_pot = m · g · h',
        correct: Epot, unit: 'J',
        steps: `E_pot = m · g · h\nE_pot = ${m} · 9,81 · ${h}\nE_pot = ${fmtN(Epot)} J`
      };
    },

    () => {
      const m = rnd(2, 50, 1), h = rnd(2, 20, 1), g = 9.81;
      const v = parseFloat((Math.sqrt(2 * g * h)).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Körper der Masse <strong>${m} kg</strong> fällt aus einer Höhe von <strong>${h} m</strong> herab (freier Fall, Startgeschwindigkeit = 0).<br><br>Mit welcher Geschwindigkeit <em>v</em> trifft er auf dem Boden auf? (g = 9,81 m/s²)`,
        hint: 'E_pot = E_kin → v = √(2·g·h)',
        correct: v, unit: 'm/s',
        steps: `Energieerhaltung: E_pot = E_kin\nm·g·h = ½·m·v²\nv² = 2·g·h = 2 · 9,81 · ${h} = ${fmtN(2*g*h)}\nv = √${fmtN(2*g*h)} = ${fmtN(v)} m/s`
      };
    },

    () => {
      const m = rnd(500, 5000, 100), v = rnd(1, 20, 0.5);
      const Ekin = parseFloat((0.5 * m * v * v).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `Ein Mahlkörper in einer Kugelmühle hat eine Masse von <strong>${m} kg</strong> und bewegt sich mit einer Geschwindigkeit von <strong>${fmtN(v)} m/s</strong>.<br><br>Wie groß ist seine kinetische Energie <em>E<sub>kin</sub></em>?`,
        hint: 'E_kin = ½ · m · v²',
        correct: Ekin, unit: 'J',
        steps: `E_kin = ½ · m · v²\nE_kin = 0,5 · ${m} · ${fmtN(v)}²\nE_kin = 0,5 · ${m} · ${fmtN(v*v)}\nE_kin = ${fmtN(Ekin)} J`
      };
    },

    () => {
      const F = rnd(100, 5000, 50), s = rnd(1, 30, 0.5);
      const W = parseFloat((F * s).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `Ein Presskolben übt eine Kraft von <strong>${fmtN(F)} N</strong> aus und bewegt sich dabei um <strong>${fmtN(s)} m</strong>.<br><br>Wie groß ist die verrichtete Arbeit <em>W</em>?`,
        hint: 'W = F · s',
        correct: W, unit: 'J',
        steps: `W = F · s\nW = ${fmtN(F)} · ${fmtN(s)}\nW = ${fmtN(W)} J`
      };
    },

    () => {
      const W = rnd(500, 20000, 500), t = rnd(5, 120, 5);
      const P = parseFloat((W / t).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Elektromotor verrichtet in <strong>${t} Sekunden</strong> eine Arbeit von <strong>${fmtN(W)} J</strong>.<br><br>Welche Leistung <em>P</em> erbringt der Motor?`,
        hint: 'P = W / t',
        correct: P, unit: 'W',
        steps: `P = W / t\nP = ${fmtN(W)} / ${t}\nP = ${fmtN(P)} W`
      };
    },

    () => {
      const m = rnd(1, 100, 1), a = rnd(0.5, 10, 0.5);
      const F = parseFloat((m * a).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Förderwagen mit einer Masse von <strong>${m} kg</strong> wird mit einer Beschleunigung von <strong>${fmtN(a)} m/s²</strong> angetrieben.<br><br>Welche Kraft <em>F</em> wirkt auf den Wagen?`,
        hint: 'F = m · a',
        correct: F, unit: 'N',
        steps: `F = m · a\nF = ${m} · ${fmtN(a)}\nF = ${fmtN(F)} N`
      };
    },

    () => {
      const v0 = rnd(0, 10, 1), a = rnd(0.5, 5, 0.5), t = rnd(2, 15, 1);
      const s = parseFloat((v0*t + 0.5*a*t*t).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Transportband startet mit einer Anfangsgeschwindigkeit von <strong>v₀ = ${v0} m/s</strong> und beschleunigt gleichmäßig mit <strong>a = ${fmtN(a)} m/s²</strong>.<br><br>Welchen Weg <em>s</em> legt es in <strong>${t} Sekunden</strong> zurück?`,
        hint: 's = v₀·t + ½·a·t²',
        correct: s, unit: 'm',
        steps: `s = v₀·t + ½·a·t²\ns = ${v0}·${t} + 0,5·${fmtN(a)}·${t}²\ns = ${v0*t} + 0,5·${fmtN(a)}·${t*t}\ns = ${v0*t} + ${fmtN(0.5*a*t*t)}\ns = ${fmtN(s)} m`
      };
    },

    () => {
      const L0 = rnd(1, 10, 0.5);
      const alpha = parseFloat((rnd(5, 12, 1) * 1e-6).toPrecision(2));
      const dT = rnd(100, 800, 50);
      const dL = parseFloat((L0 * alpha * dT * 1000).toFixed(3));
      return {
        cat: '⚡ Physik',
        question: `Ein Keramikstab hat bei Raumtemperatur eine Länge von <strong>L₀ = ${fmtN(L0)} m</strong>. Der thermische Ausdehnungskoeffizient beträgt <strong>α = ${alpha.toExponential()} 1/K</strong>. Der Stab wird um <strong>ΔT = ${dT} K</strong> erwärmt.<br><br>Um wie viele Millimeter dehnt sich der Stab aus?`,
        hint: 'ΔL = L₀ · α · ΔT',
        correct: dL, unit: 'mm',
        steps: `ΔL = L₀ · α · ΔT\nΔL = ${fmtN(L0)} m · ${alpha.toExponential()} · ${dT} K\nΔL = ${(L0 * alpha * dT).toExponential(3)} m\nΔL = ${fmtN(dL)} mm`
      };
    },

    () => {
      const p = rnd(100, 400, 10), d = rnd(0.05, 0.5, 0.05);
      const A = parseFloat((Math.PI * (d/2) * (d/2) * 1e6).toFixed(1)); // mm²
      const F = parseFloat((p * 1e3 * Math.PI * (d/2) * (d/2)).toFixed(0)); // N
      return {
        cat: '⚡ Physik',
        question: `Ein Druckschlickerguss-Kolben hat einen Durchmesser von <strong>d = ${fmtN(d)} m</strong>. Der Arbeitsdruck beträgt <strong>p = ${p} kPa</strong>.<br><br>Welche Kraft <em>F</em> wirkt auf den Kolben? (F = p · A)`,
        hint: 'F = p · A,  A = π · (d/2)²',
        correct: F, unit: 'N',
        steps: `A = π · (d/2)² = π · (${fmtN(d/2)})² = ${fmtN(Math.PI*(d/2)*(d/2))} m²\nF = p · A = ${p}·10³ Pa · ${fmtN(Math.PI*(d/2)*(d/2))} m²\nF = ${fmtN(F)} N`
      };
    },
  ],

  // ════ WAK ═══════════════════════════════════════════════════
  wak: [

    () => {
      const L0 = rnd(100, 1000, 50);
      const alpha = parseFloat((rnd(4, 10, 0.5) * 1e-6).toPrecision(2));
      const dT = rnd(100, 800, 50);
      const dL = parseFloat((L0 * alpha * dT).toFixed(4));
      return {
        cat: '📏 WAK',
        question: `Ein keramisches Bauteil hat eine Ausgangslänge von <strong>L₀ = ${L0} mm</strong>. Der WAK beträgt <strong>α = ${alpha.toExponential()} 1/K</strong>. Es wird um <strong>ΔT = ${dT} K</strong> erwärmt.<br><br>Wie groß ist die Längenänderung <em>ΔL</em> in mm?`,
        hint: 'ΔL = L₀ · α · ΔT',
        correct: dL, unit: 'mm',
        steps: `ΔL = L₀ · α · ΔT\nΔL = ${L0} mm · ${alpha.toExponential()} · ${dT} K\nΔL = ${fmtN(dL)} mm`
      };
    },

    () => {
      const dL = parseFloat((rnd(0.1, 5, 0.1)).toFixed(1));
      const L0 = rnd(200, 1000, 50);
      const dT = rnd(200, 800, 50);
      const alpha = parseFloat((dL / (L0 * dT)).toPrecision(3));
      return {
        cat: '📏 WAK',
        question: `Ein Keramikstab (L₀ = ${L0} mm) dehnt sich beim Erwärmen um <strong>ΔT = ${dT} K</strong> um <strong>ΔL = ${fmtN(dL)} mm</strong> aus.<br><br>Bestimmen Sie den WAK <em>α</em> in 1/K.`,
        hint: 'α = ΔL / (L₀ · ΔT)',
        correct: alpha, unit: '1/K',
        tol: 0.03,
        steps: `α = ΔL / (L₀ · ΔT)\nα = ${fmtN(dL)} / (${L0} · ${dT})\nα = ${fmtN(dL)} / ${L0 * dT}\nα = ${alpha.toExponential(3)} 1/K`
      };
    },
  ],
};