/*
  manages light/dark mode.
*/

{
  const KEY = "dark-mode";

  const systemPrefersDark = () =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

  // immediately load saved mode before page renders. with no saved choice,
  // follow the operating system instead of always starting light.
  const saved = window.localStorage.getItem(KEY);
  document.documentElement.dataset.dark =
    saved ?? (systemPrefersDark() ? "true" : "false");

  const onLoad = () => {
    // update toggle button to match loaded mode
    const toggle = document.querySelector(".dark-toggle");
    if (toggle) toggle.checked = document.documentElement.dataset.dark === "true";
  };

  // follow the system while the visitor has not made an explicit choice
  window
    .matchMedia?.("(prefers-color-scheme: dark)")
    .addEventListener?.("change", (event) => {
      if (window.localStorage.getItem(KEY) !== null) return;
      document.documentElement.dataset.dark = event.matches ? "true" : "false";
      onLoad();
    });

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem(KEY, value);
  };
}
