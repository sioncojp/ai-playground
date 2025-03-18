
```
# https://future-architect.github.io/articles/20240411a/
# https://zenn.dev/kun432/scraps/b5fd6965c6c8e9
docker pull getmeili/meilisearch:prototype-japanese-13

# -e MEILI_ENV='development'はscraperを動かすなら外す必要がある
docker run -it --rm \
    -p 7700:7700 \
    -e MEILI_ENV='development' \
    -e MEILI_MASTER_KEY='aSampleMasterKey' \
    -v $(pwd)/meili_data:/meili_data \
    getmeili/meilisearch:prototype-japanese-13

# api key is aSampleMasterKey

# scraiping for create index
docker run -t --rm \
    -e MEILISEARCH_HOST_URL=http://192.168.x.x:7700 \
    -e MEILISEARCH_API_KEY='aSampleMasterKey' \
    -v "$(pwd)/docs-scraper.config.json":/docs-scraper/docs-scraper.config.json \
    getmeili/docs-scraper:latest pipenv run ./docs_scraper docs-scraper.config.json

```
