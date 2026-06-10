export type ReportEvent = {
  event_type: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

export type ReportEventsResponse = {
  events: ReportEvent[];
};