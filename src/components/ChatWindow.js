import React, { useState, useRef, useEffect } from 'react';
import './ChatWindow.css';

function ChatWindow({ member, onSendMessage }) {
  const [messages, setMessages] = useState([
    { text: 'Hello, how are you?', sender: 'self', timestamp: new Date().toLocaleString() },
    { text: 'I am good, thanks for asking!', sender: 'other', timestamp: new Date().toLocaleString() },
    { text: 'What are you up to?', sender: 'self', timestamp: new Date().toLocaleString() },
    { text: 'Just working on some projects.', sender: 'other', timestamp: new Date().toLocaleString() },
    { text: 'Sounds interesting. Let\'s catch up soon!', sender: 'self', timestamp: new Date().toLocaleString() },
  ]);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'self', timestamp: new Date().toLocaleString() }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-header">{member}</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === 'self' ? 'sent' : 'received'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage} className="send-button">
          <i className="fa fa-paper-plane"></i> {/* Send Icon */}
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
