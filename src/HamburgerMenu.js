import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import NotesIcon from "@material-ui/icons/Notes";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import PersonIcon from '@material-ui/icons/Person'
import DescriptionIcon from '@material-ui/icons/Description'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Container from '@material-ui/core/Container'
import MediaQuery from 'react-responsive'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  icon: {
    color: 'orange',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginLeft: '5%',
  },
  color: {
    color: 'orange',
    fontWeight: 'bold',
  },
  moveMd: {
    position: 'absolute',
    top: '3%',
    color: 'orange',
    left: '95%',
  },
  moveSm: {
    position: 'absolute',
    top: '-1%',
    color: 'orange',
    left: '82%',
  },
  sizeMd: {
    fontSize: '50px',
  },
  sizeSm: {
    fontSize: '40px',
  },
}))

export default function PersistentDrawerRight() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <MediaQuery query="(min-width: 767px)">
        <div className={classes.moveMd}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <NotesIcon className={classes.sizeMd} />
          </IconButton>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <div className={classes.moveSm}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <NotesIcon className={classes.sizeSm} />
          </IconButton>
        </div>
      </MediaQuery>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <div className={classes.flex}>
          <div className={classes.color}>
            <Typography>お名前</Typography>
            <Typography>診察券番号</Typography>
          </div>
          <div className={classes.left}>
            <Typography>名前が入ります。</Typography>
            <Typography>12345678</Typography>
          </div>
        </div>
        <Divider />
        <List>
          {/* {["ホーム", "予約確認", "治療状況", "お知らせ", "マイページ", "治療説明", "友達紹介", "登録情報", "同意書", "治療契約書"].map((text, index) => ( */}
          <ListItem button onClick={() => history.push("/topMain")}>
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>ホーム</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/reservation")}>
            <ListItemIcon className={classes.icon}>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText>予約確認</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/treatmentStatus")}>
            <ListItemIcon>
              <LocalHospitalIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>治療状況</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/notice")}>
            <ListItemIcon>
              <AnnouncementIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>お知らせ</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/mypage")}>
            <ListItemIcon>
              <PersonIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>マイページ</ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={() => history.push("/treatmentDescription")}
          >
            <ListItemIcon>
              <DescriptionIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>治療説明</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/registration")}>
            <ListItemIcon>
              <PersonAddIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>友達紹介</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/introduction")}>
            <ListItemIcon>
              <AssignmentIndIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>登録情報</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/consentForm")}>
            <ListItemIcon>
              <LibraryBooksIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>同意書</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/contract")}>
            <ListItemIcon>
              <LibraryBooksIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>治療契約書</ListItemText>
          </ListItem>
          {/* // ))} */}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => history.push("/")}>
            <ListItemText>利用規約</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/")}>
            <ListItemText>プライバシーポリシー</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>ログアウト</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
