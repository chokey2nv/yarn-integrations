export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type BooleanLiteral = "true"|"false"

export interface ISnack {
  open: boolean;
  message: string;
}
export const DEFAULT_SNACK: ISnack = {
  open: false, message: ""
}
export interface IPaginateRequest {
  limit: number;
  skip: number;
}
export interface ISearchRequest {
  search?: string;
}
export interface AwaitResponse {
  success?: boolean;
}
export interface ApiResponse<T = undefined> extends AwaitResponse {
  data?: T;
  err?: Error;
}
export interface IFileUploadResponse {
  url: string;
  error: string;
}
export interface IFormDataFileValue {name?: string | undefined; type?: string | undefined; uri: string}
