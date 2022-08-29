import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import SignIn from './page/signin';
import Detail from './page/detail';
import Edit from './page/edit';
import Add from './page/add';
import NotFound from './page/home/notFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './page/Error';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/book/:id" element={<Detail />} />
            <Route path="/add" element={<Add />} />
            {/* Not Found */}
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConnectedRouter>
    </ErrorBoundary>
  );
};

export default App;
