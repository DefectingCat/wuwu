import cn from 'classnames';
import { JSX } from 'solid-js';
import styles from 'components/GameMenu/index.module.css';

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
        'items-center',
        'w-full py-2 cursor-pointer',
        actived && styles.btnActive,
        'transition-all',
        styles.btn,
      )}
      onclick={onclick}
    >
      <span class={cn('icon-[bx--home-alt]', 'text-white w-7 h-7')}></span>
    </div>
  );
};

export default GameMenuHome;
