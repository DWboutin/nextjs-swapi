interface IHttpRequestHandler {
  get(url: string): Promise<any>;
  post(url: string, body: any): Promise<any>;
}

class HttpRequestHandler implements IHttpRequestHandler {
  public async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }

  public async post(url: string, body: any): Promise<any> {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}

export const httpRequestHandler = new HttpRequestHandler();
