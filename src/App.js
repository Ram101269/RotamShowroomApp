import logo from './logo2.jpg';
import './App.css';
import { withAuthenticator, Authenticator  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
