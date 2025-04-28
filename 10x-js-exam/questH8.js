// Quest H8 – Merge and Extract Difficulty: Hard (5 pts) Story You receive default and override 
// settings. You must merge them and extract values with destructuring. Objective Use 
// Object.assign, object destructuring in a function parameter, and default values. 
// Instructions Name your file questH8.js Create two 
// constants: defaults = { retry: 3, timeout: 1000 } overrides = { timeout: 500 } Merge 
// into settings with Object.assign({}, defaults, overrides) Declare a 
// function displaySettings({ retry = 1, timeout = 0 }) that prints exactly: 
// Settings – retry: <retry>, timeout: <timeout> Call displaySettings(settings) 
// Acceptance Criteria settings equals { retry: 3, timeout: 500 } displaySettings uses 
// destructuring with defaults The console shows exactly: Settings – retry: 3, timeout: 500

//////////////////////////////////////////////////////////
const defaults = { retry: 3, timeout: 1000 };
const overrides = { timeout: 500 };

const mergedObjects = Object.assign({}, defaults, overrides);


function displaySettings(obj = { 'retry': 1, 'timeout': 0 }) {
    console.log(`Settings - retry: ${obj.retry} timeout: ${obj.timeout}`);
}

displaySettings(mergedObjects);
