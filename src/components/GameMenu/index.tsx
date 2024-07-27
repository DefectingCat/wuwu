import cn from 'classnames';
import { JSX } from 'solid-js';

/**
 * Game menu home
 */
const GameMenuHome = ({
  actived,
  onclick,
}: {
  actived: boolean;
  onclick?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | undefined;
}) => {
  return (
    <div
      class={cn(
        'flex justify-center rounded-lg',
        'items-center hover:bg-gray-400',
        'w-full py-2 cursor-pointer',
        'hover:bg-opacity-50',
        actived && 'bg-gray-400 bg-opacity-50',
        'transition-all',
      )}
      onclick={onclick}
    >
      <span class={cn('icon-[bx--home-alt]', 'text-white w-7 h-7')}></span>
    </div>
  );
};

export default GameMenuHome;
