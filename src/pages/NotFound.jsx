import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';

const NotFound = () => {
  return (
    <>
      <LinkGoBack to={'/'}>Go back</LinkGoBack>
      <div>404</div>
      <div>Not Found</div>
    </>
  );
};

export default NotFound;
