import { UserCardType } from '@/types/types'
import Users from "../assets/icons/np_user2.png"
import Users2 from "../assets/icons/np_user2.png"
import Loan from "../assets/icons/np_loan.png"
import Savings from "../assets/icons/np_money.png"

export const userCardData: UserCardType[] = [
    {
        icon: Users,
        text: "users",
        figure: "2,453",
    },
    {
        icon: Users2,
        text: "active users",
        figure: "2,453"
    },
    {
        icon: Loan,
        text: "users with loans",
        figure: "12,453"
    },
    {
        icon: Savings,
        text: "users with savings",
        figure: "102,453"
    },
]