import React, { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ANONYMOUS_AUTH_TOKEN, AuthManager } from '@/datamanager/authManager';

const WithAuth = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  const ComponentWithAuth: React.FC<P> = (props: P) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (AuthManager.getInstance().getToken() === ANONYMOUS_AUTH_TOKEN) {
        navigate('/login');
      }
    }, [history]);
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default WithAuth;
