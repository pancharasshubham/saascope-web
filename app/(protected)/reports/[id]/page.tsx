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

import {
  retryReport,
} from "@/lib/retry-report";

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

  const [retrying, setRetrying] =
  useState(false);

  const [events, setEvents] =
  useState<ReportEvent[]>([]);

  async function handleRetry() {

    if (!report) {
      return;
    }

    try {

      setRetrying(true);

      await retryReport(
        report.id
      );

      window.location.reload();

    } catch (err) {

      console.error(err);

      alert(
        "Retry failed"
      );

    } finally {

      setRetrying(false);
    }
  }

  const [loading, setLoading] =
    useState(true);

  const [notFound, setNotFound] =
    useState(false);

  useEffect(() => {

    async function loadReport() {

      try {

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
      } catch (error) {
        console.error(error);
        setNotFound(true);
        }finally {
        setLoading(false);
      }
    }

    loadReport();

  }, [params]);

    if (loading) {
    return <div>Loading...</div>;
  }

    if (notFound) {
      return (
        <div className="p-6">
          <h1 className="text-2xl font-semibold">
            Report not found
          </h1>

          <p className="text-slate-500 mt-2">
            This report does not exist.
          </p>
        </div>
      );
    }

    if (!report) {
      return null;
  }

  return (
  <div className="space-y-8">

    <div className="flex items-start justify-between">

      <div>

        <h1
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          {report.file_name}
        </h1>

        <p
          className="
            text-slate-500
            mt-1
          "
        >
          SaaS optimization report
        </p>

      </div>

      {report.status === "failed" && (
        <button
          onClick={handleRetry}
          disabled={retrying}
          className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-red-700
          "
        >
          {
            retrying
              ? "Retrying..."
              : "Retry Report"
          }
        </button>
      )}

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

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Total Savings
        </p>

        <h2 className="text-3xl font-bold mt-2">
          ₹
          {
            Number(
              report.total_savings
            ).toLocaleString()
          }
        </h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Processed
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {report.processed_count}
        </h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Skipped
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {report.skipped_count}
        </h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

        <p className="text-sm text-slate-500">
          Status
        </p>

        <span
          className={`
            inline-flex
            mt-3
            px-3
            py-1
            rounded-full
            text-sm
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

      </div>

    </div>

    <div>

      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Vendor Insights
      </h2>

      <div className="space-y-4">

        {report.vendors.map(
          (vendor) => (

            <div
              key={vendor.vendor}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-6
                shadow-sm
              "
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {vendor.vendor}
                  </h3>

                  <div className="mt-2">

                    <span
                      className={`
                        px-2
                        py-1
                        rounded-full
                        text-xs
                        font-medium

                        ${
                          vendor.confidence === "high"
                            ? "bg-green-100 text-green-700"
                            : vendor.confidence === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {vendor.confidence} confidence
                    </span>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-sm text-slate-500">
                    Potential Savings
                  </p>

                  <p className="text-2xl font-bold">
                    ₹
                    {
                      vendor.potentialSavings.toLocaleString()
                    }
                  </p>

                </div>

              </div>

              <p className="mt-4 text-slate-700">
                {vendor.explanation}
              </p>

              <div
                className="
                  mt-4
                  p-4
                  rounded-lg
                  bg-slate-50
                "
              >
                <span className="font-medium">
                  Recommended Action:
                </span>
                {" "}
                {
                  vendor.recommendedAction
                }
              </div>

            </div>

          )
        )}

      </div>

    </div>

    <div>

      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Processing Timeline
      </h2>

      <div className="space-y-3">

        {events.map(
          (event, index) => (

            <div
              key={index}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-4
                shadow-sm
              "
            >

              <p className="font-semibold">
                {event.event_type}
              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                  mt-1
                "
              >
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

  </div>
);
}