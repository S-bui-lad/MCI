import React from 'react';
import Header from './components/Header';
import EventSection from './components/EventSection';
import MemberSection from './components/MemberSection';
import TrainingPrograms from './components/TrainingPrograms';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Header />
        <EventSection />
        <MemberSection />
        <TrainingPrograms />
        <Footer />
      </div>
  );
}

export default App;
