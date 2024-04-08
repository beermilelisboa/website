```shell
docker build -t beermile .   
docker tag beermile europe-west9-docker.pkg.dev/beermile-418917/beermile/website-image
docker push europe-west9-docker.pkg.dev/beermile-418917/beermile/website-image
```