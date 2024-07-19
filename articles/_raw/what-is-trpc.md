---
title: What is the tRPC Library? Explained with a Demo Project
date: 2024-07-12T01:10:06.967Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/what-is-trpc/
translator: ""
reviewer: ""
---

For a while now, I've been noticing a technology named [tRPC][1] that's cited in many modern tech stacks, including [T3][2]. But I didn't know what it was or why it had become so popular.

<!-- more -->

So I began researching and learning about it. I didn't know what it meant or what its purpose was. So, I dug deeper into [RPC][3], [gRPC][4], and other technologies to find out.

I found out that tRPC is a type-safe architectural style for designing APIs. But that definition is only the tip of the iceberg.

In this article, I want to go deeper into the roots of this iceberg and understand what tRPC is all about. This article is an in-depth explanation of tRPC, why we need it, and how to use it.

Note that I'm a fellow learner writing this article. I'm exploring tRPC for the first time alongside you, based on articles I've studied. It's aimed at beginners and new learners. Let's dive in together.

## Prerequisites

1.  Intermediate JavaScript Knowledge.
2.  Basic TypeScript Knowledge.
3.  Intermediate React Knowledge.
4.  Experience with the Fetch and REST API.
5.  Experience with using a terminal or console.
6.  Experience with using NPM and its commands.
7.  Experience with using CORS and connecting front-end/back-end.
8.  Enjoying learning something new.

You can find the GitHub repository and all other resources for this article [here][5].

## Table of Contents

1.  [What is tRPC?][6]
2.  [Why do we need tRPC?][7]
3.  [How to use tRPC][8]
4.  [Conclusion][9]

## What is tRPC?

[tRPC][10] is a type safe TypeScript-based library that leverages the RPC API design to process API requests and deliver a response.

[RPC][11] stands for Remote Procedural Call. Our tRPC builds on RPC. RPC is an architectural style to design APIs like [REST][12]. Using RPC, you get rid of the [Fetch][13] and [REST API][14].

As the name suggests, tRPC puts a type safe layer on the RPC architectural design. Traditionally, we use the REST API. It has [GET, POST, PULL, and other request types][15]. In tRPC, there are no request types.

Every request to the tRPC back end passes through a query system and gets a response from the tRPC back end based on the input and query.

