import Banner from 'components/banner';
import { Article } from 'components/category-container';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Wix.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <Article />
      <Footer />
    </>
  );
}
