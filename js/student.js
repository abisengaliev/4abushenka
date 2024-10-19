// student.js

// Обработка бокового меню
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Функция выхода
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Отображение приветственного сообщения
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
    document.getElementById('welcomeMessage').textContent = `Добро пожаловать, ${user.username}!`;
} else {
    window.location.href = 'index.html'; // Если нет пользователя, перенаправляем на регистрацию
}