export function isPrime(number) {
    if (number < 2) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}

export function isArmstrongNumber (num) {
    const abs = Math.abs(num);
    const stringNumber = abs.toString().split('').map(Number);
    const power = stringNumber.length;
    let sum = 0;

    stringNumber.forEach(number => sum += Math.pow(number, power));
    if (abs === sum) {
        return true;
    } else {
        return false;
    };
}

export function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

export function checkParity(n) {
    if(n % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

export function digitSum(n) {

    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    } 
    return sum;
}

export const funFact = async (num) => {
    const factUrl = ` http://numbersapi.com/${num}/math`;
    try {
        const resp = await fetch(factUrl);
        if (!resp.ok) throw new Error('Failed to fetch fact');

        const fact = await resp.text();

        // return fact.
        return fact;
    } catch (e) {
        console.error(e);
    };


}