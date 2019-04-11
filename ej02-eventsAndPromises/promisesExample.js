let isBossFair = false;

// Promise
const willIGetARise = new Promise(
    (resolve, reject) => {
        if (isBossFair) {
            const rise = {
                ammount: '25%',
                startDate: 'today'
            };
            resolve(rise);
        } else {
            const reason = new Error('Boss is not fair');
            reject(reason);
        }

    }
);

const showOff = function (rise) {
    const message = 'Hey dude, I have ' + rise.ammount + ' rise since ' +
                rise.startDate;
    return Promise.resolve(message);
};

// call our promise
const askBoss = function () {
  console.log("going to check");
    willIGetARise
        .then(showOff)
        .then(fulfilled => {
              console.log(fulfilled);
              return Promise.resolve("Already brag about it");
            })
        .then(message=>console.log(message))
        .catch(error => console.log(error));
  console.log("already checked");
};

askBoss();
