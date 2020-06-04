import React, { useState } from "react";
import { Button, Icon, Modal } from 'semantic-ui-react'

function TodoModal(props) {
    const [modal, setModalState] = useState(false);


    const handleOpen = () => setModalState(true);
    const handleClose = () => setModalState(false);

    return (
        <Modal
            trigger={<Button className="ui secondary button " onClick={handleOpen}>+</Button>}
            open={modal}
            onClose={handleClose}
            basic
            size='small'
        >

            <Modal.Content>

                <form className="ui form" onSubmit={props.handleSubmit}>
                    <div className="ui left action input">
                        <input
                            type="text"
                            className="input"
                            placeholder="What do you want to do today?"
                            value={props.value}
                            onChange={e => props.setValue(e.target.value)}
                        />
                        <button className="ui primary icon right labeled button">Submit</button>
                    </div>
                </form>




            </Modal.Content>
            <Modal.Actions>
                <Button color='primary' onClick={handleClose} inverted>
                    <Icon name='checkmark' /> Finished
          </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default TodoModal;