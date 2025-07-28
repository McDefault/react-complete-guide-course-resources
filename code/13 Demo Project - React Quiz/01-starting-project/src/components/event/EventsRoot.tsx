import { Outlet } from 'react-router-dom';

import EventsNavigation from './EventsNavigation.tsx';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
