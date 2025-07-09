# Social Grabber – YouTube & Internet Video Downloader

![App Banner](public/hero-bg.jpg)

**Social Grabber** is a modern, full-stack web application that lets you download videos from YouTube and other platforms effortlessly. Built with React, Vite, and a Node.js backend, it offers a seamless, ad-free, and premium experience for users who want to save videos in various formats and qualities.

---

## 🚀 Features

- **Paste & Download:** Just paste any video URL and download in one click.
- **Multiple Formats:** Choose from available video and audio qualities.
- **Fast & Reliable:** Powered by a robust backend for quick info fetching and downloads.
- **Mobile Friendly:** Responsive UI for all devices.
- **No Ads:** 100% ad-free experience.
- **Modern UI:** Clean, intuitive design with Tailwind CSS.
- **Open Source:** MIT licensed.

---

## 🖥️ Tech Stack

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Utilities:** [yt-dlp](https://github.com/yt-dlp/yt-dlp) (via backend), [ESLint](https://eslint.org/)

---

## 📦 Project Structure

```
YT-VIDEO-DOWNLOADER/
├── client/           # Frontend (React + Vite)
│   ├── public/       # Static assets (images, icons)
│   ├── src/          # React source code
│   │   ├── assets/   # SVGs and images
│   │   ├── components/ # Header, Footer, Layout
│   │   ├── pages/    # Home page
│   │   ├── App.jsx   # Main app component
│   │   └── main.jsx  # Entry point
│   ├── index.html    # HTML template
│   └── package.json  # Frontend dependencies & scripts
├── server/           # Backend (Node.js + Express)
│   ├── utils/        # yt-dlp wrapper
│   ├── index.js      # Express server entry
│   ├── traffic.js    # Traffic logging middleware
│   └── package.json  # Backend dependencies & scripts
└── README.md         # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) installed globally (for backend)

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/social-grabber.git
cd YT-VIDEO-DOWNLOADER
```

### 2. Install yt-dlp

- **macOS/Linux:**  
  ```sh
  pip install -U yt-dlp
  ```
- **Windows:**  
  Download the [yt-dlp.exe](https://github.com/yt-dlp/yt-dlp/releases/latest) and add it to your PATH.

### 3. Setup the Backend

```sh
cd server
npm install
npm start
```
- The backend runs on [http://localhost:5500](http://localhost:5500)
- You should see: `✅ Server running at http://localhost:5500`

### 4. Setup the Frontend

```sh
cd ../client
npm install
npm run dev
```
- The frontend runs on [http://localhost:5173](http://localhost:5173)

### 5. Configure Environment Variables

#### Frontend (`client/.env`)
```
VITE_API_URL_BACKEND=http://localhost:5500
```

#### Backend (`server/.env`)
- (Add any required backend environment variables here.)

---

## 🧑‍💻 Usage Guide

1. **Open the app** in your browser at [http://localhost:5173](http://localhost:5173).
2. **Paste a video URL** (e.g., from YouTube) into the input box.
3. **Click "Download"** to fetch video info.
4. **Choose your preferred format** and click the "Download" link.

---

## 📝 Example API Request

**Frontend fetches video info:**

```js
const res = await fetch(import.meta.env.VITE_API_URL_BACKEND + `/info?url=${encodeURIComponent(url)}`);
const data = await res.json();
```

**Backend endpoint ([server/index.js](server/index.js)):**

```js
app.get('/info', async (req, res) => {
  const videoURL = req.query.url;
  // ...fetches info using yt-dlp and returns JSON...
});
```

**yt-dlp wrapper ([server/utils/ytInfo.js](server/utils/ytInfo.js)):**

```js
function getVideoInfo(url) {
  return new Promise((resolve, reject) => {
    const command = `yt-dlp -j --no-playlist "${url}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) return reject(stderr || error.message);
      try {
        const json = JSON.parse(stdout);
        resolve(json);
      } catch (e) {
        reject("❌ Invalid JSON returned from yt-dlp");
      }
    });
  });
}
```

---

## 📸 Screenshots

| Home Page | Download Options |
|-----------|-----------------|
| ![Home](public/hero-bg.jpg) | ![Options](https://user-images.githubusercontent.com/674621/210176084-3b3e3e3e-3e3e-4e3e-8e3e-3e3e3e3e3e3e.png) |

---

## 🧩 Key Scripts

### Frontend (`client/package.json`)

- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

### Backend (`server/package.json`)

- `npm start` – Start Express server

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📜 License

This project is [MIT Licensed](LICENSE).

---

## 🙏 Credits

- Built by **Team GhostBuilders**
- Powered by [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- UI inspired by modern SaaS downloaders

---

## 📬 Contact

For support or inquiries, reach out via [GitHub Issues](https://github.com/your-username/social-grabber/issues).

---

*Made with ❤️