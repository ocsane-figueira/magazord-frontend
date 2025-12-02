import { api } from '@/shared/lib/api';
import type { GitHubCommit } from '../types/GitHubCommit';

export async function fetchCommits(username: string, reponame: string): Promise<GitHubCommit[]> {
  const { data } = await api.get<GitHubCommit[]>(`/repos/${username}/${reponame}/commits`);
  return data;
}