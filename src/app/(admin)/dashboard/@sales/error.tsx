'use client';

import React from 'react';

type ErrorComponentProps = {
  error: Error;
};

function ErrorComponent({}: ErrorComponentProps) {
  return <div>Error appeard in sales info</div>;
}

export default ErrorComponent;
