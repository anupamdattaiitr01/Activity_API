import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random joke
app.get ("/random" , (req, res)=>{
  const randomIndex = Math.floor(Math.random() * activities.length);
  res.json  (activities[randomIndex]);
})

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

var activities = [
  {
    id: 1,
    activityText: "Learn the fundamentals of markdown to format your documentation like a pro.",
    activityType: "Skills",
  },
  {
    id: 2,
    activityText: "Practice 10 minutes of mindful breathing to improve focus and lower stress.",
    activityType: "Wellness",
  },
  {
    id: 3,
    activityText: "Write down three specific things you are grateful for today and why.",
    activityType: "Mindset",
  },
  {
    id: 4,
    activityText: "Doodle or sketch an object on your desk without lifting your pen from the paper.",
    activityType: "Creativity",
  },
  {
    id: 5,
    activityText: "Read a long-form article about a historical event you know nothing about.",
    activityType: "Knowledge",
  },
  {
    id: 6,
    activityText: "Learn how to use basic terminal/command line prompts to navigate your computer.",
    activityType: "Skills",
  },
  {
    id: 7,
    activityText: "Do a 5-minute full-body stretch to reverse the effects of sitting at a desk.",
    activityType: "Wellness",
  },
  {
    id: 8,
    activityText: "Identify one cognitive bias (like confirmation bias) and reflect on how it affects you.",
    activityType: "Mindset",
  },
  {
    id: 9,
    activityText: "Write a 100-word short story using three completely random words.",
    activityType: "Creativity",
  },
  {
    id: 10,
    activityText: "Watch a short documentary video explaining how the global supply chain works.",
    activityType: "Knowledge",
  },
  {
    id: 11,
    activityText: "Learn a few core phrases in a new language (hello, thank you, please).",
    activityType: "Skills",
  },
  {
    id: 12,
    activityText: "Drink a full glass of water and sit in silence away from screens for 5 minutes.",
    activityType: "Wellness",
  },
  {
    id: 13,
    activityText: "Write a letter to your future self 1 year from now outlining your current goals.",
    activityType: "Mindset",
  },
  {
    id: 14,
    activityText: "Rearrange one shelf or corner of your room to make it more visually pleasing.",
    activityType: "Creativity",
  },
  {
    id: 15,
    activityText: "Look up the etymology (origin history) of five words you use every day.",
    activityType: "Knowledge",
  },
  {
    id: 16,
    activityText: "Master five essential keyboard shortcuts for your most used software application.",
    activityType: "Skills",
  },
  {
    id: 17,
    activityText: "Spend 10 minutes doing a progressive muscle relaxation exercise.",
    activityType: "Wellness",
  },
  {
    id: 18,
    activityText: "Reframe a recent negative experience into a lesson learned or a hidden benefit.",
    activityType: "Mindset",
  },
  {
    id: 19,
    activityText: "Brainstorm 10 bad ideas for a random problem; clearing the bad ideas sparks good ones.",
    activityType: "Creativity",
  },
  {
    id: 20,
    activityText: "Read up on the basics of personal finance, specifically how compound interest works.",
    activityType: "Knowledge",
  },
  {
    id: 21,
    activityText: "Practice touch-typing for 10 minutes to improve your words-per-minute speed.",
    activityType: "Skills",
  },
  {
    id: 22,
    activityText: "Go for a brisk 10-minute walk outside without looking at your phone.",
    activityType: "Wellness",
  },
  {
    id: 23,
    activityText: "Define your top 3 personal core values and write down how you lived them today.",
    activityType: "Mindset",
  },
  {
    id: 24,
    activityText: "Listen to a genre of music you normally dislike and try to find one element you appreciate.",
    activityType: "Creativity",
  },
  {
    id: 25,
    activityText: "Learn how the human brain forms habits and how to effectively break bad ones.",
    activityType: "Knowledge",
  },
  {
    id: 26,
    activityText: "Learn how to tie three essential knots that are useful for everyday life.",
    activityType: "Skills",
  },
  {
    id: 27,
    activityText: "Do a digital declutter: delete old files, clear your desktop, and empty the trash.",
    activityType: "Wellness",
  },
  {
    id: 28,
    activityText: "Practice saying 'no' mentally to things that drain your energy but don't add value.",
    activityType: "Mindset",
  },
  {
    id: 29,
    activityText: "Try to describe a complex emotion using only sensory details (colors, textures, smells).",
    activityType: "Creativity",
  },
  {
    id: 30,
    activityText: "Research the basic concepts of quantum computing explained for beginners.",
    activityType: "Knowledge",
  },
  {
    id: 31,
    activityText: "Learn how to read a nutrition label properly to understand what you're putting in your body.",
    activityType: "Skills",
  },
  {
    id: 32,
    activityText: "Practice correct posture at your desk: feet flat, back straight, shoulders relaxed.",
    activityType: "Wellness",
  },
  {
    id: 33,
    activityText: "Write down your biggest worry right now, then write down what is actually within your control.",
    activityType: "Mindset",
  },
  {
    id: 34,
    activityText: "Take a common household item and list 20 alternative uses for it.",
    activityType: "Creativity",
  },
  {
    id: 35,
    activityText: "Understand how the internet works under the hood (DNS, IP addresses, and servers).",
    activityType: "Knowledge",
  },
  {
    id: 36,
    activityText: "Learn how to perform the Heimlich maneuver and basic first aid concepts.",
    activityType: "Skills",
  },
  {
    id: 37,
    activityText: "Do 20 air squats or jumping jacks to get your heart rate up and boost blood flow.",
    activityType: "Wellness",
  },
  {
    id: 38,
    activityText: "Spend 5 minutes visualizing yourself successfully handling a difficult task ahead.",
    activityType: "Mindset",
  },
  {
    id: 39,
    activityText: "Pick a random photo online and write a fictional backstory for the people in it.",
    activityType: "Creativity",
  },
  {
    id: 40,
    activityText: "Read about the psychological concept of 'Flow State' and how to achieve it.",
    activityType: "Knowledge",
  },
  {
    id: 41,
    activityText: "Learn the 80/20 rule (Pareto Principle) and how to apply it to your current workflow.",
    activityType: "Skills",
  },
  {
    id: 42,
    activityText: "Give your eyes a break using the 20-20-20 rule: look 20 feet away for 20 seconds every 20 minutes.",
    activityType: "Wellness",
  },
  {
    id: 43,
    activityText: "Write down a compliment you received recently and let yourself genuinely accept it.",
    activityType: "Mindset",
  },
  {
    id: 44,
    activityText: "Try object meditation: look at a small object for 5 minutes, noticing every tiny detail.",
    activityType: "Creativity",
  },
  {
    id: 45,
    activityText: "Learn the core principles of philosophy, such as Stoicism, and how it handles adversity.",
    activityType: "Knowledge",
  },
  {
    id: 46,
    activityText: "Learn basic color theory and how colors interact to convey different moods.",
    activityType: "Skills",
  },
  {
    id: 47,
    activityText: "Unsubscribe from 5 newsletters or promo lists that clutter your mental space.",
    activityType: "Wellness",
  },
  {
    id: 48,
    activityText: "Identify a regular micro-frustration in your day and brainstorm a way to eliminate it.",
    activityType: "Mindset",
  },
  {
    id: 49,
    activityText: "Hum or whistle a brand new melody you've never heard before.",
    activityType: "Creativity",
  },
  {
    id: 50,
    activityText: "Read a summary of architectural styles throughout history and how they evolved.",
    activityType: "Knowledge",
  },
  {
    id: 51,
    activityText: "Learn the fundamentals of active listening and how to use it in conversations.",
    activityType: "Skills",
  },
  {
    id: 52,
    activityText: "Prepare a healthy snack focusing on whole foods rather than processed options.",
    activityType: "Wellness",
  },
  {
    id: 53,
    activityText: "Practice self-compassion: talk to yourself the way you would talk to a best friend.",
    activityType: "Mindset",
  },
  {
    id: 54,
    activityText: "Create a mood board or collection of images that represent your dream aesthetic.",
    activityType: "Creativity",
  },
  {
    id: 55,
    activityText: "Learn how the Renaissance changed the course of art, science, and human history.",
    activityType: "Knowledge",
  },
  {
    id: 56,
    activityText: "Learn standard proofreading marks to improve your writing edits.",
    activityType: "Skills",
  },
  {
    id: 57,
    activityText: "Spend 5 minutes stretching your wrists and forearms to prevent strain from typing.",
    activityType: "Wellness",
  },
  {
    id: 58,
    activityText: "Acknowledge a past mistake, forgive yourself for it, and focus entirely on the present.",
    activityType: "Mindset",
  },
  {
    id: 59,
    activityText: "Re-design the logo of a famous brand just for fun and practice.",
    activityType: "Creativity",
  },
  {
    id: 60,
    activityText: "Understand the basics of cryptography, public keys, and how data is secured.",
    activityType: "Knowledge",
  },
  {
    id: 61,
    activityText: "Learn the fundamentals of public speaking, like using pauses instead of 'filler' words.",
    activityType: "Skills",
  },
  {
    id: 62,
    activityText: "Dim your screens and step away from bright blue light 30 minutes before bed.",
    activityType: "Wellness",
  },
  {
    id: 63,
    activityText: "Write down your definition of success, independent of what society or others expect.",
    activityType: "Mindset",
  },
  {
    id: 64,
    activityText: "Take a common idiom and write a paragraph taking its literal meaning completely seriously.",
    activityType: "Creativity",
  },
  {
    id: 65,
    activityText: "Learn about the ocean zones and the fascinating, bizarre creatures that live in the deep sea.",
    activityType: "Knowledge",
  },
  {
    id: 66,
    activityText: "Learn how to use regular expressions (Regex) to search text efficiently.",
    activityType: "Skills",
  },
  {
    id: 67,
    activityText: "Focus on deep, diaphragmatic breathing from your belly instead of shallow chest breaths.",
    activityType: "Wellness",
  },
  {
    id: 68,
    activityText: "Celebrate a small win from today, no matter how insignificant it might seem.",
    activityType: "Mindset",
  },
  {
    id: 69,
    activityText: "Find an everyday sound around you and try to translate its rhythm into words.",
    activityType: "Creativity",
  },
  {
    id: 70,
    activityText: "Read about the Fermi Paradox and the various theories on why we haven't found aliens.",
    activityType: "Knowledge",
  },
  {
    id: 71,
    activityText: "Learn how to calculate tips, discounts, and simple percentages mentally.",
    activityType: "Skills",
  },
  {
    id: 72,
    activityText: "Clean and sanitize your most heavily used tech devices (phone, keyboard, mouse).",
    activityType: "Wellness",
  },
  {
    id: 73,
    activityText: "Write down a list of things you need to stop doing to protect your personal peace.",
    activityType: "Mindset",
  },
  {
    id: 74,
    activityText: "Spend 10 minutes free-writing without stopping, correcting grammar, or overthinking.",
    activityType: "Creativity",
  },
  {
    id: 75,
    activityText: "Understand the difference between weather and climate patterns from a scientific perspective.",
    activityType: "Knowledge",
  },
  {
    id: 76,
    activityText: "Learn the basic structural rules of photography, like the Rule of Thirds.",
    activityType: "Skills",
  },
  {
    id: 77,
    activityText: "Drink a warm cup of herbal tea mindfully, focusing purely on its taste and warmth.",
    activityType: "Wellness",
  },
  {
    id: 78,
    activityText: "Identify an area where you are seeking external validation and validate yourself instead.",
    activityType: "Mindset",
  },
  {
    id: 79,
    activityText: "Pick an object and sketch it entirely from memory without looking at it.",
    activityType: "Creativity",
  },
  {
    id: 80,
    activityText: "Read a breakdown of the psychological concepts of intrinsic vs. extrinsic motivation.",
    activityType: "Knowledge",
  },
  {
    id: 81,
    activityText: "Learn how to structure an effective, professional email that gets straight to the point.",
    activityType: "Skills",
  },
  {
    id: 82,
    activityText: "Take a quick nap (15-20 minutes) to clear adenosing buildup and restore alertness.",
    activityType: "Wellness",
  },
  {
    id: 83,
    activityText: "Accept that discomfort is a natural indicator that you are pushing your boundaries and growing.",
    activityType: "Mindset",
  },
  {
    id: 84,
    activityText: "Create a concept for a fictional board game, including its theme and basic mechanics.",
    activityType: "Creativity",
  },
  {
    id: 85,
    activityText: "Learn the core basics of economics, such as the laws of supply and demand.",
    activityType: "Knowledge",
  },
  {
    id: 86,
    activityText: "Learn basic UI/UX design laws, like Fitts's Law, to understand app layouts.",
    activityType: "Skills",
  },
  {
    id: 87,
    activityText: "Spend 5 minutes organizing your physical workspace to promote absolute clarity.",
    activityType: "Wellness",
  },
  {
    id: 88,
    activityText: "Remind yourself that you don't have to turn every hobby or passion into a side hustle.",
    activityType: "Mindset",
  },
  {
    id: 89,
    activityText: "Write a poem using only words that have one syllable.",
    activityType: "Creativity",
  },
  {
    id: 90,
    activityText: "Read about the history of the printing press and how it catalyzed global literacy.",
    activityType: "Knowledge",
  },
  {
    id: 91,
    activityText: "Learn how to use basic advanced search operators to find anything on the web instantly.",
    activityType: "Skills",
  },
  {
    id: 92,
    activityText: "Spend a few minutes practicing deep box breathing (inhale 4s, hold 4s, exhale 4s, hold 4s).",
    activityType: "Wellness",
  },
  {
    id: 93,
    activityText: "Let go of the urge to control how other people perceive or interpret your actions.",
    activityType: "Mindset",
  },
  {
    id: 94,
    activityText: "Design a new cover for your favorite book using whatever creative medium you like.",
    activityType: "Creativity",
  },
  {
    id: 95,
    activityText: "Learn about the basics of game theory and how strategic decisions are analyzed.",
    activityType: "Knowledge",
  },
  {
    id: 96,
    activityText: "Learn the fundamentals of fast reading without losing your overall comprehension.",
    activityType: "Skills",
  },
  {
    id: 97,
    activityText: "Step away from all digital notifications for a clear, dedicated one-hour window.",
    activityType: "Wellness",
  },
  {
    id: 98,
    activityText: "Focus entirely on execution over perfectionism; done is far better than perfect.",
    activityType: "Mindset",
  },
  {
    id: 99,
    activityText: "Brainstorm an imaginary product that solves a highly specific micro-problem in your life.",
    activityType: "Creativity",
  },
  {
    id: 100,
    activityText: "Spend time studying a map of the world to learn the exact location of lesser-known countries.",
    activityType: "Knowledge",
  },
];