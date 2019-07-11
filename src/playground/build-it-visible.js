const onShowDetails = () => {
  visibility = !visibility;
  render();
};

let visibility = false;

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>
        {visibility ? "Hide details" : "Show Details"}
      </button>
      {visibility && (
        <div>
          <p>Hey, here are some details you can see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();
