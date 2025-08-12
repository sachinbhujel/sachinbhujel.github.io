export default function RootLayout({ children }) {
    return ( <div className="prose md:w-[700px] w-[100%] max-w-none">
                    {children}
                </div>
    );
}