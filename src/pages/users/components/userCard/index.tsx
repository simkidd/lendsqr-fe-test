import { UserCardType } from "@/types/types";
import './userCard.scss'

type Props = {
    item: UserCardType;
}

const UserCard:React.FC<Props> = ({item}) => {
  return (
    <div className="user-card">
      <div className="img-container">
        <img src={item.icon} alt="" />
      </div>
      <p>{item.text}</p>
      <p>{item.figure}</p>
    </div>
  )
}

export default UserCard