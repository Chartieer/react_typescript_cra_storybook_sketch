import * as React from "react";
import styles from "./StoryBookContainer.scss";

import "../../../../styles/antd.less";
import "../../../../styles/entry.scss";

interface IStoryBookContainerProps {}

export default class StoryBookContainer extends React.Component<
  IStoryBookContainerProps
> {
  public render() {
    return (
      <div className={styles.storyBookContainer}>{this.props.children}</div>
    );
  }
}
