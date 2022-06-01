import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export class HttpClientOptions {
  headers?: HttpHeaders | {[header: string]: string | string[]};
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams|{[param: string]: string | string[]};
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
