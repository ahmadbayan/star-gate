export interface Slide {
  url: string;
  isVideo: boolean;
  poster?: string;
}

export interface ImageSliderProps {
  slides: Slide[];
}

export interface HeaderItemsProps {
  title: string;
  link: string;
  component?: any;
}

export interface DropdownProps {
  hamburgerOpen: boolean;
}

export interface ParentProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}

export interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}
