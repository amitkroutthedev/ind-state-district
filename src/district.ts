import { AllDistricts } from './interface';
import fs from 'fs';
import { getStateCodeFromName } from './state';
import path from "path"

function getAllDistrictsList(): AllDistricts[] {
	const data = fs.readFileSync(path.join(__dirname,"../assets/states.json"), 'utf8');
	return JSON.parse(data).districts;
}

export function getAllDistricts(): AllDistricts[] {
	let list = getAllDistrictsList();
	return list as AllDistricts[];
}

export function getAllDistrictsByStateCode(code: string = ''): AllDistricts[] | undefined {
	if (!code) return undefined;
	if (code === '') return undefined;
	const list = getAllDistrictsList();
	const reqDistricts = list.filter((data) => data.stateCode === code);
	return Object.keys(reqDistricts).length === 0 ? undefined : reqDistricts;
}

export function getDistrictNameFromCode(code: string = ''): string | undefined {
	if (!code) return undefined;
	if (code === '') return undefined;
	const list = getAllDistrictsList();
	const reqDistricts = list.filter((data) => data.districtCode === code);
	return reqDistricts.length > 0 ? reqDistricts[0].districtName : undefined;
}

export function getDistrictNameFromStateName(name: string = ''): AllDistricts[] | undefined {
	if (!name) return undefined;
	if (name === '') return undefined;
	let code = getStateCodeFromName(name);
	if (!code) return undefined;
	const list = getAllDistrictsList();
	const reqDistricts = list.filter((data) => data.stateCode === code);
	return Object.keys(reqDistricts).length === 0 ? undefined : reqDistricts;
}

export default {
	getAllDistricts,
	getAllDistrictsByStateCode,
	getDistrictNameFromCode,
	getDistrictNameFromStateName,
};
