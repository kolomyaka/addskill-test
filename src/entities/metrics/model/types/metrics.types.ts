export interface Metric {
  value: number;
  change: number;
  changeType: "increase" | "decrease";
  previousValue: number;
}

type MetricsType = "expenses" | "clicks" | "cpc" | "cpa";

export type MetricsResponse = Record<MetricsType, Metric>;

export interface MetricsSchema {
  loading: boolean;
  error: string | null;
  data: MetricsResponse | undefined;
}
