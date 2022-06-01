import {Injectable} from "@angular/core";
import {Config} from "@models/config.model";
import {environment} from "@environment";

@Injectable({
  providedIn: "root"
})
export class ConfigService extends Config {

  constructor() {
    super();
  }

  public loadConfig(): void {
    Object.assign(this, environment);
  }
}
