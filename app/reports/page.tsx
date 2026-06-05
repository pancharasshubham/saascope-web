"use client";

import { useEffect, useState } from "react";

import {
  getReports,
} from "@/lib/reports";

import {
  Report,
} from "@/types/report";

import Link from "next/link";

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

      <h1 className="text-2xl font-semibold mb-4">
        Reports
      </h1>

      <table className="w-full border-collapse">

        <thead>
          <tr>
            <th>File</th>
            <th>Status</th>
            <th>Savings</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>

          {reports.map(
            (report) => (

              <tr
                key={report.id}
              >
                <td>
                    <Link
                        href={`/reports/${report.id}`}
                    >
                        {report.fileName}
                    </Link>
                </td>

                <td>
                  {report.status}
                </td>

                <td>
                  ₹
                  {report.totalSavings}
                </td>

                <td>
                  {new Date(
                    report.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}