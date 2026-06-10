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

import {
  getReportEvents,
} from "@/lib/report-events";

import {
  ReportEvent,
} from "@/types/report-events";

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

  const [events, setEvents] =
  useState<ReportEvent[]>([]);

  useEffect(() => {

    async function loadReport() {

      const { id } =
        await params;

      const reportData =
        await getReportDetail(id);

      const eventData =
        await getReportEvents(id);

      setReport(reportData);

      setEvents(
        eventData.events
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

    <h2 className="text-xl font-semibold mt-8">
      Processing Timeline
    </h2>

    <div className="mt-4">

      {events.map(
        (event, index) => (

          <div
            key={index}
            className="border rounded p-4 mb-3"
          >
            <p className="font-semibold">
              {event.event_type}
            </p>

            <p>
              {
                new Date(
                  event.created_at
                ).toLocaleString()
              }
            </p>
          </div>
        )
      )}

    </div>

  </div>
);
}