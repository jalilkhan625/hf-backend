this is the backend code for OCR Summarizer. Front end link https://github.com/jalilkhan625/hf-frontend

# 🧠 HF-Backend – Hugging Face API Wrapper  
**Built by Jalil Khan**

This backend exposes a secure API endpoint that wraps Hugging Face's text summarization model. It hides your API key from the frontend and connects easily to your Next.js app. Deployed with [Render.com](https://render.com).

---

## 🚀 Features

- 🌐 Express.js Node backend
- 🔒 Keeps Hugging Face API key secret using `.env`
- 🔁 Accepts plain text and returns summarized result
- ☁️ Easily deployable on Render

---

## 📦 API Endpoint

### `POST /summarize`

Summarize a block of text using the Hugging Face model `facebook/bart-large-cnn`.

### Request
```json
POST /summarize
Content-Type: application/json

{
  "text": "Your long input text here..."
}
```

### Response
```json
{
  "summary": "Short summary returned by the model."
}
```

---

## 🛠️ Getting Started Locally

### 1. Clone this Repository
```bash
git clone https://github.com/jalilkhan625/hf-backend.git
cd hf-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
Create a `.env` file in the root directory with this content:
```env
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

### 4. Start the Server
```bash
npm start
```

> The server will run by default on `http://localhost:3001`

---

## 🌍 Deploying on Render

1. Push this repo to GitHub (already done ✅)
2. Go to [Render](https://render.com)
3. Create a **New Web Service**
4. Connect your GitHub repo
5. Use the following settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variable:**  
     - `HUGGINGFACE_API_KEY`: *paste your key here*

Render will handle installation and deployment automatically.

---

## 📁 Project Structure

```
hf-backend/
├── server.js           # Express server with summarization route
├── .env                # API key stored securely (not pushed)
├── .gitignore          # Ensures .env is excluded from Git
├── package.json        # Project metadata and scripts
├── README.md           # This documentation
```

---

## 🧪 Example `curl` Test

```bash
curl -X POST http://localhost:3001/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "This is an example of a long paragraph that needs summarization."}'
```

---

## 👨‍💻 Author

**Jalil Khan**  
🔗 [GitHub: @jalilkhan625](https://github.com/jalilkhan625)

---

## 📃 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
