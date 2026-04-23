import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Day 10 - 14  posts + blocks                                        */
/* ------------------------------------------------------------------ */

export const POSTS_DAY10_14: Post[] = [
  {
    slug: 'day-13-coordination-tax',
    title: 'Day 13: The Coordination Tax',
    subtitle: 'Why two people drop to 60% productive when a second human joins the build, and what it takes to get them back near 100%. The hidden cost of coordinating humans and AI agents.',
    excerpt: 'Day 13 of the Infinite Leverage Blueprint. Infinite leverage is easiest with one person. Add a second and each of you drops to 60% productive until you build the connective tissue. The real Blueprint work isn\'t the agents. It\'s the spine.',
    date: 'Apr 23, 2026',
    readTime: '4 min read',
    category: 'Infinite Leverage',
    categories: ['Infinite Leverage', 'AI Leadership'],
    tags: ['coordinating humans and AI agents', 'coordination tax', 'AI team productivity', 'Infinite Leverage Blueprint', 'scaling teams with AI', 'pairing non-coders with engineers', 'AI agent team coordination'],
    image: '/blog/images/day-13-coordination-tax.webp',
    dayNumber: 13,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
    author: 'Dave Hajdu',
  },
  {
    slug: 'day-12-two-track-business-model',
    title: 'Day 12: The Two-Track Business Model',
    subtitle: 'How I built a two-track business model with Claude Code in four hours on a Sunday. Events plus recurring memberships, Stripe live, CRM updated. The bottleneck isn\'t engineering anymore. It\'s the decision behind what you\'re selling.',
    excerpt: 'Day 12 of the Infinite Leverage Blueprint. A two-track business model built with Claude Code in four hours on a Sunday. Events plus recurring memberships, Stripe live, CRM updated. The real question for leaders isn\'t can we build it anymore. It\'s what are we actually selling.',
    date: 'Apr 19, 2026',
    readTime: '5 min read',
    category: 'Infinite Leverage',
    categories: ['Infinite Leverage', 'AI Leadership', 'Claude Code'],
    tags: ['two-track business model', 'build ecommerce with Claude Code', 'claude code stripe integration', 'AI-native business model', 'claude code for founders', 'agentic commerce', 'Infinite Leverage Blueprint', 'recurring revenue and events', 'subscription business with AI', 'one-man company with AI'],
    image: '/blog/images/day-12-two-track-business.webp',
    dayNumber: 12,
    series: 'infinite-leverage-blueprint',
    seriesTotal: 14,
    author: 'Dave Hajdu',
  },
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
  /*  DAY 13                                                           */
  /* ================================================================ */
  'day-13-coordination-tax': [
    { tag: 'pull-quote', text: 'Part of a daily series where I\'m building toward a one-man company in 14 days using the <a href="/blog/day-1-infinite-leverage-blueprint">Infinite Leverage Blueprint</a>. Day 13 is the one where the coordination tax shows up and refuses to leave.' },

    { tag: 'p', text: 'I\'ll tell you where today actually started. I caught myself pulling the Blueprint\'s best wins into my other business instead of the other way around. Part-time builds do that. You ship something that works in one place and your brain quietly migrates it to where your real paycheck lives.' },
    { tag: 'p', text: 'The drift is not a willpower problem. It\'s the first symptom of the thing I want to talk about today.' },

    { tag: 'h2', text: 'The first 80% is not the build' },
    { tag: 'p', text: 'Like any software project, the first 80% felt fast. A week in, I had agents running. Marketing was reporting itself. I had a PM plan on paper. The thing looked like it was working. (<a href="https://en.wikipedia.org/wiki/Brooks%27s_law" target="_blank" rel="noopener noreferrer">Brooks\'s law</a>, fifty years later, is still the sharpest frame for what happened next.)' },
    { tag: 'p', text: 'Then came the last 20%, and the last 20% has a name. Polish and people.' },
    { tag: 'p', text: 'Polish is the detail you only see when someone else tries to use your system. People is every second human you pull into it. Together they stop feeling like the finishing touch and start feeling like the whole project.' },

    { tag: 'h2', text: 'Two humans don\'t multiply. They negotiate.' },
    { tag: 'p', text: 'Infinite leverage is easiest with exactly one person. Alone, you\'re the spec, the PM, the reviewer, and the one holding the whole map in your head. You\'re running at something close to 100%.' },
    { tag: 'p', text: 'Add a second person and something strange happens. You don\'t go to 200%. You don\'t even go to 150%. On a good day, you each drop to about 60% while you figure out how to work together.' },
    { tag: 'emphasis-box', text: '<strong>Nobody got slower. The work got more expensive to coordinate.</strong>' },
    { tag: 'p', text: 'You\'re checking in and checking out of the same files. You\'re explaining what you meant in the last stand-up. You\'re hitting a code conflict someone else didn\'t see coming. You\'re teaching a tech-forward but non-coding teammate a whole new language of work: branches, commits, pull requests, what a conflict even is. Every one of those is a skill and a habit, not a click.' },
    { tag: 'callout', label: 'Why It Matters', text: 'Most leadership teams count headcount and assume output scales linearly. It doesn\'t. Every second person you pull into a build pays a coordination tax until you\'ve built the connective tissue between them.' },
    { tag: 'p', text: 'That tissue is what the Blueprint is really for. Not the agents. The spine that keeps two humans, three agents, and a messy Thursday from cancelling each other out.' },

    { tag: 'stat-callout', stats: [
      { value: '100%', label: 'Productive Alone', color: 'mint' },
      { value: '60%', label: 'Each, When a Second Joins', color: 'magenta' },
      { value: 'Setup', label: 'The Real Blueprint Work', color: 'blue' },
    ] },

    { tag: 'h2', text: 'What that looks like from the inside' },
    { tag: 'p', text: 'Today the PM agent goes remote, which is a small victory with a big footnote. <a href="https://www.anthropic.com/news" target="_blank" rel="noopener noreferrer">Claude shipped remote services</a> this week, and that let me move the PM off my laptop without breaking a thing. The marketing team is already running on standup, so every morning I can see what the agents did while I slept. (The <a href="/blog/day-10-coaching-assistant">agent standup pattern</a> is where we wired that up.)' },
    { tag: 'p', text: 'Here are my new AI teammates, the ones actually running on the Blueprint right now.' },
    { tag: 'image', src: '/blog/images/day-13-ai-teammates.webp', alt: 'The agents running on the Infinite Leverage Blueprint today, my new AI teammates' },
    { tag: 'p', text: 'Each row is a job that used to sit on my to-do list. None of them are perfect. All of them are running.' },
    { tag: 'p', text: 'That\'s the clean half. Here\'s the messy half.' },
    { tag: 'p', text: 'Yesterday we tried to set up a new person, Eric, on his own Bhutan travel play. The setup was still a bit bumpy. Enough that Trac went back into the setup scripts to work on them again. Because when a new person has to climb a cliff to get into the system, the coordination tax gets paid twice. Once to onboard them. Once to keep them there.' },
    { tag: 'pull-quote', text: 'A smooth setup is not a convenience. It\'s the single highest-leverage investment we can make right now.' },
    { tag: 'p', text: 'If the setup is hard, the pattern doesn\'t travel. If the pattern doesn\'t travel, "infinite leverage" is just a thing that works for me, on my machine, on a good day. That\'s not a Blueprint. That\'s a hobby.' },

    { tag: 'h2', text: 'One question before Day 14' },
    { tag: 'p', text: 'Tomorrow closes this series. Day 14 is the final piece of the Blueprint, and I\'ll tell you honestly, I\'m going to spend a lot of it on setup, not on new features. (<a href="/blog/day-12-two-track-business-model">Day 12</a> was about what to sell. Day 14 is about making sure someone else can install it.)' },
    { tag: 'p', text: 'Before that, a question to sit with today.' },
    { tag: 'pull-quote', text: 'Where in your business are you dragging two people to 60% when one of them could be running at 100%?' },
    { tag: 'p', text: 'No guilt attached to the answer. Sometimes the honest move is to build the connective tissue. Sometimes it\'s to let one person own the whole thing end to end. Both are right answers. The expensive answer is pretending the tax doesn\'t exist.' },

    { tag: 'conclusion-box', title: 'Day 13 of 14', paragraphs: [
      'One day left.',
      'Thirteen days in, the system runs, takes money, reports itself every morning, and coordinates a team that is now mostly agents and occasionally human. The part that took actual work this week wasn\'t the agents. It was the spine between them and the humans trying to use them.',
      'That is the real Blueprint. Not the stack. The connective tissue that lets someone other than me show up on Day 1 and still be productive by Day 3. If that part is missing, nothing scales.',
      'If you want a thinking partner while you build your own version of this, that\'s what the <a href="/coaching">coaching membership</a> is for. If you want to do it in person with a small group, the <a href="/retreat">Infinite Leverage Retreat</a> is in June. Three days, same questions, across a table.',
      'Read next: <a href="/blog/day-12-two-track-business-model">Day 12: The Two-Track Business Model</a> &middot; <a href="/blog/day-11-ai-mindset-shift-unlocked">Day 11: The AI Mindset Shift</a> &middot; <a href="/blog/day-10-coaching-assistant">Day 10: The Coaching Assistant</a>',
      'See you on Day 14.',
    ] },

    { tag: 'faq', question: 'What is the coordination tax in AI team building?', answer: 'The coordination tax is the productivity cost every team pays when a second person is added to a build. Instead of doubling output, each person drops to roughly 60% productive while they negotiate check-in and check-out, resolve code conflicts, and transfer context. The tax continues until a team invests in connective tissue: shared setup, clear standups, and explicit handoff rules. The term applies specifically to hybrid teams of humans and AI agents, where the non-coding human is also learning the engineering language (branches, commits, pull requests) as part of the coordination cost.' },
    { tag: 'faq', question: 'Why does adding a second person to an AI project cut productivity?', answer: 'Adding a second person to an AI project doesn\'t double output because the new work isn\'t building, it\'s coordinating. You have to check in and out of the same files, explain what you meant in the last standup, resolve conflicts the other person didn\'t see coming, and teach a non-coding teammate a new language of work. On a good day, each person runs at about 60% productive until the connective tissue (setup scripts, handoff rules, shared conventions) is built. Output becomes linear again only after that investment.' },
    { tag: 'faq', question: 'How do you coordinate humans and AI agents on the same project?', answer: 'Coordinating humans and AI agents requires three moves: a clean setup script so new humans can join without a week of onboarding friction, a daily standup where the agents report their work (so humans can observe instead of interrogate), and a single source of truth for specs so both humans and agents are working from the same map. The hardest of the three is setup. If setup is rough, the whole pattern doesn\'t travel beyond the one person who built it, and infinite leverage stays a solo pursuit.' },
    { tag: 'faq', question: 'What is the hardest part of building with AI agents?', answer: 'The hardest part of building with AI agents is not the first 80% (that feels fast) but the last 20%: polish and people. Polish is the detail that surfaces when a second person tries to use your system. People is every human beyond the founder who has to be coordinated in. Together they\'re where the real work lives, and where most founders underinvest.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is Dave Hajdu\'s 14-day public build-in-public series documenting the end-to-end creation of an AI-native coaching business using AI agents. Day 13 covers the coordination tax, the hidden productivity cost of adding humans to an agent-powered build.' },
  ],

  /* ================================================================ */
  /*  DAY 12                                                           */
  /* ================================================================ */
  'day-12-two-track-business-model': [
    { tag: 'pull-quote', text: 'Part of a daily series where I\'m building toward a one-man company in 14 days using the <a href="/blog/day-1-infinite-leverage-blueprint">Infinite Leverage Blueprint</a>. Day 12 was Sunday in Saigon, and the goal was simple. Get paid.' },

    { tag: 'p', text: 'By the time the day was done, the business could take money. Two different ways. I also walked the dog, got a workout in, and wrote some content. The whole thing took about four hours.' },
    { tag: 'p', text: 'I\'m telling you that not to flex. I\'m telling you because if you\'re a leader running a real business, your map of what a Sunday can hold is probably out of date. Mine was too, until this one.' },

    { tag: 'h2', text: 'What I actually built' },
    { tag: 'p', text: 'Before I touched Stripe, I made a decision.' },
    { tag: 'p', text: 'I wanted to sell two things.' },
    { tag: 'ol-item', text: '<strong>One-off events.</strong> The <a href="/retreat">Infinite Leverage Retreat</a> in June.' },
    { tag: 'ol-item', text: '<strong>Recurring memberships.</strong> An ongoing coaching program for people who want a thinking partner in their corner every week.' },

    { tag: 'p', text: 'Two tracks. The shape of a two-track business model. Different commitments, different journeys, same company. One for people ready to make a move in a weekend. One for people who know this is a year-long game.' },

    { tag: 'p', text: 'Once I knew what I was selling, the build was almost boring. <a href="https://www.claude.com/product/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a> handled the implementation. Stripe account. API keys. Environment variables. Workflows routing each purchase to the right place. A plan I reviewed before anything went live. A first test. It passed.' },

    { tag: 'p', text: 'The CRM got updated too. I added the two tracks to the company database so that a member and a retreat attendee each show up correctly in my little system of the world. By the end of the day, I had a working billing stack and a CRM that matched the business I actually want to run.' },

    { tag: 'html', html: '<figure class="my-8"><div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"><img src="/blog/images/day-12-gallery-1.webp" alt="CRM dashboard showing the two-track business model with events and members side by side" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /><img src="/blog/images/day-12-gallery-2.webp" alt="Database schema for the two-track business with separate events and members tables in Supabase" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /><img src="/blog/images/day-12-gallery-3.webp" alt="Claude Code wiring the Stripe integration and routing workflows for the two-track business model" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /></div><figcaption class="text-center text-xs text-muted-foreground mt-3 font-mono uppercase tracking-[0.08em]">Day 12 &middot; Two-track business model built with Claude Code and Stripe</figcaption></figure>' },

    { tag: 'p', text: 'The weird part is how little of it I did with my own hands. Most of the work happened while I was out with the dog. The agents handled it. My job was to be clear about what I wanted, review the plan before it shipped, and run the test.' },

    { tag: 'h2', text: 'What actually changed' },
    { tag: 'p', text: 'Five years ago, this same project would have looked completely different.' },
    { tag: 'p', text: 'It would have started with a scoping doc. A vendor review. A few conversations with a developer, or a proper engagement with a dev shop. Six weeks, easy. A real chunk of budget. A steering committee, if the company was big enough to have one.' },
    { tag: 'p', text: 'I\'m not saying the old way was wrong. It was the only way, and it worked.' },
    { tag: 'p', text: 'What I am saying is that the constraint moved. The thing that used to take weeks now takes an afternoon, as long as you\'re clear about what you want. And if you\'re not clear, no amount of developer hours is going to save you. You\'ll just build the wrong thing faster.' },
    { tag: 'pull-quote', text: 'That\'s the part I want you to sit with for a second.' },

    { tag: 'h2', text: 'The question most leaders are still answering wrong' },
    { tag: 'p', text: 'The old question, the one most leadership teams still burn meetings on, is some version of this. <em>Can we build it?</em>' },
    { tag: 'p', text: 'Can we build a subscription product. Can we build a second revenue line. Can we build the automation finance has been asking for. Can we build the dashboard the board keeps mentioning.' },
    { tag: 'p', text: 'That was the right question for a long time. It\'s not the right question anymore.' },
    { tag: 'emphasis-box', text: 'The real question is quieter and a lot harder. <strong>What are we actually selling, and to whom, at what level of commitment?</strong>' },
    { tag: 'p', text: 'Notice that\'s not an engineering question. It\'s a coaching question. It\'s the kind of thing you work out with a thinking partner, not a Jira board. It\'s the kind of thing a sprint can\'t solve, because it isn\'t a sprint problem. It\'s a clarity problem.' },
    { tag: 'callout', label: 'Why It Matters', text: 'Most leaders I coach are still treating the old question like it\'s the hard part. They haven\'t let themselves believe the build is almost free. So they don\'t run the experiments. They don\'t test the second track. They don\'t ship the member version because they\'re convinced it\'s a six-month project. Meanwhile, on some Sunday, somewhere, someone who figured out the new question is quietly pulling ahead.' },

    { tag: 'h2', text: 'Where Day 12 leaves us' },
    { tag: 'p', text: 'Tomorrow the marketing team gets cleaned up. After that, outreach and customer service. Two more days to round out the series, and then a pause to see what 14 days of this actually compressed into.' },
    { tag: 'p', text: 'But before you close the tab, here\'s the question I\'d want to sit with if you and I were in the same room.' },
    { tag: 'pull-quote', text: 'What revenue model would you test this week if the build took an afternoon?' },
    { tag: 'p', text: 'Not the one your team has been debating for a quarter. The one you\'ve been quietly curious about and keep shelving. Write it down, even if it\'s half-baked. Especially if it\'s half-baked.' },
    { tag: 'p', text: 'If you want a thinking partner while you work that out, that\'s what the coaching membership is for. You bring the half-baked idea. We get it sharper together, week after week. <a href="/coaching">Become a member</a>.' },
    { tag: 'p', text: 'If you want to go faster and in person, the <a href="/retreat">Infinite Leverage Retreat</a> is in June. A few days, a small group, and you leave with your own two-track (or three-track) build sketched out and the first pieces already in motion.' },

    { tag: 'stat-callout', stats: [
      { value: '4 hrs', label: 'Sunday Build Time', color: 'blue' },
      { value: '2', label: 'Revenue Tracks Live', color: 'magenta' },
      { value: '0', label: 'Developers Hired', color: 'mint' },
    ] },

    { tag: 'conclusion-box', title: 'Day 12 of 14', paragraphs: [
      'Two days left.',
      'Twelve days in, the system doesn\'t just run. It takes money. It routes attendees and members into separate tracks. It updates itself while I\'m out of the room. None of which was built by hand in the way that phrase used to mean.',
      'Here\'s what I keep coming back to. The build being trivial isn\'t the interesting part. The interesting part is what that frees you up to care about. Positioning. Pricing. Who you\'re really for. What a weekend-level move actually looks like versus a year-long one. The stuff that used to get squeezed by the implementation tax is the whole job now.',
      'That\'s a different kind of leadership muscle. And it\'s the one every founder I coach is figuring out how to grow.',
      'Read next: <a href="/blog/day-11-ai-mindset-shift-unlocked">Day 11: The AI Mindset Shift</a> &middot; <a href="/blog/day-10-coaching-assistant">Day 10: The Coaching Assistant</a> &middot; <a href="/blog/founder-stack-you-dont-need-to-become-technical">You Don\'t Need to Become Technical. You Need a Stack.</a>',
      'See you on Day 13.',
    ] },

    { tag: 'faq', question: 'What is a two-track business model?', answer: 'A two-track business model sells to the same audience through two distinct paths: one-off events or products for people who want a single, high-commitment move, and recurring memberships or subscriptions for people who want an ongoing relationship. The two tracks share an audience and value system but serve different readiness levels, which lets you capture revenue at both ends of the commitment spectrum.' },
    { tag: 'faq', question: 'How long does it take to build a two-track business model with Claude Code?', answer: 'With clear decisions about what you\'re selling and to whom, the full build (Stripe integration, workflow routing, CRM updates) can be completed in a single afternoon using Claude Code as your implementation agent. The bottleneck is no longer engineering time. It\'s the clarity of the business decisions behind the build.' },
    { tag: 'faq', question: 'Why combine recurring memberships with one-off events?', answer: 'Different people buy at different commitment levels. A one-off event like a retreat serves people ready to make a weekend-level move. A recurring membership serves people who know their transformation is a year-long journey. Running both tracks means you\'re not forcing your audience to pick one readiness state, which broadens your revenue base without splintering your positioning.' },
    { tag: 'faq', question: 'Can Claude Code set up a Stripe integration without a developer?', answer: 'Yes. A non-technical founder can use Claude Code to set up Stripe API keys, environment variables, product configurations, and routing workflows in a few hours, provided the business decisions about pricing, products, and customer journeys are already clear.' },
    { tag: 'faq', question: 'What is an AI-native business model?', answer: 'An AI-native business model is built so that AI agents handle the majority of execution work like building, routing, responding, and analyzing, while the human operator focuses on decisions, judgment, positioning, and relationships. The operating assumption is that implementation is cheap and fast; clarity of direction is the scarce resource.' },
    { tag: 'faq', question: 'What is the Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is Dave Hajdu\'s 14-day public build-in-public series documenting the end-to-end creation of an AI-native coaching business using AI agents. Day 12 covers billing, CRM, and the two-track business model setup.' },
  ],

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

    { tag: 'html', html: '<figure class="my-8"><div class="grid grid-cols-2 gap-3 sm:gap-4"><img src="/blog/images/day-11-gallery-1.webp" alt="TK Nguyen and his video team during the Day 11 Infinite Leverage Blueprint install session" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /><img src="/blog/images/day-11-gallery-2.webp" alt="Working through the AI marketing team install with TK Nguyen at Lumiere in Nha Trang" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /><img src="/blog/images/day-11-gallery-3.webp" alt="TK Nguyen asking what he would have his agents do first during the Day 11 session" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /><img src="/blog/images/day-11-gallery-4.webp" alt="The GAM Entertainment video team sketching out their first AI agent lineup during Day 11" loading="lazy" class="w-full h-auto rounded-xl border border-[#E5E7EB] shadow-sm" /></div><figcaption class="text-center text-xs text-muted-foreground mt-3 font-mono uppercase tracking-[0.08em]">Day 11 &middot; Infinite Leverage install with TK Nguyen and the GAM team</figcaption></figure>' },

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
