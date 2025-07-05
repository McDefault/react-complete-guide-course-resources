import { Outlet } from 'react-router-dom';

import EventsNavigation from './EventsNavigation.jsx';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
