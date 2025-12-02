import { useQuery } from '@tanstack/react-query';
import { fetchRepos } from '../api/fetchRepos';

export function useRepos(username: string) {
  return useQuery({
    queryKey: ['github', 'repos', username],
    queryFn: () => fetchRepos(username),
    enabled: !!username,
  });
}