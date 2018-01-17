import * as React from "react";
import stickybits from "stickybits";

export default class ScrollJacker extends React.Component<
  ScrollJackerProps,
  ScrollJackerState
> {
  constructor(props: ScrollJackerProps) {
    super(props);
    this.state = {
      childrenCount: 0,
      currentPage: 0
    };
  }
  private increment: number = 100;
  private height: number = 500;
  private container: HTMLElement;
  // private rectHeight(): number {
  //   return (
  //     this.container.getBoundingClientRect().bottom -
  //     this.container.getBoundingClientRect().top
  //   );
  // }

  static defaultProps = {
    scrollSensitivity: 5
  }

  componentDidMount() {
    const { children, stickyOffset } = this.props;
    if (children) {
      this.setState({
        childrenCount: React.Children.count(children)
      });
      this.increment = this.increment * this.props.scrollSensitivity;
      this.height = this.increment * React.Children.count(children);
    }
    if (window) {
      window.addEventListener("scroll", this.updateCurrentPage);
      stickybits("#STC-sticky-child", {
        stickyBitStickyOffset: stickyOffset || 0
      });
    }
  
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("scroll", this.updateCurrentPage);
    }
  }

  updateCurrentPage = () => {
    if (this.state.currentPage !== this.getCurrentPage()) {
      this.setState({ currentPage: this.getCurrentPage() });
    }
  };

  getCurrentPage(): number {
    const { childrenCount } = this.state;
    if (childrenCount < 2 || this.container.getBoundingClientRect().top > 0) {
      return 0;
    }

    const progress = Math.abs(this.container.getBoundingClientRect().top);
    const output = Math.floor(progress / this.increment);
    if (output > childrenCount - 1) {
      return childrenCount - 1;
    }
    return output;
  }

  //https://stackoverflow.com/questions/42261783/how-to-assign-the-correct-typing-to-react-cloneelement-when-giving-properties-to
  injectedChildren(): React.ReactChild[] {
    const { children } = this.props;
    return React.Children.map(children, x => {
      if (React.isValidElement(x as React.ReactElement<any>)) {
        return React.cloneElement(x as React.ReactElement<any>, {
          currentPage: this.getCurrentPage()
        });
      }
      return x;
    });
  }

  renderChild(): React.ReactChild {
    const { injectChildren, children } = this.props;
    const { currentPage } = this.state;
    return injectChildren
      ? this.injectedChildren()[currentPage]
      : children[this.getCurrentPage()];
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={container => {
          this.container = container;
        }}
        style={{ ...this.props.style  ,height: `${this.height}px` }}
      >
        <div id="STC-sticky-child">
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
