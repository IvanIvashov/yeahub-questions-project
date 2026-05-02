export interface Question {
  id: number;
  title: string;
  description: string;
  rate?: number;
  complexity?: number;
  longAnswer?: string;
  imageSrc?: string;
}
