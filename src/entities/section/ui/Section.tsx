import {
  SPECIALIZATION_CARD,
  SKILLS_CARD,
  ItemsList,
  DIFFICULTY_LEVEL,
  RATING,
  STATUS,
} from "../../../shared/ui/ItemsList";

function Section() {
  return (
    <>
      <ItemsList title="Специализация" items={SPECIALIZATION_CARD} />
      <ItemsList title="Навыки" items={SKILLS_CARD} />
      <ItemsList
        title="Уровень сложности"
        items={DIFFICULTY_LEVEL}
        showButton={false}
      />
      <ItemsList title="Рейтинг" items={RATING} showButton={false} />
      <ItemsList title="Статус" items={STATUS} showButton={false} />
    </>
  );
}

export default Section;
