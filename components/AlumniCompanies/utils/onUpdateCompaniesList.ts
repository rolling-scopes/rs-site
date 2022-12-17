import { Dispatch, SetStateAction } from 'react';
import { AlumniCompaniesT } from '../../../types';

type OnUpdateCompaniesListP = {
  companies: AlumniCompaniesT[];
  companiesList: AlumniCompaniesT[];
  setCompaniesList: Dispatch<SetStateAction<AlumniCompaniesT[]>>;
  itemsQty: number;
};

export const onUpdateCompaniesList = (params: OnUpdateCompaniesListP) => {
  const { itemsQty, companies, companiesList, setCompaniesList } = params;

  const indexLastItem = companies.findIndex(
    item => item.name === companiesList.at(-1).name
  );
  let newArrayItems = companies.slice(indexLastItem, indexLastItem + itemsQty);
  if (newArrayItems.length < itemsQty) {
    newArrayItems = [
      ...newArrayItems,
      ...companies.slice(0, itemsQty - newArrayItems.length)
    ];
  }

  setCompaniesList(newArrayItems);
};
