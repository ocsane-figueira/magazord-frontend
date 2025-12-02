export interface GitHubUser {
  id: number;
  blog: string;
  company: string;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio?: string;
  location?: string;
  followers: number;
  following: number;
}