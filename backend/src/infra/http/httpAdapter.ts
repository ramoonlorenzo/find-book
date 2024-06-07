export interface HttpRequest {
  body?: any;
  header?: any;
  params?: any;
  query?: any;
}

interface HttpResponse {
  status: number;
  message: string;
  data?: any;
}
