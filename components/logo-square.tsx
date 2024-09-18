import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'ml-6 rounded-xl': !size,
        'h-[40px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-12 w-auto xl:h-16': !size,
          'h-12 w-auto': size === 'sm'
        })}
      />
    </div>
  );
}
