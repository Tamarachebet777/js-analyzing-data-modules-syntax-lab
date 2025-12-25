require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date using datejs
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
