import { useQuery } from "@tanstack/react-query";
import { fetchStarred } from "../api/fetchStarred";

export function useStarred(username: string) {
  return useQuery({
    queryKey: ['github', 'starred', username],
    queryFn: () => fetchStarred(username),
    enabled: !!username,
  });
}