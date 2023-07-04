import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to my First React App</h1>

        <h3>1. Lists</h3>
        <ul className="list-group w-50">
          <li className="list-group-item">Apple</li>
          <li className="list-group-item">Banana</li>
          <li className="list-group-item">Orange</li>
        </ul>
        <hr />

        <h3>2. Links</h3>
        <a href="https://example.com" className="btn btn-link">
          Go to Example
        </a>
        <hr />

        <h3>3. Images</h3>
        <img
          src="https://picsum.photos/200"
          alt="Random"
          className="img-fluid"
        />
        <hr />

        <h3>4. Forms</h3>
        <form className="w-50">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <hr />

        <h3>5. Tables</h3>
        <div className="table-responsive w-50">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
