# Mission France Miniature — passé composé

A standalone classroom game covering present/passé composé recognition, infinitive/participle matching, ending patterns, a cyberpunk side quest, and a 12-question individual exit ticket.

**No student login, ChatGPT account, backend, API key or installation is required.** All images, meme reactions, styles, questions and the PDF generator are embedded in `index.html`.

## Play offline

Download or extract this folder, then open **index.html** in a normal browser. No internet connection is needed after downloading the game. A school platform's embedded preview may block scripts; download the file and open it directly instead.

## Publish with GitHub Pages

1. Create a repository, for example `mission-france-miniature`. A public repository works with GitHub Free.
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the root, not inside an extra wrapper folder. Include `.nojekyll` when uploading through Git or another method that includes hidden files.
3. Commit the files to your main branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select your branch, choose **/(root)**, and save.
6. Open the site URL shown by GitHub Pages once deployment completes. Share that **website URL** with students, rather than the repository page.

Use a publicly accessible Pages site so pupils can open it without signing in. The teacher/repository owner needs a GitHub account to publish; students do not need a GitHub or ChatGPT account to play the public site. The offline HTML file is also available as a no-login alternative.

No build command, npm installation or custom workflow is needed. GitHub's official instructions cover [publishing from a branch and root folder](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [Pages availability](https://docs.github.com/en/pages/quickstart).

## What is included

- **index.html** — the latest complete game, including the corrected matching layout.
- **teacher-guide.md** — timing, classroom setup, the paper exit ticket, answer key and reporting details.
- **Exit_Ticket_Question_Bank.json** — the 12-question exit-ticket bank.
- **Neon_Side_Quest_Bank.json** — the 20 regular verbs, their avoir forms, contexts and ending matches.
- **Example_Student_Report.pdf** — a sample report using fictitious student answers.
- **tests/** — optional Node.js checks for matching, progression, grammar, retries, saved state and PDF generation.
- **tools/export-question-banks.mjs** — regenerates the JSON mirrors from the HTML.
- **LICENSES/pdf-lib-MIT.txt** — license for the embedded PDF generator.

The game keeps the full original reading passage. The production tasks and side quest use regular participle models with **avoir**. The original reading also contains irregular/passive forms for recognition.

## Lesson sequence

1. Classify 24 present/passé composé groups in the full original text. Commands and infinitives remain as plain text.
2. Identify the subject, auxiliary and past participle.
3. Match six infinitives to their participles. Correct pairs move into aligned result rows.
4. Match three ending patterns: the selected models in **-er → -é**, **-ir → -i**, and **-re → -u**.
5. Restore four cyberpunk relays: **20 typed participles**, then **20 typed avoir + participle constructions using the same verbs**.
6. Complete six monument challenges and the 12-question individual exit ticket.
7. Download the report as PDF and submit it using the teacher's normal channel.

Allow roughly 70–80 minutes with the side quest, or split it across two sessions. The game has no timer.

## Reports and saved progress

The PDF records expected answers, every submitted response, outcomes, tries, errors, retries and whether feedback or a model preceded a response. The first exit-ticket score stays separate from the corrected result. CSV export is also available.

Progress is stored in the current browser where local storage is available. Moving between the local file and a hosted site does not transfer saved progress. There is no central dashboard and no automatic report submission. Export before replaying or changing devices.

## Edit the questions later

The running game's source of truth is **index.html**:

- Search for **EXIT_BANK** to edit the exit ticket.
- Search for **NEON_BANK** to edit the side-quest verbs, participles, subjects, avoir forms and sentence contexts.
- Search for **endingPatterns** to edit the three pattern matches.

The JSON files are readable mirrors; changing them alone does not change the game. After editing the HTML, optionally regenerate them with:

```bash
node tools/export-question-banks.mjs
```

Use new question IDs when changing an item's meaning. If you later add irregulars or *être*, update the scope labels, examples, expected answers, accepted alternatives and feedback together. No irregular or *être* production questions are enabled in this version.

## Optional developer checks

Node.js is needed only for these checks, not for playing or publishing:

```bash
node tests/verify-neon.mjs
node tests/verify-report.mjs
```

The report check writes fictitious test results inside `.test-output/`. The tests do not require npm packages or network access.

## Included dependency

The game embeds **pdf-lib 1.17.1**, licensed under MIT; its notice is retained in the HTML and in `LICENSES/`. The supplied meme files are embedded unchanged. No additional third-party software is downloaded when students play.
