/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const configureToast: any = {
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light'
}

export const notify = (text) => toast.success(text, configureToast)
export const notifyInfo = (text) => toast.info(text, { ...configureToast, position: 'top-right' })
export const notifyError = (text) => toast.error(text, configureToast)

const Notification = () => {
  return <ToastContainer />
}

export default Notification
