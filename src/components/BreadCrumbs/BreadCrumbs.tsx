import { Breadcrumbs, Anchor } from '@mantine/core';
import classes from './BreadCrumbs.module.css';
interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadCrumbsProps {
  items: BreadcrumbItem[];
}

export default function BreadCrumbs({ items }: BreadCrumbsProps) {
  const breadcrumbItems = items.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Breadcrumbs className={classes.breadCrumbs} separator="›" separatorMargin="md" mt="xs">
      {breadcrumbItems}
    </Breadcrumbs>
  );
}
