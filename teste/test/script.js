document.getElementById('toggle-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('expanded');
});

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'active' de todos os links
        document.querySelectorAll('.sidebar ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');
    });
});
