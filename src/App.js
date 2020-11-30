import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import LaunchProgram from './containers/LaunchProgram/LaunchProgram'
import { getParam } from './utils/utils'

function App(props) {
  return (
    <Layout>
      <LaunchProgram query={getParam(props.location.search)} history={props.history} />
    </Layout>
  );
}

export default App;
