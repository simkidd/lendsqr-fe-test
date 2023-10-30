export interface UserCardType {
    icon: string;
    text: string;
    figure: string;
}

export interface SidebarType {
    menu: string,
    url: string,
    icon: string,
}

export interface IProfile {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatar: string,
    gender: string,
    bvn: string,
    address: string,
    currency: string
}

export interface User {
    id: string;
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string;
    lastActiveDate: string;
    firstName: string;
    avatar: string;
    accountBalance: string;
    accountNumber: string;
    profile: IProfile;
    guarantor: IGuarantor;
    education: IEducation;
    socials: ISocials
}

export interface IGuarantor {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    gender: string,
    address: string,
}
export interface IEducation {
    level: string,
    employmentStatus: string,
    sector: string,
    duration: string,
    officeEmail: string,
    monthlyIncome: string[];
    loanRepayment: string
}
export interface ISocials {
    facebook: string;
    instagram: string;
    twitter: string
}

export interface SelectedOptions {
    orgName: string;
    userName: string;
    email: string;
    createdAt: string;
    phoneNumber: string;
    status: string;
}