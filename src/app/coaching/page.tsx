import type { Metadata } from 'next';
/* eslint-disable @next/next/no-img-element */
import CoachingSignupForm from '@/components/CoachingSignupForm';
import { getUpcomingCoachingDates } from '@/lib/coaching-dates';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'AI Executive Coaching - CAIO Coach',
  description:
    'Weekly live AI coaching sessions with Dave Hajdu. Bring your real AI challenges and get coached in real time. Included with CAIO Coach certification.',
  openGraph: {
    title: 'AI Coaching for Executives - CAIO Coach',
    description:
      'Weekly live AI coaching with Dave Hajdu. Group sessions for $99/month or private 1:1. Bring your real challenges and get coached in real time.',
    type: 'website',
    url: 'https://www.caiocoach.com/coaching',
  },
};

export default function CoachingPage() {
  const coachingDates = getUpcomingCoachingDates(3);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`page-container ${styles.heroInner}`}>
          <div>
            <div className={styles.tagRow}>
              <span className="tag">
                <span className={`dot ${styles.pulseDot}`} />
                Live next session · Thursday
              </span>
              <span className="tag tag-muted">11:30 AM GMT+7</span>
            </div>
            <h1 className={styles.display}>
              Bring
              <br />
              the hard
              <br />
              problems.
            </h1>
            <p className={styles.lede}>
              Every week, members submit the AI challenges they&apos;re facing. Dave works
              the top topics live, on camera, with the group in the room.
            </p>
            <div className={styles.ctaRow}>
              <a className="btn btn-primary" href="#submit">
                Submit a challenge
              </a>
              <a className="btn btn-ghost" href="#past">
                See past sessions
              </a>
            </div>
          </div>

          <aside className={styles.sessionCard}>
            <div className={styles.label}>Next session · 001</div>
            <div className={styles.date}>Thu · 23 Apr 2026 · 11:30 GMT+7</div>
            <div className={styles.title}>Building routines that stick.</div>
            <p className={styles.blurb}>
              The routines layer of an AI-native operation. Daily check-ins, weekly
              rhythms, monthly reviews - how to design the cadence that keeps your AI
              team moving instead of quietly drifting.
            </p>
          </aside>
        </div>
      </section>

      {/* PAST + SIGNUP */}
      <section className="sec" id="past">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">01 / Past sessions</div>
            <div>
              <h2 className="t-h1">What the room has been working on.</h2>
              <p className="sub">
                Every topic was submitted by a member. Every answer was worked live in
                under 30 minutes.
              </p>
            </div>
          </div>

          <div className={styles.split}>
            <div className={styles.sessionList}>
              <div className={styles.session}>
                <div className={styles.metaCol}>
                  <span className={styles.date}>09 Apr · 2026</span>
                  <span className={styles.sessNo}>Session · 002</span>
                </div>
                <div className={styles.topics}>
                  <div className={styles.topic}>
                    <div className={styles.avatar}>
                      <img src="/images/dru-nguyen-headshot.webp" alt="Dru" />
                    </div>
                    <div>
                      <div className={styles.topicName}>Dru</div>
                      <div className={styles.topicTitle}>
                        Setting up folder structure in Cowork &amp; automating social.
                      </div>
                      <p className={styles.topicBlurb}>
                        How to organise a Cowork project with the right folder
                        structure and instructions so Claude stays on-brand, then
                        building a workflow to automate social media content end to end.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>1 topic</div>
              </div>

              <div className={styles.session}>
                <div className={styles.metaCol}>
                  <span className={styles.date}>02 Apr · 2026</span>
                  <span className={styles.sessNo}>Session · 001</span>
                </div>
                <div className={styles.topics}>
                  <div className={styles.topic}>
                    <div className={styles.avatar}>
                      <img src="/images/eric-enriquez-headshot.webp" alt="Eric" />
                    </div>
                    <div>
                      <div className={styles.topicName}>Eric</div>
                      <div className={styles.topicTitle}>
                        Building a website with AI - Bhutan travel project.
                      </div>
                      <p className={styles.topicBlurb}>
                        Used Cowork to plan, brand, and build a full project website
                        from scratch - starting with a strategy brief in chat and
                        ending with a live Gantt chart for tracking milestones.
                      </p>
                    </div>
                  </div>
                  <div className={styles.topic}>
                    <div className={styles.avatar}>
                      <img src="/images/julien-head-shot.webp" alt="Julien" />
                    </div>
                    <div>
                      <div className={styles.topicName}>Julien</div>
                      <div className={styles.topicTitle}>
                        Power BI dashboard migration with Cowork.
                      </div>
                      <p className={styles.topicBlurb}>
                        Walked through using Claude to accelerate a Power BI migration
                        - setting up data context, writing DAX with AI assistance, and
                        building a repeatable Cowork workflow for future reports.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>2 topics</div>
              </div>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column' }} id="submit">
              <div className={styles.sidecard}>
                <h4>Submit a challenge</h4>
                <p>
                  Every submission is reviewed. The most applicable problems get worked
                  live on Thursday.
                </p>
              </div>
              <div className={styles.sidecard}>
                <CoachingSignupForm dates={coachingDates} />
              </div>
              <div className={styles.sidecard}>
                <h4>Session details</h4>
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <span className={styles.k}>When</span>
                    <span className={styles.v}>
                      Every Thursday
                      <span className={styles.s}>Weekly, no breaks</span>
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.k}>Time</span>
                    <span className={styles.v}>
                      11:30 - 13:30
                      <span className={styles.s}>GMT+7 · Bangkok / Hanoi / Jakarta</span>
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.k}>Where</span>
                    <span className={styles.v}>
                      Live on AIO Labs
                      <span className={styles.s}>Recorded · watch back anytime</span>
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.k}>Deadline</span>
                    <span className={styles.v}>
                      Tuesday 16:00 GMT+7
                      <span className={styles.s}>To be considered for the session</span>
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="sec">
        <div className="page-container">
          <div className="sec-head">
            <div className="idx">02 / Plans</div>
            <div>
              <h2 className="t-h1">Group or private.</h2>
              <p className="sub">
                Weekly group coaching at $99/month, or focused private work with Dave by
                arrangement.
              </p>
            </div>
          </div>

          <div className={styles.plansGrid}>
            <div className={styles.plan}>
              <div className="t-eyebrow">Group coaching</div>
              <div className="t-h1">Weekly live sessions</div>
              <div className={styles.priceRow}>
                <span className={styles.planPrice}>$99</span>
                <span className={styles.planPer}>/ month</span>
              </div>
              <p className="t-body">
                Weekly live coaching. Submit your topics. Get real-time guidance on your
                situation. Certification included.
              </p>
              <a
                className="btn btn-primary"
                href="https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 'auto' }}
              >
                Join for $99 / month
              </a>
            </div>
            <div className={styles.plan}>
              <div className="t-eyebrow">Private coaching</div>
              <div className="t-h1">One-on-one with Dave</div>
              <div className={styles.priceRow}>
                <span className={styles.planPrice}>-</span>
                <span className={styles.planPer}>By arrangement</span>
              </div>
              <p className="t-body">
                Dedicated 1:1 sessions. Custom AI roadmap for your organisation. Team
                coaching and enablement. Limited availability.
              </p>
              <a
                className="btn btn-ghost"
                href="mailto:dave@edge8.ai"
                style={{ marginTop: 'auto' }}
              >
                Enquire →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
