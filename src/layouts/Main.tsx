import Leftbar from 'components/Leftbar/Leftbar';
import Titlebar from 'components/Titlebar/Titlebar';
import { Component, JSX } from 'solid-js';

const Main: Component<{
  children?: JSX.Element;
}> = (props) => {
  /* const safeChildren = children(() => props.children); */

  return (
    <>
      <div class="flex h-full">
        {/* left bar */}
        <Leftbar />
        {/* right body */}
        <div class="flex flex-col w-full flex-1">
          <Titlebar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Main;
