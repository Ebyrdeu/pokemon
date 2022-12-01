# Stack used

<div style='display: flex'>
<img style="margin-right: 20px" src="https://cdn.worldvectorlogo.com/logos/docker.svg" width="48" height="48" alt="docker" />
<img style="margin-right: 20px" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" width="48" height="48" alt="Postgres" />
<img style="margin-right: 20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="48" height="48" alt="TypeScript"/>
<img style="margin-right: 20px" src="https://raw.githubusercontent.com/samfromaway/samfromaway/master/.github/images/nextjs.png" width="48" height="48" alt="Next JS"/>
</div>

<br>
<div style='display: flex'>
<img  style="margin-right: 20px" src="https://brandeps.com/icon-download/P/Prisma-icon-vector-01.svg" width="48" height="48" alt="Prisma"/>
<img  style="margin-right: 20px" src="https://trpc.io/img/logo.svg" width="48" height="48" alt="tRPC"/>
<img style="margin-right: 20px" src="https://raw.githubusercontent.com/colinhacks/zod/6ce18f3de2ce29c3c3eb35ac08983d181311b40e/logo.svg" width="48" height="48" alt="Zod" />
<img  style="margin-right: 20px" src="https://pbs.twimg.com/profile_images/1384763585742704642/TJa1rkqk_400x400.jpg" width="48" height="48" alt="Mantine"/>

</div>

## Getting Started

#### 1. Run  the docker: 

```bash
docker pull postgres
```

#### 2. Run the Prisma:

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma studio
```

#### 3. use 'fillDatabase.ts' in pokemon.ts
```ts
export const pokemonsRouter = router({
	pokemons: procedure.query(async ({ input }) => {
		fillDatabase()
		return await prisma.pokemons.findMany()
	})
});
```

#### 4. Run the Developent server

```bash
yarn dev
```

