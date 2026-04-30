export type SpecializationsCard = {
  id: number;
  title: string;
};

export type SkillsCard = {
  id: number;
  title: string;
};

export type ItemsProps = {
  title: string,
  items: { id: number | string; title: string | number }[];
  showButton?: boolean;
};

export type DifficultyLevel = {
	id: number,
	title: string,
}

export type Rating = {
	id: number,
	title: number | string
}
export type Status = {
  id: number;
  title: string;
};