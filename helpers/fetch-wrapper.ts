import { BASE_API_URL } from "@/constants/constants";

type JSONValue =
  | boolean
  | number
  | string
  | null
  | readonly JSONValue[]
  | { readonly [key: string]: JSONValue };

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
  patch: request("PATCH"),
};

function request(method: string) {
  return async (url: string, body: JSONValue, formData?: FormData) => {
    const requestHeaders: HeadersInit = new Headers();
    if (formData === undefined) {
      requestHeaders.append("Content-Type", "application/json");
    }
    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
    };
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
    if (formData !== undefined) {
      requestOptions.body = formData;
    }
    try {
      const response = await fetch(url, requestOptions);
      return handleResponse(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

async function handleResponse(response: Response) {
  const isJson = response.headers
    ?.get("content-type")
    ?.includes("application/json");
  const data = isJson ? await response.json() : null;

  return data;
}
