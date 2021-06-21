export const GIPHYURL = searchText => `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC`;
export const FIXERURL = exchangeBase => exchangeBase ? `http://api.fixer.io/latest?base=${exchangeBase}` : `http://api.fixer.io/latest`;
