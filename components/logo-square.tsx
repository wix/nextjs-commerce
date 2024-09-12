import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  console.log("size",size);
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center',
        {
          'h-[40px] rounded-xl': !size,
          'h-[40px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[60px] w-auto': !size,
          'h-[40px] w-auto': size === 'sm'
        })}
      />
    </div>
  );
}
