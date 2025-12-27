export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  mediaType?: string;
  link?: string;
  features?: string[];
  duration?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}