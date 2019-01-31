const arraySet = [
  ['A', '0', 'C', 'D', '0'],
  ['0', 'E', '0', '0', 'F'],
  ['0', 'G', '0', '0', '0'],
  ['H', 'I', 'J', '0', 'K'],
  ['L', 'M', '0', 'N', '0']
];


/* checkArray()-It accepts location and shiftLocation as parameters.
 location accepts the array value as the index value of element.
 shiftLocation accepts the array value as the index value of destination location.*/

const myLogic = (location, shiftLocation) => {
  return new Promise((resolve, reject) => {
    if (arraySet[location[0]][location[1]] == '0') {
      return resolve({
        data: `Value 0 can not be shifted`
      });
    } else if (arraySet[shiftLocation[0]][shiftLocation[1]] == '0') {
      if (location[0] !== shiftLocation[0]) {
        if (location[1] === shiftLocation[1]) {
          return resolve({
            data: `Value: ${arraySet[location[0]][location[1]]} can be shifted`
          });
        } else {
          return reject({
            data: `Item is not movable`
          });
        }
      } else {
        return resolve({
          data: `Value: ${arraySet[location[0]][location[1]]} can be shifted`
        });
      }
    } else {
      return reject({
        data: `Item is not movable`
      });
    }
  })
}

const eggDropping = (eggJson) => {
  return new Promise((resolve, reject) => {

    let start = 1;
    let trailCount = 0;
    console.log(eggJson.noEggs);
    if (eggJson.noEggs == null || eggJson.maxFloor == null) {
      return resolve({
        data: `Eggs or floor is not found.`
      });
    } else {
      for (let i = 1; i <= eggJson.noEggs; i++) {
        if (start !== eggJson.maxFloor || start < eggJson.maxFloor) {
          if (eggJson.isEggDestroyed != null) {
            for (let j = 0; j < eggJson.isEggDestroyed.length; j++) {
              if (i == eggJson.isEggDestroyed[j]) {
                trailCount++;
                start + 3;
              }
            }
          } else {
            start + 3;
            trailCount++;
          }
        } else {
          return reject({
            data: `The taril is for ${trailCount} times`
          });
        }
      }
      return resolve({
        data: `The taril is for ${trailCount} times`
      });
    }
  })
}

export {
  myLogic,
  eggDropping
};
