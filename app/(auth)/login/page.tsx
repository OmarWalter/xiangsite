"use client";

import { useRouter } from 'next/navigation';
import LoginModal from '../../modals/LoginModal';

export default function LoginPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redirect to home or previous page
  };

  return <LoginModal isOpen={true} onClose={handleClose} />;
}