![image-10](https://www.freecodecamp.org/news/content/images/2024/07/image-10.png)

Source: [Adeesh Sharma][16]

And instead, built-in functions are available with tRPC and react-query that will process your requests. Every request gets treated the same. It depends on whether the API endpoint accepts an input, throws an output, mutates it, and so on.

When using REST, you create a main folder named `/api` and route files inside them. For tRPC, you don't need any folder with many files. You need a few built-in functions and a simplified react-query system.

You don't need to use `fetch()`, process the output, and so on. tRPC operates using URLs representing a specific query, as you'll see shortly.

### Why do we need tRPC?

tRPC makes RPC type safe. It means your client cannot send data that the server cannot take. I cannot pass a string for a number-based property.

If the client tries to do this, you'll immediately receive an error — **Invalid Type**. The IDE and browsers throw errors if the datatypes mismatch.

![type-error](https://www.freecodecamp.org/news/content/images/2024/07/type-error.png)

tRPC Type safe Error after submitting unexpected datatype value

Type safety is crucial for applications using JavaScript. So tRPC leverages [TypeScript][17]. This makes it easier to create routes and perform operations on the back end.

tRPC requires a library named [Zod][18]. It helps tRPC to build the data schema of each route. A schema is an object with properties and an equivalent datatype linked to each property.

For example, if an API route requires the user's details, you would create an object on the back end and assign a datatype to each property using Zod.

On the front end, tRPC will verify whether the data provided by the user or API request matches the datatypes registered by the back end. tRPC leverages this type safe integration between the front end and back end.

Let's see how tRPC, Zod, and other libraries work together in a demonstration project.

## How to Use tRPC

You can spin up an Express server in a few seconds and start writing tRPC routes and queries — it's easy.

Traditionally, the client-side (front-end) and server-side (back-end) are separated. We will follow that separation for this example.

Let's start by creating the client side using React and the server side using Express + CORS to connect them.

### Folder Structure

First, create a directory named `tRPC Demo`. Inside this directory, create another directory named `trpclibrary` to separate the client and server sides and execute them together as a library later.

Inside the `trpclibrary` directory, you'll place your server (Express) and client (React) soon.

Inside the `tRPC Demo` root directory, insert a `package.json` file with the following code to interconnect all the folders and run the client and server-side with a single command.

```JSON
{
  "name": "trpclibrary",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "concurrently \"wsrun --parallel start\""
  },
  "workspaces": [
    "trpclibrary/*"
  ],
  "devDependencies": {
    "concurrently": "^5.2.0",
    "wsrun": "^5.2.0"
  }
}
```

Root Directory `package.json` file

After setting up the `package.json` in the root directory, you'll start by setting up your Express server inside the `trpclibrary` directory.

Tip: Use the `cd <folder_name>` command to enter into a folder using the terminal and execute commands. In our case, you are in the root directory. So `cd .\trpclibrary` will help you. You can use the VS Code terminal, too.

You will use the `npx create-mf-app` starter command to initiate your server with a pre-defined template that saves you some time.

![sever-side-x2](https://www.freecodecamp.org/news/content/images/2024/07/sever-side-x2.png)

Server-Side Setup

You may get errors stating that you don't have Express or other libraries installed. Don't worry – you'll install every required library shortly.

After creating the server, let's make the client using React and the same command in the same `trpclibrary` directory.

![image-11](https://www.freecodecamp.org/news/content/images/2024/07/image-11.png)

Client-Side Setup

That's your React client-side ready. But you might be overwhelmed with all the errors concerning modules and packages. So, let's download them first.

I'm using yarn, and I recommend you do the same. Use the `yarn` command in the root `trpcDemo` directory.

Tip: You can use the `cd ..` command to escape the current directory and enter the outer one.

![image-13](https://www.freecodecamp.org/news/content/images/2024/07/image-13.png)

Your server-side, client-side, or both might not have the TS Configuration file. So I recommend installing it using the `npx tsc --init` command within both directories.

![image-14](https://www.freecodecamp.org/news/content/images/2024/07/image-14.png)

TS Configuration File Initialization

Now, you need to download tRPC, CORS, and Zod to your server side of the project.

As of 2nd July 2024, the _[@trpc/server][19]_ package is at the latest version 10.45.2. Remember, even the [client-side tRPC package][20] should be 10.45.2.

![image-16](https://www.freecodecamp.org/news/content/images/2024/07/image-16.png)

Installing Zod, CORS, and @trpc/server to the Server-Side

Then, you need to install [@trpc/client][21], [@trpc/react-query][22], [@tanstack/react-query][23], [@trpc/server][24], and [Zod][25] for the client side. You'll use the same "[yarn add <package\_names>][26]" command.

This time, I won't share the screenshot. Refer to the previous steps and try downloading them.

We've completed most installations and setup. Here's what your folder structure should look like:

```Markdown
tRPC Demo
├── trpclibrary
│   ├── client-side (React App Folder)
│   ├── server-side (Express Server Folder)
└── package.json
```

Folder Structure

### tRPC Setup

Here's what we will do in this section:

1.  Create a tRPC instance with Context
2.  Create tRPC routes and set up queries
3.  Set up a base URL
4.  Set up CORS

Let's begin by creating a tRPC instance in the `index.ts` file of the server-side directory. As per the documentation, you should only initiate one instance per application.

Using the tRPC instance, create a router. A router helps you register routes where API requests arrive and are processed.

Routes are where you'll deal with the request and issue a response. A route is an API endpoint connected to a Base URL.

For example, [`http://localhost:3005/api/hello`][27] depicts an API endpoint named `hello` and the Base URL `api` to call the API endpoint.

```TypeScript
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;

const trpc = initTRPC.context<Context>().create();
```

You must place this code above the existing boilerplate code in the `index.ts` file and below the import statements. It should be above the app and port variable declarations and below the express import statement.

Voilà! I created a tRPC instance using the `initTRPC` Builder from the `@trpc/server` package. We'll use this instance for everything related to the back end.

Additionally, I've added a [Context][28] to the tRPC Router. It's a feature by tRPC. It allows you to put details like database connections and authentication information.

tRPC shares the Context between all tRPC procedures. It's an information and storage place to avoid code duplication and keep the code organized.

Up until now, you've initialized the tRPC instance with Context. Now, you'll code the router — so place the following code below the previous:

```Typescript
import zod from "zod";

const appRouter = trpc.router({
  hello: trpc.procedure
    .input(
      zod.object({
        name: zod.string(),
      })
    )
    .query(({ input }) => {
      return {
        name: input.name,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

Finally, you imported Zod. You also created an API endpoint named `hello`  that takes input using the `input()`  method and matches the API request from the user with the Zod object specified in this endpoint.

With this code, Zod and tRPC expect the front end to provide an object with a single string-based property named `name`. tRPC will use this property and respond using the input.

You took the input, destructured it, and processed it inside the `query()` method. All these methods are tRPC procedures. tRPC shares the Context among these procedures.

As I mentioned earlier, you will require the tRPC instance everywhere. I used it to create a router to store routes (API endpoints), register, and process them.

You can create unlimited routes inside the `router()` procedure. It is like a route handler. This endpoint is an object with each route acting as a property.

You'll require the procedure builder to access procedures like `query()`, `input()`, and so on. So we've bound it with the tRPC instance and accessed those methods.

Now, it's time to set the base URL. You will use the Express adapter from the `@trpc/server` library to set the base URL.

Place the following code above the `app.get()` routes inside the `index.ts` file:

```TypeScript
app.use(
  "/api",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
```

`/api`  represents your base URL. Every route will be on top of the `/api` URL. Now, your `hello` API endpoint has become [`http://localhost:3005/api/hello`][29].

Let's try to test this using your browser. Do you remember that I asked you to create a `package.json` file with a pre-written code in the root tRPC Demo directory?

It was to run both the server and client-side as a library. Set your terminal to the root directory. Then, execute `yarn start` to run the server and client-side together and head to the [`http://localhost:3005/api/hello`][30] URL.

![image-23](https://www.freecodecamp.org/news/content/images/2024/07/image-23.png)

tRPC Invalid Type Error

Uh-Oh! Did you receive an error? If the error says "Invalid Type", you're on the right path. See, this is where tRPC helps us.

In the above code, when I sent an API request as a user to the `hello` API endpoint, I didn't pass any object or values that tRPC expected for that endpoint.

tRPC expected an object with a string-based property named `name` with a value. When I didn't provide that, tRPC restricted my access. That's where it shines.

"That's all good, but what now?" You must connect the front end with the server side to send the object with the expected data.

There's one more thing left for the server side. CORS! It's simple to set it up. Find the Express Initialisation code in the `index.ts` file. It came with the Express template. Then, insert the following line:

```JavaScript
import cors from "cors";

app.use(cors());
```

Here's a hint: Search the port and app variable declaration in your `index.ts` file.

Once you insert the line, it might give you an error because you haven't installed the types of CORS yet. Go to your terminal and install `@types/cors` inside the server-side directory.

![image-24](https://www.freecodecamp.org/news/content/images/2024/07/image-24.png)

@types/cors download.

CORS is ready and secure. Your server side is ready! Now, let's try to connect the server side with the client side using the respective libraries.

Before we shift to the client side, I want to make sure that we're on the same page. So far, you've coded an instance of tRPC, formed a Router, set a base URL, and tested the API endpoints with optional Context.

You coded all this inside the server-side `index.ts` file. Let's move to the client side and conquer the last part of this tutorial.

### Client-Side

We've already downloaded the required packages. We'll start by creating a `trpc.ts` file in the `/src` directory of the client-side directory. It will handle the queries and requests issued by the front end.

You created a tRPC instance to build the router and other components on the server side, right? Well, now you have to do the same on the client side. You need to create a client-side tRPC instance using `@trpc/react-query`.

Also, since you want to link your client-side tRPC instance with the server-side one, you have to import the server-side tRPC instance and its type.

To import the server-side tRPC instance, insert a `main` property inside the `package.json` file on the server side. It sets the `index.ts` as the entry file when you import the server-side folder on your client side.

![image-25](https://www.freecodecamp.org/news/content/images/2024/07/image-25.png)

Server-Side `package.json` file.

After setting that property, you can import the tRPC instance into the client side using the terminal. For me, the back end is called `server-side` in my `package.json` file inside the server-side directory with version `1.0.0`.

So I'll execute `yarn add server-side@1.0.0` inside the client-side terminal. The installation might look familiar because this is how developers build libraries.

This command should add your server-side folder as a package in the client-side node modules directory. You can verify that with the `package.json` file on the client side.

![image-26](https://www.freecodecamp.org/news/content/images/2024/07/image-26.png)

Client-Side `package.json` file.

It should contain your server-side package name as a dependency.

In other words, you installed the server-side package in your client-side application. You can now import the server-side tRPC and use it like a library.

If you remember earlier, we added an extra export AppRouter line while creating the router on the server side. We did that because we had to import the AppRouter type on the client side to use the server-side tRPC instance on the client side.

Here's how the `trpc.ts` file should look like now:

```TypeScript
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server-side";

export const trpc = createTRPCReact<AppRouter>();
```

`trpc.ts` file.

With this code, you've created a client-side tRPC instance using the characteristics of the server-side tRPC instance.

Perfect. Now, let's create another file named `AppComponent.tsx` in the `/src` directory.

This file will hold your main App component. It will import the `trpc` client instance from the `trpc.ts` file and use it to call your `hello` API endpoint.

```TypeScript
import React from "react";
import { trpc } from "./trpc";
```

`AppComponent.tsx` import statements.

Since you created a client-side tRPC instance, you can access all API endpoints on the client side and call the `useQuery()` method to send requests to those API endpoints.

```TypeScript
import React from "react";
import { trpc } from "./trpc";

const AppComponent = () => {
  const userQuery = trpc.hello.useQuery({ name: "Afan" });

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>{JSON.stringify(userQuery.data?.name)}</div>
    </div>
  );
};

export default AppComponent;
```

Entire `AppComponent.tsx` file.

If you remember, the `hello` API endpoint requires an object with the string-based `name` property with a value. So you'll pass the object using the `useQuery()` method with the value to avoid tRPC mismatches.

Inside the JSX code, you'll destructure the API response sent by the API endpoint using the `JSON.stringify()` method and access the result by the API endpoint.

Your `AppComponent.tsx` file is a standard React component. So you need to import this component into the main `App.tsx` file. `App.tsx` on the client side is equivalent to `index.ts` on the server side.

For the `App.tsx` file, you will follow a similar setup. Import the client tRPC instance from the `trpc.ts` file. Then, set the base URL and set up React Query.

You'll import React Query from TanStack, trpc from the `./trpc.ts` file, `httpBatchLink` from `@trpc/client`, `useState` from React, and your `AppComponent` from the `AppComponent.tsx` file.

```TypeScript
// Default Import Statements

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// Add the following Import Statements

import { useState } from "react";

import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";
import AppComponent from "./AppComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
```

You will use each import statement. Ignore any error about imported objects not being used. Then, create a React Query client instance as you did for tRPC.

```TypeScript
const client = new QueryClient();
```

Once you've done that, you need to set up the Base URL. You'll do that inside the primary App function.

Also, shift the following code statements from below the App function to the top of the App function beneath the React Query client declaration statement.

```TypeScript
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
```

Then, remove the default JSX HTML code from the App function. You can safely delete all HTML code in the App function.

Next, you need to set up the Base URL for the client side. Whenever the front-end invokes the API endpoints, it will use this Base URL. It should match the Base URL you set on the server side.

Replace your App function code from HTML to the following Base URL code:

```TypeScript
const App = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          // Base URL
          url: "http://localhost:3005/api",
        }),
      ],
    })
  );

  return <></>;
};
```

Your `App.tsx` file should look like this:

```TypeScript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { useState } from "react";

import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";
import AppComponent from "./AppComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

const App = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          // Base URL
          url: "http://localhost:3005/api",
        }),
      ],
    })
  );

  return <></>;
};

root.render(<App />);
```

I haven't talked much about the `return` statement yet. So, let's do that now. We won't keep the `return` statement empty.

It will display the data returned by the API endpoint, which should be the string you submitted using the `useQuery()` method in the `AppComponent.tsx` component file.

The `return` statement is for the wrappers and the AppComponent component. If you require your components and pages to use tRPC, React Query, and so on, you must wrap your components like `AppComponent` with `Providers` of these libraries.

```TypeScript
  return (
    // tRPC Provider
    <trpc.Provider client={trpcClient} queryClient={client}>
      {/* React Query Provider */}
      <QueryClientProvider client={client}>
        {/* HTML React Component */}
        <AppComponent />
      </QueryClientProvider>
    </trpc.Provider>
  );
```

Now, you'll wrap the `AppComponent` component with React Query and pass the React Query client instance you created using `QueryClient()` in this file. Then, you'll wrap the React Query Provider with the tRPC Provider.

The tRPC provider requires the React Query Client and the tRPC Client with the Base URL. So we will provide that information, too.

Once you pass the required information and match your code with mine, you can visit [http://localhost:3000][31] and look at the output. It will display the data you passed using the `hello` API endpoint.

Note: You should run the `yarn start` command in your root `tRPC Demo` directory to turn on the localhost ports to view the output.

![image-27](https://www.freecodecamp.org/news/content/images/2024/07/image-27.png)

Output Image

Voilà! We have it all ready. tRPC invokes the `hello` API endpoint from the front end. It prioritizes Type Safety and uses TypeScript to avoid millions of other JavaScript problems.

You can add more routes and API endpoints like `hello` in your Route handler. It's as easy as adding a new property to an object. That's how tRPC makes your life easier.

## Conclusion

tRPC is a type safe RPC-styled library. It integrates RPC with TypeScript to eliminate REST, `fetch()`, and other techniques to create and make API calls.

It acts as an alternative to REST and Fetch. I'll use it for the foreseeable future.

I've enjoyed learning about this newer technology. There may be some flaws in this article, but I'm a fellow learner, so report my mistakes whenever you can and help me improve.

Subscribe to [my newsletter][32] for the weekly emails about Software Engineering, Tech Jobs and Careers, and resources, including paid articles for free, to help you excel in your career.

_Hope to see you in the next one ✌️_

[1]: https://trpc.io/
[2]: https://create.t3.gg/
[3]: https://en.wikipedia.org/wiki/Remote_procedure_call
[4]: https://en.wikipedia.org/wiki/GRPC
[5]: https://github.com/whyafan/trpc-demo
[6]: #what-is-trpc
[7]: #why-do-we-need-trpc
[8]: https://www.freecodecamp.org/news/p/96029b5d-38ad-4b3c-a021-661b70eb6dd3/how-to-use-trpc
[9]: https://www.freecodecamp.org/news/p/96029b5d-38ad-4b3c-a021-661b70eb6dd3/conclusion
[10]: https://trpc.io/
[11]: https://en.wikipedia.org/wiki/Remote_procedure_call
[12]: https://www.ibm.com/topics/rest-apis
[13]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[14]: https://www.ibm.com/topics/rest-apis
[15]: https://restfulapi.net/http-methods/
[16]: https://adeesh.hashnode.dev/building-an-express-trpc-and-react-monorepo-setup-with-yarn-workspaces-tailwind-zod-and-react-query
[17]: https://www.typescriptlang.org/
[18]: https://zod.dev/
[19]: https://www.npmjs.com/package/@trpc/server
[20]: https://www.npmjs.com/package/@trpc/client
[21]: https://www.npmjs.com/package/@trpc/client
[22]: https://www.npmjs.com/package/@trpc/react-query
[23]: https://www.npmjs.com/package/@tanstack/react-query
[24]: https://www.npmjs.com/package/@trpc/server
[25]: https://www.npmjs.com/package/zod
[26]: https://classic.yarnpkg.com/lang/en/docs/cli/add/
[27]: http://localhost:3005/api/hello
[28]: https://trpc.io/docs/v10/server/context
[29]: http://localhost:3005/api/hello
[30]: http://localhost:3005/api/hello
[31]: http://localhost:3000
[32]: https://www.freecodecamp.org/news/p/96029b5d-38ad-4b3c-a021-661b70eb6dd3/Subscribe%20to%20my%20newsletter%20for%20the%20weekly%20emails%20about%20Software%20Engineering,%20Tech%20Jobs%20&%20Careers,%20and%20resources%20to%20excel%20in%20your%20career.