"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  getReports,
} from "@/lib/reports";

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

            <Link
              key={report.id}
              href={`/reports/${report.id}`}
              className="block border rounded p-4 hover:bg-slate-50"
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

          )
        )}

      </div>

    </div>
  );
}