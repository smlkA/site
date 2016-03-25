import * as React from 'react';
import {connect} from 'react-redux'

import * as FloatingActionButton from 'material-ui/lib/floating-action-button';
import * as Create from 'material-ui/lib/svg-icons/content/create';
import * as Dialog from 'material-ui/lib/dialog'

import PostEditForm from './post.edit.form';

const NewPostComponent = ({state, postEditor, onDialogOpen, onDialogClose}) => (
    <div>
        <FloatingActionButton onTouchTap={onDialogOpen} style={{position: 'fixed', right: 50, bottom: 50}}>
            <Create/>
        </FloatingActionButton>
        <Dialog title='New post'
                open={state.dialogOpen}
                onRequestClose={onDialogClose}>
            <PostEditForm {...postEditor}/>
        </Dialog>
    </div>
);

const NewPostContainer = connect(
    state => state.newPost,
    dispatch => {
        return {
            onDialogOpen: () => dispatch({type: 'OPEN_DIALOG'}),
            onDialogClose: () => dispatch({type: 'CLOSE_DIALOG'})
        };
    }
)(NewPostComponent);

export default NewPostContainer;