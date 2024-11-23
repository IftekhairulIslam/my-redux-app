class HttpService {
  private baseURL: string;
  private headers: Headers;

  constructor() {
    this.baseURL = "https://jsonplaceholder.typicode.com";
    this.headers = new Headers({
      "Content-Type": "application/json",
    });
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("token");
        this.removeHeaderToken();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async get(endpoint: string) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "GET",
      headers: this.headers,
    });
    return this.handleResponse(response);
  }

  async post(endpoint: string, data: unknown) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  async put(endpoint: string, data: unknown) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  async delete(endpoint: string) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
      headers: this.headers,
    });
    return this.handleResponse(response);
  }

  setHeaderToken(token: string) {
    this.headers.set("Authorization", `Bearer ${token}`);
  }

  removeHeaderToken() {
    this.headers.delete("Authorization");
  }
}

const httpService = new HttpService();

export const { setHeaderToken, removeHeaderToken } = httpService;
export default httpService;
