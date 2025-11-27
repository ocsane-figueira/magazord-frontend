import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

import type { GitHubUser } from '@/types/GitHubUser';
import type { GitHubRepo } from '@/types/GitHubRepo';

async function fetchUser(username: string): Promise<GitHubUser> {
  const { data } = await api.get<GitHubUser>(`/users/${username}`);
  return data;
}

async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const { data } = await api.get<GitHubRepo[]>(`/users/${username}/repos`);
  return data;
}

async function fetchStarred(username: string): Promise<GitHubRepo[]> {
  const { data } = await api.get<GitHubRepo[]>(`/users/${username}/starred`);
  return data;
}

export function useGithubUser(username: string) {
  return useQuery({
    queryKey: ['github', 'user', username],
    queryFn: () => fetchUser(username),
    enabled: !!username,
    retry: 1,
  });
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ['github', 'repos', username],
    queryFn: () => fetchRepos(username),
    enabled: !!username,
  });
}

export function useGithubStarred(username: string) {
  return useQuery({
    queryKey: ['github', 'starred', username],
    queryFn: () => fetchStarred(username),
    enabled: !!username,
  });
}
