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
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Reports
      </h1>

      <div className="space-y-4">

        {reports.map(
          (report) => (

             <div
              key={report.id}
              className="border rounded p-4 flex items-center justify-between"
             >

            <Link
              href={`/reports/${report.id}`}
              className="flex-1 hover:bg-slate-50"
            >

              <h2 className="font-semibold">
                {report.fileName}
              </h2>

              <p>
                Status:
                {" "}
                {report.status}
              </p>

              <p>
                Savings:
                {" "}
                ₹{report.totalSavings}
              </p>

              <p>
                Created:
                {" "}
                {
                  new Date(
                    report.createdAt
                  ).toLocaleDateString()
                }
              </p>

            </Link>

            <button
              onClick={() =>
                handleDelete(
                  report.id
                )
              }
              className="
                ml-4
                px-3
                py-2
                text-sm
                text-red-600
                border
                border-red-200
                rounded
                hover:bg-red-50
              "
            >
              Delete
            </button>

      </div>
        )
        )}

      </div>

    </div>
  );
}