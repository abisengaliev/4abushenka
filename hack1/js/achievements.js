// achievements.js

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

// Отображение достижений
const user = JSON.parse(localStorage.getItem('user'));
const achievementsList = document.getElementById('achievementsList');

const achievements = [
    { id: 1, name: 'Первый шаг', description: 'Завершите первый курс.', points: 10 },
    { id: 2, name: 'Пятидневка', description: 'Входите в систему 5 дней подряд.', points: 20 },
    { id: 3, name: 'Мастер', description: 'Наберите 100 баллов.', points: 50 },
];

// Проверяем, есть ли у пользователя достижения
if (!user.achievements) {
    user.achievements = [];
    localStorage.setItem('user', JSON.stringify(user));
}

function displayAchievements() {
    achievementsList.innerHTML = '';
    achievements.forEach(achievement => {
        const earned = user.achievements.includes(achievement.id);
        const achDiv = document.createElement('div');
        achDiv.classList.add('achievement');
        achDiv.innerHTML = `
            <h3>${achievement.name} ${earned ? '✅' : ''}</h3>
            <p>${achievement.description}</p>
            <p>Баллы: ${achievement.points}</p>
        `;
        achievementsList.appendChild(achDiv);
    });
}

displayAchievements();