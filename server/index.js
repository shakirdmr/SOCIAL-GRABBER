const express = require('express');
const cors = require('cors');
const { getVideoInfo } = require('./utils/ytInfo');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('YouTube Downloader API is running 🎉');
});

app.get('/info', async (req, res) => {
  const videoURL = req.query.url;

  if (!videoURL) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const info = await getVideoInfo(videoURL);

    res.json({
      title: info.title,
      duration: info.duration,
      thumbnail: info.thumbnail,
      formats: info.formats.map(f => ({
        format_id: f.format_id,
        quality: f.format_note,
        ext: f.ext,
        filesize: f.filesize,
        acodec: f.acodec,
        vcodec: f.vcodec,
        url: f.url
      }))
    });

  } catch (err) {
    console.error("yt-dlp error:", err);
    res.status(500).json({ error: "Failed to fetch video info", details: err });
  }
});

const PORT = 5500;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
