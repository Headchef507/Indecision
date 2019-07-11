console.log("app.js is running!");

//JSX - JavaScript XML
//generate í scripts á cmd með babel src/app.js --out-file=public/scripts/app.js --presets=env,react
//bæti við --watch aftast til að það hermir eftir, opna bara annan glugga til að keyra
const titles = {
  title: "Indecision app",
  subtitle: "This is info",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{titles.title}</h1>
    {titles.subtitle && <p>{titles.subtitle}</p>}
    <p>{titles.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
