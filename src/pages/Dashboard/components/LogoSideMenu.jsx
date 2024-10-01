import { Box } from "@mui/material"
import logoImg from '../../../assets/smkn8jember.png'

const LogoSideMenu = () => {
    return (
    <Box className="text-white flex justify-center items-center gap-4">
        <img src={logoImg} alt="logo" width={'50px'} height={'50px'}/>
        <h2 className="font-bold">SMKN 8 JEMBER</h2>
    </Box>
    )
}

export default LogoSideMenu;