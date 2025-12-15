import React, { useEffect, useState } from 'react';
import { getFiles, LINK_WHATSAPP } from '../services/dataService';
import { FileItem } from '../types';
import FileCard from '../components/FileCard';
import { LogOut, FolderOpen, Heart, Book, CheckSquare, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getFiles();
      setFiles(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const journals = files.filter(f => f.category === 'Journals & Planners');
  const trackers = files.filter(f => f.category === 'Trackers');

  const renderSection = (title: string, icon: React.ReactNode, sectionFiles: FileItem[]) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="bg-white p-2 rounded-xl shadow-sm border border-paper-100 text-journal-dark">
          {icon}
        </div>
        <h3 className="font-serif font-bold text-2xl text-paper-900">
          {title}
        </h3>
        <div className="h-px bg-paper-200 flex-grow ml-4"></div>
      </div>
      
      {sectionFiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionFiles.map((file) => (
            <FileCard key={file.filename} item={file} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-paper-200">
          <p className="text-paper-400">Nenhum arquivo nesta categoria.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-paper-50 selection:bg-pastel-pink selection:text-journal-dark">
      {/* Header */}
      <header className="bg-white/90 border-b border-paper-100 sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-pastel-pink p-2 rounded-lg text-journal-dark rotate-3">
              <Heart size={20} fill="currentColor" />
            </div>
            <h1 className="hidden md:block font-serif font-bold text-2xl text-paper-900 tracking-tight">
              Downloads <span className="text-journal-accent">Secretos</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => window.open(LINK_WHATSAPP, '_blank')}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-md hover:shadow-lg gap-2 text-sm font-bold rounded-full px-5"
            >
              <MessageCircle size={18} fill="currentColor" className="text-white" />
              Grupo do WhatsApp
            </Button>

            <div className="h-6 w-px bg-paper-200 mx-1"></div>

            <Button variant="ghost" onClick={onLogout} className="text-sm font-medium hover:text-red-400 gap-2">
              <LogOut size={16} />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        {/* Intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-pastel-blue/20 mb-6 text-pastel-blue-dark">
             <FolderOpen size={32} className="text-journal-dark" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-paper-900 mb-4">
            Sua Pasta de Arquivos
          </h2>
          <p className="text-paper-500 max-w-lg mx-auto">
            Aqui estão todos os PDFs disponíveis para você, organizados por categoria.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-white rounded-3xl border border-paper-100 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 bg-paper-100 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pb-20">
            {renderSection('Journals & Planners', <Book size={24} />, journals)}
            {renderSection('Trackers', <CheckSquare size={24} />, trackers)}
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-paper-400 text-sm">
        <p>Papelaria & Journaling Share &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Dashboard;