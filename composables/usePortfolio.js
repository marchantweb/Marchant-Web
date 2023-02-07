export const usePortfolio = async () => {
    const portfolio = useState('portfolio', () => []);
    if (portfolio.value.length === 0) {
        portfolio.value = await $fetch('https://api.marchantweb.com/portfolio');
    }
    return portfolio;
}
