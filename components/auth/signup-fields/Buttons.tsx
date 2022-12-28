export interface IButtons extends React.ComponentPropsWithRef<'div'> {
    isFirstField: boolean;
    switchNext: () => void;
    switchPrev: () => void;
}

const Buttons: React.FC<IButtons> = ({
    isFirstField = true,
    switchNext,
    switchPrev,
  }) => {
    return (
      <div className="sign-up-buttons">
        {!isFirstField && (
          <button className="sign-up-button" onClick={switchPrev}>
            Back
          </button>
        )}
        <button className="green-btn sign-up-button" onClick={switchNext}>
          Continue
        </button>
      </div>
    );
  };
  
  export default Buttons;