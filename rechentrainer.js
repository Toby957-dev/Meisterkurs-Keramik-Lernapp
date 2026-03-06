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
//    tol:      0.02,                ← Toleranz in % (Standard: 2%)
//    steps:    "Schritt 1: ..."     ← Lösungsweg (\n für Zeilenumbruch)
//  }
//  HINWEIS: Das "hint"-Feld wird nicht mehr verwendet.
// ════════════════════════════════════════════════════════════

const AUFGABEN = {

  // ════ WÄRMELEHRE ════════════════════════════════════════════
  waerme: [

    () => {
      const m = rnd(0.5, 20, 0.5);
      const T1 = rnd(10, 30, 5), T2 = rnd(60, 100, 5);
      const c = 4.18;
      const Q = parseFloat((m * c * (T2 - T1)).toFixed(2));
      return {
        cat: '🔥 Wärmelehre',
        question: `In einem Industriebetrieb sollen <strong>${fmtN(m)} Kilogramm Wasser</strong> von <strong>${T1} Grad Celsius</strong> auf <strong>${T2} Grad Celsius</strong> erwärmt werden. Die spezifische Wärmekapazität von Wasser beträgt 4,18 Kilojoule pro Kilogramm und Kelvin.<br><br>Wie viel Wärmeenergie wird für diesen Vorgang insgesamt benötigt? Geben Sie das Ergebnis in Kilojoule an.`,
        correct: Q, unit: 'kJ',
        steps: `Gegeben: m = ${fmtN(m)} kg, T₁ = ${T1} °C, T₂ = ${T2} °C, c = 4,18 kJ/(kg·K)\nTemperaturdifferenz = ${T2} − ${T1} = ${T2 - T1} K\nQ = ${fmtN(m)} · 4,18 · ${T2 - T1}\nQ = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const m = rnd(1, 10, 0.5);
      const T2 = rnd(20, 80, 10);
      const qs = 334;
      const c = 4.18;
      const Q = parseFloat((m * qs + m * c * T2).toFixed(2));
      return {
        cat: '🔥 Wärmelehre',
        question: `In einer Produktion liegen <strong>${fmtN(m)} Kilogramm Eis</strong> bei null Grad Celsius vor. Das Eis soll zunächst vollständig geschmolzen und das entstehende Wasser anschließend auf <strong>${T2} Grad Celsius</strong> erwärmt werden. Die Schmelzwärme von Eis beträgt 334 Kilojoule pro Kilogramm, die spezifische Wärmekapazität von Wasser 4,18 Kilojoule pro Kilogramm und Kelvin.<br><br>Wie viel Wärmeenergie wird für diesen gesamten Vorgang benötigt?`,
        correct: Q, unit: 'kJ',
        steps: `Schritt 1 – Schmelzen (0 °C → 0 °C Wasser):\nQ₁ = ${fmtN(m)} · 334 = ${fmtN(m * qs)} kJ\n\nSchritt 2 – Erwärmen (0 °C → ${T2} °C):\nQ₂ = ${fmtN(m)} · 4,18 · ${T2} = ${fmtN(m * c * T2)} kJ\n\nGesamt: Q = ${fmtN(m * qs)} + ${fmtN(m * c * T2)} = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const m = rnd(100, 2000, 100);
      const T1 = rnd(20, 100, 20), T2 = rnd(600, 1200, 50);
      const c = rnd(0.7, 1.2, 0.05);
      const Q = parseFloat((m * c * (T2 - T1)).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Eine Keramikcharge mit einer Gesamtmasse von <strong>${fmtN(m)} Kilogramm</strong> wird im Brennofen von <strong>${T1} Grad Celsius</strong> auf <strong>${T2} Grad Celsius</strong> aufgeheizt. Die spezifische Wärmekapazität des Keramikmaterials beträgt ${fmtN(c)} Kilojoule pro Kilogramm und Kelvin.<br><br>Welche Wärmemenge muss dem Material insgesamt zugeführt werden?`,
        correct: Q, unit: 'kJ',
        steps: `Temperaturdifferenz = ${T2} − ${T1} = ${T2 - T1} K\nQ = ${fmtN(m)} · ${fmtN(c)} · ${T2 - T1}\nQ = ${fmtN(Q)} kJ`
      };
    },

    () => {
      const QZu = rnd(500, 5000, 100);
      const eta = rnd(55, 90, 5);
      const QAb = parseFloat((QZu * eta / 100).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Einem Tunnelofen werden insgesamt <strong>${fmtN(QZu)} Kilojoule</strong> an Wärme zugeführt. Der thermische Wirkungsgrad des Ofens beträgt <strong>${eta} Prozent</strong>.<br><br>Wie viel nutzbare Wärme wird dabei tatsächlich an die Ware abgegeben?`,
        correct: QAb, unit: 'kJ',
        steps: `Nutzwärme = Zugeführte Wärme · Wirkungsgrad / 100\nQ = ${fmtN(QZu)} · ${eta} / 100\nQ = ${fmtN(QAb)} kJ`
      };
    },

    () => {
      const QAb = rnd(200, 3000, 100);
      const QZu = rnd(QAb + 100, QAb * 2, 100);
      const eta = parseFloat((QAb / QZu * 100).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `Einem Brennofen werden <strong>${fmtN(QZu)} Kilojoule</strong> an Energie zugeführt. Davon werden <strong>${fmtN(QAb)} Kilojoule</strong> als nutzbare Wärme an die Ware abgegeben.<br><br>Wie groß ist der thermische Wirkungsgrad dieses Ofens in Prozent?`,
        correct: eta, unit: '%',
        steps: `Wirkungsgrad = abgegebene Wärme / zugeführte Wärme · 100\neta = ${fmtN(QAb)} / ${fmtN(QZu)} · 100\neta = ${fmtN(eta)} %`
      };
    },

    () => {
      const m = rnd(0.5, 5, 0.5);
      const T1use = Math.min(rnd(100, 200, 20), 95);
      const qv = 2257;
      const cWasser = 4.18;
      const Qreal = parseFloat((m * cWasser * (100 - T1use) + m * qv).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `In einem Trocknungsprozess sollen <strong>${fmtN(m)} Kilogramm Wasser</strong>, das sich momentan bei <strong>${T1use} Grad Celsius</strong> befindet, vollständig verdampft werden. Die spezifische Wärmekapazität von Wasser beträgt 4,18 Kilojoule pro Kilogramm und Kelvin, die Verdampfungswärme 2257 Kilojoule pro Kilogramm.<br><br>Wie viel Energie wird insgesamt benötigt, um das Wasser zunächst auf 100 Grad zu erwärmen und dann vollständig zu verdampfen?`,
        correct: Qreal, unit: 'kJ',
        steps: `Schritt 1 – Erwärmen auf 100 °C:\nDifferenz = 100 − ${T1use} = ${100 - T1use} K\nQ₁ = ${fmtN(m)} · 4,18 · ${100 - T1use} = ${fmtN(m * cWasser * (100 - T1use))} kJ\n\nSchritt 2 – Verdampfen:\nQ₂ = ${fmtN(m)} · 2257 = ${fmtN(m * qv)} kJ\n\nGesamt: Q = ${fmtN(m * cWasser * (100 - T1use))} + ${fmtN(m * qv)} = ${fmtN(Qreal)} kJ`
      };
    },

    () => {
      const m1 = rnd(1, 10, 0.5), T1 = rnd(80, 100, 5);
      const m2 = rnd(1, 10, 0.5), T2 = rnd(10, 25, 5);
      const Tm = parseFloat(((m1 * T1 + m2 * T2) / (m1 + m2)).toFixed(1));
      return {
        cat: '🔥 Wärmelehre',
        question: `In einem Mischbehälter werden <strong>${fmtN(m1)} Kilogramm heißes Wasser</strong> mit einer Temperatur von <strong>${T1} Grad Celsius</strong> und <strong>${fmtN(m2)} Kilogramm kaltes Wasser</strong> mit einer Temperatur von <strong>${T2} Grad Celsius</strong> zusammengeschüttet. Wärmeverluste an die Umgebung werden dabei vernachlässigt.<br><br>Welche Mischtemperatur stellt sich im Behälter ein?`,
        correct: Tm, unit: '°C',
        steps: `Wärmeabgabe des heißen Wassers = Wärmeaufnahme des kalten Wassers\nMischtemperatur = (m₁·T₁ + m₂·T₂) / (m₁ + m₂)\nTm = (${fmtN(m1)} · ${T1} + ${fmtN(m2)} · ${T2}) / (${fmtN(m1)} + ${fmtN(m2)})\nTm = ${fmtN(m1 * T1 + m2 * T2)} / ${fmtN(m1 + m2)}\nTm = ${fmtN(Tm)} °C`
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
        question: `Eine Ofenwand hat eine Fläche von <strong>${A} Quadratmeter</strong> und eine Wandstärke von <strong>${d} Meter</strong>. Die Wärmeleitfähigkeit des Wandmaterials beträgt <strong>${fmtN(lambda)} Watt pro Meter und Kelvin</strong>. Zwischen der Innen- und Außenseite der Wand besteht eine Temperaturdifferenz von <strong>${dT} Kelvin</strong>.<br><br>Wie groß ist der Wärmestrom, der durch diese Wand fließt?`,
        correct: Q_s, unit: 'W',
        steps: `Wärmestrom = Wärmeleitfähigkeit · Fläche · Temperaturdifferenz / Wanddicke\nQ = ${fmtN(lambda)} · ${A} · ${dT} / ${d}\nQ = ${fmtN(Q_s)} W`
      };
    },,

() => {
    const m = rnd(1,30,1); const T1=rnd(20,50,5); const T2=rnd(150,400,10);
    const c=0.84; const Q=parseFloat((m*c*(T2-T1)).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Eine Schamottecharge (<strong>${m} kg</strong>) soll von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> aufgeheizt werden.<br><br>Welche Wärmemenge <em>Q</em> wird benötigt? (c<sub>Schamotte</sub> = 0,84 kJ/(kg·K))`,
      hint:'Q = m · c · ΔT', correct:Q, unit:'kJ',
      steps:`ΔT = ${T2}−${T1} = ${T2-T1} K\nQ = ${m}·0,84·${T2-T1} = ${fmtN(Q)} kJ` };
  },

  () => {
    const m=rnd(5,50,5); const c=0.9; const T1=20; const T2=rnd(800,1300,50);
    const Q=parseFloat((m*c*(T2-T1)).toFixed(0));
    return { cat:'🔥 Wärmelehre',
      question:`Ein Sinterofen erhitzt <strong>${m} kg Aluminiumoxid</strong> von Raumtemperatur (<strong>20 °C</strong>) auf <strong>${T2} °C</strong>.<br><br>Berechnen Sie die benötigte Wärmeenergie. (c = 0,9 kJ/(kg·K))`,
      hint:'Q = m · c · ΔT', correct:Q, unit:'kJ',
      steps:`Q = ${m}·0,9·${T2-20} = ${fmtN(Q)} kJ` };
  },

  () => {
    const Q=rnd(500,10000,500); const m=rnd(5,50,5); const c=4.18;
    const dT=parseFloat((Q/(m*c)).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Einem Wasserbehälter mit <strong>${m} kg Wasser</strong> werden <strong>${fmtN(Q)} kJ</strong> Wärme zugeführt.<br><br>Um wie viel Grad <em>ΔT</em> erwärmt sich das Wasser? (c = 4,18 kJ/(kg·K))`,
      hint:'ΔT = Q / (m · c)', correct:dT, unit:'K',
      steps:`ΔT = Q/(m·c) = ${fmtN(Q)}/(${m}·4,18) = ${fmtN(dT)} K` };
  },

  () => {
    const Q=rnd(100,5000,100); const dT=rnd(50,300,10); const c=0.84;
    const m=parseFloat((Q/(c*dT)).toFixed(2));
    return { cat:'🔥 Wärmelehre',
      question:`Beim Aufheizen eines Keramikteils werden <strong>${fmtN(Q)} kJ</strong> zugeführt, die Temperatur steigt um <strong>${dT} K</strong>. (c = 0,84 kJ/(kg·K))<br><br>Wie schwer ist das Bauteil?`,
      hint:'m = Q / (c · ΔT)', correct:m, unit:'kg',
      steps:`m = Q/(c·ΔT) = ${fmtN(Q)}/(0,84·${dT}) = ${fmtN(m)} kg` };
  },

  () => {
    const m=rnd(0.1,2,0.1); const T1=-20; const T2=0;
    const c_eis=2.09; const qs=334;
    const Q1=parseFloat((m*c_eis*(T2-T1)).toFixed(2));
    const Q2=parseFloat((m*qs).toFixed(2));
    const Q=parseFloat((Q1+Q2).toFixed(2));
    return { cat:'🔥 Wärmelehre',
      question:`<strong>${fmtN(m)} kg Eis</strong> bei <strong>−20 °C</strong> sollen bis zum vollständigen Schmelzen erwärmt werden (Endtemperatur: 0 °C).<br><br>Berechnen Sie die gesamte benötigte Energie. (c<sub>Eis</sub> = 2,09 kJ/(kg·K), q<sub>s</sub> = 334 kJ/kg)`,
      hint:'Q = m·c_Eis·ΔT + m·qₛ', correct:Q, unit:'kJ',
      steps:`Q₁ (Erwärmen bis 0°C): ${fmtN(m)}·2,09·20 = ${fmtN(Q1)} kJ\nQ₂ (Schmelzen): ${fmtN(m)}·334 = ${fmtN(Q2)} kJ\nQ = ${fmtN(Q1)}+${fmtN(Q2)} = ${fmtN(Q)} kJ` };
  },

  () => {
    const P=rnd(5,50,5); const t=rnd(1,8,0.5);
    const Q=parseFloat((P*t*3600).toFixed(0));
    return { cat:'🔥 Wärmelehre',
      question:`Ein Elektrowiderstandsofen hat eine Heizleistung von <strong>${P} kW</strong>. Er läuft <strong>${fmtN(t)} Stunden</strong>.<br><br>Wie viel Wärmeenergie <em>Q</em> wird insgesamt erzeugt? (1 kWh = 3600 kJ)`,
      hint:'Q = P · t  (in kJ: P[kW] · t[h] · 3600)', correct:Q, unit:'kJ',
      steps:`Q = P·t = ${P} kW · ${fmtN(t)} h · 3600 s/h = ${fmtN(Q)} kJ\n(= ${fmtN(P*t)} kWh)` };
  },

  () => {
    const A=rnd(5,50,5); const lambda=rnd(0.3,2,0.1);
    const d=rnd(0.1,0.5,0.05); const dT=rnd(200,800,50);
    const t=rnd(1,10,1);
    const Qstrom=parseFloat((lambda*A*dT/d).toFixed(1));
    const Qges=parseFloat((Qstrom*t*3600/1000).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Eine Tunnelofenwand (Fläche ${A} m², Dicke ${d} m, λ = ${fmtN(lambda)} W/(m·K)) hat innen ${dT} K mehr als außen. In <strong>${t} Stunden</strong> – wie viel Energie <em>Q</em> geht durch die Wand verloren?`,
      hint:'Q̇ = λ·A·ΔT/d → Q = Q̇ · t', correct:Qges, unit:'MJ',
      steps:`Q̇ = ${fmtN(lambda)}·${A}·${dT}/${d} = ${fmtN(Qstrom)} W\nQ = ${fmtN(Qstrom)} W · ${t}·3600 s / 1.000.000 = ${fmtN(Qges)} MJ` };
  },

  () => {
    const m=rnd(100,2000,100); const cp=rnd(0.8,1.2,0.05);
    const T1=rnd(20,100,10); const T2=rnd(500,1200,50);
    const t=rnd(1,6,0.5);
    const Q=parseFloat((m*cp*(T2-T1)).toFixed(0));
    const P=parseFloat((Q/(t*3600)).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Ein Keramikofen soll <strong>${m} kg Material</strong> in <strong>${fmtN(t)} Stunden</strong> von ${T1} °C auf ${T2} °C erhitzen (c = ${fmtN(cp)} kJ/(kg·K)).<br><br>Welche Heizleistung <em>P</em> wird mindestens benötigt?`,
      hint:'P = Q / t  (Q = m·c·ΔT)', correct:P, unit:'kW',
      steps:`Q = ${m}·${fmtN(cp)}·${T2-T1} = ${fmtN(Q)} kJ\nP = Q/t = ${fmtN(Q)}/(${fmtN(t)}·3600) = ${fmtN(P)} kW` };
  },

  () => {
    const m1=rnd(1,10,0.5); const T1=rnd(500,900,50);
    const m2=rnd(5,30,1); const T2=rnd(15,30,5); const c=4.18;
    const c1=0.9; // Keramik
    const Tm=parseFloat(((m1*c1*T1+m2*c*T2)/(m1*c1+m2*c)).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Ein heißes Keramikstück (<strong>${fmtN(m1)} kg, ${T1} °C</strong>, c = 0,9 kJ/(kg·K)) wird zur Abschreckung in <strong>${m2} kg Wasser</strong> bei <strong>${T2} °C</strong> getaucht.<br><br>Welche Mischtemperatur <em>T<sub>m</sub></em> stellt sich ein?`,
      hint:'m₁·c₁·(T₁−Tm) = m₂·c₂·(Tm−T₂)', correct:Tm, unit:'°C',
      steps:`Tm = (m₁c₁T₁+m₂c₂T₂)/(m₁c₁+m₂c₂)\n= (${fmtN(m1)}·0,9·${T1}+${m2}·4,18·${T2})/(${fmtN(m1)}·0,9+${m2}·4,18)\n= ${fmtN(Tm)} °C` };
  },

  () => {
    const V=rnd(10,200,10); const T1=rnd(15,25,5); const T2=rnd(60,100,5);
    const rho=1.0; const c=4.18; const m=V*rho;
    const Q=parseFloat((m*c*(T2-T1)).toFixed(0));
    return { cat:'🔥 Wärmelehre',
      question:`Ein Warmwasserspeicher fasst <strong>${V} Liter</strong>. Das Wasser soll von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> erhitzt werden. (ρ = 1 kg/l, c = 4,18 kJ/(kg·K))<br><br>Welche Energie <em>Q</em> wird benötigt?`,
      hint:'Q = m·c·ΔT  (m = V · ρ)', correct:Q, unit:'kJ',
      steps:`m = ${V} l · 1 kg/l = ${V} kg\nQ = ${V}·4,18·${T2-T1} = ${fmtN(Q)} kJ` };
  },

  () => {
    const Q=rnd(500,5000,100); const T1=rnd(10,30,5); const T2=rnd(60,100,5);
    const c=4.18;
    const m=parseFloat((Q/(c*(T2-T1))).toFixed(2));
    return { cat:'🔥 Wärmelehre',
      question:`Für die Schlickeraufbereitung werden <strong>${fmtN(Q)} kJ</strong> Wärme eingesetzt, um Wasser von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> zu erhitzen.<br><br>Wie viel Wasser <em>m</em> kann dabei erwärmt werden? (c = 4,18 kJ/(kg·K))`,
      hint:'m = Q / (c · ΔT)', correct:m, unit:'kg',
      steps:`m = Q/(c·ΔT) = ${fmtN(Q)}/(4,18·${T2-T1}) = ${fmtN(m)} kg` };
  },

  () => {
    const m=rnd(1,20,1); const qv=2257; const c=4.18;
    const T1=rnd(20,80,10);
    const Q1=parseFloat((m*c*(100-T1)).toFixed(1));
    const Q2=parseFloat((m*qv).toFixed(1));
    const Q=parseFloat((Q1+Q2).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`In einer Trocknungsanlage sollen <strong>${m} kg Wasser</strong> (bei ${T1} °C) vollständig verdampft werden.<br><br>Welche Gesamtenergie wird benötigt? (c = 4,18 kJ/(kg·K), q<sub>v</sub> = 2257 kJ/kg)`,
      hint:'Q = m·c·(100−T₁) + m·qᵥ', correct:Q, unit:'kJ',
      steps:`Q₁ = ${m}·4,18·${100-T1} = ${fmtN(Q1)} kJ\nQ₂ = ${m}·2257 = ${fmtN(Q2)} kJ\nQ = ${fmtN(Q)} kJ` };
  },

  () => {
    const eta=rnd(50,85,5); const QVerlust=rnd(100,1000,50);
    const QZu=parseFloat((QVerlust/(1-eta/100)).toFixed(1));
    return { cat:'🔥 Wärmelehre',
      question:`Ein Ofen verliert <strong>${fmtN(QVerlust)} kJ</strong> als Wärmeverlust. Der Wirkungsgrad beträgt <strong>η = ${eta} %</strong>.<br><br>Wie viel Energie <em>Q<sub>zu</sub></em> muss dem Ofen insgesamt zugeführt werden?`,
      hint:'Q_Verlust = Q_zu · (1 − η/100)  →  Q_zu = Q_V / (1−η/100)', correct:QZu, unit:'kJ',
      steps:`Q_zu = ${fmtN(QVerlust)} / (1 − ${eta}/100) = ${fmtN(QVerlust)} / ${fmtN(1-eta/100)} = ${fmtN(QZu)} kJ` };
  },

  () => {
    const r=rnd(0.5,3,0.1); const h=rnd(1,5,0.1);
    const rhoWasser=1; const c=4.18;
    const V=parseFloat((Math.PI*r*r*h*1000).toFixed(1)); // Liter
    const m=V*rhoWasser;
    const dT=rnd(30,70,5);
    const Q=parseFloat((m*c*dT).toFixed(0));
    return { cat:'🔥 Wärmelehre',
      question:`Ein zylindrischer Schlickertank hat einen Radius von <strong>${fmtN(r)} m</strong> und eine Füllhöhe von <strong>${fmtN(h)} m</strong>. Der Schlicker (wie Wasser) soll um <strong>${dT} K</strong> erwärmt werden.<br><br>Berechnen Sie die nötige Wärmeenergie <em>Q</em>.`,
      hint:'V = π·r²·h, dann Q = m·c·ΔT', correct:Q, unit:'kJ',
      steps:`V = π·${fmtN(r)}²·${fmtN(h)} = ${fmtN(Math.PI*r*r*h)} m³ = ${fmtN(V)} l\nm = ${fmtN(m)} kg\nQ = ${fmtN(m)}·4,18·${dT} = ${fmtN(Q)} kJ` };
  },

  () => {
    const Tgas=rnd(800,1400,50); const Tofen=rnd(100,600,50);
    const alpha=rnd(20,80,5); const A=rnd(1,20,1);
    const Q=parseFloat((alpha*A*(Tgas-Tofen)).toFixed(0));
    return { cat:'🔥 Wärmelehre',
      question:`Heiße Brenngase (${Tgas} °C) strömen über eine Ofenwand (Fläche <strong>${A} m²</strong>, Temperatur ${Tofen} °C). Der konvektive Wärmeübergangskoeffizient beträgt <strong>α = ${alpha} W/(m²·K)</strong>.<br><br>Wie groß ist der Wärmestrom <em>Q̇</em>?`,
      hint:'Q̇ = α · A · (T_gas − T_wand)', correct:Q, unit:'W',
      steps:`Q̇ = ${alpha}·${A}·(${Tgas}−${Tofen}) = ${alpha}·${A}·${Tgas-Tofen} = ${fmtN(Q)} W` };
  }
,

  () => { const m=rnd(2,20,1),T1=rnd(10,40,5),T2=rnd(150,500,25),c=0.75; const Q=parseFloat((m*c*(T2-T1)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`<strong>${m} kg Quarz</strong> werden von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> erhitzt. (c = 0,75 kJ/(kg·K))<br><br>Wie groß ist <em>Q</em>?`, hint:'Q = m·c·ΔT', correct:Q, unit:'kJ', steps:`Q = ${m}·0,75·${T2-T1} = ${fmtN(Q)} kJ` }; },
  () => { const m=rnd(1,15,0.5),c=0.84,T1=20,T2=rnd(400,900,50); const Q=parseFloat((m*c*(T2-T1)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`<strong>${fmtN(m)} kg Schamottstein</strong> (c = 0,84 kJ/(kg·K)) werden von Raumtemperatur auf <strong>${T2} °C</strong> aufgeheizt.<br><br>Berechnen Sie <em>Q</em>.`, hint:'Q = m·c·ΔT', correct:Q, unit:'kJ', steps:`Q = ${fmtN(m)}·0,84·${T2-20} = ${fmtN(Q)} kJ` }; },
  () => { const P=rnd(10,100,5),eta=rnd(55,85,5); const Pnutz=parseFloat((P*eta/100).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Ein Tunnelofen hat eine Heizleistung von <strong>${P} kW</strong> und einen Wirkungsgrad von <strong>η = ${eta} %</strong>.<br><br>Welche Nutzleistung <em>P<sub>nutz</sub></em> steht zur Verfügung?`, hint:'P_nutz = P·η/100', correct:Pnutz, unit:'kW', steps:`P_nutz = ${P}·${eta}/100 = ${fmtN(Pnutz)} kW` }; },
  () => { const m=rnd(5,50,5),c=4.18,T1=rnd(5,20,5),T2=rnd(40,80,5); const Q=parseFloat((m*c*(T2-T1)).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`Ein Warmwasserspeicher mit <strong>${m} kg</strong> Wasser soll von <strong>${T1} °C</strong> auf <strong>${T2} °C</strong> erhitzt werden.<br><br>Welche Energie <em>Q</em> wird benötigt?`, hint:'Q = m·c·ΔT', correct:Q, unit:'kJ', steps:`Q = ${m}·4,18·${T2-T1} = ${fmtN(Q)} kJ` }; },
  () => { const Q=rnd(200,2000,100),m=rnd(2,20,1),c=0.84; const dT=parseFloat((Q/(m*c)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Einem Keramikbauteil (m = <strong>${m} kg</strong>, c = 0,84 kJ/(kg·K)) werden <strong>${fmtN(Q)} kJ</strong> zugeführt.<br><br>Um wie viel Kelvin <em>ΔT</em> steigt die Temperatur?`, hint:'ΔT = Q/(m·c)', correct:dT, unit:'K', steps:`ΔT = ${fmtN(Q)}/(${m}·0,84) = ${fmtN(dT)} K` }; },
  () => { const T1=rnd(500,900,50),T2=rnd(20,60,10),m1=rnd(1,5,0.5),m2=rnd(5,20,1); const c1=0.9,c2=4.18; const Tm=parseFloat(((m1*c1*T1+m2*c2*T2)/(m1*c1+m2*c2)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Heißes Keramikstück (${fmtN(m1)} kg, ${T1} °C, c=0,9) in Wasser (${m2} kg, ${T2} °C, c=4,18).<br><br>Mischtemperatur <em>T<sub>m</sub></em>?`, hint:'T_m=(m₁c₁T₁+m₂c₂T₂)/(m₁c₁+m₂c₂)', correct:Tm, unit:'°C', steps:`Tm=(${fmtN(m1)}·0,9·${T1}+${m2}·4,18·${T2})/(${fmtN(m1)}·0,9+${m2}·4,18)=${fmtN(Tm)} °C` }; },
  () => { const m=rnd(0.5,5,0.5),qs=334; const Q=parseFloat((m*qs).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`<strong>${fmtN(m)} kg Eis</strong> bei 0 °C sollen vollständig geschmolzen werden.<br><br>Wie viel Wärme <em>Q</em> wird nur für den Schmelzvorgang benötigt? (q<sub>s</sub> = 334 kJ/kg)`, hint:'Q = m·qₛ', correct:Q, unit:'kJ', steps:`Q = ${fmtN(m)}·334 = ${fmtN(Q)} kJ` }; },
  () => { const m=rnd(1,10,0.5),qv=2257; const Q=parseFloat((m*qv).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`<strong>${fmtN(m)} kg Wasser</strong> bei 100 °C sollen komplett verdampft werden.<br><br>Wie viel Energie <em>Q</em> wird nur für die Verdampfung benötigt? (q<sub>v</sub> = 2257 kJ/kg)`, hint:'Q = m·qᵥ', correct:Q, unit:'kJ', steps:`Q = ${fmtN(m)}·2257 = ${fmtN(Q)} kJ` }; },
  () => { const lambda=rnd(1,5,0.1),A=rnd(2,30,1),d=rnd(0.05,0.4,0.05),dT=rnd(100,600,50); const Q=parseFloat((lambda*A*dT/d).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Wand: A=${A} m², d=${d} m, λ=${fmtN(lambda)} W/(m·K), ΔT=${dT} K.<br><br>Wärmestrom <em>Q̇</em>?`, hint:'Q̇ = λ·A·ΔT/d', correct:Q, unit:'W', steps:`Q̇ = ${fmtN(lambda)}·${A}·${dT}/${d} = ${fmtN(Q)} W` }; },
  () => { const Q=rnd(1000,20000,500),t=rnd(0.5,5,0.5); const P=parseFloat((Q/(t*3600)).toFixed(2)); return { cat:'🔥 Wärmelehre', question:`In einem Trocknungsofen werden in <strong>${fmtN(t)} Stunden</strong> insgesamt <strong>${fmtN(Q)} kJ</strong> Wärme zugeführt.<br><br>Wie groß ist die Heizleistung <em>P</em> in kW?`, hint:'P = Q/t  (t in Sekunden)', correct:P, unit:'kW', steps:`P = ${fmtN(Q)} kJ / (${fmtN(t)}·3600 s) = ${fmtN(P)} kW` }; },
  () => { const m=rnd(100,1000,50),T1=20,T2=rnd(100,300,20),c=0.84; const Q=parseFloat((m*c*(T2-T1)).toFixed(0)); const t=rnd(1,4,0.5); const P=parseFloat((Q/(t*3600)).toFixed(2)); return { cat:'🔥 Wärmelehre', question:`<strong>${m} kg Keramik</strong> (c=0,84 kJ/(kg·K)) sollen in <strong>${fmtN(t)} h</strong> von 20°C auf ${T2}°C erhitzt werden.<br><br>Mindest-Heizleistung <em>P</em>?`, hint:'Q=m·c·ΔT, dann P=Q/(t·3600)', correct:P, unit:'kW', steps:`Q=${m}·0,84·${T2-20}=${fmtN(Q)} kJ\nP=${fmtN(Q)}/(${fmtN(t)}·3600)=${fmtN(P)} kW` }; },
  () => { const alpha=rnd(20,100,5),A=rnd(1,15,1),Tw=rnd(800,1300,50),Ts=rnd(200,600,50); const Q=parseFloat((alpha*A*(Tw-Ts)).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`Konvektion an einer Ofenwand: α=${alpha} W/(m²·K), A=${A} m², T<sub>Gas</sub>=${Tw}°C, T<sub>Wand</sub>=${Ts}°C.<br><br>Konvektiver Wärmestrom <em>Q̇</em>?`, hint:'Q̇ = α·A·ΔT', correct:Q, unit:'W', steps:`Q̇=${alpha}·${A}·(${Tw}-${Ts})=${alpha}·${A}·${Tw-Ts}=${fmtN(Q)} W` }; },
  () => { const m=rnd(10,100,5),c=4.18,T1=rnd(10,20,5),T2=100,qv=2257; const Q1=parseFloat((m*c*(T2-T1)).toFixed(0)); const Q2=parseFloat((m*qv).toFixed(0)); const Q=Q1+Q2; return { cat:'🔥 Wärmelehre', question:`<strong>${m} kg Wasser</strong> (${T1}°C) sollen vollständig verdampft werden.<br><br>Gesamtenergie <em>Q</em>? (c=4,18 kJ/(kg·K), q<sub>v</sub>=2257 kJ/kg)`, hint:'Q = m·c·(100−T₁) + m·qᵥ', correct:Q, unit:'kJ', steps:`Q₁=${m}·4,18·${100-T1}=${fmtN(Q1)} kJ\nQ₂=${m}·2257=${fmtN(Q2)} kJ\nQ=${fmtN(Q)} kJ` }; },
  () => { const d=rnd(0.1,0.5,0.05),lambda=rnd(0.5,3,0.1),A=rnd(5,40,5),dT=rnd(200,800,50); const R=parseFloat((d/(lambda*A)).toFixed(5)); const Qstrom=parseFloat((dT/R).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`Wand: d=${d} m, λ=${fmtN(lambda)} W/(m·K), A=${A} m², ΔT=${dT} K.<br><br>Berechnen Sie den Wärmewiderstand <em>R</em> und den Wärmestrom <em>Q̇</em>.`, hint:'R = d/(λ·A),  Q̇ = ΔT/R', correct:Qstrom, unit:'W', steps:`R=${d}/(${fmtN(lambda)}·${A})=${fmtN(R)} K/W\nQ̇=${dT}/${fmtN(R)}=${fmtN(Qstrom)} W` }; },
  () => { const Tverd=100,m=rnd(2,15,1),c=4.18,T_start=rnd(0,30,5),qv=2257,T_end=rnd(110,200,10),c_dampf=2.0; const Q1=parseFloat((m*c*(100-T_start)).toFixed(1)); const Q2=parseFloat((m*qv).toFixed(0)); const Q3=parseFloat((m*c_dampf*(T_end-100)).toFixed(1)); const Q=parseFloat((Q1+Q2+Q3).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`<strong>${m} kg Wasser</strong> (${T_start}°C) → Dampf (${T_end}°C): Erwärmen + Verdampfen + Überhitzen.<br><br>Gesamtenergie <em>Q</em>? (c<sub>Dampf</sub>=2,0 kJ/(kg·K))`, hint:'Q = m·c·ΔT₁ + m·qᵥ + m·c_Dampf·ΔT₂', correct:Q, unit:'kJ', steps:`Q₁=${fmtN(Q1)} kJ  Q₂=${fmtN(Q2)} kJ  Q₃=${fmtN(Q3)} kJ\nQ=${fmtN(Q)} kJ` }; },
  () => { const n=rnd(2,6,1),d=rnd(0.05,0.3,0.01),lambda=rnd(0.3,1.5,0.1),A=rnd(2,20,1),dT=rnd(100,500,25); const R_ges=parseFloat((n*d/(lambda*A)).toFixed(4)); const Q=parseFloat((dT/R_ges).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Eine ${n}-lagige Ofenwand (je d=${d} m, λ=${fmtN(lambda)} W/(m·K)), Fläche ${A} m², ΔT=${dT} K.<br><br>Wärmestrom <em>Q̇</em> durch alle Schichten?`, hint:'R_ges = n·d/(λ·A),  Q̇ = ΔT/R_ges', correct:Q, unit:'W', steps:`R_ges=${n}·${d}/(${fmtN(lambda)}·${A})=${fmtN(R_ges)} K/W\nQ̇=${dT}/${fmtN(R_ges)}=${fmtN(Q)} W` }; },
  () => { const V=rnd(1,20,1),rho=0.9,c=1.9,T1=rnd(5,20,5),T2=rnd(40,80,5); const m=parseFloat((V*rho).toFixed(1)); const Q=parseFloat((m*c*(T2-T1)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`<strong>${V} Liter Heizöl</strong> (ρ=0,9 kg/l, c=1,9 kJ/(kg·K)) werden von ${T1}°C auf ${T2}°C erwärmt.<br><br>Wie viel Energie <em>Q</em> wird benötigt?`, hint:'m = V·ρ, dann Q = m·c·ΔT', correct:Q, unit:'kJ', steps:`m=${V}·0,9=${fmtN(m)} kg\nQ=${fmtN(m)}·1,9·${T2-T1}=${fmtN(Q)} kJ` }; },
  () => { const m1=rnd(2,8,0.5),T1=rnd(20,50,5),m2=rnd(2,8,0.5),T2=rnd(60,90,5),c=4.18; const Tm=parseFloat(((m1*T1+m2*T2)/(m1+m2)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`${fmtN(m1)} kg Wasser (${T1}°C) + ${fmtN(m2)} kg Wasser (${T2}°C) werden gemischt.<br><br>Mischtemperatur <em>T<sub>m</sub></em>?`, hint:'T_m = (m₁T₁+m₂T₂)/(m₁+m₂)', correct:Tm, unit:'°C', steps:`T_m=(${fmtN(m1)}·${T1}+${fmtN(m2)}·${T2})/(${fmtN(m1)}+${fmtN(m2)})=${fmtN(Tm)} °C` }; },
  () => { const QVerlust=rnd(50,500,25),A=rnd(5,50,5),t=rnd(1,8,0.5); const q=parseFloat((QVerlust/A).toFixed(2)); return { cat:'🔥 Wärmelehre', question:`Ein Ofen verliert über seine Außenwand (${A} m²) in ${fmtN(t)} h insgesamt <strong>${QVerlust} kWh</strong>.<br><br>Wie groß ist die Wärmestromdichte <em>q</em> [W/m²]?`, hint:'q = Q/(A·t)  (Achtung: kWh → W)', correct:parseFloat((QVerlust*1000/(A*t)).toFixed(1)), unit:'W/m²', steps:`q = ${QVerlust}·1000 W / (${A} m² · ${fmtN(t)}·3600 s) ≈ ${fmtN(QVerlust*1000/(A*t))} W/m²` }; },
  () => { const m=rnd(500,3000,100),c=0.84,T1=20,T2=rnd(800,1200,50),eta=rnd(60,85,5); const Qnutz=parseFloat((m*c*(T2-T1)).toFixed(0)); const Qzu=parseFloat((Qnutz/(eta/100)).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`<strong>${m} kg Keramik</strong> (c=0,84 kJ/(kg·K)) werden von 20°C auf ${T2}°C gebrannt. Ofenwirkungsgrad η=${eta}%.<br><br>Wie viel Energie <em>Q<sub>zu</sub></em> muss dem Ofen insgesamt zugeführt werden?`, hint:'Q_nutz=m·c·ΔT, Q_zu=Q_nutz/η', correct:Qzu, unit:'kJ', steps:`Q_nutz=${m}·0,84·${T2-20}=${fmtN(Qnutz)} kJ\nQ_zu=${fmtN(Qnutz)}/${eta/100}=${fmtN(Qzu)} kJ` }; },
  () => { const Taus=rnd(600,1100,50),Tein=rnd(20,200,20),m_gas=rnd(1,10,0.5),cp=1.3; const QAbgas=parseFloat((m_gas*cp*(Taus-Tein)).toFixed(1)); return { cat:'🔥 Wärmelehre', question:`Abgase (${fmtN(m_gas)} kg/min, c<sub>p</sub>=1,3 kJ/(kg·K)) verlassen den Ofen mit <strong>${Taus}°C</strong> (Einlass: ${Tein}°C).<br><br>Welche Wärmeleistung geht mit den Abgasen verloren? (in kJ/min)`, hint:'Q = m·c_p·ΔT', correct:QAbgas, unit:'kJ/min', steps:`Q=${fmtN(m_gas)}·1,3·(${Taus}-${Tein})=${fmtN(QAbgas)} kJ/min` }; },
  () => { const E=rnd(1,50,1); const Q=parseFloat((E*3600).toFixed(0)); return { cat:'🔥 Wärmelehre', question:`Ein Elektroofen verbraucht <strong>${E} kWh</strong> Strom.<br><br>Wie viel Energie <em>Q</em> entspricht das in Kilojoule? (1 kWh = 3600 kJ)`, hint:'Q = E · 3600', correct:Q, unit:'kJ', steps:`Q = ${E} kWh · 3600 kJ/kWh = ${fmtN(Q)} kJ` }; },
  () => { const c1=0.84,c2=4.18,m=rnd(1,10,0.5),T=rnd(100,500,50); const ratio=parseFloat((c1/c2).toFixed(3)); return { cat:'🔥 Wärmelehre', question:`Vergleich: ${fmtN(m)} kg Keramik (c=0,84 kJ/(kg·K)) vs. ${fmtN(m)} kg Wasser (c=4,18 kJ/(kg·K)) werden je um ${T} K erwärmt.<br><br>Wievielmal mehr Energie braucht das Wasser?`, hint:'Verhältnis = c_Wasser / c_Keramik', correct:parseFloat((c2/c1).toFixed(2)), unit:'×', steps:`Verhältnis = 4,18/0,84 = ${fmtN(c2/c1)}` }; }
,

  ()=>{const m=rnd(1,50,1),c=rnd(0.4,1.2,0.05),dT=rnd(50,500,25);const Q=parseFloat((m*c*dT).toFixed(1));return{cat:'🔥 Wärmelehre',question:`m=<strong>${m} kg</strong>, c=<strong>${fmtN(c)} kJ/(kg·K)</strong>, ΔT=<strong>${dT} K</strong>. Wärmemenge <em>Q</em>?`,hint:'Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`Q=${m}·${fmtN(c)}·${dT}=${fmtN(Q)} kJ`};},
  ()=>{const Q=rnd(100,5000,50),m=rnd(1,50,1),c=rnd(0.5,1.0,0.05);const dT=parseFloat((Q/(m*c)).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Q=<strong>${fmtN(Q)} kJ</strong>, m=<strong>${m} kg</strong>, c=<strong>${fmtN(c)} kJ/(kg·K)</strong>. Temperaturdifferenz <em>ΔT</em>?`,hint:'ΔT=Q/(m·c)',correct:dT,unit:'K',steps:`ΔT=${fmtN(Q)}/(${m}·${fmtN(c)})=${fmtN(dT)} K`};},
  ()=>{const Q=rnd(100,5000,50),c=rnd(0.5,1.0,0.05),dT=rnd(50,400,25);const m=parseFloat((Q/(c*dT)).toFixed(2));return{cat:'🔥 Wärmelehre',question:`Q=<strong>${fmtN(Q)} kJ</strong>, c=<strong>${fmtN(c)} kJ/(kg·K)</strong>, ΔT=<strong>${dT} K</strong>. Masse <em>m</em>?`,hint:'m=Q/(c·ΔT)',correct:m,unit:'kg',steps:`m=${fmtN(Q)}/(${fmtN(c)}·${dT})=${fmtN(m)} kg`};},
  ()=>{const m=rnd(1,20,0.5),T1=-10,T2=0,c_eis=2.09,qs=334,T3=rnd(20,80,10),c_w=4.18;const Q1=parseFloat((m*c_eis*10).toFixed(1));const Q2=parseFloat((m*qs).toFixed(1));const Q3=parseFloat((m*c_w*T3).toFixed(1));const Q=parseFloat((Q1+Q2+Q3).toFixed(1));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(m)} kg Eis (−10°C)</strong> → Wasser (${T3}°C). Gesamtenergie <em>Q</em>?<br><small>c_Eis=2,09 / q_s=334 / c_W=4,18 kJ/(kg·K)</small>`,hint:'Q=m·c_Eis·10 + m·q_s + m·c_W·T3',correct:Q,unit:'kJ',steps:`Q₁=${fmtN(Q1)} Q₂=${fmtN(Q2)} Q₃=${fmtN(Q3)}\nGesamt=${fmtN(Q)} kJ`};},
  ()=>{const A=rnd(1,20,1),lambda=rnd(0.3,3,0.1),d=rnd(0.05,0.4,0.01),dT=rnd(100,700,50);const Qp=parseFloat((lambda*A*dT/d).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Wand: A=${A} m², λ=${fmtN(lambda)} W/(m·K), d=${d} m, ΔT=${dT} K. Wärmestrom <em>Q̇</em>?`,hint:'Q̇=λ·A·ΔT/d',correct:Qp,unit:'W',steps:`Q̇=${fmtN(lambda)}·${A}·${dT}/${d}=${fmtN(Qp)} W`};},
  ()=>{const P=rnd(5,100,5),t=rnd(0.5,10,0.5);const Q=parseFloat((P*t*3600).toFixed(0));return{cat:'🔥 Wärmelehre',question:`P=<strong>${P} kW</strong>, Betriebszeit=<strong>${fmtN(t)} h</strong>. Energie <em>Q</em> in kJ?`,hint:'Q=P·t·3600',correct:Q,unit:'kJ',steps:`Q=${P}·${fmtN(t)}·3600=${fmtN(Q)} kJ`};},
  ()=>{const Q=rnd(1000,30000,500),t=rnd(1,8,0.5);const P=parseFloat((Q/(t*3600)).toFixed(2));return{cat:'🔥 Wärmelehre',question:`Q=<strong>${fmtN(Q)} kJ</strong> in <strong>${fmtN(t)} h</strong>. Leistung <em>P</em> in kW?`,hint:'P=Q/(t·3600)',correct:P,unit:'kW',steps:`P=${fmtN(Q)}/(${fmtN(t)}·3600)=${fmtN(P)} kW`};},
  ()=>{const m=rnd(2,30,1),T1=rnd(10,30,5),T2=rnd(80,100,5),c=4.18;const Q=parseFloat((m*c*(T2-T1)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`${m} kg Wasser: ${T1}°C → ${T2}°C. Energie <em>Q</em>?`,hint:'Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`Q=${m}·4,18·${T2-T1}=${fmtN(Q)} kJ`};},
  ()=>{const m=rnd(1,10,0.5),qv=2257;const Q=parseFloat((m*qv).toFixed(0));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(m)} kg Wasser</strong> bei 100°C verdampfen. Energie (nur Verdampfung)?`,hint:'Q=m·qᵥ=m·2257',correct:Q,unit:'kJ',steps:`Q=${fmtN(m)}·2257=${fmtN(Q)} kJ`};},
  ()=>{const m=rnd(0.5,5,0.5),qs=334;const Q=parseFloat((m*qs).toFixed(1));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(m)} kg Eis</strong> bei 0°C schmelzen. Energie (nur Schmelzen)?`,hint:'Q=m·q_s=m·334',correct:Q,unit:'kJ',steps:`Q=${fmtN(m)}·334=${fmtN(Q)} kJ`};},
  ()=>{const m1=rnd(1,10,0.5),T1=rnd(80,100,5),m2=rnd(1,10,0.5),T2=rnd(10,30,5);const Tm=parseFloat(((m1*T1+m2*T2)/(m1+m2)).toFixed(1));return{cat:'🔥 Wärmelehre',question:`${fmtN(m1)} kg Wasser (${T1}°C) + ${fmtN(m2)} kg (${T2}°C) gemischt. <em>T<sub>m</sub></em>?`,hint:'T_m=(m₁T₁+m₂T₂)/(m₁+m₂)',correct:Tm,unit:'°C',steps:`T_m=${fmtN(Tm)} °C`};},
  ()=>{const eta=rnd(55,90,5),Q=rnd(500,10000,500);const Qn=parseFloat((Q*eta/100).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Q<sub>zu</sub>=<strong>${fmtN(Q)} kJ</strong>, η=<strong>${eta}%</strong>. Nutzwärme <em>Q<sub>n</sub></em>?`,hint:'Q_n=Q·η/100',correct:Qn,unit:'kJ',steps:`Q_n=${fmtN(Q)}·${eta}/100=${fmtN(Qn)} kJ`};},
  ()=>{const Qn=rnd(200,5000,100),eta=rnd(55,88,1);const Qzu=parseFloat((Qn/(eta/100)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Q<sub>nutz</sub>=<strong>${fmtN(Qn)} kJ</strong>, η=<strong>${eta}%</strong>. Zugeführte Energie <em>Q<sub>zu</sub></em>?`,hint:'Q_zu=Q_nutz/η',correct:Qzu,unit:'kJ',steps:`Q_zu=${fmtN(Qn)}/(${eta}/100)=${fmtN(Qzu)} kJ`};},
  ()=>{const Qzu=rnd(500,10000,250),Qn=rnd(200,parseFloat((Qzu*0.9).toFixed(0)),100);const eta=parseFloat((Qn/Qzu*100).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Q<sub>zu</sub>=<strong>${fmtN(Qzu)} kJ</strong>, Q<sub>nutz</sub>=<strong>${fmtN(Qn)} kJ</strong>. Wirkungsgrad <em>η</em>?`,hint:'η=Q_n/Q_zu·100',correct:eta,unit:'%',steps:`η=${fmtN(Qn)}/${fmtN(Qzu)}·100=${fmtN(eta)} %`};},
  ()=>{const E=rnd(1,100,1);const Q=parseFloat((E*3600).toFixed(0));return{cat:'🔥 Wärmelehre',question:`<strong>${E} kWh</strong> in kJ umrechnen?`,hint:'1 kWh = 3600 kJ',correct:Q,unit:'kJ',steps:`Q=${E}·3600=${fmtN(Q)} kJ`};},
  ()=>{const Q=rnd(1000,500000,1000);const E=parseFloat((Q/3600).toFixed(2));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(Q)} kJ</strong> in kWh umrechnen?`,hint:'E=Q/3600',correct:E,unit:'kWh',steps:`E=${fmtN(Q)}/3600=${fmtN(E)} kWh`};},
  ()=>{const alpha=rnd(15,80,5),A=rnd(1,20,1),Tg=rnd(600,1300,50),Tw=rnd(100,400,50);const Q=parseFloat((alpha*A*(Tg-Tw)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Konvektion: α=${alpha} W/(m²·K), A=${A} m², T<sub>Gas</sub>=${Tg}°C, T<sub>Wand</sub>=${Tw}°C. Wärmestrom <em>Q̇</em>?`,hint:'Q̇=α·A·ΔT',correct:Q,unit:'W',steps:`Q̇=${alpha}·${A}·${Tg-Tw}=${fmtN(Q)} W`};},
  ()=>{const m=rnd(100,2000,100),c=0.84,T1=20,T2=rnd(400,1200,50);const Q=parseFloat((m*c*(T2-T1)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Keramikcharge: <strong>${m} kg</strong> (c=0,84), 20→${T2}°C. Energie <em>Q</em>?`,hint:'Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`Q=${m}·0,84·${T2-20}=${fmtN(Q)} kJ`};},
  ()=>{const P=rnd(10,200,10),eta=rnd(60,90,5);const Pn=parseFloat((P*eta/100).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Ofenheizleistung <strong>${P} kW</strong>, η=<strong>${eta}%</strong>. Nutzleistung <em>P<sub>n</sub></em>?`,hint:'P_n=P·η/100',correct:Pn,unit:'kW',steps:`P_n=${P}·${eta}/100=${fmtN(Pn)} kW`};},
  ()=>{const V=rnd(5,100,5),rho=1.0,c=4.18,dT=rnd(30,80,5);const Q=parseFloat((V*rho*c*dT).toFixed(0));return{cat:'🔥 Wärmelehre',question:`<strong>${V} Liter Wasser</strong> um <strong>${dT} K</strong> erwärmen. Energie <em>Q</em>?`,hint:'Q=V·ρ·c·ΔT (ρ=1 kg/l)',correct:Q,unit:'kJ',steps:`Q=${V}·1·4,18·${dT}=${fmtN(Q)} kJ`};},
  ()=>{const m=rnd(1,20,1),c=4.18,T1=rnd(5,20,5),Tv=100,qv=2257;const Q1=parseFloat((m*c*(Tv-T1)).toFixed(1));const Q2=parseFloat((m*qv).toFixed(0));const Q=Q1+Q2;return{cat:'🔥 Wärmelehre',question:`<strong>${m} kg Wasser (${T1}°C)</strong> komplett verdampfen. Gesamtenergie?`,hint:'Q=m·c·(100−T₁)+m·qᵥ',correct:Q,unit:'kJ',steps:`Q₁=${fmtN(Q1)} kJ, Q₂=${fmtN(Q2)} kJ, Q=${fmtN(Q)} kJ`};},
  ()=>{const L=rnd(1,10,0.1),lambda=rnd(0.3,3,0.1),A=rnd(2,30,1),dT=rnd(100,600,25);const R=parseFloat((L/(lambda*A)).toFixed(4));const Qp=parseFloat((dT/R).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Wand: L=${fmtN(L)} m, λ=${fmtN(lambda)}, A=${A} m², ΔT=${dT} K. <em>R</em> und <em>Q̇</em>?`,hint:'R=L/(λ·A), Q̇=ΔT/R',correct:Qp,unit:'W',steps:`R=${fmtN(L)}/(${fmtN(lambda)}·${A})=${fmtN(R)} K/W\nQ̇=${dT}/${fmtN(R)}=${fmtN(Qp)} W`};},
  ()=>{const m=rnd(50,500,10),c=0.84,T_start=rnd(800,1100,50),T_end=20;const Q=parseFloat((m*c*(T_start-T_end)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Abkühlung: <strong>${m} kg Keramik</strong> (c=0,84) von ${T_start}°C auf 20°C. Abgegebene Wärme <em>Q</em>?`,hint:'Q=m·c·(T_start−T_end)',correct:Q,unit:'kJ',steps:`Q=${m}·0,84·${T_start-T_end}=${fmtN(Q)} kJ`};},
  ()=>{const U=rnd(100,400,10),I=rnd(5,50,1),t=rnd(1,6,0.5);const Q=parseFloat((U*I*t*3600/1000).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Heizstab: U=<strong>${U} V</strong>, I=<strong>${I} A</strong>, t=<strong>${fmtN(t)} h</strong>. Erzeugte Wärme <em>Q</em> in kJ?`,hint:'Q=U·I·t·3600/1000',correct:Q,unit:'kJ',steps:`P=${U}·${I}=${U*I} W\nQ=${U*I}·${fmtN(t)}·3600/1000=${fmtN(Q)} kJ`};},
  ()=>{const Q=rnd(100,2000,50),A=rnd(2,20,1),t=rnd(1,5,0.5);const q=parseFloat((Q*1000/(A*t*3600)).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Wärmestromdichte: Q=<strong>${Q} kWh</strong>, A=<strong>${A} m²</strong>, t=<strong>${fmtN(t)} h</strong>. q [W/m²]?`,hint:'q=Q·1000/(A·t·3600)',correct:q,unit:'W/m²',steps:`q=${Q}·1000/(${A}·${fmtN(t)}·3600)=${fmtN(q)} W/m²`};},
  ()=>{const T1_K=rnd(300,800,25),T2_K=rnd(900,1500,25);const sigma=5.67e-8;const q=parseFloat((sigma*(T2_K**4-T1_K**4)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Strahlungswärmestrom zwischen Schwarzen Körpern: T₁=${T1_K} K, T₂=${T2_K} K. <em>q</em> [W/m²]?<br><small>σ=5,67·10⁻⁸ W/(m²·K⁴)</small>`,hint:'q=σ·(T₂⁴−T₁⁴)',correct:q,unit:'W/m²',steps:`q=5,67·10⁻⁸·(${T2_K}⁴−${T1_K}⁴)=${fmtN(q)} W/m²`};},
  ()=>{const m=rnd(5,50,5),c=4.18,T1=rnd(10,20,5),T2=rnd(60,95,5),eta=rnd(70,95,5);const Qn=parseFloat((m*c*(T2-T1)).toFixed(0));const Qzu=parseFloat((Qn/(eta/100)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`<strong>${m} kg Wasser</strong> von ${T1}→${T2}°C erhitzen, η=${eta}%. Zugeführte Energie <em>Q<sub>zu</sub></em>?`,hint:'Q_nutz=m·c·ΔT, Q_zu=Q_nutz/η',correct:Qzu,unit:'kJ',steps:`Q_nutz=${m}·4,18·${T2-T1}=${fmtN(Qn)} kJ\nQ_zu=${fmtN(Qn)}/(${eta/100})=${fmtN(Qzu)} kJ`};},
  ()=>{const lambda=rnd(0.5,3,0.1),A=rnd(5,50,5),d=rnd(0.05,0.5,0.05),dT=rnd(200,800,50),t_h=rnd(1,8,0.5);const Qp=parseFloat((lambda*A*dT/d).toFixed(0));const Q_MJ=parseFloat((Qp*t_h*3600/1e6).toFixed(2));return{cat:'🔥 Wärmelehre',question:`Wandverlust: λ=${fmtN(lambda)}, A=${A} m², d=${d} m, ΔT=${dT} K. In ${fmtN(t_h)} h – Gesamtverlust <em>Q</em> in MJ?`,hint:'Q̇=λ·A·ΔT/d, Q=Q̇·t',correct:Q_MJ,unit:'MJ',steps:`Q̇=${fmtN(Qp)} W\nQ=${fmtN(Qp)}·${fmtN(t_h)}·3600/10⁶=${fmtN(Q_MJ)} MJ`};},
  ()=>{const n=rndInt(2,5),d=rnd(0.05,0.2,0.01),lambda=rnd(0.3,2,0.1),A=rnd(2,20,1),dT=rnd(200,700,50);const Rges=parseFloat((n*d/(lambda*A)).toFixed(5));const Qp=parseFloat((dT/Rges).toFixed(0));return{cat:'🔥 Wärmelehre',question:`${n}-lagige Wand: d/Lage=${d} m, λ=${fmtN(lambda)}, A=${A} m², ΔT=${dT} K. <em>Q̇</em>?`,hint:'R_ges=n·d/(λ·A), Q̇=ΔT/R',correct:Qp,unit:'W',steps:`R_ges=${n}·${d}/(${fmtN(lambda)}·${A})=${fmtN(Rges)}\nQ̇=${dT}/${fmtN(Rges)}=${fmtN(Qp)} W`};},
  ()=>{const m=rnd(0.1,3,0.1),T1=-15,T2=rnd(10,60,5),c_eis=2.09,qs=334,c_w=4.18;const Q1=parseFloat((m*c_eis*15).toFixed(2));const Q2=parseFloat((m*qs).toFixed(2));const Q3=parseFloat((m*c_w*T2).toFixed(2));const Q=parseFloat((Q1+Q2+Q3).toFixed(2));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(m)} kg Eis (−15°C)</strong> auf ${T2}°C erwärmen. Gesamtenergie?`,hint:'3 Schritte: Eis erwärmen + Schmelzen + Wasser erwärmen',correct:Q,unit:'kJ',steps:`Q₁=${fmtN(Q1)} + Q₂=${fmtN(Q2)} + Q₃=${fmtN(Q3)} = ${fmtN(Q)} kJ`};},
  ()=>{const m=rnd(200,3000,100),c=0.84,T1=20,T2=rnd(600,1200,50),t=rnd(2,8,0.5);const Q=parseFloat((m*c*(T2-T1)).toFixed(0));const P=parseFloat((Q/(t*3600)).toFixed(1));return{cat:'🔥 Wärmelehre',question:`<strong>${m} kg Keramik</strong> in <strong>${fmtN(t)} h</strong> auf ${T2}°C (c=0,84). Min. Heizleistung <em>P</em>?`,hint:'Q=m·c·ΔT, P=Q/(t·3600)',correct:P,unit:'kW',steps:`Q=${m}·0,84·${T2-20}=${fmtN(Q)} kJ\nP=${fmtN(Q)}/(${fmtN(t)}·3600)=${fmtN(P)} kW`};},
  ()=>{const m=rnd(1,15,0.5),c=4.18,T_zu=rnd(10,30,5),T_ab=rnd(60,90,5),t_min=rnd(1,30,1);const Q=parseFloat((m*c*(T_ab-T_zu)).toFixed(0));const P=parseFloat((Q/(t_min*60)).toFixed(2));return{cat:'🔥 Wärmelehre',question:`Warmwasserbereiter: ${fmtN(m)} kg Wasser, ${T_zu}→${T_ab}°C in <strong>${t_min} min</strong>. Leistung <em>P</em>?`,hint:'Q=m·c·ΔT, P=Q/t (t in s)',correct:P,unit:'kW',steps:`Q=${fmtN(m)}·4,18·${T_ab-T_zu}=${fmtN(Q)} kJ\nP=${fmtN(Q)}/(${t_min}·60)=${fmtN(P)} kW`};},
  ()=>{const rho=rnd(1500,2800,100),V=rnd(0.01,0.5,0.01),c=0.84,dT=rnd(100,500,25);const m=parseFloat((rho*V).toFixed(1));const Q=parseFloat((m*c*dT).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Körper: ρ=${rho} kg/m³, V=${fmtN(V)} m³, c=0,84 kJ/(kg·K), ΔT=${dT} K. Energie <em>Q</em>?`,hint:'m=ρ·V, Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`m=${rho}·${fmtN(V)}=${fmtN(m)} kg\nQ=${fmtN(m)}·0,84·${dT}=${fmtN(Q)} kJ`};},
  ()=>{const Qverlust=rnd(100,2000,50),Qzu=rnd(parseFloat((Qverlust*1.2).toFixed(0)),parseFloat((Qverlust*3).toFixed(0)),100);const eta=parseFloat(((Qzu-Qverlust)/Qzu*100).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Q<sub>zu</sub>=<strong>${fmtN(Qzu)} kJ</strong>, Q<sub>Verlust</sub>=<strong>${fmtN(Qverlust)} kJ</strong>. Wirkungsgrad <em>η</em>?`,hint:'η=(Q_zu−Q_Verlust)/Q_zu·100',correct:eta,unit:'%',steps:`Q_nutz=${fmtN(Qzu-Qverlust)}\nη=${fmtN(Qzu-Qverlust)}/${fmtN(Qzu)}·100=${fmtN(eta)} %`};},
  ()=>{const m=rnd(1,8,0.5),c=4.18,T1=rnd(20,40,5),T2=rnd(60,100,5);const Q=parseFloat((m*c*(T2-T1)).toFixed(0));const t_min=rnd(5,30,5);const P=parseFloat((Q/(t_min*60)).toFixed(2));return{cat:'🔥 Wärmelehre',question:`<strong>${fmtN(m)} kg Wasser</strong> in <strong>${t_min} min</strong> von ${T1}→${T2}°C. Heizleistung <em>P</em>?`,hint:'Q=m·c·ΔT, P=Q/(t_min·60)',correct:P,unit:'kW',steps:`Q=${fmtN(Q)} kJ\nP=${fmtN(Q)}/(${t_min}·60)=${fmtN(P)} kW`};},
  ()=>{const m=rnd(5,30,1),h=rnd(50,200,10),c_fe=0.45;const Q=parseFloat((m*c_fe*h).toFixed(1));return{cat:'🔥 Wärmelehre',question:`Stahl: m=<strong>${m} kg</strong>, c=0,45 kJ/(kg·K), ΔT=<strong>${h} K</strong>. Wärme <em>Q</em>?`,hint:'Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`Q=${m}·0,45·${h}=${fmtN(Q)} kJ`};},
  ()=>{const lambda1=rnd(0.3,1,0.05),lambda2=rnd(1,3,0.1),d1=rnd(0.1,0.3,0.01),d2=rnd(0.05,0.2,0.01),A=rnd(2,20,1),dT=rnd(200,700,50);const R=parseFloat((d1/(lambda1*A)+d2/(lambda2*A)).toFixed(5));const Qp=parseFloat((dT/R).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Zweischichtige Wand: λ₁=${fmtN(lambda1)}/d₁=${d1} m | λ₂=${fmtN(lambda2)}/d₂=${d2} m. A=${A} m², ΔT=${dT} K. <em>Q̇</em>?`,hint:'R=d₁/(λ₁A)+d₂/(λ₂A), Q̇=ΔT/R',correct:Qp,unit:'W',steps:`R=${fmtN(R)} K/W\nQ̇=${dT}/${fmtN(R)}=${fmtN(Qp)} W`};},
  ()=>{const m=rnd(10,100,5),c_al=0.9,T1=rnd(200,600,50),T2=20;const Q=parseFloat((m*c_al*(T1-T2)).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Aluminiumoxid: ${m} kg von ${T1}°C auf 20°C abkühlen (c=0,9 kJ/(kg·K)). Abgegebene Wärme <em>Q</em>?`,hint:'Q=m·c·|ΔT|',correct:Q,unit:'kJ',steps:`Q=${m}·0,9·${T1-T2}=${fmtN(Q)} kJ`};},
  ()=>{const V=rnd(500,5000,100),LG=rnd(1600,1900,10),c=4.18,dT=rnd(20,60,5);const m=parseFloat((V*LG/1000).toFixed(1));const Q=parseFloat((m*c*dT).toFixed(0));return{cat:'🔥 Wärmelehre',question:`Schlickertank: <strong>${V} l</strong>, LG=${LG} g/l, c=4,18 kJ/(kg·K), ΔT=${dT} K. Energie <em>Q</em>?`,hint:'m=V·LG/1000, Q=m·c·ΔT',correct:Q,unit:'kJ',steps:`m=${fmtN(m)} kg\nQ=${fmtN(m)}·4,18·${dT}=${fmtN(Q)} kJ`};}

  ],

  // ════ PHYSIK ════════════════════════════════════════════════
  physik: [

    () => {
      const m = rnd(1, 50, 1), h = rnd(2, 30, 1), g = 9.81;
      const Epot = parseFloat((m * g * h).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `Ein fertig gebranntes Keramikstück mit einer Masse von <strong>${m} Kilogramm</strong> wird zur Lagerung auf ein Regal in <strong>${h} Meter</strong> Höhe gestellt. Die Erdbeschleunigung beträgt 9,81 Meter pro Quadratsekunde.<br><br>Wie groß ist die potenzielle Energie, die dieses Stück auf dem Regal besitzt?`,
        correct: Epot, unit: 'J',
        steps: `Potenzielle Energie = Masse · Erdbeschleunigung · Höhe\nE = ${m} · 9,81 · ${h}\nE = ${fmtN(Epot)} J`
      };
    },

    () => {
      const m = rnd(2, 50, 1), h = rnd(2, 20, 1), g = 9.81;
      const v = parseFloat((Math.sqrt(2 * g * h)).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Keramikstück der Masse <strong>${m} Kilogramm</strong> fällt versehentlich aus einer Höhe von <strong>${h} Meter</strong> vom Regal herunter. Es startet aus der Ruhe (Anfangsgeschwindigkeit null). Die Erdbeschleunigung beträgt 9,81 Meter pro Quadratsekunde.<br><br>Mit welcher Geschwindigkeit trifft das Stück auf dem Boden auf?`,
        correct: v, unit: 'm/s',
        steps: `Die potenzielle Energie wandelt sich vollständig in kinetische Energie um.\nm·g·h = ½·m·v²\nv² = 2 · 9,81 · ${h} = ${fmtN(2*g*h)}\nv = ${fmtN(v)} m/s`
      };
    },

    () => {
      const m = rnd(500, 5000, 100), v = rnd(1, 20, 0.5);
      const Ekin = parseFloat((0.5 * m * v * v).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `In einer Kugelmühle bewegt sich ein Mahlkörper mit einer Masse von <strong>${m} Kilogramm</strong> mit einer Geschwindigkeit von <strong>${fmtN(v)} Meter pro Sekunde</strong>.<br><br>Wie groß ist die kinetische Energie dieses Mahlkörpers?`,
        correct: Ekin, unit: 'J',
        steps: `Kinetische Energie = ½ · Masse · Geschwindigkeit²\nE = 0,5 · ${m} · ${fmtN(v)}²\nE = 0,5 · ${m} · ${fmtN(v*v)}\nE = ${fmtN(Ekin)} J`
      };
    },

    () => {
      const F = rnd(100, 5000, 50), s = rnd(1, 30, 0.5);
      const W = parseFloat((F * s).toFixed(1));
      return {
        cat: '⚡ Physik',
        question: `Ein Presskolben übt beim Verdichten einer Keramikmasse eine Kraft von <strong>${fmtN(F)} Newton</strong> aus. Der Kolben legt dabei einen Weg von <strong>${fmtN(s)} Meter</strong> zurück.<br><br>Wie groß ist die dabei verrichtete mechanische Arbeit?`,
        correct: W, unit: 'J',
        steps: `Arbeit = Kraft · Weg\nW = ${fmtN(F)} · ${fmtN(s)}\nW = ${fmtN(W)} J`
      };
    },

    () => {
      const W = rnd(500, 20000, 500), t = rnd(5, 120, 5);
      const P = parseFloat((W / t).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Elektromotor in der Aufbereitungsanlage verrichtet innerhalb von <strong>${t} Sekunden</strong> eine mechanische Arbeit von <strong>${fmtN(W)} Joule</strong>.<br><br>Welche Leistung erbringt dieser Motor?`,
        correct: P, unit: 'W',
        steps: `Leistung = Arbeit / Zeit\nP = ${fmtN(W)} / ${t}\nP = ${fmtN(P)} W`
      };
    },

    () => {
      const m = rnd(1, 100, 1), a = rnd(0.5, 10, 0.5);
      const F = parseFloat((m * a).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Förderwagen in der Produktion hat eine Gesamtmasse von <strong>${m} Kilogramm</strong> und wird gleichmäßig mit einer Beschleunigung von <strong>${fmtN(a)} Meter pro Quadratsekunde</strong> angetrieben.<br><br>Welche Kraft muss dafür aufgewendet werden?`,
        correct: F, unit: 'N',
        steps: `Kraft = Masse · Beschleunigung\nF = ${m} · ${fmtN(a)}\nF = ${fmtN(F)} N`
      };
    },

    () => {
      const v0 = rnd(0, 10, 1), a = rnd(0.5, 5, 0.5), t = rnd(2, 15, 1);
      const s = parseFloat((v0*t + 0.5*a*t*t).toFixed(2));
      return {
        cat: '⚡ Physik',
        question: `Ein Transportband nimmt den Betrieb mit einer Anfangsgeschwindigkeit von <strong>${v0} Meter pro Sekunde</strong> auf und beschleunigt gleichmäßig mit <strong>${fmtN(a)} Meter pro Quadratsekunde</strong>.<br><br>Welchen Weg legt das Band in den ersten <strong>${t} Sekunden</strong> zurück?`,
        correct: s, unit: 'm',
        steps: `Weg = Anfangsgeschwindigkeit · Zeit + ½ · Beschleunigung · Zeit²\ns = ${v0} · ${t} + 0,5 · ${fmtN(a)} · ${t}²\ns = ${v0*t} + ${fmtN(0.5*a*t*t)}\ns = ${fmtN(s)} m`
      };
    },

    () => {
      const L0 = rnd(1, 10, 0.5);
      const alpha = parseFloat((rnd(5, 12, 1) * 1e-6).toPrecision(2));
      const dT = rnd(100, 800, 50);
      const dL = parseFloat((L0 * alpha * dT * 1000).toFixed(3));
      return {
        cat: '⚡ Physik',
        question: `Ein Keramikstab hat bei Raumtemperatur eine Länge von <strong>${fmtN(L0)} Meter</strong>. Der thermische Ausdehnungskoeffizient des Materials beträgt <strong>${alpha.toExponential()} pro Kelvin</strong>. Der Stab wird im Brennofen um <strong>${dT} Kelvin</strong> erwärmt.<br><br>Um wie viele Millimeter dehnt sich der Stab dabei aus?`,
        correct: dL, unit: 'mm',
        steps: `Längenänderung = Ausgangslänge · Ausdehnungskoeffizient · Temperaturdifferenz\ndL = ${fmtN(L0)} m · ${alpha.toExponential()} · ${dT} K\ndL = ${(L0 * alpha * dT).toExponential(3)} m\ndL = ${fmtN(dL)} mm`
      };
    },

    () => {
      const p = rnd(100, 400, 10), d = rnd(0.05, 0.5, 0.05);
      const F = parseFloat((p * 1e3 * Math.PI * (d/2) * (d/2)).toFixed(0));
      return {
        cat: '⚡ Physik',
        question: `Beim Druckschlickerguss arbeitet ein Kolben mit einem Durchmesser von <strong>${fmtN(d)} Meter</strong>. Der Arbeitsdruck beträgt <strong>${p} Kilopascal</strong>.<br><br>Welche Kraft wirkt dabei auf die gesamte Kolbenfläche?`,
        correct: F, unit: 'N',
        steps: `Kolbenfläche = π · (Durchmesser / 2)² = π · (${fmtN(d/2)})² = ${fmtN(Math.PI*(d/2)*(d/2))} m²\nKraft = Druck · Fläche\nF = ${p} · 1000 Pa · ${fmtN(Math.PI*(d/2)*(d/2))} m²\nF = ${fmtN(F)} N`
      };
    },,

() => {
    const m=rnd(500,5000,100); const v=rnd(0.5,10,0.5);
    const t=rnd(2,20,1); const F=parseFloat((m*v/t).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Förderwagen (<strong>${m} kg</strong>) wird aus dem Stillstand in <strong>${t} s</strong> auf <strong>${fmtN(v)} m/s</strong> beschleunigt.<br><br>Welche Kraft <em>F</em> ist dafür nötig?`,
      hint:'F = m · a,  a = v/t', correct:F, unit:'N',
      steps:`a = v/t = ${fmtN(v)}/${t} = ${fmtN(v/t)} m/s²\nF = m·a = ${m}·${fmtN(v/t)} = ${fmtN(F)} N` };
  },

  () => {
    const F=rnd(500,10000,500); const m=rnd(100,2000,100);
    const a=parseFloat((F/m).toFixed(3));
    return { cat:'⚡ Physik',
      question:`Eine Kraft von <strong>${fmtN(F)} N</strong> wirkt auf einen Körper der Masse <strong>${m} kg</strong>.<br><br>Mit welcher Beschleunigung <em>a</em> bewegt sich der Körper?`,
      hint:'a = F / m', correct:a, unit:'m/s²',
      steps:`a = F/m = ${fmtN(F)}/${m} = ${fmtN(a)} m/s²` };
  },

  () => {
    const h=rnd(1,20,1); const g=9.81;
    const v=parseFloat((Math.sqrt(2*g*h)).toFixed(2));
    const t=parseFloat((v/g).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Keramikrohling fällt aus <strong>${h} m</strong> Höhe. Wie lange dauert der Fall <em>t</em>? (g = 9,81 m/s²)`,
      hint:'h = ½·g·t²  →  t = √(2h/g)', correct:t, unit:'s',
      steps:`t = √(2h/g) = √(2·${h}/9,81) = √${fmtN(2*h/9.81)} = ${fmtN(t)} s` };
  },

  () => {
    const m=rnd(1,50,1); const v=rnd(1,20,1); const g=9.81;
    const h=parseFloat((v*v/(2*g)).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Körper (<strong>${m} kg</strong>) trifft mit <strong>${v} m/s</strong> auf dem Boden auf (freier Fall). Aus welcher Höhe <em>h</em> ist er gefallen?`,
      hint:'E_kin = E_pot → v² = 2·g·h → h = v²/(2g)', correct:h, unit:'m',
      steps:`h = v²/(2g) = ${v}²/(2·9,81) = ${v*v}/${fmtN(2*9.81)} = ${fmtN(h)} m` };
  },

  () => {
    const P=rnd(1,50,1); const t=rnd(1,60,1);
    const W=parseFloat((P*1000*t).toFixed(0));
    return { cat:'⚡ Physik',
      question:`Ein Pressantrieb hat eine Leistung von <strong>${P} kW</strong> und läuft <strong>${t} Sekunden</strong>.<br><br>Wie viel Arbeit <em>W</em> verrichtet er?`,
      hint:'W = P · t  (P in W)', correct:W, unit:'J',
      steps:`W = P·t = ${P*1000} W · ${t} s = ${fmtN(W)} J` };
  },

  () => {
    const W=rnd(1000,50000,1000); const F=rnd(100,5000,100);
    const s=parseFloat((W/F).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Um ein Werkzeug zu verfahren wird eine Arbeit von <strong>${fmtN(W)} J</strong> aufgewendet. Die wirkende Kraft beträgt <strong>${fmtN(F)} N</strong>.<br><br>Welchen Weg <em>s</em> legt das Werkzeug zurück?`,
      hint:'s = W / F', correct:s, unit:'m',
      steps:`s = W/F = ${fmtN(W)}/${fmtN(F)} = ${fmtN(s)} m` };
  },

  () => {
    const v0=rnd(0,15,1); const v=rnd(parseFloat((v0+2).toFixed(0)),30,1); const t=rnd(2,20,1);
    const a=parseFloat(((v-v0)/t).toFixed(3));
    return { cat:'⚡ Physik',
      question:`Ein Transportband beschleunigt von <strong>v₀ = ${v0} m/s</strong> auf <strong>v = ${v} m/s</strong> in <strong>${t} s</strong>.<br><br>Wie groß ist die Beschleunigung <em>a</em>?`,
      hint:'a = (v − v₀) / t', correct:a, unit:'m/s²',
      steps:`a = (v−v₀)/t = (${v}−${v0})/${t} = ${v-v0}/${t} = ${fmtN(a)} m/s²` };
  },

  () => {
    const v0=rnd(0,10,1); const v=rnd(parseFloat((v0+1).toFixed(0)),20,1); const t=rnd(2,15,1);
    const s=parseFloat(((v0+v)/2*t).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Hubwerk startet bei <strong>v₀ = ${v0} m/s</strong> und erreicht nach <strong>${t} s</strong> gleichmäßiger Beschleunigung eine Geschwindigkeit von <strong>v = ${v} m/s</strong>.<br><br>Welchen Weg <em>s</em> legt es zurück?`,
      hint:'s = (v₀ + v) / 2 · t', correct:s, unit:'m',
      steps:`s = (v₀+v)/2·t = (${v0}+${v})/2·${t} = ${fmtN((v0+v)/2)}·${t} = ${fmtN(s)} m` };
  },

  () => {
    const m=rnd(100,5000,100); const h=rnd(1,15,1); const g=9.81;
    const t=rnd(5,30,1);
    const P=parseFloat((m*g*h/t).toFixed(1));
    return { cat:'⚡ Physik',
      question:`Ein Kran hebt eine Last von <strong>${m} kg</strong> in <strong>${t} s</strong> auf eine Höhe von <strong>${h} m</strong>.<br><br>Welche Leistung <em>P</em> erbringt der Kran? (g = 9,81 m/s²)`,
      hint:'P = W/t = m·g·h / t', correct:P, unit:'W',
      steps:`W = m·g·h = ${m}·9,81·${h} = ${fmtN(m*9.81*h)} J\nP = W/t = ${fmtN(m*9.81*h)}/${t} = ${fmtN(P)} W` };
  },

  () => {
    const D=rnd(0.05,0.5,0.01); const p=rnd(50,500,25);
    const A=parseFloat((Math.PI*(D/2)**2).toFixed(5));
    const F=parseFloat((p*1000*A).toFixed(1));
    return { cat:'⚡ Physik',
      question:`Ein hydraulischer Zylinder hat einen Kolbendurchmesser von <strong>D = ${fmtN(D)} m</strong>. Der Hydraulikdruck beträgt <strong>p = ${p} kPa</strong>.<br><br>Welche Kraft <em>F</em> übt der Kolben aus?`,
      hint:'F = p · A,  A = π·(D/2)²', correct:F, unit:'N',
      steps:`A = π·(${fmtN(D/2)})² = ${fmtN(A)} m²\nF = ${p}·1000·${fmtN(A)} = ${fmtN(F)} N` };
  },

  () => {
    const m=rnd(50,2000,50); const v1=rnd(5,20,1); const v2=0;
    const t=rnd(1,10,0.5);
    const F=parseFloat((m*(v1-v2)/t).toFixed(1));
    return { cat:'⚡ Physik',
      question:`Ein Förderwagen (<strong>${m} kg</strong>, Geschwindigkeit ${v1} m/s) wird durch Reibungsbremsung in <strong>${fmtN(t)} s</strong> zum Stillstand gebracht.<br><br>Wie groß ist die Bremskraft <em>F</em>?`,
      hint:'F = m · |Δv| / t', correct:F, unit:'N',
      steps:`a = Δv/t = ${v1}/${fmtN(t)} = ${fmtN(v1/t)} m/s² (Verzögerung)\nF = m·a = ${m}·${fmtN(v1/t)} = ${fmtN(F)} N` };
  },

  () => {
    const m=rnd(10,200,10); const r=rnd(0.1,1,0.05); const n=rnd(100,1000,50);
    const omega=parseFloat((2*Math.PI*n/60).toFixed(2));
    const v=parseFloat((omega*r).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Mahlkörper befindet sich im Abstand <strong>r = ${fmtN(r)} m</strong> von der Drehachse einer Kugelmühle. Die Mühle dreht mit <strong>n = ${n} min⁻¹</strong>.<br><br>Welche Umfangsgeschwindigkeit <em>v</em> hat der Mahlkörper?`,
      hint:'v = ω · r,  ω = 2π · n / 60', correct:v, unit:'m/s',
      steps:`ω = 2π·${n}/60 = ${fmtN(omega)} rad/s\nv = ω·r = ${fmtN(omega)}·${fmtN(r)} = ${fmtN(v)} m/s` };
  },

  () => {
    const L0=rnd(0.5,5,0.1); const alpha=parseFloat((rnd(6,12,1)*1e-6).toPrecision(2));
    const dT=rnd(200,1000,50); const dL=parseFloat((L0*alpha*dT).toFixed(5));
    const dLmm=parseFloat((dL*1000).toFixed(3));
    return { cat:'⚡ Physik',
      question:`Ein Ofenrohr aus Stahl (L₀ = <strong>${fmtN(L0)} m</strong>, α = <strong>${alpha.toExponential()} 1/K</strong>) wird um <strong>ΔT = ${dT} K</strong> erhitzt.<br><br>Um wie viele <strong>mm</strong> dehnt es sich aus?`,
      hint:'ΔL = L₀·α·ΔT', correct:dLmm, unit:'mm',
      steps:`ΔL = ${fmtN(L0)}·${alpha.toExponential()}·${dT} = ${dL.toExponential(3)} m = ${fmtN(dLmm)} mm` };
  },

  () => {
    const m=rnd(10,500,10); const g=9.81; const mu=rnd(0.1,0.5,0.05);
    const FR=parseFloat((m*g*mu).toFixed(1));
    return { cat:'⚡ Physik',
      question:`Ein Formling (<strong>${m} kg</strong>) liegt auf einem Transportband. Der Reibungskoeffizient beträgt <strong>μ = ${fmtN(mu)}</strong>.<br><br>Wie groß ist die maximale Haftreibungskraft <em>F<sub>R</sub></em>?`,
      hint:'F_R = μ · m · g', correct:FR, unit:'N',
      steps:`F_R = μ·m·g = ${fmtN(mu)}·${m}·9,81 = ${fmtN(FR)} N` };
  },

  () => {
    const rho=rnd(1500,3000,100); const V=rnd(0.001,0.1,0.001);
    const m=parseFloat((rho*V).toFixed(3));
    return { cat:'⚡ Physik',
      question:`Eine Keramikprobe hat ein Volumen von <strong>V = ${fmtN(V)} m³</strong> und eine Dichte von <strong>ρ = ${rho} kg/m³</strong>.<br><br>Wie groß ist die Masse <em>m</em> der Probe?`,
      hint:'m = ρ · V', correct:m, unit:'kg',
      steps:`m = ρ·V = ${rho}·${fmtN(V)} = ${fmtN(m)} kg` };
  },

  () => {
    const m=rnd(50,500,10); const rho=rnd(1800,3000,50);
    const V=parseFloat((m/rho).toFixed(5));
    const Vcm3=parseFloat((V*1e6).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Eine Keramikprobe hat eine Masse von <strong>${m} g</strong> und eine Dichte von <strong>ρ = ${rho} kg/m³</strong>.<br><br>Wie groß ist ihr Volumen in <strong>cm³</strong>?`,
      hint:'V = m/ρ  (Einheiten beachten!)', correct:Vcm3, unit:'cm³',
      steps:`V = m/ρ = ${m}·10⁻³ kg / ${rho} kg/m³ = ${V.toExponential(3)} m³\n= ${fmtN(Vcm3)} cm³` };
  },

  () => {
    const n=rnd(500,3000,100); const M=rnd(10,500,10);
    const P=parseFloat((2*Math.PI*n/60*M/1000).toFixed(2));
    return { cat:'⚡ Physik',
      question:`Ein Motor dreht mit <strong>n = ${n} min⁻¹</strong> und liefert ein Drehmoment von <strong>M = ${M} Nm</strong>.<br><br>Welche Leistung <em>P</em> erbringt der Motor in kW?`,
      hint:'P = M · ω = M · 2π · n / 60', correct:P, unit:'kW',
      steps:`ω = 2π·${n}/60 = ${fmtN(2*Math.PI*n/60)} rad/s\nP = M·ω = ${M}·${fmtN(2*Math.PI*n/60)} = ${fmtN(P*1000)} W = ${fmtN(P)} kW` };
  },

  () => {
    const F=rnd(100,5000,100); const s=rnd(1,50,1); const t=rnd(5,60,5);
    const P=parseFloat((F*s/t).toFixed(1));
    return { cat:'⚡ Physik',
      question:`Eine Maschine bewegt eine Last mit <strong>F = ${fmtN(F)} N</strong> über einen Weg von <strong>s = ${s} m</strong> in <strong>t = ${t} s</strong>.<br><br>Welche Leistung <em>P</em> erbringt sie?`,
      hint:'P = W/t = F·s/t', correct:P, unit:'W',
      steps:`W = F·s = ${fmtN(F)}·${s} = ${fmtN(F*s)} J\nP = W/t = ${fmtN(F*s)}/${t} = ${fmtN(P)} W` };
  }
,

  () => { const m=rnd(1,100,1),h=rnd(1,20,1),g=9.81; const Ep=parseFloat((m*g*h).toFixed(1)); return { cat:'⚡ Physik', question:`Körper: <strong>${m} kg</strong>, Höhe: <strong>${h} m</strong>. Berechnen Sie die potenzielle Energie <em>E<sub>pot</sub></em>.`, hint:'E_pot = m·g·h', correct:Ep, unit:'J', steps:`E_pot=${m}·9,81·${h}=${fmtN(Ep)} J` }; },
  () => { const m=rnd(1,100,1),v=rnd(1,20,1); const Ek=parseFloat((0.5*m*v*v).toFixed(1)); return { cat:'⚡ Physik', question:`Körper: <strong>${m} kg</strong>, Geschwindigkeit: <strong>${v} m/s</strong>. Kinetische Energie <em>E<sub>kin</sub></em>?`, hint:'E_kin = ½·m·v²', correct:Ek, unit:'J', steps:`E_kin=0,5·${m}·${v}²=0,5·${m}·${v*v}=${fmtN(Ek)} J` }; },
  () => { const F=rnd(100,5000,100),s=rnd(1,50,1); const W=parseFloat((F*s).toFixed(0)); return { cat:'⚡ Physik', question:`Kraft <strong>${fmtN(F)} N</strong>, Weg <strong>${s} m</strong>. Arbeit <em>W</em>?`, hint:'W = F·s', correct:W, unit:'J', steps:`W=${fmtN(F)}·${s}=${fmtN(W)} J` }; },
  () => { const W=rnd(500,20000,500),t=rnd(5,120,5); const P=parseFloat((W/t).toFixed(2)); return { cat:'⚡ Physik', question:`Arbeit: <strong>${fmtN(W)} J</strong> in <strong>${t} s</strong>. Leistung <em>P</em>?`, hint:'P = W/t', correct:P, unit:'W', steps:`P=${fmtN(W)}/${t}=${fmtN(P)} W` }; },
  () => { const rho=rnd(1200,3500,100),m=rnd(50,2000,50); const V=parseFloat((m/rho*1e6).toFixed(2)); return { cat:'⚡ Physik', question:`Material: ρ=<strong>${rho} kg/m³</strong>, Masse: <strong>${m} kg</strong>. Volumen <em>V</em> in cm³?`, hint:'V = m/ρ  (×10⁶ für cm³)', correct:V, unit:'cm³', steps:`V=${m}/${rho}=${fmtN(m/rho)} m³ = ${fmtN(V)} cm³` }; },
  () => { const r=rnd(0.05,0.5,0.01),n=rnd(100,2000,50); const v=parseFloat((2*Math.PI*r*n/60).toFixed(2)); return { cat:'⚡ Physik', question:`Scheibe: r=<strong>${fmtN(r)} m</strong>, n=<strong>${n} min⁻¹</strong>. Umfangsgeschwindigkeit <em>v</em>?`, hint:'v = 2π·r·n/60', correct:v, unit:'m/s', steps:`v=2π·${fmtN(r)}·${n}/60=${fmtN(v)} m/s` }; },
  () => { const m=rnd(10,500,10),v=rnd(1,15,1),mu=rnd(0.1,0.4,0.05),g=9.81; const FR=parseFloat((mu*m*g).toFixed(1)); return { cat:'⚡ Physik', question:`Körper: <strong>${m} kg</strong>, μ=<strong>${fmtN(mu)}</strong>, g=9,81 m/s². Reibungskraft <em>F<sub>R</sub></em>?`, hint:'F_R = μ·m·g', correct:FR, unit:'N', steps:`F_R=${fmtN(mu)}·${m}·9,81=${fmtN(FR)} N` }; },
  () => { const m=rnd(100,5000,100),h=rnd(1,30,1),g=9.81,t=rnd(5,60,5); const P=parseFloat((m*g*h/t).toFixed(1)); return { cat:'⚡ Physik', question:`Kran hebt <strong>${m} kg</strong> auf <strong>${h} m</strong> in <strong>${t} s</strong>. Leistung <em>P</em>?`, hint:'P = m·g·h/t', correct:P, unit:'W', steps:`P=${m}·9,81·${h}/${t}=${fmtN(P)} W` }; },
  () => { const v0=0,a=rnd(0.5,5,0.5),t=rnd(2,15,1); const v=parseFloat((v0+a*t).toFixed(1)); const s=parseFloat((0.5*a*t*t).toFixed(2)); return { cat:'⚡ Physik', question:`Gleichmäßige Beschleunigung: a=<strong>${fmtN(a)} m/s²</strong>, t=<strong>${t} s</strong>, Startgeschwindigkeit v₀=0.<br><br>Endgeschwindigkeit <em>v</em>?`, hint:'v = v₀ + a·t', correct:v, unit:'m/s', steps:`v=0+${fmtN(a)}·${t}=${fmtN(v)} m/s` }; },
  () => { const m=rnd(200,5000,100),a=rnd(0.2,3,0.1); const F=parseFloat((m*a).toFixed(1)); return { cat:'⚡ Physik', question:`Masse: <strong>${m} kg</strong>, Beschleunigung: <strong>${fmtN(a)} m/s²</strong>. Kraft <em>F</em>?`, hint:'F = m·a', correct:F, unit:'N', steps:`F=${m}·${fmtN(a)}=${fmtN(F)} N` }; },
  () => { const F=rnd(500,10000,250),m=rnd(100,3000,100); const a=parseFloat((F/m).toFixed(3)); return { cat:'⚡ Physik', question:`Kraft: <strong>${fmtN(F)} N</strong>, Masse: <strong>${m} kg</strong>. Beschleunigung <em>a</em>?`, hint:'a = F/m', correct:a, unit:'m/s²', steps:`a=${fmtN(F)}/${m}=${fmtN(a)} m/s²` }; },
  () => { const h=rnd(1,25,1),g=9.81; const v=parseFloat((Math.sqrt(2*g*h)).toFixed(2)); return { cat:'⚡ Physik', question:`Freier Fall aus <strong>${h} m</strong> Höhe. Aufprallgeschwindigkeit <em>v</em>?`, hint:'v = √(2·g·h)', correct:v, unit:'m/s', steps:`v=√(2·9,81·${h})=√${fmtN(2*g*h)}=${fmtN(v)} m/s` }; },
  () => { const v=rnd(2,20,1),g=9.81; const h=parseFloat((v*v/(2*g)).toFixed(2)); return { cat:'⚡ Physik', question:`Aufprallgeschwindigkeit <strong>${v} m/s</strong>. Fallhöhe <em>h</em>?`, hint:'h = v²/(2g)', correct:h, unit:'m', steps:`h=${v}²/(2·9,81)=${v*v}/${fmtN(2*g)}=${fmtN(h)} m` }; },
  () => { const n=rnd(300,3000,100),M=rnd(10,300,10); const P=parseFloat((2*Math.PI*n/60*M/1000).toFixed(2)); return { cat:'⚡ Physik', question:`Motor: n=<strong>${n} min⁻¹</strong>, M=<strong>${M} Nm</strong>. Leistung <em>P</em> in kW?`, hint:'P = M·ω = M·2π·n/60', correct:P, unit:'kW', steps:`ω=2π·${n}/60=${fmtN(2*Math.PI*n/60)} rad/s\nP=${M}·${fmtN(2*Math.PI*n/60)}/1000=${fmtN(P)} kW` }; },
  () => { const P=rnd(1,50,1),n=rnd(200,2000,100); const M=parseFloat((P*1000/(2*Math.PI*n/60)).toFixed(1)); return { cat:'⚡ Physik', question:`Motor: P=<strong>${P} kW</strong>, n=<strong>${n} min⁻¹</strong>. Drehmoment <em>M</em>?`, hint:'M = P/ω = P·60/(2π·n)', correct:M, unit:'Nm', steps:`ω=2π·${n}/60=${fmtN(2*Math.PI*n/60)} rad/s\nM=${P*1000}/${fmtN(2*Math.PI*n/60)}=${fmtN(M)} Nm` }; },
  () => { const m=rnd(50,1000,50),v=rnd(1,20,1); const p=parseFloat((m*v).toFixed(0)); return { cat:'⚡ Physik', question:`Masse: <strong>${m} kg</strong>, Geschwindigkeit: <strong>${v} m/s</strong>. Impuls <em>p</em>?`, hint:'p = m·v', correct:p, unit:'kg·m/s', steps:`p=${m}·${v}=${fmtN(p)} kg·m/s` }; },
  () => { const m=rnd(0.05,2,0.05),g=9.81,h=rnd(0.5,5,0.1); const F=parseFloat((m*g).toFixed(3)); const W=parseFloat((m*g*h).toFixed(3)); return { cat:'⚡ Physik', question:`Kleines Keramikstück: m=<strong>${fmtN(m)} kg</strong>. Gewichtskraft <em>F<sub>G</sub></em>?`, hint:'F_G = m·g', correct:F, unit:'N', steps:`F_G=${fmtN(m)}·9,81=${fmtN(F)} N` }; },
  () => { const E=rnd(500,20000,500),m=rnd(10,500,10); const v=parseFloat((Math.sqrt(2*E/m)).toFixed(2)); return { cat:'⚡ Physik', question:`Kinetische Energie: <strong>${fmtN(E)} J</strong>, Masse: <strong>${m} kg</strong>. Geschwindigkeit <em>v</em>?`, hint:'v = √(2·E_kin/m)', correct:v, unit:'m/s', steps:`v=√(2·${fmtN(E)}/${m})=√${fmtN(2*E/m)}=${fmtN(v)} m/s` }; },
  () => { const p=rnd(50,500,25),A=rnd(0.01,0.5,0.01); const F=parseFloat((p*1000*A).toFixed(0)); return { cat:'⚡ Physik', question:`Druck: <strong>${p} kPa</strong>, Fläche: <strong>${A} m²</strong>. Kraft <em>F</em>?`, hint:'F = p·A  (p in Pa)', correct:F, unit:'N', steps:`F=${p*1000} Pa · ${A} m²=${fmtN(F)} N` }; },
  () => { const F=rnd(100,5000,100),A=rnd(0.001,0.1,0.001); const p=parseFloat((F/A/1000).toFixed(2)); return { cat:'⚡ Physik', question:`Kraft: <strong>${fmtN(F)} N</strong>, Fläche: <strong>${fmtN(A)} m²</strong>. Druck <em>p</em> in kPa?`, hint:'p = F/A', correct:p, unit:'kPa', steps:`p=${fmtN(F)}/${fmtN(A)}=${fmtN(F/A)} Pa = ${fmtN(p)} kPa` }; },
  () => { const v0=rnd(5,20,1),t=rnd(2,15,1),a=rnd(0.3,3,0.1); const s=parseFloat((v0*t+0.5*a*t*t).toFixed(2)); return { cat:'⚡ Physik', question:`Transportband: v₀=<strong>${v0} m/s</strong>, a=<strong>${fmtN(a)} m/s²</strong>, t=<strong>${t} s</strong>.<br><br>Zurückgelegter Weg <em>s</em>?`, hint:'s = v₀·t + ½·a·t²', correct:s, unit:'m', steps:`s=${v0}·${t}+0,5·${fmtN(a)}·${t}²=${v0*t}+${fmtN(0.5*a*t*t)}=${fmtN(s)} m` }; },
  () => { const L=rnd(0.5,5,0.1),alpha=parseFloat((rnd(6,12,1)*1e-6).toPrecision(2)),dT=rnd(100,800,50); const dLmm=parseFloat((L*alpha*dT*1000).toFixed(3)); return { cat:'⚡ Physik', question:`Stab: L=${fmtN(L)} m, α=${alpha.toExponential()}/K, ΔT=${dT} K. Längenänderung <em>ΔL</em> in mm?`, hint:'ΔL = L·α·ΔT (dann ×1000 für mm)', correct:dLmm, unit:'mm', steps:`ΔL=${fmtN(L)}·${alpha.toExponential()}·${dT}=${fmtN(L*alpha*dT)} m=${fmtN(dLmm)} mm` }; },
  () => { const U=rnd(100,400,10),I=rnd(1,50,1); const P=parseFloat((U*I/1000).toFixed(2)); return { cat:'⚡ Physik', question:`Elektrischer Widerstandsofen: U=<strong>${U} V</strong>, I=<strong>${I} A</strong>. Leistung <em>P</em> in kW?`, hint:'P = U·I', correct:P, unit:'kW', steps:`P=${U}·${I}=${U*I} W = ${fmtN(P)} kW` }; },
  () => { const P=rnd(5,50,1),t=rnd(1,12,0.5); const E=parseFloat((P*t).toFixed(1)); return { cat:'⚡ Physik', question:`Ofen mit P=<strong>${P} kW</strong> läuft <strong>${fmtN(t)} h</strong>. Energieverbrauch <em>E</em> in kWh?`, hint:'E = P·t', correct:E, unit:'kWh', steps:`E=${P} kW · ${fmtN(t)} h = ${fmtN(E)} kWh` }; }
,

  ()=>{const m=rnd(1,100,1),h=rnd(1,25,1),g=9.81;const Ep=parseFloat((m*g*h).toFixed(1));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>, h=<strong>${h} m</strong>. E<sub>pot</sub>?`,hint:'E_pot=m·g·h',correct:Ep,unit:'J',steps:`E_pot=${m}·9,81·${h}=${fmtN(Ep)} J`};},
  ()=>{const m=rnd(1,100,1),v=rnd(1,25,1);const Ek=parseFloat((0.5*m*v*v).toFixed(1));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>, v=<strong>${v} m/s</strong>. E<sub>kin</sub>?`,hint:'E_kin=½·m·v²',correct:Ek,unit:'J',steps:`E_kin=0,5·${m}·${v}²=${fmtN(Ek)} J`};},
  ()=>{const F=rnd(100,10000,100),s=rnd(1,50,1);const W=parseFloat((F*s).toFixed(0));return{cat:'⚡ Physik',question:`F=<strong>${fmtN(F)} N</strong>, s=<strong>${s} m</strong>. Arbeit <em>W</em>?`,hint:'W=F·s',correct:W,unit:'J',steps:`W=${fmtN(F)}·${s}=${fmtN(W)} J`};},
  ()=>{const W=rnd(500,50000,500),t=rnd(5,120,5);const P=parseFloat((W/t).toFixed(2));return{cat:'⚡ Physik',question:`W=<strong>${fmtN(W)} J</strong>, t=<strong>${t} s</strong>. Leistung <em>P</em>?`,hint:'P=W/t',correct:P,unit:'W',steps:`P=${fmtN(W)}/${t}=${fmtN(P)} W`};},
  ()=>{const m=rnd(50,5000,50),a=rnd(0.1,5,0.1);const F=parseFloat((m*a).toFixed(1));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>, a=<strong>${fmtN(a)} m/s²</strong>. Kraft <em>F</em>?`,hint:'F=m·a',correct:F,unit:'N',steps:`F=${m}·${fmtN(a)}=${fmtN(F)} N`};},
  ()=>{const F=rnd(200,20000,200),m=rnd(50,5000,50);const a=parseFloat((F/m).toFixed(3));return{cat:'⚡ Physik',question:`F=<strong>${fmtN(F)} N</strong>, m=<strong>${m} kg</strong>. Beschleunigung <em>a</em>?`,hint:'a=F/m',correct:a,unit:'m/s²',steps:`a=${fmtN(F)}/${m}=${fmtN(a)} m/s²`};},
  ()=>{const m=rnd(10,500,10),g=9.81;const FG=parseFloat((m*g).toFixed(1));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>. Gewichtskraft <em>F<sub>G</sub></em>?`,hint:'F_G=m·g',correct:FG,unit:'N',steps:`F_G=${m}·9,81=${fmtN(FG)} N`};},
  ()=>{const h=rnd(1,20,1),g=9.81;const v=parseFloat((Math.sqrt(2*g*h)).toFixed(2));return{cat:'⚡ Physik',question:`Freier Fall, h=<strong>${h} m</strong>. Aufprallgeschwindigkeit <em>v</em>?`,hint:'v=√(2·g·h)',correct:v,unit:'m/s',steps:`v=√(2·9,81·${h})=${fmtN(v)} m/s`};},
  ()=>{const h=rnd(1,20,1),g=9.81;const t=parseFloat((Math.sqrt(2*h/g)).toFixed(2));return{cat:'⚡ Physik',question:`Freier Fall, h=<strong>${h} m</strong>. Fallzeit <em>t</em>?`,hint:'t=√(2h/g)',correct:t,unit:'s',steps:`t=√(2·${h}/9,81)=${fmtN(t)} s`};},
  ()=>{const v=rnd(1,20,1),g=9.81;const h=parseFloat((v*v/(2*g)).toFixed(2));return{cat:'⚡ Physik',question:`v=<strong>${v} m/s</strong> Aufprall. Fallhöhe <em>h</em>?`,hint:'h=v²/(2g)',correct:h,unit:'m',steps:`h=${v}²/(2·9,81)=${fmtN(h)} m`};},
  ()=>{const n=rnd(300,3000,100),M=rnd(10,500,10);const P=parseFloat((2*Math.PI*n/60*M/1000).toFixed(2));return{cat:'⚡ Physik',question:`n=<strong>${n} min⁻¹</strong>, M=<strong>${M} Nm</strong>. Leistung <em>P</em> [kW]?`,hint:'P=M·2π·n/60',correct:P,unit:'kW',steps:`P=${M}·2π·${n}/60/1000=${fmtN(P)} kW`};},
  ()=>{const P=rnd(1,50,1),n=rnd(200,3000,100);const M=parseFloat((P*1000/(2*Math.PI*n/60)).toFixed(1));return{cat:'⚡ Physik',question:`P=<strong>${P} kW</strong>, n=<strong>${n} min⁻¹</strong>. Drehmoment <em>M</em>?`,hint:'M=P/ω, ω=2πn/60',correct:M,unit:'Nm',steps:`ω=${fmtN(2*Math.PI*n/60)} rad/s\nM=${P*1000}/${fmtN(2*Math.PI*n/60)}=${fmtN(M)} Nm`};},
  ()=>{const r=rnd(0.1,1,0.05),n=rnd(100,2000,50);const v=parseFloat((2*Math.PI*r*n/60).toFixed(2));return{cat:'⚡ Physik',question:`Scheibe r=<strong>${fmtN(r)} m</strong>, n=<strong>${n} min⁻¹</strong>. Umfangsgeschwindigkeit <em>v</em>?`,hint:'v=2π·r·n/60',correct:v,unit:'m/s',steps:`v=2π·${fmtN(r)}·${n}/60=${fmtN(v)} m/s`};},
  ()=>{const m=rnd(100,5000,100),h=rnd(2,20,1),g=9.81,t=rnd(5,60,5);const P=parseFloat((m*g*h/t).toFixed(1));return{cat:'⚡ Physik',question:`Hubwerk: m=<strong>${m} kg</strong>, h=<strong>${h} m</strong>, t=<strong>${t} s</strong>. Leistung <em>P</em>?`,hint:'P=m·g·h/t',correct:P,unit:'W',steps:`P=${m}·9,81·${h}/${t}=${fmtN(P)} W`};},
  ()=>{const m=rnd(100,2000,100),mu=rnd(0.1,0.5,0.05),g=9.81;const FR=parseFloat((m*g*mu).toFixed(1));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>, μ=<strong>${fmtN(mu)}</strong>. Reibungskraft <em>F<sub>R</sub></em>?`,hint:'F_R=μ·m·g',correct:FR,unit:'N',steps:`F_R=${fmtN(mu)}·${m}·9,81=${fmtN(FR)} N`};},
  ()=>{const v0=rnd(0,10,1),a=rnd(0.2,5,0.1),t=rnd(2,20,1);const v=parseFloat((v0+a*t).toFixed(1));return{cat:'⚡ Physik',question:`v₀=<strong>${v0} m/s</strong>, a=<strong>${fmtN(a)} m/s²</strong>, t=<strong>${t} s</strong>. Endgeschwindigkeit <em>v</em>?`,hint:'v=v₀+a·t',correct:v,unit:'m/s',steps:`v=${v0}+${fmtN(a)}·${t}=${fmtN(v)} m/s`};},
  ()=>{const v0=rnd(0,10,1),v=rnd(parseFloat((Math.max(v0,0)+1).toFixed(0)),25,1),t=rnd(2,20,1);const a=parseFloat(((v-v0)/t).toFixed(3));return{cat:'⚡ Physik',question:`v₀=${v0} m/s → v=${v} m/s in t=<strong>${t} s</strong>. Beschleunigung <em>a</em>?`,hint:'a=(v−v₀)/t',correct:a,unit:'m/s²',steps:`a=(${v}−${v0})/${t}=${fmtN(a)} m/s²`};},
  ()=>{const v0=rnd(0,10,1),a=rnd(0.2,3,0.1),t=rnd(2,15,1);const s=parseFloat((v0*t+0.5*a*t*t).toFixed(2));return{cat:'⚡ Physik',question:`v₀=${v0} m/s, a=${fmtN(a)} m/s², t=${t} s. Weg <em>s</em>?`,hint:'s=v₀·t+½·a·t²',correct:s,unit:'m',steps:`s=${v0}·${t}+0,5·${fmtN(a)}·${t}²=${fmtN(s)} m`};},
  ()=>{const U=rnd(110,400,10),I=rnd(1,30,1);const P=parseFloat((U*I/1000).toFixed(2));return{cat:'⚡ Physik',question:`U=<strong>${U} V</strong>, I=<strong>${I} A</strong>. Elektrische Leistung <em>P</em> [kW]?`,hint:'P=U·I/1000',correct:P,unit:'kW',steps:`P=${U}·${I}/1000=${fmtN(P)} kW`};},
  ()=>{const P=rnd(1,50,1),U=rnd(110,400,10);const I=parseFloat((P*1000/U).toFixed(1));return{cat:'⚡ Physik',question:`P=<strong>${P} kW</strong>, U=<strong>${U} V</strong>. Stromstärke <em>I</em>?`,hint:'I=P/U',correct:I,unit:'A',steps:`I=${P*1000}/${U}=${fmtN(I)} A`};},
  ()=>{const F=rnd(100,5000,50),A=rnd(0.001,0.1,0.001);const p=parseFloat((F/A/1000).toFixed(2));return{cat:'⚡ Physik',question:`F=<strong>${fmtN(F)} N</strong>, A=<strong>${fmtN(A)} m²</strong>. Druck <em>p</em> [kPa]?`,hint:'p=F/A/1000',correct:p,unit:'kPa',steps:`p=${fmtN(F)}/${fmtN(A)}/1000=${fmtN(p)} kPa`};},
  ()=>{const p=rnd(50,500,25),A=rnd(0.01,0.5,0.01);const F=parseFloat((p*1000*A).toFixed(0));return{cat:'⚡ Physik',question:`p=<strong>${p} kPa</strong>, A=<strong>${fmtN(A)} m²</strong>. Kraft <em>F</em>?`,hint:'F=p·A (p in Pa)',correct:F,unit:'N',steps:`F=${p*1000}·${fmtN(A)}=${fmtN(F)} N`};},
  ()=>{const rho=rnd(1000,3500,100),V=rnd(0.001,0.2,0.001);const m=parseFloat((rho*V).toFixed(2));return{cat:'⚡ Physik',question:`ρ=<strong>${rho} kg/m³</strong>, V=<strong>${fmtN(V)} m³</strong>. Masse <em>m</em>?`,hint:'m=ρ·V',correct:m,unit:'kg',steps:`m=${rho}·${fmtN(V)}=${fmtN(m)} kg`};},
  ()=>{const m=rnd(50,5000,50),rho=rnd(1500,3500,100);const V=parseFloat((m/rho).toFixed(5));const Vcm=parseFloat((V*1e6).toFixed(2));return{cat:'⚡ Physik',question:`m=<strong>${m} g</strong>, ρ=<strong>${rho} kg/m³</strong>. Volumen <em>V</em> [cm³]?`,hint:'V=m/ρ (×10⁶ für cm³)',correct:Vcm,unit:'cm³',steps:`V=${m}e-3/${rho}=${fmtN(V)} m³=${fmtN(Vcm)} cm³`};},
  ()=>{const m=rnd(1,200,1),v=rnd(1,20,1);const p=parseFloat((m*v).toFixed(0));return{cat:'⚡ Physik',question:`m=<strong>${m} kg</strong>, v=<strong>${v} m/s</strong>. Impuls <em>p</em>?`,hint:'p=m·v',correct:p,unit:'kg·m/s',steps:`p=${m}·${v}=${fmtN(p)} kg·m/s`};},
  ()=>{const P=rnd(5,100,5),t=rnd(1,12,1);const E=parseFloat((P*t).toFixed(0));return{cat:'⚡ Physik',question:`P=<strong>${P} kW</strong>, t=<strong>${t} h</strong>. Energieverbrauch <em>E</em> [kWh]?`,hint:'E=P·t',correct:E,unit:'kWh',steps:`E=${P}·${t}=${E} kWh`};},
  ()=>{const E=rnd(10,500,10),P=rnd(5,100,5);const t=parseFloat((E/P).toFixed(2));return{cat:'⚡ Physik',question:`E=<strong>${E} kWh</strong>, P=<strong>${P} kW</strong>. Laufzeit <em>t</em> [h]?`,hint:'t=E/P',correct:t,unit:'h',steps:`t=${E}/${P}=${fmtN(t)} h`};},
  ()=>{const m=rnd(10,200,5),v=rnd(2,20,1),mu=rnd(0.1,0.5,0.05),g=9.81;const FR=parseFloat((mu*m*g).toFixed(1));const s=parseFloat((0.5*m*v*v/FR).toFixed(2));return{cat:'⚡ Physik',question:`Bremsweg: m=${m} kg, v=${v} m/s, μ=${fmtN(mu)}. Bremsweg <em>s</em>?`,hint:'E_kin=F_R·s → s=m·v²/(2·μ·m·g)',correct:s,unit:'m',steps:`F_R=${fmtN(mu)}·${m}·9,81=${fmtN(FR)} N\ns=0,5·${m}·${v}²/${fmtN(FR)}=${fmtN(s)} m`};},
  ()=>{const L=rnd(0.5,5,0.1),alpha=parseFloat((rnd(6,12,1)*1e-6).toPrecision(2)),dT=rnd(100,800,50);const dL=parseFloat((L*alpha*dT*1000).toFixed(3));return{cat:'⚡ Physik',question:`Wärmeausdehnung: L=${fmtN(L)} m, α=${alpha.toExponential()}/K, ΔT=${dT} K. ΔL [mm]?`,hint:'ΔL=L·α·ΔT (×1000 für mm)',correct:dL,unit:'mm',steps:`ΔL=${fmtN(L)}·${alpha.toExponential()}·${dT}·1000=${fmtN(dL)} mm`};},
  ()=>{const m=rnd(50,2000,50),v=rnd(1,15,1),t=rnd(1,10,0.5);const F=parseFloat((m*v/t).toFixed(1));return{cat:'⚡ Physik',question:`Beschleunigung auf v=${v} m/s in t=${fmtN(t)} s, m=${m} kg. Kraft <em>F</em>?`,hint:'a=v/t, F=m·a',correct:F,unit:'N',steps:`a=${v}/${fmtN(t)}=${fmtN(v/t)} m/s²\nF=${m}·${fmtN(v/t)}=${fmtN(F)} N`};},
  ()=>{const m=rnd(10,500,10),v=rnd(1,20,1),t=rnd(1,10,0.5);const F=parseFloat((m*v/t).toFixed(1));return{cat:'⚡ Physik',question:`Bremsung: v=${v} m/s in t=${fmtN(t)} s, m=${m} kg. Bremskraft <em>F</em>?`,hint:'F=m·v/t',correct:F,unit:'N',steps:`F=${m}·${v}/${fmtN(t)}=${fmtN(F)} N`};},
  ()=>{const r=rnd(0.5,5,0.1),n=rnd(50,500,10);const omega=parseFloat((2*Math.PI*n/60).toFixed(2));const v=parseFloat((omega*r).toFixed(2));return{cat:'⚡ Physik',question:`Kreisbewegung: r=${fmtN(r)} m, n=${n} min⁻¹. Winkelgeschwindigkeit <em>ω</em> [rad/s]?`,hint:'ω=2π·n/60',correct:omega,unit:'rad/s',steps:`ω=2π·${n}/60=${fmtN(omega)} rad/s`};},
  ()=>{const m=rnd(100,5000,100),r=rnd(0.1,2,0.1),n=rnd(50,500,10);const omega=parseFloat((2*Math.PI*n/60).toFixed(2));const Fz=parseFloat((m*omega*omega*r).toFixed(0));return{cat:'⚡ Physik',question:`Fliehkraft: m=${m} kg, r=${fmtN(r)} m, n=${n} min⁻¹. <em>F<sub>Z</sub></em>?`,hint:'F_Z=m·ω²·r, ω=2πn/60',correct:Fz,unit:'N',steps:`ω=${fmtN(omega)} rad/s\nF_Z=${m}·${fmtN(omega)}²·${fmtN(r)}=${fmtN(Fz)} N`};},
  ()=>{const P=rnd(5,100,5),eta=rnd(75,97,1);const Pab=parseFloat((P*eta/100).toFixed(2));return{cat:'⚡ Physik',question:`Motor: P<sub>zu</sub>=<strong>${P} kW</strong>, η=<strong>${eta}%</strong>. Nutzleistung <em>P<sub>ab</sub></em>?`,hint:'P_ab=P_zu·η/100',correct:Pab,unit:'kW',steps:`P_ab=${P}·${eta}/100=${fmtN(Pab)} kW`};},
  ()=>{const D=rnd(0.05,0.3,0.01),p=rnd(100,800,25);const A=parseFloat((Math.PI*(D/2)**2).toFixed(6));const F=parseFloat((p*1000*A).toFixed(0));return{cat:'⚡ Physik',question:`Zylinder: D=<strong>${fmtN(D)} m</strong>, p=<strong>${p} kPa</strong>. Kolbenkraft <em>F</em>?`,hint:'F=p·A, A=π·(D/2)²',correct:F,unit:'N',steps:`A=π·(${fmtN(D/2)})²=${fmtN(A)} m²\nF=${p*1000}·${fmtN(A)}=${fmtN(F)} N`};},
  ()=>{const s1=rnd(10,50,5),t=rnd(5,30,1);const v=parseFloat((s1/t).toFixed(2));return{cat:'⚡ Physik',question:`Gleichförmige Bewegung: s=<strong>${s1} m</strong> in t=<strong>${t} s</strong>. Geschwindigkeit <em>v</em>?`,hint:'v=s/t',correct:v,unit:'m/s',steps:`v=${s1}/${t}=${fmtN(v)} m/s`};},
  ()=>{const v=rnd(1,20,1),t=rnd(5,60,5);const s=parseFloat((v*t).toFixed(0));return{cat:'⚡ Physik',question:`v=<strong>${v} m/s</strong>, t=<strong>${t} s</strong>. Weg <em>s</em>?`,hint:'s=v·t',correct:s,unit:'m',steps:`s=${v}·${t}=${s} m`};},
  ()=>{const m=rnd(1,50,1),h=rnd(1,20,1),g=9.81,eta=rnd(75,95,1);const W=parseFloat((m*g*h).toFixed(0));const Wzu=parseFloat((W/(eta/100)).toFixed(0));return{cat:'⚡ Physik',question:`Hubarbeit: m=${m} kg, h=${h} m, η=${eta}%. Aufgenommene Energie <em>W<sub>zu</sub></em>?`,hint:'W_nutz=m·g·h, W_zu=W_nutz/η',correct:Wzu,unit:'J',steps:`W_nutz=${fmtN(W)} J\nW_zu=${fmtN(W)}/(${eta}/100)=${fmtN(Wzu)} J`};},
  ()=>{const m=rnd(5,100,5),v0=rnd(5,20,1),mu=rnd(0.2,0.6,0.05),g=9.81;const s=parseFloat((v0*v0/(2*mu*g)).toFixed(2));return{cat:'⚡ Physik',question:`Gleitreibungsbremsung: m=${m} kg, v₀=${v0} m/s, μ=${fmtN(mu)}. Bremsweg <em>s</em>?`,hint:'s=v₀²/(2·μ·g)',correct:s,unit:'m',steps:`s=${v0}²/(2·${fmtN(mu)}·9,81)=${fmtN(s)} m`};}

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
        question: `Ein keramisches Bauteil hat vor dem Brennen eine Länge von <strong>${L0} Millimeter</strong>. Der Wärmeausdehnungskoeffizient des verwendeten Materials beträgt <strong>${alpha.toExponential()} pro Kelvin</strong>. Während des Brennvorgangs wird das Bauteil um <strong>${dT} Kelvin</strong> erwärmt.<br><br>Um wie viele Millimeter ändert sich die Länge des Bauteils durch diese Erwärmung?`,
        correct: dL, unit: 'mm',
        steps: `Längenänderung = Ausgangslänge · Ausdehnungskoeffizient · Temperaturdifferenz\ndL = ${L0} mm · ${alpha.toExponential()} · ${dT} K\ndL = ${fmtN(dL)} mm`
      };
    },

    () => {
      const dL = parseFloat((rnd(0.1, 5, 0.1)).toFixed(1));
      const L0 = rnd(200, 1000, 50);
      const dT = rnd(200, 800, 50);
      const alpha = parseFloat((dL / (L0 * dT)).toPrecision(3));
      return {
        cat: '📏 WAK',
        question: `Ein Keramikstab mit einer Ausgangslänge von <strong>${L0} Millimeter</strong> wird im Versuch um <strong>${dT} Kelvin</strong> erwärmt. Dabei verlängert er sich um <strong>${fmtN(dL)} Millimeter</strong>.<br><br>Welchen Wärmeausdehnungskoeffizienten hat dieses Material?`,
        correct: alpha, unit: '1/K',
        tol: 0.03,
        steps: `Ausdehnungskoeffizient = Längenänderung / (Ausgangslänge · Temperaturdifferenz)\nalpha = ${fmtN(dL)} / (${L0} · ${dT})\nalpha = ${fmtN(dL)} / ${L0 * dT}\nalpha = ${alpha.toExponential(3)} 1/K`
      };
    },,

() => {
    const L1=rnd(100,500,10); const T1=20; const T2=rnd(400,1200,50);
    const alpha=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2));
    const L2=parseFloat((L1*(1+alpha*(T2-T1))).toFixed(3));
    return { cat:'📏 WAK',
      question:`Ein Quarzrohr (L₁ = <strong>${L1} mm</strong> bei ${T1} °C, α = ${alpha.toExponential()} 1/K) wird auf <strong>${T2} °C</strong> erhitzt.<br><br>Welche Länge <em>L₂</em> hat es dann?`,
      hint:'L₂ = L₁ · (1 + α · ΔT)', correct:L2, unit:'mm',
      steps:`ΔT = ${T2-T1} K\nL₂ = ${L1}·(1 + ${alpha.toExponential()}·${T2-T1})\nL₂ = ${fmtN(L2)} mm` };
  },

  () => {
    const L0=rnd(200,1000,50); const dT=rnd(100,600,50);
    const dL=rnd(0.05,3,0.05);
    const alpha=parseFloat((dL/(L0*dT)).toPrecision(2));
    const alphaVal=parseFloat((dL/(L0*dT)*1e6).toFixed(2));
    return { cat:'📏 WAK',
      question:`Ein Keramikstab (L₀ = ${L0} mm) dehnt sich bei ΔT = ${dT} K um <strong>ΔL = ${fmtN(dL)} mm</strong> aus.<br><br>Wie groß ist der WAK <em>α</em> in 10⁻⁶/K?`,
      hint:'α = ΔL / (L₀ · ΔT)  [×10⁶ für Einheit]', correct:alphaVal, unit:'×10⁻⁶/K',
      tol:0.03,
      steps:`α = ΔL/(L₀·ΔT) = ${fmtN(dL)}/(${L0}·${dT})\nα = ${alpha.toExponential(3)} /K = ${fmtN(alphaVal)} ×10⁻⁶/K` };
  },

  () => {
    const alpha=parseFloat((rnd(4,12,0.5)*1e-6).toPrecision(2));
    const T1=20; const T2=rnd(600,1200,50);
    const L2=rnd(50,300,5);
    const L1=parseFloat((L2/(1+alpha*(T2-T1))).toFixed(3));
    return { cat:'📏 WAK',
      question:`Ein Bauteil soll bei <strong>${T2} °C</strong> eine Länge von <strong>${L2} mm</strong> haben. Der WAK beträgt α = ${alpha.toExponential()} 1/K, Raumtemperatur 20 °C.<br><br>Wie lang muss es <em>bei Raumtemperatur</em> gefertigt werden?`,
      hint:'L₁ = L₂ / (1 + α · ΔT)', correct:L1, unit:'mm',
      steps:`L₁ = ${L2}/(1+${alpha.toExponential()}·${T2-20}) = ${L2}/${fmtN(1+alpha*(T2-20))} = ${fmtN(L1)} mm` };
  },

  () => {
    const a1=parseFloat((rnd(5,8,0.5)*1e-6).toPrecision(2));
    const a2=parseFloat((rnd(9,13,0.5)*1e-6).toPrecision(2));
    const dT=rnd(200,800,50); const L=rnd(100,500,10);
    const dL1=parseFloat((L*a1*dT).toFixed(3));
    const dL2=parseFloat((L*a2*dT).toFixed(3));
    const dDiff=parseFloat((Math.abs(dL2-dL1)).toFixed(3));
    return { cat:'📏 WAK',
      question:`Zwei Materialien (α₁ = ${a1.toExponential()}/K, α₂ = ${a2.toExponential()}/K) sind jeweils ${L} mm lang und werden um ΔT = ${dT} K erhitzt.<br><br>Wie groß ist der Längenunterschied <em>ΔΔL</em> nach der Erwärmung?`,
      hint:'ΔL₁ = L·α₁·ΔT,  ΔL₂ = L·α₂·ΔT,  ΔΔL = |ΔL₂ − ΔL₁|', correct:dDiff, unit:'mm',
      steps:`ΔL₁ = ${L}·${a1.toExponential()}·${dT} = ${fmtN(dL1)} mm\nΔL₂ = ${L}·${a2.toExponential()}·${dT} = ${fmtN(dL2)} mm\nΔΔL = |${fmtN(dL2)}−${fmtN(dL1)}| = ${fmtN(dDiff)} mm` };
  },

  () => {
    const D=rnd(100,500,10); const alpha=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2));
    const dT=rnd(100,500,25);
    const dD=parseFloat((D*alpha*dT).toFixed(3));
    return { cat:'📏 WAK',
      question:`Eine keramische Schüssel hat einen Durchmesser von <strong>${D} mm</strong>. Beim Brand (ΔT = ${dT} K) dehnt sie sich mit α = ${alpha.toExponential()} /K aus.<br><br>Um wie viel <em>ΔD</em> vergrößert sich der Durchmesser?`,
      hint:'ΔD = D · α · ΔT (isotrope Ausdehnung)', correct:dD, unit:'mm',
      steps:`ΔD = D·α·ΔT = ${D}·${alpha.toExponential()}·${dT} = ${fmtN(dD)} mm` };
  },

  () => {
    const L=rnd(500,2000,100); const alpha=parseFloat((rnd(8,12,0.5)*1e-6).toPrecision(2));
    const dT=rnd(300,800,50);
    const dL=parseFloat((L*alpha*dT).toFixed(2));
    const dLcm=parseFloat((dL/10).toFixed(3));
    return { cat:'📏 WAK',
      question:`Ein Tunnelofenkanal ist <strong>${L} mm</strong> lang (α = ${alpha.toExponential()} /K). Die Betriebstemperatur liegt ${dT} K über der Montagetemperatur.<br><br>Welche Dehnungsfuge <em>ΔL</em> in <strong>cm</strong> muss eingeplant werden?`,
      hint:'ΔL = L·α·ΔT', correct:dLcm, unit:'cm',
      steps:`ΔL = ${L}·${alpha.toExponential()}·${dT} = ${fmtN(dL)} mm = ${fmtN(dLcm)} cm` };
  },

  () => {
    const alpha=parseFloat((rnd(4,10,0.5)*1e-6).toPrecision(2));
    const L0=rnd(100,400,10); const dL=rnd(0.02,1.5,0.02);
    const dT=parseFloat((dL/(L0*alpha)).toFixed(1));
    return { cat:'📏 WAK',
      question:`Ein Bauteil (L₀ = ${L0} mm, α = ${alpha.toExponential()} /K) darf sich höchstens um <strong>ΔL = ${fmtN(dL)} mm</strong> ausdehnen.<br><br>Um wie viel Kelvin <em>ΔT</em> darf es maximal erwärmt werden?`,
      hint:'ΔT = ΔL / (L₀ · α)', correct:dT, unit:'K',
      steps:`ΔT = ΔL/(L₀·α) = ${fmtN(dL)}/(${L0}·${alpha.toExponential()}) = ${fmtN(dT)} K` };
  },

  () => {
    const L0=rnd(200,800,50); const alpha=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2));
    const T1=rnd(20,100,10); const T2=rnd(500,1100,50);
    const sigma=parseFloat((200000*alpha*(T2-T1)).toFixed(0)); // E-Modul ~200 GPa für Stahl, MPa
    return { cat:'📏 WAK',
      question:`Ein Stahlanker (E = 200.000 MPa, α = ${alpha.toExponential()} /K) ist zwischen zwei Wänden eingespannt und kann sich nicht frei ausdehnen. Die Temperatur steigt um <strong>ΔT = ${T2-T1} K</strong>.<br><br>Welche Druckspannung <em>σ</em> entsteht im Stab?`,
      hint:'σ = E · α · ΔT', correct:sigma, unit:'MPa',
      steps:`σ = E·α·ΔT = 200.000·${alpha.toExponential()}·${T2-T1} = ${fmtN(sigma)} MPa` };
  }
,

  () => { const L=rnd(50,500,10),a=parseFloat((rnd(4,12,0.5)*1e-6).toPrecision(2)),dT=rnd(50,600,25); const dL=parseFloat((L*a*dT).toFixed(4)); return { cat:'📏 WAK', question:`L₀=<strong>${L} mm</strong>, α=${a.toExponential()}/K, ΔT=<strong>${dT} K</strong>. Längenänderung <em>ΔL</em>?`, hint:'ΔL = L₀·α·ΔT', correct:dL, unit:'mm', steps:`ΔL=${L}·${a.toExponential()}·${dT}=${fmtN(dL)} mm` }; },
  () => { const dL=rnd(0.1,3,0.05),L=rnd(100,600,50),a=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2)); const dT=parseFloat((dL/(L*a)).toFixed(1)); return { cat:'📏 WAK', question:`L₀=${L} mm, α=${a.toExponential()}/K, ΔL=<strong>${fmtN(dL)} mm</strong>. Temperaturdifferenz <em>ΔT</em>?`, hint:'ΔT = ΔL/(L₀·α)', correct:dT, unit:'K', steps:`ΔT=${fmtN(dL)}/(${L}·${a.toExponential()})=${fmtN(dT)} K` }; },
  () => { const L1=rnd(100,500,10),T1=20,T2=rnd(400,1100,50),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)); const L2=parseFloat((L1*(1+a*(T2-T1))).toFixed(3)); return { cat:'📏 WAK', question:`L₁=${L1} mm (bei 20°C), α=${a.toExponential()}/K. Länge <em>L₂</em> bei ${T2}°C?`, hint:'L₂ = L₁·(1+α·ΔT)', correct:L2, unit:'mm', steps:`L₂=${L1}·(1+${a.toExponential()}·${T2-T1})=${fmtN(L2)} mm` }; },
  () => { const a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),L=rnd(500,3000,100),T1=20,T2=rnd(600,1200,50); const E=200000; const sigma=parseFloat((E*a*(T2-T1)).toFixed(0)); return { cat:'📏 WAK', question:`Stahl: E=200.000 MPa, α=${a.toExponential()}/K, eingespannt. ΔT=${T2-T1} K. Thermospannung <em>σ</em>?`, hint:'σ = E·α·ΔT', correct:sigma, unit:'MPa', steps:`σ=200.000·${a.toExponential()}·${T2-T1}=${fmtN(sigma)} MPa` }; },
  () => { const a1=parseFloat((rnd(4,6,0.5)*1e-6).toPrecision(2)),a2=parseFloat((rnd(9,13,0.5)*1e-6).toPrecision(2)),L=rnd(100,400,10),dT=rnd(200,800,50); const diff=parseFloat((L*Math.abs(a2-a1)*dT).toFixed(3)); return { cat:'📏 WAK', question:`Zwei Materialien: α₁=${a1.toExponential()}/K, α₂=${a2.toExponential()}/K, L=${L} mm, ΔT=${dT} K.<br><br>Längenunterschied <em>ΔΔL</em> nach Erwärmen?`, hint:'ΔΔL = L·|α₂−α₁|·ΔT', correct:diff, unit:'mm', steps:`ΔΔL=${L}·|${a2.toExponential()}−${a1.toExponential()}|·${dT}=${fmtN(diff)} mm` }; },
  () => { const a=parseFloat((rnd(6,10,0.5)*1e-6).toPrecision(2)),L0=rnd(200,1000,50),dTmax=rnd(200,600,50); const dLmax=parseFloat((L0*a*dTmax).toFixed(3)); return { cat:'📏 WAK', question:`Fuge einplanen: L=${L0} mm, α=${a.toExponential()}/K, ΔT_max=${dTmax} K. Mindest-Fugenbreite <em>b</em>?`, hint:'b = L·α·ΔT', correct:dLmax, unit:'mm', steps:`b=${L0}·${a.toExponential()}·${dTmax}=${fmtN(dLmax)} mm` }; },
  () => { const L_soll=rnd(100,500,10),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),T1=20,T2=rnd(500,1100,50); const L_kalt=parseFloat((L_soll/(1+a*(T2-T1))).toFixed(3)); return { cat:'📏 WAK', question:`Bei ${T2}°C soll Länge = <strong>${L_soll} mm</strong>. α=${a.toExponential()}/K. Fertigungsmaß bei 20°C <em>L<sub>kalt</sub></em>?`, hint:'L_kalt = L_soll/(1+α·ΔT)', correct:L_kalt, unit:'mm', steps:`L_kalt=${L_soll}/(1+${a.toExponential()}·${T2-20})=${fmtN(L_kalt)} mm` }; },
  () => { const V0=rnd(100,1000,50),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),dT=rnd(100,500,25); const beta=parseFloat((3*a).toPrecision(2)); const dV=parseFloat((V0*beta*dT).toFixed(3)); return { cat:'📏 WAK', question:`Volumenausdehnung: V₀=${V0} cm³, α=${a.toExponential()}/K, ΔT=${dT} K. Volumenänderung <em>ΔV</em>? (β≈3α)`, hint:'ΔV = V₀·β·ΔT,  β = 3α', correct:dV, unit:'cm³', steps:`β=3·${a.toExponential()}=${beta.toExponential()}\nΔV=${V0}·${beta.toExponential()}·${dT}=${fmtN(dV)} cm³` }; },
  () => { const dL=rnd(0.5,5,0.1),L=rnd(200,800,50),dT=rnd(200,700,50); const a=parseFloat((dL/(L*dT)*1e6).toFixed(2)); return { cat:'📏 WAK', question:`Messung: L=${L} mm, ΔT=${dT} K, ΔL=${fmtN(dL)} mm. WAK <em>α</em> in 10⁻⁶/K?`, hint:'α = ΔL/(L·ΔT)', correct:a, unit:'×10⁻⁶/K', tol:0.03, steps:`α=${fmtN(dL)}/(${L}·${dT})=${fmtN(dL/(L*dT)*1e6)} ×10⁻⁶/K` }; },
  () => { const L=rnd(100,500,10),a=parseFloat((rnd(5,12,0.5)*1e-6).toPrecision(2)),T1=rnd(20,200,20),T2=rnd(500,1200,50); const dL=parseFloat((L*a*(T2-T1)).toFixed(4)); const Lneu=parseFloat((L+dL).toFixed(4)); return { cat:'📏 WAK', question:`Rohr L=${L} mm, α=${a.toExponential()}/K, T von ${T1}°C auf ${T2}°C.<br><br>Neue Länge <em>L₂</em>?`, hint:'L₂ = L₀ + L₀·α·ΔT', correct:Lneu, unit:'mm', steps:`ΔL=${L}·${a.toExponential()}·${T2-T1}=${fmtN(dL)} mm\nL₂=${L}+${fmtN(dL)}=${fmtN(Lneu)} mm` }; }
,

  ()=>{const L=rnd(50,1000,10),a=parseFloat((rnd(4,12,0.5)*1e-6).toPrecision(2)),dT=rnd(50,800,25);const dL=parseFloat((L*a*dT).toFixed(4));return{cat:'📏 WAK',question:`L₀=${L} mm, α=${a.toExponential()}/K, ΔT=${dT} K. <em>ΔL</em>?`,hint:'ΔL=L·α·ΔT',correct:dL,unit:'mm',steps:`ΔL=${L}·${a.toExponential()}·${dT}=${fmtN(dL)} mm`};},
  ()=>{const dL=rnd(0.1,4,0.05),L=rnd(100,800,50),dT=rnd(100,700,50);const a=parseFloat((dL/(L*dT)*1e6).toFixed(2));return{cat:'📏 WAK',question:`ΔL=${fmtN(dL)} mm, L=${L} mm, ΔT=${dT} K. WAK <em>α</em> [×10⁻⁶/K]?`,hint:'α=ΔL/(L·ΔT)',correct:a,unit:'×10⁻⁶/K',tol:0.03,steps:`α=${fmtN(dL)}/(${L}·${dT})·10⁶=${fmtN(a)} ×10⁻⁶/K`};},
  ()=>{const L1=rnd(100,600,10),T1=20,T2=rnd(300,1100,50),a=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2));const L2=parseFloat((L1*(1+a*(T2-T1))).toFixed(3));return{cat:'📏 WAK',question:`L₁=${L1} mm (20°C), α=${a.toExponential()}/K. Länge bei ${T2}°C?`,hint:'L₂=L₁·(1+α·ΔT)',correct:L2,unit:'mm',steps:`L₂=${L1}·(1+${a.toExponential()}·${T2-20})=${fmtN(L2)} mm`};},
  ()=>{const L_soll=rnd(100,500,10),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),T1=20,T2=rnd(500,1100,50);const Lkalt=parseFloat((L_soll/(1+a*(T2-T1))).toFixed(3));return{cat:'📏 WAK',question:`Soll bei ${T2}°C = ${L_soll} mm. α=${a.toExponential()}/K. Fertigungsmaß <em>L<sub>kalt</sub></em>?`,hint:'L_kalt=L_soll/(1+α·ΔT)',correct:Lkalt,unit:'mm',steps:`L_kalt=${L_soll}/(1+${a.toExponential()}·${T2-20})=${fmtN(Lkalt)} mm`};},
  ()=>{const a=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2)),L=rnd(200,1000,50),dLmax=rnd(0.2,2,0.1);const dT=parseFloat((dLmax/(L*a)).toFixed(1));return{cat:'📏 WAK',question:`Max. ΔL=${fmtN(dLmax)} mm, L=${L} mm, α=${a.toExponential()}/K. Max. Temperaturerhöhung <em>ΔT</em>?`,hint:'ΔT=ΔL/(L·α)',correct:dT,unit:'K',steps:`ΔT=${fmtN(dLmax)}/(${L}·${a.toExponential()})=${fmtN(dT)} K`};},
  ()=>{const a=parseFloat((rnd(6,10,0.5)*1e-6).toPrecision(2)),L=rnd(500,3000,100),dT=rnd(200,800,50);const E=200000;const sigma=parseFloat((E*a*dT).toFixed(0));return{cat:'📏 WAK',question:`Eingespannter Stab: E=200.000 MPa, α=${a.toExponential()}/K, ΔT=${dT} K. Thermospannung <em>σ</em>?`,hint:'σ=E·α·ΔT',correct:sigma,unit:'MPa',steps:`σ=200.000·${a.toExponential()}·${dT}=${fmtN(sigma)} MPa`};},
  ()=>{const V0=rnd(100,2000,50),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),dT=rnd(100,600,25);const beta=3*a;const dV=parseFloat((V0*beta*dT).toFixed(3));return{cat:'📏 WAK',question:`Volumenausdehnung: V₀=${V0} cm³, α=${a.toExponential()}/K, ΔT=${dT} K. ΔV? (β=3α)`,hint:'ΔV=V₀·3α·ΔT',correct:dV,unit:'cm³',steps:`β=3·${a.toExponential()}=${(3*a).toExponential()}\nΔV=${V0}·${(3*a).toExponential()}·${dT}=${fmtN(dV)} cm³`};},
  ()=>{const D=rnd(50,300,10),a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),dT=rnd(100,500,25);const dD=parseFloat((D*a*dT).toFixed(3));return{cat:'📏 WAK',question:`Keramikring: D=${D} mm, α=${a.toExponential()}/K, ΔT=${dT} K. Durchmesserausdehnung <em>ΔD</em>?`,hint:'ΔD=D·α·ΔT',correct:dD,unit:'mm',steps:`ΔD=${D}·${a.toExponential()}·${dT}=${fmtN(dD)} mm`};},
  ()=>{const a1=parseFloat((rnd(4,7,0.5)*1e-6).toPrecision(2)),a2=parseFloat((rnd(9,13,0.5)*1e-6).toPrecision(2)),L=rnd(100,400,10),dT=rnd(200,700,50);const diff=parseFloat((L*Math.abs(a2-a1)*dT).toFixed(3));return{cat:'📏 WAK',question:`Zwei Stäbe: α₁=${a1.toExponential()}, α₂=${a2.toExponential()}/K, L=${L} mm, ΔT=${dT} K. Längenunterschied <em>ΔΔL</em>?`,hint:'ΔΔL=L·|α₂−α₁|·ΔT',correct:diff,unit:'mm',steps:`ΔΔL=${L}·${(Math.abs(a2-a1)).toExponential(1)}·${dT}=${fmtN(diff)} mm`};},
  ()=>{const L=rnd(100,1000,50),a=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2)),dT=rnd(100,600,25);const dLcm=parseFloat((L*a*dT/10).toFixed(3));return{cat:'📏 WAK',question:`Dehnungsfuge: L=${L} mm, α=${a.toExponential()}/K, ΔT=${dT} K. Fuge in <em>cm</em>?`,hint:'ΔL=L·α·ΔT, dann /10 für cm',correct:dLcm,unit:'cm',steps:`ΔL=${fmtN(L*a*dT)} mm = ${fmtN(dLcm)} cm`};},
  ()=>{const L0=rnd(200,900,50),a=parseFloat((rnd(5,11,0.5)*1e-6).toPrecision(2)),T1=20,T2=rnd(400,1100,50);const L2=parseFloat((L0+L0*a*(T2-T1)).toFixed(3));return{cat:'📏 WAK',question:`Ofenrohr: L₀=${L0} mm, 20→${T2}°C, α=${a.toExponential()}/K. Länge <em>L₂</em>?`,hint:'L₂=L₀(1+α·ΔT)',correct:L2,unit:'mm',steps:`L₂=${L0}·(1+${a.toExponential()}·${T2-20})=${fmtN(L2)} mm`};},
  ()=>{const a=parseFloat((rnd(5,10,0.5)*1e-6).toPrecision(2)),dL=rnd(0.5,5,0.1),L=rnd(200,800,50);const dT=parseFloat((dL/(L*a)).toFixed(1));return{cat:'📏 WAK',question:`Gemessene Ausdehnung ΔL=${fmtN(dL)} mm bei L₀=${L} mm, α=${a.toExponential()}/K. Temperaturerhöhung <em>ΔT</em>?`,hint:'ΔT=ΔL/(L·α)',correct:dT,unit:'K',steps:`ΔT=${fmtN(dL)}/(${L}·${a.toExponential()})=${fmtN(dT)} K`};}

  ],

  // ════ SCHWINDUNG & MASSBRECHNUNG ════════════════════════════
  schwindung: [

    () => {
      const L_nass = rnd(100, 500, 10);
      const sw = rnd(3, 15, 0.5);
      const L_trocken = parseFloat((L_nass * (1 - sw / 100)).toFixed(2));
      return {
        cat: '📐 Schwindung',
        question: `Ein frisch geformtes Keramikbauteil hat eine Länge von <strong>${L_nass} Millimeter</strong>. Die Trocknungsschwindung des Materials beträgt <strong>${fmtN(sw)} Prozent</strong>.<br><br>Wie lang ist das Bauteil nach der vollständigen Trocknung?`,
        correct: L_trocken, unit: 'mm',
        steps: `Länge nach Trocknung = Ausgangslänge · (1 − Schwindung / 100)\nL = ${L_nass} · (1 − ${sw} / 100)\nL = ${L_nass} · ${fmtN(1 - sw/100)}\nL = ${fmtN(L_trocken)} mm`
      };
    },

    () => {
      const L_trocken = rnd(100, 500, 10);
      const sw = rnd(5, 20, 0.5);
      const L_gebrannt = parseFloat((L_trocken * (1 - sw / 100)).toFixed(2));
      return {
        cat: '📐 Schwindung',
        question: `Ein getrocknetes Keramikbauteil hat eine Länge von <strong>${L_trocken} Millimeter</strong>. Die Brennschwindung des Materials beträgt <strong>${fmtN(sw)} Prozent</strong>.<br><br>Welche Länge hat das Bauteil nach dem Brennvorgang?`,
        correct: L_gebrannt, unit: 'mm',
        steps: `Länge nach dem Brand = Länge vor dem Brand · (1 − Brennschwindung / 100)\nL = ${L_trocken} · (1 − ${sw} / 100)\nL = ${L_trocken} · ${fmtN(1 - sw/100)}\nL = ${fmtN(L_gebrannt)} mm`
      };
    },

    () => {
      const L_nass = rnd(150, 500, 10);
      const sw_t = rnd(3, 8, 0.5);
      const sw_b = rnd(5, 14, 0.5);
      const L_trocken = parseFloat((L_nass * (1 - sw_t / 100)).toFixed(2));
      const L_gebrannt = parseFloat((L_trocken * (1 - sw_b / 100)).toFixed(2));
      return {
        cat: '📐 Schwindung',
        question: `Ein frisch geformtes Bauteil hat eine Länge von <strong>${L_nass} Millimeter</strong>. Die Trocknungsschwindung beträgt <strong>${fmtN(sw_t)} Prozent</strong>, die Brennschwindung beträgt <strong>${fmtN(sw_b)} Prozent</strong>.<br><br>Welche Endlänge hat das Bauteil nach Trocknung und Brand?`,
        correct: L_gebrannt, unit: 'mm',
        steps: `Schritt 1 – Nach Trocknung:\nL_trocken = ${L_nass} · (1 − ${sw_t} / 100) = ${fmtN(L_trocken)} mm\n\nSchritt 2 – Nach dem Brand:\nL_gebrannt = ${fmtN(L_trocken)} · (1 − ${sw_b} / 100) = ${fmtN(L_gebrannt)} mm`
      };
    },

    () => {
      const L_gebrannt = rnd(80, 300, 5);
      const sw = rnd(8, 20, 0.5);
      const L_nass = parseFloat((L_gebrannt / (1 - sw / 100)).toFixed(2));
      return {
        cat: '📐 Schwindung',
        question: `Ein fertig gebranntes Keramikbauteil soll eine Länge von <strong>${L_gebrannt} Millimeter</strong> haben. Die Gesamtschwindung des Materials vom Nassmaß bis zum gebrannten Zustand beträgt <strong>${fmtN(sw)} Prozent</strong>.<br><br>Wie groß muss das Rohling beim Formen sein, damit das Endmaß stimmt?`,
        correct: L_nass, unit: 'mm',
        steps: `Das Formmaß ist größer als das Endmaß.\nFormmaß = Endmaß / (1 − Schwindung / 100)\nL = ${L_gebrannt} / (1 − ${sw} / 100)\nL = ${L_gebrannt} / ${fmtN(1 - sw/100)}\nL = ${fmtN(L_nass)} mm`
      };
    },

    () => {
      const L_nass = rnd(200, 600, 10);
      const L_gebrannt = rnd(150, L_nass - 10, 5);
      const sw = parseFloat(((L_nass - L_gebrannt) / L_nass * 100).toFixed(2));
      return {
        cat: '📐 Schwindung',
        question: `Ein Keramikbauteil hat im Nasszustand eine Länge von <strong>${L_nass} Millimeter</strong>. Nach dem Brennen beträgt die Länge nur noch <strong>${L_gebrannt} Millimeter</strong>.<br><br>Wie groß ist die Gesamtschwindung in Prozent?`,
        correct: sw, unit: '%',
        steps: `Schwindung = (Nassmaß − Endmaß) / Nassmaß · 100\nSchwindung = (${L_nass} − ${L_gebrannt}) / ${L_nass} · 100\nSchwindung = ${L_nass - L_gebrannt} / ${L_nass} · 100\nSchwindung = ${fmtN(sw)} %`
      };
    },,

() => {
    const GS=rnd(8,20,0.5); const Lgr=rnd(20,100,2);
    const Lbr=parseFloat((Lgr*(1-GS/100)).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`Die Gesamtschwindung einer Porzellanmasse beträgt <strong>GS = ${fmtN(GS)} %</strong>. Ein Rohling hat im Grünzustand eine Länge von <strong>${fmtN(Lgr)} cm</strong>.<br><br>Welche Länge hat das fertige Produkt nach dem Brand?`,
      hint:'L_gebrannt = L_grün · (1 − GS/100)', correct:Lbr, unit:'cm',
      steps:`L_br = ${fmtN(Lgr)}·(1 − ${fmtN(GS)}/100) = ${fmtN(Lgr)}·${fmtN(1-GS/100)} = ${fmtN(Lbr)} cm` };
  },

  () => {
    const Lgr=rnd(20,100,2); const Ltr=parseFloat((Lgr*rnd(0.88,0.97,0.01)).toFixed(2));
    const Lbr=parseFloat((Ltr*rnd(0.88,0.97,0.01)).toFixed(2));
    const TS=parseFloat(((Lgr-Ltr)/Lgr*100).toFixed(2));
    const BS=parseFloat(((Ltr-Lbr)/Ltr*100).toFixed(2));
    const GS=parseFloat(((Lgr-Lbr)/Lgr*100).toFixed(2));
    const falscheGS=parseFloat((TS+BS).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`Grün: <strong>${fmtN(Lgr)} cm</strong> → Trocken: <strong>${fmtN(Ltr)} cm</strong> → Gebrannt: <strong>${fmtN(Lbr)} cm</strong>.<br><br>Berechnen Sie die Gesamtschwindung <em>GS</em> korrekt (Bezug: Grünzustand). Was wäre der Fehler, wenn man TS+BS addiert?`,
      hint:'GS = (L_grün − L_gebrannt) / L_grün · 100', correct:GS, unit:'%',
      steps:`TS = (${fmtN(Lgr)}−${fmtN(Ltr)})/${fmtN(Lgr)}·100 = ${fmtN(TS)} %\nBS = (${fmtN(Ltr)}−${fmtN(Lbr)})/${fmtN(Ltr)}·100 = ${fmtN(BS)} %\nGS korrekt = (${fmtN(Lgr)}−${fmtN(Lbr)})/${fmtN(Lgr)}·100 = ${fmtN(GS)} %\nFalsches TS+BS = ${fmtN(falscheGS)} % ≠ GS!` };
  },

  () => {
    const TS=rnd(4,12,0.5); const BS=rnd(3,10,0.5); const Lgr=rnd(20,80,2);
    const Ltr=parseFloat((Lgr*(1-TS/100)).toFixed(2));
    const Lbr=parseFloat((Ltr*(1-BS/100)).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`TS = <strong>${fmtN(TS)} %</strong>, BS = <strong>${fmtN(BS)} %</strong>. Grünmaß: <strong>${fmtN(Lgr)} cm</strong>.<br><br>Berechnen Sie das Brennmaß <em>L<sub>gebrannt</sub></em> schrittweise.`,
      hint:'L_tr = L_gr·(1−TS/100),  L_br = L_tr·(1−BS/100)', correct:Lbr, unit:'cm',
      steps:`L_tr = ${fmtN(Lgr)}·(1−${fmtN(TS)}/100) = ${fmtN(Ltr)} cm\nL_br = ${fmtN(Ltr)}·(1−${fmtN(BS)}/100) = ${fmtN(Lbr)} cm` };
  },

  () => {
    const Lbr=rnd(10,60,1); const GS=rnd(10,22,0.5);
    const Lgr=parseFloat((Lbr/(1-GS/100)).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`Ein Keramikteil soll nach dem Brand <strong>${fmtN(Lbr)} cm</strong> groß sein. Die Gesamtschwindung beträgt <strong>GS = ${fmtN(GS)} %</strong>.<br><br>Wie groß muss das Grünmaß <em>L<sub>grün</sub></em> sein?`,
      hint:'L_grün = L_br / (1 − GS/100)', correct:Lgr, unit:'cm',
      steps:`L_grün = ${fmtN(Lbr)} / (1 − ${fmtN(GS)}/100)\n= ${fmtN(Lbr)} / ${fmtN(1-GS/100)}\n= ${fmtN(Lgr)} cm` };
  },

  () => {
    const D_gips=rnd(15,40,1); const TS=rnd(5,12,0.5); const BS=rnd(4,9,0.5);
    const D_tr=parseFloat((D_gips*(1-TS/100)).toFixed(2));
    const D_br=parseFloat((D_tr*(1-BS/100)).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`Eine Gipsform hat innen einen Durchmesser von <strong>${D_gips} cm</strong>. TS = ${fmtN(TS)} %, BS = ${fmtN(BS)} %.<br><br>Welchen Durchmesser <em>D<sub>Brand</sub></em> hat das fertige Teil?`,
      hint:'Gleiche Formeln wie bei Längen (isotrope Schwindung)', correct:D_br, unit:'cm',
      steps:`D_tr = ${D_gips}·(1−${fmtN(TS)}/100) = ${fmtN(D_tr)} cm\nD_br = ${fmtN(D_tr)}·(1−${fmtN(BS)}/100) = ${fmtN(D_br)} cm` };
  },

  () => {
    const L_soll=rnd(20,80,2); const TS=rnd(5,12,0.5); const BS=rnd(3,9,0.5);
    const Lbr_aus_Ltr=1-BS/100;
    const Ltr_aus_Lgr=1-TS/100;
    const Lgr=parseFloat((L_soll/(Lbr_aus_Ltr*Ltr_aus_Lgr)).toFixed(2));
    return { cat:'📐 Schwindung',
      question:`Ein Produkt soll nach dem Brand exakt <strong>${L_soll} cm</strong> lang sein. TS = ${fmtN(TS)} %, BS = ${fmtN(BS)} %.<br><br>Wie groß muss das Grünmaß <em>L<sub>grün</sub></em> sein?`,
      hint:'L_grün = L_br / ((1−BS/100)·(1−TS/100))', correct:Lgr, unit:'cm',
      steps:`Faktor = (1−${fmtN(BS)}/100)·(1−${fmtN(TS)}/100) = ${fmtN(Lbr_aus_Ltr)}·${fmtN(Ltr_aus_Lgr)} = ${fmtN(Lbr_aus_Ltr*Ltr_aus_Lgr)}\nL_grün = ${L_soll} / ${fmtN(Lbr_aus_Ltr*Ltr_aus_Lgr)} = ${fmtN(Lgr)} cm` };
  },

  () => {
    const Lgr=rnd(20,100,2); const Lbr=parseFloat((Lgr*rnd(0.78,0.92,0.01)).toFixed(2));
    const GS_L=parseFloat(((Lgr-Lbr)/Lgr*100).toFixed(2));
    const V_gr=parseFloat((Lgr**3).toFixed(1));
    const V_br=parseFloat((Lbr**3).toFixed(1));
    const VS=parseFloat(((V_gr-V_br)/V_gr*100).toFixed(1));
    return { cat:'📐 Schwindung',
      question:`Ein Würfel schrumpft von <strong>L<sub>grün</sub> = ${fmtN(Lgr)} cm</strong> auf <strong>L<sub>br</sub> = ${fmtN(Lbr)} cm</strong>.<br><br>Wie groß ist die <strong>Volumenschwindung</strong> <em>VS</em>?`,
      hint:'VS = (V_grün − V_br) / V_grün · 100,  V = L³', correct:VS, unit:'%',
      steps:`V_grün = ${fmtN(Lgr)}³ = ${fmtN(V_gr)} cm³\nV_br = ${fmtN(Lbr)}³ = ${fmtN(V_br)} cm³\nVS = (${fmtN(V_gr)}−${fmtN(V_br)})/${fmtN(V_gr)}·100 = ${fmtN(VS)} %\n(3·GS_L = ${fmtN(3*GS_L)} % ≈ VS, nur gültig für kleine Schwindungen)` };
  }
,

  () => { const Lg=rnd(20,100,2),Lt=parseFloat((Lg*rnd(0.88,0.97,0.01)).toFixed(2)); const TS=parseFloat(((Lg-Lt)/Lg*100).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>grün</sub>=<strong>${fmtN(Lg)} cm</strong>, L<sub>trocken</sub>=<strong>${fmtN(Lt)} cm</strong>. Trockenschwindung <em>TS</em>?`, hint:'TS=(L_g−L_t)/L_g·100', correct:TS, unit:'%', steps:`TS=(${fmtN(Lg)}−${fmtN(Lt)})/${fmtN(Lg)}·100=${fmtN(TS)} %` }; },
  () => { const Lt=rnd(15,80,1),Lb=parseFloat((Lt*rnd(0.88,0.97,0.01)).toFixed(2)); const BS=parseFloat(((Lt-Lb)/Lt*100).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>tr</sub>=<strong>${fmtN(Lt)} cm</strong>, L<sub>br</sub>=<strong>${fmtN(Lb)} cm</strong>. Brennschwindung <em>BS</em>?`, hint:'BS=(L_tr−L_br)/L_tr·100', correct:BS, unit:'%', steps:`BS=(${fmtN(Lt)}−${fmtN(Lb)})/${fmtN(Lt)}·100=${fmtN(BS)} %` }; },
  () => { const Lg=rnd(20,100,2),Lb=parseFloat((Lg*rnd(0.78,0.92,0.01)).toFixed(2)); const GS=parseFloat(((Lg-Lb)/Lg*100).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>grün</sub>=<strong>${fmtN(Lg)} cm</strong>, L<sub>br</sub>=<strong>${fmtN(Lb)} cm</strong>. Gesamtschwindung <em>GS</em>?`, hint:'GS=(L_grün−L_br)/L_grün·100', correct:GS, unit:'%', steps:`GS=(${fmtN(Lg)}−${fmtN(Lb)})/${fmtN(Lg)}·100=${fmtN(GS)} %` }; },
  () => { const GS=rnd(8,22,0.5),Lb=rnd(10,60,1); const Lg=parseFloat((Lb/(1-GS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`GS=<strong>${fmtN(GS)}%</strong>, L<sub>br</sub>=<strong>${fmtN(Lb)} cm</strong>. Grünmaß <em>L<sub>grün</sub></em>?`, hint:'L_grün = L_br/(1−GS/100)', correct:Lg, unit:'cm', steps:`L_grün=${fmtN(Lb)}/(1−${fmtN(GS)}/100)=${fmtN(Lg)} cm` }; },
  () => { const BS=rnd(3,12,0.5),Lt=rnd(10,60,1); const Lb=parseFloat((Lt*(1-BS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>tr</sub>=<strong>${fmtN(Lt)} cm</strong>, BS=<strong>${fmtN(BS)}%</strong>. Brennmaß <em>L<sub>br</sub></em>?`, hint:'L_br = L_tr·(1−BS/100)', correct:Lb, unit:'cm', steps:`L_br=${fmtN(Lt)}·(1−${fmtN(BS)}/100)=${fmtN(Lb)} cm` }; },
  () => { const TS=rnd(4,12,0.5),Lg=rnd(20,80,2); const Lt=parseFloat((Lg*(1-TS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>grün</sub>=<strong>${fmtN(Lg)} cm</strong>, TS=<strong>${fmtN(TS)}%</strong>. Trockenmaß <em>L<sub>tr</sub></em>?`, hint:'L_tr = L_gr·(1−TS/100)', correct:Lt, unit:'cm', steps:`L_tr=${fmtN(Lg)}·(1−${fmtN(TS)}/100)=${fmtN(Lt)} cm` }; },
  () => { const BS=rnd(3,10,0.5),Lb_soll=rnd(10,50,1); const Lt=parseFloat((Lb_soll/(1-BS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`Fertigteil soll L<sub>br</sub>=<strong>${Lb_soll} cm</strong> haben. BS=<strong>${fmtN(BS)}%</strong>. Trockenmaß <em>L<sub>tr</sub></em>?`, hint:'L_tr = L_br/(1−BS/100)', correct:Lt, unit:'cm', steps:`L_tr=${Lb_soll}/(1−${fmtN(BS)}/100)=${fmtN(Lt)} cm` }; },
  () => { const TS=rnd(4,12,0.5),BS=rnd(3,10,0.5),Lb=rnd(10,50,1); const Lt=parseFloat((Lb/(1-BS/100)).toFixed(2)); const Lg=parseFloat((Lt/(1-TS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`L<sub>br</sub>=<strong>${Lb} cm</strong>, BS=<strong>${fmtN(BS)}%</strong>, TS=<strong>${fmtN(TS)}%</strong>. Grünmaß <em>L<sub>grün</sub></em>?`, hint:'L_tr=L_br/(1−BS/100), L_grün=L_tr/(1−TS/100)', correct:Lg, unit:'cm', steps:`L_tr=${Lb}/(1−${fmtN(BS)}/100)=${fmtN(Lt)}\nL_grün=${fmtN(Lt)}/(1−${fmtN(TS)}/100)=${fmtN(Lg)} cm` }; },
  () => { const Lg=rnd(20,80,2),Lt=parseFloat((Lg*rnd(0.88,0.97,0.01)).toFixed(2)),Lb=parseFloat((Lt*rnd(0.88,0.97,0.01)).toFixed(2)); const GS_korrekt=parseFloat(((Lg-Lb)/Lg*100).toFixed(2)); return { cat:'📐 Schwindung', question:`Grün=${fmtN(Lg)} → Trocken=${fmtN(Lt)} → Gebrannt=${fmtN(Lb)} cm.<br><br>Korrekte Gesamtschwindung <em>GS</em> (Bezug: Grün)?`, hint:'GS=(L_grün−L_br)/L_grün·100', correct:GS_korrekt, unit:'%', steps:`GS=(${fmtN(Lg)}−${fmtN(Lb)})/${fmtN(Lg)}·100=${fmtN(GS_korrekt)} %` }; },
  () => { const D_form=rnd(15,50,1),TS=rnd(5,12,0.5); const D_nass=parseFloat((D_form).toFixed(1)); const D_tr=parseFloat((D_nass*(1-TS/100)).toFixed(2)); return { cat:'📐 Schwindung', question:`Gipsform Ø=<strong>${D_form} cm</strong>, TS=<strong>${fmtN(TS)}%</strong>.<br>Durchmesser nach Trocknen <em>D<sub>tr</sub></em>?`, hint:'D_tr = D_form·(1−TS/100)', correct:D_tr, unit:'cm', steps:`D_tr=${D_form}·(1−${fmtN(TS)}/100)=${fmtN(D_tr)} cm` }; }
,

  ()=>{const Lg=rnd(20,100,2),Lt=parseFloat((Lg*rnd(0.88,0.97,0.01)).toFixed(2));const TS=parseFloat(((Lg-Lt)/Lg*100).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>g</sub>=<strong>${fmtN(Lg)} cm</strong>, L<sub>tr</sub>=<strong>${fmtN(Lt)} cm</strong>. TS?`,hint:'TS=(L_g−L_tr)/L_g·100',correct:TS,unit:'%',steps:`TS=(${fmtN(Lg)}−${fmtN(Lt)})/${fmtN(Lg)}·100=${fmtN(TS)} %`};},
  ()=>{const Lt=rnd(15,80,1),Lb=parseFloat((Lt*rnd(0.88,0.97,0.01)).toFixed(2));const BS=parseFloat(((Lt-Lb)/Lt*100).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>tr</sub>=<strong>${fmtN(Lt)} cm</strong>, L<sub>br</sub>=<strong>${fmtN(Lb)} cm</strong>. BS?`,hint:'BS=(L_tr−L_br)/L_tr·100',correct:BS,unit:'%',steps:`BS=(${fmtN(Lt)}−${fmtN(Lb)})/${fmtN(Lt)}·100=${fmtN(BS)} %`};},
  ()=>{const Lg=rnd(20,100,2),Lb=parseFloat((Lg*rnd(0.78,0.92,0.01)).toFixed(2));const GS=parseFloat(((Lg-Lb)/Lg*100).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>g</sub>=<strong>${fmtN(Lg)} cm</strong>, L<sub>br</sub>=<strong>${fmtN(Lb)} cm</strong>. GS?`,hint:'GS=(L_g−L_br)/L_g·100',correct:GS,unit:'%',steps:`GS=(${fmtN(Lg)}−${fmtN(Lb)})/${fmtN(Lg)}·100=${fmtN(GS)} %`};},
  ()=>{const GS=rnd(8,22,0.5),Lb=rnd(10,60,1);const Lg=parseFloat((Lb/(1-GS/100)).toFixed(2));return{cat:'📐 Schwindung',question:`GS=<strong>${fmtN(GS)}%</strong>, L<sub>br</sub>=<strong>${Lb} cm</strong>. Grünmaß <em>L<sub>g</sub></em>?`,hint:'L_g=L_br/(1−GS/100)',correct:Lg,unit:'cm',steps:`L_g=${Lb}/(1−${fmtN(GS)}/100)=${fmtN(Lg)} cm`};},
  ()=>{const BS=rnd(3,12,0.5),Lt=rnd(15,70,1);const Lb=parseFloat((Lt*(1-BS/100)).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>tr</sub>=<strong>${fmtN(Lt)} cm</strong>, BS=<strong>${fmtN(BS)}%</strong>. Brennmaß <em>L<sub>br</sub></em>?`,hint:'L_br=L_tr·(1−BS/100)',correct:Lb,unit:'cm',steps:`L_br=${fmtN(Lt)}·(1−${fmtN(BS)}/100)=${fmtN(Lb)} cm`};},
  ()=>{const TS=rnd(4,12,0.5),Lg=rnd(20,80,2);const Lt=parseFloat((Lg*(1-TS/100)).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>g</sub>=<strong>${fmtN(Lg)} cm</strong>, TS=<strong>${fmtN(TS)}%</strong>. Trockenmaß <em>L<sub>tr</sub></em>?`,hint:'L_tr=L_g·(1−TS/100)',correct:Lt,unit:'cm',steps:`L_tr=${fmtN(Lg)}·${fmtN(1-TS/100)}=${fmtN(Lt)} cm`};},
  ()=>{const TS=rnd(4,12,0.5),BS=rnd(3,10,0.5),Lb=rnd(10,50,1);const Lt=parseFloat((Lb/(1-BS/100)).toFixed(2));const Lg=parseFloat((Lt/(1-TS/100)).toFixed(2));return{cat:'📐 Schwindung',question:`L<sub>br</sub>=${Lb} cm, BS=${fmtN(BS)}%, TS=${fmtN(TS)}%. Grünmaß <em>L<sub>g</sub></em>?`,hint:'L_tr=L_br/(1−BS%), L_g=L_tr/(1−TS%)',correct:Lg,unit:'cm',steps:`L_tr=${fmtN(Lt)} cm\nL_g=${fmtN(Lg)} cm`};},
  ()=>{const Lg=rnd(20,80,2),Lb=parseFloat((Lg*rnd(0.78,0.92,0.01)).toFixed(2));const VS=parseFloat(((Lg**3-Lb**3)/Lg**3*100).toFixed(1));return{cat:'📐 Schwindung',question:`Würfel: L<sub>g</sub>=${fmtN(Lg)} cm → L<sub>br</sub>=${fmtN(Lb)} cm. Volumenschwindung <em>VS</em>?`,hint:'VS=(V_g−V_br)/V_g·100, V=L³',correct:VS,unit:'%',steps:`VS=(${fmtN(Lg)}³−${fmtN(Lb)}³)/${fmtN(Lg)}³·100=${fmtN(VS)} %`};},
  ()=>{const BS=rnd(3,10,0.5),Lb_soll=rnd(10,50,1);const Lt=parseFloat((Lb_soll/(1-BS/100)).toFixed(2));return{cat:'📐 Schwindung',question:`Soll L<sub>br</sub>=<strong>${Lb_soll} cm</strong>, BS=<strong>${fmtN(BS)}%</strong>. Trockenmaß <em>L<sub>tr</sub></em>?`,hint:'L_tr=L_br/(1−BS/100)',correct:Lt,unit:'cm',steps:`L_tr=${Lb_soll}/(1−${fmtN(BS)}/100)=${fmtN(Lt)} cm`};}

  ],

  // ════ DICHTE ════════════════════════════════════════════════
  dichte: [

    () => {
      const m = rnd(100, 5000, 50);
      const V = rnd(50, 2000, 50);
      const rho = parseFloat((m / V).toFixed(4));
      return {
        cat: '⚖️ Dichte',
        question: `Eine Keramikprobe hat eine Masse von <strong>${fmtN(m)} Gramm</strong> und ein Volumen von <strong>${fmtN(V)} Kubikzentimeter</strong>.<br><br>Berechnen Sie die Dichte des Materials in Gramm pro Kubikzentimeter.`,
        correct: rho, unit: 'g/cm³',
        steps: `Dichte = Masse / Volumen\nρ = ${fmtN(m)} / ${fmtN(V)}\nρ = ${fmtN(rho)} g/cm³`
      };
    },

    () => {
      const rho = rnd(1.5, 3.8, 0.1);
      const V = rnd(100, 1000, 50);
      const m = parseFloat((rho * V).toFixed(1));
      return {
        cat: '⚖️ Dichte',
        question: `Ein Keramikblock hat ein Volumen von <strong>${fmtN(V)} Kubikzentimeter</strong>. Die Dichte des Materials beträgt <strong>${fmtN(rho)} Gramm pro Kubikzentimeter</strong>.<br><br>Welche Masse hat dieser Block?`,
        correct: m, unit: 'g',
        steps: `Masse = Dichte · Volumen\nm = ${fmtN(rho)} · ${fmtN(V)}\nm = ${fmtN(m)} g`
      };
    },

    () => {
      const rho = rnd(1.8, 3.5, 0.1);
      const m = rnd(200, 2000, 100);
      const V = parseFloat((m / rho).toFixed(2));
      return {
        cat: '⚖️ Dichte',
        question: `Eine Rohstoffcharge hat eine Masse von <strong>${fmtN(m)} Gramm</strong>. Die Rohdichte des Materials beträgt <strong>${fmtN(rho)} Gramm pro Kubikzentimeter</strong>.<br><br>Welches Volumen nimmt diese Charge ein?`,
        correct: V, unit: 'cm³',
        steps: `Volumen = Masse / Dichte\nV = ${fmtN(m)} / ${fmtN(rho)}\nV = ${fmtN(V)} cm³`
      };
    },

    () => {
      const m_luft = rnd(100, 500, 10);
      const m_wasser = rnd(50, m_luft - 10, 10);
      const rho_wasser = 1.0;
      const V = parseFloat(((m_luft - m_wasser) / rho_wasser).toFixed(2));
      const rho = parseFloat((m_luft / V).toFixed(4));
      return {
        cat: '⚖️ Dichte',
        question: `Eine Keramikprobe wiegt an der Luft <strong>${fmtN(m_luft)} Gramm</strong>. Unter Wasser beträgt ihr Gewicht nur noch <strong>${fmtN(m_wasser)} Gramm</strong>. Die Dichte von Wasser beträgt 1,0 Gramm pro Kubikzentimeter.<br><br>Berechnen Sie die Dichte der Keramikprobe nach dem archimedischen Prinzip.`,
        correct: rho, unit: 'g/cm³',
        steps: `Verdrängtes Wasser = Masse in Luft − Masse in Wasser\nV = ${fmtN(m_luft)} − ${fmtN(m_wasser)} = ${fmtN(V)} cm³\n\nDichte = Masse in Luft / Volumen\nρ = ${fmtN(m_luft)} / ${fmtN(V)}\nρ = ${fmtN(rho)} g/cm³`
      };
    },

    () => {
      const rho_roh = rnd(1.6, 2.5, 0.1);
      const rho_rein = rnd(2.6, 4.0, 0.1);
      const P = parseFloat(((1 - rho_roh / rho_rein) * 100).toFixed(1));
      return {
        cat: '⚖️ Dichte',
        question: `Ein gebranntes Keramikbauteil hat eine Rohdichte von <strong>${fmtN(rho_roh)} Gramm pro Kubikzentimeter</strong>. Die Reindichte des Materials (ohne Poren) beträgt <strong>${fmtN(rho_rein)} Gramm pro Kubikzentimeter</strong>.<br><br>Wie groß ist der Porenanteil dieses Bauteils in Prozent?`,
        correct: P, unit: '%',
        steps: `Porenanteil = (1 − Rohdichte / Reindichte) · 100\nP = (1 − ${fmtN(rho_roh)} / ${fmtN(rho_rein)}) · 100\nP = (1 − ${fmtN(rho_roh/rho_rein)}) · 100\nP = ${fmtN(P)} %`
      };
    },
  ],

  // ════ POROSITÄT ══════════════════════════════════════════════
  porositaet: [

    () => {
      const V_poren = rnd(5, 50, 1);
      const V_ges = rnd(V_poren + 50, 300, 10);
      const P = parseFloat((V_poren / V_ges * 100).toFixed(2));
      return {
        cat: '🕳️ Porosität',
        question: `Eine Keramikprobe hat ein Gesamtvolumen von <strong>${fmtN(V_ges)} Kubikzentimeter</strong>. Das Porenvolumen beträgt <strong>${fmtN(V_poren)} Kubikzentimeter</strong>.<br><br>Wie groß ist die Gesamtporosität dieser Probe in Prozent?`,
        correct: P, unit: '%',
        steps: `Porosität = Porenvolumen / Gesamtvolumen · 100\nP = ${fmtN(V_poren)} / ${fmtN(V_ges)} · 100\nP = ${fmtN(P)} %`
      };
    },

    () => {
      const m_trocken = rnd(100, 500, 10);
      const m_nass = rnd(m_trocken + 5, m_trocken + 80, 5);
      const m_auftr = rnd(50, m_trocken - 10, 5);
      const P_off = parseFloat(((m_nass - m_trocken) / (m_nass - m_auftr) * 100).toFixed(2));
      return {
        cat: '🕳️ Porosität',
        question: `Bei einer Wasseraufnahmeprüfung wiegt eine Keramikprobe im trockenen Zustand <strong>${fmtN(m_trocken)} Gramm</strong>, nach dem Wässern (wassergesättigt) <strong>${fmtN(m_nass)} Gramm</strong> und unter Wasser (Auftriebsgewicht) <strong>${fmtN(m_auftr)} Gramm</strong>.<br><br>Wie groß ist die offene Porosität dieser Probe in Prozent?`,
        correct: P_off, unit: '%',
        steps: `Offene Porosität = (Masse nass − Masse trocken) / (Masse nass − Masse Auftrieb) · 100\nP = (${fmtN(m_nass)} − ${fmtN(m_trocken)}) / (${fmtN(m_nass)} − ${fmtN(m_auftr)}) · 100\nP = ${fmtN(m_nass - m_trocken)} / ${fmtN(m_nass - m_auftr)} · 100\nP = ${fmtN(P_off)} %`
      };
    },

    () => {
      const P = rnd(5, 40, 1);
      const V_ges = rnd(100, 500, 20);
      const V_poren = parseFloat((P / 100 * V_ges).toFixed(2));
      return {
        cat: '🕳️ Porosität',
        question: `Ein Keramikbauteil hat ein Gesamtvolumen von <strong>${fmtN(V_ges)} Kubikzentimeter</strong> und eine Porosität von <strong>${P} Prozent</strong>.<br><br>Wie viel Kubikzentimeter Porenvolumen enthält dieses Bauteil?`,
        correct: V_poren, unit: 'cm³',
        steps: `Porenvolumen = Porosität / 100 · Gesamtvolumen\nV_poren = ${P} / 100 · ${fmtN(V_ges)}\nV_poren = ${fmtN(V_poren)} cm³`
      };
    },

    () => {
      const m_trocken = rnd(100, 600, 20);
      const m_nass = rnd(m_trocken + 10, m_trocken + 100, 10);
      const WA = parseFloat(((m_nass - m_trocken) / m_trocken * 100).toFixed(2));
      return {
        cat: '🕳️ Porosität',
        question: `Eine Keramikprobe wird nach DIN getrocknet und wiegt anschließend <strong>${fmtN(m_trocken)} Gramm</strong>. Nach vollständigem Wässern beträgt die Masse <strong>${fmtN(m_nass)} Gramm</strong>.<br><br>Wie groß ist die Wasseraufnahme dieser Probe bezogen auf die Trockenmasse?`,
        correct: WA, unit: '%',
        steps: `Wasseraufnahme = (Masse nass − Masse trocken) / Masse trocken · 100\nWA = (${fmtN(m_nass)} − ${fmtN(m_trocken)}) / ${fmtN(m_trocken)} · 100\nWA = ${fmtN(m_nass - m_trocken)} / ${fmtN(m_trocken)} · 100\nWA = ${fmtN(WA)} %`
      };
    },

    () => {
      const rho_roh = rnd(1.6, 2.8, 0.1);
      const rho_rein = rnd(rho_roh + 0.5, 4.2, 0.1);
      const P_ges = parseFloat(((1 - rho_roh / rho_rein) * 100).toFixed(1));
      return {
        cat: '🕳️ Porosität',
        question: `Ein Sinterwerkstoff hat eine Rohdichte von <strong>${fmtN(rho_roh)} Gramm pro Kubikzentimeter</strong> und eine Reindichte von <strong>${fmtN(rho_rein)} Gramm pro Kubikzentimeter</strong>.<br><br>Wie groß ist die Gesamtporosität dieses Werkstoffs in Prozent?`,
        correct: P_ges, unit: '%',
        steps: `Gesamtporosität = (1 − Rohdichte / Reindichte) · 100\nP = (1 − ${fmtN(rho_roh)} / ${fmtN(rho_rein)}) · 100\nP = (1 − ${fmtN(rho_roh/rho_rein)}) · 100\nP = ${fmtN(P_ges)} %`
      };
    },,

() => {
    const rhoRein=rnd(2.4,3.0,0.05); const rhoSchein=rnd(1.4,2.3,0.05);
    const P=parseFloat(((rhoRein-rhoSchein)/rhoRein*100).toFixed(1));
    const WA=parseFloat((P/(100-P)*rhoRein).toFixed(2));
    return { cat:'🕳️ Porosität & WA',
      question:`Ein Material hat ρ<sub>rein</sub> = <strong>${fmtN(rhoRein)} g/cm³</strong> und ρ<sub>s</sub> = <strong>${fmtN(rhoSchein)} g/cm³</strong>.<br><br>Berechnen Sie die Gesamtporosität <em>P</em>.`,
      hint:'P = (ρ_rein − ρ_s) / ρ_rein · 100', correct:P, unit:'%',
      steps:`P = (${fmtN(rhoRein)} − ${fmtN(rhoSchein)}) / ${fmtN(rhoRein)} · 100 = ${fmtN(P)} %` };
  },

  () => {
    const P=rnd(5,35,1); const rhoRein=2.6;
    const rhoSchein=parseFloat((rhoRein*(1-P/100)).toFixed(3));
    return { cat:'🕳️ Porosität & WA',
      question:`Ein keramisches Material hat eine Porosität von <strong>P = ${P} %</strong> und ρ<sub>rein</sub> = 2,6 g/cm³.<br><br>Welche scheinbare Dichte <em>ρ<sub>s</sub></em> hat das Material?`,
      hint:'ρ_s = ρ_rein · (1 − P/100)', correct:rhoSchein, unit:'g/cm³',
      steps:`ρ_s = 2,6 · (1 − ${P}/100) = 2,6 · ${fmtN(1-P/100)} = ${fmtN(rhoSchein)} g/cm³` };
  },

  () => {
    const mtr=rnd(50,300,10); const mWasser=rnd(3,50,1);
    const rhoRein=rnd(2.4,2.8,0.05);
    const V_fest=parseFloat((mtr/rhoRein).toFixed(3));
    const V_por=parseFloat((mWasser/1.0).toFixed(3));
    const P=parseFloat((V_por/(V_fest+V_por)*100).toFixed(1));
    return { cat:'🕳️ Porosität & WA',
      question:`Eine Keramikprobe (m<sub>tr</sub> = <strong>${mtr} g</strong>, ρ<sub>rein</sub> = ${fmtN(rhoRein)} g/cm³) saugt <strong>${mWasser} g Wasser</strong> auf.<br><br>Berechnen Sie die offene Porosität <em>P<sub>offen</sub></em>.`,
      hint:'P = V_Por / V_ges · 100,  V_Por = m_W/ρ_W,  V_Fest = m_tr/ρ_rein', correct:P, unit:'%',
      steps:`V_Fest = ${mtr}/${fmtN(rhoRein)} = ${fmtN(V_fest)} cm³\nV_Por = ${mWasser}/1 = ${mWasser} cm³\nP = ${mWasser}/(${fmtN(V_fest)}+${mWasser})·100 = ${fmtN(P)} %` };
  },

  () => {
    const WA=rnd(5,25,0.5); const mtr=rnd(100,500,10);
    const mW=parseFloat((mtr*WA/100).toFixed(2));
    const mnass=parseFloat((mtr+mW).toFixed(2));
    return { cat:'🕳️ Porosität & WA',
      question:`Eine getrocknete Ziegelprobe (<strong>${mtr} g</strong>) hat eine Wasseraufnahme von <strong>WA = ${fmtN(WA)} %</strong>.<br><br>Wie schwer ist die Probe nach dem Sättigungstauchen <em>m<sub>nass</sub></em>?`,
      hint:'m_nass = m_tr · (1 + WA/100)', correct:mnass, unit:'g',
      steps:`m_W = ${mtr}·${fmtN(WA)}/100 = ${fmtN(mW)} g\nm_nass = ${mtr} + ${fmtN(mW)} = ${fmtN(mnass)} g` };
  },

  () => {
    const rhoR=rnd(2.5,3.0,0.05); const rhoS=rnd(1.8,2.4,0.05);
    const P_ges=parseFloat(((rhoR-rhoS)/rhoR*100).toFixed(1));
    const P_off=rnd(parseFloat((P_ges*0.4).toFixed(0)),parseFloat((P_ges*0.9).toFixed(0)),0.5);
    const P_gesch=parseFloat((P_ges-P_off).toFixed(1));
    return { cat:'🕳️ Porosität & WA',
      question:`Ein feuerfestes Material: ρ<sub>rein</sub> = ${fmtN(rhoR)} g/cm³, ρ<sub>s</sub> = ${fmtN(rhoS)} g/cm³. Die offene Porosität beträgt <strong>P<sub>offen</sub> = ${fmtN(P_off)} %</strong>.<br><br>Wie groß ist die geschlossene Porosität <em>P<sub>geschl.</sub></em>?`,
      hint:'P_ges = (ρ_rein−ρ_s)/ρ_rein·100,  P_gesch = P_ges − P_offen', correct:P_gesch, unit:'%',
      steps:`P_ges = (${fmtN(rhoR)}−${fmtN(rhoS)})/${fmtN(rhoR)}·100 = ${fmtN(P_ges)} %\nP_gesch = ${fmtN(P_ges)} − ${fmtN(P_off)} = ${fmtN(P_gesch)} %` };
  },

  () => {
    const Vges=rnd(50,300,10); const Vgas=rnd(5,80,1);
    const rhoRein=rnd(2.5,3.0,0.05);
    const Vfest=Vges-Vgas;
    const mtr=parseFloat((Vfest*rhoRein).toFixed(2));
    const rhoS=parseFloat((mtr/Vges).toFixed(3));
    return { cat:'🕳️ Porosität & WA',
      question:`Eine Keramikprobe hat ein Gesamtvolumen von <strong>${Vges} cm³</strong>. Das Feststoffvolumen beträgt <strong>${Vfest} cm³</strong>, ρ<sub>rein</sub> = ${fmtN(rhoRein)} g/cm³.<br><br>Berechnen Sie die scheinbare Dichte <em>ρ<sub>s</sub></em>.`,
      hint:'m_tr = V_Fest · ρ_rein,  ρ_s = m_tr / V_ges', correct:rhoS, unit:'g/cm³',
      steps:`m_tr = ${Vfest}·${fmtN(rhoRein)} = ${fmtN(mtr)} g\nρ_s = ${fmtN(mtr)}/${Vges} = ${fmtN(rhoS)} g/cm³` };
  },

  () => {
    const WA=rnd(3,20,0.5); const rhoRein=2.6;
    const rhoS=parseFloat((rhoRein*100/(100+WA*rhoRein)).toFixed(3));
    const P=parseFloat(((rhoRein-rhoS)/rhoRein*100).toFixed(1));
    return { cat:'🕳️ Porosität & WA',
      question:`Ein keramisches Produkt hat eine Wasseraufnahme von <strong>WA = ${fmtN(WA)} %</strong> (bezogen auf Trockenmasse) und ρ<sub>rein</sub> = ${rhoRein} g/cm³.<br><br>Schätzen Sie die Porosität <em>P</em> (vereinfacht: Porenvolumen ≈ Wasservolumen).`,
      hint:'V_Por ≈ m_W/ρ_W = (m_tr · WA/100)/1,  P = V_Por/(V_Por + V_Fest)·100', correct:P, unit:'%',
      tol:0.03,
      steps:`V_Por/m_tr = WA/100 = ${WA}/100 = ${WA/100} cm³/g\nV_Fest/m_tr = 1/ρ_rein = 1/${rhoRein} = ${fmtN(1/rhoRein)} cm³/g\nP = ${WA/100}/(${WA/100}+${fmtN(1/rhoRein)})·100 = ${fmtN(P)} %` };
  }
,

  () => { const mt=rnd(50,300,10),mW=rnd(5,60,2); const WA=parseFloat((mW/mt*100).toFixed(2)); return { cat:'🕳️ Porosität & WA', question:`m<sub>tr</sub>=<strong>${mt} g</strong>, aufgenommenes Wasser=<strong>${mW} g</strong>. WA?`, hint:'WA = m_W/m_tr·100', correct:WA, unit:'%', steps:`WA=${mW}/${mt}·100=${fmtN(WA)} %` }; },
  () => { const rhoR=rnd(2.4,3.0,0.05),rhoS=rnd(1.4,2.3,0.05); const P=parseFloat(((rhoR-rhoS)/rhoR*100).toFixed(1)); return { cat:'🕳️ Porosität & WA', question:`ρ<sub>rein</sub>=<strong>${fmtN(rhoR)} g/cm³</strong>, ρ<sub>s</sub>=<strong>${fmtN(rhoS)} g/cm³</strong>. Porosität <em>P</em>?`, hint:'P=(ρ_rein−ρ_s)/ρ_rein·100', correct:P, unit:'%', steps:`P=(${fmtN(rhoR)}−${fmtN(rhoS)})/${fmtN(rhoR)}·100=${fmtN(P)} %` }; },
  () => { const P=rnd(5,35,1),rhoR=2.6; const rhoS=parseFloat((rhoR*(1-P/100)).toFixed(3)); return { cat:'🕳️ Porosität & WA', question:`P=<strong>${P}%</strong>, ρ<sub>rein</sub>=2,6 g/cm³. Scheinbare Dichte <em>ρ<sub>s</sub></em>?`, hint:'ρ_s = ρ_rein·(1−P/100)', correct:rhoS, unit:'g/cm³', steps:`ρ_s=2,6·(1−${P}/100)=${fmtN(rhoS)} g/cm³` }; },
  () => { const V_ges=rnd(50,300,10),V_por=rnd(5,90,1); const P=parseFloat((V_por/V_ges*100).toFixed(1)); return { cat:'🕳️ Porosität & WA', question:`V<sub>ges</sub>=<strong>${V_ges} cm³</strong>, V<sub>Poren</sub>=<strong>${V_por} cm³</strong>. Porosität <em>P</em>?`, hint:'P = V_Por/V_ges·100', correct:P, unit:'%', steps:`P=${V_por}/${V_ges}·100=${fmtN(P)} %` }; },
  () => { const WA=rnd(3,25,0.5),mt=rnd(100,600,10); const mNass=parseFloat((mt*(1+WA/100)).toFixed(2)); return { cat:'🕳️ Porosität & WA', question:`m<sub>tr</sub>=<strong>${mt} g</strong>, WA=<strong>${fmtN(WA)}%</strong>. Nassmasse <em>m<sub>nass</sub></em>?`, hint:'m_nass = m_tr·(1+WA/100)', correct:mNass, unit:'g', steps:`m_nass=${mt}·(1+${fmtN(WA)}/100)=${fmtN(mNass)} g` }; },
  () => { const P_ges=rnd(15,35,1),P_off=rnd(8,parseFloat((P_ges*0.9).toFixed(0)),1); const P_gesch=parseFloat((P_ges-P_off).toFixed(1)); return { cat:'🕳️ Porosität & WA', question:`P<sub>ges</sub>=<strong>${P_ges}%</strong>, P<sub>offen</sub>=<strong>${P_off}%</strong>. Geschlossene Porosität <em>P<sub>gesch</sub></em>?`, hint:'P_gesch = P_ges − P_offen', correct:P_gesch, unit:'%', steps:`P_gesch=${P_ges}−${P_off}=${fmtN(P_gesch)} %` }; },
  () => { const m=rnd(50,200,5),V=rnd(20,100,2); const rho=parseFloat((m/V).toFixed(3)); return { cat:'🕳️ Porosität & WA', question:`m=<strong>${m} g</strong>, V=<strong>${V} cm³</strong>. Scheinbare Dichte <em>ρ<sub>s</sub></em>?`, hint:'ρ_s = m/V', correct:rho, unit:'g/cm³', steps:`ρ_s=${m}/${V}=${fmtN(rho)} g/cm³` }; },
  () => { const rhoR=rnd(2.5,3.0,0.05),rhoS=rnd(1.5,2.4,0.05); const WA_max=parseFloat(((rhoR-rhoS)/rhoS*100).toFixed(2)); return { cat:'🕳️ Porosität & WA', question:`ρ<sub>rein</sub>=<strong>${fmtN(rhoR)} g/cm³</strong>, ρ<sub>s</sub>=<strong>${fmtN(rhoS)} g/cm³</strong>. Maximale Wasseraufnahme <em>WA<sub>max</sub></em>?`, hint:'WA_max = (ρ_rein−ρ_s)/ρ_s·100', correct:WA_max, unit:'%', steps:`WA_max=(${fmtN(rhoR)}−${fmtN(rhoS)})/${fmtN(rhoS)}·100=${fmtN(WA_max)} %` }; },
  () => { const mt=rnd(50,200,5),mW=rnd(3,50,1),rhoR=2.6; const V_fest=parseFloat((mt/rhoR).toFixed(3)); const V_por=parseFloat((mW/1).toFixed(3)); const rhoS=parseFloat((mt/(V_fest+V_por)).toFixed(3)); return { cat:'🕳️ Porosität & WA', question:`m<sub>tr</sub>=<strong>${mt} g</strong>, Wasseraufnahme=<strong>${mW} g</strong>, ρ<sub>rein</sub>=2,6 g/cm³. Scheinbare Dichte <em>ρ<sub>s</sub></em>?`, hint:'V_ges=m_tr/ρ_rein+V_W, ρ_s=m_tr/V_ges', correct:rhoS, unit:'g/cm³', steps:`V_fest=${mt}/2,6=${fmtN(V_fest)} cm³\nV_por=${mW} cm³\nρ_s=${mt}/${fmtN(V_fest+V_por)}=${fmtN(rhoS)} g/cm³` }; },
  () => { const P1=rnd(20,35,1),P2=rnd(8,18,1),rhoR=2.6; const rhoS1=parseFloat((rhoR*(1-P1/100)).toFixed(3)); const rhoS2=parseFloat((rhoR*(1-P2/100)).toFixed(3)); const delta=parseFloat((rhoS2-rhoS1).toFixed(3)); return { cat:'🕳️ Porosität & WA', question:`Material A: P=<strong>${P1}%</strong>, Material B: P=<strong>${P2}%</strong>. ρ<sub>rein</sub>=2,6 g/cm³ für beide.<br><br>Dichteunterschied <em>Δρ</em>?`, hint:'ρ_s = ρ_rein·(1−P/100), Δρ = ρ_B − ρ_A', correct:delta, unit:'g/cm³', steps:`ρ_A=2,6·(1−${P1}/100)=${fmtN(rhoS1)}\nρ_B=2,6·(1−${P2}/100)=${fmtN(rhoS2)}\nΔρ=${fmtN(delta)} g/cm³` }; }
,

  ()=>{const mt=rnd(50,300,10),mW=rnd(5,70,1);const WA=parseFloat((mW/mt*100).toFixed(2));return{cat:'🕳️ Porosität & WA',question:`m<sub>tr</sub>=<strong>${mt} g</strong>, Wasseraufnahme=<strong>${mW} g</strong>. WA in %?`,hint:'WA=m_W/m_tr·100',correct:WA,unit:'%',steps:`WA=${mW}/${mt}·100=${fmtN(WA)} %`};},
  ()=>{const rhoR=rnd(2.4,3.0,0.05),rhoS=rnd(1.5,2.3,0.05);const P=parseFloat(((rhoR-rhoS)/rhoR*100).toFixed(1));return{cat:'🕳️ Porosität & WA',question:`ρ<sub>R</sub>=<strong>${fmtN(rhoR)}</strong>, ρ<sub>S</sub>=<strong>${fmtN(rhoS)} g/cm³</strong>. Porosität <em>P</em>?`,hint:'P=(ρ_R−ρ_S)/ρ_R·100',correct:P,unit:'%',steps:`P=(${fmtN(rhoR)}−${fmtN(rhoS)})/${fmtN(rhoR)}·100=${fmtN(P)} %`};},
  ()=>{const P=rnd(5,35,1),rhoR=rnd(2.4,3.0,0.05);const rhoS=parseFloat((rhoR*(1-P/100)).toFixed(3));return{cat:'🕳️ Porosität & WA',question:`P=<strong>${P}%</strong>, ρ<sub>R</sub>=<strong>${fmtN(rhoR)} g/cm³</strong>. Scheinbare Dichte <em>ρ<sub>S</sub></em>?`,hint:'ρ_S=ρ_R·(1−P/100)',correct:rhoS,unit:'g/cm³',steps:`ρ_S=${fmtN(rhoR)}·(1−${P}/100)=${fmtN(rhoS)} g/cm³`};},
  ()=>{const Vg=rnd(50,300,10),Vp=rnd(5,90,1);const P=parseFloat((Vp/Vg*100).toFixed(1));return{cat:'🕳️ Porosität & WA',question:`V<sub>ges</sub>=<strong>${Vg} cm³</strong>, V<sub>Poren</sub>=<strong>${Vp} cm³</strong>. Porosität <em>P</em>?`,hint:'P=V_Por/V_ges·100',correct:P,unit:'%',steps:`P=${Vp}/${Vg}·100=${fmtN(P)} %`};},
  ()=>{const WA=rnd(3,25,0.5),mt=rnd(100,600,10);const mN=parseFloat((mt*(1+WA/100)).toFixed(2));return{cat:'🕳️ Porosität & WA',question:`m<sub>tr</sub>=<strong>${mt} g</strong>, WA=<strong>${fmtN(WA)}%</strong>. Nassmasse <em>m<sub>nass</sub></em>?`,hint:'m_nass=m_tr·(1+WA/100)',correct:mN,unit:'g',steps:`m_nass=${mt}·(1+${fmtN(WA)}/100)=${fmtN(mN)} g`};},
  ()=>{const Pg=rnd(15,35,1),Po=rnd(8,parseFloat((Pg*0.9).toFixed(0)),1);const Pc=parseFloat((Pg-Po).toFixed(1));return{cat:'🕳️ Porosität & WA',question:`P<sub>ges</sub>=<strong>${Pg}%</strong>, P<sub>offen</sub>=<strong>${Po}%</strong>. Geschlossene Porosität <em>P<sub>g</sub></em>?`,hint:'P_gesch=P_ges−P_offen',correct:Pc,unit:'%',steps:`P_gesch=${Pg}−${Po}=${fmtN(Pc)} %`};},
  ()=>{const m=rnd(50,300,5),V=rnd(20,120,2);const rho=parseFloat((m/V).toFixed(3));return{cat:'🕳️ Porosität & WA',question:`m=<strong>${m} g</strong>, V=<strong>${V} cm³</strong>. Scheinbare Dichte <em>ρ<sub>S</sub></em>?`,hint:'ρ_S=m/V',correct:rho,unit:'g/cm³',steps:`ρ_S=${m}/${V}=${fmtN(rho)} g/cm³`};},
  ()=>{const rhoR=rnd(2.5,3.0,0.05),rhoS=rnd(1.5,2.4,0.05);const WA=parseFloat(((rhoR-rhoS)/rhoS*100).toFixed(2));return{cat:'🕳️ Porosität & WA',question:`ρ<sub>R</sub>=<strong>${fmtN(rhoR)}</strong>, ρ<sub>S</sub>=<strong>${fmtN(rhoS)} g/cm³</strong>. Max. WA?`,hint:'WA=(ρ_R−ρ_S)/ρ_S·100',correct:WA,unit:'%',steps:`WA=(${fmtN(rhoR)}−${fmtN(rhoS)})/${fmtN(rhoS)}·100=${fmtN(WA)} %`};},
  ()=>{const mt=rnd(50,200,5),mW=rnd(3,50,1),rhoR=2.6;const Vf=parseFloat((mt/rhoR).toFixed(3));const Vp=parseFloat((mW).toFixed(3));const rhoS=parseFloat((mt/(Vf+Vp)).toFixed(3));return{cat:'🕳️ Porosität & WA',question:`m<sub>tr</sub>=${mt} g, Wasseraufnahme=${mW} g, ρ<sub>R</sub>=2,6 g/cm³. Scheinbare Dichte <em>ρ<sub>S</sub></em>?`,hint:'V_ges=m_tr/ρ_R+V_W, ρ_S=m_tr/V_ges',correct:rhoS,unit:'g/cm³',steps:`V_ges=${fmtN(Vf)}+${mW}=${fmtN(Vf+Vp)} cm³\nρ_S=${mt}/${fmtN(Vf+Vp)}=${fmtN(rhoS)} g/cm³`};}

  ],

  // ════ 💨 VERBRENNUNG ══════════════════════════
  verbrennung: [
() => {
    const Hu=rnd(8,40,1); const V=rnd(50,500,50);
    const eta=rnd(70,92,2);
    const Qnutz=parseFloat((V*Hu*eta/100).toFixed(1));
    return { cat:'💨 Verbrennung',
      question:`Ein Ofen verbrennt <strong>${V} m³ Gas</strong> (H<sub>u</sub> = ${Hu} MJ/m³). Der thermische Wirkungsgrad beträgt <strong>η = ${eta} %</strong>.<br><br>Welche Nutzwärme <em>Q<sub>nutz</sub></em> steht zur Verfügung?`,
      hint:'Q_nutz = V · Hᵤ · η/100', correct:Qnutz, unit:'MJ',
      steps:`Q_ges = ${V}·${Hu} = ${V*Hu} MJ\nQ_nutz = ${V*Hu}·${eta}/100 = ${fmtN(Qnutz)} MJ` };
  },

  () => {
    const V_th=rnd(8,15,0.5); const lambda=rnd(0.8,0.95,0.01);
    const V_real=parseFloat((lambda*V_th).toFixed(2));
    return { cat:'💨 Verbrennung',
      question:`Der theoretische Luftbedarf beträgt <strong>${fmtN(V_th)} m³/m³</strong>. Tatsächlich werden <strong>${fmtN(V_real)} m³/m³</strong> zugeführt.<br><br>Welche Verbrennungsart liegt vor? Berechnen Sie λ.`,
      hint:'λ = V_real / V_th  (λ<1 = reduzierend)', correct:lambda, unit:'',
      tol:0.02,
      steps:`λ = ${fmtN(V_real)}/${fmtN(V_th)} = ${fmtN(lambda)}\nλ < 1 → Reduzierende Verbrennung (Luftmangel, CO-Bildung, Schwarze Kerne möglich)` };
  },

  () => {
    const Q_brand=rnd(500,3000,100); const m=rnd(50,500,50);
    const dT=rnd(800,1200,50);
    const c=parseFloat((Q_brand/(m*dT)).toFixed(4));
    return { cat:'💨 Verbrennung',
      question:`Eine Brennkammer gibt <strong>${fmtN(Q_brand)} kJ</strong> Wärme an <strong>${m} kg Keramikmasse</strong> ab, die sich dabei um <strong>${dT} K</strong> erwärmt.<br><br>Berechnen Sie die spez. Wärmekapazität <em>c</em> des Materials.`,
      hint:'c = Q / (m · ΔT)', correct:parseFloat((c).toFixed(4)), unit:'kJ/(kg·K)',
      steps:`c = Q/(m·ΔT) = ${fmtN(Q_brand)}/(${m}·${dT}) = ${fmtN(c)} kJ/(kg·K)` };
  },

  () => {
    const p_gas=rnd(10,30,1); const p_luft=rnd(1,8,0.5);
    const ratio=parseFloat((p_luft/p_gas).toFixed(2));
    return { cat:'💨 Verbrennung',
      question:`Einem Gebläsebrenner werden <strong>${fmtN(p_gas)} m³/h Gas</strong> und <strong>${fmtN(p_luft*10)} m³/h Primärluft</strong> zugeführt.<br><br>Wie groß ist das Primärluft-Gas-Verhältnis?`,
      hint:'Verhältnis = V_Luft / V_Gas', correct:parseFloat((p_luft*10/p_gas).toFixed(2)), unit:'',
      tol:0.02,
      steps:`Verhältnis = ${fmtN(p_luft*10)} / ${fmtN(p_gas)} = ${fmtN(p_luft*10/p_gas)}` };
  },

  () => {
    const Hu=rnd(30,40,1); const V_th=rnd(9,12,0.5);
    const T_u=rnd(15,25,5); const cp=1.35;
    const T_v=parseFloat((Hu*1000/cp+T_u).toFixed(0));
    return { cat:'💨 Verbrennung',
      question:`Erdgas hat H<sub>u</sub> = <strong>${Hu} MJ/m³</strong>, theoretischer Luftbedarf V<sub>th</sub> = ${fmtN(V_th)} m³/m³, Zulufttemperatur ${T_u} °C, c<sub>p</sub> = ${cp} kJ/(m³·K).<br><br>Berechnen Sie die theoretische Verbrennungstemperatur.`,
      hint:'T_v = Hᵤ[kJ/m³] / c_p + T_u', correct:T_v, unit:'°C',
      tol:0.03,
      steps:`T_v = ${Hu*1000} kJ/m³ / ${cp} kJ/(m³·K) + ${T_u}°C\n= ${fmtN(Hu*1000/cp)} + ${T_u} = ${fmtN(T_v)} °C` };
  },

  () => {
    const V=rnd(100,1000,50); const Hu=rnd(8,40,2);
    const dT=rnd(600,1100,50); const m=rnd(100,2000,100); const c=0.9;
    const Qfrei=parseFloat((V*Hu).toFixed(1));
    const Qbedarf=parseFloat((m*c*dT).toFixed(0));
    const eta=parseFloat((Qbedarf/Qfrei*100).toFixed(1));
    return { cat:'💨 Verbrennung',
      question:`Ein Ofen verbrennt <strong>${V} m³ Gas</strong> (H<sub>u</sub> = ${Hu} MJ/m³) und erhitzt dabei <strong>${m} kg Keramik</strong> um <strong>${dT} K</strong> (c = 0,9 kJ/(kg·K)).<br><br>Berechnen Sie den Ofenwirkungsgrad <em>η</em>.`,
      hint:'η = Q_nutz / Q_zu · 100', correct:eta, unit:'%',
      steps:`Q_zu = ${V}·${Hu} = ${fmtN(Qfrei)} MJ = ${fmtN(Qfrei*1000)} kJ\nQ_nutz = ${m}·0,9·${dT} = ${fmtN(Qbedarf)} kJ\nη = ${fmtN(Qbedarf)}/${fmtN(Qfrei*1000)}·100 = ${fmtN(eta)} %` };
  },

  () => {
    const lambda=rnd(1.05,1.4,0.05); const V_th=rnd(9,13,0.5);
    const CO2=9.5; const O2=parseFloat(((lambda-1)*V_th/lambda*0.21/1*100).toFixed(1));
    const excess=parseFloat(((lambda-1)*100).toFixed(0));
    return { cat:'💨 Verbrennung',
      question:`Ein Brenner arbeitet mit Luftfaktor <strong>λ = ${fmtN(lambda)}</strong>.<br><br>Wie viel Prozent Luftüberschuss (bezogen auf den theoretischen Bedarf) wird eingesetzt?`,
      hint:'Luftüberschuss = (λ − 1) · 100 %', correct:excess, unit:'%',
      steps:`Luftüberschuss = (λ − 1) · 100 %\n= (${fmtN(lambda)} − 1) · 100\n= ${fmtN(excess)} %` };
  },

  () => {
    const Q_nutz=rnd(200,2000,100); const eta=rnd(65,88,1);
    const Q_zu=parseFloat((Q_nutz/(eta/100)).toFixed(1));
    const Q_verl=parseFloat((Q_zu-Q_nutz).toFixed(1));
    return { cat:'💨 Verbrennung',
      question:`Ein Tunnelofen soll <strong>${fmtN(Q_nutz)} MJ</strong> Nutzwärme an die Ware abgeben. Der Wirkungsgrad beträgt <strong>η = ${eta} %</strong>.<br><br>Wie viel Energie <em>Q<sub>Verlust</sub></em> wird als Verlust abgestrahlt?`,
      hint:'Q_zu = Q_nutz/η  →  Q_Verlust = Q_zu − Q_nutz', correct:Q_verl, unit:'MJ',
      steps:`Q_zu = ${fmtN(Q_nutz)}/(${eta}/100) = ${fmtN(Q_zu)} MJ\nQ_Verlust = ${fmtN(Q_zu)} − ${fmtN(Q_nutz)} = ${fmtN(Q_verl)} MJ` };
  }
,

  () => { const V=rnd(10,300,10),Hu=rnd(8,40,2); const Q=parseFloat((V*Hu).toFixed(1)); return { cat:'💨 Verbrennung', question:`Verbrennung von <strong>${V} m³ Gas</strong>, H<sub>u</sub>=<strong>${Hu} MJ/m³</strong>. Freigesetzte Wärme <em>Q</em>?`, hint:'Q = V·Hᵤ', correct:Q, unit:'MJ', steps:`Q=${V}·${Hu}=${fmtN(Q)} MJ` }; },
  () => { const V_r=rnd(8,25,1),V_t=rnd(6,20,1); const lam=parseFloat((V_r/V_t).toFixed(2)); const art=lam<0.99?'reduzierend (Luftmangel, CO!)':lam>1.01?'oxidierend (Luftüberschuss)':'stöchiometrisch (neutral)'; return { cat:'💨 Verbrennung', question:`V<sub>real</sub>=<strong>${V_r} m³/m³</strong>, V<sub>th</sub>=<strong>${V_t} m³/m³</strong>. Luftfaktor <em>λ</em>?`, hint:'λ = V_real/V_th', correct:lam, unit:'', tol:0.02, steps:`λ=${V_r}/${V_t}=${fmtN(lam)} → ${art}` }; },
  () => { const eta=rnd(60,90,5),Q_zu=rnd(500,5000,100); const Q_n=parseFloat((Q_zu*eta/100).toFixed(1)); return { cat:'💨 Verbrennung', question:`Q<sub>zu</sub>=<strong>${fmtN(Q_zu)} MJ</strong>, η=<strong>${eta}%</strong>. Nutzwärme <em>Q<sub>nutz</sub></em>?`, hint:'Q_nutz = Q_zu·η/100', correct:Q_n, unit:'MJ', steps:`Q_nutz=${fmtN(Q_zu)}·${eta}/100=${fmtN(Q_n)} MJ` }; },
  () => { const Q_n=rnd(200,2000,100),Q_zu=rnd(parseFloat((Q_n*1.2).toFixed(0)),parseFloat((Q_n*2.5).toFixed(0)),100); const eta=parseFloat((Q_n/Q_zu*100).toFixed(1)); return { cat:'💨 Verbrennung', question:`Q<sub>nutz</sub>=<strong>${fmtN(Q_n)} kJ</strong>, Q<sub>zu</sub>=<strong>${fmtN(Q_zu)} kJ</strong>. Wirkungsgrad <em>η</em>?`, hint:'η = Q_nutz/Q_zu·100', correct:eta, unit:'%', steps:`η=${fmtN(Q_n)}/${fmtN(Q_zu)}·100=${fmtN(eta)} %` }; },
  () => { const lam=rnd(1.1,1.5,0.05),V_th=rnd(8,14,0.5); const V_r=parseFloat((lam*V_th).toFixed(2)); return { cat:'💨 Verbrennung', question:`λ=<strong>${fmtN(lam)}</strong>, V<sub>th</sub>=<strong>${fmtN(V_th)} m³/m³</strong>. Zugeführte Luft <em>V<sub>real</sub></em>?`, hint:'V_real = λ·V_th', correct:V_r, unit:'m³/m³', steps:`V_real=${fmtN(lam)}·${fmtN(V_th)}=${fmtN(V_r)} m³/m³` }; },
  () => { const Hu=rnd(30,40,1),cp=1.35,Tu=rnd(15,30,5); const Tv=parseFloat((Hu*1000/cp+Tu).toFixed(0)); return { cat:'💨 Verbrennung', question:`Erdgas: H<sub>u</sub>=<strong>${Hu} MJ/m³</strong>, c<sub>p</sub>=1,35 kJ/(m³·K), T<sub>Luft</sub>=${Tu}°C.<br><br>Theoretische Verbrennungstemperatur <em>T<sub>v</sub></em>?`, hint:'T_v = Hᵤ[kJ/m³]/c_p + T_u', correct:Tv, unit:'°C', tol:0.03, steps:`T_v=${Hu*1000}/1,35+${Tu}=${fmtN(Tv)} °C` }; },
  () => { const lam=rnd(1.05,1.4,0.05); const ueberschuss=parseFloat(((lam-1)*100).toFixed(1)); return { cat:'💨 Verbrennung', question:`Luftfaktor <strong>λ=${fmtN(lam)}</strong>. Wie viel Prozent Luftüberschuss wird eingesetzt?`, hint:'Überschuss = (λ−1)·100 %', correct:ueberschuss, unit:'%', steps:`Überschuss=(${fmtN(lam)}−1)·100=${fmtN(ueberschuss)} %` }; },
  () => { const V=rnd(50,500,25),Hu=rnd(8,40,2),m=rnd(100,2000,100),c=0.84,dT=rnd(500,1100,50); const Qfrei=parseFloat((V*Hu*1000).toFixed(0)); const Qbed=parseFloat((m*c*dT).toFixed(0)); const eta=parseFloat((Qbed/Qfrei*100).toFixed(1)); return { cat:'💨 Verbrennung', question:`V=${V} m³ Gas (H<sub>u</sub>=${Hu} MJ/m³) erhitzt ${m} kg Keramik (c=0,84) um ${dT} K.<br><br>Ofenwirkungsgrad <em>η</em>?`, hint:'η = Q_nutz/Q_zu·100', correct:eta, unit:'%', steps:`Q_zu=${V}·${Hu}·1000=${fmtN(Qfrei)} kJ\nQ_nutz=${m}·0,84·${dT}=${fmtN(Qbed)} kJ\nη=${fmtN(Qbed)}/${fmtN(Qfrei)}·100=${fmtN(eta)} %` }; },
  () => { const Hu=rnd(15,38,1),V=rnd(10,200,10); const CO2pct=rnd(8,12,0.5); const m_CO2=parseFloat((V*Hu/12.5).toFixed(1)); return { cat:'💨 Verbrennung', question:`Bei der Verbrennung von <strong>${V} m³ Gas</strong> (H<sub>u</sub>=${Hu} MJ/m³) mit η=75% werden <strong>${fmtN(V*Hu*0.75)} MJ</strong> Nutzwärme gewonnen.<br><br>Welcher Anteil geht als Verlust verloren?`, hint:'Q_Verlust = Q_zu − Q_nutz', correct:parseFloat((V*Hu*0.25).toFixed(1)), unit:'MJ', steps:`Q_zu=${V}·${Hu}=${fmtN(V*Hu)} MJ\nQ_nutz=${fmtN(V*Hu*0.75)} MJ\nQ_V=${fmtN(V*Hu*0.25)} MJ` }; },
  () => { const lam=rnd(0.85,0.98,0.01); const ueberschuss=parseFloat(((1-lam)*100).toFixed(1)); return { cat:'💨 Verbrennung', question:`Luftfaktor <strong>λ=${fmtN(lam)}</strong>. Um wie viel Prozent <strong>fehlt</strong> Luft gegenüber dem stöchiometrischen Bedarf?`, hint:'Luftmangel = (1−λ)·100 %', correct:ueberschuss, unit:'%', steps:`Luftmangel=(1−${fmtN(lam)})·100=${fmtN(ueberschuss)} %` }; }
,

  ()=>{const V=rnd(10,400,10),Hu=rnd(8,40,1);const Q=parseFloat((V*Hu).toFixed(1));return{cat:'💨 Verbrennung',question:`V=<strong>${V} m³</strong>, H<sub>u</sub>=<strong>${Hu} MJ/m³</strong>. Freigesetzte Energie <em>Q</em>?`,hint:'Q=V·Hᵤ',correct:Q,unit:'MJ',steps:`Q=${V}·${Hu}=${fmtN(Q)} MJ`};},
  ()=>{const Vr=rnd(8,25,0.5),Vt=rnd(6,20,0.5);const lam=parseFloat((Vr/Vt).toFixed(2));return{cat:'💨 Verbrennung',question:`V<sub>real</sub>=${fmtN(Vr)}, V<sub>th</sub>=${fmtN(Vt)} m³/m³. Luftfaktor <em>λ</em>?`,hint:'λ=V_real/V_th',correct:lam,unit:'',tol:0.02,steps:`λ=${fmtN(Vr)}/${fmtN(Vt)}=${fmtN(lam)}`};},
  ()=>{const lam=rnd(1.05,1.5,0.05),Vt=rnd(8,14,0.5);const Vr=parseFloat((lam*Vt).toFixed(2));return{cat:'💨 Verbrennung',question:`λ=<strong>${fmtN(lam)}</strong>, V<sub>th</sub>=<strong>${fmtN(Vt)} m³/m³</strong>. Zugeführte Luft <em>V<sub>real</sub></em>?`,hint:'V_real=λ·V_th',correct:Vr,unit:'m³/m³',steps:`V_r=${fmtN(lam)}·${fmtN(Vt)}=${fmtN(Vr)} m³/m³`};},
  ()=>{const eta=rnd(60,90,5),Qzu=rnd(200,5000,100);const Qn=parseFloat((Qzu*eta/100).toFixed(1));return{cat:'💨 Verbrennung',question:`Q<sub>zu</sub>=<strong>${fmtN(Qzu)} MJ</strong>, η=<strong>${eta}%</strong>. Nutzwärme <em>Q<sub>n</sub></em>?`,hint:'Q_n=Q_zu·η/100',correct:Qn,unit:'MJ',steps:`Q_n=${fmtN(Qzu)}·${eta}/100=${fmtN(Qn)} MJ`};},
  ()=>{const Qn=rnd(100,3000,50),eta=rnd(60,90,5);const Qzu=parseFloat((Qn/(eta/100)).toFixed(1));return{cat:'💨 Verbrennung',question:`Q<sub>nutz</sub>=<strong>${fmtN(Qn)} MJ</strong>, η=<strong>${eta}%</strong>. Zugeführte Energie <em>Q<sub>zu</sub></em>?`,hint:'Q_zu=Q_nutz/η',correct:Qzu,unit:'MJ',steps:`Q_zu=${fmtN(Qn)}/(${eta}/100)=${fmtN(Qzu)} MJ`};},
  ()=>{const Qzu=rnd(500,5000,100),Qn=rnd(200,parseFloat((Qzu*0.9).toFixed(0)),50);const eta=parseFloat((Qn/Qzu*100).toFixed(1));return{cat:'💨 Verbrennung',question:`Q<sub>zu</sub>=<strong>${fmtN(Qzu)}</strong>, Q<sub>n</sub>=<strong>${fmtN(Qn)} MJ</strong>. Wirkungsgrad <em>η</em>?`,hint:'η=Q_n/Q_zu·100',correct:eta,unit:'%',steps:`η=${fmtN(Qn)}/${fmtN(Qzu)}·100=${fmtN(eta)} %`};},
  ()=>{const lam=rnd(1.1,1.5,0.05);const ub=parseFloat(((lam-1)*100).toFixed(1));return{cat:'💨 Verbrennung',question:`λ=<strong>${fmtN(lam)}</strong>. Luftüberschuss in %?`,hint:'Überschuss=(λ−1)·100',correct:ub,unit:'%',steps:`(${fmtN(lam)}−1)·100=${fmtN(ub)} %`};},
  ()=>{const lam=rnd(0.85,0.98,0.01);const mn=parseFloat(((1-lam)*100).toFixed(1));return{cat:'💨 Verbrennung',question:`λ=<strong>${fmtN(lam)}</strong>. Luftmangel in %?`,hint:'Luftmangel=(1−λ)·100',correct:mn,unit:'%',steps:`(1−${fmtN(lam)})·100=${fmtN(mn)} %`};},
  ()=>{const Hu=rnd(30,40,1),cp=1.35,Tu=rnd(15,30,5);const Tv=parseFloat((Hu*1000/cp+Tu).toFixed(0));return{cat:'💨 Verbrennung',question:`H<sub>u</sub>=${Hu} MJ/m³, c<sub>p</sub>=1,35 kJ/(m³·K), T<sub>u</sub>=${Tu}°C. Verbrennungstemperatur <em>T<sub>v</sub></em>?`,hint:'T_v=Hᵤ[kJ/m³]/c_p+T_u',correct:Tv,unit:'°C',tol:0.03,steps:`T_v=${Hu*1000}/1,35+${Tu}=${fmtN(Tv)} °C`};},
  ()=>{const V=rnd(50,500,25),Hu=rnd(10,38,2),eta=rnd(65,88,5);const Qn=parseFloat((V*Hu*eta/100).toFixed(1));return{cat:'💨 Verbrennung',question:`V=${V} m³, H<sub>u</sub>=${Hu} MJ/m³, η=${eta}%. Nutzwärme <em>Q<sub>n</sub></em>?`,hint:'Q_n=V·Hᵤ·η/100',correct:Qn,unit:'MJ',steps:`Q_n=${V}·${Hu}·${eta}/100=${fmtN(Qn)} MJ`};},
  ()=>{const Hu=rnd(8,40,1),V=rnd(10,200,10),m=rnd(100,2000,100),c=0.84,dT=rnd(500,1100,50);const Qfrei=parseFloat((V*Hu*1000).toFixed(0));const Qbed=parseFloat((m*c*dT).toFixed(0));const eta=parseFloat((Qbed/Qfrei*100).toFixed(1));return{cat:'💨 Verbrennung',question:`${V} m³ Gas (H<sub>u</sub>=${Hu} MJ/m³) erhitzt ${m} kg Keramik um ${dT} K. Ofenwirkungsgrad <em>η</em>?`,hint:'η=Q_nutz/Q_zu·100',correct:eta,unit:'%',steps:`Q_zu=${fmtN(Qfrei)} kJ, Q_nutz=${fmtN(Qbed)} kJ\nη=${fmtN(eta)} %`};},
  ()=>{const Qn=rnd(200,2000,100),eta=rnd(65,90,1);const Qv=parseFloat((Qn/eta*(100-eta)).toFixed(1));return{cat:'💨 Verbrennung',question:`Q<sub>nutz</sub>=<strong>${fmtN(Qn)} MJ</strong>, η=<strong>${eta}%</strong>. Wärmeverlust <em>Q<sub>v</sub></em>?`,hint:'Q_zu=Q_n/η, Q_v=Q_zu−Q_n',correct:Qv,unit:'MJ',steps:`Q_zu=${fmtN(Qn/(eta/100))} MJ\nQ_v=${fmtN(Qv)} MJ`};},
  ()=>{const n_brenner=rndInt(2,8),V_je=rnd(5,30,1),Hu=rnd(8,38,2),eta=rnd(65,88,5);const V_ges=n_brenner*V_je;const Qn=parseFloat((V_ges*Hu*eta/100).toFixed(1));return{cat:'💨 Verbrennung',question:`${n_brenner} Brenner × ${fmtN(V_je)} m³/h, H<sub>u</sub>=${Hu} MJ/m³, η=${eta}%. Stündliche Nutzwärme <em>Q<sub>n</sub></em>?`,hint:'V_ges=n·V_je, Q_n=V_ges·Hᵤ·η/100',correct:Qn,unit:'MJ/h',steps:`V_ges=${n_brenner}·${fmtN(V_je)}=${fmtN(V_ges)} m³/h\nQ_n=${fmtN(V_ges)}·${Hu}·${eta}/100=${fmtN(Qn)} MJ/h`};},
  ()=>{const Vt=rnd(9,13,0.5),lam=rnd(1.05,1.4,0.05);const Vr=parseFloat((lam*Vt).toFixed(2));const Vextra=parseFloat((Vr-Vt).toFixed(2));return{cat:'💨 Verbrennung',question:`V<sub>th</sub>=${fmtN(Vt)} m³/m³, λ=${fmtN(lam)}. Überschuss-Luft <em>ΔV</em>?`,hint:'ΔV=(λ−1)·V_th',correct:Vextra,unit:'m³/m³',steps:`ΔV=(${fmtN(lam)}−1)·${fmtN(Vt)}=${fmtN(Vextra)} m³/m³`};}

  ],

  // ════ 💧 FEUCHTE & WASSERAUFNAHME ══════════════════════════
  feuchte: [
() => {
    const mfeucht=rnd(200,2000,50); const w=rnd(12,40,1);
    const mWasser=parseFloat((mfeucht*w/(100+w)).toFixed(2));
    return { cat:'💧 Feuchte & AW',
      question:`Eine feuchte Masse wiegt <strong>${mfeucht} g</strong>. Der Feuchtegehalt beträgt <strong>w = ${w} %</strong> (auf Trockenmasse).<br><br>Wie viel Gramm Wasser <em>m<sub>W</sub></em> sind enthalten?`,
      hint:'m_tr = m_f·100/(100+w),  m_W = m_f − m_tr', correct:mWasser, unit:'g',
      steps:`m_tr = ${mfeucht}·100/(100+${w}) = ${fmtN(mfeucht*100/(100+w))} g\nm_W = ${mfeucht} − ${fmtN(mfeucht*100/(100+w))} = ${fmtN(mWasser)} g` };
  },

  () => {
    const V=rnd(10,200,5); const rhoSchlicker=rnd(1500,1900,50);
    const TS=rnd(55,75,1);
    const mSchlicker=parseFloat((V*rhoSchlicker/1000).toFixed(2));
    const mTr=parseFloat((mSchlicker*TS/100).toFixed(2));
    return { cat:'💧 Feuchte & AW',
      question:`Ein Schlicker (ρ = ${rhoSchlicker} g/l) hat einen Trockensubstanzgehalt von <strong>TS = ${TS} %</strong>. Es liegen <strong>${V} Liter</strong> vor.<br><br>Wie viel Trockenmasse <em>m<sub>tr</sub></em> ist enthalten?`,
      hint:'m_Schlicker = V·ρ,  m_tr = m_Schlicker · TS/100', correct:mTr, unit:'kg',
      steps:`m_Schlicker = ${V}·${rhoSchlicker}/1000 = ${fmtN(mSchlicker)} kg\nm_tr = ${fmtN(mSchlicker)}·${TS}/100 = ${fmtN(mTr)} kg` };
  },

  () => {
    const mTr=rnd(100,2000,50); const w1=rnd(20,35,1); const w2=rnd(5,15,1);
    const mf1=parseFloat((mTr*(100+w1)/100).toFixed(2));
    const mf2=parseFloat((mTr*(100+w2)/100).toFixed(2));
    const mAbgabe=parseFloat((mf1-mf2).toFixed(2));
    return { cat:'💧 Feuchte & AW',
      question:`Eine Tonmasse (Trockenmasse: <strong>${mTr} g</strong>) wird vom Feuchtegehalt <strong>w₁ = ${w1} %</strong> auf <strong>w₂ = ${w2} %</strong> getrocknet.<br><br>Wie viel Wasser <em>m<sub>ab</sub></em> wird abgegeben?`,
      hint:'m_ab = m_feucht(w₁) − m_feucht(w₂)', correct:mAbgabe, unit:'g',
      steps:`m_f1 = ${mTr}·(100+${w1})/100 = ${fmtN(mf1)} g\nm_f2 = ${mTr}·(100+${w2})/100 = ${fmtN(mf2)} g\nm_ab = ${fmtN(mf1)} − ${fmtN(mf2)} = ${fmtN(mAbgabe)} g` };
  },

  () => {
    const mTr=rnd(500,5000,100); const AW=rnd(20,32,1);
    const mGes=parseFloat((mTr*(1+AW/100)).toFixed(1));
    return { cat:'💧 Feuchte & AW',
      question:`Für eine plastische Masse werden <strong>${fmtN(mTr)} g Trockenmasse</strong> mit <strong>AW = ${AW} %</strong> angemacht.<br><br>Wie schwer ist die fertige Masse <em>m<sub>ges</sub></em>?`,
      hint:'m_ges = m_tr · (1 + AW/100)', correct:mGes, unit:'g',
      steps:`m_ges = ${fmtN(mTr)}·(1+${AW}/100) = ${fmtN(mTr)}·${fmtN(1+AW/100)} = ${fmtN(mGes)} g` };
  },

  () => {
    const rhoSchl=rnd(1600,1900,20);
    const TSgehalt=rnd(60,80,1);
    const rhoTr=2600; const rhoWas=1000;
    // TS% = m_tr/m_schlicker*100; m_schlicker = V*rho
    // Litergewicht direkt gegeben
    return { cat:'💧 Feuchte & AW',
      question:`Ein Schlicker hat ein Litergewicht von <strong>${rhoSchl} g/l</strong> und einen Trockensubstanzgehalt von <strong>${TSgehalt} %</strong>.<br><br>Wie viel Gramm Wasser enthält <strong>1 Liter</strong> dieses Schlickers?`,
      hint:'m_Wasser = m_Schlicker − m_Trocken', correct:parseFloat((rhoSchl*(1-TSgehalt/100)).toFixed(1)), unit:'g',
      steps:`m_Schlicker = ${rhoSchl} g\nm_Trocken = ${rhoSchl}·${TSgehalt}/100 = ${fmtN(rhoSchl*TSgehalt/100)} g\nm_Wasser = ${rhoSchl} − ${fmtN(rhoSchl*TSgehalt/100)} = ${fmtN(rhoSchl*(1-TSgehalt/100))} g` };
  },

  () => {
    const mTr=rnd(100,1000,50); const AW_vorher=rnd(22,32,1); const AW_nachher=rnd(0.1,3,0.1);
    const mf_vorher=parseFloat((mTr*(1+AW_vorher/100)).toFixed(1));
    const mf_nachher=parseFloat((mTr*(1+AW_nachher/100)).toFixed(2));
    const delta=parseFloat((mf_vorher-mf_nachher).toFixed(2));
    return { cat:'💧 Feuchte & AW',
      question:`Ein Formling (m<sub>tr</sub> = <strong>${mTr} g</strong>) wird vom Anmachwassergehalt <strong>AW = ${AW_vorher} %</strong> auf einen Restfeuchtegehalt von <strong>${AW_nachher} %</strong> getrocknet.<br><br>Wie viel Gramm Wasser <em>Δm</em> verliert er?`,
      hint:'Δm = m_feucht(AW₁) − m_feucht(AW₂)', correct:delta, unit:'g',
      steps:`m₁ = ${mTr}·(1+${AW_vorher}/100) = ${fmtN(mf_vorher)} g\nm₂ = ${mTr}·(1+${AW_nachher}/100) = ${fmtN(mf_nachher)} g\nΔm = ${fmtN(mf_vorher)} − ${fmtN(mf_nachher)} = ${fmtN(delta)} g` };
  },

  () => {
    const mfeucht=rnd(500,3000,100); const mtr=rnd(400,parseFloat((mfeucht*0.9).toFixed(0)),50);
    const w=parseFloat(((mfeucht-mtr)/mtr*100).toFixed(2));
    const AW_basis_feucht=parseFloat(((mfeucht-mtr)/mfeucht*100).toFixed(2));
    return { cat:'💧 Feuchte & AW',
      question:`Eine Tonprobe wiegt feucht <strong>${mfeucht} g</strong>, trocken (105 °C) <strong>${mtr} g</strong>.<br><br>Berechnen Sie den Feuchtegehalt <em>w</em> bezogen auf die <strong>Feuchtmasse</strong> (nicht auf Trockenmasse).`,
      hint:'w_f = (m_feucht − m_tr) / m_feucht · 100', correct:AW_basis_feucht, unit:'%',
      steps:`w_f = (${mfeucht} − ${mtr}) / ${mfeucht} · 100\n= ${mfeucht-mtr} / ${mfeucht} · 100 = ${fmtN(AW_basis_feucht)} %\n(w bezogen auf Tr. wäre: ${fmtN(w)} %)` };
  },

  () => {
    const V=rnd(500,5000,100); const LG=rnd(1600,1900,10);
    const TS=rnd(55,75,1);
    const mSchlicker=parseFloat((V*LG/1000).toFixed(1));
    const mTr=parseFloat((mSchlicker*TS/100).toFixed(1));
    const mWasser=parseFloat((mSchlicker-mTr).toFixed(1));
    return { cat:'💧 Feuchte & AW',
      question:`Ein Schlickertank fasst <strong>${V} Liter</strong>. Das Litergewicht beträgt <strong>${LG} g/l</strong>, der TS-Gehalt <strong>${TS} %</strong>.<br><br>Wie viel Kilogramm Wasser <em>m<sub>W</sub></em> sind im Tank?`,
      hint:'m_Schlicker = V·LG,  m_W = m_Schlicker · (1 − TS/100)', correct:parseFloat((mWasser/1000).toFixed(2)), unit:'kg',
      steps:`m_Schlicker = ${V}·${LG}/1000 = ${fmtN(mSchlicker)} kg\nm_W = ${fmtN(mSchlicker)}·(1−${TS}/100) = ${fmtN(mWasser)} g = ${fmtN(mWasser/1000)} kg` };
  }
,

  () => { const mf=rnd(100,2000,50),w=rnd(10,35,1); const mt=parseFloat((mf*100/(100+w)).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`Feuchtmasse <strong>${mf} g</strong>, w=<strong>${w}%</strong> (auf Tr.).<br>Trockenmasse <em>m<sub>tr</sub></em>?`, hint:'m_tr = m_f·100/(100+w)', correct:mt, unit:'g', steps:`m_tr=${mf}·100/(100+${w})=${fmtN(mt)} g` }; },
  () => { const mt=rnd(100,2000,50),w=rnd(10,35,1); const mf=parseFloat((mt*(100+w)/100).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`Trockenmasse <strong>${mt} g</strong>, w=<strong>${w}%</strong>.<br>Feuchtmasse <em>m<sub>f</sub></em>?`, hint:'m_f = m_tr·(100+w)/100', correct:mf, unit:'g', steps:`m_f=${mt}·(100+${w})/100=${fmtN(mf)} g` }; },
  () => { const mf=rnd(200,2000,50),mt=rnd(150,parseFloat((mf*0.95).toFixed(0)),20); const w=parseFloat(((mf-mt)/mt*100).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`m<sub>feucht</sub>=<strong>${mf} g</strong>, m<sub>tr</sub>=<strong>${mt} g</strong>. Feuchtegehalt <em>w</em>?`, hint:'w=(m_f−m_tr)/m_tr·100', correct:w, unit:'%', steps:`w=(${mf}−${mt})/${mt}·100=${fmtN(w)} %` }; },
  () => { const mt=rnd(500,5000,100),AW=rnd(18,32,1); const mW=parseFloat((mt*AW/100).toFixed(1)); return { cat:'💧 Feuchte & AW', question:`m<sub>tr</sub>=<strong>${fmtN(mt)} g</strong>, AW=<strong>${AW}%</strong>. Wassermenge <em>m<sub>W</sub></em>?`, hint:'m_W = m_tr·AW/100', correct:mW, unit:'g', steps:`m_W=${fmtN(mt)}·${AW}/100=${fmtN(mW)} g` }; },
  () => { const mW=rnd(100,1000,25),mt=rnd(400,3000,100); const AW=parseFloat((mW/mt*100).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`m<sub>W</sub>=<strong>${mW} g</strong> Wasser auf <strong>${mt} g</strong> Trockenmasse. AW in %?`, hint:'AW = m_W/m_tr·100', correct:AW, unit:'%', steps:`AW=${mW}/${mt}·100=${fmtN(AW)} %` }; },
  () => { const LG=rnd(1500,1950,10),TS=rnd(55,80,1); const mTr=parseFloat((LG*TS/100).toFixed(1)); const mW=parseFloat((LG-mTr).toFixed(1)); return { cat:'💧 Feuchte & AW', question:`Litergewicht <strong>${LG} g/l</strong>, TS=<strong>${TS}%</strong>. Wassergehalt pro Liter Schlicker <em>m<sub>W</sub></em>?`, hint:'m_W = LG·(1−TS/100)', correct:mW, unit:'g/l', steps:`m_Tr=${LG}·${TS}/100=${fmtN(mTr)} g\nm_W=${LG}−${fmtN(mTr)}=${fmtN(mW)} g/l` }; },
  () => { const V=rnd(100,2000,50),LG=rnd(1600,1900,10),TS=rnd(60,78,1); const mSch=parseFloat((V*LG/1000).toFixed(1)); const mTr=parseFloat((mSch*TS/100).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`Tank: <strong>${V} l</strong>, LG=<strong>${LG} g/l</strong>, TS=<strong>${TS}%</strong>. Trockenmasse im Tank <em>m<sub>tr</sub></em>?`, hint:'m_Schlicker=V·LG/1000, m_tr=m_Sch·TS/100', correct:mTr, unit:'kg', steps:`m_Sch=${V}·${LG}/1000=${fmtN(mSch)} kg\nm_tr=${fmtN(mSch)}·${TS}/100=${fmtN(mTr)} kg` }; },
  () => { const w1=rnd(22,35,1),w2=rnd(1,8,0.5),mt=rnd(200,2000,100); const mAb=parseFloat((mt*((w1-w2)/100)).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`m<sub>tr</sub>=<strong>${mt} g</strong>, Trocknung von w=<strong>${w1}%</strong> auf w=<strong>${fmtN(w2)}%</strong>.<br><br>Abgegebenes Wasser <em>Δm</em>?`, hint:'Δm ≈ m_tr·(w₁−w₂)/100', correct:mAb, unit:'g', tol:0.03, steps:`Δm=${mt}·(${w1}−${fmtN(w2)})/100=${mt}·${(w1-w2)/100}=${fmtN(mAb)} g` }; },
  () => { const rhoSch=rnd(1600,1900,20),V=rnd(10,100,5); const m=parseFloat((rhoSch*V/1000).toFixed(2)); return { cat:'💧 Feuchte & AW', question:`Schlicker: LG=<strong>${rhoSch} g/l</strong>, Volumen=<strong>${V} l</strong>. Masse <em>m</em>?`, hint:'m = LG·V/1000 (in kg)', correct:m, unit:'kg', steps:`m=${rhoSch}·${V}/1000=${fmtN(m)} kg` }; },
  () => { const mt=rnd(200,2000,100),w_start=rnd(25,35,1),w_end=0; const mf_start=parseFloat((mt*(1+w_start/100)).toFixed(1)); const mVerlust=parseFloat((mf_start-mt).toFixed(1)); return { cat:'💧 Feuchte & AW', question:`m<sub>tr</sub>=<strong>${mt} g</strong>, Anfangsfeuchte w=<strong>${w_start}%</strong>. Beim Trocknen bis w=0% abgegebenes Wasser?`, hint:'m_Wasser = m_tr · w/100', correct:mVerlust, unit:'g', steps:`m_feucht=${mt}·(1+${w_start}/100)=${fmtN(mf_start)} g\nm_Verlust=${fmtN(mf_start)}−${mt}=${fmtN(mVerlust)} g` }; }
,

  ()=>{const mf=rnd(100,2000,50),w=rnd(10,35,1);const mt=parseFloat((mf*100/(100+w)).toFixed(2));return{cat:'💧 Feuchte & AW',question:`m<sub>f</sub>=<strong>${mf} g</strong>, w=<strong>${w}%</strong>. Trockenmasse <em>m<sub>tr</sub></em>?`,hint:'m_tr=m_f·100/(100+w)',correct:mt,unit:'g',steps:`m_tr=${mf}·100/(100+${w})=${fmtN(mt)} g`};},
  ()=>{const mt=rnd(100,2000,50),w=rnd(10,35,1);const mf=parseFloat((mt*(100+w)/100).toFixed(2));return{cat:'💧 Feuchte & AW',question:`m<sub>tr</sub>=<strong>${mt} g</strong>, w=<strong>${w}%</strong>. Feuchtmasse <em>m<sub>f</sub></em>?`,hint:'m_f=m_tr·(100+w)/100',correct:mf,unit:'g',steps:`m_f=${mt}·${(100+w)/100}=${fmtN(mf)} g`};},
  ()=>{const mf=rnd(200,2000,50),mt=rnd(150,parseFloat((mf*0.95).toFixed(0)),20);const w=parseFloat(((mf-mt)/mt*100).toFixed(2));return{cat:'💧 Feuchte & AW',question:`m<sub>f</sub>=<strong>${mf} g</strong>, m<sub>tr</sub>=<strong>${mt} g</strong>. Feuchtegehalt <em>w</em> (auf Tr.)?`,hint:'w=(m_f−m_tr)/m_tr·100',correct:w,unit:'%',steps:`w=(${mf}−${mt})/${mt}·100=${fmtN(w)} %`};},
  ()=>{const mt=rnd(300,5000,100),AW=rnd(18,32,2);const mW=parseFloat((mt*AW/100).toFixed(1));return{cat:'💧 Feuchte & AW',question:`m<sub>tr</sub>=<strong>${fmtN(mt)} g</strong>, AW=<strong>${AW}%</strong>. Wasserzugabe <em>m<sub>W</sub></em>?`,hint:'m_W=m_tr·AW/100',correct:mW,unit:'g',steps:`m_W=${fmtN(mt)}·${AW}/100=${fmtN(mW)} g`};},
  ()=>{const mW=rnd(100,1000,25),mt=rnd(300,3000,100);const AW=parseFloat((mW/mt*100).toFixed(2));return{cat:'💧 Feuchte & AW',question:`m<sub>W</sub>=<strong>${mW} g</strong>, m<sub>tr</sub>=<strong>${mt} g</strong>. AW in %?`,hint:'AW=m_W/m_tr·100',correct:AW,unit:'%',steps:`AW=${mW}/${mt}·100=${fmtN(AW)} %`};},
  ()=>{const LG=rnd(1500,1950,10),TS=rnd(55,80,1);const mW=parseFloat((LG*(1-TS/100)).toFixed(1));return{cat:'💧 Feuchte & AW',question:`LG=<strong>${LG} g/l</strong>, TS=<strong>${TS}%</strong>. Wassergehalt pro Liter <em>m<sub>W</sub></em>?`,hint:'m_W=LG·(1−TS/100)',correct:mW,unit:'g/l',steps:`m_W=${LG}·(1−${TS}/100)=${fmtN(mW)} g/l`};},
  ()=>{const V=rnd(100,2000,50),LG=rnd(1600,1900,10),TS=rnd(60,80,1);const mSch=parseFloat((V*LG/1000).toFixed(1));const mTr=parseFloat((mSch*TS/100).toFixed(2));return{cat:'💧 Feuchte & AW',question:`Tank: ${V} l, LG=${LG} g/l, TS=${TS}%. Trockenmasse <em>m<sub>tr</sub></em>?`,hint:'m_Sch=V·LG/1000, m_tr=m_Sch·TS/100',correct:mTr,unit:'kg',steps:`m_Sch=${fmtN(mSch)} kg → m_tr=${fmtN(mTr)} kg`};},
  ()=>{const mf=rnd(500,5000,100),w=rnd(20,40,1);const mW=parseFloat((mf*w/(100+w)).toFixed(2));return{cat:'💧 Feuchte & AW',question:`m<sub>f</sub>=<strong>${mf} g</strong>, w=<strong>${w}%</strong>. Wassergehalt <em>m<sub>W</sub></em>?`,hint:'m_W=m_f·w/(100+w)',correct:mW,unit:'g',steps:`m_W=${mf}·${w}/(100+${w})=${fmtN(mW)} g`};},
  ()=>{const mt=rnd(200,2000,100),w1=rnd(22,35,1),w2=rnd(1,10,1);const mAb=parseFloat((mt*(w1-w2)/100).toFixed(1));return{cat:'💧 Feuchte & AW',question:`Trocknung: m<sub>tr</sub>=${mt} g, w: ${w1}% → ${w2}%. Abgegebenes Wasser <em>Δm</em>?`,hint:'Δm≈m_tr·(w₁−w₂)/100',correct:mAb,unit:'g',tol:0.03,steps:`Δm=${mt}·(${w1}−${w2})/100=${fmtN(mAb)} g`};},
  ()=>{const rhoSch=rnd(1600,1900,20),V=rnd(10,200,5);const m=parseFloat((rhoSch*V/1000).toFixed(2));return{cat:'💧 Feuchte & AW',question:`LG=<strong>${rhoSch} g/l</strong>, V=<strong>${V} l</strong>. Schlickermasse <em>m</em>?`,hint:'m=LG·V/1000 [kg]',correct:m,unit:'kg',steps:`m=${rhoSch}·${V}/1000=${fmtN(m)} kg`};}

  ],

  // ════ ⚙️ GETRIEBE & ANTRIEB ══════════════════════════
  getriebe: [
() => {
    const n1=rnd(500,3000,100); const i=rnd(2,15,0.5);
    const n2=parseFloat((n1/i).toFixed(2));
    return { cat:'⚙️ Getriebe',
      question:`Ein Untersetzungsgetriebe hat die Übersetzung <strong>i = ${fmtN(i)}</strong>. Die Antriebsdrehzahl beträgt <strong>n₁ = ${n1} min⁻¹</strong>.<br><br>Wie groß ist die Abtriebsdrehzahl <em>n₂</em>?`,
      hint:'n₂ = n₁ / i', correct:n2, unit:'min⁻¹',
      steps:`n₂ = n₁/i = ${n1}/${fmtN(i)} = ${fmtN(n2)} min⁻¹` };
  },

  () => {
    const n1=rnd(200,1000,50); const n2=rnd(1000,5000,100);
    const i=parseFloat((n1/n2).toFixed(3));
    return { cat:'⚙️ Getriebe',
      question:`Ein Übersetzungsgetriebe (Ins-Schnelle) hat n₁ = <strong>${n1} min⁻¹</strong> (Antrieb) und n₂ = <strong>${n2} min⁻¹</strong> (Abtrieb).<br><br>Wie groß ist die Übersetzung <em>i</em>?`,
      hint:'i = n₁ / n₂  (i < 1 = ins Schnelle)', correct:i, unit:'',
      tol:0.02,
      steps:`i = ${n1}/${n2} = ${fmtN(i)}\n(i < 1 → Übersetzung ins Schnelle)` };
  },

  () => {
    const P=rnd(2,30,1); const n1=rnd(1000,3000,100); const i=rnd(3,20,1); const eta=rnd(0.85,0.97,0.01);
    const n2=parseFloat((n1/i).toFixed(1));
    const M1=parseFloat((P*1000/(2*Math.PI*n1/60)).toFixed(1));
    const M2=parseFloat((P*1000*eta/(2*Math.PI*n2/60)).toFixed(1));
    return { cat:'⚙️ Getriebe',
      question:`Motor: P = <strong>${P} kW</strong>, n₁ = <strong>${n1} min⁻¹</strong>. Getriebe: i = ${i}, η = ${fmtN(eta)}.<br><br>Berechnen Sie das Antriebsdrehmoment <em>M₁</em> am Motor.`,
      hint:'M₁ = P / ω₁,  ω = 2π·n/60', correct:M1, unit:'Nm',
      steps:`ω₁ = 2π·${n1}/60 = ${fmtN(2*Math.PI*n1/60)} rad/s\nM₁ = P/ω₁ = ${P*1000}/${fmtN(2*Math.PI*n1/60)} = ${fmtN(M1)} Nm` };
  },

  () => {
    const z1=rndInt(15,40); const z2=rndInt(50,150);
    const n1=rnd(960,1450,60);
    const n2=parseFloat((n1*z1/z2).toFixed(1));
    const v_umfang=rnd(1,10,0.1); // m/s an Abtriebswelle
    const r=parseFloat((v_umfang/(2*Math.PI*n2/60)).toFixed(3));
    return { cat:'⚙️ Getriebe',
      question:`Stirnradgetriebe: z₁ = ${z1}, z₂ = ${z2}, n₁ = ${n1} min⁻¹. Die Abtriebswelle trägt eine Riemenscheibe.<br><br>Wie groß ist die Abtriebsdrehzahl <em>n₂</em>?`,
      hint:'n₂ = n₁ · z₁/z₂', correct:n2, unit:'min⁻¹',
      steps:`n₂ = ${n1}·${z1}/${z2} = ${fmtN(n2)} min⁻¹` };
  },

  () => {
    const n_motor=rnd(1000,3000,100); const n_trommel=rnd(20,100,5);
    const i_ges=parseFloat((n_motor/n_trommel).toFixed(1));
    const i1=rnd(3,8,0.5);
    const i2=parseFloat((i_ges/i1).toFixed(2));
    return { cat:'⚙️ Getriebe',
      question:`Eine Kugelmühle soll mit n = <strong>${n_trommel} min⁻¹</strong> drehen. Der Motor läuft mit <strong>n<sub>Motor</sub> = ${n_motor} min⁻¹</strong>. Die erste Stufe hat i₁ = ${fmtN(i1)}.<br><br>Welche Übersetzung <em>i₂</em> muss die zweite Stufe haben?`,
      hint:'i_ges = n_Motor / n_Trommel,  i_ges = i₁ · i₂', correct:i2, unit:'',
      tol:0.03,
      steps:`i_ges = ${n_motor}/${n_trommel} = ${fmtN(i_ges)}\ni₂ = i_ges/i₁ = ${fmtN(i_ges)}/${fmtN(i1)} = ${fmtN(i2)}` };
  },

  () => {
    const r1=rnd(50,200,10); const r2=rnd(100,400,10); const n1=rnd(500,2000,100);
    const n2=parseFloat((n1*r1/r2).toFixed(1));
    return { cat:'⚙️ Getriebe',
      question:`Ein Riemengetriebe: Antriebsscheibe Ø<sub>1</sub> = <strong>${r1*2} mm</strong>, Abtriebsscheibe Ø<sub>2</sub> = <strong>${r2*2} mm</strong>. Antriebsdrehzahl n₁ = ${n1} min⁻¹. (Schlupf vernachlässigt)<br><br>Wie groß ist die Abtriebsdrehzahl <em>n₂</em>?`,
      hint:'n₂ = n₁ · d₁/d₂ (Umfangsgeschwindigkeit gleich)', correct:n2, unit:'min⁻¹',
      steps:`n₂ = n₁·d₁/d₂ = ${n1}·${r1*2}/${r2*2} = ${fmtN(n2)} min⁻¹` };
  },

  () => {
    const n_an=rnd(1000,3000,100); const n_ab=rnd(50,300,10);
    const M_ab=rnd(50,500,10); const eta=rnd(0.80,0.95,0.01);
    const i=parseFloat((n_an/n_ab).toFixed(2));
    const M_an=parseFloat((M_ab/(i*eta)).toFixed(2));
    const P_an=parseFloat((M_an*2*Math.PI*n_an/60/1000).toFixed(2));
    return { cat:'⚙️ Getriebe',
      question:`Getriebe: n₁ = ${n_an} min⁻¹, n₂ = ${n_ab} min⁻¹, η = ${fmtN(eta)}, M₂ = <strong>${M_ab} Nm</strong>.<br><br>Welche Antriebsleistung <em>P₁</em> wird benötigt?`,
      hint:'i = n₁/n₂,  M₁ = M₂/(i·η),  P₁ = M₁·ω₁', correct:P_an, unit:'kW',
      steps:`i = ${n_an}/${n_ab} = ${fmtN(i)}\nM₁ = ${M_ab}/(${fmtN(i)}·${fmtN(eta)}) = ${fmtN(M_an)} Nm\nP₁ = ${fmtN(M_an)}·2π·${n_an}/60/1000 = ${fmtN(P_an)} kW` };
  },

  () => {
    const z1=rndInt(10,25); const z2=rndInt(40,120);
    const z3=rndInt(12,30); const z4=rndInt(60,150);
    const n1=rnd(960,1500,60);
    const n4=parseFloat((n1*(z1/z2)*(z3/z4)).toFixed(2));
    const i=parseFloat((n1/n4).toFixed(2));
    return { cat:'⚙️ Getriebe',
      question:`Zweistufiges Getriebe: z₁=${z1}, z₂=${z2} (1. Stufe) | z₃=${z3}, z₄=${z4} (2. Stufe). n₁ = ${n1} min⁻¹.<br><br>Berechnen Sie die Gesamtübersetzung <em>i<sub>ges</sub></em>.`,
      hint:'i_ges = (z₂/z₁) · (z₄/z₃)', correct:i, unit:'',
      tol:0.02,
      steps:`i₁ = z₂/z₁ = ${z2}/${z1} = ${fmtN(z2/z1)}\ni₂ = z₄/z₃ = ${z4}/${z3} = ${fmtN(z4/z3)}\ni_ges = ${fmtN(z2/z1)}·${fmtN(z4/z3)} = ${fmtN(i)}` };
  },

  () => {
    const dScheibe=rnd(100,400,10); const n=rnd(200,1000,50);
    const v=parseFloat((Math.PI*dScheibe/1000*n/60).toFixed(2));
    return { cat:'⚙️ Getriebe',
      question:`Eine Riemenscheibe hat einen Durchmesser von <strong>${dScheibe} mm</strong> und dreht mit <strong>${n} min⁻¹</strong>.<br><br>Wie groß ist die Umfangsgeschwindigkeit <em>v</em> des Riemens?`,
      hint:'v = π · d · n / 60  (d in m, n in min⁻¹)', correct:v, unit:'m/s',
      steps:`v = π·${dScheibe/1000}·${n}/60 = ${fmtN(v)} m/s` };
  }
,

  () => { const n1=rnd(500,3000,100),n2=rnd(50,400,10); const i=parseFloat((n1/n2).toFixed(3)); return { cat:'⚙️ Getriebe', question:`n₁=<strong>${n1} min⁻¹</strong>, n₂=<strong>${n2} min⁻¹</strong>. Übersetzung <em>i</em>?`, hint:'i = n₁/n₂', correct:i, unit:'', tol:0.02, steps:`i=${n1}/${n2}=${fmtN(i)}` }; },
  () => { const z1=rndInt(10,30),z2=rndInt(40,120),n1=rnd(500,2000,100); const n2=parseFloat((n1*z1/z2).toFixed(2)); return { cat:'⚙️ Getriebe', question:`z₁=<strong>${z1}</strong>, z₂=<strong>${z2}</strong>, n₁=<strong>${n1} min⁻¹</strong>. Abtriebsdrehzahl <em>n₂</em>?`, hint:'n₂ = n₁·z₁/z₂', correct:n2, unit:'min⁻¹', steps:`n₂=${n1}·${z1}/${z2}=${fmtN(n2)} min⁻¹` }; },
  () => { const n1=rnd(1000,3000,100),i=rnd(3,20,0.5); const n2=parseFloat((n1/i).toFixed(2)); return { cat:'⚙️ Getriebe', question:`n₁=<strong>${n1} min⁻¹</strong>, i=<strong>${fmtN(i)}</strong>. Abtriebsdrehzahl <em>n₂</em>?`, hint:'n₂ = n₁/i', correct:n2, unit:'min⁻¹', steps:`n₂=${n1}/${fmtN(i)}=${fmtN(n2)} min⁻¹` }; },
  () => { const P=rnd(1,30,1),n=rnd(500,3000,100); const M=parseFloat((P*1000/(2*Math.PI*n/60)).toFixed(1)); return { cat:'⚙️ Getriebe', question:`P=<strong>${P} kW</strong>, n=<strong>${n} min⁻¹</strong>. Drehmoment <em>M</em>?`, hint:'M = P/(2π·n/60)', correct:M, unit:'Nm', steps:`ω=2π·${n}/60=${fmtN(2*Math.PI*n/60)} rad/s\nM=${P*1000}/${fmtN(2*Math.PI*n/60)}=${fmtN(M)} Nm` }; },
  () => { const d1=rnd(50,200,10),d2=rnd(100,400,10),n1=rnd(500,2000,100); const n2=parseFloat((n1*d1/d2).toFixed(1)); return { cat:'⚙️ Getriebe', question:`Riemengetriebe: d₁=<strong>${d1} mm</strong>, d₂=<strong>${d2} mm</strong>, n₁=<strong>${n1} min⁻¹</strong>. Abtriebsdrehzahl <em>n₂</em>?`, hint:'n₂ = n₁·d₁/d₂', correct:n2, unit:'min⁻¹', steps:`n₂=${n1}·${d1}/${d2}=${fmtN(n2)} min⁻¹` }; },
  () => { const M1=rnd(10,100,5),i=rnd(3,15,0.5),eta=rnd(0.85,0.97,0.01); const M2=parseFloat((M1*i*eta).toFixed(1)); return { cat:'⚙️ Getriebe', question:`M₁=<strong>${M1} Nm</strong>, i=<strong>${fmtN(i)}</strong>, η=<strong>${fmtN(eta)}</strong>. Abtriebsdrehmoment <em>M₂</em>?`, hint:'M₂ = M₁·i·η', correct:M2, unit:'Nm', steps:`M₂=${M1}·${fmtN(i)}·${fmtN(eta)}=${fmtN(M2)} Nm` }; },
  () => { const n1=rnd(960,1500,60),z1=rndInt(15,40),z2=rndInt(40,100),z3=rndInt(15,35),z4=rndInt(50,120); const n4=parseFloat((n1*(z1/z2)*(z3/z4)).toFixed(2)); return { cat:'⚙️ Getriebe', question:`2-stufig: z₁=${z1}/z₂=${z2}, z₃=${z3}/z₄=${z4}. n₁=<strong>${n1} min⁻¹</strong>. Ausgangsdrehzahl <em>n₄</em>?`, hint:'n₄ = n₁·(z₁/z₂)·(z₃/z₄)', correct:n4, unit:'min⁻¹', tol:0.02, steps:`n₄=${n1}·(${z1}/${z2})·(${z3}/${z4})=${fmtN(n4)} min⁻¹` }; },
  () => { const d=rnd(100,500,10),n=rnd(100,1000,50); const v=parseFloat((Math.PI*d/1000*n/60).toFixed(2)); return { cat:'⚙️ Getriebe', question:`Scheibe: d=<strong>${d} mm</strong>, n=<strong>${n} min⁻¹</strong>. Umfangsgeschwindigkeit <em>v</em>?`, hint:'v = π·d·n/60 (d in m)', correct:v, unit:'m/s', steps:`v=π·${d/1000}·${n}/60=${fmtN(v)} m/s` }; },
  () => { const n1=rnd(1000,3000,100),n_trommel=rnd(20,80,5); const i_ges=parseFloat((n1/n_trommel).toFixed(2)); return { cat:'⚙️ Getriebe', question:`Motor n₁=<strong>${n1} min⁻¹</strong>, Mühle dreht <strong>${n_trommel} min⁻¹</strong>. Gesamtübersetzung <em>i<sub>ges</sub></em>?`, hint:'i_ges = n₁/n_Trommel', correct:i_ges, unit:'', tol:0.02, steps:`i_ges=${n1}/${n_trommel}=${fmtN(i_ges)}` }; },
  () => { const z1=rndInt(10,25),z2=rndInt(40,120); const i=parseFloat((z2/z1).toFixed(3)); return { cat:'⚙️ Getriebe', question:`Stirnrad: z₁=<strong>${z1}</strong>, z₂=<strong>${z2}</strong>. Übersetzung <em>i</em> (ins Langsame)?`, hint:'i = z₂/z₁', correct:i, unit:'', tol:0.02, steps:`i=z₂/z₁=${z2}/${z1}=${fmtN(i)}` }; }
,

  ()=>{const n1=rnd(500,3000,100),n2=rnd(50,400,10);const i=parseFloat((n1/n2).toFixed(3));return{cat:'⚙️ Getriebe',question:`n₁=<strong>${n1} min⁻¹</strong>, n₂=<strong>${n2} min⁻¹</strong>. Übersetzung <em>i</em>?`,hint:'i=n₁/n₂',correct:i,unit:'',tol:0.02,steps:`i=${n1}/${n2}=${fmtN(i)}`};},
  ()=>{const z1=rndInt(10,30),z2=rndInt(40,120),n1=rnd(500,2000,100);const n2=parseFloat((n1*z1/z2).toFixed(2));return{cat:'⚙️ Getriebe',question:`z₁=${z1}, z₂=${z2}, n₁=${n1} min⁻¹. Abtriebsdrehzahl <em>n₂</em>?`,hint:'n₂=n₁·z₁/z₂',correct:n2,unit:'min⁻¹',steps:`n₂=${n1}·${z1}/${z2}=${fmtN(n2)} min⁻¹`};},
  ()=>{const n1=rnd(1000,3000,100),i=rnd(3,20,0.5);const n2=parseFloat((n1/i).toFixed(2));return{cat:'⚙️ Getriebe',question:`n₁=<strong>${n1} min⁻¹</strong>, i=<strong>${fmtN(i)}</strong>. Abtriebsdrehzahl <em>n₂</em>?`,hint:'n₂=n₁/i',correct:n2,unit:'min⁻¹',steps:`n₂=${n1}/${fmtN(i)}=${fmtN(n2)} min⁻¹`};},
  ()=>{const P=rnd(1,30,1),n=rnd(500,3000,100);const M=parseFloat((P*1000/(2*Math.PI*n/60)).toFixed(1));return{cat:'⚙️ Getriebe',question:`P=<strong>${P} kW</strong>, n=<strong>${n} min⁻¹</strong>. Drehmoment <em>M</em>?`,hint:'M=P·60/(2π·n)',correct:M,unit:'Nm',steps:`M=${P*1000}/(2π·${n}/60)=${fmtN(M)} Nm`};},
  ()=>{const d1=rnd(50,200,10),d2=rnd(100,400,10),n1=rnd(500,2000,100);const n2=parseFloat((n1*d1/d2).toFixed(1));return{cat:'⚙️ Getriebe',question:`Riemen: d₁=<strong>${d1} mm</strong>, d₂=<strong>${d2} mm</strong>, n₁=<strong>${n1} min⁻¹</strong>. <em>n₂</em>?`,hint:'n₂=n₁·d₁/d₂',correct:n2,unit:'min⁻¹',steps:`n₂=${n1}·${d1}/${d2}=${fmtN(n2)} min⁻¹`};},
  ()=>{const M1=rnd(10,100,5),i=rnd(3,15,0.5),eta=rnd(0.85,0.97,0.01);const M2=parseFloat((M1*i*eta).toFixed(1));return{cat:'⚙️ Getriebe',question:`M₁=<strong>${M1} Nm</strong>, i=<strong>${fmtN(i)}</strong>, η=<strong>${fmtN(eta)}</strong>. Abtriebsmoment <em>M₂</em>?`,hint:'M₂=M₁·i·η',correct:M2,unit:'Nm',steps:`M₂=${M1}·${fmtN(i)}·${fmtN(eta)}=${fmtN(M2)} Nm`};},
  ()=>{const n1=rnd(960,1500,60),z1=rndInt(15,40),z2=rndInt(40,100),z3=rndInt(15,35),z4=rndInt(50,120);const n4=parseFloat((n1*(z1/z2)*(z3/z4)).toFixed(2));return{cat:'⚙️ Getriebe',question:`2-stufig: z₁/${z2}, z₃/${z4}, n₁=${n1} min⁻¹. Ausgangsdrehzahl <em>n₄</em>?`,hint:'n₄=n₁·(z₁/z₂)·(z₃/z₄)',correct:n4,unit:'min⁻¹',tol:0.02,steps:`n₄=${n1}·(${z1}/${z2})·(${z3}/${z4})=${fmtN(n4)} min⁻¹`};},
  ()=>{const d=rnd(100,500,10),n=rnd(100,1000,50);const v=parseFloat((Math.PI*d/1000*n/60).toFixed(2));return{cat:'⚙️ Getriebe',question:`Scheibe: d=<strong>${d} mm</strong>, n=<strong>${n} min⁻¹</strong>. Umfangsgeschwindigkeit <em>v</em>?`,hint:'v=π·d·n/60 (d in m)',correct:v,unit:'m/s',steps:`v=π·${d/1000}·${n}/60=${fmtN(v)} m/s`};},
  ()=>{const n1=rnd(1000,3000,100),nTr=rnd(20,100,5);const iges=parseFloat((n1/nTr).toFixed(2));return{cat:'⚙️ Getriebe',question:`Motor n₁=<strong>${n1} min⁻¹</strong>, Mühle dreht <strong>${nTr} min⁻¹</strong>. i<sub>ges</sub>?`,hint:'i_ges=n₁/n_Trommel',correct:iges,unit:'',tol:0.02,steps:`i_ges=${n1}/${nTr}=${fmtN(iges)}`};},
  ()=>{const z1=rndInt(10,25),z2=rndInt(40,120);const i=parseFloat((z2/z1).toFixed(3));return{cat:'⚙️ Getriebe',question:`Zahnradpaar: z₁=<strong>${z1}</strong>, z₂=<strong>${z2}</strong>. Übersetzung <em>i</em>?`,hint:'i=z₂/z₁',correct:i,unit:'',tol:0.02,steps:`i=${z2}/${z1}=${fmtN(i)}`};}

  ],
};
