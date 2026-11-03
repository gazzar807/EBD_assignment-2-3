// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 *
 * @param {Array<{name: string, category: string}>} list
 * @returns {void}
 */
export function renderItems(list) {
  const target = document.querySelector("#list");
  for (const old of target.querySelectorAll("li")) {
    old.remove();
  }

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("article-card");
    li.textContent = `${item.name} (${item.category})`;
    target.append(li);
  }
}

/**
 * The items over 100 EGP.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.price > 100);
}

/**
 * Draws every item, then filters the list when the button is clicked.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);
  document.querySelector("#run-filter").addEventListener("click", () => {
    renderItems(matching());
  });
}
