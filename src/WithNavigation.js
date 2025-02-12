import { useNavigate } from "react-router-dom";

export function WithNavigation(Component) {
  return function WrappedComponent(props) {
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
