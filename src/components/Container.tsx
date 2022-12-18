export function Container({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className={`m-auto w-full ${classNames}`}>
      {children}
    </div>
  );
}
