import { Dispatch, SetStateAction } from 'react';
import { ArrayAlumniCompanies } from '../../../types';

type OnUpdateCompaniesListP = {
  companies: ArrayAlumniCompanies[];
  companiesList: ArrayAlumniCompanies[];
  setCompaniesList: Dispatch<SetStateAction<ArrayAlumniCompanies[]>>;
};

export const onUpdateCompaniesList = (params: OnUpdateCompaniesListP) => {
  const { companies, companiesList, setCompaniesList } = params;

  const indexLastItem = companies.findIndex(
    item => item.name === companiesList.at(-1).name
  );
  let newArrayItems = companies.slice(indexLastItem, indexLastItem + 6);
  if (newArrayItems.length < 6) {
    newArrayItems = [
      ...newArrayItems,
      ...companies.slice(0, 6 - newArrayItems.length)
    ];
  }

  setCompaniesList(newArrayItems);
};