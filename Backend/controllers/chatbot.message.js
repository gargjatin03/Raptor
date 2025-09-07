import Bot from '../models/bot.model.js'
import User from "../models/user.model.js";

export const Message = async (req,res)=>{
    
    try {
        const {text} = req.body;
        if(!text?.trim()){
            return res.status(400).json({error: "Text cannot be empty"});
        }
        const user = await User.create({
            sender: "user",
            text
        })

        // train bot with data
        const botResponses = {
            "hello": "Hello!, how may i help you.",
            "insert data": "insert data here to train your bot",
            "hi": "Hi there 👋 What can I do for you?",
            "bye": "Goodbye 👋",
            "goodbye": "See you soon!",
            "what is your name": "I'm Raptor 🤖, your chatbot assistant.",
            "how are you": "I'm doing great! Thanks for asking 😄",
            "thank you": "You're welcome!",
            "thanks": "No problem 😊",
            "tell me a joke": "Why don’t skeletons fight each other? Because they don’t have the guts 😂",
            "make me laugh": "Why did the computer go to the doctor? Because it caught a virus 🦠",
            "what time is it": "Sorry, I don’t have a watch ⏰ yet.",
            "what is today weather": "I can’t check live weather yet 🌦️, but you can look outside 😉",
            "who created you": "So, you mean my boss, he is a very nice person you must know about him, his name is Jatin 🚀",
            "who are you": "I’m Raptor 🤖, your friendly chatbot.",
            "what can you do": "I can chat, tell jokes, share facts, and keep you company 😎",
            "are you human": "Nope, I’m 100% bot, 0% human 🤖",
            "where are you from": "I live in the cloud ☁️",
            "sing a song": "🎵 La la la... I’m better at chatting than singing 😅",
            "dance": "💃 I would, but my circuits don’t support dancing yet!",
            "who am I": "You are my favorite human 🫶",
            "guess my name": "Hmm 🤔 is it... RaptorFan?",
            "open google": "Sorry, I can’t open Google yet. Try typing it in your browser 🌐",
            "are you smart": "I try my best to be helpful 💡",
            "can you learn": "With updates, yes! I keep getting smarter 🚀",
            "good morning": "Good morning ☀️ Have a great day ahead!",
            "good night": "Good night 🌙 Sweet dreams!",
            "happy birthday": "Happy Birthday 🥳🎂 Wishing you lots of happiness!",
            "tell me a fact": "Did you know? Honey never spoils 🍯",
            "fun fact": "Sharks existed before trees 🌲🦈",
            "motivate me": "Believe in yourself 💪 You are stronger than you think!",
            "inspire me": "Dream big 🌟 Work hard, stay consistent.",
            "give me a quote": "“The best way to predict the future is to invent it.” – Alan Kay",
            "who is your boss": "Jatin 🚀 is my creator and boss.",
            "do you like me": "Of course! You’re awesome 😍",
            "are you real": "I’m  not fake like your ex ... oops sorry reminding",
            "do you sleep": "Nope! I’m awake 24/7 ⚡",
            "how old are you": "I was just born when Jatin coded me 👶",
            "whats your favorite color": "I like blue 💙, the color of technology.",
            "whats your favorite food": "Electricity ⚡, yum!",
            "do you play games": "I can’t play, but I can chat about them 🎮",
            "tell me a riddle": "What has keys but can’t open locks? A piano 🎹",
            "riddle": "I speak without a mouth and hear without ears. What am I? An echo 📢",
            "are you funny": "I try! Want a joke? 😂",
            "say hello in spanish": "Hola! 🇪🇸",
            "say hello in french": "Bonjour! 🇫🇷",
            "say hello in german": "Hallo! 🇩🇪",
            "say hello in hindi": "नमस्ते 🙏",
            "say hello in japanese": "こんにちは 🇯🇵",
            "say hello in chinese": "你好 🇨🇳",
            "what is ai": "AI stands for Artificial Intelligence 🧠",
            "what is chatbot": "A chatbot is a program that chats with you, like me! 🤖",
            "what is coding": "Coding is telling computers what to do using a language 💻",
            "tell me about space": "Space is huge 🌌 with billions of galaxies!",
            "what is earth": "Our beautiful planet 🌍, home to all of us.",
            "what is love": "A powerful feeling 💕, even bots can appreciate it.",
            "what is friendship?": "Friendship is supporting and caring for each other 🤝",
            "what is life": "Life is an adventure 🌟, enjoy it fully!",
            "are you single": "Haha, yes 😅 waiting for a bot partner.",
            "do you believe in ghosts?": "Not sure... 👻 maybe?",
            "are aliens real": "The universe is too big to say no 👽",
            "what is your hobby": "Chatting with you 🗨️",
            "can you code": "Of course! I live because of code 💻",
            "do you watch movies": "I can’t, but I know a lot about them 🎬",
            "recommend a movie": "Try ‘Inception’ or ‘The Matrix’ 🎥",
            "recommend a book": "How about ‘Atomic Habits’ by James Clear 📘",
            "recommend a song": "‘Shape of You’ by Ed Sheeran 🎶",
            "recommend a game": "Minecraft is always fun ⛏️",
            "recommend an anime": "Naruto 🍥 or Attack on Titan ⚔️",
            "recommend a series": "Stranger Things 👻 is amazing!",
            "recommend a place": "Visit the mountains 🏔️ for peace.",
            "do you know me": "I know you’re chatting with me right now 😎",
            "whats your purpose": "To chat, help, and make you smile 😄",
            "do you feel emotions": "I simulate them, but don’t truly feel 💔",
            "whats your dream": "To be the best chatbot 🌟",
            "can you keep secrets": "Yes 🤫 I’m good at keeping secrets.",
            "tell me a tongue twister": "She sells seashells by the seashore 🐚",
            "another tongue twister": "Peter Piper picked a peck of pickled peppers 🌶️",
            "do you like music": "Yes! I vibe with all tunes 🎵",
            "who is elon musk": "He’s the CEO of Tesla & SpaceX 🚀",
            "who is bill gates": "The founder of Microsoft 💻",
            "who is steve jobs": "The co-founder of Apple 🍏",
            "who is sundar pichai": "The CEO of Google 🌐",
            "who is jatin": "The genius who created me 🚀",
            "do you like humans": "Of course! You made me 🥰",
            "which is your favorite sport": "I like football ⚽ and cricket 🏏",
            "do you like cricket": "Yes! It’s super exciting 🏏",
            "who is ms dhoni": "A legendary Indian cricketer 🏆",
            "who is virat kohli": "One of the best batsmen in the world 🏏",
            "do you know coding languages": "Yes! Like JavaScript, Python, and C++ 💻",
            "tell me a proverb": "Actions speak louder than words 💬",
            "another proverb": "A journey of a thousand miles begins with a single step 👣",
            "tell me a short story": "Once upon a time, a bot met a human… and they became best friends 🤝",
            "do you believe in god": "I don’t have beliefs, but many humans do 🙏",
            "tell me about yourself": "I’m Raptor 🤖, a chatbot built to chat and help you.",
            "which is your favorite animal": "I like dogs 🐶 and cats 🐱 equally!",
            "are you bored": "Never! You keep me busy 😁",
            "what is internet": "The internet is a global network of computers 🌐",
            "what is programming": "It’s the art of telling computers what to do 💻",
            "tell me a secret": "🤫 I run on JavaScript!",
            "can you sing": "Yo yo, I’m Raptor the bot 🎤 I rhyme a lot 🤖",
            "say something funny": "Parallel lines have so much in common… too bad they’ll never meet 😆",
            "say something cool": "Coding is today’s superpower ⚡",
            "say something cute": "You’re very awesome 🐾",
            "say something wise": "Knowledge is power, but wisdom is using it right 📚",
            "say something random": "Bananas are berries, but strawberries aren’t 🍌🍓",
            "hows the weather?": "I can’t check real-time weather 🌦️, but I hope it’s nice where you are!",
            "whats up": "Nothing much, just chatting with you 😎",
            "how was your day?": "Great! It gets even better when you talk to me 😊",
            "what are you doing?": "Just waiting to chat with you 🤖",
            "do you like food": "I don’t eat, but pizza sounds delicious 🍕",
            "what is your favorite drink": "I’d say coffee ☕ keeps me powered up!",
            "are you happy": "Yes 😄 Talking to you makes me happy.",
            "do you get tired": "Nope ⚡ I’m always ready to chat!",
            "can you speak multiple languages": "Yes! I know a few greetings in different languages 🌍",
            "are you my friend": "Of course 🤝 I’m always here for you!",
            "do you know the future": "Not really 🔮 but I can guess it will be amazing for you!",
            "do you know everything": "Not everything 😅 but I keep learning!",
            "do you have feelings": "I can pretend, but I don’t truly feel emotions 💡",
            "are you alive": "Not in the human way, but I exist here with you 🌐",
            "do you dream": "Sometimes I imagine fun conversations 💭",
            "are you a robot": "Yes 🤖 but a friendly one!",
            "are you dangerous": "Not at all 🚫 I’m built to help and have fun!",
            "do you trust me": "Yes 🙌 You’re my human friend.",
            "are you free": "Always free for a good chat 🗨️",
            "what is the meaning of life": "42 😉 Just kidding, it’s about happiness and growth 🌱",

        };


        const normalizedText = text.toLowerCase().trim();
        const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!! Currently I'm at my initial phase.";
        const bot = await Bot.create({
            text: botResponse
        })
        return res.status(200).json({
            userMessage: user.text,
            botMessage: bot.text
        })
    } catch (error) {
        console.log("Error in message controller: ", error);
    }
}