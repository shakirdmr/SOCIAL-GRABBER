// File: client/src/pages/Home.jsx
import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchInfo = async () => {
    setLoading(true);
    try {
      // const res = await fetch(`http://localhost:5500/info?url=${encodeURIComponent(url)}`);
      // const res = await fetch(`http://192.168.31.246:5500/info?url=${encodeURIComponent(url)}`);
      const res = await fetch(import.meta.env.VITE_API_URL_BACKEND+`/info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      setVideo(data);
    } catch {
      alert("API ERROR - Oops! Couldn't fetch video data.");
    }
    setLoading(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-24 opacity-70">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download Internet Videos Effortlessly
          </h1>
          <h2 className="text-xl"> Just Copy the Link and BOOM 💥</h2>
          <p className="text-lg mb-8">
            Paste your video URL and choose the format. Premium experience. Hassle Free.
          </p>
          <div className="flex justify-center sm:m-0 m-3 ">
            <input
              className="text-black h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-gray-100 w-full max-w-xl p-4 rounded-l-full focus:outline-none "
              type="text"
              placeholder="🔍 Paste Any Video URL / Link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 rounded-r-full font-medium transition"
              onClick={fetchInfo}
              disabled={loading}
            >
              {loading ? (
      <div className="w-8 h-8 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin" />) : 'Download'}

 

            </button>
          </div>
        </div>
      </section>

      {/* Video Details & Options */}
      {video && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">Video Details</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt="Thumbnail"
              className="w-full md:w-2/5 rounded-lg shadow-lg"
            />

            {/* Details & Options */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">
                Duration: {Math.floor(video.duration/60)}:
                {(video.duration%60).toString().padStart(2,'0')}
              </p>

              <h4 className="text-lg font-semibold mb-3">Download Options</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="py-3 px-4 rounded-tl-lg">Quality</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Size</th>
                      <th className="py-3 px-4 rounded-tr-lg">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {video.formats.map((f, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{f.quality || '—'}</td>
                        <td className="py-2 px-4 flex items-center gap-1">
                          {f.vcodec !== 'none' ? '🎥 Video' : '🎵 Audio'}
                        </td>
                        <td className="py-2 px-4">
                          {f.filesize ? (f.filesize/(1024*1024)).toFixed(1)+' MB' : '—'}
                        </td>
                        <td className="py-2 px-4">
                          <a
                            href={f.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-pink-500 font-medium hover:underline"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
    

