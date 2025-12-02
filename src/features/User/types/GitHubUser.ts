export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio?: string;
  location?: string;
  followers: number;
  following: number;
}