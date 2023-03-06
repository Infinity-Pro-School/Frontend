import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App';
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "@styles/main.scss";
import { AnimatePresence } from "framer-motion";
export const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AnimatePresence>
          <App />
        </AnimatePresence>

      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
