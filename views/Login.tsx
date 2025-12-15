import React, { useState } from 'react';
import Button from '../components/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleEnter = () => {
    setLoading(true);
    // Simula um pequeno carregamento para efeito visual
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pastel-pink via-paper-50 to-pastel-blue">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-pastel-lilac/20 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pastel-pink/30 text-center">
        
        {/* Fun Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-pastel-yellow rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-pastel-pink rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-20 w-24 h-24 bg-pastel-blue rounded-full blur-xl opacity-40"></div>
        
        <div className="relative z-10">
          <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-pastel-pink to-pastel-lilac rounded-full flex items-center justify-center mb-8 text-white shadow-lg shadow-pastel-pink/40 transform transition-transform hover:scale-110 duration-300">
            <Sparkles size={40} />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-journal-dark mb-4 tracking-tight">
            Bem-vindo ao<br/>Nosso Journal
          </h1>
          
          <p className="text-paper-500 mb-10 text-lg leading-relaxed">
            Acesse nossa coleção exclusiva de papéis de carta, planners e adesivos digitais.
          </p>

          <Button 
            onClick={handleEnter}
            className="w-full h-14 text-lg rounded-xl font-bold bg-gradient-to-r from-journal-accent to-journal-dark hover:from-journal-dark hover:to-journal-accent transform transition-all hover:scale-[1.02] shadow-lg shadow-journal-accent/30 text-white border-0 flex items-center justify-center gap-3" 
            isLoading={loading}
          >
            Entrar no App
            <ArrowRight size={20} />
          </Button>

          <div className="mt-8">
            <p className="text-xs text-paper-400 font-medium bg-paper-50 inline-block px-4 py-2 rounded-full border border-paper-100">
              ✨ Acesso Livre e Gratuito
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;