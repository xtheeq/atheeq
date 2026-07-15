import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <h1>atheeq</h1>
    <div class="links">
      <a href="https://github.com/xtheeq" aria-label="GitHub">
        <svg width="22" height="22"><use href="/icons.svg#github-icon"/></svg>
      </a>
      <a href="https://x.com/xtheeq" aria-label="X">
        <svg width="22" height="22"><use href="/icons.svg#x-icon"/></svg>
      </a>
    </div>
  </main>
`;
