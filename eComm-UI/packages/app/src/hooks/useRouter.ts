import { useNavigate, useLocation } from 'react-router-dom';

export function useRouter() {
  const history  = useNavigate();
  const location = useLocation();
  return {
    history,
    path : location?.pathname
  };
};
