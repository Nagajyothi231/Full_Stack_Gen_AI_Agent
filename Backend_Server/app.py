from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    prompt = data.get('prompt', '')
    print(f"Prompt received: {prompt}")

    try:
        #model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")
        model = genai.GenerativeModel(model_name="models/gemini-1.5-flash-latest")

        chat = model.start_chat()
        response = chat.send_message(prompt)
        print(f"Response: {response.text}")
        return jsonify({'response': response.text})
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({'error': str(e)}), 500
#To check if the server is running
@app.route('/')
def home():
    return "Flask backend is running."

if __name__ == '__main__':
    app.run(debug=True)
