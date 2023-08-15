import { AddCircleOutline } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const FriendCard = () => {
    
    const addRequest = () => {
        console.log("Add Request")
    }
    
  return (
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'gray', margin: 2 }} >
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Govind Gojiya"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                IT 3rd
              </Typography>
            </React.Fragment>
          }
        />
        <AddCircleOutline fontSize='medium' onClick={addRequest} />
      </ListItem>
    </List>
  )
}

export default FriendCard