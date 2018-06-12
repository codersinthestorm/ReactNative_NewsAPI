// fetch JSON that contains headlines, from the API
const url = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=f7decdb52bef4a68a7509f3360217e96";

export async function getNews() {
    let result = await fetch(url).then((response) => response.json());
    return result.articles;
}
