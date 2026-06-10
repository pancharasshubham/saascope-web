"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  uploadCsv,
} from "@/lib/upload";

export default function UploadPage() {

  const router =
    useRouter();

  const [file, setFile] =
    useState<File | null>(
      null
    );

  const [uploading, setUploading] =
    useState(false);

  async function handleUpload() {

    if (!file) {
      return;
    }

    try {

      setUploading(true);

      const result =
        await uploadCsv(
          file
        );

      router.push(
        `/reports/${result.reportId}`
      );

    } catch (err) {

      console.error(err);

      alert(
        "Upload failed"
      );

    } finally {

      setUploading(false);
    }
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Upload CSV
      </h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] ??
              null
          )
        }
      />

      <button
        onClick={handleUpload}
        disabled={
          !file ||
          uploading
        }
        className="bg-slate-900 text-white px-4 py-2 rounded ml-4"
      >
        {
          uploading
            ? "Uploading..."
            : "Upload"
        }
      </button>

    </div>
  );
}