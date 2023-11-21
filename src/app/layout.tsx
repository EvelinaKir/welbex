import type {Metadata} from 'next'


export const metadata: Metadata = {
    title: 'WELBEX',
    description: 'Развиваем и контролируем продажи за вас',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={`bg-primary`}>
        {children}
        </body>
        </html>
    )
}
