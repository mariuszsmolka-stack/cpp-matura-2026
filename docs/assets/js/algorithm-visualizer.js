(() => {
  "use strict";

  function buildSteps(input) {
    const values = [...input];
    const steps = [];
    let comparison = 0;
    function save(kind, pass, sortedFrom, description, left = -1, swapped = false, compared = []) {
      steps.push(Object.freeze({
        kind, values: Object.freeze([...values]), left,
        right: left < 0 ? -1 : left + 1, swapped, pass, comparison,
        sortedFrom, description, compared: Object.freeze([...compared])
      }));
    }
    save("start", 0, values.length, "Dane początkowe. Rozpocznij pierwsze przejście.");
    for (let pass = 1; pass < values.length; pass += 1) {
      save("pass", pass, values.length - pass + 1,
        `Początek przejścia ${pass}. Zaczynamy od indeksów 0 i 1.`);
      for (let left = 0; left < values.length - pass; left += 1) {
        const compared = [values[left], values[left + 1]];
        const swapped = compared[0] > compared[1];
        if (swapped) {
          const temporary = values[left];
          values[left] = values[left + 1];
          values[left + 1] = temporary;
        }
        comparison += 1;
        save("comparison", pass, values.length - pass + 1,
          swapped
            ? `${compared[0]} > ${compared[1]}: zamiana. Komórki pokazują stan po zamianie.`
            : `${compared[0]} ≤ ${compared[1]}: bez zamiany. Kolejność tej pary jest poprawna.`,
          left, swapped, compared);
      }
      save("pass-end", pass, values.length - pass,
        `Koniec przejścia ${pass}. Element od indeksu ${values.length - pass} i wszystkie na prawo są na właściwych miejscach.`);
    }
    save("end", values.length - 1, 0, "Sortowanie zakończone. Wszystkie liczby są uporządkowane rosnąco.");
    return Object.freeze(steps);
  }

  function parseInput(text) {
    if (!text.trim()) throw new Error("Wpisz od 2 do 10 liczb całkowitych oddzielonych przecinkami.");
    const tokens = text.split(",").map((token) => token.trim());
    if (tokens.some((token) => token === "")) throw new Error("Między przecinkami brakuje liczby. Usuń też przecinek z początku lub końca.");
    if (tokens.length < 2 || tokens.length > 10) throw new Error("Podaj od 2 do 10 liczb.");
    if (tokens.some((token) => !/^[+-]?\d+$/.test(token))) throw new Error("Użyj tylko liczb całkowitych, np. -2, 7, 0. Oddziel je przecinkami.");
    const values = tokens.map(Number);
    if (values.some((value) => !Number.isSafeInteger(value) || value < -99 || value > 99)) {
      throw new Error("Każda liczba musi należeć do zakresu od -99 do 99.");
    }
    return values;
  }

  function init(root) {
    const get = (name) => root.querySelector(`[data-alg-viz="${name}"]`);
    const input = get("input");
    const speed = get("speed");
    const buttons = Object.fromEntries(["previous", "next", "play", "pause", "reset", "load"].map((name) => [name, get(name)]));
    let steps = buildSteps([7, 3, 5, 2, 6]);
    let position = 0;
    let timer = null;

    function render() {
      const step = steps[position];
      const cells = step.values.map((value, index) => {
        const cell = document.createElement("li");
        cell.className = "alg-viz-cell";
        const labels = [];
        if (index === step.left || index === step.right) {
          cell.classList.add(step.swapped ? "alg-viz-swapped" : "alg-viz-compared");
          labels.push(step.swapped ? "zamiana" : "porównanie");
        }
        if (index >= step.sortedFrom) {
          cell.classList.add("alg-viz-sorted");
          labels.push("gotowe");
        }
        for (const [className, text] of [
          ["alg-viz-index", `indeks ${index}`],
          ["alg-viz-value", String(value)],
          ["alg-viz-marker", labels.join(", ") || "czeka"]
        ]) {
          const part = document.createElement("span");
          part.className = className;
          part.textContent = text;
          cell.append(part);
        }
        return cell;
      });
      get("cells").replaceChildren(...cells);
      get("progress").textContent = `Krok ${position + 1} z ${steps.length}. Przejście: ${step.pass} z ${step.values.length - 1}. Wykonane porównania: ${step.comparison}.`;
      get("pair").textContent = step.left < 0 ? "Porównywana para: —. Zamiana: —."
        : `Porównanie nr ${step.comparison}: indeksy ${step.left} i ${step.right}; wartości przed porównaniem: ${step.compared.join(" i ")}. Zamiana: ${step.swapped ? "tak" : "nie"}.`;
      get("array").textContent = `Aktualny zbiór: ${step.values.join(", ")}.`;
      get("sorted").textContent = step.sortedFrom === step.values.length ? "Gotowa część: jeszcze brak."
        : `Gotowa część: indeksy od ${step.sortedFrom} do ${step.values.length - 1}.`;
      get("description").textContent = step.description;
      get("playback").textContent = timer === null ? "Odtwarzanie zatrzymane." : "Odtwarzanie w toku.";
      buttons.previous.disabled = position === 0;
      buttons.next.disabled = position === steps.length - 1;
      buttons.play.disabled = timer !== null || position === steps.length - 1;
      buttons.pause.disabled = timer === null;
      buttons.reset.disabled = position === 0 && timer === null;
    }

    function stop() {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
    }
    function play() {
      if (timer !== null || position === steps.length - 1) return;
      timer = window.setInterval(() => {
        position += 1;
        if (position === steps.length - 1) stop();
        render();
      }, Number(speed.value));
      render();
    }
    buttons.previous.addEventListener("click", () => {
      stop();
      position = Math.max(0, position - 1);
      render();
    });
    buttons.next.addEventListener("click", () => {
      stop();
      position = Math.min(steps.length - 1, position + 1);
      render();
    });
    buttons.play.addEventListener("click", play);
    buttons.pause.addEventListener("click", () => { stop(); render(); });
    buttons.reset.addEventListener("click", () => { stop(); position = 0; render(); });
    speed.addEventListener("change", () => {
      if (timer !== null) { stop(); play(); }
    });
    buttons.load.addEventListener("click", () => {
      stop();
      try {
        const values = parseInput(input.value);
        steps = buildSteps(values);
        position = 0;
        input.removeAttribute("aria-invalid");
        get("error").textContent = "";
      } catch (error) {
        input.setAttribute("aria-invalid", "true");
        get("error").textContent = error.message;
      }
      render();
    });
    window.addEventListener("pagehide", () => { stop(); render(); });
    render();
    root.hidden = false;
    const fallback = document.getElementById("alg-viz-fallback");
    if (fallback) fallback.hidden = true;
  }

  document.querySelectorAll("[data-alg-viz-root]").forEach(init);
})();
