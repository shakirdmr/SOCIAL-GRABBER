const { exec } = require('child_process');

function getVideoInfo(url) {
  return new Promise((resolve, reject) => {
    exec(`yt-dlp -j "${url}"`, (err, stdout, stderr) => {
      if (err) return reject(stderr || err.message);
      try {
        const data = JSON.parse(stdout);
        resolve(data);
      } catch (parseErr) {
        reject(parseErr.message);
      }
    });
  });
}

module.exports = { getVideoInfo };
