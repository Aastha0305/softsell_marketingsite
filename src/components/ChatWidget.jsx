import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';

export default function ChatWidget() {
  // State management
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: 'Hello! How can I help you today?', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Toggle functions
  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message to OpenAI via server.cjs
  const sendMessageToOpenAI = async (userMessage) => {
    try {
      setIsLoading(true);
      
      // Make API call to your server endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Add bot response from OpenAI
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: data.reply || "Sorry, I couldn't process your request at this time.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      // Add error message
      const errorMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: "I'm having trouble connecting right now. Please try again later.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle message submission
  const handleSubmit = () => {
    if (!inputValue.trim() || isLoading) return;
    
    // Create user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Add user message to chat
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Clear input field
    setInputValue('');
    
    // Send to OpenAI via server
    sendMessageToOpenAI(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button (only shown when chat is closed) */}
      {!isOpen && (
        <button 
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              {isMinimized ? (
                <button onClick={toggleMinimize} className="hover:bg-blue-700 p-1 rounded">
                  <Maximize2 size={16} />
                </button>
              ) : (
                <button onClick={toggleMinimize} className="hover:bg-blue-700 p-1 rounded">
                  <Minimize2 size={16} />
                </button>
              )}
              <button onClick={toggleChat} className="hover:bg-blue-700 p-1 rounded">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat content (hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Messages area */}
              <div className="p-4 overflow-y-auto h-64 flex flex-col space-y-3">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="border-t p-3 flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />
                <button 
                  onClick={handleSubmit}
                  disabled={!inputValue.trim() || isLoading}
                  className={`${
                    !inputValue.trim() || isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white px-4 rounded-r-lg`}
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}