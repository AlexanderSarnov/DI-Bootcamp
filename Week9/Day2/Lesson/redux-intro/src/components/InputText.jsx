import { useDispatch } from 'react-redux';
import { changeTitle } from '../redux/textAction';
import { connect } from 'react-redux';
import React from 'react';

const InputText = (props) => {
    const dispatch = useDispatch(props.dispatch);

    return (
        <div>
            <input type="text" onChange={(e) => props.myChangeTitle()} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    title: state.text.title,
});

const mapDispatchToProps = (dispatch) => {
    return {
        myChangeTitle: (e) => dispatch(changeTitle(e.target.value)),
    };
};

// export default InputText;

export default connect(mapStateToProps, mapDispatchToProps)(InputText);
