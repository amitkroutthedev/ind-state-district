import allStateList from "../assets/states.json";
import { AllStates } from "./interface";


export function getAllStates(): AllStates[] {
  return allStateList.states;
}
export function getStateNameFromCode(
  code: string = ""
): string | undefined {
  if (!code) return undefined;
  if (code === "") return undefined;

  let reqstates = allStateList.states.filter(
    (value) => value.stateCode === code
  );
  return reqstates.length>0?reqstates[0].stateName : undefined;
}

export function getStateCodeFromName(name:string=""):string|undefined{
  if(!name) return undefined;
  if(name==="") return undefined;
  let reqstates = allStateList.states.filter(
    (value) => value.stateName === name
  )
  return reqstates.length>0?reqstates[0].stateCode : undefined;
}

export default { getAllStates, getStateNameFromCode };
