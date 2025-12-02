import { api } from '@/shared/lib/api';
import type { GitHubRepository } from '../types/GitHubRepository';

export async function fetchRepos(username: string): Promise<GitHubRepository[]> {
  const { data } = await api.get<GitHubRepository[]>(`/users/${username}/repos?per_page=50&sort=updated`);
  return data;
}