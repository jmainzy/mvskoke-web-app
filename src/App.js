import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Container from '@material-ui/core/Container';

import PhraseCard from './components/PhraseCard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <Container maxWidth="sm" 
          style={{
            padding: '20px',
          }}>
          <PhraseCard/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
