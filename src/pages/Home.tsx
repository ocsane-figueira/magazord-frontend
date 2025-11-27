import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Header } from '@/components/Header';

export function Home() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!userName.trim()) return;
    navigate(`/profile/${userName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="Home" />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Buscar Usuário
          </h1>

          <div className="flex flex-col gap-4">
            <TextField
              fullWidth
              variant="outlined"
              label="Nome do usuário GitHub"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <Button
              size="large"
              variant="contained"
              onClick={handleSearch}
              disabled={!userName.trim()}
              className="bg-blue-600 hover:bg-blue-700 py-3"
            >
              Buscar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
