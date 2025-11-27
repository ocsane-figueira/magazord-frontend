export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
  updated_at: string;
  open_issues_count: number;
  fork: boolean;
  archived: boolean;
  is_template?: boolean
  owner: {
    login: string;
  };
}