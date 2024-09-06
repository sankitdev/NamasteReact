# 08. Exploring the World 🌍

- In this lecture our frontEnd which is a UI Microservice will be conncted with backend.
- We will explore the world.

In React:

- **State Changes 🔄**: When you create a state variable using `useState`, any change in state triggers a re-render of the component.
- **Component Re-rendering 🔁**: The entire component re-renders, but only the necessary parts of the DOM update.

- **Reconciliation 🔍**: React compares the new virtual DOM with the old one and updates only what's changed.

- **Performance Optimization 🚀**: Use `React.memo`, `useMemo`, or `useCallback` to avoid unnecessary re-renders and improve performance.

React ensures that your UI stays in sync with the state while being efficient and performant!

## Service Architectures

- Service architectures refer to the design and structure of how services are organized, deployed, and interact within a software system.
- Here are the overview of key service architechture:

1. ![Monolith Architecture 🏢](./Monolith.png)

- In monlith we have **Single Codebase** where all functionalites are bundled together in one large application.
- Components are interdependent; a change in one part can impact the whole system.
- Its easy to deploy but challenging to scale and maintain as application grows.

2. ![MicroServices Architecture 🧩](./image.png)

- In **Microservices Architecture** 🧩, the whole application is divided into smaller, independent services, each handling a specific function.
- Each smaller service can run on a different port on the same domain. While these services can have different domains, they are generally accessed through the same domain with different slugs or routes.
- Each service can be written in a different language; for example, some UI components might be in React, others in Angular, and the backend could be in Node.js or Java.
- These services often interact via APIs, typically using HTTP/REST, gRPC, or message queues.

# For UI Exploring other Mircroservice or API is World 🌐

- In this session, we connected the UI with the Swiggy API.
- We can fetch data from other backends using promises and the `fetch()` API provided by the browser.
- We have two options for fetching an API:

  1. **Page Loads** ➡️ **API is called** (takes about 300ms) ➡️ **UI Renders** (takes about 200ms) ➡️ **Total: 500ms**
  2. **Page Loads** ➡️ **UI Renders** (100ms) ➡️ **API is called** ➡️ **UI is updated** (with API data) ➡️ **Total: 500ms**

- For the best and fastest user experience, the second approach is preferable. It renders the page first, so the user has something to interact with, and then fetches the API data in the background. Once the data is available, the UI is updated.

## The `useEffect()` Hook 🔄

- To achieve this, React provides a hook called `useEffect()`.
- `useEffect()` is used to handle side effects like fetching APIs, and other things.
- It requires two things: a **callback function** and a **dependency array**.
- If we don't use the dependency array, `useEffect()` will re-run every time the state or props change, which we usually want to avoid.
- By passing a dependency array to `useEffect()`:
  - An **empty array** `[]` will make `useEffect()` run only once, after the initial render.
  - A dependency in the array will trigger `useEffect()` on the first render and whenever that dependency changes.
    - For example, if we pass a `btn` as a dependency, `useEffect()` will run on every button click.
