document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const buttons = {
        home: document.getElementById('home-btn'),
        register: document.getElementById('register-btn'),
        dataEntry: document.getElementById('data-entry-btn'),
        viewData: document.getElementById('view-data-btn'),
    };

    Object.keys(buttons).forEach(key => {
        buttons[key].addEventListener('click', () => {
            sections.forEach(section => section.classList.add('hidden'));
            document.getElementById(key).classList.remove('hidden');
        });
    });

    const wasteForm = document.getElementById('waste-form');
    wasteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Atık başarıyla kaydedildi!');
    });

    const viewDataForm = document.getElementById('view-data-form');
    viewDataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Verileriniz görünüyor!');
    });
});
