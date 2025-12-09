export default async function getRandomNumberPromise() {
    return new Promise<number>( r => setTimeout(() => { r(generateThreeDigitNum()) }, 5000))
}

const generateThreeDigitNum = () => Math.round(Math.random() * 1000);