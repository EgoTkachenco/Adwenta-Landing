import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{ maxWidth: '1440px' }}
        className="min-h-screen mx-auto flex flex-col relative"
      >
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
