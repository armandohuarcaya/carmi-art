export interface PaginationOptions {
  nextPage?: number | null;
  previousPage?: number | null;
  pages?: number;
}

export interface Page {
  label: string | number;
  value: any;
}
