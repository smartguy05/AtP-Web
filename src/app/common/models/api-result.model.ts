
export class ApiResult<T> {
  public value!: T;
  public status!: number;
  public count?: number;

  constructor(partial: Partial<ApiResult<T>>) {
    Object.assign(this,  partial);
  }
}
