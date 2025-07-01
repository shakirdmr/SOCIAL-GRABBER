const express = require('express');
const cors = require('cors');
const { getVideoInfo } = require('./utils/ytInfo');


const app = express();
app.use(cors({
  origin: "*", // Allow all for dev
  methods: ["GET", "POST"]
}));
app.use(express.json());

app.get('/', (req, res) => {
    console.log("first")
  res.send('YouTube Downloader API is running 🎉');
});



const ytdl = require('ytdl-core');

app.get('/info', async (req, res) => {
  const videoURL = req.query.url;

  if (!ytdl.validateURL(videoURL)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    const info = await ytdl.getInfo(videoURL);
    const thumbnail = info.videoDetails.thumbnails?.pop()?.url;
    const duration = parseInt(info.videoDetails.lengthSeconds);

    res.json({
      title: info.videoDetails.title,
      duration,
      thumbnail,
      formats: info.formats.map(f => ({
        itag: f.itag,
        quality: f.qualityLabel,
        mime: f.mimeType,
        hasAudio: f.hasAudio,
        hasVideo: f.hasVideo,
        size: f.contentLength
      }))
    });

  } catch (err) {
    console.error("❌ Error fetching video info:", err); // Add this
    res.status(500).json({ error: "Failed to fetch video info", details: err.message });
  }
});


const PORT = 5500;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

