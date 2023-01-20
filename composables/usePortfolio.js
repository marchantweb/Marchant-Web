export const usePortfolio = async () => {
    const portfolio = useState('portfolio', () => []);
    if (portfolio.value.length === 0) {
        console.log("Portfolio Data Requested");
        portfolio.value = await $fetch('https://api.marchantweb.com/portfolio');
    }
    return portfolio;
}
