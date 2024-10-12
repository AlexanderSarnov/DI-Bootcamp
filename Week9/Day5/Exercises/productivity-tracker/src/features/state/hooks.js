// src/features/state/hooks.js
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from './slice';

// Custom hook to use dispatch and actions
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ addTask }, dispatch);
};

// Custom hook to select tasks from state
export const useTasks = () => {
    return useSelector((state) => state.tasks);
};

