export type VendorInsight = {
  vendor: string;
  issues: string[];
  confidence: string;
  explanation: string;
  potentialSavings: number;
  recommendedAction: string;
};

export type ReportDetail = {
  id: string;
  file_name: string;
  processed_count: number;
  skipped_count: number;
  total_savings: string;
  status: string;
  created_at: string;

  vendors: VendorInsight[];

  errors: {
    row: number;
    reason: string;
  }[];
};