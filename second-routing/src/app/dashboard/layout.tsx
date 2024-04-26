
export default function RootLayout({
  children,
  user,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    
        <div className="relative left-20 top-10">
        {children}
        <div className="flex">
        <div className="flex flex-col">
            {user}
            {revenue}
        </div>
        <div className=" flex-1 flex">
            {notifications}
        </div>
        </div>
        </div>
      </body>
    </html>
  );
}