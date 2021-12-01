import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MetaplexDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="ipc-solana"
            content="ipc-solana"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="eden/logo2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="eden/logo2.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="eden/logo2.png"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="IPC Solana" />
          <link rel="manifest" href="eden/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
