export interface PostObj {
  by: string;
  id: number;
  time: number;
  type: string;
  title?: string;
  text?: string;
  parent?: number;
  descendants?: number;
  kids?: number[];
  score?: number;
  url?: string;
}
