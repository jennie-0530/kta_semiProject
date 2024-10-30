import { Link } from 'react-router-dom';

type FooterType = {
  name: string;
  linkTo: string;
  id: number;
}[];

const Footer = () => {
  const footer: FooterType = [
    { name: '회사소개', linkTo: '/company', id: 1 },
    { name: '문의하기', linkTo: '', id: 2 },
    { name: '이용약관', linkTo: '/terms', id: 3 },
  ];

  return (
    <div className='h-[100px] border-t'>
      <ul className='flex justify-center'>
        {footer &&
          footer.map((item) => {
            return (
              <Link key={item.id} to={item.linkTo}>
                <li className='mx-3 mt-5 text-h3 hover:text-[#dcdcdc]'>
                  {item.name}
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Footer;
