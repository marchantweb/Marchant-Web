export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    if (portfolio.value.length === 0) {
        portfolio.value = await $fetch('https://api.marchantweb.com/portfolio');
    }
    if(listedOnly){
        return ref(portfolio.value.filter(item => item["listed"]));
    }
    return portfolio;
}
