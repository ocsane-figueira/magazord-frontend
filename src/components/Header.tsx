import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <Link to="/" className="font-bold text-lg hover:text-blue-400 transition shrink-0">
            GitHub
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-lg truncate">{title}</span>
        </div>

        <Link to="/">
          <IconButton sx={{ color: 'white' }} aria-label="Voltar ao início" title="Início">
            <HomeIcon />
          </IconButton>
        </Link>
      </div>
    </header>
  );
}