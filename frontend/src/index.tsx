import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/mulish";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import App from "./App";
import { Container } from "@mui/material";
// import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query Books {
//         books {
//           author
//           coverPhotoURL
//           readingLevel
//           title
//         }
//       }
//     `,
//   })
//   .then((result) => console.log({ result }));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Container maxWidth="md">
        <App />
      </Container>
    </ApolloProvider>
  </React.StrictMode>
);
