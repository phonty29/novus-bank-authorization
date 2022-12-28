export interface IFooter extends React.ComponentPropsWithoutRef<'div'> {}

const Footer: React.FC<IFooter> = () => {
  return <div className="footer">Privacy policy</div>;
};

export default Footer;
