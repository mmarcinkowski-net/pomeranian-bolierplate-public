import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Block08E1MetaData } from './Block08E1/router-data';
import { Block08E2MetaData } from './Block08E2/router-data';
import { Block08E3MetaData } from './Block08E3/router-data';
import { Block09AE1MetaData } from './Block09AE1/router-data';
import { Block09MetaData } from './Block09/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Block08E1MetaData,
  Block08E2MetaData,
  Block08E3MetaData,
  Block09AE1MetaData,
  Block09MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
