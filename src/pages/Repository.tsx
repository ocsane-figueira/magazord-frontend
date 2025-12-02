import { Link, useParams } from 'react-router-dom';
import {
  Typography,
  CircularProgress,
  Box,
  Chip,
  Divider,
  Avatar,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Header, LoadingScreen } from '@/shared/components';
import { NotFound, useCommits, useDetails } from '@/features/Repository';

export function Repository() {
  const { username = '', repoName = '' } = useParams<{
    username: string;
    repoName: string;
  }>();

  const { data: repo, isLoading: repoLoading } = useDetails(username, repoName);
  const { data: commits, isLoading: commitsLoading } = useCommits(username, repoName);

  if (repoLoading) {
    return <LoadingScreen />;
  }

  if (!repo) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={repo.name} />

      <main className="container mx-auto p-4 max-w-4xl">
        <Link
          to={`/profile/${username}`}
          className="flex items-center gap-2 text-blue-600 mb-4 hover:underline"
        >
          <ArrowBackIcon fontSize="small" /> Voltar para o Perfil
        </Link>

        <div className="p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <Typography variant="h4" fontWeight="bold" color="primary">
                {repo.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="mt-1"
              >
                {repo.description || 'Sem descrição.'}
              </Typography>
            </div>

            <div className="flex gap-4">
              <Chip
                icon={<StarBorderIcon />}
                label={`${repo.stargazers_count} Stars`}
                variant="outlined"
                color="warning"
              />
              <Chip
                icon={<CallSplitIcon />}
                label={`${repo.forks_count} Forks`}
                variant="outlined"
                color="info"
              />
              <Chip
                icon={<ErrorOutlineIcon />}
                label={`${repo.open_issues_count} Issues`}
                variant="outlined"
                color="error"
              />
            </div>
          </div>

          <div className="mt-4 text-end">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        </div>

        <Typography variant="h5" fontWeight="bold" className="mb-4">
          Commits
        </Typography>

        {commitsLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <div className="overflow-hidden">
            {commits?.slice(0, 10).map((item, index) => (
              <div key={item.sha}>
                <div className="p-4 hover:bg-gray-50 transition flex items-start gap-4">
                  <Avatar
                    src={item.author?.avatar_url}
                    alt={item.commit.author.name}
                    sx={{ width: 40, height: 40 }}
                  />

                  <div className="flex-1">
                    <Typography variant="body1" fontWeight="500">
                      {item.commit.message}
                    </Typography>

                    <div className="flex flex-col items-start gap-2 mt-1 text-sm text-gray-500 md:flex-row">
                      <span className="font-bold">
                        {item.commit.author.name}
                      </span>
                      <span>
                        comitou em{' '}
                        {new Date(item.commit.author.date).toLocaleDateString(
                          'pt-BR',
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                {index < commits.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
