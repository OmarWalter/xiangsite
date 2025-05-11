"use client";
import { useRouter } from 'next/navigation';
import SignupModal from '../../modals/SignUpModal';

export default function SignupPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redirect to home or previous page
  };

  return <SignupModal isOpen={true} onClose={handleClose} />;
}