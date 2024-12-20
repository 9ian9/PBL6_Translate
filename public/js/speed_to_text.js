const microphoneButton = document.getElementById('microphone-button');
const messageInputMic = document.getElementById('message-input');
// const convertText = document.getElementById('convert_text');

let isRecording = false;

const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = true;

recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    messageInputMic.style.display = 'block';
    messageInputMic.innerText = transcript;

    messageInputMic.value = transcript;
    updateSendButtonState();
});

recognition.addEventListener('end', () => {
    if (isRecording) recognition.start();
});

microphoneButton.addEventListener('click', () => {
    if (!isRecording) {
        recognition.start();
        isRecording = true;
        microphoneButton.innerHTML = '<i class="fas fa-microphone-slash"></i>';
    } else {
        recognition.stop();
        isRecording = false;
        microphoneButton.innerHTML = '<i class="fas fa-microphone"></i>';
    }
});

// function updateSendButtonState() {
//     const sendButton = document.getElementById('send-message');
//     sendButton.disabled = messageInput.value.trim() === '';
//     sendButton.style.backgroundColor = messageInput.value.trim() ? '#0069d9' : '#ccc';
// }