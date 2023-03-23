import { Dispatch, SetStateAction } from 'react';
import { AlumniCompaniesT } from '../../../types';

type OnUpdateCompaniesListP = {
  arrayCompanies: AlumniCompaniesT[];
  companiesList: AlumniCompaniesT[];
  setCompaniesList: Dispatch<SetStateAction<AlumniCompaniesT[]>>;
  visiblyItemsQty: number;
};

export const onUpdateCompaniesList = (params: OnUpdateCompaniesListP) => {
  const { visiblyItemsQty, arrayCompanies, companiesList, setCompaniesList } =
    params;

  const indexLastItem = arrayCompanies.findIndex(
    item => item.name === companiesList.at(-1).name
  );
  let newArrayItems = arrayCompanies.slice(
    indexLastItem,
    indexLastItem + visiblyItemsQty
  );
  if (newArrayItems.length < visiblyItemsQty) {
    newArrayItems = [
      ...newArrayItems,
      ...arrayCompanies.slice(0, visiblyItemsQty - newArrayItems.length)
    ];
  }

  setCompaniesList(newArrayItems);
};
