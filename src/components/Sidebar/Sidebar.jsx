import { Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { Home, AvTimer, AccessTime, PlaylistPlay, Settings, EmojiFlags, HelpOutline, ChatBubble } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { items } from '../../assets/data/sidebarItems';
import 'boxicons'
const useStyles = makeStyles(theme => ({
  
  container: {
    background: '#202020',
    height: '100vh',
    position: 'sticky',
    width: '100%',
    top: '4rem',
    left: '0' 
  },
  listItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '.5rem 2rem',
    cursor: 'pointer',
    color: '#fff',
    "&:hover": {
      backgroundColor: '#303030' ,
    } 
  },
  activeItem: {
  },
  link: {
    textDecoration: 'none',

  },
  listItemIcon: {
    fontSize: '1.4rem',
    color: '#fff',
    marginRight: '1rem'
  },
  active: {
    backgroundColor: '#303030' ,
  }
}));
export const Sidebar = () => {
  const classes = useStyles()
  return (
    <div className={classes.container} id="sidebar">
      <ul className={classes.list}>
          {items && items.map(item => (
            <Link key={item.label} activeClassName="active"  to={item.slug} className={classes.link}>
            <li className={classes.listItem}>
                <i className={classes.listItemIcon}>
                <i class={`bx bx-${item.icon}`}></i>
                </i>
                <Typography variant='body2' className="sidebar-text">
                  {item.label}
                </Typography>
            </li>
          </Link>
          ))}
      </ul>
    </div>
  )
}
