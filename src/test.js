
import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import StarIcon from 'material-ui-icons/Star';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import classNames from 'classnames';
//样式
const styles=theme=>({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex:1,
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  drawerHeader: {   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    marginLeft: 0,
    }),
  },
  'content-left': {
    marginLeft: -240,
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
});

//父组件
class MyDrawer extends   Component{
  constructor(props){
    super(props);
    this.state={
      open:false,
      mouse:true,
      anchorEl: null,
    }
//点击事件函数绑定
    this.handleOnclick=this.handleOnclick.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
    this.handleMenu=this.handleMenu.bind(this);
  }

// 点击事件
  handleOnclick(){
      var open=this.state.open;
      this.setState({open:!open});
  }
  handleEnter=event=>{
    if(this.state.mouse===true){
    this.setState({mouse:!this.state.mouse  ,anchorEl: event.currentTarget});
    }
  }
  handleMenu(){
    this.setState({mouse:!this.state.mouse});
  }


  render(){
    const classes=this.props.classes;
    return (
    <div className={classes.root} >                   
       <AppBar  className={classes.appBar}>
          <Toolbar>
            <IconButton color='secondary' onClick={this.handleOnclick}> <MenuIcon/></IconButton>
            <Typography variant="title" color="inherit"  className={classes.flex}>test</Typography>
            {/* -----登录---- */}
            <div onMouseEnter={this.handleEnter}>
            <IconButton color="inherit" > <AccountCircle /></IconButton>
            <Menu  open={!this.state.mouse}  anchorEl={this.state.anchorEl} onClick={this.handleMenu}>
              <MenuItem >My account</MenuItem>
              <MenuItem >logout</MenuItem>
            </Menu>
            </div>
          </Toolbar>
       </AppBar>
       {/* -------Drawer------ */}
       <Drawer   variant="persistent" open={this.state.open} classes={{paper:classes.drawerPaper}}>
               <IconButton  onClick={this.handleOnclick}><MenuIcon/></IconButton>
       {/* ----list----- */}
            <list>{menulist}</list>
       </Drawer>
        {/* -------main--------- */}
        <main  className={classNames(classes.content, classes[`content-left`], 
             {[classes[`contentShift-left`]]: this.state.open})}>
            <div className={classes.drawerHeader}  />
            <Typography noWrap>whosyourdaddy</Typography>
        </main>
    </div>
    )
  }
} 

// -------list--------
const menulist=(
  <div>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText  primary="菜单1" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="菜单2" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="菜单3" />
      </ListItem>
    </div>
  );

export default withStyles(styles)(MyDrawer);