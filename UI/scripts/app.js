document.getElementById('askBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('userPrompt').value.trim();
  const responseDiv = document.getElementById('responseArea');
  const chatHistory = document.getElementById('chatHistory');

  if (!prompt) {
    responseDiv.innerHTML = `<span class="text-danger">Please enter a prompt.</span>`;
    return;
  }

  responseDiv.innerHTML = `<em>Loading...</em>`;

  try {
    const res = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (res.ok && data.response) {
      const aiResponse = data.response;
      responseDiv.innerHTML = `<strong>AI:</strong> ${aiResponse}`;
      // Add to chat history
      const entry = document.createElement('div');
      entry.className = "mb-3";
      //adding icons
      entry.innerHTML = `
  <div class="chat-bubble user-bubble">
    <div class="icon">👤</div>
    <div>${prompt}</div>
  </div>
  <div class="chat-bubble ai-bubble mt-2">
    <div class="icon">🤖</div>
    <div>${aiResponse}</div>
  </div>
`;
      chatHistory.appendChild(entry);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } else {
      responseDiv.innerHTML = `<span class="text-danger">AI failed to respond.</span>`;
    }
  } catch (err) {
    console.error(err);
    responseDiv.innerHTML = `<span class="text-danger">Error connecting to server.</span>`;
  }
});

//Clear chat history
document.getElementById('clearChat').addEventListener('click', () => {
  document.getElementById('chatHistory').innerHTML = '';
});
