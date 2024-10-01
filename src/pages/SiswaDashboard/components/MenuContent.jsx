import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { useNavigate } from 'react-router-dom';

const mainListItems = [
  { text: 'Dashboard', icon: <HomeRoundedIcon />, path: '' },
  // { text: 'Siswa', icon: <PeopleRoundedIcon />, path: 'siswa' },
  { text: 'Kehadiran', icon: <AssignmentRoundedIcon />, path: 'kehadiran' },
];

export default function MenuContent() {
  const [selectedIndex, setSelectedIndex] = React.useState(0); // State untuk melacak item yang dipilih
  const nav = useNavigate();

  const handleListItemClick = (index, path) => {
    setSelectedIndex(index); // Mengatur item yang dipilih
    nav(path); // Navigasi ke path yang sesuai
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block',color: 'white',  fontWeight: 'bold', '&:hover': {  backgroundColor: '#FFDBE1'} }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index, item.path)}
            >
              <ListItemIcon sx={{color: 'white'}}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
