import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 5                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_5: Post[] = [
  {
    slug: 'everybody-needs-a-coach',
    title: 'Everybody Needs a Coach (Including Me)',
    titleAccent: 'Including Me',
    subtitle: 'Thirty years of being coached by Dr Holtom, the question I asked over coffee that became Leadership in the AI Era, and the gap an AI executive coach is built to fill.',
    excerpt: 'Every leader you admire is being coached. Most of them by several people. Often for decades. Here is what coaching actually looks like, and what to do about the moments between.',
    date: 'May 3, 2026',
    readTime: '6 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'AI executive coach for senior leaders',
      'AI executive coach',
      'AI leadership coach',
      'AI coaching for executives',
      'CAIO Coach',
      'AI coach for founders',
      'executive coaching with AI',
      'Leadership in the AI Era',
      'Dr Brooks Holtom',
    ],
    image: '/blog/images/everybody-needs-a-coach.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_5: Record<string, Block[]> = {
  'everybody-needs-a-coach': [
    { tag: 'p', text: "You've been doing this long enough. You're senior. You're the one people come to." },
    { tag: 'p', text: 'So when did you stop being coached?' },
    { tag: 'p', text: "I want to tell you about the people who coach me. Not because I have it figured out, but because I think you might be telling yourself a story I used to tell myself. The story that says: I should be past needing this." },
    { tag: 'pull-quote', text: "You're not past it. Neither am I." },

    { tag: 'h2', text: 'The professor who never stopped showing up' },
    { tag: 'p', text: "In the late 1990s I was an undergrad at the University of Washington. I took a negotiations class from a PhD student named <a href=\"https://gufaculty360.georgetown.edu/s/contact/00336000014TvAEAA0/brooks-c-holtom\" target=\"_blank\" rel=\"noopener noreferrer\">Dr Brooks Holtom</a>. I did not know it at the time, but he would coach me, in different forms, for the next three decades." },
    { tag: 'p', text: "A few years after graduating, I looked him up. He had moved to <a href=\"https://msb.georgetown.edu/mba/\" target=\"_blank\" rel=\"noopener noreferrer\">Georgetown</a>, the same campus where my father had done his PhD coursework. My dad and I made a trip out to DC together to visit him. We had coffee. He asked me what I was working on. He listened." },
    { tag: 'image', src: '/blog/images/dad-dave-georgetown.webp', alt: 'Dave and his father at Georgetown, on the trip to visit Dr Holtom', caption: 'My dad and me at Georgetown. The visit that started this thread.' },
    { tag: 'p', text: 'When I started TINYpulse a while later, he became one of our advisors. By then he had become one of the most cited authors in the world on employee retention. He could have been advising anyone. He chose to advise us.' },
    { tag: 'image', src: '/blog/images/dr-holtom-tinypulse.webp', alt: 'Dr Holtom during the TINYpulse era', caption: 'Dr Holtom in the TINYpulse era. Advisor, sounding board, friend.' },
    { tag: 'p', text: 'A couple of years ago, he called me again. He was bringing his <a href="https://msb.georgetown.edu/mba/" target="_blank" rel="noopener noreferrer">Georgetown Executive MBA</a> students to Vietnam, and he wanted me to speak to them about negotiating internationally as an expat in Asia. We had coffee in Saigon. I asked him a question.' },
    { tag: 'image', src: '/blog/images/dr-holtom-dave-dao.webp', alt: 'Dr Holtom, Dave, and Dao Nguyen in Saigon', caption: 'Coffee in Saigon with Dr Holtom and Dao Nguyen. The conversation that became Leadership in the AI Era.' },
    { tag: 'blockquote', text: 'What is academia actually doing on AI right now?' },
    { tag: 'p', text: 'His honest answer was, not much yet.' },
    { tag: 'p', text: "A few months later, I called him back. We started building something together, with my partner <a href=\"https://davidnilssen.com\" target=\"_blank\" rel=\"noopener noreferrer\">David Nilssen</a>, under the AI Officer Institute. <em><a href=\"https://www.ai-officer.com/leadership-training\" target=\"_blank\" rel=\"noopener noreferrer\">Leadership in the AI Era</a></em>. Built around the leadership work Dr Holtom has been teaching for years, with the AI angle layered on top by people who actually run companies." },
    { tag: 'p', text: "Today, that program is part of Dr Holtom's Georgetown Executive MBA teaching. In July, he is taking it to two days at Georgetown University in Washington, DC. David Nilssen and I are joining him." },
    { tag: 'emphasis-box', text: "Stop and notice what you just read. <strong>That is not we built a program. That is thirty years of coaching.</strong> Someone showing up, listening, asking the right question at the right time, making the introduction, picking up the phone." },

    { tag: 'h2', text: 'The other coaches' },
    { tag: 'p', text: 'Dr Holtom is not the only one.' },
    { tag: 'p', text: '<a href="https://richpham.com" target="_blank" rel="noopener noreferrer">Rich Pham</a>, <a href="https://www.linkedin.com/in/harleyt/" target="_blank" rel="noopener noreferrer">Harley Trung</a>, and <a href="https://raymondchou.me/" target="_blank" rel="noopener noreferrer">Ray Chou</a> sat through the rough versions of this program. Each one of them gave me notes I did not want to hear. Each one of them made it better. The polish that lets me deliver this work to senior executives did not come from one room. It came from many rooms, with patient friends willing to sit through the version that was not yet good.' },
    { tag: 'p', text: '<a href="https://www.daonguyenlegal.com/" target="_blank" rel="noopener noreferrer">Dao Nguyen</a>, regularly recognised as one of the top 50 lawyers in Asia, co-taught the Vietnam negotiations session with me when I knew I was not the right person to teach it alone. She did not have to. She did anyway. She coached me through it in real time, in front of a room of Georgetown EMBA students. That is a kind of coaching most people never see, because it happens at the front of a room.' },
    { tag: 'image', src: '/blog/images/dao-nguyen-speaking.webp', alt: 'Dao Nguyen speaking to the Georgetown EMBA cohort', caption: 'Dao at the front of the room. Coaching me in real time, in front of an audience.' },
    { tag: 'image', src: '/blog/images/selfie-georgetown-emba.webp', alt: 'With the Georgetown Executive MBA cohort in Vietnam', caption: 'With the Georgetown EMBA cohort after the session.' },
    { tag: 'p', text: 'Janki, the President of <a href="https://www.eoperth.com.au/" target="_blank" rel="noopener noreferrer">EO Perth</a>, showed me what was possible by building her own AI program before I had the courage to build mine. Nhan, the President of <a href="https://eovietnam.org" target="_blank" rel="noopener noreferrer">EO Vietnam</a>, helped pilot <em>Leadership in the AI Era</em> in my home chapter when it was still rough. They coach me on what to do next, and what not to do, every time we talk.' },
    { tag: 'p', text: 'David Nilssen, my partner on this program, coaches me through every decision we make together. Every disagreement is coaching, if you let it be.' },
    { tag: 'p', text: 'I am leaving people out. There are more.' },

    { tag: 'h2', text: 'What I want you to notice' },
    { tag: 'p', text: 'Every person you admire is being coached. Most of them by several people. Often for decades.' },
    { tag: 'p', text: 'The leaders who pretend otherwise are usually the ones who have stopped growing. Notice the difference between someone who learned everything they know by 35 and someone who is still learning at 55. The second person has coaches. The first person has stopped listening.' },
    { tag: 'p', text: 'Here is the question I would ask you, if we were sitting across from each other right now.' },
    { tag: 'pull-quote', text: 'Who is coaching you?' },
    { tag: 'p', text: 'If you have an answer, say their name out loud. Then say what they have been teaching you. Then ask yourself if you have thanked them lately.' },
    { tag: 'p', text: 'If you do not have an answer, that is the more important data point. A leader without coaches is a leader who has decided they are done, even if they would not say it that way.' },

    { tag: 'h2', text: 'The gap that keeps coming up' },
    { tag: 'p', text: 'The leaders I work with all have a version of the same problem.' },
    { tag: 'p', text: 'They have human coaches. They are not bereft. But there is a gap.' },
    { tag: 'p', text: 'The questions you actually have do not show up at coaching time. They show up at 11pm on a Tuesday when you are looking at a Slack thread and trying to figure out how to respond. They show up at 6am when you are walking and your brain finally has a minute. They show up between meetings, when you have ninety seconds and a decision to make.' },
    { tag: 'p', text: 'A human coach is not at the end of those moments. By the time you can ask the question, the moment has passed.' },
    { tag: 'emphasis-box', text: "<strong>This is the gap the CAIO Coach was built for.</strong> It is not a replacement for the humans who coach you. It cannot pick up the phone the way Dr Holtom did. It cannot sit through the rough version the way Rich did. It cannot co-teach the way Dao did. But it is there at 11pm. And at 6am. And in the ninety seconds between meetings." },
    { tag: 'p', text: 'I built it because I noticed I was leaving most of my best questions unanswered, because the people I would have asked were asleep on the other side of the world.' },

    { tag: 'h2', text: "Try it. Then tell me who's coaching you." },
    { tag: 'p', text: 'If you want to feel what I am describing, take a free CAIO Coach session. Ask it the question that has been sitting with you this week. Notice what comes back.' },
    { tag: 'p', text: 'Then send me a DM and tell me who is coaching you. I want to know.' },
    { tag: 'conclusion-box', title: 'Find your people. And in the moments between, find a thinking partner.', paragraphs: [
      'Take a free CAIO Coach session and notice what comes back.',
      "Then DM me at <a href=\"https://www.linkedin.com/in/davehajdu\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a> and tell me who is coaching you.",
      "Read next: <a href=\"/blog/founder-built-product-5-days-instead-3-months\">How a Founder Built His Product in 5 Days Instead of 3 Months</a> &middot; <a href=\"/blog/founder-stack-you-dont-need-to-become-technical\">You Don't Need to Become Technical, You Need a Stack</a>",
    ] },

    { tag: 'faq', question: 'What is an AI executive coach?', answer: 'An AI executive coach is an always-on coaching agent that engages senior leaders in reflective dialogue, surfaces blind spots, and helps them think through decisions in the moments when a human coach is not available. The CAIO Coach is positioned as a complement to human coaching, not a replacement. It fills the gap between scheduled coaching sessions, when most leadership questions actually arise.' },
    { tag: 'faq', question: 'How is the CAIO Coach different from a human executive coach?', answer: 'A human executive coach offers depth, accountability, and the kind of presence that comes from a long relationship. The CAIO Coach offers immediacy and access. It is awake at 11pm on a Tuesday when a Slack thread needs a response, and at 6am when you have ninety seconds between meetings. It is not a substitute for a human coach, and it is not a substitute for a peer group like the Entrepreneurs Organization. It is the thinking partner you reach for in the moments between.' },
    { tag: 'faq', question: 'Who should use the CAIO Coach?', answer: 'Senior leaders, founders, and executives who already have human coaches but want a thinking partner for the questions that arise outside of scheduled coaching time. Also a strong fit for high-performers ready to deepen their AI fluency through reflective practice rather than another course.' },
    { tag: 'faq', question: 'How do I try the CAIO Coach?', answer: 'Start a free session at caiocoach.com. Bring a question that has been sitting with you this week. Notice what comes back. If it is useful, send Dave Hajdu a direct message and tell him who is coaching you outside of CAIO Coach.' },
  ],
};
