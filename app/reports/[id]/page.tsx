"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getReportDetail,
} from "@/lib/report-detail";

import {
  ReportDetail,
} from "@/types/report-detail";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ReportDetailPage({
  params,
}: PageProps) {

  const [report, setReport] =
    useState<ReportDetail | null>(
      null
    );

  useEffect(() => {

    async function loadReport() {

      const { id } =
        await params;

      const data =
        await getReportDetail(
          id
        );

      setReport(
        data
      );
    }

    loadReport();

  }, [params]);

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
  <div className="p-6">

    <h1 className="text-2xl font-semibold">
      {report.file_name}
    </h1>

    <p>
      Status: {report.status}
    </p>

    <p>
      Savings: ₹{report.total_savings}
    </p>

    <p>
      Processed: {report.processed_count}
    </p>

    <p>
      Skipped: {report.skipped_count}
    </p>

    <h2 className="text-xl font-semibold mt-8">
      Vendor Insights
    </h2>

    {report.vendors.map(
      (vendor) => (
        <div
          key={vendor.vendor}
          className="border rounded p-4 mt-4"
        >
          <h3 className="font-semibold">
            {vendor.vendor}
          </h3>

          <p>
            Savings:
            ₹{vendor.potentialSavings}
          </p>

          <p>
            Confidence:
            {" "}
            {vendor.confidence}
          </p>

          <p>
            {vendor.explanation}
          </p>

          <p>
            Recommended Action:
            {" "}
            {vendor.recommendedAction}
          </p>
        </div>
      )
    )}

  </div>
);
}