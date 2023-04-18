import { Route, Routes } from "react-router-dom";
import { Service, LandingPage, FAQ, Gallery, Contact } from "@pages";
import { MainPage } from "@pages/components";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route path="/*" index element={<LandingPage />} />
        <Route path="service" element={<Service />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
