import Home from './page/home';
import SignIn from './page/home/signin';
import Detail from './page/books/detail';
import Edit from './page/books/edit';
import Add from './page/books/add';
import NotFound from './page/home/notFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './page/Error';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/book/:id" component={Detail} />
        <Route exact path="/add" component={Add} />
        {/* Not Found  */}
        <Route exact path={'*'} component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
