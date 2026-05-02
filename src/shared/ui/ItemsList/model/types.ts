export type Items = {
  id: number;
  title: number | string;
};


export type ItemsProps = {
  title: string,
  items: { id: number | string; title: string | number }[];
  showButton?: boolean;
};

