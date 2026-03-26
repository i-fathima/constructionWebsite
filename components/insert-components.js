async function includeHTML(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`Failed to load ${url}`);
        el.innerHTML = await resp.text();
    } catch (err) {
        console.error(err);
    }
}

includeHTML('navbar-placeholder', 'components/navbar.html');
includeHTML('footer-placeholder', 'components/footer.html');
