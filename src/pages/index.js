import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/Home');
  }, []);

  return <></>;
}

export default Home;
