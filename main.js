const items = Array.from(document.querySelectorAll(".item"));
let focusedIndex = 0;

function updateFocus() {
  items.forEach((item, i) => {
    item.classList.toggle("focused", i === focusedIndex);
  });
}

function openCurrent() {
  const selected = items[focusedIndex];
  const url = selected.getAttribute("data-url");

  if (!url) {
    alert("No URL set for this item.");
    return;
  }

  // On Cloud Phone this should open the URL in the browser / webview
  window.location.href = url;
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      focusedIndex = (focusedIndex - 1 + items.length) % items.length;
      updateFocus();
      event.preventDefault();
      break;

    case "ArrowDown":
      focusedIndex = (focusedIndex + 1) % items.length;
      updateFocus();
      event.preventDefault();
      break;

    case "Enter": // OK key
      openCurrent();
      event.preventDefault();
      break;

    case "ArrowRight": // Options soft key
      alert("Options: edit links in code for now.");
      event.preventDefault();
      break;

    case "Escape": // Treat as Exit / Back
      alert("Use phone Back key to exit.");
      break;

    default:
      break;
  }
});

// Initial focus state
updateFocus();
