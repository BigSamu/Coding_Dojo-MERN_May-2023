const myReactComponent = React.createElement(
  "h1", // create a h1 element
  {}, // no properties
  "I am creating my first React component" // text content
);

const myNestedReactComponent = React.createElement(
  "div", // create a div element
  {}, // no properties
  React.createElement("p", {}, "This element is nested") // nested component
);

const parentElement = React.createElement(
  "div", // create a div element
  {}, // no properties
  myReactComponent, // add myReactComponent
  myNestedReactComponent // add myNestedReactComponent
);

ReactDOM.render(parentElement, document.getElementById("root"))

// React creating the following HTML


// <div>
//   <h1> I am creating my first React component </h1>
//   <div>
//     <p> This element is nested </p>
//   </div>
// </div>
