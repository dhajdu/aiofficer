# AI Program Building Guide

Use this guide whenever you need to build a new AI-powered workflow. Walk through the steps in order — don't skip ahead. Steps 1–3 are structured: answer the questions before moving on. Steps 4–5 are collaborative: Claude will take the lead based on what you've defined.

---

## Step 1: Define the Problem

Before building anything, get crystal clear on what you're solving.

Answer these questions:

- **What is the problem you're trying to solve?** Describe it in plain language.
- **Who has this problem?** Is it you, your team, a client, a customer?
- **What does "solved" look like?** What's the output or outcome when this works?
- **How is this being handled today?** Manual process, not at all, badly?
- **How often does this need to happen?** Once, daily, weekly, on-demand, triggered by an event?

Don't move to Step 2 until you can clearly articulate: *"The problem is _____, and when it's solved, _____ happens."*

---

## Step 2: Decide What Data It Needs

Now figure out what information the program needs to do its job.

Answer these questions:

- **What inputs does this need to run?** Files, text, data from an API, user responses, etc.
- **Where does that data live today?** Google Drive, a database, email, someone's head, a spreadsheet?
- **Is the data available right now, or does something need to be built to collect it?**
- **Does the data change?** Is it static or does it update over time?
- **Are there any sensitivities?** Customer data, financial info, anything requiring access controls?

By the end of this step you should have a clear list: *"This program needs X, Y, and Z as inputs, and they come from A, B, and C."*

---

## Step 3: Build the Steps

Map out the workflow from start to finish. Think of it as: if you were explaining this process to a new hire, what would the steps be?

Answer these questions:

- **What is the first thing that happens?** What kicks this off?
- **Walk through each step in order.** What happens, then what, then what?
- **Which steps need a human?** Where does someone need to review, approve, or make a decision?
- **Which steps could an AI handle?** Where is the AI doing the heavy lifting?
- **Which steps are app integrations?** Where does data move between tools or systems automatically?
- **What's the final output?** A document, a message, a decision, an update somewhere?

Write it out as a numbered list. Be specific. For example:

> 1. New support ticket comes in via email.
> 2. AI reads the ticket and categorizes it (bug, feature request, question).
> 3. AI drafts a response based on category and knowledge base.
> 4. Human reviews the draft and edits if needed.
> 5. Human sends the response.
> 6. AI logs the interaction and updates the tracker.

**Once you've mapped your steps, Claude will build a visual workflow diagram.** This diagram will label each step as Human, AI, or App Integration so you can look at the entire flow and judge whether it makes sense — as if you were an employee being handed this process on day one.

---

## Step 4: Translate the Workflow into AI Instructions

**Claude takes the lead here. This is the step most people cannot do on their own.**

You've defined the workflow. Now Claude needs to translate it into language that AI can actually execute. This matters because your workflow contains three types of steps — human actions, AI-powered steps, and app integrations — and each one needs to be handled differently:

- **Human steps** need clear handoff points: what does the person receive, what are they deciding, and where does their output go next?
- **AI steps** need precise instructions: what data comes in, what the AI should do with it, what format the output should be in, and what guardrails to set.
- **App integration steps** need defined triggers and data mappings: what fires the integration, what data passes through, and what the expected result is.

Claude will take your workflow from Step 3 and write the full set of instructions for every AI-powered step. You review them, pressure-test them, and refine them together until they're right.

To kick this off, just say: *"Here's my workflow — please write the AI instructions for it."* Then paste or reference what you built in Steps 1–3.

---

## Step 5: Deploy and Schedule

**Claude tells you exactly how to get this running.**

The workflow is defined. The instructions are written. Now you need to ship it. Claude will walk you through each of these and tell you specifically what to do:

- **Where does this live?** What repo, what structure, what files need to be created.
- **Does it need a schedule?** If so, Claude will specify the cron schedule and explain how to set it up.
- **How do you deploy it?** Step-by-step: what to commit, where to push, what to configure.
- **How does the team access it?** Exactly how other people will trigger or interact with the workflow.
- **What does monitoring look like?** How you'll know it's working and what to do when it breaks.

This isn't advisory — Claude should give you concrete instructions you can follow to get the program live.

---

## Quick Reference

| Step | You Do | Claude Does |
|------|--------|-------------|
| 1. Define the Problem | Answer the questions | Ask follow-ups if anything is unclear |
| 2. Decide What Data It Needs | Identify inputs and sources | Help you think through gaps |
| 3. Build the Steps | Map the workflow | Build a visual workflow diagram |
| 4. Translate to AI Instructions | Review and refine | Write the prompts, handoffs, and integration logic |
| 5. Deploy and Schedule | Follow the instructions | Tell you exactly how to deploy, schedule, and monitor |
