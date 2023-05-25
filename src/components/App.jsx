import { GlobalStyle } from './GlobalStyle';
import { UserRouters } from './UserRouters';

export const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Глобальні стилі */}
      <UserRouters /> {/* Список маршрутів */}
    </>
  );
};
