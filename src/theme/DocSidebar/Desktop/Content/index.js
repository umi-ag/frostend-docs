import React, { useState } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import {
  useAnnouncementBar,
  useScrollPosition,
} from "@docusaurus/theme-common/internal";
import SearchBar from "@theme/SearchBar";
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import Link from "@docusaurus/Link";
import DocSidebarItems from "@theme/DocSidebarItems";
import frostendLogo from "../../../../../static/img/logo-title.png";
import styles from "./styles.module.css";
function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return (
    <nav
      className={clsx(
        "menu thin-scrollbar",
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className
      )}
    >
      <Link to="/Home">
        <img src={frostendLogo} className={styles.logo} />
      </Link>
      <SearchBar />
      <LocaleDropdownNavbarItem className={clsx(styles.LocalDropdown)} />
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, styles.menu__margin, "menu__list")}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
