/* Website preview links. The project screenshots stay in the HTML for reliability.
   Existing cards have real working <a> tags, including with JavaScript disabled.
   Future web cards may use data-demo-url to set or correct the link.
*/
document.querySelectorAll('.web-version-card[data-demo-url]').forEach((card) => {
    const raw = (card.dataset.demoUrl || '').trim();
    if (!raw) return;
    let url;
    try { url = new URL(raw); } catch (_) { return; }
    if (!['http:', 'https:'].includes(url.protocol)) return;

    const action = card.querySelector('.web-preview-action');
    if (!action) return;

    if (action.tagName === 'A') {
        action.href = url.href;
        action.target = '_blank';
        action.rel = 'noopener noreferrer';
        action.classList.add('is-live');
    } else {
        const link = document.createElement('a');
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'web-preview-action is-live';
        link.textContent = 'Click Here to Open Website';
        action.replaceWith(link);
    }
});
