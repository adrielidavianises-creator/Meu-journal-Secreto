import { FileItem, CategoryType } from '../types';

// ============================================================================
// 🛠️ ÁREA DE CONFIGURAÇÃO (EDITE AQUI) 🛠️
// ============================================================================
// Aqui é onde você controla o conteúdo do seu site.

// 1. LINK DO GRUPO DO WHATSAPP
// Coloque o link de convite do seu grupo aqui (entre as aspas).
export const LINK_WHATSAPP = "https://chat.whatsapp.com/seu-link-aqui";

// 2. LISTA DE ARQUIVOS: JOURNALS & PLANNERS
// Basta adicionar ou remover os nomes dos arquivos (entre aspas).
const ARQUIVOS_JOURNALS = [
  "Planner_Semanal_Floral_2025.pdf",
  "Diario_da_Gratidao_Simples.pdf",
  "Calendario_Lunar_Mistico.pdf",
  "Kit_Adesivos_Vintage_Botânico.pdf",
  "Planejador_Financeiro_Fofo.pdf"
];

// 3. LISTA DE ARQUIVOS: TRACKERS
// Arquivos que aparecerão na seção de Rastreadores.
const ARQUIVOS_TRACKERS = [
  "Rastreador_de_Habitos_Colorido.pdf",
  "Checklist_de_Leitura_Anual.pdf",
  "Tags_Para_Presentes_Fofos.pdf",
  "Grid_Pontilhado_Para_Bullet_Journal.pdf",
  "Controle_de_Humor_Pixel.pdf"
];

// ============================================================================
// ⚙️ LÓGICA DO SISTEMA (NÃO PRECISA EDITAR ABAIXO)
// ============================================================================

// Cores para alternar entre os cartões (Visual "Divertido e Colorido")
const PASTEL_THEMES = [
  'bg-pastel-pink',
  'bg-pastel-blue',
  'bg-pastel-lilac',
  'bg-pastel-mint',
  'bg-pastel-yellow'
];

// Função auxiliar para gerar títulos amigáveis
const generateFriendlyTitle = (filename: string): string => {
  const nameWithoutExt = filename.replace('.pdf', '');
  const title = nameWithoutExt.replace(/[_-]/g, ' ');
  return title;
};

export const getFiles = async (): Promise<FileItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let globalIndex = 0;

      // Função que transforma a lista de texto simples nos objetos que o site precisa
      const mapFiles = (filenames: string[], category: CategoryType): FileItem[] => {
        return filenames.map((filename) => {
          const item: FileItem = {
            filename: filename,
            friendlyTitle: generateFriendlyTitle(filename),
            downloadUrl: `#download-${filename}`, // Link simulado
            colorTheme: PASTEL_THEMES[globalIndex % PASTEL_THEMES.length],
            category: category
          };
          globalIndex++;
          return item;
        });
      };

      const journalFiles = mapFiles(ARQUIVOS_JOURNALS, 'Journals & Planners');
      const trackerFiles = mapFiles(ARQUIVOS_TRACKERS, 'Trackers');
      
      resolve([...journalFiles, ...trackerFiles]);
    }, 500);
  });
};