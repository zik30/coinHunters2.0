import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@widget/header/Header";
import { Footer } from "@widget/footer/Footer";

export const Layout = () => {
  // useScrollTop();
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
