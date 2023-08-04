import { Route, Routes } from "react-router-dom";
import {
  Service,
  LandingPage,
  HelpCenter,
  TermsOfUse,
  FAQ,
  Gallery,
  Contact,
} from "@pages";
import { MainPage } from "@pages/components";
import PrivacyPolicy from "@pages/PrivacyPolicy";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />}>
        <Route path="/*" index element={<LandingPage />} />
        <Route path="service" element={<Service />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="help-center" element={<HelpCenter />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
