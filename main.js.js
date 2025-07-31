// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    // Модальное окно для записи
    const appointmentBtn = document.querySelector('.appointment-btn');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Запись на консультацию</h2>
            <form id="appointmentForm">
                <!-- Форма записи -->
            </form>
        </div>
    `;

    appointmentBtn.addEventListener('click', function() {
        document.body.appendChild(modal);
        modal.style.display = 'block';
    });

    modal.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
});