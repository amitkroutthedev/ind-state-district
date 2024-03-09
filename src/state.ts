//import allStateList from "../assets/states.json";
import { AllStates } from './interface';
import fs from 'fs';

function getAllStatesList(): AllStates[] {
	const data = fs.readFileSync('../assets/states.json', 'utf8');
	return JSON.parse(data).states;
}

export function getAllStates(): AllStates[] {
	const list = getAllStatesList();
	return list as AllStates[];
}
export function getStateNameFromCode(code: string = ''): string | undefined {
	if (!code) return undefined;
	if (code === '') return undefined;
	const list = getAllStatesList();
	const reqstates = list.filter((value) => value.stateCode === code);
	return reqstates.length > 0 ? reqstates[0].stateName : undefined;
}

export function getStateCodeFromName(name: string = ''): string | undefined {
	if (!name) return undefined;
	if (name === '') return undefined;
	const list = getAllStatesList();
	let reqstates = list.filter((value) => value.stateName === name);
	return reqstates.length > 0 ? reqstates[0].stateCode : undefined;
}

export default { getAllStates, getStateNameFromCode };
