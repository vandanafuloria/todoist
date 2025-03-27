export function selectedPriority() {
  const radios = document.getElementsByName("priority");

  for (let el of radios) {
    if (el.checked) return el.value;
  }
  return "no Priority set";
}
