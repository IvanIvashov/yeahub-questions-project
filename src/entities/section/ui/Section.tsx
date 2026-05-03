import {
  DIFFICULTY_LEVEL,
  RATING,
  STATUS,
} from "@shared/ui/ItemsList/model/itemsListData";

import { useSearchContext } from "@/entities/search/model/SearchContext";
import useFetchList from "@/shared/lib/hooks/useFetch";
import { ItemsList } from "@/shared/ui/ItemsList";

function Section() {
  const {
    specializationFilter,
    setSpecializationFilter,
    skillsFilter,
    setSkillsFilter,
    rateFilter,
    setRateFilter,
    complexityFilter,
    setComplexityFilter,
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

      <ItemsList
        title="Уровень сложности"
        data={DIFFICULTY_LEVEL}
        filtered={complexityFilter}
        setFiltered={setComplexityFilter}
      />
      <ItemsList
        title="Рейтинг"
        data={RATING}
        filtered={rateFilter}
        setFiltered={setRateFilter}
      />
      <ItemsList title="Статус" data={STATUS} />
    </>
  );
}

export default Section;
