import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Typography,
  Box,
  CircularProgress,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Header } from '@/components/Header';
import {
  useGithubRepos,
  useGithubStarred,
  useGithubUser,
} from '@/hooks/useGithub';
import { RepoItem } from '@/components/RepoItem';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import type { GitHubUser } from '@/types/GitHubUser';

type RepoTab = 'repo' | 'starred';

function LoadingProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Carregando..." />
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <CircularProgress />
      </div>
    </div>
  );
}

function NotFoundProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Erro" />
      <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)] text-red-500 gap-4">
        <Typography variant="h5">Usuário não encontrado!</Typography>
        <Typography>Verifique se o nome está correto.</Typography>
      </div>
    </div>
  );
}

function CardProfile({ user }: { user: GitHubUser }) {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 h-fit sticky top-20">
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <Avatar
          src={user.avatar_url}
          alt={user.name}
          sx={{
            width: 150,
            height: 150,
            border: '4px solid white',
            boxShadow: 3,
          }}
        />
        <div className="w-full">
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            @{user.login}
          </Typography>
        </div>
        {user.bio && (
          <Typography variant="body2" color="text.secondary" className="italic">
            "{user.bio}"
          </Typography>
        )}
        <div className="flex flex-col gap-2 w-full text-left mt-2">
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            color="text.secondary"
          >
            <PeopleIcon fontSize="small" />
            <Typography variant="body2">
              <b>{user.followers}</b> seguidores · <b>{user.following}</b>{' '}
              seguindo
            </Typography>
          </Box>
          {user.location && (
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              color="text.secondary"
            >
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{user.location}</Typography>
            </Box>
          )}
        </div>
      </div>
    </aside>
  );
}

export function Profile() {
  const { username } = useParams<{ username: string }>();
  const [currentTab, setCurrentTab] = useState<RepoTab>('repo');
  const [filter, setFilter] = useState('');

  const {
    data: user,
    isLoading: userLoading,
    isError,
  } = useGithubUser(username || '');
  const { data: repos, isLoading: reposLoading } = useGithubRepos(
    username || '',
  );
  const { data: starred, isLoading: starredLoading } = useGithubStarred(
    username || '',
  );

  const currentList = currentTab === 'repo' ? repos : starred;
  const isLoadingList = currentTab === 'repo' ? reposLoading : starredLoading;

  const filteredList = currentList?.filter(
    (repo) =>
      repo.name.toLowerCase().includes(filter.toLowerCase()) ||
      (repo.description &&
        repo.description.toLowerCase().includes(filter.toLowerCase())),
  );

  if (userLoading) {
    return <LoadingProfile />;
  }

  if (isError || !user) {
    return <NotFoundProfile />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={user.name || user.login} />

      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6 mt-4">
        <CardProfile user={user} />

        <section className="flex-1">
          <div className="p-0 overflow-hidden min-h-[500px]">
            <Tabs
              value={currentTab}
              onChange={(_, newValue) => setCurrentTab(newValue)}
              textColor="primary"
              indicatorColor="primary"
              className="border-b border-gray-200"
            >
              <Tab
                value="repo"
                label={`Repositórios (${repos?.length || 0})`}
              />
              <Tab
                value="starred"
                label={`Favoritos (${starred?.length || 0})`}
              />
            </Tabs>

            <div className="py-4 px-2 flex flex-col gap-6">
              <TextField
                fullWidth
                placeholder="Filtrar por nome ou descrição..."
                variant="outlined"
                size="small"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              {isLoadingList ? (
                <Box display="flex" justifyContent="center" p={4}>
                  <CircularProgress />
                </Box>
              ) : filteredList && filteredList.length > 0 ? (
                <div>
                  {filteredList.map((repo) => (
                    <RepoItem key={repo.id} repo={repo} />
                  ))}
                </div>
              ) : (
                <Box textAlign="center" py={4} color="text.secondary">
                  <Typography>Nenhum repositório encontrado.</Typography>
                </Box>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
