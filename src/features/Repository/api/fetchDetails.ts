import { api } from "@/shared/lib/api";
import type { GitHubRepository } from "../types/GitHubRepository";

export async function fetchDetails(username: string, reponame: string): Promise<GitHubRepository> {
  const { data } = await api.get<GitHubRepository>(`/repos/${username}/${reponame}`);
  return data;
}