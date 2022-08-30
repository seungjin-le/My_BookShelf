import Home from './page/home';
import SignIn from './page/signin';
import Detail from './page/detail';
import Edit from './page/edit';
import Add from './page/add';
import NotFound from './page/home/notFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './page/Error';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="signin" component={SignIn} />
        <Route path="edit/:id" component={Edit} />
        <Route path="book/:id" component={Detail} />
        <Route path="add" component={Add} />
        {/* Not Found  */}
        <Route path={'*'} component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
