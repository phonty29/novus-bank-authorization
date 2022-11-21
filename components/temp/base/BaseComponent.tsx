export interface IBaseComponent {
  sampleTextProp: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseComponent;
