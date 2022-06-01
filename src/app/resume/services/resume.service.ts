import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ApiService} from "@core/services/api.service";

@Injectable()
export class ResumeService {
  private readonly url = "resume";

  constructor(
    private readonly api: ApiService
  ) { }

  public get experience(): Observable<any[]> {
    return this.api.get<any[]>(`${this.url}/experience`);
  }

  public get skills(): Observable<any[]> {
    return this.api.get<any[]>(`${this.url}/skills`);
  }

  public get technologies(): Observable<any[]> {
    return this.api.get<any[]>(`${this.url}/technologies`);
  }
}
