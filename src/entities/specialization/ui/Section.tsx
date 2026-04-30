import {
  SPECIALIZATION_CARD,
  SKILLS_CARD,
  ItemsList,
} from "../../../shared/ui/ItemsList";

function Section() {
  return (
    <>
      <ItemsList title="Специализация" items={SPECIALIZATION_CARD} />
      <ItemsList title="Навыки" items={SKILLS_CARD} />
    </>
  );
}

export default Section;
