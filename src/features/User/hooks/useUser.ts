import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/fetchUser";

export function useUser(username: string) {
  return useQuery({
    queryKey: ['github', 'user', username],
    queryFn: () => fetchUser(username),
    enabled: !!username,
    retry: 1,
  });
}