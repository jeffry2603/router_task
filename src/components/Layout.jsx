import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;