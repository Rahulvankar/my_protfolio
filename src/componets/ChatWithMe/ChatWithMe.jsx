import React, { useState } from 'react';
import  './chat.css';
const ChatWithMe = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I assist you today? I can answer questions about my living place, education, experience, and skills.' }
    ]);
    const [input, setInput] = useState('');
    const [askRedirect, setAskRedirect] = useState(false);

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);

        // Auto-response logic for basic questions
        if (input.toLowerCase().includes('place') || input.toLowerCase().includes('live')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I live in Ahemdabad.' }]);
        } else if (input.toLowerCase().includes('education')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I have a degree in Computer Science and Engineering.' }]);
        } else if (input.toLowerCase().includes('experience')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I have 2 years of experience as a Front-End Developer.' }]);
        } else if (input.toLowerCase().includes('skills')) {
            setMessages([...newMessages, { sender: 'bot', text: 'My skills include React, Vue, Nuxt, JavaScript, and web design.' }]);
        } else {
            setMessages([...newMessages, { sender: 'bot', text: 'I am not sure about that. Would you like to contact me on WhatsApp?' }]);
            setAskRedirect(true);
        }

        setInput('');
    };

    const redirectToWhatsApp = () => {
        const whatsappURL = `https://wa.me/8140588648?text=Hi%20Rahul,%20I%20need%20your%20help!`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div>
            <button onClick={() => setChatOpen(!chatOpen)} className="chat-button">
                Let's Chat 💬
            </button>

            {chatOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h4>Chat with Me</h4>
                        <button onClick={() => setChatOpen(false)}>Close</button>
                    </div>
                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        {askRedirect && (
                            <div className="redirect-options">
                                <p>Would you like to contact me on WhatsApp?</p>
                                <button onClick={redirectToWhatsApp}>Yes</button>
                                <button onClick={() => setAskRedirect(false)}>No</button>
                            </div>
                        )}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWithMe;
