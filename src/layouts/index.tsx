import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (max-width: 780px)' : {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8)
      }
    }
  })
)

export default function DefaultLayout({ children, title }: any) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalPizzaIcon />
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <div className={classes.paper}>
          { children }   
        </div>
      </Container>   
    </React.Fragment>
  )
}
