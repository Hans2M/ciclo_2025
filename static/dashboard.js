const socket = io();

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        socket.send(message);
        chatInput.value = '';
    }
}

socket.on('message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = msg;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});