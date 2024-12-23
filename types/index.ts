import { ReactNode } from "react";

//wrapper props
export interface WrapperProps {
  children?: ReactNode;
  className?: string;
}

//Banner props
export interface BannerProps {
  title?: string;
  subTitle?: string;
  subSubTitle?: string | undefined;
  image?: any;
  homePage?: string;
  currentPage?: string;
  className?: string;
  className2?: string;
}

export interface SectionTitleProps {
  heading?: string;
  className?: string;
  className2?: string;
  subTitle?: string;
  className1?: string;
}

export interface FormModalProps {
  modalClose: (isOpen: boolean) => void;
}
