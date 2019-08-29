import React from 'react'
import { Form, Button, Checkbox, Modal, Header, Icon } from 'semantic-ui-react';


const Products = (props) => {
  const { summary, modelOpen } = props;
 
   return(
    <Modal className="team_description" open style={{leftMargin :  "20%"}} >
    <Header icon='info' content='Summary' />
    <Modal.Content style={{minHeight :  "80px"}}>
    <span>{summary}</span>
    </Modal.Content>
    <Modal.Actions>
      <Button
        color="red"
        onClick={modelOpen}
      >
        Close
      </Button>
    </Modal.Actions>
  </Modal>
   )
}

export default Products
