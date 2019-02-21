class Numbers {
    generatePrime(max) {
        if (max <= 1) return []
    
        const sieve = new Array(max).fill(true);
        sieve[0] = false
        sieve[1] = false
    
        for (let number = 2; number < max; number++) {
            if (sieve[number] === true) {
                for (let i = Math.pow(number, 2); i < max; i += number) {
                    sieve[i] = false
                }
            }
        }
    
        return sieve.reduce((primes, isPrime, index) => {
            if (isPrime) primes.push(index);
    
            return primes;
        }, []);
    }
}

module.exports = Numbers;