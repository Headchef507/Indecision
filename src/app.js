console.log("app.js is running!");

//JSX - JavaScript XML
//generate í scripts á cmd með babel src/app.js --out-file=public/scripts/app.js --presets=env,react
//bæti við --watch aftast til að það hermir eftir, opna bara annan glugga til að keyra
const titles = {
  title: "Indecision app",
  subtitle: "This is info",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    titles.options.push(option);
    e.target.elements.option.value = "";
    renderOptions();
  }
};

const removeAll = () => {
  titles.options = [];
  renderOptions();
};

const renderOptions = () => {
  const template = (
    <div>
      <h1>{titles.title}</h1>
      {titles.subtitle && <p>{titles.subtitle}</p>}
      <p>
        {titles.options.length > 0 ? "Here are your options" : "No options"}
      </p>
      <p>{titles.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderOptions();
