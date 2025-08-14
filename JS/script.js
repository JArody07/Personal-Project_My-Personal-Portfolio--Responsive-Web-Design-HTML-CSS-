document.getElementById('show-all-projects').addEventListener('click', function(e) {
    e.preventDefault();
    var hidden = document.querySelectorAll('.hidden-project');
    hidden.forEach(function(card) {
        card.style.display = 'flex';
        card.classList.remove('hidden-project');
        card.classList.add('revealed');
    });
    this.style.display = 'none';
});