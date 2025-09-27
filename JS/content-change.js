// change-content.js
function showCategory(category) {
    const sections = document.querySelectorAll('.category-section');
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById(category);
    if (target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth' });
    }
}
//change-color.js
function toggleBackground(color) {
    document.body.style.backgroundColor = color;
}

function toggleTitleColor(id, color) {
    const title = document.getElementById(id);
    if (title) {
        title.style.color = color;
    }
}
