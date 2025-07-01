const { exec } = require('child_process');

function getVideoInfo(url) {
  return new Promise((resolve, reject) => {
    const command = `yt-dlp -j --no-playlist "${url}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(stderr || error.message);
      }

      try {
        const json = JSON.parse(stdout);
        resolve(json);
      } catch (e) {
        reject("❌ Invalid JSON returned from yt-dlp");
      }
    });
  });
}

module.exports = { getVideoInfo };
