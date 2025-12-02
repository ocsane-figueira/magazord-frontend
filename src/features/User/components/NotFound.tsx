import { Typography } from "@mui/material";
import { Header } from "@/shared/components";

export function NotFound() {
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