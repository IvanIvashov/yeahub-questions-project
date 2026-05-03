import {
  ItemsList,
  DIFFICULTY_LEVEL,
  RATING,
  STATUS,
} from "../../../shared/ui/ItemsList";
import { useSearchContext } from "@/entities/search/model/SearchContext";
import useFetchList from "@/shared/lib/hooks/useFetch";

function Section() {
  const {
    specializationFilter,
    setSpecializationFilter,
    skillsFilter,
    setSkillsFilter,
  } = useSearchContext();

  const specializations = useFetchList(
    "https://api.yeatwork.ru/specializations?page=1&limit=10",
  );

  const skills = useFetchList("https://api.yeatwork.ru/skills?page=1&limit=10");

  return (
    <>
      <ItemsList
        title="Специализация"
        data={specializations}
        filtered={specializationFilter}
        setFiltered={setSpecializationFilter}
      />

      <ItemsList
        title="Навыки"
        data={skills}
        filtered={skillsFilter}
        setFiltered={setSkillsFilter}
      />

      <ItemsList title="Уровень сложности" items={DIFFICULTY_LEVEL} />
      <ItemsList title="Рейтинг" items={RATING} />
      <ItemsList title="Статус" items={STATUS} />
    </>
  );
}

export default Section;
