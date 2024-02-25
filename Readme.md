
# ind-states-districts

This npm package provides a list of districts across all states and union territories of India, along with their respective state codes(short forms) and district codes(short forms).


## Installation

```bash
  npm install ind-state-district
```
    
## Usage

### 1. `State.getAllStates()`

This function returns an array of objects, where each object represents a state/union territory in India and contains the following properties:
 - `stateName`: The name of the state/union territory.
 - `tin`: The taxpayer identification number of the state/union territory.
 - `stateCode`: The short form of the state/union territory name

```javascript
[
  { stateName: 'Andhra Pradesh', tin: '37', stateCode: 'AP' },
  { stateName: 'Arunachal Pradesh', tin: '12', stateCode: 'AR' },....
}
```
### 2. `State.getStateNameFromCode(stateCode)`

This function returns a string, the full name of state/union territory.

```javascript
const {State} = require("state-district-ind")

console.log(State.getStateNameFromCode("OD"));

//Output - Odisha
```
### 3. `Districts.getAllDistricts()`

This function returns an array of objects, where each object represents a district of the all states/union territories in India and contains the following properties:
 - `districtName`: The name of the district.
 - `stateCode`: The short form of the state/union territory name
 - `districtCode`: The short form of the district name

```javascript
[
  { districtName: 'Nicobar', stateCode: 'AN', districtCode: 'NI' },
  {
    districtName: 'North and Middle Andaman',
    stateCode: 'AN',
    districtCode: 'NMA'
  },
  {
    districtName: 'South Andaman',
    stateCode: 'AN',
    districtCode: 'SA'
  },....
]

```
### 4. `Districts.getAllDistrictsByStateCode(stateCode)`|`Districts.getDistrictNameFromStateName(stateName)`

This function returns an array of objects, where each object represents a district of the particular states/union territory of India and contains the following properties:
 - `districtName`: The name of the district.
 - `stateCode`: The short form of the state/union territory name
 - `districtCode`: The short form of the district name

```javascript
    //Districts.getDistrictNameFromStateName("Andhra Pradesh")
[
    {
      "districtName": "Alluri Sitarama Raju",
      "stateCode": "AP",
      "districtCode": "ASR"
    },
    {
      "districtName": "Anakapalle",
      "stateCode": "AP",
      "districtCode": "AKP"
    },
    {
      "districtName": "Ananthapuramu",
      "stateCode": "AP",
      "districtCode": "ATP"
    },.....
]
```
### 5. `Districts.getDistrictNameFromCode(districtCode)`

This function returns a string, the full name of district.

```javascript
const {Districts} = require("state-district-ind")

console.log(Districts.getDistrictNameFromCode("GTR"));
// Output - Gunter
```
## Acknowledgements

 - [Vikaspedia](https://vikaspedia.in/education/current-affairs/states-and-districts-of-india) - For data collection
 - [TSUP](https://github.com/egoist/tsup) - Simplest libraries to bundle Typescript