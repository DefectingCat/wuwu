import WutheringWavesLogo from 'assets/game-icons/Wuthering_Waves_logo.png';
import { createSignal } from 'solid-js';

const games = [
  {
    name: '鸣潮',
    icon: WutheringWavesLogo,
  },
];

const GameSelector = () => {
  const [current, setCurrent] = createSignal(0);
  const currentGame = games[current()];

  return (
    <div>
      <div class="cursor-pointer">
        <img class="rounded-lg" src={currentGame.icon} />
      </div>
    </div>
  );
};

export default GameSelector;
