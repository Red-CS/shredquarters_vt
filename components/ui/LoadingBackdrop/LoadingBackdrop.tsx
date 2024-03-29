import { Backdrop, CircularProgress } from '@mui/material'

const LoadingBackdrop = () => (
  <Backdrop
    sx={{ color: 'gold', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
  >
    <CircularProgress color='inherit' />
  </Backdrop>
)

export { LoadingBackdrop }
