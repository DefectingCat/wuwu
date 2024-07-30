import cn from 'classnames';
import { Component, createSignal, onCleanup, onMount, Show } from 'solid-js';
import styles from './Titlebar.module.css';
import { appWindow } from '@tauri-apps/api/window';

const titlebarButton = 'cursor-pointer w-5 h-5 text-white';

const Titlebar: Component = () => {
  const [isMaximized, setIsMaximized] = createSignal(false);
  onMount(async () => {
    const unlisten = await appWindow.onResized(async () => {
      setIsMaximized(await appWindow.isMaximized());
    });
    setIsMaximized(await appWindow.isMaximized());
    onCleanup(() => unlisten());
  });

  return (
    <>
      <div data-tauri-drag-region class={cn(styles.titlebar)}>
        <div
          id="titlebar-minimize"
          class={styles.titlebarButtonWrapper}
          onclick={() => {
            appWindow.minimize();
          }}
        >
          <span
            class={cn(
              'icon-[mdi--minimize]',
              styles.titlebarButton,
              titlebarButton,
            )}
          ></span>
        </div>
        {/* <Show when={!isMaximized()}>
          <div
            id="titlebar-maximize"
            class={styles.titlebarButtonWrapper}
            onclick={() => {
              appWindow.maximize();
            }}
          >
            <span
              class={cn(
                'icon-[mdi--maximize]',
                styles.titlebarButton,
                'cursor-pointer w-4 h-4',
              )}
            ></span>
          </div>
        </Show>
        <Show when={isMaximized()}>
          <div
            id="titlebar-maximize"
            class={styles.titlebarButtonWrapper}
            onclick={() => {
              appWindow.unmaximize();
            }}
          >
            <span
              class={cn(
                'icon-[mdi--maximize]',
                styles.titlebarButton,
                'cursor-pointer w-4 h-4',
              )}
            ></span>
          </div>
        </Show> */}
        <div
          id="titlebar-close"
          class={cn('hover:bg-red-600', styles.titlebarButtonWrapper)}
          onclick={() => {
            appWindow.close();
          }}
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
