import { useDispatch, useSelector, connect } from 'react-redux';

import { add, minus } from '../redux/actions';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count);

    const dispatch = useDispatch();

    return (
        <>
            <h2>Redux Counter</h2>
            <button onClick={() => dispatch(add())}>+</button>
            {count}
            <button onClick={() => dispatch(minus())}>-</button>
        </>
    );
};

export default Counter;


// *connect is a legacy function (not a hook)...


// const mapStateToProps = (state) => {
    // return {
    //     myCount: state.counterReducer.count,
// };}
    
//** export default connect(mapStateToProps,mapDispatchToProps)(Counter); */