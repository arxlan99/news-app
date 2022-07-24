import { createContext, useState } from 'react';

interface ISearchContext {
  filteredTitle: any;
  setFilteredTitle: (title: any) => void;
}

const defaultState: ISearchContext = {
  filteredTitle: '',
  setFilteredTitle: () => {},
};

export type State = typeof defaultState;

export const SearchContext = createContext<State>(defaultState);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [filteredTitle, setFilteredTitle] =
    useState<State['filteredTitle']>('');

  const value: ISearchContext = {
    filteredTitle,
    setFilteredTitle,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
