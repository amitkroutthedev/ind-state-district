import allDistrictList from '../assets/district.json';
import { AllDistricts } from './interface';
import { getStateCodeFromName } from './state';

export function getAllDistricts(): AllDistricts[] {
	return allDistrictList.districts as AllDistricts[];
}

export function getAllDistrictsByStateCode(code: string = ''): AllDistricts[] | undefined {
	if (!code) return undefined;
	if (code === '') return undefined;
	const reqDistricts = (
		allDistrictList.districts as {
			districtName: string;
			stateCode: string;
			districtCode: string;
		}[]
	).filter((data) => data.stateCode === code);
	return Object.keys(reqDistricts).length === 0 ? undefined : reqDistricts;
}

export function getDistrictNameFromCode(code: string = ''): string | undefined {
	if (!code) return undefined;
	if (code === '') return undefined;
	const reqDistricts = (
		allDistrictList.districts as {
			districtName: string;
			stateCode: string;
			districtCode: string;
		}[]
	).filter((data) => data.districtCode === code);
	return reqDistricts.length > 0 ? reqDistricts[0].districtName : undefined;
}

export function getDistrictNameFromStateName(name: string = ''): AllDistricts[] | undefined {
	if (!name) return undefined;
	if (name === '') return undefined;
	let code = getStateCodeFromName(name);
	if (!code) return undefined;
	console.log(name, code);
	const reqDistricts = (
		allDistrictList.districts as {
			districtName: string;
			stateCode: string;
			districtCode: string;
		}[]
	).filter((data) => data.stateCode === code);
	return Object.keys(reqDistricts).length === 0 ? undefined : reqDistricts;
}

export default {
	getAllDistricts,
	getAllDistrictsByStateCode,
	getDistrictNameFromCode,
	getDistrictNameFromStateName,
};
