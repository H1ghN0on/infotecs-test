import React from "react";

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
