const { cmd } = require("../command");
const yts = require("yt-search");
const path = require("path");
const axios = require('axios');
const fs = require("fs");

cmd({
  pattern: "playultra",
  react: '🎵',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".play2 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("*🎧 Searching for the song...*");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);// https://api.davidcyriltech.my.id/download/ytmp3?url=
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    await conn.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});
