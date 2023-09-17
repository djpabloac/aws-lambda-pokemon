import { fetch } from "cross-fetch";

export class DataSource {
  constructor(private readonly api: string) { }

  private getUrlByPath(path: string): string {
    return `${this.api}${path}`
  }

  async getOne<T>(path: string): Promise<T> {
    const endpoint = this.getUrlByPath(path)

    const response = await fetch(endpoint)

    const data = await response.json()

    return data
  }
}