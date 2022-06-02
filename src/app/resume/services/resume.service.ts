import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiService} from "@core/services/api.service";
import {Technology} from "@models/technology.model";
import {Experience} from "@models/experience.model";

@Injectable()
export class ResumeService {
  private readonly url = "resume";

  constructor(
    private readonly api: ApiService
  ) { }

  public get experience(): Observable<Experience[]> {
    return this.api.get<Experience[]>(`${this.url}/experience`);
  }

  public get technologies(): Observable<Technology[]> {
    return this.api.get<Technology[]>(`${this.url}/technologies`);
  }
}
