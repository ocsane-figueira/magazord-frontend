import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

import type { GitHubUser } from '@/types/GitHubUser';
import type { GitHubRepo } from '@/types/GitHubRepo';
import type { GitHubCommit } from '@/types/GitHubCommit';

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

async function fetchRepoDetails(username: string, reponame: string): Promise<GitHubRepo> {
  const { data } = await api.get<GitHubRepo>(`/repos/${username}/${reponame}`);
  return data;
}

async function fetchRepoCommits(username: string, reponame: string): Promise<GitHubCommit[]> {
  const { data } = await api.get<GitHubCommit[]>(`/repos/${username}/${reponame}/commits`);
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

export function useGithubRepoDetails(username: string, reponame: string) {
  return useQuery({
    queryKey: ['github', 'repo', 'details', username, reponame],
    queryFn: () => fetchRepoDetails(username, reponame),
    enabled: !!username && !!reponame,
  });
}

export function useGithubCommits(username: string, reponame: string) {
  return useQuery({
    queryKey: ['github', 'repo', 'commits', username, reponame],
    queryFn: () => fetchRepoCommits(username, reponame),
    enabled: !!username && !!reponame,
  });
}
