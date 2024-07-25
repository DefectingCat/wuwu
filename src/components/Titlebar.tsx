import { Component } from 'solid-js';
import styles from './Titlebar.module.css';

const Titlebar: Component = () => {
  return (
    <>
      <div data-tauri-drag-region class={styles.titlebar}>
        <div class={styles.titlebarButton} id="titlebar-minimize">
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>
        <div class={styles.titlebarButton} id="titlebar-maximize">
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>
        <div class={styles.titlebarButton} id="titlebar-close">
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
    </>
  );
};

export default Titlebar;
