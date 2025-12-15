export interface User {
  username: string;
  isAuthenticated: boolean;
}

export type CategoryType = 'Journals & Planners' | 'Trackers';

export interface FileItem {
  filename: string;      // The original filename (e.g. "Planner_Floral.pdf")
  friendlyTitle: string; // The generated title (e.g. "Planner Floral")
  downloadUrl: string;
  colorTheme: string;    // CSS class for the card color
  category: CategoryType;
}