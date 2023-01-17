import { withActiveFlag } from './with-active-flag';

function Toggle(props: any){
    return(
        <div 
            className={`toggle ${props.isActive ? 'toggle_checked_yes' : 'toggle_checked_no'}`} 
            onClick={props.onActiveChange}
        >
           {props.children}
        </div>
    );
}

export default withActiveFlag(Toggle);