import type { Dispatch, SetStateAction } from "react";

 export interface MyContext {
	searchValue: string,
	setSearchValue: Dispatch<SetStateAction<string>>
}