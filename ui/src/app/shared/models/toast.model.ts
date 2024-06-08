export type ToastSeverity = 'error' | 'success';

export type Toast = {
  message: string;
  severity: ToastSeverity;
};
