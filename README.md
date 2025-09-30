1. Prerequisites

Node.js (v14 or newer)
MongoDB (local or remote)

2. Installation
Clone the repository
bash
git clone https://github.com/nishikasingh31/Online-Quiz-API.git
cd Online-Quiz-API

3.
Install dependencies
bash
npm install

4. Set up environment variables
Create a .env file in the project root.
Example:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/online-quiz

5. Running the Project
Start the server in development mode:
bash
npm run dev
Or start normally:
npm start

6. API Endpoints
- `POST /api/quizzes` - Create a quiz
- `POST /api/quizzes/:quizId/questions` - Add questions to a quiz
- `GET /api/quizzes` - List all quizzes
- `GET /api/quizzes/:quizId/questions` - Get questions for a quiz
- `POST /api/quizzes/:quizId/submit` - Submit answers and receive score

7. Deployment
To deploy your app:
- Host on any Node.js compatible platform (Heroku, Vercel, DigitalOcean, AWS, etc.)
- Set your environment variables (`PORT`, `MONGODB_URI`) on your host
- Use your host’s recommended method to start the Node.js app
