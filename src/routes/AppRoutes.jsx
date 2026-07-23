import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import DisasterReports from '../pages/disasters/DisasterReports.jsx';
import CreateDisaster from '../pages/disasters/CreateDisaster.jsx';
import DisasterDetails from '../pages/disasters/DisasterDetails.jsx';
import Resources from '../pages/resources/Resources.jsx';
import Warehouses from '../pages/warehouses/Warehouses.jsx';
import LiveMap from '../pages/live-map/LiveMap.jsx';
import Notifications from '../pages/notifications/Notifications.jsx';
import Profile from '../pages/profile/Profile.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/disasters" element={<DisasterReports />} />
          <Route path="/disasters/create" element={<CreateDisaster />} />
          <Route path="/disasters/:id" element={<DisasterDetails />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/live-map" element={<LiveMap />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
