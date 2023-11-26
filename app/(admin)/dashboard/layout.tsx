export default function Layout({
  children,
  product,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div className="p-5">
        <div>{children}</div>
        <div className="flex mt-5 gap-4 w-full justify-center items-center">
          {product}
          {analytics}
        </div>
        {payments}
      </div>
    </>
  );
}
