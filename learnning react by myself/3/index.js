class ColorDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: this.props.color };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({ color: "red" });
  }
  render() {
    let style = {
      backgroundColor: this.state.color,
      minHeight: 100,
      Width: 100,
      border: "1px solid",
      display: "inline-block"
    };
    return (
      <div
        style={style}
        className="color-div"
        id={`${this.state.color}-color-div`}
      >
        <div style={style}></div>
        <button onClick={this.changeColor}>
          Change color Of {`${this.state.color}-color-div`}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="color-Divs-Holder">
        <ColorDiv key={1} color="green" />
        <ColorDiv key={2} color="black" />
        <ColorDiv key={3} color="blue" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
