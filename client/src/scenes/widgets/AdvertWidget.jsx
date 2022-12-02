import { Typography, useTheme } from '@mui/material'
import FlexBetween from '../../components/FlexBetween'



const AdvertWidget = () => {
    const { palette } = useTheme()
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <div>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>
                    Created Add
                </Typography>
            </FlexBetween>
            <FlexBetween>
                <Typography color={main}>pr4zka</Typography>
                <Typography color={medium}><a href="www.pr4zka.online" target="_blank">www.pr4zka.online</a></Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                the best portafolio bro!!!!
            </Typography>
        </div>
    )

}


export default AdvertWidget