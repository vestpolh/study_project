import Toggle from './toggle';
import InputHelp from './input-help';
import './styles.css';

function ToggleApp() {

    return (
        <form className='form'>
            <Toggle>Включи меня</Toggle>
            <InputHelp placeholder='Заполни меня'></InputHelp>
        </form>
    );
}

export default ToggleApp;