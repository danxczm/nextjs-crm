'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import Button from './Button';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'));

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
