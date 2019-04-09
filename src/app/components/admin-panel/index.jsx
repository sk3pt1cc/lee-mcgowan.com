import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../styled/ button';
import AdminPanelWrapper from './AdminPanelWrapper';

const AdminPanel = () => (
  <AdminPanelWrapper>
    <Button>
      <Link to="/post/create">
        Create Post
      </Link>
    </Button>
  </AdminPanelWrapper>
);

export default AdminPanel;