"use client"
import { Provider } from "react-redux";
import Form from "./components/Form";
import Words from "./components/Word";
import { CardContainer } from "./components/styles/Style";
import styles from "./page.module.css";
import store from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <CardContainer>
          <Words />
          <Form />
        </CardContainer>
      </main>
    </Provider>
  );
}
