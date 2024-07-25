import Titlebar from 'components/Titlebar';
import { children, Component, JSX } from 'solid-js';

const Main: Component<{
  children?: JSX.Element;
}> = (props) => {
  const safeChildren = children(() => props.children);

  return (
    <>
      <Titlebar />
      {safeChildren}
      Main
    </>
  );
};

export default Main;
