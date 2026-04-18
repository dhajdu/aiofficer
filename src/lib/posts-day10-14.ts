import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Day 10 - 14  posts + blocks                                        */
/* ------------------------------------------------------------------ */

export const POSTS_DAY10_14: Post[] = [
  {
    slug: 'day-11-ai-mindset-shift-unlocked',
    title: 'Day 11: The AI Mindset Shift',
    subtitle: 'The AI mindset shift isn\'t technical. It\'s relational. A non-technical founder walked in skeptical and walked out leading a half human, half AI team.',
    excerpt: 'Day 11 of the Infinite Leverage Blueprint. A non-technical founder walked in skeptical and walked out leading a half human, half AI team. The AI mindset shift isn\'t about the tools. It\'s about who\'s at the table with you.',
    date: 'Apr 18, 2026',
    readTime: '5 min read',
    category: 'Infinite Leverage',
    categories: ['Infinite Leverage', 'AI Leadership', 'Claude Code'],
    tags: ['AI mindset', 'AI mindset shift', 'Infinite Leverage Blueprint', 'half human half AI team', 'non-technical founder', 'The Other 50%', 'Dave Hajdu book', 'AI marketing team install', 'one-man company with AI'],
    image: '/blog/images/day-11-ai-mindset-shift-unlocked.webp',
    dayNumber: 11,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
    author: 'Dave Hajdu',
  },
  {
    slug: 'day-10-coaching-assistant',
    title: 'Day 10: The Coaching Assistant',
    subtitle: 'The hard part of AI coaching isn\'t the coaching. It\'s the data. Here\'s how we built an AI coaching assistant using real homework and a framework we trust.',
    excerpt: 'The hard part of AI coaching isn\'t the coaching. It\'s the data. Organize what you know about the people you lead, add a coaching framework you trust, and AI stops giving generic advice.',
    date: 'Apr 15, 2026',
    readTime: '6 min read',
    category: 'Infinite Leverage',
    tags: ['AI coaching assistant', 'AI leadership coaching', 'GROW coaching framework', 'build AI coach', 'personalized AI coaching', 'one-man company with AI'],
    image: '/blog/images/day-10-coaching-assistant.webp',
    dayNumber: 10,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
  },
];

/* ------------------------------------------------------------------ */
/*  Blocks by slug                                                     */
/* ------------------------------------------------------------------ */

