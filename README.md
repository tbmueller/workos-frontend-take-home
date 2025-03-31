# Trista's Frontend Take-Home Assignment

## How to run the project

Clone the repo and follow the steps below.

### Start the backend server

From the project root:
```
  cd server
  npm install
  npm run api
  ```

### Start the client server

From the project root:
```
  cd client
  npm install
  npm run dev
```

In-browser, access the client at [this URL](http://localhost:5173/): ```http://localhost:5173/```

## Tasks implemented

1. ~~Setup the "Users" and "Roles" tab structure~~ ✅

2. ~~Add the users table~~ ✅

3. ~~Add support for filtering the users table via the "Search" input field~~ ✅

4. ~~Add support for deleting a user via the "more" icon button dropdown menu~~ ✅

5. ~~Add support for viewing all roles in the "Roles" tab~~ ✅

6. Add support for renaming a role in the "Roles" tab ❌

7. [Bonus] Add pagination to the user table ❌

## Choices made

### Tools

- The client server runs on [Vite](https://vite.dev/) due to its ease of use and hot-module reloading.
- The API interaction uses [react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Because the design closely matches Radix's look and feel, I chose [Radix](https://www.radix-ui.com/) as the component library. Radix additionally provides an easy API for breakpoints, which I've made use of.

### Trade-offs and what I would have improved with more time

### Functionality

I didn't implement adding or editing users as that wasn't listed in the tasks.

#### Style/UX

- Since Radix matches the design quite closely out of the box, I didn't write any custom CSS.
- If I had more time, I would have more closely matched some of the colors in the design (eg `gray/12`/`#2B333B` was used frequently for text but [doesn't match any Radix color token](https://github.com/search?q=repo%3Aradix-ui%2Fthemes%20path%3A%2F%5Epackages%5C%2Fradix-ui-themes%5C%2Fsrc%5C%2Fstyles%5C%2Ftokens%5C%2Fcolors%5C%2F%2F%20%232B333B&type=code))

#### Code organization

- In a real monorepo app like this, I would want to more tightly couple the client/server types (eg via [tRPC](https://trpc.io/))
- I didn't use a context for the Roles table. Since I didn't implement task 6 (add support for renaming a role), there were fewer role-related components. I felt like it was an acceptable trade-off to have one layer of prop drilling rather than create a context and have that unneeded overhead.
- I didn't write any tests. However, I tried to isolate functionality-only pieces in pure TS files for easier testing. 
- I didn't use react-query to fetch the roles, as the caching it provides wasn't necessary. However, had I implemented task 6, I would have refactored to use it.
