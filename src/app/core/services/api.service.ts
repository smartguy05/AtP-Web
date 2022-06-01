import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResult} from "@models/api-result.model";
import {ConfigService} from "@core/services/config.service";
import {HttpClientOptions} from "@models/http-client-options.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = this.config.apiUrl;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly config: ConfigService
  ) { }

  public get<T>(url: string, options?: HttpClientOptions): Observable<T> {
    return this.httpClient.get<ApiResult<T>>(`${this.apiUrl}/${url}`, options)
      .pipe(map((m: ApiResult<T>) => m.value));
  }

  public post<T>(url: string, body: any, options?: HttpClientOptions): Observable<T> {
    return this.httpClient.post<ApiResult<T>>(`${this.apiUrl}/${url}`, body, options)
      .pipe(map((m) => m.value));
  }

  public patch<T>(url: string, body: any, options?: HttpClientOptions): Observable<T> {
    return this.httpClient.patch<ApiResult<T>>(`${this.apiUrl}/${url}`, body, options)
      .pipe(map((m: ApiResult<T>) => m.value))
  }

  public delete<T>(url: string, options?: HttpClientOptions): Observable<T> {
    return this.httpClient.delete<ApiResult<T>>(`${this.apiUrl}/${url}`, options)
      .pipe(map((m: ApiResult<T>) => m.value))
  }
}