export const BLOCKS_DAY10_14: Record<string, Block[]> = {

  /* ================================================================ */
  /*  DAY 11                                                           */
  /* ================================================================ */
  'day-11-ai-mindset-shift-unlocked': [
    { tag: 'pull-quote', text: 'Part of a daily series where I\'m building toward a one-man company in 14 days using the <a href="/blog/day-1-infinite-leverage-blueprint">Infinite Leverage Blueprint</a>. Today is the one where the AI mindset actually unlocked for someone outside the team.' },

    { tag: 'h2', text: 'The Morning Standup' },
    { tag: 'shipped-list', title: 'What shipped today', items: [
      '<strong>Two days of nothing.</strong> Travel to Hanoi. I thought I\'d keep building from taxis and hotel lobbies. I couldn\'t. The multi-delegation skill isn\'t there yet. That\'s a real post coming soon.',
      '<strong>Setup prompts for the blueprint.</strong> Written so someone can install the whole operating system on their own machine, start to finish, without me walking them through it.',
      '<strong>Marketing team install flow.</strong> Operationalized. Drop in, go.',
      '<strong>TK Nguyen and his video team, onboarded live.</strong> In the room. Real work. AI mindset flipped inside of an afternoon.',
    ] },
    { tag: 'p', text: 'All of that before the real story started.' },

    { tag: 'h2', text: 'Why Today Mattered' },
    { tag: 'p', text: 'For the first 10 days of this build, I was making everything work for me. My machine. My folders. My brain. That was the point. Prove it runs.' },
    { tag: 'p', text: 'Today was the pivot. The question stopped being <em>can I build this?</em> and became <em>can someone else install this?</em>' },
    { tag: 'p', text: 'Those are two very different questions. The first one is ego. The second one is a business.' },
    { tag: 'p', text: 'So we spent the morning writing setup prompts. Things that turn a messy collection of files into a single sequence a non-technical founder can actually follow. Install Claude Code. Link your GitHub. Paste this prompt. Answer the questions. Wait three minutes. The marketing team agent is on your machine.' },
    { tag: 'callout', label: 'Why It Matters', text: 'If the system only runs on your laptop, you haven\'t built a system. You\'ve built a pet. A one-man company made of AI agents doesn\'t scale until installation is the first feature, not the last.' },
    { tag: 'p', text: 'That shift, from "I can use this" to "you can install this," is the whole reason Day 11 mattered more than Days 9 or 10 combined.' },

    { tag: 'h2', text: 'The AI Mindset Shift' },
    { tag: 'p', text: 'Mid-afternoon, my friend <a href="https://tknguyen.com/" target="_blank" rel="noopener noreferrer">TK Nguyen</a> showed up with his video team. TK runs GAM Entertainment and Skylight rooftop bar in Nha Trang. He is not technical. He is a founder, an operator, a storyteller. The techy stuff has always felt like someone else\'s job.' },

    { tag: 'image', src: '/blog/images/day-11-tk-nguyen.webp', alt: 'TK Nguyen sitting at a laptop at Lumiere in Nha Trang during the Day 11 session of the Infinite Leverage Blueprint' },

    { tag: 'p', text: 'He sat down. Skeptical. You could feel it.' },
    { tag: 'p', text: 'Then, over the next couple of hours, I watched his face change. Not when I explained the tools. When he started asking different questions. He stopped asking <em>how does the AI work?</em> and started asking <em>what would I have it do first?</em>' },
    { tag: 'emphasis-box', text: '<strong>That\'s the flip. That is the AI mindset shift.</strong>' },
    { tag: 'p', text: 'When a founder goes from "how does the AI work" to "what would I have it do first," they are no longer a user. They are a leader of a team that happens to be half AI. The tools become invisible. The ideas take over.' },
    { tag: 'pull-quote', text: 'The ceiling moves from what you can build to what you can lead.' },
    { tag: 'p', text: 'TK walked in wondering if this was for him. He walked out with a list of agents he wants to install by end of next week. A marketing lead. A scheduling assistant for the bar. A video pipeline for GAM. None of that was on the table when he arrived.' },
    { tag: 'p', text: 'He didn\'t need a bootcamp. He needed an engineer at the table for one afternoon.' },

    { tag: 'h2', text: 'The Other 50%' },
    { tag: 'p', text: 'I\'m writing a book right now. Working title: <em>The Other 50%</em>. The whole thesis is there in the name. The future team is half human, half AI. Most leaders are comfortable with the human half. They\'ve been building those teams their whole career. The other half feels intimidating. New rules, new language, new failure modes.' },
    { tag: 'p', text: 'Here is what watching TK unlocked for me, and what the book is really about. The AI mindset shift isn\'t technical. It\'s relational.' },
    { tag: 'emphasis-box', text: '<strong>The other 50% is not intimidating because it is technical. It is intimidating because you are trying to meet it alone.</strong>' },
    { tag: 'p', text: 'TK didn\'t need to learn how Claude works. He needed someone beside him who already did. Once that was true, the intimidation evaporated, and what was left was the part he is already world-class at: taste, story, customer, ideas.' },
    { tag: 'p', text: 'That is the <a href="/retreat">retreat</a> in one sentence. We pair you with an engineer for two days. You walk in with the same intimidation TK had. You walk out leading a team that is half human, half AI. Your ideas are the bottleneck again, the way they should be.' },

    { tag: 'conclusion-box', title: 'Day 11 of 14', paragraphs: [
      'Three days left.',
      'Ten days in, I\'ve been proving the system can run. Day 11 was the first time I proved it can travel. Install prompts in the morning. A founder from outside the team, unlocked by the afternoon. That\'s the signal I was waiting for.',
      'The machine runs. The install ships. A friend got onboarded without me writing a line of code for him.',
      'The last three days are about one question: how much of this can we hand off, cleanly, to the next person who walks in the door? Because the retreat is no longer theoretical. TK just showed us what it looks like.',
      'Read next: <a href="/blog/day-10-coaching-assistant">Day 10: The Coaching Assistant</a> &middot; <a href="/blog/day-9-designer-got-stuck">Day 9: The Day the Designer Got Stuck</a> &middot; <a href="/blog/founder-stack-you-dont-need-to-become-technical">You Don\'t Need to Become Technical. You Need a Stack.</a>',
      'See you on Day 12.',
    ] },

    { tag: 'faq', question: 'What is an AI mindset shift?', answer: 'An AI mindset shift is the moment a founder stops asking how the AI works and starts asking what they would have it do first. It is the flip from thinking like a user of AI tools to thinking like a leader of a team that happens to be half AI. The shift is not technical. It is relational: you stop trying to learn the tools alone and start leading them the way you already lead people.' },
    { tag: 'faq', question: 'What is a half human, half AI team?', answer: 'A half human, half AI team is a business structure where half the roles are filled by humans and half by AI agents, operating as a single coordinated team. Humans own judgment, taste, story, and customer. AI agents handle execution, research, drafting, and scheduling. Leading one is where the AI mindset shift actually shows up in practice.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is a 14-day build challenge by Dave Hajdu to create a one-man company powered by AI. Each day adds a new capability: content pipelines, project management agents, coaching assistants, install flows, and automated publishing. The goal is to demonstrate how one person can run a full operation using AI agents, structured data, and automated workflows.' },
    { tag: 'faq', question: 'What does "The Other 50%" mean?', answer: 'The Other 50% is the working title of Dave Hajdu\'s upcoming book. The thesis: the future team is half human, half AI. Most leaders are comfortable building the human half because they have been doing it their whole career. The other half feels intimidating because it uses new tools, new language, and new failure modes. The book argues the intimidation disappears the moment you stop trying to meet the other 50% alone.' },
    { tag: 'faq', question: 'Do I need an engineer to install an AI team?', answer: 'Not forever, but almost always for the first time. A non-technical founder can run an AI team day to day without an engineer, but the initial install is where most people get stuck. An engineer beside you for one afternoon compresses weeks of fumbling into a working setup. That is exactly what the Infinite Leverage Retreat is built for.' },
  ],

  /* ================================================================ */
  /*  DAY 10                                                           */
  /* ================================================================ */
  'day-10-coaching-assistant': [
    { tag: 'h2', text: 'The Morning Standup' },

    { tag: 'shipped-list', title: 'What shipped today', items: [
      '<strong>Designer agent fixed.</strong> Focused on getting the prompts right and passed them to Jan for iteration. If the prompt is good, you can manually run the images. Faster feedback loop, better results.',
      '<strong>Project manager agent live.</strong> Trac got it fully operational. Notifications hitting Lark, email, and Cowork. The PM compiles a standup summary at 9am: what the humans are doing AND what the AI agents are planning.',
      '<strong>Yesterday\'s post shipped.</strong> Late, but out.',
      '<strong>Team process built.</strong> Created a project template in Claude team space around our 5-step method: determine the problem, decide the data, develop workflows, design instructions, deploy.',
      '<strong>CAIO Coach website rebuild kicked off.</strong> Migrating to Next.js, applying the UX designer\'s design system, connecting to a single company database. All brands feeding into one place.',
    ] },

    { tag: 'p', text: 'All of that before the real work started.' },

    { tag: 'h2', text: 'The Real Build: An AI Coaching Assistant' },

    { tag: 'p', text: 'This is the one I\'ve been most excited about.' },

    { tag: 'p', text: 'We run a leadership training program through AI Officer Institute. Part of that program includes structured homework assignments based on <a href="https://www.georgetown.edu/" target="_blank" rel="noopener noreferrer">Georgetown University\'s</a> executive curriculum. Each person reflects on their leadership style, their strengths, their gaps, the situations where they get stuck.' },

    { tag: 'p', text: 'Here\'s the thing most people miss about AI coaching: the hard part isn\'t the coaching. It\'s the data.' },

    { tag: 'emphasis-box', text: 'If you ask AI to "coach someone on leadership," you\'ll get generic advice that sounds like a self-help book. But if you hand AI a person\'s actual reflections, their self-assessments, the patterns in how they describe their own challenges, <strong>now the AI has something to work with. It knows who it\'s talking to.</strong>' },

    { tag: 'p', text: 'That homework IS the data layer. We didn\'t set out to build a coaching dataset. We set out to help people learn. But organized learning artifacts become the richest possible context for personalized coaching.' },

    { tag: 'p', text: 'The second piece is the method. You need to tell the AI how to coach, not just what to know.' },

    { tag: 'p', text: 'We\'re using GROW: Goal, Reality, Options, Will. It\'s a classic coaching framework. But you could just as easily use <a href="https://www.radicalcandor.com/" target="_blank" rel="noopener noreferrer">Radical Candor</a> (Kim Scott) or any method you trust. The framework isn\'t the point. The point is that you pick one and encode it as a skill. You tell the AI: here\'s how a good coaching conversation works. Here are the kinds of questions to ask. Here\'s what to listen for. Here\'s when to push and when to reflect back.' },

    { tag: 'pull-quote', text: 'Data tells the AI who this person is. The method tells the AI how to help them.' },

    { tag: 'p', text: 'Put those together and you don\'t have a chatbot. You have an AI coaching assistant that knows the person sitting across from it.' },

    { tag: 'h2', text: 'How to Build Your Own AI Coaching Assistant' },

    { tag: 'p', text: 'This isn\'t theoretical. We\'re teaching this live at 4pm today. Here\'s the process:' },

    { tag: 'ol-item', text: '<strong>Organize your data.</strong> Collect everything you know about the people you coach. Assessments, homework, meeting notes, reflections. Structure it so AI can read it. This is the step most people skip, and it\'s the one that matters most.' },
    { tag: 'ol-item', text: '<strong>Pick your coaching framework.</strong> GROW, Radical Candor, something you learned from a mentor. Whatever method you\'d actually use if you were sitting across from them. Don\'t invent something new. Use what you trust.' },
    { tag: 'ol-item', text: '<strong>Write the skill.</strong> Tell the AI: here\'s the method, here\'s how to apply it, here\'s what a good coaching conversation looks like. Be specific about the kinds of questions to ask and when.' },
    { tag: 'ol-item', text: '<strong>Connect data to skill.</strong> The AI reads the person\'s context, then coaches using your method. Not generic advice pulled from the internet. Personalized coaching grounded in real information about a real person.' },
    { tag: 'ol-item', text: '<strong>Test it live.</strong> Run a session. See where it falls flat. Adjust. The first version won\'t be perfect, but you\'ll know immediately what\'s missing because you\'ll feel it in the conversation.' },
    { tag: 'ol-item', text: '<strong>Schedule it.</strong> Put it on a recurring run. A coaching assistant you have to remember to open isn\'t a system. One that fires on schedule and is ready when you sit down with your team? That\'s leverage.' },

    { tag: 'callout', label: 'Why It Matters', text: 'The whole point of AI in leadership isn\'t to replace the coach. It\'s to scale the coach. Your judgment, your method, your understanding of the people you work with, available every day instead of once a quarter. You could build one of these with your own data and a framework you already trust. The AI isn\'t the coach. You are. The AI just makes sure you show up consistently.' },

    { tag: 'conclusion-box', title: 'Day 10 of 14', paragraphs: [
      'Ten days in. Four to go.',
      'Here\'s what\'s becoming clear: every day adds a capability that compounds on the ones before it. Day 8 was the content studio. Day 9 was the content pipeline. Day 10 is coaching. Each one makes the next one easier because the system gets smarter, the workflows get tighter, and the data gets richer.',
      'The AI coaching assistant is the build I\'m most proud of so far. Not because it\'s the most technically complex. Because it\'s the most human.',
      'Four days left. Tomorrow I\'m in transit to Hanoi, which means I\'ll be building from airports and taxis. The goal: get the web developer agent running on a schedule so it produces all our posts automatically by Monday. If that works, the content machine runs itself.',
      'See you on Day 11.',
    ] },

    { tag: 'faq', question: 'How do you build an AI coaching assistant?', answer: 'Start by organizing your data: assessments, homework, meeting notes, and reflections from the people you coach. Then pick a coaching framework like GROW or Radical Candor and encode it as a skill. Connect the personal data to the method so the AI coaches each person based on real context, not generic advice. Test it live, then schedule it to run automatically.' },
    { tag: 'faq', question: 'What data do you need for an AI coaching assistant?', answer: 'The best data comes from structured reflections: self-assessments, leadership homework, coaching session notes, and any artifacts where people describe their own strengths, gaps, and challenges. The richer and more personal the data, the more effective the coaching.' },
    { tag: 'faq', question: 'What is the GROW coaching framework?', answer: 'GROW stands for Goal, Reality, Options, Will. It is a widely used coaching model where you help someone define their goal, assess their current reality, explore their options, and commit to a specific action. It works well as a structure for AI coaching because each step maps to a clear set of questions and prompts.' },
    { tag: 'faq', question: 'Can AI replace a human coach?', answer: 'AI does not replace the coach. It scales the coach. The AI uses your judgment, your method, and your understanding of the people you work with. It makes personalized coaching available every day instead of once a quarter. The human still sets the direction. The AI just makes sure it shows up consistently.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is a 14-day build challenge by Dave Hajdu to create a one-man company powered by AI. Each day adds a new capability: content pipelines, project management agents, coaching assistants, and automated publishing. The goal is to demonstrate how one person can run a full operation using AI agents, structured data, and automated workflows.' },
  ],
};
