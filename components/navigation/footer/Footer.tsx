import footerLinks from './footerLinks.json';

interface IFooter extends React.ComponentPropsWithoutRef<'div'> {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="footer flex max-w-[1155px] items-center justify-between left-[55px] relative">
      <small className="footer-copyright text-sm">
        © All Rights Reserved. HCL Technologies
      </small>
      <ul className="footer-links flex text-xs">
        {footerLinks.map((link, index) => {
          return (
            <li className="footer-link [&:not(:last-child):after]:content-['|'] after:mx-[10px]" key={index}>
              <a href={link.href}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
