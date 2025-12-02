import { useQuery } from '@tanstack/react-query';
import { fetchCommits } from '../api/fetchCommits';

export function useCommits(username: string, reponame: string) {
  return useQuery({
    queryKey: ['github', 'repo', 'commits', username, reponame],
    queryFn: () => fetchCommits(username, reponame),
    enabled: !!username && !!reponame,
  });
}