import Books from "./components/Books";
import { books } from "./constants/mockData";
import Layout from "./layouts/Layout";
function App() {
  return (
    <>
      <Layout>
        <h1>Book App Starting files</h1>

        <Books />
      </Layout>
    </>
  );
}

export default App;
