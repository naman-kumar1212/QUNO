document.addEventListener('DOMContentLoaded', () => {
    const chatbotBadge = document.getElementById('chatbotBadge');
    const chatbot = document.getElementById('chatbot');
    const closeChatbotButton = document.querySelector('.close-chatbot');
    let chatbotInitialized = false;

    function initializeChatbot() {
        const sendButton = document.getElementById('send-button');
        const userInput = document.getElementById('user-input');
        const chatMessages = document.getElementById('chat-messages');
        const typingIndicator = document.createElement('div');

        // Add Typing Indicator
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.textContent = 'Bot is typing...';
        typingIndicator.style.display = 'none';
        chatMessages.appendChild(typingIndicator);

        // Function to toggle chatbot visibility
        function toggleChatbot() {
            const isVisible = chatbot.style.display === 'block';
            chatbot.style.display = isVisible ? 'none' : 'block';
            chatbot.setAttribute('aria-hidden', isVisible);
            if (!isVisible) {
                userInput.focus();
            }
        }

        // Event listeners for opening and closing the chatbot
        chatbotBadge.addEventListener('click', toggleChatbot);
        closeChatbotButton.addEventListener('click', toggleChatbot);

        // Function to add messages to the chat
        function addMessage(content, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            messageElement.innerHTML = `<span>${content}</span>`;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message
        }

        // Simulated bot response function
        function getBotResponse(message) {
            const responses = {
                "hi": "Hi there! How can I assist you with your sports needs today?",
                "book": "Sure! I can help you book a sports facility. Which sport are you interested in?",
                "thanks": "You're welcome! If you have any more questions, feel free to ask.",
                "about": "Our website offers a wide range of sports facilities and services. You can book courts, join events, and much more!",
                "services": "We provide booking services for various sports facilities, including tennis, basketball, and swimming. Check out our services page for more details.",
                "contact": "You can contact us via the contact form on our website or email us at support@example.com.",
                "help": "I'm here to help! You can ask me about booking facilities, our services, or any other questions you have about our website.",
                "football": "Football is a thrilling sport! Would you like to know more about local clubs or upcoming matches?",
                "basketball": "Basketball is exciting! Are you interested in joining a team or finding a court near you?",
                "volleyball": "Volleyball is a great team sport! Would you like to learn about local leagues or training sessions?",
                "tennis": "Tennis is a fantastic sport! Are you looking for a partner or a place to play?",
                "badminton": "Badminton is fast-paced and fun! Would you like to find a local club or book a court?",
                "table tennis": "Table Tennis is a great indoor sport! Are you interested in tournaments or practice sessions?",
                "8 ball pool": "8 Ball Pool is a classic game! Would you like to join a league or find a local pool hall?",
                "foosball": "Foosball is fun and fast! Are you looking for a place to play or a tournament to join?",
                "carrom": "Carrom is a strategic game! Would you like to learn more about the rules or find a club?",
                "chess": "Chess is a game of strategy! Are you interested in joining a chess club or participating in a tournament?"
            };

            const lowerCaseMessage = message.toLowerCase();
            return responses[lowerCaseMessage] || "I'm sorry, I didn't understand that. Could you please rephrase?";
        }

        // Function to handle sending messages
        function handleSendMessage() {
            const message = userInput.value.trim();
            if (message) {
                addMessage(message, 'user');
                userInput.value = '';
                showTypingIndicator();

                // Simulate bot processing time
                setTimeout(() => {
                    const botResponse = getBotResponse(message);
                    addMessage(botResponse, 'bot');
                    hideTypingIndicator();
                }, 1000);
            }
        }

        // Typing Indicator Controls
        function showTypingIndicator() {
            typingIndicator.style.display = 'block';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTypingIndicator() {
            typingIndicator.style.display = 'none';
        }

        // Event listeners for sending messages
        sendButton.addEventListener('click', handleSendMessage);

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });

        // Initialize chatbot with a welcome message
        addMessage("Hello! How can I assist you with sports today?", 'bot');
    }

    // Initialize the chatbot only when the badge is clicked for the first time
    chatbotBadge.addEventListener('click', () => {
        if (!chatbotInitialized) {
            initializeChatbot();
            chatbotInitialized = true;
        }
    });
});
