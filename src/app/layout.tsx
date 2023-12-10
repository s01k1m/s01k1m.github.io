import '../app/styles/globals.css'
import { Provider } from 'src/components/Provider'
import Container from 'src/components/Container'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <html lang="en">
        <body>
          <Container>{children}</Container>
        </body>
      </html>
    </Provider>
  )
}
