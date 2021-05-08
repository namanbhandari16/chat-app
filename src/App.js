import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import Nav from './components/Nav'
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (<>
    <Nav height="15vh"/>
    <ChatEngine height="90vh" projectID="5100d98f-f025-41c0-a8e4-9231b3bc9f86" 
    userName={localStorage.getItem('username')} 
    userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}/>
       </> );
}

export default App;
