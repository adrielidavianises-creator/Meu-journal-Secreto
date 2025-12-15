import React from 'react';
import { FileItem } from '../types';
import Button from './Button';
import { Download, FileHeart } from 'lucide-react';

interface FileCardProps {
  item: FileItem;
}

const FileCard: React.FC<FileCardProps> = ({ item }) => {
  return (
    <div className={`
      group relative flex flex-col justify-between
      bg-white rounded-3xl p-6
      border-2 border-transparent hover:border-journal-accent/20
      shadow-md hover:shadow-xl hover:shadow-pastel-lilac/30
      transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
      overflow-hidden
    `}>
      {/* Decorative Top Bar based on theme */}
      <div className={`absolute top-0 left-0 w-full h-3 ${item.colorTheme} opacity-70`}></div>

      {/* Icon Area */}
      <div className={`
        w-14 h-14 rounded-2xl mb-4 flex items-center justify-center
        ${item.colorTheme} text-journal-dark/80 bg-opacity-40
        group-hover:rotate-6 transition-transform duration-300
      `}>
        <FileHeart size={28} />
      </div>

      {/* Content */}
      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-paper-900 mb-2 leading-tight group-hover:text-journal-dark transition-colors">
          {item.friendlyTitle}
        </h3>
        <p className="text-xs font-mono text-paper-400 bg-paper-50 inline-block px-2 py-1 rounded-md border border-paper-100">
          {item.filename}
        </p>
      </div>

      {/* Action */}
      <Button 
        variant="secondary" 
        className="w-full gap-2 rounded-xl font-bold !bg-paper-50 border border-paper-200 hover:!bg-journal-dark hover:!text-white hover:border-journal-dark transition-all duration-300"
        onClick={() => window.open(item.downloadUrl, '_blank')}
      >
        <Download size={18} />
        Baixar Arquivo
      </Button>
    </div>
  );
};

export default FileCard;
