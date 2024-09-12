import logoSrc from 'assets/images/logo-default.webp';
import Image from 'next/image';

export default function LogoIcon(props: any) {
  return (
    <Image
    src={logoSrc}
    className={ props.className} 
    alt="Picture of the author"
  />
  );
}
