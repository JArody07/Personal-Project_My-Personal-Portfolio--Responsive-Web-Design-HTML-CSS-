document.getElementById('show-all-projects').addEventListener('click', function(e) {
    e.preventDefault();
    var hiddenCards = document.querySelectorAll('.hidden-project');
    hiddenCards.forEach(function(card) {
        card.style.display = 'flex';
        card.classList.add('revealed');
    });
    this.style.display = 'none';
    document.getElementById('show-less-projects').style.display = 'inline-block';
});

document.getElementById('show-less-projects').addEventListener('click', function(e) {
    e.preventDefault();
    var hiddenCards = document.querySelectorAll('.revealed');
    hiddenCards.forEach(function(card) {
        card.style.display = 'none';
        card.classList.remove('revealed');
        card.classList.add('hidden-project');
    });
    this.style.display = 'none';
    document.getElementById('show-all-projects').style.display = 'inline-block';
});
