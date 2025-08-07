import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@widget/header/Header";
import { Footer } from "@widget/footer/Footer";
import { useScrollToTop } from "../../lib/useScrollToTop";

export const Layout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <Suspense fallback={<div> Loading....</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
