document.addEventListener('DOMContentLoaded', function () {
    // Contagem de visualizações fake
    let watchingCount = 10;
    const watchingElement = document.getElementById('watchingCount');
    const intervalId = setInterval(() => {
        watchingCount++;
        watchingElement.innerText = watchingCount;
        if (watchingCount >= 750) {
            clearInterval(intervalId);
        }
    }, 200);

    // Timer para liberar o botão
    let timeLeft = 24 * 60; // 24 minutos em segundos
    const countdownElement = document.getElementById('countdown');
    const cloneButton = document.getElementById('cloneButton');

    function updateCountdown() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownElement.innerText = `${minutes}:${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            countdownElement.innerText = 'Oferta Liberada!';
            cloneButton.classList.remove('disabled');
            cloneButton.removeAttribute('disabled');
        }
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    // Timer final com redirecionamento
    let finalTimeLeft = 40 * 60; // 40 minutos em segundos
    const finalCountdownElement = document.getElementById('finalCountdown');

    function updateFinalCountdown() {
        let minutes = Math.floor(finalTimeLeft / 60);
        let seconds = finalTimeLeft % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Estilizando as dezenas
        const styledMinutes = `<span class="styled-number">${minutes[0]}</span>${minutes[1]}`;
        const styledSeconds = `<span class="styled-number">${seconds[0]}</span>${seconds[1]}`;

        finalCountdownElement.innerHTML = `${styledMinutes}:${styledSeconds}`;
        finalTimeLeft--;

        if (finalTimeLeft < 0) {
            clearInterval(finalTimerInterval);
            window.location.href = 'https://www.google.com'; // Substitua pelo link de checkout
        }
    }

    updateFinalCountdown();
    const finalTimerInterval = setInterval(updateFinalCountdown, 1000);

    // Notificações Fakes
    const notifications = [
        "🎉 Maria de São Paulo acabou de clonar uma página e faturar alto!",
        "🚀 João do Rio de Janeiro já está turbinando suas vendas!",
        "🔥 Ana de Minas Gerais não perdeu tempo e já está clonando!",
    ];
    const notificationContainer = document.querySelector('.notification-container');
    let notificationIndex = 0;

    function showNotification() {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = notifications[notificationIndex];
        notificationContainer.appendChild(notification);

        // Tocar o som da notificação
        const sound = new Audio('notification.mp3');
        sound.play();

        // Remover a notificação após alguns segundos
        setTimeout(() => {
            notification.remove();
        }, 5000);

        notificationIndex = (notificationIndex + 1) % notifications.length;
    }

    // Mostrar notificações a cada 10 segundos
    setInterval(showNotification, 10000);

    // Back Redirect
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function (event) {
        history.pushState(null, null, document.URL);
        window.location.href = 'https://www.google.com'; // Substitua pelo link de destino
    });
});
