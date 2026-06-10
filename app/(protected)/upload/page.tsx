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
  <div className="max-w-3xl">

    <div className="mb-8">

      <h1
        className="
          text-3xl
          font-bold
          text-slate-900
        "
      >
        Upload CSV
      </h1>

      <p
        className="
          text-slate-500
          mt-1
        "
      >
        Upload your SaaS subscription export
        to identify unused licenses,
        duplicate tools, and potential
        savings.
      </p>

    </div>

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        p-8
        shadow-sm
      "
    >

      <label
        className="
          block
          border-2
          border-dashed
          border-slate-300
          rounded-xl
          p-12
          text-center
          cursor-pointer
          hover:border-slate-400
          transition
        "
      >

        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ??
                null
            )
          }
        />

        <div>

          <h2
            className="
              text-lg
              font-semibold
              text-slate-900
            "
          >
            Upload CSV File
          </h2>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Click to select a file
          </p>

        </div>

      </label>

      {file && (

        <div
          className="
            mt-6
            bg-slate-50
            border
            border-slate-200
            rounded-lg
            p-4
          "
        >

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Selected File
          </p>

          <p
            className="
              font-medium
              mt-1
            "
          >
            {file.name}
          </p>

        </div>

      )}

      <button
        onClick={handleUpload}
        disabled={
          !file ||
          uploading
        }
        className="
          mt-6
          bg-slate-900
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-slate-800
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {
          uploading
            ? "Uploading..."
            : "Upload Report"
        }
      </button>

    </div>

    <div
      className="
        mt-6
        bg-white
        border
        border-slate-200
        rounded-xl
        p-6
        shadow-sm
      "
    >

      <h3
        className="
          font-semibold
          mb-3
        "
      >
        Expected CSV Format
      </h3>

      <code
        className="
          text-sm
          text-slate-600
        "
      >
        vendorName,cost,seats,billingCycle,lastUsedDate
      </code>

    </div>

  </div>
);
}