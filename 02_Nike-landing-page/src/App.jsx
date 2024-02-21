import React from "react";
import {CustomerReview,Footer,Service,Hero,PopularProducts,SpecialOffer,Subscribe,SuperQuality} from "./section/index.js"
import {Nav} from "./components/index.js"
function App() {
  return(
    <>
      <main className="relative">
        <Nav/>
        <section className="xl:padding-1 wide:padding-r padding-b border-4 border-gray-900">
          <Hero/>
        </section>
        <section className="padding">
          <PopularProducts  />
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Service/>
        </section>
        <section className="padding">
          <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReview/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="paddingbg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </main>
    </>
  );
}

export default App;
