import { Fragment } from 'react';
import { withActiveFlag } from './with-active-flag';

function InputHelp(props: any){
    const {isActive, onActiveChange, ...restProps} = props;
    return(
        <Fragment>
            <input 
                type='text' 
                onFocus={onActiveChange} 
                onBlur={onActiveChange} 
                {...restProps}
            />
            {isActive && 
                <span className='help'>Подсказка по заполнению</span>
            }
        </Fragment>
    );
}

export default withActiveFlag(InputHelp);