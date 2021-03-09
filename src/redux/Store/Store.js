
// import reducer from './reducers';
import project_reducer from '../Reducers/project_reducer';
import task_reducer from '../Reducers/task_reducer';
import workspace_reducer from '../Reducers/workspace_reducer';
import card_reducer from '../Reducers/card_reducer';
import public_reducer from '../Reducers/public_reducer';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCardsByProjectId, getProjectsByWorkspaceId, getTasksByProject, getTasksByCardId, NewCard, NewTask ,EditTask, EditCard} from '../middleware/crud'
import { actions } from '../actions/action.js';
import { setWorkspaCrud } from '../middleware/crud'
import { getAllWorkspacesFromServer } from '../middleware/crud'
import { createNewTeam } from '../middleware/crud'
import { deleteProjectInServer } from '../middleware/crud'
import { removeTaskById } from '../middleware/crud'

import { setProjectCrud } from '../middleware/crud'
// import { getAllTeamsForUser } from '../middleware/crud'
import { setTaskCrud } from '../middleware/crud'
import { editWorkspaceInServer } from '../middleware/crud'
import { editProjectInServer } from '../middleware/crud'
import { editTaskInServer } from '../middleware/crud'
import { editCard } from '../middleware/crud'
import { getTaskByIdFromServer } from '../middleware/crud'
import { getProjectByIdInServer } from '../middleware/crud'
import { deleteWorkspaceInServer } from '../middleware/crud'


const reducers = combineReducers({ project_reducer, task_reducer, workspace_reducer, public_reducer, card_reducer });


const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware
            (
                deleteProjectInServer,
                editTaskInServer,
                editProjectInServer,
                editWorkspaceInServer,
                setWorkspaCrud,
                getAllWorkspacesFromServer,
                setTaskCrud,
                createNewTeam,
                // getAllTeamsForUser,
                setProjectCrud,
                getProjectsByWorkspaceId,
                // getTasksByProject,
                getTaskByIdFromServer,
                getProjectByIdInServer,
                getCardsByProjectId,
                getTasksByCardId,
                deleteWorkspaceInServer,
                NewCard,
                NewTask,
                removeTaskById,
                EditTask,
                EditCard
            ))
)
var url = window.location;
console.log(url);
store.dispatch(actions.setUserName(url.pathname.split('/')[1]))
if (window.location.hostname == "localhost") {
    console.log("localhost");
    let jwtFromCookie="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwUHN1bEs3ZElKWUloc3BwcXRVSWVpSWd5NTgzIiwiZW1haWwiOiJlZnJhdEBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MTUxMDk5ODB9.7w3ZjJEGWKI4wZIFMLfUweIqUPD8dcf06ks-EwPcuXc"
store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
}
else {
    if (document.cookie) {
        let jwtFromCookie = document.cookie.includes('jwt') ?
            document.cookie.split(";")
                .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
        store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
    }
}
window.store = store;
export default store;