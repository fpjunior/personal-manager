export interface apiResponseWrapper<T> {
    data: T;
    errors: any[];
    status: boolean;
  }
  