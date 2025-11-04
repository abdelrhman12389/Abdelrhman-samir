
export type Screen = 'ADD' | 'MAP' | 'PROFILE';
export type LanguageDirection = 'ltr' | 'rtl';

export interface Dream {
  id: string;
  text: string;
  timestamp: Date;
  location: {
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
}

export interface AIAnalysis {
  summary: string;
  themes: string[];
  symbols: string[];
  emotions: string[];
}

export interface DreamMatch extends Dream {
  similarity: number;
}
