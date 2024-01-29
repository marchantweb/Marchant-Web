export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    if (portfolio.value.length === 0) {
        if (portfolio.value.length === 0) {
            let fetchedPortfolio = await $fetch('https://api.marchantweb.com/portfolio');
            fetchedPortfolio = fetchedPortfolio.map(item => {
                let featuredImage = item['cover'];
                for (let block of item['pageContent']) {
                    if (block.type === 'image') {
                        featuredImage = 'https://marchantweb.com/cdn-cgi/image/width=1974,quality=100,format=auto/https://api.marchantweb.com/images/' + encodeURI(block['id']);
                        break;
                    }
                }
                console.log(featuredImage);
                return {...item, 'featuredImage': featuredImage};
            });
            portfolio.value = fetchedPortfolio;
        }
    }
    if(listedOnly){
        return ref(portfolio.value.filter(item => item["listed"]));
    }
    return portfolio;
}
