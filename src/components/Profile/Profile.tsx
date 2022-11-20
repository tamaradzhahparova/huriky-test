import s from "./Profile.module.css";
import { useAppSelector } from "../../app/hooks";

export const Profile = () => {
  const isAuthorized = useAppSelector(
    (state) => state.authorization.isAuthorized
  );
  return (
    <div className={s.profile}>
      {isAuthorized ? (
        <div>Это ваш профиль :) </div>
      ) : (
        <div>Эта страница недоступна без авторизации</div>
      )}
    </div>
  );
};
