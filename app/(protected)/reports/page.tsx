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

const totalSavings =
reports.reduce(
(sum, report) =>
sum +
report.totalSavings,
0
);

const completedReports =
reports.filter(
(report) =>
report.status ===
"completed"
).length;

const failedReports =
reports.filter(
(report) =>
report.status ===
"failed"
).length;

if (loading) {

return (
  <div className="p-8">
    Loading...
  </div>
);

}

return ( <div className="space-y-8">

  <div>

    <h1
      className="
        text-3xl
        font-bold
        text-slate-900
      "
    >
      SaaS Optimization Reports
    </h1>

    <p
      className="
        text-slate-500
        mt-2
      "
    >
      Track software spend,
      identify waste,
      and uncover savings opportunities.
    </p>

  </div>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-4
    "
  >

    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Total Reports
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {reports.length}
      </h2>

    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Potential Savings
      </p>

      <h2 className="text-3xl font-bold mt-2">
        ₹{totalSavings.toLocaleString()}
      </h2>

    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Completed
      </p>

      <h2 className="text-3xl font-bold mt-2 text-green-600">
        {completedReports}
      </h2>

    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        Failed
      </p>

      <h2 className="text-3xl font-bold mt-2 text-red-600">
        {failedReports}
      </h2>

    </div>

  </div>

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
      {/* Empty state */}
      <h2 className="text-xl font-semibold">
        No reports yet
      </h2>

      <p className="text-slate-500 mt-3">
        Upload a SaaS subscription CSV
        to discover unused licenses,
        duplicate tools,
        and hidden costs.
      </p>

      <Link
        href="/upload"
        className="
          inline-block
          mt-6
          px-5
          py-3
          bg-slate-900
          text-white
          rounded-lg
        "
      >
        Upload CSV
      </Link>

    </div>

  )}

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
              gap-6
            "
          >

            <div className="flex-1">

              <h2
                className="
                  text-xl
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
                  mt-3
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
                      report.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : report.status === "failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {report.status}
                </span>

                <span className="text-sm text-slate-500">
                  {
                    new Date(
                      report.createdAt
                    ).toLocaleDateString()
                  }
                </span>

              </div>

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-600
                "
              >
                {
                  report.totalSavings > 0
                    ? "Potential savings opportunities detected across SaaS subscriptions."
                    : "No significant optimization opportunities detected."
                }
              </p>

            </div>

            <div className="text-right">

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
                  text-3xl
                  font-bold
                  text-slate-900
                  mt-1
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

  </div>

</div>

);
}
