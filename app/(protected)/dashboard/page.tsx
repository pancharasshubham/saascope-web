"use client";

import { useEffect, useState } from "react";

import { getDashboardSummary } from "@/lib/dashboard";
import { DashboardSummary } from "@/types/dashboard";

export default function DashboardPage() {

  const [summary, setSummary] =
    useState<DashboardSummary | null>(
      null
    );

  useEffect(() => {

    async function loadData() {

      try {

        const data =
          await getDashboardSummary();

        setSummary(data);

      } catch (err) {

        console.error(err);
      }
    }

    loadData();

  }, []);

  if (!summary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Total Reports:
        {summary.totalReports}
      </p>

      <p>
        Completed:
        {summary.completedReports}
      </p>

      <p>
        Failed:
        {summary.failedReports}
      </p>

      <p>
        Savings:
        ₹{summary.totalSavings}
      </p>

      <p>
        Average:
        ₹{summary.averageSavings}
      </p>
    </div>
  );
}