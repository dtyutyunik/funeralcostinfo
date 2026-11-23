// FuneralCostInfo calculator embed loader.
// Paste this script once on a page, then add one placeholder per calculator:
//   <div class="fci-calculator" data-state="TX"></div>
// Optional attributes: data-partner="Your Organization", data-service="direct_cremation".
(function () {
  var ORIGIN = 'https://funeralcostinfo.com';
  var frames = [];

  function buildFrame(el) {
    var state = el.getAttribute('data-state') || 'CA';
    var partner = el.getAttribute('data-partner') || '';
    var service = el.getAttribute('data-service') || '';
    var qs = 'state=' + encodeURIComponent(state);
    if (partner) qs += '&partner=' + encodeURIComponent(partner);
    if (service) qs += '&service=' + encodeURIComponent(service);
    var iframe = document.createElement('iframe');
    iframe.src = ORIGIN + '/embed/calculator.html?' + qs;
    iframe.title = 'Funeral cost calculator by FuneralCostInfo';
    iframe.setAttribute('loading', 'lazy');
    iframe.style.width = '100%';
    iframe.style.maxWidth = '680px';
    iframe.style.border = '0';
    iframe.style.height = '460px';
    frames.push(iframe);
    el.parentNode.replaceChild(iframe, el);
  }

  function init() {
    var placeholders = document.querySelectorAll('.fci-calculator');
    for (var i = 0; i < placeholders.length; i++) buildFrame(placeholders[i]);
  }

  window.addEventListener('message', function (event) {
    if (event.origin !== ORIGIN) return;
    if (!event.data || event.data.type !== 'fci-embed-height') return;
    for (var i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === event.source) {
        frames[i].style.height = event.data.height + 'px';
      }
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
