import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ShopifyRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://arciniegadev.myshopify.com/';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to Shopify store...</p>
    </div>
  );
}
