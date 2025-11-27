interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center gap-2">
        <span className="font-bold text-lg">GitHub</span>
        <span className="text-gray-400">/</span>
        <span className="text-lg">{title}</span>
      </div>
    </header>
  );
}
