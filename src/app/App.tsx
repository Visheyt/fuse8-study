import { Header } from '@/shared/ui/header/header';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
