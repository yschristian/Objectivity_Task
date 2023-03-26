const urls = [];
function generateShortUrl() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      shortUrl += chars[randomIndex];
    }
    return shortUrl;
  }
  function createShortUrl(longUrl) {
  
    const existingUrl = urls.find(url => url.longUrl === longUrl);
    if (existingUrl) {
      return existingUrl.shortUrl;
    }

    let shortUrl;
    do {
      shortUrl = generateShortUrl();
    } while (urls.some(url => url.shortUrl === shortUrl));
  
    urls.push({ longUrl, shortUrl });
  
    return shortUrl;
  }
  function redirectShortUrl(shortUrl) {
    const matchingUrl = urls.find(url => url.shortUrl === shortUrl);
    if (matchingUrl) {
      return matchingUrl.longUrl;
    } else {
      console.error(`Short URL not found: ${shortUrl}`);
    }
  }
  const longUrl = 'https://www.linkedin.com/mynetwork/';
  const shortUrl = createShortUrl(longUrl);
  console.log(`Your url=${shortUrl}`);

 const longUrls=  redirectShortUrl(shortUrl);
 console.log(longUrls);

 console.log(urls);
        