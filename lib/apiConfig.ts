// src/api/apiConfig.ts

const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN || ""}`,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || "An error occurred while fetching data");
  }

  return (await response.json()) as T;
}
