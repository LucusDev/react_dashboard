import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./widget.scss";
import {
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
export enum WidgetType {
  user,
  order,
  earning,
  balance,
}

interface WidgetProps {
  type: WidgetType;
}

const Widget: React.FC<WidgetProps> = ({ type }) => {
  let data!: {
    title: String;
    isMoney: boolean;
    link: String;
    icon: JSX.Element;
  };

  const amount = 100;
  const diff = 20;
  switch (type) {
    case WidgetType.user: {
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" />,
      };
      break;
    }
    case WidgetType.order: {
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlined className="icon" />,
      };
      break;
    }
    case WidgetType.earning: {
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="icon" />,
      };
      break;
    }
    case WidgetType.balance: {
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlined className="icon" />,
      };
      break;
    }

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link} </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
