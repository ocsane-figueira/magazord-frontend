import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../api/fetchDetails";

export function useDetails(username: string, reponame: string) {
  return useQuery({
    queryKey: ['github', 'repo', 'details', username, reponame],
    queryFn: () => fetchDetails(username, reponame),
    enabled: !!username && !!reponame,
  });
}