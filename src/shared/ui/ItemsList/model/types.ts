export type SpecializationsCard = {
  id: number;
  title: string;
};

export type SkillsCard = {
  id: number;
  title: string;
};

export type ItemsProps = {
  title: string;
  items: { id: number | string; title: string }[];
};
