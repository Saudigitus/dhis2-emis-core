/* eslint-disable react/prop-types */
import { Box, Card } from "@dhis2/ui";
import React from "react";
import style from "./card.module.css";
import { Divider, IconButton, Tooltip } from "@material-ui/core";
import { Add, InfoOutlined, Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

interface CardProps {
  icon: string
  title: string
  leftLabel: string
  value: string
  program: string
  formLink: string
  listLink: string
  disabled?: boolean
}

export default function DashboardCard(props: CardProps): React.ReactElement {
  const { icon, title, value, formLink, listLink, leftLabel, disabled } = props;

  return (
    <Box height="245px" width="200px">
      <Card className={style.cardContainer}>
        <div className={style.cardHeader}>
          <img src={icon} />
        </div>
        <div className={style.cardTitle}>{title}</div>
        <Divider />
        <div className={style.cardStatistics}>
          <strong className={style.cardTotalLabel}>{leftLabel}</strong>
          <div className={style.cardStatisticsTotal}>
            <span className={style.cardStatisticsTotalValue}>{value}</span>
            <Tooltip title={`Info`}>
              <IconButton size="small" className={style.cardInfoIcon}>
                <InfoOutlined fontSize="small"/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Divider />
        <div className={style.cardActions}>
          <NavLink to={formLink} className={(disabled === true) && style.disabledLink}>
            <Tooltip title={`Add ${title}`}>
              <IconButton size="small" disabled={disabled}>
                <Add />
              </IconButton>
            </Tooltip>
          </NavLink>
          &nbsp;
          <NavLink to={listLink}className={(disabled === true) && style.disabledLink}>
            <Tooltip title={`List ${title}`}>
                <IconButton size="small" disabled={disabled}>
                  <Menu />
                </IconButton>
            </Tooltip>
          </NavLink>
        </div>
      </Card>
    </Box>
  );
}
