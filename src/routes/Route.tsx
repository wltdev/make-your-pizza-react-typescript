import React from 'react';
import DefaultLayout from '../layouts/index'

type RouteWrapperType = {
  component: React.FC | React.ElementType
  exact?: boolean
  path: string
  title: string
};

export default function RouteWrapper({
  component: Component,
  path,
  title,
  ...rest
}: RouteWrapperType) {
  return (
    <DefaultLayout title={title}>
      <Component {...rest} />
    </DefaultLayout>
  );
}