/*
  put a wrapper around each table to allow scrolling.
*/

{
  const onLoad = () => {
    // for each top-level table
    const tables = document.querySelectorAll("table:not(table table)");
    for (const table of tables) {
      // create wrapper with scroll
      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll";
      // let the wrapper scroll on its own, and announce it to screen readers
      wrapper.setAttribute("tabindex", "0");
      wrapper.setAttribute("role", "region");
      wrapper.setAttribute("aria-label", "table, scrollable");

      // undo css force-text-wrap
      table.style.overflowWrap = "normal";

      // add wrapper around table
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  };

  // after page loads
  window.addEventListener("load", onLoad);
}
