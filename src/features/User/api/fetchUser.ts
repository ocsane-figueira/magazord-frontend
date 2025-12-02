import { api } from "@/shared/lib/api";
import type { GitHubUser } from "../types/GitHubUser";

export async function fetchUser(username: string): Promise<GitHubUser> {
  const { data } = await api.get<GitHubUser>(`/users/${username}`);
  return data;
}