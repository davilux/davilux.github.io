import logo from "./logo.svg"
import { Layout } from "./components/index"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#231B43",
    },
    secondary: {
      main: "#402e8cff",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
