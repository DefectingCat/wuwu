import cn from 'classnames';
import { Component } from 'solid-js';
import styles from './Titlebar.module.css';

const Titlebar: Component = () => {
  return (
    <>
      <div data-tauri-drag-region class={cn(styles.titlebar, 'h-8')}>
        <div class={styles.titlebarButton} id="titlebar-minimize">
          <span class="icon-[solar--archive-down-minimlistic-linear]"></span>
        </div>
        <div class={styles.titlebarButton} id="titlebar-maximize">
          <span class="icon-[solar--maximize-square-minimalistic-linear]"></span>
        </div>
        <div class={styles.titlebarButton} id="titlebar-close">
          <span class="icon-[solar--close-circle-linear]"></span>
        </div>
      </div>
    </>
  );
};

export default Titlebar;
