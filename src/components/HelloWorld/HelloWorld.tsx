import * as React from "react";
import styles from "./HelloWorld.scss";

import { Button } from "antd";

export default class HelloWorld extends React.Component {
  public render() {
    return (
      <div>
        <h1 className={styles.helloWorld}>Hello World!</h1>
        <Button type="default">Hello</Button>
      </div>
    );
  }
}
