export interface IButtons extends React.ComponentPropsWithRef<'div'> {
    isFirstField: boolean;
    switchPrev: () => void;
}

const Buttons: React.FC<IButtons> = ({
    isFirstField = true, switchPrev
  }) => {
    return (
      <div className="sign-up-buttons">
        {!isFirstField && (
          <button className="sign-up-button" onClick={switchPrev}>
            Back
          </button>
        )}
        <button type="submit" className="green-btn sign-up-button">
          Continue
        </button>
      </div>
    );
  };
  
  export default Buttons;