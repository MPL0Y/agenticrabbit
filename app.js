const btn = document.getElementById('heart');
const out = document.getElementById('hearts');
const replay = (el) => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; };
const show = (r) => {
    if (!r.ok) throw new Error(r.status);
    return r.json().then((d) => {
        if (out.textContent == d.n) return;
        out.textContent = d.n;
        replay(out);
    });
};
const load = () => fetch('/api/hearts').then(show).catch(() => {});

load();
setInterval(() => document.hidden || load(), 1000);
document.addEventListener('visibilitychange', () => document.hidden || load());

btn.onclick = () => {
    btn.classList.add('on');
    replay(btn.querySelector('svg'));
    fetch('/api/hearts', { method: 'POST' }).then(show).catch(() => btn.classList.remove('on'));
};
