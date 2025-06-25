# Full_Stack_AI_Chatbot
This is a full stack AI chatbot. The frontend is made with HTML, CSS, and JavaScript. The backend is made with Flask (Python). It connects to the Google Gemini API to answer the questions like ChatGPT.

1. Project Setup
The project is organized into clearly defined folders for frontend, backend, and output assets.

The UI/ folder contains all the frontend components, including the main index.html page, the scripts/app.js file that controls user interactions and API calls, and the styles/style.css file used to style the chatbot interface.

The Backend_Server/ directory holds the backend server logic built with Flask. This includes app.py, which handles incoming API requests, a .env file used to securely store API keys, and a requirements.txt file listing the necessary Python packages.

The Output/ folder is used to store screenshots or outputs generated during testing or demonstration. Additionally, a .gitignore file is included at the root level to ensure sensitive or unnecessary files, like .env, are excluded from version control.

2. UI Design & Input Handling
   
created a simple and clean user interface using HTML, CSS, and Bootstrap to ensure responsiveness across screen sizes. The interface includes a text area where users can type their prompts and a submit button labeled “Ask AI”. When the user clicks the button, their input is sent to the backend, and the AI’s response is displayed on the screen. The layout is styled with Bootstrap classes for consistent spacing and formatting. And also used chat-style bubbles with emoji icons (👤 for the user and 🤖 for the AI) to give the chatbot a modern and friendly look. The entire interface is intuitive, easy to use, and fully responsive.

3. AI API Integration
   
Integrated the Google Gemini API using Python and Flask to handle AI responses. When the user submits a prompt through the frontend, it is sent to the backend using a fetch() POST request. The Flask backend receives this prompt, calls the Gemini API with the input, and returns the AI's response. This response is then displayed in the frontend below the input area in a styled chat bubble. And also handled loading states to show the user that the AI is generating a response, and included error handling for empty inputs or failed API calls. This ensures the app provides clear feedback in all cases and delivers a smooth user experience.

4. Save Conversations
   
Implemented a chat-like interface that displays the full conversation history between the user and the AI. Each user input and corresponding AI response is shown as a styled chat bubble, with icons (👤 for user, 🤖 for AI) to clearly identify who said what. These messages are visually separated and scrollable, giving the feel of a real chat application. And also added a “Clear” button that allows the user to reset the chat history instantly. This feature improves the user experience by keeping past interactions visible and organized, while also providing the flexibility to start a new conversation at any time.

5. How to run app locally?

   Step 1: Clone or download the project in your local machine

   Step 2: Go to the backend folder using command "cd Backend_Server"
           Install required python libraries which are available in requirements.txt file.
           create .env file and copy your api key here "GEMINI_API_KEY=your_api_key_here"
           To get free API key:
           Open this link "https://aistudio.google.com/apikey", and Sign in with your Google account and click on "Create API Key" and copy available API key.
           Run the Flask server "Python app.py" then it starts backend server.

   Step 3: Open index.html with browser
           Type a question and click on "Ask AI" to chat with the bot.
           Click on "clear" to delete chat history.
