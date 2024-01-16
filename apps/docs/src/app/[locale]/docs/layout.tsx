export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto w-full max-w-7xl flex-1">{children}</main>;
}
