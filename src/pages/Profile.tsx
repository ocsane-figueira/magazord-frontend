import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  CircularProgress,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { Header, LoadingScreen } from '@/shared/components';
import { Card, NotFound, useUser } from '@/features/User';
import { RepoItem, useRepos, useStarred } from '@/features/Repository';

type RepoTab = 'repo' | 'starred';

export function Profile() {
  const { username = '' } = useParams<{ username: string }>();
  const [currentTab, setCurrentTab] = useState<RepoTab>('repo');

  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterLanguage, setFilterLanguage] = useState('All');

  const { data: user, isLoading: userLoading, isError } = useUser(username);
  const { data: repos, isLoading: reposLoading } = useRepos(username);
  const { data: starred, isLoading: starredLoading } = useStarred(username);

  const currentList = currentTab === 'repo' ? repos : starred;
  const isLoadingList = currentTab === 'repo' ? reposLoading : starredLoading;

  const availableLanguages = useMemo(() => {
    if (!currentList) return [];

    const languages = currentList.map((repo) => repo.language!).filter(Boolean);
    return Array.from(new Set(languages)).sort();
  }, [currentList]);

  const filteredList = useMemo(() => {
    if (!currentList) return [];

    return currentList.filter((repo) => {
      const matchesText =
        repo.name.toLowerCase().includes(filterText.toLowerCase()) ||
        (repo.description &&
          repo.description.toLowerCase().includes(filterText.toLowerCase()));

      const matchesLanguage =
        filterLanguage === 'All' || repo.language === filterLanguage;

      const matchesType =
        {
          Sources: !repo.fork,
          Forks: repo.fork,
          Archived: repo.archived,
          Templates: !!repo.is_template,
        }[filterType] ?? true;

      return matchesText && matchesLanguage && matchesType;
    });
  }, [currentList, filterText, filterLanguage, filterType]);

  if (userLoading) {
    return <LoadingScreen />;
  }

  if (isError || !user) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={user.name || user.login} />

      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6 mt-4 overflow-hidden">
        <Card user={user} />

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
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  fullWidth
                  placeholder="Filtrar por nome ou descrição..."
                  variant="outlined"
                  size="small"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
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

                <FormControl size="small" className="min-w-[150px]!">
                  <InputLabel>Linguagem</InputLabel>
                  <Select
                    label="Linguagem"
                    value={filterLanguage}
                    onChange={(e) => setFilterLanguage(e.target.value)}
                  >
                    <MenuItem value="All">Todos</MenuItem>
                    {availableLanguages.map((lang) => (
                      <MenuItem key={lang} value={lang}>
                        {lang}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl size="small" className="min-w-[150px]!">
                  <InputLabel>Tipo</InputLabel>
                  <Select
                    value={filterType}
                    label="Type"
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <MenuItem value="All">Todos</MenuItem>
                    <MenuItem value="Sources">Sources</MenuItem>
                    <MenuItem value="Forks">Forks</MenuItem>
                    <MenuItem value="Archived">Archived</MenuItem>
                    <MenuItem value="Templates">Templates</MenuItem>
                  </Select>
                </FormControl>
              </div>

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
