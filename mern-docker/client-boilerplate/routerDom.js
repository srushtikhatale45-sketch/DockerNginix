// Certainly! The usage of createBrowserRouter and related
// functions comes from an older version of the React Router
//  library.

// In React Router v6, the API has been updated, and some changes
//  were introduced to simplify and improve the routing experience.

// Here are the key changes:

// createBrowserRouter vs. BrowserRouter:

// In React Router v6,
// the createBrowserRouter function has been replaced with the
//  simpler BrowserRouter component from react-router-dom.
// BrowserRouter is a component that provides the routing
// context to your application.
// You simply import it and use it as a component in
// your application.

// createRoutesFromElements vs. Routes:

// In React Router v6, the createRoutesFromElements function has been replaced with the Routes component.
// Instead of creating routes with an array of elements, you now use the Routes component and define your routes directly inside it.
// Route Configuration:

// In React Router v6, the route configuration has changed. Instead of using an array of objects, you now use the Route component directly inside the Routes component.
// The element prop of Route is used to specify the component that should be rendered for a particular route.
// Here's a simplified comparison:

// React Router v5:

// jsx
// Copy code
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </Router>
//   );
// };
// React Router v6:

// jsx
// Copy code
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };
// In summary, the newer syntax in React Router v6 is designed to be more intuitive and explicit. It eliminates the need for additional functions like createBrowserRouter and simplifies the route configuration with the Routes component. It's always a good idea to refer to the official documentation for the version you are using to ensure you're using the correct API.

/*

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const elements = [
    { path: "/", element: <ProductList products={products} /> },
    {
      path: "/adminpanel",
      element: (
        <AdminPanel
          products={products}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleReplace={handleReplace}
        />
      ),
    },
  ];

  const routes = createRoutesFromElements(elements);
  const router = createBrowserRouter(routes);

  return (
    <div>
      <ContentWrapper>
        <RouterProvider router={router}>
          <Route />
        </RouterProvider>
      </ContentWrapper>
    </div>

    */
