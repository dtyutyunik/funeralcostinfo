// Builds public/embed/calculator.html, the self-contained embeddable
// funeral cost calculator widget, from data/estimates.json.
// Re-run after any model update: node scripts/build-embed.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataset = JSON.parse(readFileSync(join(root, 'data', 'estimates.json'), 'utf8'));

const SERVICE_ORDER = [
  'traditional_burial',
  'burial_with_vault',
  'cremation_with_service',
  'direct_cremation',
  'direct_burial',
  'green_burial',
];

const VINTAGE_LABEL =
  'NFDA 2023 medians adjusted to August 2026 dollars via BLS CPI for funeral expenses; 2024 BEA regional price parities';

function stateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const anchors = {};
for (const key of SERVICE_ORDER) {
  anchors[key] = { label: dataset.anchors[key].label, value: dataset.anchors[key].value };
}

const states = dataset.states.map((s) => {
  const e = {};
  for (const key of SERVICE_ORDER) {
    const est = s.estimates[key];
    e[key] = [est.point, est.low, est.high];
  }
  return { abbr: s.abbr, name: s.name, slug: stateSlug(s.name), e };
});

const payload = { services: SERVICE_ORDER, anchors, states, vintage: VINTAGE_LABEL };
// Escape "<" so the JSON can sit safely inside an inline script tag.
const payloadJson = JSON.stringify(payload).replace(/</g, '\\u003c');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Funeral Cost Calculator - FuneralCostInfo</title>
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #ffffff; color: #1c2733; font-size: 16px; line-height: 1.45;
  }
  .fci { max-width: 640px; margin: 0 auto; padding: 16px; border: 1px solid #d8dee4; border-radius: 10px; }
  .partner { font-size: 13px; color: #5a6a78; margin: 0 0 8px; }
  h1 { font-size: 19px; margin: 0 0 12px; font-weight: 700; }
  label { display: block; font-size: 13px; font-weight: 600; color: #40536a; margin: 12px 0 4px; }
  select {
    width: 100%; padding: 9px 10px; font-size: 16px; color: #1c2733;
    background: #fff; border: 1px solid #b9c4cf; border-radius: 6px;
  }
  .result { margin-top: 18px; padding: 14px; background: #f2f6fa; border-radius: 8px; text-align: center; }
  .point { font-size: 34px; font-weight: 800; color: #14508c; line-height: 1.1; }
  .range { font-size: 15px; color: #40536a; margin-top: 4px; }
  .national { font-size: 13px; color: #5a6a78; margin-top: 6px; }
  .detail { display: inline-block; margin-top: 14px; font-size: 15px; font-weight: 600; color: #14508c; }
  footer { margin-top: 16px; border-top: 1px solid #e3e8ed; padding-top: 10px; font-size: 12px; color: #5a6a78; }
  footer a { color: #14508c; }
  footer p { margin: 4px 0; }
</style>
</head>
<body>
<div class="fci" id="fci-root">
  <p class="partner" id="fci-partner" hidden></p>
  <h1>Funeral cost calculator</h1>
  <label for="fci-state">State</label>
  <select id="fci-state"></select>
  <label for="fci-service">Service type</label>
  <select id="fci-service"></select>
  <div class="result" aria-live="polite">
    <div class="point" id="fci-point"></div>
    <div class="range" id="fci-range"></div>
    <div class="national" id="fci-national"></div>
  </div>
  <a class="detail" id="fci-detail" href="https://funeralcostinfo.com/" target="_blank" rel="noopener"></a>
  <footer>
    <p>Cost estimates by <a href="https://funeralcostinfo.com/" target="_blank" rel="noopener">FuneralCostInfo</a></p>
    <p id="fci-vintage"></p>
    <p>Figures are modeled estimates for planning, not quotes. Actual funeral home prices vary.</p>
  </footer>
</div>
<script>
var DATA = ${payloadJson};
(function () {
  var params = new URLSearchParams(window.location.search);
  var stateSel = document.getElementById('fci-state');
  var serviceSel = document.getElementById('fci-service');

  function fmt(n) { return '$' + n.toLocaleString('en-US'); }

  DATA.states.forEach(function (s) {
    var opt = document.createElement('option');
    opt.value = s.abbr;
    opt.textContent = s.name;
    stateSel.appendChild(opt);
  });
  DATA.services.forEach(function (key) {
    var opt = document.createElement('option');
    opt.value = key;
    opt.textContent = DATA.anchors[key].label;
    serviceSel.appendChild(opt);
  });

  // Default state: ?state= accepts an abbreviation (TX) or a slug (texas).
  var wanted = (params.get('state') || '').toLowerCase();
  var initial = DATA.states.filter(function (s) { return s.abbr === 'CA'; })[0];
  DATA.states.forEach(function (s) {
    if (s.abbr.toLowerCase() === wanted || s.slug === wanted) initial = s;
  });
  stateSel.value = initial.abbr;

  var wantedService = params.get('service') || '';
  if (DATA.services.indexOf(wantedService) !== -1) serviceSel.value = wantedService;

  var partner = params.get('partner');
  if (partner) {
    var p = document.getElementById('fci-partner');
    p.textContent = 'Provided with ' + partner;
    p.hidden = false;
  }

  document.getElementById('fci-vintage').textContent = DATA.vintage;

  function currentState() {
    return DATA.states.filter(function (s) { return s.abbr === stateSel.value; })[0];
  }

  function postHeight() {
    var h = Math.ceil(document.getElementById('fci-root').getBoundingClientRect().height) + 2;
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'fci-embed-height', height: h }, '*');
    }
  }

  function render() {
    var s = currentState();
    var key = serviceSel.value;
    var est = s.e[key];
    document.getElementById('fci-point').textContent = fmt(est[0]);
    document.getElementById('fci-range').textContent =
      'Typical range in ' + s.name + ': ' + fmt(est[1]) + ' to ' + fmt(est[2]);
    document.getElementById('fci-national').textContent =
      'National average: ' + fmt(DATA.anchors[key].value);
    var link = document.getElementById('fci-detail');
    link.href = 'https://funeralcostinfo.com/funeral-costs/' + s.slug + '/';
    link.textContent = 'See the full ' + s.name + ' funeral cost breakdown';
    postHeight();
  }

  stateSel.addEventListener('change', render);
  serviceSel.addEventListener('change', render);
  window.addEventListener('resize', postHeight);
  window.addEventListener('load', postHeight);
  render();
})();
</script>
</body>
</html>
`;

const outDir = join(root, 'public', 'embed');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'calculator.html'), html);
console.log(`build-embed: wrote public/embed/calculator.html (${states.length} states, ${html.length} bytes)`);
