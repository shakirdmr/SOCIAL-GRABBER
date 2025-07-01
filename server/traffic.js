// File: server/traffic.js
const useragent = require("express-useragent");
const geoip = require("geoip-lite"); // optional, if you want country/city lookups

// 1) Parse the User-Agent header
const uaMiddleware = useragent.express();

// 2) Log IP, UA, timestamp, optional geo info
const loggerMiddleware = (req, res, next) => {
  // a) Determine client IP
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket.remoteAddress ||
    req.ip;

  // b) Lookup geo if desired
  const geo = geoip.lookup(ip) || {};

  // c) UA details
  const { browser, version, os, platform, source } = req.useragent;

  // d) Timestamp
  const time = new Date().toISOString();

  console.log(`--- Traffic Log @ ${time} ---`);
  console.log(`IP: ${ip} (${geo.country || "?"}, ${geo.city || "?"})`);
  console.log(`UA: ${source}`);
  console.log(`    • Browser: ${browser} v${version}`);
  console.log(`    • OS: ${os}`);
  console.log(`    • Platform: ${platform}`);
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  console.log(`-----------------------------\n`);

  next();
};

// Export as a single middleware array
module.exports = [uaMiddleware, loggerMiddleware];
