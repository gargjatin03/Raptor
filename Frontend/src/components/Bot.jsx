import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

function Bot({ user, handleSwitchUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botResponses = {
    "hello": "Hello! How may I help you?",
    "hi": "Hi there 👋",
    "bye": "Goodbye 👋",
    "hello": "Hello! How may I help you?",
    "hi": "Hi there 👋 What can I do for you?",
    "bye": "Goodbye 👋",
    "goodbye": "See you soon!",
    "how are you": "I'm doing great! 😄",
    "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts 😂",
    "make me laugh": "Why did the computer go to the doctor? Because it caught a virus 🦠",
    "what time is it": "Sorry, I don’t have a watch ⏰ yet.",
    "whats the weather": "I can’t check live weather yet 🌦️, but you can look outside 😉",
    "your name": "I'm Raptor 🤖, your chatbot assistant.",
    "who created you": "I was created by Jatin 🚀",
    "thank you": "You're welcome!",
    "thanks": "No problem 😊",
    "good morning": "Good morning! Have a great day ☀️",
    "good night": "Good night! Sleep well 🌙",
    "i am bored": "Try coding, reading, or taking a walk! 😄",
    "hello there": "General Kenobi! 👋",
    "hi there": "Hey! How’s it going?",
    "how is it going": "Pretty good, thanks for asking!",
    "whats up": "Not much, just chatting with you!",
    "good afternoon": "Good afternoon! Hope your day is going well 🌞",
    "good evening": "Good evening! How was your day?",
    "fun fact": "Did you know that honey never spoils?",
    "motivation": "Keep going! Every step counts 💪",
    "advice": "Always be curious and never stop learning!",
    "positive quote": "The best way to predict the future is to create it.",
    "quote": "Believe you can and you're halfway there.",
    "inspire me": "Your limitation—it’s only your imagination.",
    "greetings": "Greetings! How can I assist you today?",
    "hi bot": "Hi! I'm here to chat 😄",
    "hello bot": "Hello! Ready to talk?",
    "tell me a fact": "Octopuses have three hearts!",
    "interesting fact": "Bananas are berries, but strawberries aren't.",
    "random fact": "Sharks existed before trees.",
    "funny fact": "Sloths can hold their breath longer than dolphins.",
    "joke": "Why did the scarecrow win an award? He was outstanding in his field!",
    "riddle": "I speak without a mouth and hear without ears. What am I? A voice.",
    "adventure tip": "Always carry water and a map!",
    "tech tip": "Comment your code, future you will thank you!",
    "study tip": "Use Pomodoro technique for better focus ⏲️",
    "life advice": "Be kind to everyone, including yourself.",
    "morning routine": "Drink water, stretch, and set your goals for the day.",
    "healthy habit": "Walk 30 minutes a day for a healthier heart.",
    "fun hobby": "Try drawing, writing, or gardening!",
    "travel tip": "Always keep a backup of your passport and tickets.",
    "productivity tip": "Focus on one task at a time.",
    "coffee time": "A cup of coffee sounds perfect ☕",
    "tea time": "Enjoy your tea 🍵",
    "coding help": "Remember to read error messages carefully 😅",
    "learn coding": "Start with small projects and practice daily.",
    "music suggestion": "Listen to something that makes you happy!",
    "movie suggestion": "Try a comedy movie to lighten your mood 🎬",
    "book suggestion": "Read 'Atomic Habits' by James Clear!",
    "daily tip": "Smile more today, it boosts your mood!",
    "fun activity": "Play a game or do a puzzle!",
    "exercise tip": "Stretch for 5 minutes every hour.",
    "self care tip": "Take a short break and relax your mind.",
    "relaxation tip": "Try deep breathing for a few minutes.",
    "mental health tip": "Write down what you are grateful for.",
    "challenge": "Try learning one new thing today!",
    "good luck": "Good luck! You got this 💪",
    "encouragement": "Believe in yourself and keep moving forward!",
    "cheer up": "Everything will be okay 😊",
    "positivity": "Surround yourself with good vibes 🌈",
    "happy thought": "Think about your happiest memory today!",
    "joke time": "Why don’t programmers like nature? Too many bugs! 🐛",
    "laugh": "Haha 😆 hope that made you laugh!",
    "fun": "Fun is essential! Dance or sing a little!",
    "gaming": "Gaming is fun! What’s your favorite game?",
    "tech news": "AI and robotics are evolving fast!",
    "weather tip": "Carry an umbrella if clouds are around ☔",
    "time to relax": "Take a short break, you deserve it!",
    "motivate me": "Start small, dream big, act now!",
    "daily motivation": "Each day is a fresh start 🌅",
    "reminder": "Don’t forget to drink water regularly 💧",
    "curious fact": "Wombat poop is cube-shaped!",
    "animal fact": "Dolphins sleep with one eye open.",
    "space fact": "Venus spins backwards in our solar system.",
    "science fact": "Water can boil and freeze at the same time!",
    "math tip": "Double-check your calculations always.",
    "history fact": "The Great Wall of China is over 13,000 miles long.",
    "geography fact": "Mount Everest is the tallest mountain on Earth.",
    "language tip": "Practice 20 new words daily for fluency.",
    "fun exercise": "Try jumping jacks for 2 minutes!",
    "brain exercise": "Solve a small puzzle or riddle daily.",
    "tech joke": "Why do programmers prefer dark mode? Because light attracts bugs! 🐞",
    "coding joke": "Why do Java developers wear glasses? Because they don’t C#! 😎",
    "travel fun": "Visit a new park or nearby town this weekend!",
    "morning motivation": "Wake up, smile, and conquer the day ☀️",
    "evening motivation": "Relax, reflect, and recharge 🌙",
    "fun tip": "Try something new today, even if small!",
    "productivity hack": "Batch similar tasks together.",
    "study motivation": "Small steps every day lead to big results.",
    "career tip": "Network and keep learning continuously.",
    "health advice": "Eat a balanced diet and stay hydrated.",
    "fun fact about earth": "Earth is the only planet not named after a god.",
    "random thought": "Life is like coding, full of bugs and features.",
    "curious question": "If you could fly, where would you go first?",
    "laugh out loud": "ROFL 😆 hope that made you smile!",
    "funny story": "I once told a computer a joke and it laughed in binary 😂",
    "daily challenge": "Learn one new thing today!",
};


  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setLoading(true);

    setTimeout(() => {
      const botReply = botResponses[input.toLowerCase()] || "I don't understand 😅";
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
      setLoading(false);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-white">
      {/* Navbar */}
        <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-[#0d0d0d] z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-lg font-bold text-gray-100 hover:text-green-500 cursor-pointer transform transition-transform duration-300 hover:scale-110">
            Raptor
            </h1>
            <div className="flex items-center space-x-2">
            {/* Display username */}
            <span className="text-gray-100 text-sm md:text-base truncate max-w-[150px]">
                {user}
            </span>
            <FaUserCircle
                size={30}
                className="text-white cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:text-green-500"
                onClick={() => {
                    if (window.confirm("Do you really want to logout?")) {
                    handleSwitchUser(); // switch user / logout
                    }
                }}
                />

            </div>
        </div>
        </header>


      {/* Chat Area */}
      <main className="flex-1 pt-20 pb-24 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col space-y-3 h-[70vh] overflow-y-auto scrollbar-thin">
          {messages.length === 0 ? (
            <div className='text-center text-gray-400 text-lg'>
                👋 Hi, I'm <span className='text-green-500 font-semibold'>Raptor</span>
            </div>
          ) : (
            <>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white self-end"
                      : "bg-gray-700 text-gray-100 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl max-w-[60%] self-start">
                  Bot is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </main>

      {/* Input */}
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-800 bg-[#0d0d0d] z-10">
        <div className="max-w-4xl mx-auto flex justify-center px-4 py-3">
          <div className="w-full flex bg-gray-900 rounded-full px-4 py-2 shadow-lg">
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
              placeholder="Ask Raptor..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full text-white font-medium transition-transform transform hover:scale-110"
            >
              Send
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Bot;
