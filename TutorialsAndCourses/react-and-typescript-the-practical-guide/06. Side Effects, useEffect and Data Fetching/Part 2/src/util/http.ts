import { z } from "zod";

export async function get<T>(url: string, schema?: z.Schema<T>): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  if (!schema) {
    return (await response.json()) as T;
  }
  const data = await response.json();
  return schema.parse(data) as T;
}
