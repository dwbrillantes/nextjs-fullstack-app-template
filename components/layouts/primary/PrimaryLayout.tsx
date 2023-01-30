import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center ">
        <Header />
        {children}
        <div className="m-auto"></div>
        <Footer />
      </main>
    </>
  );
};

export default PrimaryLayout;
