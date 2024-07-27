import cn from 'classnames';
import WutheringWavesLogo from 'assets/game-icons/Wuthering_Waves_logo.png';
import GameMenuHome from 'components/GameMenu';
import { createSignal, For } from 'solid-js';

const Leftbar = () => {
  // game index
  const [current, _setCurrent] = createSignal(0);
  const games = [
    {
      name: '鸣潮',
      icon: WutheringWavesLogo,
      menus: [GameMenuHome],
    },
  ];
  const currentGame = games[current()];

  // menu index
  const [menuIndex, setMenuIndex] = createSignal(0);

  return (
    <div
      class={cn('flex flex-col w-16 py-[10px]', 'bg-gray-400 bg-opacity-50')}
    >
      <div>
        <div class="cursor-pointer flex justify-center">
          <img class="rounded-lg w-12 h-12" src={currentGame.icon} />
        </div>
      </div>

      <div class="h-[2px] bg-gray-300 my-2 mx-[-10px]"></div>

      <div class="px-[6px] flex flex-col items-center">
        <For each={currentGame.menus}>
          {(Menu, index) => (
            <Menu
              actived={index() === menuIndex()}
              onclick={() => setMenuIndex(index())}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Leftbar;
