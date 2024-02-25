export interface AllStates {
  stateName: string;
  tin: string;
  stateCode: string;
  getAllStates?(): AllStates[];
  getStateNameFromCode?(): AllStates[];
}

export interface AllDistricts {
  districtName: string;
  stateCode: string;
  districtCode: string;
  getAllDistricts?(): AllDistricts[];
  getAllDistrictsByState?(): AllDistricts[];
  getDistrictNameFromCode?(): string;
}
