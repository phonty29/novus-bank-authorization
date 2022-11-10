import styles from './BaseComponent.module.css';

export interface IBaseComponent {
  sampleTextProp: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseComponent;