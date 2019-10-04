export const compareNumbers = (guess, correctNumber) => {
    if (guess < correctNumber){
        return -1;
    }
    else if (guess > correctNumber){
        return 1;
    }
    else if (guess === correctNumber){
        return 0;
    }
    else {
        // eslint-disable-next-line no-console
        console.log('could not compare numbers');
        return 2;
    }
};