// Gallery lightbox, service preselect, quote form states, footer year. No libraries.

// Gallery: open each photo link in the native <dialog>. Without JS the link opens the full image.
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('.lb-cap');
document.querySelector('.gallery').addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link || !lb.showModal) return;
  e.preventDefault();
  const img = link.querySelector('img');
  const label = link.querySelector('b');
  lbImg.src = link.href;
  lbImg.alt = img.alt;
  lbCap.textContent = link.closest('figure').querySelector('figcaption').innerText.replace('\n', ' · ') + (label ? ' (' + label.textContent + ')' : '');
  lb.showModal();
});
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

// "Quote this job" links pick the matching service in the form.
const form = document.getElementById('quote-form');
document.querySelectorAll('[data-service]').forEach((a) => a.addEventListener('click', () => {
  form.service.value = a.dataset.service;
}));

// Quote form: error, sending and success states.
const fields = ['name', 'phone', 'address', 'service'];
const check = (name) => {
  const el = form[name];
  const ok = el.checkValidity() && el.value.trim() !== '';
  el.closest('.field').classList.toggle('invalid', !ok);
  el.setAttribute('aria-invalid', !ok);
  document.getElementById('e-' + name).hidden = ok;
  return ok;
};
fields.forEach((n) => form[n].addEventListener('change', () => check(n)));

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const bad = fields.filter((n) => !check(n));
  if (bad.length) return form[bad[0]].focus();
  if (form.website.value) return; // spam trap filled: drop silently

  const btn = form.querySelector('.btn-submit');
  const errBox = form.querySelector('.form-error');
  errBox.hidden = true;
  btn.setAttribute('aria-busy', 'true');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    if (form.getAttribute('action')) {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      if (!res.ok) throw new Error(res.status);
    } else {
      await new Promise((r) => setTimeout(r, 900)); // No handler yet: preview the flow.
    }
    form.hidden = true;
    const done = document.querySelector('.form-success');
    done.hidden = false;
    done.focus();
  } catch {
    errBox.hidden = false;
    btn.removeAttribute('aria-busy');
    btn.disabled = false;
    btn.textContent = 'Request a quote';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
