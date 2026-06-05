export type Report = {
  id: string;
  fileName: string;
  processedCount: number;
  skippedCount: number;
  totalSavings: number;
  createdAt: string;
  status: string;
};

export type ReportsResponse = {
  reports: Report[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};