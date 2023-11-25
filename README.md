# TypeScript Express Template

Helps to quickly setup TypeScript projects with an ExpressJS server.

## Dependencies

- NodeJS 18+
- Docker

## Create new project

```sh
SLUG=typescript-sandbox-$(date +%s)
{
git clone git@github.com:experimental-software/typescript-express-template.git $SLUG
cd $SLUG
npm install
}
```

## Development

```sh
npm run dev
```

## Maintenance

**Update dependencies**

```sh
npm outdated
npm update
{
git add .
git commit -m "chore: update dependencies"
git push
}
```

**Build Docker image**

```sh
docker build -t experimentalsoftware/express-server .
docker run --init -p 7000:7000 experimentalsoftware/express-server
```

## References

- [How To Set Up a Node Project With Typescript | digitalocean.com](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)  
