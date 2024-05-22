import React from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import Homepage from './pages/homepage';
import Academypage from './pages/academypage';
import Aboutpage from './pages/aboutpage';
import Coursepage from './pages/coursepage';
import Enquirypage from './pages/enquirypage';
import Pplpage from './pages/pplpage';
import Cplpage from './pages/cplpage';
import Atplpage from './pages/atplpage';
import Spicespage from './pages/spicespage';
import IandEHomepage from './pages/IandEHomepage';
import IandEAboutpage from './pages/IandEAboutpage';
import OurProductpage from './pages/ourproductpage';
import SpicesDescriptionpage from './pages/SpicesDescriptionpage';
import IEenquirypage from './pages/IEenquirypage';
import Contactpage from './pages/Contactpage';
import TypeRatingCoursepage from './pages/TypeRatingCoursepage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/academyhome" element={<Academypage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/course" element={<Coursepage />} />
          <Route path="/enquiry" element={<Enquirypage />} />
          <Route path="/ppl-course" element={<Pplpage />} />
          <Route path="/cpl-course" element={<Cplpage />} />
          <Route path="/atpl-course" element={<Atplpage />} />
          <Route path="/spiceses" element={<Spicespage />} />
          <Route path="/import&exporthome" element={<IandEHomepage />} />
          <Route path="/import&exportabout" element={<IandEAboutpage />} />
          <Route path="/our-product" element={<OurProductpage />} />
          <Route
            path="/spice-description/:id"
            element={<SpicesDescriptionpage />}
          />

          <Route path="/enquirys" element={<IEenquirypage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route
            path="/type-rating/:courseId"
            element={<TypeRatingCoursepage />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
