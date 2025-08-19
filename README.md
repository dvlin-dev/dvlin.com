# dvlin.com

build
```sh
docker build --platform linux/amd64 -t dvlin-com .     

docker tag dvlin-com dvlindev/dvlin-com
docker push dvlindev/dvlin-com
```

docker run -d --name dvlin-com -p 81:80 --restart unless-stopped dvlindev/dvlin-com
