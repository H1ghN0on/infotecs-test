import React from "react";

//Хук для поиска элементов массива объектов по значению

//Получает на вход поисковое значение, искомый массив и ключ, по которому нужно искать нужные элементы
//Возвращает найденные значения и булевое значение - используется ли поиск на данный момент

const useSearch = (searchValue: string, searchFrom: any[], field: string) => {
  const searchedValues = React.useMemo(() => {
    return searchFrom.filter((value) =>
      value[field].toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, searchFrom, field]);

  const checkSearched = React.useMemo(() => {
    return (searchValue && searchedValues.length > 0) || !searchValue;
  }, [searchValue, searchedValues]);

  return { searchedValues, checkSearched };
};

export default useSearch;
