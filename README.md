# Full_Stack_AI_Chatbot

This is a full-stack AI chatbot project. The frontend is built using **HTML**, **CSS**, and **JavaScript**, while the backend is developed with **Flask (Python)**. It connects to the **Google Gemini API** to answer questions in a conversational manner, similar to ChatGPT.

---

## 1. Project Setup

The project is organized into the following main folders:

- `UI/` — Contains all frontend components:
  - `index.html`: Main HTML page
  - `scripts/app.js`: Handles user input, API communication, and UI updates
  - `styles/style.css`: Defines the styling and responsiveness

- `Backend_Server/` — Contains backend logic using Flask:
  - `app.py`: Flask server handling API calls
  - `.env`: Stores the Gemini API key securely
  - `requirements.txt`: Lists required Python packages

- `Output/` — Stores screenshots or output files for testing/demo purposes

- `.gitignore` — Excludes sensitive/unnecessary files (e.g., `.env`) from version control

---

## 2. UI Design & Input Handling

A clean and responsive user interface is built using **HTML**, **CSS**, and **Bootstrap**:

- Features a **text area** for user prompts and a **submit button** labeled “Ask AI”
- Displays AI responses below using **chat-style bubbles**
- Uses **emoji icons** to indicate speakers:
  - 👤 for the user
  - 🤖 for the AI
- Fully responsive layout that works across different screen sizes

---

## 3. AI API Integration

The backend integrates with the **Google Gemini API** using Flask:

- The frontend sends prompts via a `fetch()` **POST** request
- The backend receives the prompt, calls Gemini API, and returns the response
- Responses are shown in the UI as chat bubbles
- Includes:
  - **Loading indicators** to show response generation
  - **Error handling** for invalid inputs or API failures

---

## 4. Save Conversations

The chatbot displays **full conversation history** between the user and the AI:

- Every message is shown in a separate **styled bubble**
- Identifiers:
  - 👤 for user input
  - 🤖 for AI response
- A **“Clear” button** resets the conversation
- Smooth chat-like scrolling experience

---

## 5. How to Run App Locally?

### Step 1: Clone or Download the Project

```bash
git clone https://github.com/your-username/Full_Stack_AI_Chatbot.git
```

### Step 2: Set Up the Backend

```bash
cd Backend_Server
pip install -r requirements.txt
```

- Create a `.env` file and add your Gemini API key:

  ```
  GEMINI_API_KEY=your_api_key_here
  ```

- To get a free Gemini API key:

  1. Visit: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
  2. Sign in with your Google account
  3. Click "Create API Key" and copy it

- Run the backend server:

  ```bash
  python app.py
  ```

### Step 3: Launch the Frontend

- Open `UI/index.html` in your browser
- Type your question and click **“Ask AI”**
- Use **“Clear”** to reset the conversation

---

Feel free to contribute, fork, or raise an issue if you encounter any bugs!
