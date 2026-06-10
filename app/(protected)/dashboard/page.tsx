"use client";

import { useEffect, useState } from "react";

import { getDashboardSummary } from "@/lib/dashboard";
import { DashboardSummary } from "@/types/dashboard";
import StatCard from "@/components/stat-card";

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
  <div className="space-y-8">

    <div>
      <h1
        className="
          text-3xl
          font-bold
          text-slate-900
        "
      >
        Dashboard
      </h1>

      <p
        className="
          text-slate-500
          mt-1
        "
      >
        SaaS spend overview and optimization insights.
      </p>
    </div>

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      <StatCard
        title="Total Reports"
        value={
          summary.totalReports
        }
      />

      <StatCard
        title="Completed"
        value={
          summary.completedReports
        }
      />

      <StatCard
        title="Failed"
        value={
          summary.failedReports
        }
      />

      <StatCard
        title="Total Savings"
        value={
          `₹${summary.totalSavings.toLocaleString()}`
        }
      />

    </div>

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        p-6
        shadow-sm
      "
    >
      <p
        className="
          text-sm
          text-slate-500
        "
      >
        Average Savings Per Report
      </p>

      <h2
        className="
          text-3xl
          font-semibold
          mt-2
        "
      >
        ₹
        {
          summary.averageSavings.toLocaleString()
        }
      </h2>
    </div>

  </div>
);
}