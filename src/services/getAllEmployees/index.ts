import axios, { AxiosResponse } from "axios";
import { APEX_BASE_URL } from "../../utils/constants";
import { queryString } from "../../types/services-types";

export const getData = (
  queryParams: queryString
): Promise<AxiosResponse<any, any>> => {
  const GET_EMPLOYEES_URL = `${APEX_BASE_URL}/${queryParams.value}`;
  return axios.get(GET_EMPLOYEES_URL);
};
