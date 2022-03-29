This is a recruitment task for DynamicSolutions for Senior Fronted Developer role.
It's a simple website with two subpages: user profile view and user information form used to udapte the profile.
It's made in React and TypeScript and uses Atlaskit Design System implementation library.

## Getting Started
Install dependencies:
```bash
npm run install
# or
yarn install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run tests:
```bash
npm run test
# or
yarn test
```


Run typecheck:
```bash
npm run typecheck
# or
yarn typecheck
```

## Assumptions

- I've copied a logo from DS website - I've assumed that creating one myself is not a part of the task
  
- I've filled the header and footer mostly with mock data
  
- I've assumed that avatar is not uploaded by the user, 
  since the task did not mention setting up the backend or external service to store files. 
  I've used avatars found online to be chosen by the user.
  
## Chosen technologies, techniques etc.
- I've used React since this is my first choice technology for fronted development
- I've used Typescript instead of JS because I like types :-)
- I've used NextJs to present that I'm familiar with this technology. 
  Also, it's easy to set up and makes some tasks easier e.g. deployment to web.
  
- I've set up eslint, because I believe that style consistency is important, even in a small project like this.
- I've used Jest and Cypress for testing.
- I've used SCSS with CSS-modules for styling. Other option might be CSS-in-JS solution like `styled-components` but I find SCSS more convenient for most tasks and more compatible with existing libraries (e.g. CSS frameworks). I would consider `styled-components` if created components were more complicated.
