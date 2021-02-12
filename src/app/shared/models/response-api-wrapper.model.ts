export interface ApiResponseWrapper<T> {
    data: T;
    errors: any[];
    status: boolean;
  }
  