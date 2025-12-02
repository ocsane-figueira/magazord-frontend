import { api } from "@/shared/lib/api";
import type { GitHubRepository } from "../types/GitHubRepository";

export async function fetchStarred(username: string): Promise<GitHubRepository[]> {
  const { data } = await api.get<GitHubRepository[]>(`/users/${username}/starred`);
  return data;
}