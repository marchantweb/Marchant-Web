export const useArticles = async (listedOnly = false) => {
    const articles = useState('articles', () => []);
    if (articles.value.length === 0) {
        articles.value = await $fetch('https://api.marchantweb.com/articles');
    }
    if(listedOnly){
        return ref(articles.value.filter(item => item["listed"]));
    }
    return articles;
}
