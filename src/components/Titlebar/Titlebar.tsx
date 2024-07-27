import cn from 'classnames';
import { Component } from 'solid-js';
import styles from './Titlebar.module.css';

const titlebarButton = 'cursor-pointer w-5 h-5';

const Titlebar: Component = () => {
  return (
    <>
      <div data-tauri-drag-region class={cn(styles.titlebar)}>
        <div id="titlebar-minimize" class={styles.titlebarButtonWrapper}>
          <span
            class={cn(
              'icon-[mdi--minimize]',
              styles.titlebarButton,
              titlebarButton,
            )}
          ></span>
        </div>
        <div id="titlebar-maximize" class={styles.titlebarButtonWrapper}>
          <span
            class={cn(
              'icon-[mdi--maximize]',
              styles.titlebarButton,
              'cursor-pointer w-4 h-4',
            )}
          ></span>
        </div>
        <div
          id="titlebar-close"
          class={cn('hover:bg-red-400', styles.titlebarButtonWrapper)}
        >
          <span
            class={cn(
              'icon-[mdi--close]',
              styles.titlebarButton,
              titlebarButton,
            )}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Titlebar;
