import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Share Prompts", 
    description: "Make Your Own AI Prompts"
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <head>
        <meta name="google-site-verification" content="EopQlvoC6K3SxUD5sWWkYVkdepBVsAjFfqDsViiZsZ0" />
      </head>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
  
  export default RootLayout;
