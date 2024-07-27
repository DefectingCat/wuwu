import cn from 'classnames';
import GameSelector from 'components/GameSelector';

const Leftbar = () => {
  return (
    <div class={cn('flex flex-col w-16 p-[10px]', 'bg-gray-300 bg-opacity-50')}>
      <GameSelector />
      <div class="h-[2px] bg-gray-300 my-2 mx-[-10px]"></div>
    </div>
  );
};

export default Leftbar;
