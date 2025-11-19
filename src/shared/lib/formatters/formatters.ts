export const formatMoney = (value: number) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
