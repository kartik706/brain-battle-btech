# Brain Battle — B.Tech Mini Project

A responsive, browser-based learning and assessment platform for B.Tech students. It uses plain HTML/CSS/JavaScript in the frontend and Firebase Authentication + Realtime Database for online rooms and the question bank. Run `index.html` through VS Code Live Server; publish the same folder to a static host for a shareable public URL.

## Features in this version

- Five subjects: Data Structures, COA, DSTL, Cyber Security, and Digital Electronics
- 75 starter MCQs: five questions for each subject at each of three difficulty levels
- Admin email/password sign-in, question add/edit/delete, JSON import/export, and starter-bank load
- Room code for a two-player quiz, same question for both players, shared round start time
- Difficulty-based timers: Easy 45 sec, Medium 60 sec, Hard 75 sec
- Adaptive round difficulty: if both players answer correctly, the next question gets harder; if both miss, it gets easier; otherwise it stays at the same level
- Correct-answer points, speed bonus, and streak points
- Solo practice with answer explanations and topic-level battle report
- One 50/50 power-up per match, recent match history, and XP leaderboard

## Firebase setup (one-time)

1. In Firebase Console, create a project and register a **Web app**.
2. Copy the web config values into `firebase-config.js`. Replace every `YOUR_...` placeholder. Copy the Realtime Database URL from the Realtime Database page.
3. In Authentication → Sign-in method, enable **Anonymous** and **Email/Password** providers.
4. In Authentication → Users, add your admin email and password. Put that exact email in `firebase-config.js` as `adminEmail`.
5. In Realtime Database, create a database.
6. Open `database.rules.json`, replace `ADMIN_EMAIL` with your admin email, then paste those rules into Realtime Database → Rules and click Publish.
7. Run the app with Live Server. Choose **Admin login** and sign in. Select **Load starter bank** to add the 75 questions to Firebase.


Firebase Auth and database rules control who can access data. The sample room rules are intentionally simple for a college demonstration; they do not prevent a malicious player from tampering with game data. The answer key is sent to browsers in this prototype, so it is not a secure exam system. A production version needs server-side answer validation and stricter per-room rules.

## Run locally

1. Extract the ZIP and open the extracted project folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` → **Open with Live Server**.
4. Complete Firebase setup above. Player 1 creates a room and shares the 5-character room code; Player 2 opens the same URL and joins.

The players may be on different networks. Live Server is only for your local preview; Firebase provides the shared online room.

## Publish a public URL later

Upload the configured folder to a static host such as GitHub Pages. Add the deployed domain under Firebase Authentication → Settings → Authorized domains. Share the HTTPS link with the opponent. No Python server is needed for the frontend.

## Project structure

- `index.html` — pages and Firebase SDK scripts
- `style.css` — responsive charcoal, violet, coral, and mint visual theme
- `app.js` — admin panel, battle rooms, timer, scoring, adaptive rounds, practice and report
- `question-bank.js` — 75 starter questions
- `firebase-config.js` — Firebase web config and admin email placeholders

## Presentation notes

Describe it as a B.Tech-focused real-time learning and assessment platform. Existing quiz platforms are competitors; the project’s scope is its five-subject question bank, same-question 1v1 rounds, adaptive shared difficulty, long level-based timers, and topic-level review. Do not claim that no similar app exists. Explain that this is an academic prototype and list production security as future scope.





