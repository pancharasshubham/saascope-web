"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  getReports,
} from "@/lib/reports";

import {
  deleteReport,
} from "@/lib/delete-report";

type Report = {
  id: string;
  fileName: string;
  status: string;
  totalSavings: number;
  createdAt: string;
};

export default function ReportsPage() {

  const [reports, setReports] =
    useState<Report[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadReports() {

      try {

        const data =
          await getReports();

        setReports(
          data.reports
        );

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);
      }
    }

    loadReports();

  }, []);

  async function handleDelete(
    reportId: string
  ) {

    const confirmed =
      window.confirm(
        "Are you sure you want to permanently delete this report and its CSV file?"
      );

    if (!confirmed) {
      return;
    }

    try {

      await deleteReport(
        reportId
      );

      setReports(
        (current) =>
          current.filter(
            (report) =>
              report.id !==
              reportId
          )
      );

    } catch (err) {

      console.error(err);

      alert(
        "Delete failed"
      );
    }
}

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div className="space-y-8">

    <div>
      <h1
        className="
          text-3xl
          font-bold
          text-slate-900
        "
      >
        Reports
      </h1>

      <p
        className="
          text-slate-500
          mt-1
        "
      >
        Review optimization reports and identified savings.
      </p>
    </div>

    <div className="space-y-4">

      {reports.map(
        (report) => (

          <div
            key={report.id}
            className="
              bg-white
              border
              border-slate-200
              rounded-xl
              p-6
              shadow-sm
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >

              <div>

                <h2
                  className="
                    text-lg
                    font-semibold
                    text-slate-900
                  "
                >
                  {report.fileName}
                </h2>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-2
                  "
                >

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        report.status ===
                        "completed"
                          ? "bg-green-100 text-green-700"
                          : report.status ===
                            "failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {report.status}
                  </span>

                  <span
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {
                      new Date(
                        report.createdAt
                      ).toLocaleDateString()
                    }
                  </span>

                </div>

              </div>

              <div
                className="
                  text-right
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Potential Savings
                </p>

                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  ₹
                  {
                    report.totalSavings.toLocaleString()
                  }
                </p>
              </div>

            </div>

            <div
              className="
                flex
                justify-end
                gap-3
                mt-6
              "
            >

              <Link
                href={`/reports/${report.id}`}
                className="
                  px-4
                  py-2
                  bg-slate-900
                  text-white
                  rounded-lg
                  hover:bg-slate-800
                "
              >
                View Report
              </Link>

              <button
                onClick={() =>
                  handleDelete(
                    report.id
                  )
                }
                className="
                  px-4
                  py-2
                  border
                  border-red-200
                  text-red-600
                  rounded-lg
                  hover:bg-red-50
                "
              >
                Delete
              </button>

            </div>

          </div>

        )
      )}

{/* If there are no reports, show a friendly message */}
      {reports.length === 0 && (
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-xl
            p-12
            text-center
          "
        >
          <h2 className="font-semibold">
            No reports yet
          </h2>

          <p className="text-slate-500 mt-2">
            Upload a CSV file to generate
            your first SaaS audit report.
          </p>
        </div>
      )}

    </div>

  </div>
);
}