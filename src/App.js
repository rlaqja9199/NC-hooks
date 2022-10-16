import './App.css';
import useAxios from './HOOKS/useAxios/useAxios';


function App() {
  const { loading, data, error, refetch } = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
  console.log(`loading: ${loading}\nError:  ${error}\nData: ${JSON.stringify(data)}`)
  console.log(data)
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
