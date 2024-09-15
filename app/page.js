// pages/index.js
"use client";
import DownloadAllFiles from "@/Components/DownloadAllFiles";
import Upload from "@/Components/Upload";

export default function Home() {
  return (
    <div>
      <Upload />
      <h1>Download All Files</h1>
      <DownloadAllFiles />
    </div>
  );
}